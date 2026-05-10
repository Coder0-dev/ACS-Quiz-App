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
    // Shuffles the whole pool, takes 20, and shuffles their options
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

  useEffect(() => { 
    startSession(); 
  }, [startSession]);

  const handleSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);
    if (option === questions[currentIdx].correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  if (questions.length === 0) {
    return <div className="flex h-screen items-center justify-center font-sans text-slate-500">Loading Exam...</div>;
  }

  const currentQ = questions[currentIdx];

  if (isFinished) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6 font-sans">
        <div className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-200 text-center">
          <h2 className="text-2xl font-bold mb-2">Quiz Complete</h2>
          <div className="text-7xl font-black mb-6 text-slate-900 leading-none">
            {Math.round((score / questions.length) * 100)}%
          </div>
          <p className="text-slate-500 mb-8 font-medium">You got {score} out of {questions.length} correct</p>
          <button 
            onClick={startSession} 
            className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-transform active:scale-95"
          >
            <RotateCcw size={20} /> Restart Exam
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 font-sans text-slate-900">
      <div className="max-w-2xl mx-auto space-y-8">
        <header className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
          <span>Question {currentIdx + 1} / {questions.length}</span>
          <span className="bg-white px-3 py-1 rounded-full border border-slate-200 text-slate-900">Score: {score}</span>
        </header>

        <main className="bg-white rounded-[2.5rem] shadow-sm border border-slate-200 p-8 sm:p-12 space-y-10">
          <div className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-slate-900">
            <MathText text={currentQ.question} />
          </div>

          <div className="grid gap-3">
            {currentQ.options.map((option, idx) => {
              const isCorrect = option === currentQ.correctAnswer;
              const isSelected = selectedAnswer === option;
              let style = "border-slate-100 bg-white text-slate-700 hover:border-slate-300";
              
              if (isAnswered) {
                if (isCorrect) style = "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm";
                else if (isSelected) style = "border-rose-500 bg-rose-50 text-rose-900";
                else style = "opacity-40 border-slate-50 grayscale";
              }

              return (
                <button 
                  key={idx} 
                  onClick={() => handleSelect(option)} 
                  disabled={isAnswered} 
                  className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center justify-between font-medium ${style}`}
                >
                  <span className="text-lg"><MathText text={option} /></span>
                  {isAnswered && isCorrect && <CheckCircle2 className="text-emerald-600" size={22} />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="text-rose-600" size={22} />}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="p-7 bg-slate-50 rounded-[2rem] border border-slate-100">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400 mb-3 tracking-widest">
                  <HelpCircle size={14} /> Explanation
                </div>
                <div className="text-slate-600 leading-relaxed text-lg italic">
                  <MathText text={currentQ.explanation} />
                </div>
              </div>
              <button 
                onClick={handleNext} 
                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-2 hover:bg-slate-800 shadow-xl transition-transform active:scale-95"
              >
                {currentIdx + 1 === questions.length ? "See Final Score" : "Next Question"} 
                <ArrowRight size={22} />
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
