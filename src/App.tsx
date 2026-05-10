import React, { useState, useEffect, useCallback } from 'react';
import * as KaTeX from 'react-katex';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, HelpCircle, GraduationCap } from 'lucide-react';
import { rawQuestions } from './data/questions';
import { shuffleArray } from './utils/shuffle';
import { Question } from './types';
import 'katex/dist/katex.min.css';

/**
 * MathText Component
 * Correctly parses $ LaTeX $ blocks and renders them using KaTeX.
 */
const MathText: React.FC<{ text: string }> = ({ text }) => {
  if (!text) return null;
  const parts = text.split(/(\$.*?\$)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('$') && part.endsWith('$')) {
          const math = part.slice(1, -1);
          return <KaTeX.InlineMath key={index} math={math} />;
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
};

export default function App() {
  // --- State ---
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  /**
   * startSession
   * Selects 20 random questions from the pool and shuffles their options.
   */
  const startSession = useCallback(() => {
    // 1. Shuffle the entire 500+ question pool
    const shuffledPool = shuffleArray([...rawQuestions]);
    
    // 2. Take the first 20 unique questions
    const sessionBatch = shuffledPool.slice(0, 20).map(q => ({
      ...q,
      // 3. Shuffle the options for this specific session
      options: shuffleArray([...q.options])
    }));

    setQuestions(sessionBatch);
    setCurrentIdx(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsFinished(false);
  }, []);

  // Initialize the quiz on mount
  useEffect(() => {
    startSession();
  }, [startSession]);

  // --- Handlers ---
  const handleSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);
    if (option === questions[currentIdx].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  // --- Render States ---

  // Loading State
  if (questions.length === 0) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-slate-50 font-sans text-slate-500">
        <div className="animate-pulse text-xl font-medium">Initializing ACS Exam Engine...</div>
      </div>
    );
  }

  const currentQ = questions[currentIdx];
  const progress = (currentIdx / questions.length) * 100;

  // Finished State
  if (isFinished) {
    const finalPercentage = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50 font-sans text-slate-900">
        <div className="max-w-md w-full bg-white p-10 rounded-3xl border border-slate-200 shadow-xl text-center">
          <div className="inline-flex p-4 bg-slate-900 text-white rounded-2xl mb-6">
            <GraduationCap size={32} />
          </div>
          <h2 className="text-3xl font-bold mb-2">Quiz Results</h2>
          <div className="text-7xl font-black mb-4 text-slate-900 tracking-tighter">
            {finalPercentage}%
          </div>
          <div className="flex justify-center gap-4 mb-8 text-sm font-bold uppercase tracking-widest text-slate-400">
            <span>Correct: {score}</span>
            <span>Total: {questions.length}</span>
          </div>
          <button 
            onClick={startSession} 
            className="w-full flex items-center justify-center gap-3 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg active:scale-95"
          >
            <RotateCcw size={20} /> Try Another Set
          </button>
        </div>
      </div>
    );
  }

  // Active Quiz State
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 font-sans text-slate-900">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header/Progress */}
        <header className="space-y-4">
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <h1 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">ACS General Chemistry</h1>
              <div className="text-lg font-bold">Question {currentIdx + 1} of {questions.length}</div>
            </div>
            <div className="text-sm font-black text-slate-900 bg-white px-3 py-1 rounded-lg border border-slate-200">
              Score: {score}
            </div>
          </div>
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-slate-900 transition-all duration-700 ease-out" 
              style={{ width: `${progress}%` }} 
            />
          </div>
        </header>

        {/* Main Card */}
        <main className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-8 sm:p-12 space-y-10">
          {/* Question Text */}
          <div className="text-2xl sm:text-3xl font-semibold leading-[1.4] tracking-tight text-slate-900">
            <MathText text={currentQ.question} />
          </div>

          {/* Options Grid */}
          <div className="grid gap-4">
            {currentQ.options.map((option, idx) => {
              const isCorrect = option === currentQ.correctAnswer;
              const isSelected = selectedAnswer === option;
              
              let btnClass = "border-slate-100 bg-white text-slate-700 hover:border-slate-400 hover:shadow-md";
              
              if (isAnswered) {
                if (isCorrect) {
                  btnClass = "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-sm ring-1 ring-emerald-500";
                } else if (isSelected) {
                  btnClass = "border-rose-500 bg-rose-50 text-rose-900 ring-1 ring-rose-500";
                } else {
                  btnClass = "border-slate-50 bg-slate-50 text-slate-300 opacity-60";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(option)}
                  disabled={isAnswered}
                  className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between group ${btnClass}`}
                >
                  <span className="text-xl font-medium">
                    <MathText text={option} />
                  </span>
                  {isAnswered && isCorrect && <CheckCircle2 className="text-emerald-600 shrink-0" size={24} />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="text-rose-600 shrink-0" size={24} />}
                </button>
              );
            })}
          </div>

          {/* Feedback/Explanation Area */}
          {isAnswered && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-500 space-y-8">
              <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 relative overflow-hidden">
                <div className="flex items-center gap-2 font-black uppercase tracking-widest text-[10px] text-slate-400 mb-3">
                  <HelpCircle size={14} /> Explanation
                </div>
                <div className="text-slate-600 leading-relaxed text-lg">
                  <MathText text={currentQ.explanation} />
                </div>
              </div>
              
              <button 
                onClick={nextQuestion} 
                className="w-full flex items-center justify-center gap-3 bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all shadow-xl active:scale-95"
              >
                {currentIdx + 1 === questions.length ? "Finish Quiz" : "Continue"} <ArrowRight size={22} />
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
