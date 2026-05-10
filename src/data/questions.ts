import { Question } from '../types';

export const rawQuestions: Question[] = [
  // --- FROM CHEM 131 FINAL REVIEW ---
  {
    id: "1",
    question: "How many sulfur atoms are in 3.00 g of iron pyrite, $FeS_2$ ($M = 120.0\\text{ g/mol}$)?",
    options: ["$7.53 \\times 10^{21}$", "$1.51 \\times 10^{22}$", "$3.01 \\times 10^{22}$", "$6.02 \\times 10^{23}$"],
    correctAnswer: "$3.01 \\times 10^{22}$",
    explanation: "3.00g / 120.0g/mol = 0.025 mol $FeS_2$. Each mole has 2 moles of S atoms. $0.025 \\times 2 \\times 6.022 \\times 10^{23} = 3.01 \\times 10^{22}$." [cite: 57, 58, 59]
  },
  {
    id: "2",
    question: "1.000 g of a transition metal carbonate, $MCO_3$, is heated to produce the metal oxide and 0.383 g of $CO_2$. What is the identity of metal M?",
    options: ["Mn", "Ni", "Cu", "Zn"],
    correctAnswer: "Mn",
    explanation: "$0.383\\text{g } CO_2 / 44.01\\text{g/mol} = 0.00870\\text{ mol}$. Molar mass of $MCO_3 = 1.000\\text{g} / 0.00870\\text{mol} = 114.9\\text{g/mol}$. $M = 114.9 - 60 (CO_3) = 54.9$ (Manganese)." [cite: 70, 71, 72]
  },
  {
    id: "3",
    question: "Which subatomic particles reside in the atomic nucleus?",
    options: ["Protons and electrons", "Electrons and neutrons", "Protons and neutrons", "Neutrons only"],
    correctAnswer: "Protons and neutrons",
    explanation: "The nucleus contains the bulk of the atom's mass, consisting of protons and neutrons. Electrons occupy the cloud surrounding the nucleus." [cite: 80, 81, 82, 93]
  },
  {
    id: "4",
    question: "What species is represented by $p^+ = 12, n^0 = 14, e^- = 10$?",
    options: ["Ne", "Si", "Mg", "$Mg^{2+}$"],
    correctAnswer: "$Mg^{2+}$",
    explanation: "12 protons define Magnesium. 10 electrons (2 fewer than protons) indicate a $+2$ charge." [cite: 60, 61, 62, 63, 66]
  },
  {
    id: "5",
    question: "What is the chemical formula of Hydrosulfuric Acid?",
    options: ["$H_2SO_{4(aq)}$", "$H_2SO_{3(aq)}$", "$H_2S_{(aq)}$", "$H_2S_2O_{4(aq)}$"],
    correctAnswer: "$H_2S_{(aq)}$",
    explanation: "Binary acids use the 'hydro-' prefix and '-ic' suffix. $H_2S$ in aqueous solution is hydrosulfuric acid." [cite: 67, 68, 69]
  },
  // --- FROM UNOFFICIAL ACS PRACTICE TEST 1A ---
  {
    id: "6",
    question: "According to the Lewis definition, an acid is a species that:",
    options: ["Donates a proton", "Accepts a pair of electrons", "Donates a pair of electrons", "Accepts a proton"],
    correctAnswer: "Accepts a pair of electrons",
    explanation: "Lewis acids are defined by their ability to accept an electron pair to form a coordinate covalent bond." [cite: 525, 529, 530]
  },
  {
    id: "7",
    question: "Which hydrated metal ion is most acidic under conditions of equal molar concentration in water?",
    options: ["$Al^{3+}$", "$Ba^{2+}$", "$K^+$", "$Zn^{2+}$", "$Ag^+$"],
    correctAnswer: "$Al^{3+}$",
    explanation: "High charge density (high charge, small radius) increases the acidity of hydrated metal ions by polarizing the $O-H$ bond of water." [cite: 534, 536, 540]
  },
  {
    id: "8",
    question: "Which element in Group 5A forms the most basic oxide?",
    options: ["N", "P", "As", "Sb", "Bi"],
    correctAnswer: "Bi",
    explanation: "Basicity of oxides increases down a group as the metallic character of the elements increases." [cite: 541, 544, 549]
  },
  {
    id: "9",
    question: "In what respect does an atom of magnesium differ from a magnesium ion ($Mg^{2+}$)?",
    options: ["The ion has a more stable electronic arrangement", "The ion has 2 more protons", "The ion has a larger radius", "The ion reacts more readily with $Cl_2$"],
    correctAnswer: "The ion has a more stable electronic arrangement",
    explanation: "The $Mg^{2+}$ ion has a full octet (noble gas configuration), which is significantly more stable than the $3s^2$ valence shell of the atom." [cite: 551, 552]
  },
  {
    id: "10",
    question: "The nucleus of which atom contains seven neutrons?",
    options: ["Atom A ($M=24, Z=12$)", "Atom B ($M=15, Z=7$)", "Atom C ($M=17, Z=10$)", "Atom D ($M=7, Z=3$)"],
    correctAnswer: "Atom C ($M=17, Z=10$)",
    explanation: "Neutrons = Mass Number (M) - Atomic Number (Z). For Atom C: $17 - 10 = 7$." [cite: 583, 592, 595, 618]
  }
  // ... adding 490 more questions to the object ...
];
