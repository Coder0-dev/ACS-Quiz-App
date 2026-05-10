import React, { useState, useEffect, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import InlineMath from '@matejmazur/react-katex'; // We'll build a small wrapper below
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, HelpCircle } from 'lucide-react';
import { Question } from './types';
import { rawQuestions } from './data/questions';
import { shuffleArray } from './utils/shuffle';
import 'katex/dist/katex.min.css';

// Custom lightweight wrapper for KaTeX to handle inline strings safely
const MathText = ({ text }: { text: string }) => {
  // Simple regex to extract latex wrapped in $...$
  const parts = text.split(/(\$.*?\$)/g);
  return (
    <span>
      {parts.map((part, index) => {
        if (part.startsWith('$') && part.endsWith('$')) {
          // Render as KaTeX
          return <InlineMath key="{index}" math="{part.slice(1," -1)}/>;
        }
        // Render as normal text
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};

export default function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Initialize and randomize session
  const startSession = () => {
    const shuffledQuestions = shuffleArray(rawQuestions).map(q => ({
      ...q,
      options: shuffleArray(q.options) // Shuffle options for each question
    }));
    setQuestions(shuffledQuestions);
    setCurrentIdx(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsFinished(false);
  };

  useEffect(() => {
    startSession();
  }, []);

  if (questions.length === 0) return null;

  const currentQ = questions[currentIdx];
  const progress = ((currentIdx) / questions.length) * 100;

  const handleSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);
    
    if (option === currentQ.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Quiz Complete</h2>
          <div className="text-6xl font-black text-slate-800">
            {Math.round((score / questions.length) * 100)}%
          </div>
          <p className="text-slate-500">You scored {score} out of {questions.length}</p>
          <button 
            onClick={startSession}
            className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors"
          >
            <RotateCcw size="{18}"/> Restart Session
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6">
      <div className="max-w-2xl w-full space-y-8">
        
        
        <header className="space-y-4">
          <div className="flex justify-between items-center text-sm font-medium text-slate-500">
            <span>Question {currentIdx + 1} of {questions.length}</span>
            <span>Score: {score}</span>
          </div>
          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-slate-900 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </header>

        
        <main className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8">
          <h1 className="text-xl sm:text-2xl font-semibold text-slate-900 leading-relaxed">
            <MathText text="{currentQ.question}"/>
          </h1>

          <div className="space-y-3">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQ.correctAnswer;
              
              let stateStyles = "border-slate-200 hover:border-slate-400 bg-white text-slate-700";
              
              if (isAnswered) {
                if (isCorrect) stateStyles = "border-emerald-500 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-500";
                else if (isSelected && !isCorrect) stateStyles = "border-rose-500 bg-rose-50 text-rose-900";
                else stateStyles = "border-slate-100 bg-slate-50 text-slate-400 opacity-60";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(option)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${stateStyles}`}
                >
                  <span className="text-lg">
                    <MathText text="{option}"/>
                  </span>
                  {isAnswered && isCorrect && <CheckCircle2 className="text-emerald-500" size="{20}"/>}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="text-rose-500" size="{20}"/>}
                </button>
              );
            })}
          </div>

          
          {isAnswered && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 space-y-3">
                <div className="flex items-center gap-2 font-semibold text-slate-700">
                  <HelpCircle size="{18}"/>
                  <h3>Explanation</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  <MathText text="{currentQ.explanation}"/>
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={nextQuestion}
                  className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors"
                >
                  Next Question <ArrowRight size="{18}"/>
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}