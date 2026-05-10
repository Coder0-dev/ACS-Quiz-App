import { Question } from '../types';

export const rawQuestions: Question[] = [
  {
    id: "acs-001",
    question: `How many sulfur atoms are in 3.00 g of iron pyrite, $FeS_{2}$ ($M=120.0~g/mol$)?`,
    options: [`$7.53\\times10^{21}$`, `$1.51\\times10^{22}$`, `$3.01\\times10^{22}$`, `$6.02\\times10^{23}$`],
    correctAnswer: `$3.01\\times10^{22}$`,
    explanation: `First find moles of $FeS_{2}$: $3.00g / 120.0g/mol = 0.025 mol$. Since each formula unit has 2 S atoms, there are 0.050 moles of S. $0.050 \\times 6.022\\times10^{23} = 3.01\\times10^{22}$ atoms.`
  },
  {
    id: "acs-002",
    question: `What species is represented by $p^{+}=12, n^{\\circ}=14, e^{-}=10$?`,
    options: [`Ne`, `Si`, `Mg`, `$Mg^{2+}$`],
    correctAnswer: `$Mg^{2+}$`,
    explanation: `An atomic number of 12 identifies the element as Magnesium (Mg). With 10 electrons and 12 protons, the net charge is +2.`
  },
  {
    id: "acs-003",
    question: `What is the chemical formula of Hydrosulfuric Acid?`,
    options: [`$H_{2}SO_{4(aq)}$`, `$H_{2}SO_{3(aq)}$`, `$H_{2}S_{(aq)}$`, `$H_{2}S_{2}O_{4(aq)}$`],
    correctAnswer: `$H_{2}S_{(aq)}$`,
    explanation: `The 'hydro-' prefix and '-ic' suffix for a binary acid indicate it is formed from the element sulfur: $H_{2}S$.`
  },
  {
    id: "acs-004",
    question: `Which pair of elements would you expect to exhibit the greatest similarity in their physical and chemical properties?`,
    options: [`O, S`, `C, N`, `K, Ca`, `H, He`],
    correctAnswer: `O, S`,
    explanation: `Elements in the same group (vertical column) have similar properties because they have the same number of valence electrons. Oxygen and Sulfur are both in Group 16.`
  },
  {
    id: "acs-005",
    question: `According to the Lewis definition, an acid is a species that:`,
    options: [`Donates a hydrogen ion`, `Accepts a hydrogen ion`, `Accepts a pair of electrons`, `Donates a pair of electrons`],
    correctAnswer: `Accepts a pair of electrons`,
    explanation: `Lewis acids are electron-pair acceptors; Lewis bases are electron-pair donors.`
  },
  {
    id: "acs-006",
    question: `Which hydrated metal ion is most acidic under conditions of equal molar concentration in water?`,
    options: [`$Al^{3+}$`, `$Ba^{2+}$`, `$K^{+}$`, `$Zn^{2+}$`],
    correctAnswer: `$Al^{3+}$`,
    explanation: `Acidity of metal ions increases with higher charge and smaller ionic radius. $Al^{3+}$ has the highest charge-to-size ratio here.`
  },
  {
    id: "acs-007",
    question: `In what respect does an atom of magnesium differ from a magnesium ion ($Mg^{2+}$)?`,
    options: [`The ion has more protons`, `The ion has a more stable electronic arrangement`, `The nuclear charge is different`, `The ion has more planetary electrons`],
    correctAnswer: `The ion has a more stable electronic arrangement`,
    explanation: `The $Mg^{2+}$ ion has a noble gas configuration ([Ne]), which is more stable than the atom's [Ne]$3s^2$ configuration.`
  },
  {
    id: "acs-008",
    question: `The atomic mass of an element is 32.07 u and its atomic number is 16. How many protons are in the nucleus?`,
    options: [`16`, `31`, `32`, `48`],
    correctAnswer: `16`,
    explanation: `The atomic number (Z) is by definition the number of protons in the nucleus.`
  },
  {
    id: "acs-009",
    question: `Which chloride should exhibit the most covalent type of bond?`,
    options: [`NaCl`, `KCl`, `$CaCl_{2}$`, `$BeCl_{2}$`],
    correctAnswer: `$BeCl_{2}$`,
    explanation: `Covalent character increases as the electronegativity difference decreases. Beryllium is the least metallic/most electronegative cation here.`
  },
  {
    id: "acs-010",
    question: `Which principle restricts the occupancy of an atomic orbital to no more than two electrons?`,
    options: [`Conservation of Energy`, `Pauli Exclusion Principle`, `Heisenberg Uncertainty Principle`, `Hund's Rule`],
    correctAnswer: `Pauli Exclusion Principle`,
    explanation: `The Pauli Exclusion Principle states that no two electrons in an atom can have the same four quantum numbers, limiting orbitals to two electrons with opposite spins.`
  }
];
