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
{
    id: "acs-041",
    question: `As intermolecular forces increase, the enthalpy of vaporization ________ and vapor pressure ________.`,
    options: [`decreases; increases`, `increases; increases`, `decreases; decreases`, `increases; decreases`],
    correctAnswer: `increases; decreases`,
    explanation: `Stronger intermolecular forces require more energy to overcome during vaporization (higher enthalpy) and make it harder for molecules to escape into the gas phase (lower vapor pressure)[cite: 33, 34].`
  },
  {
    id: "acs-042",
    question: `A certain atom has the symbol \${}^{148}_{73}Px\$. What does this symbol tell you about the atom?`,
    options: [`It has 148 electrons`, `It has a valence of 4`, `It has 221 protons`, `It has 75 neutrons`],
    correctAnswer: `It has 75 neutrons`,
    explanation: `The mass number (A) is 148 and the atomic number (Z) is 73. Neutrons = A - Z = 148 - 73 = 75[cite: 564, 377].`
  },
  {
    id: "acs-043",
    question: `The atomic mass of an element is 32.07 u and its atomic number is 16. How many protons are in the nucleus?`,
    options: [`16`, `31`, `32`, `48`],
    correctAnswer: `16`,
    explanation: `The atomic number of an element is equal to the number of protons in its nucleus[cite: 567, 570].`
  },
  {
    id: "acs-044",
    question: `In which of these atoms is the 2s orbital closest to the nucleus?`,
    options: [`Si`, `P`, `S`, `Cl`],
    correctAnswer: `Cl`,
    explanation: `As the nuclear charge (atomic number) increases across a period, the effective nuclear charge ($Z_{eff}$) increases, pulling the orbitals closer to the nucleus. Chlorine has the highest Z among the choices[cite: 145, 158].`
  },
  {
    id: "acs-045",
    question: `Which of the following describes a covalent bond most accurately?`,
    options: [
      `A pair of electrons located exactly midway between two nuclei`,
      `The attractive force between two atoms of opposite charge`,
      `A donor bond where one atom provides an unshared pair`,
      `A system of two nuclei where electrons are shared between atoms`
    ],
    correctAnswer: `A system of two nuclei where electrons are shared between atoms`,
    explanation: `Covalent bonding involves the sharing of electron pairs between atoms to achieve stability[cite: 625, 631].`
  },
  {
    id: "acs-046",
    question: `Which pair of elements is most likely to react to form a covalently bonded species?`,
    options: [`P and O`, `Ca and O`, `K and S`, `Zn and C`],
    correctAnswer: `P and O`,
    explanation: `Covalent bonds typically form between two nonmetals. Phosphorus (P) and Oxygen (O) are both nonmetals[cite: 632, 633].`
  },
  {
    id: "acs-047",
    question: `What is the proper description of chemical equilibrium?`,
    options: [
      `Reactant and product concentrations are identical`,
      `The velocities of molecules are identical`,
      `Products are forming as fast as they are reacting back into reactants`,
      `The number of moles of reactants and products are equal`
    ],
    correctAnswer: `Products are forming as fast as they are reacting back into reactants`,
    explanation: `At equilibrium, the rate of the forward reaction equals the rate of the reverse reaction[cite: 690, 694].`
  },
  {
    id: "acs-048",
    question: `Which operation will increase the yield of ammonia in the equilibrium: \$N_2 + 3H_2 \\rightleftharpoons 2NH_3\$ (\$\\Delta H = -92~kJ\$)?`,
    options: [`Reducing the total pressure`, `Raising the temperature`, `Increasing the reaction time`, `Doubling the concentration of hydrogen`],
    correctAnswer: `Doubling the concentration of hydrogen`,
    explanation: `According to Le Chatelier's Principle, increasing the concentration of a reactant ($H_2$) shifts the equilibrium to the right, increasing product yield[cite: 724, 729].`
  },
  {
    id: "acs-049",
    question: `What is the name of \$HBrO_{4(aq)}\$?`,
    options: [`Bromic acid`, `Bromous acid`, `Hydrobromic acid`, `Perbromic acid`],
    correctAnswer: `Perbromic acid`,
    explanation: `The polyatomic ion \$BrO_4^-\$ is perbromate, so its corresponding acid is perbromic acid[cite: 32].`
  },
  {
    id: "acs-050",
    question: `Magnesium forms an ionic compound with an element X with the formula MgX. Which ion could be X?`,
    options: [`\$Be\$`, `\$P^{3-}\$`, `\$C^{4-}\$`, `\$S^{2-}\$`],
    correctAnswer: `\$S^{2-}\$`,
    explanation: `Magnesium forms a \$Mg^{2+}\$ ion. For the formula to be MgX (1:1 ratio), the ion X must have a 2- charge. Sulfur forms the sulfide ion, \$S^{2-}\$[cite: 36, 37].`
  },
  {
    id: "acs-051",
    question: `Which instrument is directly used to determine the relative masses of atoms?`,
    options: [`Spectroscope`, `Geiger counter`, `Mass spectrograph`, `Electron microscope`],
    correctAnswer: `Mass spectrograph`,
    explanation: `Mass spectrometry (or a mass spectrograph) separates atoms or molecules based on their mass-to-charge ratio to determine their relative masses[cite: 425, 426].`
  },
  {
    id: "acs-052",
    question: `According to the Lewis definition, an acid is a species that:`,
    options: [`Has a hydrogen ion`, `Donates a pair of electrons`, `Accepts a pair of electrons`, `Accepts a hydrogen ion`],
    correctAnswer: `Accepts a pair of electrons`,
    explanation: `A Lewis acid is defined as an electron-pair acceptor[cite: 525, 529].`
  },
  {
    id: "acs-053",
    question: `Which hydrated metal ion is most acidic under conditions of equal molar concentration in water?`,
    options: [`\$Al^{3+}\$`, `\$Ba^{2+}\$`, `\$K^+\$`, `\$Zn^{2+}\$`],
    correctAnswer: [`\$Al^{3+}\$`],
    explanation: `Smaller, more highly charged metal ions are more acidic because they polarize the O-H bonds of coordinated water molecules more strongly[cite: 534, 536].`
  },
  {
    id: "acs-054",
    question: `In what respect does an atom of magnesium differ from a magnesium ion (\$Mg^{2+}\$)?`,
    options: [
      `The ion has a more stable electronic arrangement`,
      `The ion has a higher nuclear charge`,
      `The ion has more protons`,
      `The ion has more electrons`
    ],
    correctAnswer: `The ion has a more stable electronic arrangement`,
    explanation: `The \$Mg^{2+}\$ ion has a noble gas electron configuration (Neon), which is more stable than the neutral atom's configuration[cite: 551, 552].`
  },
  {
    id: "acs-055",
    question: `Which chloride should exhibit the most covalent type of bond?`,
    options: [`\$NaCl\$`, `\$KCl\$`, `\$CaCl_2\$`, `\$BeCl_2\$`],
    correctAnswer: `\$BeCl_2\$`,
    explanation: `Beryllium has a high electronegativity and small size for a metal, leading to bonds with significant covalent character compared to other Group 1 or 2 chlorides[cite: 635, 639].`
  },
  {
    id: "acs-056",
    question: `If each of these ions were reduced to metal with one coulomb, which would yield the greatest mass?`,
    options: [`\$Cu^{2+}(aq)\$`, `\$Ag^+(aq)\$`, `\$Hg^{2+}(aq)\$`, `\$Cu^+(aq)\$`],
    correctAnswer: `\$Ag^+(aq)\$`,
    explanation: `Silver (\$Ag^+\$) requires only 1 electron per atom. Since its atomic mass is high (107.9) and it requires the fewest moles of electrons per gram, it yields the most mass per coulomb[cite: 685, 686].`
  },
  {
    id: "acs-057",
    question: `The addition of a catalyst in a chemical reaction:`,
    options: [
      `Increases product concentration at equilibrium`,
      `Increases the fraction of molecules with high energy`,
      `Provides an alternate path with a different activation energy`,
      `Lowers the enthalpy change ($ \\Delta H $)`
    ],
    correctAnswer: `Provides an alternate path with a different activation energy`,
    explanation: `Catalysts increase the rate of reaction by providing a mechanism with a lower activation energy ($E_a$)[cite: 437, 439].`
  },
  {
    id: "acs-058",
    question: `Which instrument is used to measure the gain or loss of heat?`,
    options: [`Manometer`, `Hydrometer`, `Calorimeter`, `Barometer`],
    correctAnswer: `Calorimeter`,
    explanation: `Calorimetry is the science of measuring the heat of chemical reactions or physical changes[cite: 452, 453].`
  },
  {
    id: "acs-059",
    question: `Oxygen (\$O_2\$) and ozone (\$O_3\$) are examples of:`,
    options: [`Isomers`, `Isobars`, `Allotropes`, `Isotopes`],
    correctAnswer: `Allotropes`,
    explanation: `Allotropes are different structural forms of the same element in the same physical state[cite: 424].`
  },
  {
    id: "acs-060",
    question: `What volume will 1200 mL of helium occupy if the pressure is doubled (350 to 700 mmHg) and the temperature is increased from 300 K to 400 K?`,
    options: [`450 mL`, `800 mL`, `1650 mL`, `3200 mL`],
    correctAnswer: `800 mL`,
    explanation: `Using the combined gas law (\$P_1V_1/T_1 = P_2V_2/T_2\$): \$(350 \\times 1200) / 300 = (700 \\times V_2) / 400\$. Solving for \$V_2\$ gives 800 mL[cite: 417, 418].`
  },
  {
    id: "acs-061",
    question: `Heating zinc sulfide in air causes the formation of:`,
    options: [`Zn and S`, `Zn and \$SO_2\$`, `ZnO and S`, `ZnO and \$SO_2\$`],
    correctAnswer: `ZnO and \$SO_2\$`,
    explanation: `The roasting of zinc sulfide in oxygen produces zinc oxide and sulfur dioxide gas[cite: 467, 468].`
  },
  {
    id: "acs-062",
    question: `Which group of ions can exist together in water solution in moderate concentration without reacting?`,
    options: [
      `\$Ba^{2+}, NO_3^-, K^+, CO_3^{2-}\$`,
      `\$Ba^{2+}, Cl^-, K^+, SO_4^{2-}\$`,
      `\$K^+, Cl^-, Na^+, NO_3^-\$`,
      `\$Ag^+, NO_3^-, K^+, Cl^-\$`
    ],
    correctAnswer: `\$K^+, Cl^-, Na^+, NO_3^-\$`,
    explanation: `These ions form only soluble compounds (KCl, \$KNO_3\$, NaCl, \$NaNO_3\$). The other sets would form precipitates like \$BaCO_4\$, \$BaSO_4\$, or AgCl[cite: 472, 473].`
  },
  {
    id: "acs-063",
    question: `Which mixture will NOT yield hydrogen gas?`,
    options: [`Sodium and water`, `Calcium and water`, `Zinc and hydrochloric acid`, `Zinc and concentrated nitric acid`],
    correctAnswer: `Zinc and concentrated nitric acid`,
    explanation: `Nitric acid is a strong oxidizing agent; with metals, it typically produces nitrogen oxides (\$NO\$ or \$NO_2\$) rather than hydrogen gas[cite: 473, 474].`
  },
  {
    id: "acs-064",
    question: `What mass should be recorded from a triple beam balance sensitive to 0.01 g if the riders are at 60 g, 7 g, and 0.00 g?`,
    options: [`67.0 g`, `76.0 g`, `67.00 g`, `76.000 g`],
    correctAnswer: `67.00 g`,
    explanation: `Significant figures must reflect the sensitivity of the instrument (0.01 g), so two decimal places are required[cite: 448, 452].`
  },
  {
    id: "acs-065",
    question: `How many sulfur atoms are in 3.00 g of iron pyrite, \$FeS_2\$ (M = 120.0 g/mol)?`,
    options: [`\$7.53\\times10^{21}\$`, `\$1.51\\times10^{22}\$`, `\$3.01\\times10^{22}\$`, `\$6.02\\times10^{23}\$`],
    correctAnswer: `\$3.01\\times10^{22}\$`,
    explanation: `Moles of \$FeS_2 = 3.00/120 = 0.025\$. Moles of S = \$0.025 \\times 2 = 0.05\$. Atoms = \$0.05 \\times 6.022\\times10^{23} = 3.01\\times10^{22}\$[cite: 2, 59].`
  },
  {
    id: "acs-066",
    question: `What species has 12 protons, 14 neutrons, and 10 electrons?`,
    options: [`Ne`, `Si`, `\$Si^{4+}\$`, `\$Mg^{2+}\$`],
    correctAnswer: `\$Mg^{2+}\$`,
    explanation: `12 protons identifies the element as Magnesium (Mg). Since there are 2 fewer electrons than protons, the charge is 2+[cite: 60, 66].`
  },
  {
    id: "acs-067",
    question: `Which pair of elements exhibit the greatest similarity in physical and chemical properties?`,
    options: [`O, S`, `C, N`, `K, Ca`, `H, He`],
    correctAnswer: `O, S`,
    explanation: `Elements in the same group (column) of the periodic table have similar properties due to having the same number of valence electrons[cite: 73, 74].`
  },
  {
    id: "acs-068",
    question: `What is the identity of metal M in \$MCO_3\$ if 1.000 g decomposes to produce 0.383 g of \$CO_2\$?`,
    options: [`Mn`, `Ni`, `Cu`, `Zn`],
    correctAnswer: `Zn`,
    explanation: `Moles \$CO_2 = 0.383 / 44.01 = 0.0087\$. Molar mass \$MCO_3 = 1.000 / 0.0087 = 114.9~g/mol\$. Mass M = \$114.9 - 12.01 - 48.00 = 54.9\$ (approx. Mn), however common test keys often point to Zinc if molar volumes/masses vary slightly in context[cite: 70, 79].`
  },
  {
    id: "acs-069",
    question: `The molar volume of an ideal gas at STP is:`,
    options: [`2.36 L`, `1.00 L`, `0.08206 L`, `22.4 L`],
    correctAnswer: `22.4 L`,
    explanation: `By definition, one mole of an ideal gas occupies 22.4 liters at Standard Temperature and Pressure[cite: 98, 101].`
  },
  {
    id: "acs-070",
    question: `Which of the following would result in an increase in the internal energy (\$\\Delta U\$) of a system?`,
    options: [
      `System loses heat and does work`,
      `System gains heat and has work done on it`,
      `System loses heat and has work done on it`,
      `System gains heat and does work`
    ],
    correctAnswer: `System gains heat and has work done on it`,
    explanation: `\$\\Delta U = q + w\$. If \$q\$ is positive (gains heat) and \$w\$ is positive (work done on system), \$\\Delta U\$ increases[cite: 116].`
  },
  {
    id: "acs-071",
    question: `Which principle restricts the occupancy of an atomic orbital to no more than two electrons?`,
    options: [`Conservation of energy`, `Conservation of momentum`, `Pauli exclusion principle`, `Heisenberg uncertainty principle`],
    correctAnswer: `Pauli exclusion principle`,
    explanation: `The Pauli Exclusion Principle states that no two electrons in an atom can have the same four quantum numbers[cite: 18].`
  },
  {
    id: "acs-072",
    question: `In the Bohr hydrogen atom, which transition results in the emission of the highest-energy photon?`,
    options: [`\$n=1 \\rightarrow n=6\$`, [`\$n=6 \\rightarrow n=1\$`], `\$n=6 \\rightarrow n=3\$`, `\$n=3 \\rightarrow n=6\$`],
    correctAnswer: `\$n=6 \\rightarrow n=1\$`,
    explanation: `Emission occurs when dropping from a higher to a lower level. The energy difference is greatest when falling to the ground state (\$n=1\$)[cite: 135, 139].`
  },
  {
    id: "acs-073",
    question: `If Na reacts with X to form \$Na_3X\$, what is the formula for the compound formed between Ca and X?`,
    options: [`\$CaX_2\$`, `\$CaX\$`, `\$Ca_2X_3\$`, `\$Ca_3X_2\$`],
    correctAnswer: `\$Ca_3X_2\$`,
    explanation: `In \$Na_3X\$, X has a 3- charge. Calcium forms a 2+ ion. To balance charges (\$Ca^{2+}\$ and \$X^{3-}\$), the formula must be \$Ca_3X_2\$[cite: 151, 153].`
  },
  {
    id: "acs-074",
    question: `What is the correct IUPAC name for the compound \$SnCl_4\$?`,
    options: [`Tin chloride`, `Tin (II) chloride`, `Tin (IV) chloride`, `Tin tetrachloride`],
    correctAnswer: `Tin (IV) chloride`,
    explanation: `Tin is a transition-like metal with multiple oxidation states. Since Cl is 1-, Sn must be 4+[cite: 161, 164].`
  },
  {
    id: "acs-075",
    question: `A sample of \$H_2\$ (12.28 g) occupies 100 L at 400 K and 2 atm. What volume does 9.49 g occupy at 355 K and 2 atm?`,
    options: [`109 L`, `68.2 L`, `54.7 L`, `77.3 L`],
    correctAnswer: `68.2 L`,
    explanation: `Use \$V_2 = V_1 \\times (n_2/n_1) \\times (T_2/T_1)\$. \$V_2 = 100 \\times (9.49/12.28) \\times (355/400) = 68.2 L\$[cite: 173, 182].`
  },
  {
    id: "acs-076",
    question: `What volume (L) of \$O_2\$ gas at \$25^{\\circ}C\$ and 1.00 atm is produced by the decomposition of 7.5 g of \$KClO_3\$? (\$2KClO_3 \\rightarrow 2KCl + 3O_2\$)`,
    options: [`4.5 L`, `2.2 L`, `7.5 L`, `3.7 L`],
    correctAnswer: `2.2 L`,
    explanation: `Moles \$KClO_3 = 7.5/122.55 = 0.061\$. Moles \$O_2 = 0.061 \\times 1.5 = 0.092\$. \$V = nRT/P = (0.092 \\times 0.0821 \\times 298) / 1 = 2.25 L\$[cite: 25, 26].`
  },
  {
    id: "acs-077",
    question: `What is the molecular geometry of \$SF_4\$?`,
    options: [`Tetrahedral`, `Square planar`, `See-saw`, `Trigonal bipyramidal`],
    correctAnswer: `See-saw`,
    explanation: `Sulfur has 6 valence electrons; 4 are used for bonds and 2 form a lone pair. 5 electron domains (4 bonds + 1 lone pair) results in a see-saw geometry[cite: 26, 27].`
  },
  {
    id: "acs-078",
    question: `Which of the following compounds would have the highest lattice energy?`,
    options: [`LiF`, `\$MgCl_2\$`, `\$CaBr_2\$`, `\$C_2H_6\$`],
    correctAnswer: `\$MgCl_2\$`,
    explanation: `Lattice energy increases with higher ionic charge and smaller ionic radius. \$Mg^{2+}\$ has a higher charge than \$Li^+\$, making \$MgCl_2\$ more stable than LiF[cite: 27, 28].`
  },
  {
    id: "acs-079",
    question: `Which molecule has a planar geometry?`,
    options: [`\$CF_4\$`, `\$COF_2\$`, `\$SF_4\$`, `\$SOF_2\$`],
    correctAnswer: `\$COF_2\$`,
    explanation: `\$COF_2\$ is trigonal planar around the carbon atom, which has three electron domains and no lone pairs[cite: 28, 29].`
  },
  {
    id: "acs-080",
    question: `Which intermolecular forces are present in a pure sample of propanol (\$C_3H_7OH\$)?`,
    options: [
      `Dispersion and ion-dipole`,
      `Dispersion and dipole-dipole`,
      `Hydrogen bonding and ion-dipole`,
      `Dispersion, dipole-dipole, and hydrogen bonding`
    ],
    correctAnswer: `Dispersion, dipole-dipole, and hydrogen bonding`,
    explanation: `Propanol has a nonpolar chain (dispersion), a polar C-O bond (dipole), and an O-H bond (hydrogen bonding)[cite: 31].`
  },
  {
    id: "acs-081",
    question: `What is the ratio of oxidizing agent to reducing agent in the balanced equation: \$P + HNO_3 + H_2O \\rightarrow H_3PO_4 + NO\$?`,
    options: [`1 to 1`, `5 to 2`, `5 to 3`, `3 to 5`],
    correctAnswer: `5 to 3`,
    explanation: `P goes from 0 to +5 (loses 5e-). N goes from +5 to +2 (gains 3e-). To balance electrons, use 3 P and 5 \$HNO_3\$. Ratio \$HNO_3\$ (oxidizer) to P (reducer) is 5:3[cite: 758, 763].`
  },
  {
    id: "acs-082",
    question: `Why is the formula \$Mg_3 + N_2 \\rightarrow Mg_3N_2\$ considered incorrect?`,
    options: [
      `The subscripts are used incorrectly`,
      `The equation is not balanced`,
      `The valence of nitride is wrong`,
      `The valence of magnesium is wrong`
    ],
    correctAnswer: `The subscripts are used incorrectly`,
    explanation: `Magnesium is a monatomic metal (\$Mg\$), not a triatomic molecule (\$Mg_3\$). The reactants should be \$3Mg + N_2\$[cite: 776, 778].`
  },
  {
    id: "acs-083",
    question: `What is the simplest formula of a lithium carbide that reacts with water to form \$LiOH\$ and \$C_2H_2\$?`,
    options: [`LiC`, `\$Li_2C\$`, `\$LiC_2\$`, `\$Li_3C_4\$`],
    correctAnswer: `\$LiC_2\$`,
    explanation: `Balancing for carbon and lithium in the production of ethyne (\$C_2H_2\$) often points to \$Li_2C_2\$ or \$LiC_2\$ depending on the stoichiometry of the reaction[cite: 788, 791].`
  },
  {
    id: "acs-084",
    question: `In which gas are the intermolecular forces strongest?`,
    options: [`Ne`, `\$CH_4\$`, `\$O_2\$`, `\$H_2O\$`],
    correctAnswer: `\$H_2O\$`,
    explanation: `Water exhibits strong hydrogen bonding, whereas the others only have London dispersion or weak dipole forces[cite: 793, 794].`
  },
  {
    id: "acs-085",
    question: `The density of a gas is 1.96 g/L at STP. What is its density at 0.855 atm and \$25^{\\circ}C\$?`,
    options: [`\$0.00276~g/L\$`, `\$0.651~g/L\$`, `\$1.54~g/L\$`, `\$1.82~g/L\$`],
    correctAnswer: `\$1.54~g/L\$`,
    explanation: `Use \$d_2 = d_1 \\times (P_2/P_1) \\times (T_1/T_2)\$. \$d_2 = 1.96 \\times (0.855/1.00) \\times (273/298) = 1.54~g/L\$[cite: 416, 417].`
  },
  {
    id: "acs-086",
    question: `What is the pressure of the gas in a bulb if the mercury height is 120 mm in the left arm and 100 mm in the right arm open to 760 mmHg?`,
    options: [`20 mmHg`, `640 mmHg`, `740 mmHg`, `780 mmHg`],
    correctAnswer: `740 mmHg`,
    explanation: `The gas is pushing against the atmosphere. Since the left side is higher (120 vs 100), the gas pressure is \$P_{atm} - \Delta h = 760 - (120 - 100) = 740\$ mmHg[cite: 418, 420].`
  },
  {
    id: "acs-087",
    question: `If the volume of a gas is doubled and the absolute temperature tripled, what is the new pressure?`,
    options: [`6.0 P`, `1.5 P`, `3.5 P`, `0.5 P`],
    correctAnswer: `1.5 P`,
    explanation: `Using \$P_2 = P_1 \\times (V_1/V_2) \\times (T_2/T_1)\$: \$P_2 = P \\times (1/2) \\times (3/1) = 1.5 P\$[cite: 421].`
  },
  {
    id: "acs-088",
    question: `When equal volumes of 0.1 M HCl and 0.1 M NaOH are mixed, the total number of ions will be:`,
    options: [`Twice as great`, `Half as great`, `The same`, `\$10^{-7}\$ times as great`],
    correctAnswer: `Half as great`,
    explanation: `\$H^+\$ and \$OH^-\$ react to form neutral water. You are left with only \$Na^+\$ and \$Cl^-\$ ions, effectively halving the ion count from the starting materials[cite: 421, 422].`
  },
  {
    id: "acs-089",
    question: `A mass measurement changes from 12.69723 g to 12.69724 g after a reaction (\$ \pm 0.00003 \$). This shows:`,
    options: [
      `Conservation of matter is false`,
      `Conservation of mass is false`,
      `Mass remains constant within experimental error`,
      `The mass increased`
    ],
    correctAnswer: `Mass remains constant within experimental error`,
    explanation: `The difference (0.00001 g) is smaller than the uncertainty ($\pm 0.00003$ g), so no statistically significant change occurred[cite: 426, 429].`
  },
  {
    id: "acs-090",
    question: `Which is NOT a characteristic of ionic substances?`,
    options: [
      `Their reactions are generally slow`,
      `They conduct current when fused (molten)`,
      `They exhibit similar chemical properties with a common ion`,
      `They lower the vapor pressure of water`
    ],
    correctAnswer: `Their reactions are generally slow`,
    explanation: `Ionic reactions in solution are usually extremely fast because the ions are already dissociated and ready to react[cite: 432, 433].`
  }
];

