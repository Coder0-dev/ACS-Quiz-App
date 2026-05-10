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
    explanation: `The Pauli Exclusion Principle states that no two electrons in an atom can have the same four quantum numbers.`
  },
  {
    id: "acs-011",
    question: `A certain atom has the symbol ${}^{148}_{73}Px$. What does this symbol tell you about the atom?`,
    options: [`It has 148 electrons`, `It has a valence of 4`, `It has 221 protons`, `It has 75 neutrons`],
    correctAnswer: `It has 75 neutrons`,
    explanation: `Neutrons = Mass Number (148) - Atomic Number (73) = 75.`
  },
  {
    id: "acs-012",
    question: `In which of these atoms is the 2s orbital closest to the nucleus?`,
    options: [`Si`, `P`, `S`, `Cl`],
    correctAnswer: `Cl`,
    explanation: `Increasing nuclear charge (atomic number) across a period pulls electrons closer to the nucleus.`
  },
  {
    id: "acs-013",
    question: `Which of the following describes a covalent bond most accurately?`,
    options: [`Electrons mid-way`, `Opposite charges`, `Donor bond`, `Shared electrons`],
    correctAnswer: `Shared electrons`,
    explanation: `Covalent bonding is defined by the sharing of electron pairs between atoms.`
  },
  {
    id: "acs-014",
    question: `Which pair of elements is most likely to react to form a covalently bonded species?`,
    options: [`P and O`, `Ca and O`, `K and S`, `Zn and C`],
    correctAnswer: `P and O`,
    explanation: `Covalent bonds typically form between nonmetals.`
  },
  {
    id: "acs-015",
    question: `What is the proper description of chemical equilibrium?`,
    options: [`Identical concentration`, `Identical velocity`, `Rates are equal`, `Moles are equal`],
    correctAnswer: `Rates are equal`,
    explanation: `Dynamic equilibrium occurs when the forward and reverse reaction rates are equal.`
  },
  {
    id: "acs-016",
    question: `Which will increase the yield of ammonia in: $N_2 + 3H_2 \\rightleftharpoons 2NH_3$ ($\\Delta H < 0$)?`,
    options: [`Reduce pressure`, `Raise temperature`, `Increase time`, `Increase $H_2$`],
    correctAnswer: `Increase $H_2$`,
    explanation: `Adding a reactant shifts the equilibrium toward the products.`
  },
  {
    id: "acs-017",
    question: `What is the name of $HBrO_{4(aq)}$?`,
    options: [`Bromic acid`, `Bromous acid`, `Hydrobromic acid`, `Perbromic acid`],
    correctAnswer: `Perbromic acid`,
    explanation: `The acid corresponding to the perbromate ion is perbromic acid.`
  },
  {
    id: "acs-018",
    question: `Magnesium forms an ionic compound with element X as MgX. Which ion is X?`,
    options: [`$Be$`, `$P^{3-}$`, `$C^{4-}$`, `$S^{2-}$`],
    correctAnswer: `$S^{2-}$`,
    explanation: `Mg is +2, so X must be -2 to balance in a 1:1 ratio.`
  },
  {
    id: "acs-019",
    question: `Which instrument is used to determine the relative masses of atoms?`,
    options: [`Spectroscope`, `Geiger counter`, `Mass spectrograph`, `Electron microscope`],
    correctAnswer: `Mass spectrograph`,
    explanation: `Mass spectrometry measures the mass-to-charge ratio of ions.`
  },
  {
    id: "acs-020",
    question: `If these ions were reduced to metal with one coulomb, which yields the greatest mass?`,
    options: [`$Cu^{2+}$`, `$Ag^{+}$`, `$Hg^{2+}$`, `$Cu^{+}$`],
    correctAnswer: `$Ag^{+}$`,
    explanation: `Silver has a high molar mass and only needs 1 mole of electrons per mole of metal.`
  },
  {
    id: "acs-021",
    question: `A 3.0 L sample of He (5.6 atm) and 4.5 L Ne (3.6 atm) are mixed in a 9.0 L flask. Total pressure?`,
    options: [`2.6 atm`, `9.2 atm`, `1.0 atm`, `3.7 atm`],
    correctAnswer: `3.7 atm`,
    explanation: `Partial pressures: $P_{He}=(5.6 \\times 3)/9 = 1.87$; $P_{Ne}=(3.6 \\times 4.5)/9 = 1.80$. Total = 3.67.`
  },
  {
    id: "acs-022",
    question: `Which gas cannot be used to fill a balloon that will float in air (density 1.285 g/L)?`,
    options: [`$CH_4$`, `NO`, `$NH_3$`, `HF`],
    correctAnswer: `NO`,
    explanation: `NO molar mass is 30, which is higher than air's average mass (~29), making it denser.`
  },
  {
    id: "acs-023",
    question: `Which is a correct statement of Boyle's law?`,
    options: [`$P/V = k$`, `$V/P = k$`, `$V/T = k$`, `$PV = k$`],
    correctAnswer: `$PV = k$`,
    explanation: `Pressure and volume are inversely proportional for a gas at constant temperature.`
  },
  {
    id: "acs-024",
    question: `Ideal gases differ from real gases in that ideal molecules:`,
    options: [`Zero mass`, `Large volume`, `No attraction`, `No energy`],
    correctAnswer: `No attraction`,
    explanation: `The ideal gas law assumes negligible intermolecular forces.`
  },
  {
    id: "acs-025",
    question: `Calculate $\\Delta H$ for $N_2 + 2O_2 \\rightarrow 2NO_2$ using: (1) $2NO \\rightarrow N_2 + O_2$ (-180kJ), (2) $2NO + O_2 \\rightarrow 2NO_2$ (-112kJ).`,
    options: [`-292 kJ`, `292 kJ`, `-68 kJ`, `68 kJ`],
    correctAnswer: `68 kJ`,
    explanation: `Reverse (1) to get $+180$, then add (2): $180 - 112 = 68$ kJ.`
  },
  {
    id: "acs-026",
    question: `What is the wavelength of photons with energy $1.00\\times10^3~kJ/mol$?`,
    options: [`$2.00\\times10^{31}~m$`, `$1.20\\times10^{-7}~m$`, `$1.20\\times10^{-4}~m$`, `$8.36\\times10^6~m$`],
    correctAnswer: `$1.20\\times10^{-7}~m$`,
    explanation: `Use $E = hcN_A / \\lambda$. $\\lambda = 1.20 \\times 10^{-7}$ m.`
  },
  {
    id: "acs-027",
    question: `Possible set of quantum numbers for a valence electron of sulfur (S)?`,
    options: [`3, 2, 2, 1/2`, `3, 1, -1, 1/2`, `2, 1, 0, 1/2`, `3, 2, 0, -1/2`],
    correctAnswer: `3, 1, -1, 1/2`,
    explanation: `Sulfur valence is in $3p$. $n=3$, $l=1$.`
  },
  {
    id: "acs-028",
    question: `The _______ quantum number defines the shape of an orbital.`,
    options: [`Principal`, `Spin`, `Angular momentum`, `Magnetic`],
    correctAnswer: `Angular momentum`,
    explanation: `The $l$ quantum number determines orbital shape (s, p, d, f).`
  },
  {
    id: "acs-029",
    question: `Which element has the largest atomic radius?`,
    options: [`As`, `Sb`, `Se`, `Te`],
    correctAnswer: `Sb`,
    explanation: `Radius increases down and to the left.`
  },
  {
    id: "acs-030",
    question: `Ground-state electron configuration of $Co^{2+}$?`,
    options: [`$[Ar]4s^2 3d^7$`, `$[Ar]4s^2 3d^5$`, `$[Ar]3d^7$`, `$[Ar]4s^2 4d^5$`],
    correctAnswer: `$[Ar]3d^7$`,
    explanation: `Transition metals lose $4s$ electrons before $3d$ when ionized.`
  },
  {
    id: "acs-031",
    question: `As intermolecular forces increase, enthalpy of vaporization ________ and vapor pressure ________.`,
    options: [`decreases; increases`, `increases; increases`, `decreases; decreases`, `increases; decreases`],
    correctAnswer: `increases; decreases`,
    explanation: `Stronger IMF makes molecules harder to vaporize.`
  },
  {
    id: "acs-032",
    question: `Roasting zinc sulfide in air forms:`,
    options: [`Zn and S`, `Zn and $SO_2$`, `ZnO and S`, `ZnO and $SO_2$`],
    correctAnswer: `ZnO and $SO_2$`,
    explanation: `$2ZnS + 3O_2 \\rightarrow 2ZnO + 2SO_2$.`
  },
  {
    id: "acs-033",
    question: `Adding a catalyst:`,
    options: [`More product`, `More high energy molecules`, `Lower activation energy`, `Lower $\\Delta H$`],
    correctAnswer: `Lower activation energy`,
    explanation: `Catalysts lower the $E_a$ barrier.`
  },
  {
    id: "acs-034",
    question: `Volume of 1200 mL helium if pressure is doubled and temp goes from 300 K to 400 K?`,
    options: [`450 mL`, `800 mL`, `1650 mL`, `3200 mL`],
    correctAnswer: `800 mL`,
    explanation: `$1200 \\times (1/2) \\times (400/300) = 800$ mL.`
  },
  {
    id: "acs-035",
    question: `Which ions can exist together in water without reacting?`,
    options: [`$Ba^{2+}, K, CO_3$`, `$Ba, Cl, SO_4$`, `$K, Cl, Na, NO_3$`, `$Ag, NO_3, K, Cl$`],
    correctAnswer: `$K, Cl, Na, NO_3$`,
    explanation: `All combinations are soluble; no precipitate forms.`
  },
  {
    id: "acs-036",
    question: `Which mixture will NOT yield hydrogen gas?`,
    options: [`Na + water`, `Ca + water`, `Zn + HCl`, `Zn + conc. $HNO_3$`],
    correctAnswer: `Zn + conc. $HNO_3$`,
    explanation: `Concentrated nitric acid produces nitrogen oxides instead of hydrogen.`
  },
  {
    id: "acs-037",
    question: `A balance sensitive to 0.01 g reads 60 g, 7 g, and 0.00 g. Mass?`,
    options: [`67.0 g`, `76.0 g`, `67.00 g`, `76.000 g`],
    correctAnswer: `67.00 g`,
    explanation: `Maintain significant figures for the precision of the balance.`
  },
  {
    id: "acs-038",
    question: `Oxygen and ozone are:`,
    options: [`Isomers`, `Isobars`, `Allotropes`, `Isotopes`],
    correctAnswer: `Allotropes`,
    explanation: `Different forms of the same element.`
  },
  {
    id: "acs-039",
    question: `Instrument to measure heat gain/loss?`,
    options: [`Manometer`, `Hydrometer`, `Calorimeter`, `Barometer`],
    correctAnswer: `Calorimeter`,
    explanation: `Calorimeters measure heat exchange.`
  },
  {
    id: "acs-040",
    question: `Molar volume of ideal gas at STP?`,
    options: [`2.36 L`, `1.00 L`, `0.082 L`, `22.4 L`],
    correctAnswer: `22.4 L`,
    explanation: `Standard molar volume is 22.4 L.`
  },
  {
    id: "acs-041",
    question: `Increase internal energy ($\\Delta U$) of a system?`,
    options: [`Lose heat, do work`, `Gain heat, work done on it`, `Lose heat, work on it`, `Gain heat, do work`],
    correctAnswer: `Gain heat, work done on it`,
    explanation: `$\\Delta U = q + w$. Positive $q$ and $w$ increase energy.`
  },
  {
    id: "acs-042",
    question: `Bohr transition emitting highest energy photon?`,
    options: [`$n=1 \\rightarrow 6$`, `$n=6 \\rightarrow 1$`, `$n=6 \\rightarrow 3$`, `$n=3 \\rightarrow 6$`],
    correctAnswer: `$n=6 \\rightarrow 1$`,
    explanation: `Emission is high to low; $n=6$ to $n=1$ is the largest gap.`
  },
  {
    id: "acs-043",
    question: `Formula for Ca and X if Na forms $Na_3X$?`,
    options: [`$CaX_2$`, `$CaX$`, `$Ca_2X_3$`, `$Ca_3X_2$`],
    correctAnswer: `$Ca_3X_2$`,
    explanation: `X must be -3. Ca is +2. Balances to $Ca_3X_2$.`
  },
  {
    id: "acs-044",
    question: `IUPAC name for $SnCl_4$?`,
    options: [`Tin chloride`, `Tin (II) chloride`, `Tin (IV) chloride`, `Tin tetrachloride`],
    correctAnswer: `Tin (IV) chloride`,
    explanation: `Tin is +4 here.`
  },
  {
    id: "acs-045",
    question: `9.49 g $H_2$ at 355 K and 2 atm (Initial: 12.28 g, 100 L, 400 K, 2 atm). Volume?`,
    options: [`109 L`, `68.2 L`, `54.7 L`, `77.3 L`],
    correctAnswer: `68.2 L`,
    explanation: `$V_2 = V_1 \\times (n_2/n_1) \\times (T_2/T_1)$.`
  },
  {
    id: "acs-046",
    question: `Molecular geometry of $SF_4$?`,
    options: [`Tetrahedral`, `Square planar`, `See-saw`, `Trigonal bipyramidal`],
    correctAnswer: `See-saw`,
    explanation: `AX4E structure results in see-saw.`
  },
  {
    id: "acs-047",
    question: `Highest lattice energy?`,
    options: [`LiF`, `$MgCl_2$`, `$CaBr_2$`, `$C_2H_6$`],
    correctAnswer: `$MgCl_2$`,
    explanation: `Higher ionic charges ($Mg^{2+}$) lead to higher lattice energy.`
  },
  {
    id: "acs-048",
    question: `Which is planar?`,
    options: [`$CF_4$`, `$COF_2$`, `$SF_4$`, `$SOF_2$`],
    correctAnswer: `$COF_2$`,
    explanation: `Trigonal planar geometry around carbon.`
  },
  {
    id: "acs-049",
    question: `IMF in propanol ($C_3H_7OH$)?`,
    options: [`Dispersion/Ion-dipole`, `Dispersion/Dipole-dipole`, `H-bond/Ion-dipole`, `Dispersion/Dipole/H-bond`],
    correctAnswer: `Dispersion/Dipole/H-bond`,
    explanation: `Alcohol contains OH (H-bond) and is polar.`
  },
  {
    id: "acs-050",
    question: `Oxidizer to reducer ratio: $P + HNO_3 + H_2O \\rightarrow H_3PO_4 + NO$?`,
    options: [`1:1`, `5:2`, `5:3`, `3:5`],
    correctAnswer: `5:3`,
    explanation: `P oxidation (+5), N reduction (-3). Balance is 5:3.`
  },
  {
    id: "acs-051",
    question: `Molarity of 25.0 g $BaCl_2$ in 450 mL?`,
    options: [`0.267 M`, `0.534 M`, `0.120 M`, `0.0556 M`],
    correctAnswer: `0.267 M`,
    explanation: `$25 / 208.2 / 0.45 = 0.267$.`
  },
  {
    id: "acs-052",
    question: `Mass of $K_2CO_3$ for 250 mL of 0.150 M?`,
    options: [`5.18 g`, `2.59 g`, `10.4 g`, `1.38 g`],
    correctAnswer: `5.18 g`,
    explanation: `$0.25 \\times 0.15 \\times 138.2 = 5.18$.`
  },
  {
    id: "acs-053",
    question: `Oxidation number of sulfur in $S_2O_3^{2-}$?`,
    options: [`+2`, `+4`, `+6`, `-2`],
    correctAnswer: `+2`,
    explanation: `$2x - 6 = -2 \\implies 2x = 4 \\implies x = 2$.`
  },
  {
    id: "acs-054",
    question: `Moles of H atoms in 6 moles $Ca(OH)_2$?`,
    options: [`2`, `6`, `8`, `12`],
    correctAnswer: `12`,
    explanation: `$6 \\times 2 = 12$.`
  },
  {
    id: "acs-055",
    question: `Element with largest percent mass in $(NH_4)_2S_2O_3$?`,
    options: [`H`, `N`, `O`, `S`],
    correctAnswer: `S`,
    explanation: `Total S mass is 64; N is 28; O is 48.`
  },
  {
    id: "acs-056",
    question: `Volume of 0.125 M $H_2SO_4$ to neutralize 25.0 mL 0.250 M NaOH?`,
    options: [`12.5 mL`, `25.0 mL`, `50.0 mL`, `100 mL`],
    correctAnswer: `25.0 mL`,
    explanation: `$2 \\times M_aV_a = M_bV_b$.`
  },
  {
    id: "acs-057",
    question: `NOT allowed quantum set?`,
    options: [`3, 2, 0`, `2, 1, -1`, `1, 0, 0`, `2, 2, 1`],
    correctAnswer: `2, 2, 1`,
    explanation: `$l$ must be less than $n$.`
  },
  {
    id: "acs-058",
    question: `Largest dipole moment?`,
    options: [`$CCl_4$`, `$NH_3$`, `$BF_3$`, `$CO_2$`],
    correctAnswer: `$NH_3$`,
    explanation: `Polar due to lone pair and geometry.`
  },
  {
    id: "acs-059",
    question: `Formal charge on P in $PO_4^{3-}$?`,
    options: [`-1`, `0`, `+1`, `+5`],
    correctAnswer: `0`,
    explanation: `In standard structure with one double bond.`
  },
  {
    id: "acs-060",
    question: `Hybridization of C in $C_2H_2$?`,
    options: [`sp`, `$sp^2$`, `$sp^3$`, `$dsp^2$`],
    correctAnswer: `sp`,
    explanation: `Linear triple-bonded carbon.`
  },
  {
    id: "acs-061",
    question: `Sigma and pi bonds in $CH_2=CH-CN$?`,
    options: [`6 $\\sigma$, 3 $\\pi$`, `4 $\\sigma$, 3 $\\pi$`, `7 $\\sigma$, 3 $\\pi$`, `5 $\\sigma$, 2 $\\pi$`],
    correctAnswer: `6 $\\sigma$, 3 $\\pi$`,
    explanation: `Counting single and multiple bonds.`
  },
  {
    id: "acs-062",
    question: `Gas diffusing fastest?`,
    options: [`$CH_4$`, `$O_2$`, `$CO_2$`, `$N_2$`],
    correctAnswer: `$CH_4$`,
    explanation: `Lightest gas moves fastest.`
  },
  {
    id: "acs-063",
    question: `Oxidation state of Cr in $K_2Cr_2O_7$?`,
    options: [`+3`, `+5`, `+6`, `+7`],
    correctAnswer: `+6`,
    explanation: `$2 + 2x - 14 = 0$.`
  },
  {
    id: "acs-064",
    question: `Largest 1st ionization energy?`,
    options: [`Li`, `Be`, `B`, `C`],
    correctAnswer: `C`,
    explanation: `Increases across period.`
  },
  {
    id: "acs-065",
    question: `Strong electrolyte?`,
    options: [`$CH_3COOH$`, `$NH_3$`, `$HCl$`, `$H_2O$`],
    correctAnswer: `$HCl$`,
    explanation: `Strong acid.`
  },
  {
    id: "acs-066",
    question: `High boiling point of water is due to:`,
    options: [`Ionic`, `Covalent`, `H-bond`, `Dispersion`],
    correctAnswer: `H-bond`,
    explanation: `Strongest IMF in water.`
  },
  {
    id: "acs-067",
    question: `Temperature independent unit?`,
    options: [`Molarity`, `Molality`, `Vol%`, `Normality`],
    correctAnswer: `Molality`,
    explanation: `Based on mass of solvent.`
  },
  {
    id: "acs-068",
    question: `pH of 0.01 M HCl?`,
    options: [`1`, `2`, `7`, `12`],
    correctAnswer: `2`,
    explanation: `$-\\log(0.01) = 2$.`
  },
  {
    id: "acs-069",
    question: `Shape of $H_2O$?`,
    options: [`Linear`, `Bent`, `Tetrahedral`, `Planar`],
    correctAnswer: `Bent`,
    explanation: `Bent due to two lone pairs.`
  },
  {
    id: "acs-070",
    question: `Intensive property?`,
    options: [`Mass`, `Volume`, `Density`, `Heat capacity`],
    correctAnswer: `Density`,
    explanation: `Independent of amount.`
  },
  {
    id: "acs-071",
    question: `Orbital after 4s?`,
    options: [`4p`, `3d`, `5s`, `4d`],
    correctAnswer: `3d`,
    explanation: `Aufbau order.`
  },
  {
    id: "acs-072",
    question: `Empirical formula 40% C, 6.7% H, 53.3% O?`,
    options: [`$CH_2O$`, `$C_2H_4O_2$`, `$CHO$`, `$C_2H_2O$`],
    correctAnswer: `$CH_2O$`,
    explanation: `1:2:1 ratio.`
  },
  {
    id: "acs-073",
    question: `Buffer system?`,
    options: [`$HCl/NaCl$`, `$NaOH/NaCl$`, `$NH_3/NH_4Cl$`, `$HNO_3/NaNO_3$`],
    correctAnswer: `$NH_3/NH_4Cl$`,
    explanation: `Weak base + conjugate acid.`
  },
  {
    id: "acs-074",
    question: `Volume of 1 mol gas at 273 K, 2 atm?`,
    options: [`22.4 L`, `11.2 L`, `44.8 L`, `5.6 L`],
    correctAnswer: `11.2 L`,
    explanation: `Half of standard molar volume.`
  },
  {
    id: "acs-075",
    question: `Strongest acid?`,
    options: [`$HF$`, `$HCl$`, `$HBr$`, `$HI$`],
    correctAnswer: `$HI$`,
    explanation: `Strength increases down group.`
  },
  {
    id: "acs-076",
    question: `Smallest atomic radius?`,
    options: [`Na`, `Mg`, `Al`, `Si`],
    correctAnswer: `Si`,
    explanation: `Decreases across period.`
  },
  {
    id: "acs-077",
    question: `Angle $109.5^{\\circ}$?`,
    options: [`Linear`, `Planar`, `Tetrahedral`, `Bent`],
    correctAnswer: `Tetrahedral`,
    explanation: `Ideal tetrahedral angle.`
  },
  {
    id: "acs-078",
    question: `Losing electrons is:`,
    options: [`Reduction`, `Oxidation`, `Ionization`, `Sublimation`],
    correctAnswer: `Oxidation`,
    explanation: `LEO goes GER.`
  },
  {
    id: "acs-079",
    question: `Definite volume, no definite shape?`,
    options: [`Solid`, `Liquid`, `Gas`, `Plasma`],
    correctAnswer: `Liquid`,
    explanation: `Liquids flow but don't compress.`
  },
  {
    id: "acs-080",
    question: `Negative subatomic particle?`,
    options: [`Proton`, `Neutron`, `Electron`, `Positron`],
    correctAnswer: `Electron`,
    explanation: `Electrons carry negative charge.`
  },
  {
    id: "acs-081",
    question: `Physical change?`,
    options: [`Burning`, `Rusting`, `Melting`, `Cooking`],
    correctAnswer: `Melting`,
    explanation: `State change only.`
  },
  {
    id: "acs-082",
    question: `Vertical columns?`,
    options: [`Groups`, `Periods`, `Rows`, `Series`],
    correctAnswer: `Groups`,
    explanation: `Groups/Families.`
  },
  {
    id: "acs-083",
    question: `Most abundant element in universe?`,
    options: [`He`, `O`, `C`, `H`],
    correctAnswer: `H`,
    explanation: `75% of mass.`
  },
  {
    id: "acs-084",
    question: `Unit of energy?`,
    options: [`Watt`, `Joule`, `Pascal`, `Newton`],
    correctAnswer: `Joule`,
    explanation: `SI unit for energy.`
  },
  {
    id: "acs-085",
    question: `Mixture?`,
    options: [`Water`, `Salt`, `Air`, `Oxygen`],
    correctAnswer: `Air`,
    explanation: `Homogeneous gas mixture.`
  },
  {
    id: "acs-086",
    question: `pH of pure water?`,
    options: [`0`, `1`, `7`, `14`],
    correctAnswer: `7`,
    explanation: `Neutral pH.`
  },
  {
    id: "acs-087",
    question: `Atomic number is number of:`,
    options: [`Protons`, `Neutrons`, `Electrons`, `Nucleons`],
    correctAnswer: `Protons`,
    explanation: `Determines identity.`
  },
  {
    id: "acs-088",
    question: `Noble gas?`,
    options: [`H`, `O`, `Ne`, `F`],
    correctAnswer: `Ne`,
    explanation: `Group 18.`
  },
  {
    id: "acs-089",
    question: `Oxidation state of O in $H_2O_2$?`,
    options: [`-2`, `-1`, `0`, `+1`],
    correctAnswer: `-1`,
    explanation: `Peroxide special case.`
  },
  {
    id: "acs-090",
    question: `Strongest bond?`,
    options: [`$C-C$`, `$C=C$`, `$C\\equiv C$`, `Equal`],
    correctAnswer: `$C\\equiv C$`,
    explanation: `Triple bonds are shortest/strongest.`
  },
  {
    id: "acs-091",
    question: `Charge of alpha particle?`,
    options: [`-1`, `0`, `+1`, `+2`],
    correctAnswer: `+2`,
    explanation: `Helium nucleus.`
  },
  {
    id: "acs-092",
    question: `Reaction absorbing heat?`,
    options: [`Exothermic`, `Endothermic`, `Isothermic`, `Adiabatic`],
    correctAnswer: `Endothermic`,
    explanation: `$\\Delta H > 0$.`
  },
  {
    id: "acs-093",
    question: `Horizontal rows?`,
    options: [`Groups`, `Periods`, `Families`, `Columns`],
    correctAnswer: `Periods`,
    explanation: `Represent energy levels.`
  },
  {
    id: "acs-094",
    question: `Symbol for silver?`,
    options: [`Si`, `Ag`, `Au`, `S`],
    correctAnswer: `Ag`,
    explanation: `Argentum.`
  },
  {
    id: "acs-095",
    question: `Element in all organic compounds?`,
    options: [`O`, `N`, `C`, `S`],
    correctAnswer: `C`,
    explanation: `Basis of organic chem.`
  },
  {
    id: "acs-096",
    question: `Main component of air?`,
    options: [`Oxygen`, `Nitrogen`, `Argon`, `$CO_2$`],
    correctAnswer: `Nitrogen`,
    explanation: `78% of air.`
  },
  {
    id: "acs-097",
    question: `Density of water?`,
    options: [`1 g/mL`, `1 kg/mL`, `0.5 g/mL`, `10 g/mL`],
    correctAnswer: `1 g/mL`,
    explanation: `Reference density.`
  },
  {
    id: "acs-098",
    question: `Ion for acidity?`,
    options: [`$OH^{-}$`, `$Cl^{-}$`, `$H^{+}$`, `$Na^{+}$`],
    correctAnswer: `$H^{+}$`,
    explanation: `Proton concentration.`
  },
  {
    id: "acs-099",
    question: `Methane formula?`,
    options: [`$CH_4$`, `$C_2H_6$`, `$CH_3OH$`, `$CO_2$`],
    correctAnswer: `$CH_4$`,
    explanation: `Simplest alkane.`
  },
  {
    id: "acs-100",
    question: `Mass of 0.5 mol $H_2O$?`,
    options: [`9 g`, `18 g`, `36 g`, `1 g`],
    correctAnswer: `9 g`,
    explanation: `18/2 = 9.`
  }
];
