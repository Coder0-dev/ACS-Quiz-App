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
  {
    id: "acs-021",
    question: `A sample of He gas (3.0 L) at 5.6 atm and $25^{\\circ}C$ was combined with 4.5 L of Ne gas at 3.6 atm and $25^{\\circ}C$ at constant temperature in a 9.0 L flask. The total pressure is:`,
    options: [`2.6 atm`, `9.2 atm`, `1.0 atm`, `3.7 atm`],
    correctAnswer: `3.7 atm`,
    explanation: `Use Boyle's Law ($P_1V_1 = P_2V_2$) for each gas. He: $P_2 = (5.6)(3.0)/9.0 = 1.87$ atm. Ne: $P_2 = (3.6)(4.5)/9.0 = 1.80$ atm. Total Pressure = $1.87 + 1.80 = 3.67 \\approx 3.7$ atm.`
  },
  {
    id: "acs-022",
    question: `The density of air at STP is $1.285~g/L$. Which of the following cannot be used to fill a balloon that will float in air at STP?`,
    options: [`$CH_4$`, `NO`, `$NH_3$`, `HF`],
    correctAnswer: `NO`,
    explanation: `To float, the gas must have a density lower than air ($< 1.285~g/L$). At STP, 1 mole = 22.4 L. Molar mass of air $\\approx 28.8~g/mol$. Molar mass of NO is $30.01~g/mol$, making it denser than air.`
  },
  {
    id: "acs-023",
    question: `Of the following, which is a correct statement of Boyle's law?`,
    options: [`$(P/V) = \\text{constant}$`, `$(V/P) = \\text{constant}$`, `$(V/T) = \\text{constant}$`, `$PV = \\text{constant}$`],
    correctAnswer: `$PV = \\text{constant}$`,
    explanation: `Boyle's Law states that at a constant temperature, the volume of a fixed mass of gas is inversely proportional to its pressure: $P \\times V = k$.`
  },
  {
    id: "acs-024",
    question: `An ideal gas differs from a real gas in that the molecules of an ideal gas:`,
    options: [`Have a molecular weight of zero`, `Have appreciable molecular volumes`, `Have no attraction for one another`, `Have no kinetic energy`],
    correctAnswer: `Have no attraction for one another`,
    explanation: `The Kinetic Molecular Theory for ideal gases assumes that gas particles have negligible volume and exert no attractive or repulsive forces on each other.`
  },
  {
    id: "acs-025",
    question: `Given the reactions: (1) $2NO \\rightarrow N_2 + O_2$ ($\\Delta H = -180~kJ$) and (2) $2NO + O_2 \\rightarrow 2NO_2$ ($\\Delta H = -112~kJ$), what is the enthalpy of the reaction $N_2 + 2O_2 \\rightarrow 2NO_2$?`,
    options: [`-292 kJ`, `292 kJ`, `-68 kJ`, `68 kJ`],
    correctAnswer: `68 kJ`,
    explanation: `Reverse reaction (1): $N_2 + O_2 \\rightarrow 2NO$ ($\\Delta H = +180~kJ$). Add to reaction (2): $2NO + O_2 \\rightarrow 2NO_2$ ($\\Delta H = -112~kJ$). Sum: $180 + (-112) = +68~kJ$.`
  },
  {
    id: "acs-026",
    question: `Photons of what wavelength of light have an energy of $1.00\\times10^3~kJ\\cdot mol^{-1}$?`,
    options: [`$2.00\\times10^{31}~m$`, `$1.20\\times10^{-7}~m$`, `$1.20\\times10^{-4}~m$`, `$8.36\\times10^6~m$`],
    correctAnswer: `$1.20\\times10^{-7}~m$`,
    explanation: `Energy per photon $= 1000~kJ / 6.022\\times10^{23} = 1.66\\times10^{-21}~J$. Using $E = hc/\\lambda$, $\\lambda = (6.626\\times10^{-34})(3.00\\times10^8) / 1.66\\times10^{-21} = 1.20\\times10^{-7}~m$.`
  },
  {
    id: "acs-027",
    question: `Which is a possible set of quantum numbers $n, l, m_l$, and $m_s$ for a valence electron of sulfur (S)?`,
    options: [`3, 2, 2, 1/2`, `3, 1, -1, 1/2`, `2, 1, 0, 1/2`, `3, 2, 0, -1/2`],
    correctAnswer: `3, 1, -1, 1/2`,
    explanation: `Sulfur's valence electrons are in the 3s and 3p subshells. For 3p, $n=3$, $l=1$. The magnetic quantum number $m_l$ can be -1, 0, or 1, and $m_s$ is $\\pm1/2$.`
  },
  {
    id: "acs-028",
    question: `The _______ quantum number defines the shape of an orbital.`,
    options: [`Principal`, `Spin`, `Angular momentum`, `Magnetic`],
    correctAnswer: `Angular momentum`,
    explanation: `The angular momentum quantum number ($l$) determines the shape of the orbital (s=spherical, p=dumbbell, d=clover, etc.).`
  },
  {
    id: "acs-029",
    question: `Which one of the following elements has the largest atomic radius?`,
    options: [`As`, `Sb`, `Se`, `Te`],
    correctAnswer: `Sb`,
    explanation: `Atomic radius increases as you move down a group (due to adding electron shells) and decreases as you move left to right across a period. Antimony (Sb) is the furthest down and left among the choices.`
  },
  {
    id: "acs-030",
    question: `Which is the ground-state electron configuration of gas phase $Co^{2+}$?`,
    options: [`$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^7$`, `$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^5$`, `$1s^2 2s^2 2p^6 3s^2 3p^6 3d^7$`, `$1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 4d^5$`],
    correctAnswer: `$1s^2 2s^2 2p^6 3s^2 3p^6 3d^7$`,
    explanation: `Neutral Cobalt is $[Ar] 4s^2 3d^7$. Transition metals lose their s-orbital electrons first when forming cations, so $Co^{2+}$ loses the $4s^2$ electrons, leaving $[Ar] 3d^7$.`
  },
  {
    id: "acs-031",
    question: `Ammonia is produced via $N_{2(g)} + 3H_{2(g)} \\rightarrow 2NH_{3(g)}$. 0.25 mol of $NH_3$ is formed when 0.5 mol of $N_2$ reacts with 0.5 mol of $H_2$. What is the percent yield?`,
    options: [`75\\%`, `50\\%`, `33\\%`, `25\\%`],
    correctAnswer: `75\\%`,
    explanation: `$H_2$ is limiting. 0.5 mol $H_2 \\times (2 \\text{ mol } NH_3 / 3 \\text{ mol } H_2) = 0.333$ mol $NH_3$ theoretical yield. $(0.25 / 0.333) \\times 100 = 75\\%$.`
  },
  {
    id: "acs-032",
    question: `What is the total number of valence electrons in the chlorate ion, $ClO_3^-$?`,
    options: [`24`, `26`, `28`, `32`],
    correctAnswer: `26`,
    explanation: `Chlorine provides 7, each of the three Oxygens provides 6 ($3 \\times 6 = 18$), and the negative charge adds 1. Total = $7 + 18 + 1 = 26$ valence electrons.`
  },
  {
    id: "acs-033",
    question: `Which compound has the highest normal boiling point?`,
    options: [`1-butanol, $CH_3CH_2CH_2CH_2OH$`, `2-butanol, $CH_3CH_2CH(CH_3)OH$`, `2-methyl-1-propanol, $(CH_3)_2CHCH_2OH$`, `2-methyl-2-propanol, $(CH_3)_3COH$`],
    correctAnswer: `1-butanol, $CH_3CH_2CH_2CH_2OH$`,
    explanation: `Straight-chain isomers have greater surface area for London dispersion forces compared to branched isomers, leading to higher boiling points.`
  },
  {
    id: "acs-034",
    question: `The gas-phase bromination of propene has $\\Delta H^{\\circ} = -122.5~kJ\\cdot mol^{-1}$. Given $\\Delta H_f^{\\circ}$ for $C_3H_6 = 20.4$ and $Br_2 = 30.9$, what is $\\Delta H_f^{\\circ}$ of $C_3H_6Br_2$?`,
    options: [`-71.2 kJ/mol`, `-102.1 kJ/mol`, `-142.9 kJ/mol`, `-173.8 kJ/mol`],
    correctAnswer: `-71.2 kJ/mol`,
    explanation: `$\\Delta H_{rxn} = \\Sigma\\Delta H_f(\\text{products}) - \\Sigma\\Delta H_f(\\text{reactants})$. $-122.5 = X - (20.4 + 30.9)$. $X = -122.5 + 51.3 = -71.2~kJ/mol$.`
  },
  {
    id: "acs-035",
    question: `What is the mass percent of carbon in isooctane ($C_8H_{18}$)?`,
    options: [`7.74\\%`, `15.88\\%`, `84.12\\%`, `92.26\\%`],
    correctAnswer: `84.12\\%`,
    explanation: `Molar mass of C = $12.01$, H = $1.008$. Mass of C = $8 \\times 12.01 = 96.08~g$. Total mass = $96.08 + (18 \\times 1.008) = 114.22~g$. $(96.08 / 114.22) \\times 100 = 84.12\\%$.`
  },
  {
    id: "acs-036",
    question: `What is the coefficient for ZnO when the reaction is balanced: $ZnS + O_2 \\rightarrow ZnO + SO_2$?`,
    options: [`1`, `2`, `3`, `4`],
    correctAnswer: `2`,
    explanation: `Balanced equation: $2ZnS + 3O_2 \\rightarrow 2ZnO + 2SO_2$. The smallest whole-number coefficient for ZnO is 2.`
  },
  {
    id: "acs-037",
    question: `A mixture of 9 mol $F_2$ and 4 mol S react: $3F_2 + S \\rightarrow SF_6$. How many moles of $F_2$ remain after 3 mol of S have reacted?`,
    options: [`3`, `2`, `1`, `0`],
    correctAnswer: `0`,
    explanation: `To react with 3 moles of S, you need $3 \\times 3 = 9$ moles of $F_2$. Since you started with exactly 9 moles of $F_2$, 0 moles will remain.`
  },
  {
    id: "acs-038",
    question: `Chromium is plated from $CrO_3$: $CrO_3 + 6H^+ + 6e^- \\rightarrow Cr_{(s)} + 3H_2O$. How many grams of Cr are plated by 19,300 C?`,
    options: [`10.4 g`, `5.19 g`, `1.73 g`, `0.20 g`],
    correctAnswer: `1.73 g`,
    explanation: `$19,300~C / 96,485~C/mol~e^- = 0.200~mol~e^-$. The reaction requires 6 mol $e^-$ per mol Cr. $0.200 / 6 = 0.0333$ mol Cr. $0.0333 \\times 52.00~g/mol = 1.73~g$.`
  },
  {
    id: "acs-039",
    question: `When equilibrium has been reached in $AE + CD \\rightleftharpoons CE + AD$, escape of some AD by volatilization will:`,
    options: [`Increase the concentration of AE`, `Decrease the concentration of CE`, `Increase the concentration of CE`, `Have no effect`],
    correctAnswer: `Increase the concentration of CE`,
    explanation: `According to Le Chatelier's Principle, removing a product (AD) shifts the equilibrium to the right to produce more products, thereby increasing CE.`
  },
  {
    id: "acs-040",
    question: `Given the reaction $2X_{(g)} + Y_{(g)} \\rightleftharpoons 2Z_{(g)}$ ($\\Delta H = -335~kJ$), which conditions give the highest yield of Z?`,
    options: [`1000 atm and $500^{\\circ}C$`, `500 atm and $500^{\\circ}C$`, `1000 atm and $100^{\\circ}C$`, `500 atm and $100^{\\circ}C$`],
    correctAnswer: `1000 atm and $100^{\\circ}C$`,
    explanation: `High pressure favors the side with fewer moles of gas (Products: 2 moles < Reactants: 3 moles). Low temperature favors the exothermic (forward) direction.`
  }
];

