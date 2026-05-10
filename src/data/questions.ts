import { Question } from '../types';

export const rawQuestions: Question[] = [
  {
    id: "q1",
    question: "What is the equilibrium constant expression ($K_c$) for the Haber process: $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g)$?",
    options: [
      "$K_c = \\frac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3}$",
      "$K_c = \\frac{[\\text{N}_2][\\text{H}_2]^3}{[\\text{NH}_3]^2}$",
      "$K_c = \\frac{2[\\text{NH}_3]}{[\\text{N}_2] + 3[\\text{H}_2]}$",
      "$K_c = [\\text{NH}_3]^2 - ([\\text{N}_2] + [\\text{H}_2]^3)$"
    ],
    correctAnswer: "$K_c = \\frac{[\\text{NH}_3]^2}{[\\text{N}_2][\\text{H}_2]^3}$",
    explanation: "The equilibrium constant $K_c$ is the ratio of product concentrations to reactant concentrations, each raised to the power of their stoichiometric coefficients."
  },
  {
    id: "q2",
    question: "Calculate the pH of a $0.01\\text{ M}$ solution of HCl.",
    options: ["$2.0$", "$1.0$", "$12.0$", "$14.0$"],
    correctAnswer: "$2.0$",
    explanation: "HCl is a strong acid and dissociates completely. $\\text{pH} = -\\log_{10}[\\text{H}^+]$. Here, $[\\text{H}^+] = 0.01\\text{ M}$, so $\\text{pH} = -\\log_{10}(10^{-2}) = 2.0$."
  }
];