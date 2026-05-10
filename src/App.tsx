import React, { useState, useEffect, useCallback } from 'react';
import * as KaTeX from 'react-katex';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, HelpCircle } from 'lucide-react';
import { rawQuestions } from './data/questions';
import { shuffleArray } from './utils/shuffle';
import { Question } from './types';
import 'katex/dist/katex.min.css';

const MathText: React.FC<{ text: string }> = ({ text }) => {
  if (!text) return null;
  const parts = text.split(/(\$.*?\$)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('$') && part.endsWith('$')) {
          return <KaTeX.InlineMath key={index} math={part.slice(1, -1)} />;
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

  const startSession = useCallback(() => {
    const sessionBatch = shuffleArray([...rawQuestions]).slice(0, 20).map(q => ({
      ...q,
      options: shuffleArray([...q.options])
    }));
    setQuestions(sessionBatch);
    setCurrentIdx(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsFinished(false);
  }, []);

  useEffect(() => { startSession(); }, [startSession]);

  if (questions.length === 0) return <div className="flex h-screen items-center justify-center">Loading...</div>;

  const currentQ = questions[currentIdx];

  const handleSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);
    if (option === currentQ.correctAnswer) setScore(s => s + 1);
  };

  if (isFinished) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Complete</h2>
          <div className="text-6xl font-black mb-6">{Math.round((score / questions.length) * 100)}%</div>
          <button onClick={startSession} className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800">
            <RotateCcw size={20} /> Restart Exam
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <header className="flex justify-between items-center text-sm font-bold text-slate-400 uppercase tracking-widest">
          <span>Question {currentIdx + 1} / {questions.length}</span>
          <span>Score: {score}</span>
        </header>

        <main className="bg-white rounded-[2rem] shadow-sm border border-slate-200 p-8 sm:p-12 space-y-8">
          <div className="text-2xl font-semibold leading-relaxed text-slate-900">
            <MathText text={currentQ.question} />
          </div>

          <div className="grid gap-3">
            {currentQ.options.map((option, idx) => {
              const isCorrect = option === currentQ.correctAnswer;
              const isSelected = selectedAnswer === option;
              let style = "border-slate-100 hover:border-slate-300";
              
              if (isAnswered) {
                if (isCorrect) style = "border-emerald-500 bg-emerald-50 text-emerald-900";
                else if (isSelected) style = "border-rose-500 bg-rose-50 text-rose-900";
                else style = "opacity-40 border-slate-50";
              }

              return (
                <button key={idx} onClick={() => handleSelect(option)} disabled={isAnswered} className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center justify-between ${style}`}>
                  <span className="text-lg font-medium"><MathText text={option} /></span>
                  {isAnswered && isCorrect && <CheckCircle2 className="text-emerald-600" size={22} />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="text-rose-600" size={22} />}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="space-y-6 pt-4 animate-in fade-in slide-in-from-top-2">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-400 mb-2">
                  <HelpCircle size={14} /> Explanation
                </div>
                <p className="text-slate-600 leading-relaxed"><MathText text={currentQ.explanation} /></p>
              </div>
              <button onClick={() => (currentIdx + 1 < questions.length ? setCurrentIdx(i => i + 1) || setSelectedAnswer(null) || setIsAnswered(false) : setIsFinished(true))} className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 shadow-lg">
                Next Question <ArrowRight size={20} />
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
