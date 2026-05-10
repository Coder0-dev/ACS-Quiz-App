export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string; // Must exactly match the string in the options array
  explanation: string;
}