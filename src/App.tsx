import React, { useState, useEffect } from 'react';
import InlineMath from 'react-katex'; 
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, HelpCircle } from 'lucide-react';
import { rawQuestions } from './data/questions';
import { shuffleArray } from './utils/shuffle';
import { Question } from './types';
import 'katex/dist/katex.min.css';

// Component to handle the parsing of $ LaTeX $ inside strings
const MathText: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(\$.*?\$)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('$') && part.endsWith('$')) {
          return <InlineMath key={index} math={part.slice(1, -1)} />;
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
};

export default function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const startSession = () => {
    const shuffled = shuffleArray(rawQuestions).map(q => ({
      ...q,
      options: shuffleArray([...q.options])
    }));
    setQuestions(shuffled);
    setCurrentIdx(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsFinished(false);
  };

  useEffect(() => {
    startSession();
  }, []);

  if (questions.length === 0) return <div className="p-10 text-center">Loading Session...</div>;

  const currentQ = questions[currentIdx];
  const progress = ((currentIdx) / questions.length) * 100;

  const handleSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);
    if (option === currentQ.correctAnswer) setScore(s => s + 1);
  };

  const nextQuestion = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(i => i + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50 font-sans">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Quiz Complete</h2>
          <div className="text-5xl font-black text-slate-800 mb-2">
            {Math.round((score / questions.length) * 100)}%
          </div>
          <p className="text-slate-500 mb-8">Correct: {score} / {questions.length}</p>
          <button onClick={startSession} className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-xl font-medium hover:bg-slate-800 transition-all">
            <RotateCcw size={18} /> Restart
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 font-sans">
      <div className="max-w-2xl mx-auto space-y-8">
        <header className="space-y-4">
          <div className="flex justify-between text-sm font-semibold text-slate-500">
            <span>Question {currentIdx + 1} of {questions.length}</span>
            <span>Score: {score}</span>
          </div>
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-slate-900 transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </header>

        <main className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="text-xl sm:text-2xl font-semibold text-slate-900 leading-relaxed mb-8">
            <MathText text={currentQ.question} />
          </div>

          <div className="grid gap-3">
            {currentQ.options.map((option, idx) => {
              const isCorrect = option === currentQ.correctAnswer;
              const isSelected = selectedAnswer === option;
              let btnClass = "border-slate-200 hover:border-slate-400 text-slate-700";
              
              if (isAnswered) {
                if (isCorrect) btnClass = "border-emerald-500 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-500";
                else if (isSelected) btnClass = "border-rose-500 bg-rose-50 text-rose-900";
                else btnClass = "border-slate-100 bg-slate-50 text-slate-300 opacity-60";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(option)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ${btnClass}`}
                >
                  <span className="text-lg"><MathText text={option} /></span>
                  {isAnswered && isCorrect && <CheckCircle2 className="text-emerald-600" size={20} />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="text-rose-600" size={20} />}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="mt-8 pt-8 border-t border-slate-100 space-y-6">
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-2 font-bold text-slate-800 mb-2">
                  <HelpCircle size={18} className="text-slate-400" /> Explanation
                </div>
                <p className="text-slate-600"><MathText text={currentQ.explanation} /></p>
              </div>
              <button onClick={nextQuestion} className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg">
                Next Question <ArrowRight size={20} />
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}