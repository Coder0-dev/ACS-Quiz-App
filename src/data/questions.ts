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
  },
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
    id: "acs-041",
    question: `As intermolecular forces increase, the enthalpy of vaporization ________ and vapor pressure ________.`,
    options: [`decreases; increases`, `increases; increases`, `decreases; decreases`, `increases; decreases`],
    correctAnswer: `increases; decreases`,
    explanation: `Stronger intermolecular forces require more energy to overcome during vaporization (higher enthalpy) and make it harder for molecules to escape into the gas phase (lower vapor pressure).`
  },
  {
    id: "acs-042",
    question: `A certain atom has the symbol ${}^{148}_{73}Px$. What does this symbol tell you about the atom?`,
    options: [`It has 148 electrons`, `It has a valence of 4`, `It has 221 protons`, `It has 75 neutrons`],
    correctAnswer: `It has 75 neutrons`,
    explanation: `The mass number (A) is 148 and the atomic number (Z) is 73. Neutrons = A - Z = 148 - 73 = 75.`
  },
  {
    id: "acs-044",
    question: `In which of these atoms is the 2s orbital closest to the nucleus?`,
    options: [`Si`, `P`, `S`, `Cl`],
    correctAnswer: `Cl`,
    explanation: `As the nuclear charge (atomic number) increases across a period, the effective nuclear charge ($Z_{eff}$) increases, pulling the orbitals closer to the nucleus. Chlorine has the highest Z among the choices.`
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
    explanation: `Covalent bonding involves the sharing of electron pairs between atoms to achieve stability.`
  },
  {
    id: "acs-046",
    question: `Which pair of elements is most likely to react to form a covalently bonded species?`,
    options: [`P and O`, `Ca and O`, `K and S`, `Zn and C`],
    correctAnswer: `P and O`,
    explanation: `Covalent bonds typically form between two nonmetals. Phosphorus (P) and Oxygen (O) are both nonmetals.`
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
    explanation: `At equilibrium, the rate of the forward reaction equals the rate of the reverse reaction.`
  },
  {
    id: "acs-048",
    question: `Which operation will increase the yield of ammonia in the equilibrium: $N_2 + 3H_2 \rightleftharpoons 2NH_3$ ($\Delta H = -92~kJ$)?`,
    options: [`Reducing the total pressure`, `Raising the temperature`, `Increasing the reaction time`, `Doubling the concentration of hydrogen`],
    correctAnswer: `Doubling the concentration of hydrogen`,
    explanation: `According to Le Chatelier's Principle, increasing the concentration of a reactant ($H_2$) shifts the equilibrium to the right, increasing product yield.`
  },
  {
    id: "acs-049",
    question: `What is the name of $HBrO_{4(aq)}$?`,
    options: [`Bromic acid`, `Bromous acid`, `Hydrobromic acid`, `Perbromic acid`],
    correctAnswer: `Perbromic acid`,
    explanation: `The polyatomic ion $BrO_4^-$ is perbromate, so its corresponding acid is perbromic acid.`
  },
  {
    id: "acs-050",
    question: `Magnesium forms an ionic compound with an element X with the formula MgX. Which ion could be X?`,
    options: [`$Be$`, `$P^{3-}$`, `$C^{4-}$`, `$S^{2-}$`],
    correctAnswer: `$S^{2-}$`,
    explanation: `Magnesium forms a $Mg^{2+}$ ion. For the formula to be MgX (1:1 ratio), the ion X must have a 2- charge. Sulfur forms the sulfide ion, $S^{2-}$.`
  },
  {
    id: "acs-051",
    question: `Which instrument is directly used to determine the relative masses of atoms?`,
    options: [`Spectroscope`, `Geiger counter`, `Mass spectrograph`, `Electron microscope`],
    correctAnswer: `Mass spectrograph`,
    explanation: `Mass spectrometry (or a mass spectrograph) separates atoms or molecules based on their mass-to-charge ratio to determine their relative masses.`
  },
  {
    id: "acs-052",
    question: `According to the Lewis definition, an acid is a species that:`,
    options: [`Has a hydrogen ion`, `Donates a pair of electrons`, `Accepts a pair of electrons`, `Accepts a hydrogen ion`],
    correctAnswer: `Accepts a pair of electrons`,
    explanation: `A Lewis acid is defined as an electron-pair acceptor.`
  },
  {
    id: "acs-053",
    question: `Which hydrated metal ion is most acidic under conditions of equal molar concentration in water?`,
    options: [`$Al^{3+}$`, `$Ba^{2+}$`, `$K^+$`, `$Zn^{2+}$`],
    correctAnswer: `$Al^{3+}$`,
    explanation: `Smaller, more highly charged metal ions are more acidic because they polarize the O-H bonds of coordinated water molecules more strongly.`
  },
  {
    id: "acs-054",
    question: `In what respect does an atom of magnesium differ from a magnesium ion ($Mg^{2+}$)?`,
    options: [
      `The ion has a more stable electronic arrangement`,
      `The ion has a higher nuclear charge`,
      `The ion has more protons`,
      `The ion has more electrons`
    ],
    correctAnswer: `The ion has a more stable electronic arrangement`,
    explanation: `The $Mg^{2+}$ ion has a noble gas electron configuration (Neon), which is more stable than the neutral atom's configuration.`
  },
  {
    id: "acs-055",
    question: `Which chloride should exhibit the most covalent type of bond?`,
    options: [`$NaCl$`, `$KCl$`, `$CaCl_2$`, `$BeCl_2$`],
    correctAnswer: `$BeCl_2$`,
    explanation: `Beryllium has a high electronegativity and small size for a metal, leading to bonds with significant covalent character compared to other Group 1 or 2 chlorides.`
  },
  {
    id: "acs-056",
    question: `If each of these ions were reduced to metal with one coulomb, which would yield the greatest mass?`,
    options: [`$Cu^{2+}(aq)$`, `$Ag^+(aq)$`, `$Hg^{2+}(aq)$`, `$Cu^+(aq)$`],
    correctAnswer: `$Ag^+(aq)$`,
    explanation: `Silver ($Ag^+$) requires only 1 electron per atom. Since its atomic mass is high (107.9) and it requires the fewest moles of electrons per gram, it yields the most mass per coulomb.`
  },
  {
    id: "acs-057",
    question: `The addition of a catalyst in a chemical reaction:`,
    options: [
      `Increases product concentration at equilibrium`,
      `Increases the fraction of molecules with high energy`,
      `Provides an alternate path with a different activation energy`,
      `Lowers the enthalpy change ($\Delta H$)`
    ],
    correctAnswer: `Provides an alternate path with a different activation energy`,
    explanation: `Catalysts increase the rate of reaction by providing a mechanism with a lower activation energy ($E_a$).`
  },
  {
    id: "acs-058",
    question: `Which instrument is used to measure the gain or loss of heat?`,
    options: [`Manometer`, `Hydrometer`, `Calorimeter`, `Barometer`],
    correctAnswer: `Calorimeter`,
    explanation: `Calorimetry is the science of measuring the heat of chemical reactions or physical changes.`
  },
  {
    id: "acs-059",
    question: `Oxygen ($O_2$) and ozone ($O_3$) are examples of:`,
    options: [`Isomers`, `Isobars`, `Allotropes`, `Isotopes`],
    correctAnswer: `Allotropes`,
    explanation: `Allotropes are different structural forms of the same element in the same physical state.`
  },
  {
    id: "acs-060",
    question: `What volume will 1200 mL of helium occupy if the pressure is doubled (350 to 700 mmHg) and the temperature is increased from 300 K to 400 K?`,
    options: [`450 mL`, `800 mL`, `1650 mL`, `3200 mL`],
    correctAnswer: `800 mL`,
    explanation: `Using the combined gas law ($P_1V_1/T_1 = P_2V_2/T_2$): $(350 \times 1200) / 300 = (700 \times V_2) / 400$. Solving for $V_2$ gives 800 mL.`
  },
  {
    id: "acs-061",
    question: `Heating zinc sulfide in air causes the formation of:`,
    options: [`Zn and S`, `Zn and $SO_2$`, `ZnO and S`, `ZnO and $SO_2$`],
    correctAnswer: `ZnO and $SO_2$`,
    explanation: `The roasting of zinc sulfide in oxygen produces zinc oxide and sulfur dioxide gas.`
  },
  {
    id: "acs-062",
    question: `Which group of ions can exist together in water solution in moderate concentration without reacting?`,
    options: [
      `$Ba^{2+}, NO_3^-, K^+, CO_3^{2-}$`,
      `$Ba^{2+}, Cl^-, K^+, SO_4^{2-}$`,
      `$K^+, Cl^-, Na^+, NO_3^-$`,
      `$Ag^+, NO_3^-, K^+, Cl^-$`
    ],
    correctAnswer: `$K^+, Cl^-, Na^+, NO_3^-$`,
    explanation: `These ions form only soluble compounds (KCl, $KNO_3$, NaCl, $NaNO_3$). The other sets would form precipitates like $BaCO_3$, $BaSO_4$, or AgCl.`
  },
  {
    id: "acs-063",
    question: `Which mixture will NOT yield hydrogen gas?`,
    options: [`Sodium and water`, `Calcium and water`, `Zinc and hydrochloric acid`, `Zinc and concentrated nitric acid`],
    correctAnswer: `Zinc and concentrated nitric acid`,
    explanation: `Nitric acid is a strong oxidizing agent; with metals, it typically produces nitrogen oxides ($NO$ or $NO_2$) rather than hydrogen gas.`
  },
  {
    id: "acs-064",
    question: `What mass should be recorded from a triple beam balance sensitive to 0.01 g if the riders are at 60 g, 7 g, and 0.00 g?`,
    options: [`67.0 g`, `76.0 g`, `67.00 g`, `76.000 g`],
    correctAnswer: `67.00 g`,
    explanation: `Significant figures must reflect the sensitivity of the instrument (0.01 g), so two decimal places are required.`
  }
];
