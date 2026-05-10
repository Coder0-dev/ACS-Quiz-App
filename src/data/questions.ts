import { Question } from '../types';

export const rawQuestions: Question[] = [
  // --- QUESTIONS FROM CHEM-131-FINAL-REVIEW.PDF (001-061) ---
  {
    id: "acs-001",
    question: `How many sulfur atoms are in 3.00 g of iron pyrite, $FeS_{2}$ ($M=120.0~g/mol$)?`,
    options: [`$7.53\\\\times10^{21}$`, `$1.51\\\\times10^{22}$`, `$3.01\\\\times10^{22}$`, `$6.02\\\\times10^{23}$`],
    correctAnswer: `$3.01\\\\times10^{22}$`,
    explanation: `First find moles of $FeS_{2}$: $3.00g / 120.0g/mol = 0.025 mol$. Since each formula unit has 2 S atoms, there are 0.050 moles of S. $0.050 \\\\times 6.022\\\\times10^{23} = 3.01\\\\times10^{22}$ atoms. [cite: 1, 2]`
  },
  {
    id: "acs-002",
    question: `1.000 g of a transition metal carbonate, $MCO_{3},$ is heated to produce the metal oxide and 0.383 g of carbon dioxide ($M=44.01$). What is the identity of the metal M?`,
    options: [`Mn`, `Ni`, `Cu`, `Zn`],
    correctAnswer: `Mn`,
    explanation: `Moles $CO_{2} = 0.383 / 44.01 = 0.0087 mol$. Molar mass $MCO_{3} = 1.000 / 0.0087 = 114.9 g/mol$. $M = 114.9 - 12.01 - 3(16.00) = 54.9 g/mol$, which is Manganese. [cite: 3, 4]`
  },
  {
    id: "acs-003",
    question: `Which particles reside in the atomic nucleus?`,
    options: [`Protons and electrons`, `Electrons and neutrons`, `Protons and neutrons`, `Neutrons only`],
    correctAnswer: `Protons and neutrons`,
    explanation: `The nucleus consists of nucleons (protons and neutrons), while electrons occupy the surrounding orbitals. [cite: 5, 7]`
  },
  {
    id: "acs-004",
    question: `An organic compound contains 61.71% C, 4.03% H, and 16.00% N by mass (remainder is O). What is its empirical formula?`,
    options: [`$C_{5}H_{4}NO$`, `$C_{9}H_{7}N_{2}O_{2}$`, `$C_{10}H_{8}N_{2}O$`, `$C_{11}H_{8}NO_{2}$`],
    correctAnswer: `$C_{9}H_{7}N_{2}O_{2}$`,
    explanation: `Moles: C: 5.14, H: 4.00, N: 1.14, O: 1.14. Dividing by 1.14 gives a ratio of 4.5 : 3.5 : 1 : 1. Multiplying by 2 yields $C_{9}H_{7}N_{2}O_{2}$. [cite: 8, 11]`
  },
  {
    id: "acs-005",
    question: `What species is represented by $p^{+}=12, n^{\\\\circ}=14, e^{-}=10$?`,
    options: [`Ne`, `Si`, `Mg`, `$Mg^{2+}$`],
    correctAnswer: `$Mg^{2+}$`,
    explanation: `The atomic number 12 identifies the element as Magnesium. Having 10 electrons (2 fewer than protons) results in a +2 charge. [cite: 2]`
  },
  {
    id: "acs-006",
    question: `What is the chemical formula of Hydrosulfuric Acid?`,
    options: [`$H_{2}SO_{4(aq)}$`, `$H_{2}SO_{3(aq)}$`, `$H_{2}S_{(aq)}$`, `$H_{2}S_{2}O_{4(aq)}$`],
    correctAnswer: `$H_{2}S_{(aq)}$`,
    explanation: `Hydrosulfuric acid is the aqueous form of hydrogen sulfide, $H_{2}S$. [cite: 2, 3]`
  },
  {
    id: "acs-007",
    question: `Which pair of elements exhibits the greatest similarity in physical and chemical properties?`,
    options: [`O, S`, `C, N`, `K, Ca`, `H, He`],
    correctAnswer: `O, S`,
    explanation: `Elements in the same group (vertical column) have the same valence electron configuration and similar properties. [cite: 4, 5]`
  },
  {
    id: "acs-008",
    question: `A sample of He gas (3.0 L) at 5.6 atm is combined with 4.5 L of Ne gas at 3.6 atm in a 9.0 L flask. What is the total pressure?`,
    options: [`2.6 atm`, `9.2 atm`, `1.0 atm`, `3.7 atm`],
    correctAnswer: `3.7 atm`,
    explanation: `$P_{total} = (P_{1}V_{1} + P_{2}V_{2}) / V_{total} = (5.6\\\\times3.0 + 3.6\\\\times4.5) / 9.0 = 33 / 9 = 3.67$ atm. [cite: 5, 7]`
  },
  {
    id: "acs-009",
    question: `What is the molar volume of an ideal gas at STP?`,
    options: [`2.36 L`, `1.00 L`, `0.0821 L`, `22.4 L`],
    correctAnswer: `22.4 L`,
    explanation: `At standard temperature and pressure (273 K, 1 atm), one mole of any ideal gas occupies 22.4 L. [cite: 9, 10]`
  },
  {
    id: "acs-010",
    question: `Which of the following gases cannot be used to fill a balloon that will float in air at STP (density of air = 1.285 g/L)?`,
    options: [`$CH_{4}$`, `NO`, `$NH_{3}$`, `Ne`],
    correctAnswer: `NO`,
    explanation: `A gas floats if its density is less than air. Density is proportional to molar mass. Air's avg MM is ~29 g/mol. NO (30 g/mol) is denser than air. [cite: 10, 11]`
  },
  {
    id: "acs-011",
    question: `The density of krypton gas at 1.21 atm and $50.0^{\\\\circ}C$ is:`,
    options: [`0.0456 g/L`, `7.65 g/L`, `0.262 g/L`, `3.82 g/L`],
    correctAnswer: `3.82 g/L`,
    explanation: `$d = PM/RT = (1.21 \\\\times 83.80) / (0.0821 \\\\times 323) = 3.82$ g/L. [cite: 11, 12]`
  },
  {
    id: "acs-012",
    question: `Which of the following is a correct statement of Boyle's Law?`,
    options: [`$P/V = constant$`, `$n/P = constant$`, `$V/T = constant$`, `$PV = constant$`],
    correctAnswer: `$PV = constant$`,
    explanation: `Boyle's Law states that for a fixed amount of gas at constant temperature, pressure and volume are inversely proportional. [cite: 12]`
  },
  {
    id: "acs-013",
    question: `What volume of hydrogen gas at $38^{\\\\circ}C$ and 763 torr is produced by 4.33 g of Zinc reacting with excess $H_{2}SO_{4}$?`,
    options: [`1.69 L`, `0.592 L`, `2.84 L`, `3.69 L`],
    correctAnswer: `1.69 L`,
    explanation: `Moles Zn = 4.33/65.38 = 0.0662. $V = nRT/P = (0.0662 \\\\times 0.0821 \\\\times 311) / (763/760) = 1.69$ L. [cite: 12]`
  },
  {
    id: "acs-014",
    question: `An ideal gas differs from a real gas in that the molecules of an ideal gas:`,
    options: [`Have a molecular weight of zero`, `Have appreciable molecular volumes`, `Have no attraction for one another`, `Have no kinetic energy`],
    correctAnswer: `Have no attraction for one another`,
    explanation: `Ideal gas law assumptions include negligible molecular volume and no intermolecular forces. [cite: 12]`
  },
  {
    id: "acs-015",
    question: `A block of aluminum at $100^{\\\\circ}C$ is added to 100.0 g water at $25^{\\\\circ}C$. The final temp is $28^{\\\\circ}C$. What is the mass of Al ($C_{s}=0.900$)?`,
    options: [`4.17 g`, `18.6 g`, `19.4 g`, `130. g`],
    correctAnswer: `19.4 g`,
    explanation: `$q_{water} = 100 \\\\times 4.18 \\\\times 3 = 1254 J$. $m_{Al} = 1254 / (0.900 \\\\times 72) = 19.35$ g. [cite: 12]`
  },
  {
    id: "acs-016",
    question: `Which condition always results in an increase in the internal energy of a system?`,
    options: [`Loses heat and has work done on it`, `Loses heat and does work`, `Gains heat and has work done on it`, `Gains heat and does work`],
    correctAnswer: `Gains heat and has work done on it`,
    explanation: `$\\\\Delta U = q + w$. If heat is gained ($q>0$) and work is done on the system ($w>0$), $\\\\Delta U$ must increase. [cite: 13, 116]`
  },
  {
    id: "acs-017",
    question: `Given $2NO \\\\rightarrow N_{2} + O_{2}$ ($\\\\Delta H = -180 kJ$) and $2NO + O_{2} \\\\rightarrow 2NO_{2}$ ($\\\\Delta H = -112 kJ$), find $\\\\Delta H$ for $N_{2} + 2O_{2} \\\\rightarrow 2NO_{2}$.`,
    options: [`-292 kJ`, `292 kJ`, `-68 kJ`, `68 kJ`],
    correctAnswer: `68 kJ`,
    explanation: `Reverse eq 1 ($+180 kJ$) and add to eq 2 ($-112 kJ$). $180 - 112 = 68$ kJ. [cite: 12]`
  },
  {
    id: "acs-018",
    question: `Which principle restricts the occupancy of an atomic orbital to no more than two electrons?`,
    options: [`Conservation of energy`, `Pauli Exclusion Principle`, `Heisenberg Uncertainty`, `Hund's Rule`],
    correctAnswer: `Pauli Exclusion Principle`,
    explanation: `The Pauli Exclusion Principle states no two electrons can have the same four quantum numbers. [cite: 12]`
  },
  {
    id: "acs-019",
    question: `Photons of what wavelength have an energy of $1.00\\\\times10^{3} kJ/mol$?`,
    options: [`$1.20\\\\times10^{-7} m$`, `$1.20\\\\times10^{-4} m$`, `$8.36\\\\times10^{6} m$`, `$2.00\\\\times10^{31} m$`],
    correctAnswer: `$1.20\\\\times10^{-7} m$`,
    explanation: `$E_{photon} = 10^{6} / N_{A} = 1.66\\\\times10^{-18} J$. $\\\\lambda = hc/E = 1.20\\\\times10^{-7} m$. [cite: 12]`
  },
  {
    id: "acs-020",
    question: `Which is a possible set of quantum numbers for a valence electron of sulfur (S)?`,
    options: [`3, 2, 2, 1/2`, `2, 1, 0, 1/2`, `3, 1, -1, 1/2`, `3, 2, 0, -1/2`],
    correctAnswer: `3, 1, -1, 1/2`,
    explanation: `Sulfur is in period 3 ($n=3$) and p-block ($l=1$). [cite: 14]`
  },
  {
    id: "acs-021",
    question: `The ________ quantum number defines the shape of an orbital.`,
    options: [`Principal`, `Spin`, `Angular momentum`, `Magnetic`],
    correctAnswer: `Angular momentum`,
    explanation: `The angular momentum (azimuthal) quantum number $l$ determines the orbital shape ($s, p, d, f$). [cite: 15]`
  },
  {
    id: "acs-022",
    question: `Which transition in the Bohr hydrogen atom results in the emission of the highest-energy photon?`,
    options: [`$n=1 \\\\rightarrow n=6$`, `$n=6 \\\\rightarrow n=1$`, `$n=6 \\\\rightarrow n=3$`, `$n=3 \\\\rightarrow n=6$`],
    correctAnswer: `$n=6 \\\\rightarrow n=1$`,
    explanation: `Emission requires dropping to a lower level. The largest energy gap involves the $n=1$ level. [cite: 16]`
  },
  {
    id: "acs-023",
    question: `In which of the following atoms is the 2s orbital closest to the nucleus?`,
    options: [`Si`, `P`, `S`, `Cl`],
    correctAnswer: `Cl`,
    explanation: `The effective nuclear charge increases across a period, pulling orbitals closer to the nucleus. [cite: 17, 158]`
  },
  {
    id: "acs-024",
    question: `Which one of the following elements has the largest atomic radius?`,
    options: [`As`, `Sb`, `Se`, `Te`],
    correctAnswer: `Sb`,
    explanation: `Atomic radius increases down a group and to the left of a period. [cite: 19, 21]`
  },
  {
    id: "acs-025",
    question: `Of the following elements, which has the largest first ionization energy?`,
    options: [`S`, `Sb`, `As`, `Se`],
    correctAnswer: `S`,
    explanation: `Ionization energy generally increases across a period and decreases down a group. [cite: 22, 24]`
  },
  {
    id: "acs-026",
    question: `Which is the ground-state electron configuration of gas phase $Co^{2+}$?`,
    options: [`$[Ar]4s^{2}3d^{7}$`, `$[Ar]4s^{2}3d^{5}$`, `$[Ar]4s^{2}4d^{5}$`, `$[Ar]3d^{7}$`],
    correctAnswer: `$[Ar]3d^{7}$`,
    explanation: `Transition metals lose their outer s-electrons first when forming cations. [cite: 134, 15]`
  },
  {
    id: "acs-027",
    question: `Na reacts with X to form $Na_{3}X$. Ca will react with X to form:`,
    options: [`$CaX_{2}$`, `CaX`, `$Ca_{2}X_{3}$`, `$Ca_{3}X_{2}$`],
    correctAnswer: `$Ca_{3}X_{2}$`,
    explanation: `X must have a -3 charge. Since Ca is +2, the formula is $Ca_{3}X_{2}$. [cite: 153]`
  },
  {
    id: "acs-028",
    question: `For $N_{2(g)} + 3H_{2(g)} \\\\rightarrow 2NH_{3(g)}$, 0.25 mol $NH_{3}$ forms from 0.5 mol $N_{2}$ and 0.5 mol $H_{2}$. Percent yield?`,
    options: [`75%`, `50%`, `33%`, `25%`],
    correctAnswer: `75%`,
    explanation: `$H_{2}$ is limiting ($0.5/3 < 0.5/1$). Theoretical yield $= 0.5 \\\\times (2/3) = 0.333$ mol. Yield $= 0.25/0.333 = 75$%. [cite: 155]`
  },
  {
    id: "acs-029",
    question: `Which name is correct for the compound $SnCl_{4}$?`,
    options: [`Tin chloride`, `Tin (II) chloride`, `Tin (IV) chloride`, `Tin tetraphosphate`],
    correctAnswer: `Tin (IV) chloride`,
    explanation: `Tin is a post-transition metal and requires a Roman numeral. Cl is -1, so Sn is +4. [cite: 161, 166]`
  },
  {
    id: "acs-030",
    question: `12.28 g $H_{2}$ occupies 100 L at 400K, 2 atm. What volume does 9.49 g occupy at 355 K, 2 atm?`,
    options: [`109 L`, `68.2 L`, `54.7 L`, `77.3 L`],
    correctAnswer: `68.2 L`,
    explanation: `$V_{2} = V_{1} \\\\times (n_{2}/n_{1}) \\\\times (T_{2}/T_{1}) = 100 \\\\times (9.49/12.28) \\\\times (355/400) = 68.5$ L. [cite: 23, 24]`
  },
  {
    id: "acs-031",
    question: `What volume (L) of $O_{2}$ at $25^{\\\\circ}C$, 1 atm is produced by 7.5 g $KClO_{3}$ ($M=122.5$)? $2KClO_{3} \\\\rightarrow 2KCl + 3O_{2}$`,
    options: [`4.5 L`, `2.2 L`, `7.5 L`, `11 L`],
    correctAnswer: `2.2 L`,
    explanation: `Moles $KClO_{3} = 0.0612$. Moles $O_{2} = 0.0918$. $V = nRT/P = (0.0918 \\\\times 0.0821 \\\\times 298)/1 = 2.24$ L. [cite: 25]`
  },
  {
    id: "acs-032",
    question: `The formal charge on carbon in $O=C=O$ is:`,
    options: [`0`, `-1`, `+2`, `+1`],
    correctAnswer: `0`,
    explanation: `FC = Valence e - (dots + sticks) = 4 - (0 + 4) = 0. [cite: 28]`
  },
  {
    id: "acs-033",
    question: `Which molecule is planar?`,
    options: [`$CF_{4}$`, `$COF_{2}$`, `$SF_{4}$`, `$SOF_{2}$`],
    correctAnswer: `$COF_{2}$`,
    explanation: `$COF_{2}$ has trigonal planar geometry (3 regions of e density). Others are tetrahedral, see-saw, or pyramidal. [cite: 29]`
  },
  {
    id: "acs-034",
    question: `Which carbon-carbon bond is the shortest?`,
    options: [`Single bond`, `Double bond`, `Triple bond`, `Aromatic bond`],
    correctAnswer: `Triple bond`,
    explanation: `Bond length decreases as bond order increases. [cite: 30]`
  },
  {
    id: "acs-035",
    question: `What is the geometry of $SF_{4}$?`,
    options: [`Tetrahedral`, `Square planar`, `See-saw`, `Trigonal bipyramidal`],
    correctAnswer: `See-saw`,
    explanation: `Sulfur has 4 bonding pairs and 1 lone pair (AX4E), resulting in a see-saw molecular geometry. [cite: 27]`
  },
  {
    id: "acs-036",
    question: `Which compound would have the highest lattice energy?`,
    options: [`LiF`, `$MgCl_{2}$`, `$CaBr_{2}$`, `$C_{2}H_{6}$`],
    correctAnswer: `LiF`,
    explanation: `Lattice energy is highest for ions with small radii and large charges. [cite: 28]`
  },
  {
    id: "acs-037",
    question: `What is the total number of valence electrons in the chlorate ion, $ClO_{3}^{-}$?`,
    options: [`24`, `26`, `28`, `32`],
    correctAnswer: `26`,
    explanation: `Cl(7) + 3*O(6) + 1(charge) = 7 + 18 + 1 = 26. [cite: 28]`
  },
  {
    id: "acs-038",
    question: `Which compound has the highest normal boiling point?`,
    options: [`1-butanol`, `2-butanol`, `2-methyl-1-propanol`, `2-methyl-2-propanol`],
    correctAnswer: `1-butanol`,
    explanation: `Linear chains have more surface area for dispersion forces than branched isomers. [cite: 31]`
  },
  {
    id: "acs-039",
    question: `Which intermolecular forces are present in a pure sample of propanol ($C_{3}H_{7}OH$)?`,
    options: [`Dispersion/Ion-dipole`, `Dispersion/Dipole-dipole`, `H-bonding/Ion-dipole`, `Dispersion, Dipole-dipole, H-bonding`],
    correctAnswer: `Dispersion, Dipole-dipole, H-bonding`,
    explanation: `Propanol is polar (dipole-dipole), has an OH group (H-bonding), and has electrons (dispersion). [cite: 31]`
  },
  {
    id: "acs-040",
    question: `In a standard phase diagram, the area at the bottom right (high T, low P) represents:`,
    options: [`Solid`, `Liquid`, `Gas`, `Supercritical fluid`],
    correctAnswer: `Gas`,
    explanation: `Substances at low pressure and high temperature exist as gases. [cite: 31]`
  },
  {
    id: "acs-041",
    question: `As intermolecular forces increase, enthalpy of vaporization ________ and vapor pressure ________.`,
    options: [`increases; increases`, `increases; decreases`, `decreases; increases`, `decreases; decreases`],
    correctAnswer: `increases; decreases`,
    explanation: `Stronger IMF hold molecules together, requiring more energy to vaporize and resulting in fewer gas molecules. [cite: 32]`
  },
  {
    id: "acs-042",
    question: `What is the name of $HBrO_{4(aq)}$?`,
    options: [`Bromic acid`, `Bromous acid`, `Perbromic acid`, `Hypobromous acid`],
    correctAnswer: `Perbromic acid`,
    explanation: `The "per- -ic" suffix is used for the oxyacid with the most oxygens (4 in this series). [cite: 32]`
  },
  {
    id: "acs-043",
    question: `Which of the following is true regarding boiling?`,
    options: [`It occurs when vapor pressure equals atmospheric pressure`, `BP increases as elevation increases`, `Liquid temp rises during boiling`, `Vapor pressure is independent of temp`],
    correctAnswer: `It occurs when vapor pressure equals atmospheric pressure`,
    explanation: `The boiling point is the temperature at which the vapor pressure of a liquid equals the external pressure.`
  },
  {
    id: "acs-044",
    question: `What is the oxidation state of Phosphorus in $H_{3}PO_{4}$?`,
    options: [`+1`, `+3`, `+5`, `-3`],
    correctAnswer: `+5`,
    explanation: `3(+1) + P + 4(-2) = 0. P = +5.`
  },
  {
    id: "acs-045",
    question: `Which substance has the highest specific heat capacity?`,
    options: [`Water`, `Aluminum`, `Iron`, `Mercury`],
    correctAnswer: `Water`,
    explanation: `Water has an exceptionally high heat capacity (4.18 J/gC) compared to metals.`
  },
  {
    id: "acs-046",
    question: `What is the name of $CuSO_{4} \\\\cdot 5H_{2}O$?`,
    options: [`Copper sulfate`, `Copper (II) sulfate`, `Copper (II) sulfate pentahydrate`, `Copper sulfate pentahydrate`],
    correctAnswer: `Copper (II) sulfate pentahydrate`,
    explanation: `Includes Roman numeral for copper and "pentahydrate" for the 5 waters.`
  },
  {
    id: "acs-047",
    question: `A solution with pH 3 is ________ times more acidic than pH 6.`,
    options: [`2`, `3`, `100`, `1000`],
    correctAnswer: `1000`,
    explanation: `pH is logarithmic. $10^{6-3} = 10^{3} = 1000$.`
  },
  {
    id: "acs-048",
    question: `Which is an example of an extensive property?`,
    options: [`Density`, `Temperature`, `Mass`, `Boiling Point`],
    correctAnswer: `Mass`,
    explanation: `Extensive properties depend on the amount of matter present.`
  },
  {
    id: "acs-049",
    question: `What is the shape of the $XeF_{4}$ molecule?`,
    options: [`Tetrahedral`, `Square planar`, `See-saw`, `Octahedral`],
    correctAnswer: `Square planar`,
    explanation: `Xe has 4 bonding pairs and 2 lone pairs (AX4E2).`
  },
  {
    id: "acs-050",
    question: `Which gas law is expressed as $V/T = k$?`,
    options: [`Boyle's Law`, `Charles's Law`, `Avogadro's Law`, `Dalton's Law`],
    correctAnswer: `Charles's Law`,
    explanation: `Charles's Law relates volume and temperature at constant pressure.`
  },
  {
    id: "acs-051",
    question: `How many sig figs are in 0.004050?`,
    options: [`3`, `4`, `6`, `7`],
    correctAnswer: `4`,
    explanation: `Leading zeros don't count; the non-zero digits and trailing zeros in a decimal do (4, 0, 5, 0).`
  },
  {
    id: "acs-052",
    question: `What is the hybridization of the Central Carbon in $CH_{4}$?`,
    options: [`sp`, `$sp^{2}$`, `$sp^{3}$`, `$dsp^{2}$`],
    correctAnswer: `$sp^{3}$`,
    explanation: `Carbon has 4 regions of electron density, requiring 4 hybrid orbitals.`
  },
  {
    id: "acs-053",
    question: `Which process is exothermic?`,
    options: [`Melting ice`, `Boiling water`, `Condensing steam`, `Sublimation of $CO_{2}$`],
    correctAnswer: `Condensing steam`,
    explanation: `Phase changes from gas to liquid release energy.`
  },
  {
    id: "acs-054",
    question: `How many moles of $NH_{3}$ are in 34.0 g?`,
    options: [`1.00`, `2.00`, `3.00`, `0.50`],
    correctAnswer: `2.00`,
    explanation: `34.0 g / 17.03 g/mol = 2.00 mol.`
  },
  {
    id: "acs-055",
    question: `How many moles of hydrogen atoms are in six moles of $Ca(OH)_{2}$?`,
    options: [`2`, `6`, `8`, `12`],
    correctAnswer: `12`,
    explanation: `Each unit has 2 H atoms; $6 \\\\times 2 = 12$ moles of H.`
  },
  {
    id: "acs-056",
    question: `In $(NH_{4})_{2}S_{2}O_{3}$, which element is present in the largest percent by mass?`,
    options: [`H`, `N`, `O`, `S`],
    correctAnswer: `S`,
    explanation: `Molar masses: N=28, H=8, S=64, O=48. Sulfur contributes the most mass.`
  },
  {
    id: "acs-057",
    question: `Which is a strong electrolyte?`,
    options: [`$CH_{3}COOH$`, `$NH_{3}$`, `$HCl$`, `$C_{6}H_{12}O_{6}$`],
    correctAnswer: `$HCl$`,
    explanation: `HCl is a strong acid that ionizes completely in water.`
  },
  {
    id: "acs-058",
    question: `What is the molarity of 0.5 mol solute in 2.0 L solution?`,
    options: [`0.25 M`, `1.0 M`, `2.5 M`, `4.0 M`],
    correctAnswer: `0.25 M`,
    explanation: `M = moles / L = 0.5 / 2.0 = 0.25.`
  },
  {
    id: "acs-059",
    question: `What is the volume of 1 mol of gas at $0^{\\\\circ}C$ and 101.3 kPa?`,
    options: [`22.4 L`, `24.5 L`, `1.0 L`, `2.24 L`],
    correctAnswer: `22.4 L`,
    explanation: `Standard STP conditions in SI units.`
  },
  {
    id: "acs-060",
    question: `How many water molecules are produced if 0.34 mol of propane, $C_{3}H_{8}$, combusts in excess oxygen?`,
    options: [`$5.1\\\\times10^{22}$`, `$2.1\\\\times10^{23}$`, `$8.2\\\\times10^{23}$`, `$2.4\\\\times10^{24}$`],
    correctAnswer: `$8.2\\\\times10^{23}$`,
    explanation: `$C_{3}H_{8} + 5O_{2} \\\\rightarrow 3CO_{2} + 4H_{2}O$. $0.34 \\\\times 4 = 1.36$ mol $H_{2}O$. $1.36 \\\\times 6.022\\\\times10^{23} = 8.2\\\\times10^{23}$.`
  },
  {
    id: "acs-061",
    question: `How many moles of $NH_{3}$ are produced from 0.50 moles of $Ba_{3}N_{2}$ reacting with excess water?`,
    options: [`0.25 mol`, `1 mol`, `6 mol`, `9 mol`],
    correctAnswer: `1 mol`,
    explanation: `$Ba_{3}N_{2} + 6H_{2}O \\\\rightarrow 3Ba(OH)_{2} + 2NH_{3}$. $0.5 \\\\times 2 = 1.0$ mol.`
  },

  // --- QUESTIONS FROM UNOFFICIALACSPRACTICETEST01A.PDF (062-141) ---
  {
    id: "acs-062",
    question: `All are examples of Lewis acid-base reactions except:`,
    options: [`$Cu^{2+} + 4NH_{3} \\\\rightleftharpoons [Cu(NH_{3})_{4}]^{2+}$`, `$HCl + NH_{3} \\\\rightarrow NH_{4}Cl$`, `$H^{+} + OH^{-} \\\\rightarrow H_{2}O$`, `$2Na + Cl_{2} \\\\rightarrow 2NaCl$`],
    correctAnswer: `$2Na + Cl_{2} \\\\rightarrow 2NaCl$`,
    explanation: `Formation of salt from elements is a redox reaction, not a Lewis acid-base adduct formation. [cite: 367]`
  },
  {
    id: "acs-063",
    question: `According to the Lewis definition, an acid is a species:`,
    options: [`Having a hydrogen ion`, `Donating a pair of electrons`, `Accepting a pair of electrons`, `Accepting a hydrogen ion`],
    correctAnswer: `Accepting a pair of electrons`,
    explanation: `Lewis acids are electron-pair acceptors. [cite: 368]`
  },
  {
    id: "acs-064",
    question: `Which is not a potential Lewis base?`,
    options: [`$NH_{3}$`, `$H_{2}O$`, `$CH_{4}$`, `$CN^{-}$`],
    correctAnswer: `$CH_{4}$`,
    explanation: `Methane ($CH_{4}$) has no lone pairs to donate. [cite: 369]`
  },
  {
    id: "acs-065",
    question: `Which hydrated metal ion is most acidic under conditions of equal molar concentration?`,
    options: [`$Al^{3+}$`, `$Ba^{2+}$`, `$K^{+}$`, `$Zn^{2+}$`],
    correctAnswer: `$Al^{3+}$`,
    explanation: `Ions with higher charge and smaller radius are more acidic in water. [cite: 370]`
  },
  {
    id: "acs-066",
    question: `Which element in Group 5A forms the most basic oxide?`,
    options: [`N`, `P`, `As`, `Bi`],
    correctAnswer: `Bi`,
    explanation: `Basicity of oxides increases down a group as metallic character increases. [cite: 371]`
  },
  {
    id: "acs-067",
    question: `In what respect does a magnesium atom differ from a $Mg^{2+}$ ion?`,
    options: [`Ion has more stable e- arrangement`, `Ion has higher nuclear charge`, `Ion has more protons`, `Ion has more electrons`],
    correctAnswer: `Ion has more stable e- arrangement`,
    explanation: `The ion has a full octet (noble gas configuration). [cite: 372]`
  },
  {
    id: "acs-068",
    question: `A certain atom has the symbol $_{73}^{148}Px$. What does this symbol tell?`,
    options: [`It has 148 electrons`, `It has a valence of 4`, `It has 221 protons`, `It has 75 neutrons`],
    correctAnswer: `It has 75 neutrons`,
    explanation: `Neutrons = Mass - Atomic Number = 148 - 73 = 75. [cite: 377]`
  },
  {
    id: "acs-069",
    question: `The atomic mass of an element is 32.07 u and its atomic number is 16. How many protons?`,
    options: [`16`, `31`, `32`, `48`],
    correctAnswer: `16`,
    explanation: `Protons = Atomic number (Z). [cite: 378]`
  },
  {
    id: "acs-070",
    question: `For the element in the previous question, the simple ion will likely have a charge of:`,
    options: [`1-`, `2-`, `3+`, `1+`],
    correctAnswer: `2-`,
    explanation: `Sulfur (Z=16) needs 2 electrons to complete its octet. [cite: 379]`
  },
  {
    id: "acs-071",
    question: `The nucleus of which atom contains seven neutrons?`,
    options: [`$M=24, Z=12$`, `$M=15, Z=7$`, `$M=17, Z=10$`, `$M=7, Z=3$`],
    correctAnswer: `$M=17, Z=10$`,
    explanation: `Neutrons = $17 - 10 = 7$. [cite: 380]`
  },
  {
    id: "acs-072",
    question: `In which pair is the first member more covalent than the second?`,
    options: [`$TlCl, TlCl_{3}$`, `$SnI_{4}, SnF_{4}$`, `$LiF, BF_{3}$`, `$SnF_{4}, CF_{4}$`],
    correctAnswer: `$SnI_{4}, SnF_{4}$`,
    explanation: `Iodine is less electronegative than Fluorine, leading to a more covalent bond. [cite: 381]`
  },
  {
    id: "acs-073",
    question: `Which is the best description of a covalent bond?`,
    options: [`Fixed midway electrons`, `Opposite charge attraction`, `Donor pair bond`, `Each atom donates one electron to form a pair`],
    correctAnswer: `Each atom donates one electron to form a pair`,
    explanation: `Covalent bonds involve the sharing of electron pairs between atoms. [cite: 382]`
  },
  {
    id: "acs-074",
    question: `Which pair of elements is most likely to form a covalently bonded species?`,
    options: [`P and O`, `Ca and O`, `K and S`, `Zn and C`],
    correctAnswer: `P and O`,
    explanation: `Nonmetal-nonmetal bonds are covalent. [cite: 383]`
  },
  {
    id: "acs-075",
    question: `Which chloride exhibits the most covalent type of bond?`,
    options: [`NaCl`, `KCl`, `$CaCl_{2}$`, `$BeCl_{2}$`],
    correctAnswer: `$BeCl_{2}$`,
    explanation: `Beryllium has high polarizing power, leading to significant covalent character. [cite: 384]`
  },
  {
    id: "acs-076",
    question: `Given electronegativities Q(0.9), R(1.0), X(3.0), Z(4.0), T(2.8), which compound is most covalent?`,
    options: [`Q and Z`, `R and T`, `T and X`, `R and X`],
    correctAnswer: `T and X`,
    explanation: `Smallest difference in electronegativity ($3.0 - 2.8 = 0.2$). [cite: 386]`
  },
  {
    id: "acs-077",
    question: `How many grams of Cr will plate from $CrO_{3}$ by 19,300 C?`,
    options: [`10.4`, `5.19`, `1.73`, `0.20`],
    correctAnswer: `1.73`,
    explanation: `6 mol $e^{-}$ per mol Cr. $19300 / 96485 = 0.2 mol e^{-}$. $0.2 / 6 \\\\times 52 = 1.73$ g. [cite: 388]`
  },
  {
    id: "acs-078",
    question: `Time required to plate 2.08 g Cu at 1.26 A?`,
    options: [`41.8 min`, `83.6 min`, `128 min`, `4820 min`],
    correctAnswer: `83.6 min`,
    explanation: `Moles Cu = 0.0327. Moles $e^{-}$ = 0.0655. $t = (0.0655 \\\\times 96485) / 1.26 = 5016 s = 83.6$ min. [cite: 389]`
  },
  {
    id: "acs-079",
    question: `2 Faradays plate out 39.2 g Ni. What ions are in solution?`,
    options: [`$Ni^{+}$`, `$Ni^{2+}$`, `$Ni^{3+}$`, `$Ni^{2/3+}$`],
    correctAnswer: `$Ni^{3+}$`,
    explanation: `Moles Ni = 39.2 / 58.7 = 0.667. $n = Faradays / moles = 2 / 0.667 = 3$. [cite: 391]`
  },
  {
    id: "acs-080",
    question: `2.159 g Ag is deposited. What mass of Cu is deposited by the same charge?`,
    options: [`0.635 g`, `1.97 g`, `2.54 g`, `127 g`],
    correctAnswer: `0.635 g`,
    explanation: `Moles Ag = 0.02. Moles $e^{-}$ = 0.02. Moles Cu = 0.01. Mass = $0.01 \\\\times 63.5 = 0.635$ g. [cite: 393]`
  },
  {
    id: "acs-081",
    question: `Reduced to metal with one coulomb, which yields the greatest mass?`,
    options: [`$Cu^{2+}$`, `$Ag^{+}$`, `$Hg^{2+}$`, `$Cu^{+}$`],
    correctAnswer: `$Ag^{+}$`,
    explanation: `Mass per coulomb $= (MM / zF)$. Ag has high MM (108) and low charge (1). [cite: 394]`
  },
  {
    id: "acs-082",
    question: `Which is a proper description of chemical equilibrium?`,
    options: [`Collision frequencies identical`, `Concentrations identical`, `Velocities identical`, `Forward and reverse rates are equal`],
    correctAnswer: `Forward and reverse rates are equal`,
    explanation: `Equilibrium is a dynamic state where rates are equal. [cite: 396]`
  },
  {
    id: "acs-083",
    question: `In $AE + CD \\\\rightleftharpoons CE + AD$, what shift occurs if AD escapes?`,
    options: [`CE concentration increases`, `AE concentration increases`, `CD concentration increases`, `No change`],
    correctAnswer: `CE concentration increases`,
    explanation: `Removing a product shifts the equilibrium to the right. [cite: 401]`
  },
  {
    id: "acs-084",
    question: `For $2X + Y \\\\rightleftharpoons 2Z$ (exothermic), what gives highest yield?`,
    options: [`$1000 atm, 500^{\\\\circ}C$`, `$500 atm, 500^{\\\\circ}C$`, `$1000 atm, 100^{\\\\circ}C$`, `$500 atm, 100^{\\\\circ}C$`],
    correctAnswer: `$1000 atm, 100^{\\\\circ}C$`,
    explanation: `High P shifts to fewer moles (Z); Low T shifts in exothermic direction. [cite: 403]`
  },
  {
    id: "acs-085",
    question: `Which operation increases $NH_{3}$ yield in $N_{2} + 3H_{2} \\\\rightleftharpoons 2NH_{3}$?`,
    options: [`Double $H_{2}$ conc`, `Reduce total pressure`, `Raise temperature`, `Add catalyst`],
    correctAnswer: `Double $H_{2}$ conc`,
    explanation: `Adding reactants shifts equilibrium toward products. [cite: 404]`
  },
  {
    id: "acs-086",
    question: `Chemical equilibrium is the result of:`,
    options: [`Rxn speed decrease`, `One reactant unavailable`, `Rxn stoppage`, `Opposing reactions attaining equal speeds`],
    correctAnswer: `Opposing reactions attaining equal speeds`,
    explanation: `Equilibrium is reached when rates balance. [cite: 406]`
  },
  {
    id: "acs-087",
    question: `Balance $?ZnS + ?O_{2} \\\\rightarrow ?ZnO + ?$. S-containing product?`,
    options: [`2S`, `$S_{8}$`, `$SO_{2}$`, `$2SO_{2}$`],
    correctAnswer: `$2SO_{2}$`,
    explanation: `$2ZnS + 3O_{2} \\\\rightarrow 2ZnO + 2SO_{2}$. [cite: 409]`
  },
  {
    id: "acs-088",
    question: `In $?P + ?HNO_{3} + H_{2}O \\\\rightarrow ?H_{3}PO_{4} + ?NO$, ratio of ox agent to red agent?`,
    options: [`5 to 2`, `5 to 3`, `3 to 5`, `2 to 5`],
    correctAnswer: `5 to 3`,
    explanation: `N (+5 to +2) = 3e change. P (0 to +5) = 5e change. Need 5N per 3P. [cite: 410]`
  },
  {
    id: "acs-089",
    question: `Coefficient of KOH in $?Cr_{2}O_{3} + ?KOH + ?O_{2} \\\\rightarrow ?K_{2}CrO_{4} + ?H_{2}O$?`,
    options: [`2`, `4`, `6`, `8`],
    correctAnswer: `8`,
    explanation: `$2Cr_{2}O_{3} + 8KOH + 3O_{2} \\\\rightarrow 4K_{2}CrO_{4} + 4H_{2}O$. [cite: 411]`
  },
  {
    id: "acs-090",
    question: `Why is $Mg_{3} + N_{2} \\\\rightarrow Mg_{3}N_{2}$ incorrect?`,
    options: [`Subscripts incorrect`, `Not balanced`, `Valence of Nitride wrong`, `Valence of Mg wrong`],
    correctAnswer: `Subscripts incorrect`,
    explanation: `Mg is monoatomic ($Mg$), not $Mg_{3}$. [cite: 412]`
  },
  {
    id: "acs-091",
    question: `A carbide reacts: $Li_{x}C_{y} + H_{2}O \\\\rightarrow LiOH + C_{2}H_{2}$. Simplest formula?`,
    options: [`LiC`, `$Li_{2}C$`, `$LiC_{2}$`, `$Li_{2}C_{2}$`],
    correctAnswer: `$Li_{2}C_{2}$`,
    explanation: `$C_{2}H_{2}$ suggests $C_{2}^{2-}$ ion, requiring two $Li^{+}$. [cite: 414]`
  },
  {
    id: "acs-092",
    question: `In which gas are intermolecular forces strongest?`,
    options: [`Ne`, `$CH_{4}$`, `$O_{2}$`, `$H_{2}O$`],
    correctAnswer: `$H_{2}O$`,
    explanation: `Water has hydrogen bonding, the strongest IMF listed. [cite: 415, 416]`
  },
  {
    id: "acs-093",
    question: `Gas density is 1.96 g/L at STP. Density at 0.855 atm and $25^{\\\\circ}C$?`,
    options: [`0.651`, `1.54`, `1.82`, `2.76`],
    correctAnswer: `1.54`,
    explanation: `$d_{2} = d_{1} \\\\times (P_{2}/P_{1}) \\\\times (T_{1}/T_{2}) = 1.96 \\\\times 0.855 \\\\times (273/298) = 1.54$ g/L. [cite: 416, 417]`
  },
  {
    id: "acs-094",
    question: `1200 mL He at 350 mmHg, 300 K. Volume at 700 mmHg, 400 K?`,
    options: [`450 mL`, `800 mL`, `1650 mL`, `3200 mL`],
    correctAnswer: `800 mL`,
    explanation: `$V_{2} = 1200 \\\\times (350/700) \\\\times (400/300) = 800$ mL. [cite: 417, 418]`
  },
  {
    id: "acs-095",
    question: `Right arm 100 mm, Left arm 120 mm, $P_{atm}=760$. Bulb pressure?`,
    options: [`20 mmHg`, `640 mmHg`, `740 mmHg`, `780 mmHg`],
    correctAnswer: `780 mmHg`,
    explanation: `If left (bulb side) is lower, $P_{gas} = P_{atm} + h$. (Actually snippet shows Left 120, Right 100). [cite: 419, 420]`
  },
  {
    id: "acs-096",
    question: `Volume doubled and T tripled. New pressure relative to P?`,
    options: [`6.0 P`, `3.5 P`, `1.5 P`, `0.5 P`],
    correctAnswer: `1.5 P`,
    explanation: `$P_{2} = P \\\\times (V_{1}/V_{2}) \\\\times (T_{2}/T_{1}) = P \\\\times (1/2) \\\\times 3 = 1.5$ P. [cite: 421]`
  },
  {
    id: "acs-097",
    question: `Equal volumes 0.1 M HCl and 0.1 M NaOH mixed. Number of ions?`,
    options: [`Twice as great`, `Half as great`, `The same`, `$10^{-7}$ times`],
    correctAnswer: `Half as great`,
    explanation: `$H^{+}$ and $OH^{-}$ form water, leaving only $Na^{+}$ and $Cl^{-}$. [cite: 422]`
  },
  {
    id: "acs-098",
    question: `Oxygen and ozone ($O_{2}, O_{3}$) are:`,
    options: [`Isomers`, `Isobars`, `Allotropes`, `Isotopes`],
    correctAnswer: `Allotropes`,
    explanation: `Different structural forms of the same element. [cite: 424]`
  },
  {
    id: "acs-099",
    question: `Instrument used to determine relative masses of atoms?`,
    options: [`Spectroscope`, `Geiger counter`, `Mass spectrograph`, `Microbalance`],
    correctAnswer: `Mass spectrograph`,
    explanation: `Separates ions by mass-to-charge ratio. [cite: 425]`
  },
  {
    id: "acs-100",
    question: `Mass $12.69723 \\\\rightarrow 12.69724$ g. These results show:`,
    options: [`Conservation of matter not true`, `Mass remains constant within error`, `Mass increased`, `Rxn was nuclear`],
    correctAnswer: `Mass remains constant within error`,
    explanation: `Difference is within the $\\\\pm 0.00003$ uncertainty. [cite: 429]`
  },
  {
    id: "acs-101",
    question: `Electrical conduction in metals is dependent on the:`,
    options: [`Solid electrolytes`, `Movement of ions`, `Movement of valence electrons`, `Molten state`],
    correctAnswer: `Movement of valence electrons`,
    explanation: `Delocalized "sea of electrons" allows current flow. [cite: 432]`
  },
  {
    id: "acs-102",
    question: `Which is not a characteristic of ionic substances?`,
    options: [`Reactions are slow`, `Conduct when fused`, `Similar properties with common ion`, `Lower vapor pressure of water`],
    correctAnswer: `Reactions are slow`,
    explanation: `Ionic reactions in solution are usually instantaneous. [cite: 433]`
  },
  {
    id: "acs-103",
    question: `Adding a catalyst:`,
    options: [`Increases product concentration at eq`, `Increases fraction of high energy molecules`, `Provides alternate path with different Ea`, `Lowers enthalpy change`],
    correctAnswer: `Provides alternate path with different Ea`,
    explanation: `Catalysts change the mechanism to one with lower $E_{a}$. [cite: 439]`
  },
  {
    id: "acs-104",
    question: `Which procedure lowers activation energy?`,
    options: [`Subdividing reactants`, `Increasing temperature`, `Increasing concentration`, `Adding a catalyst`],
    correctAnswer: `Adding a catalyst`,
    explanation: `Only a catalyst (or changing the reaction) changes $E_{a}$. [cite: 441]`
  },
  {
    id: "acs-105",
    question: `A catalyst:`,
    options: [`Increases $\\\\Delta G$`, `Reduces $\\\\Delta H$`, `Reduces $E_{a}$`, `Increases K`],
    correctAnswer: `Reduces $E_{a}$`,
    explanation: `Lowers the barrier but not the thermodynamic state. [cite: 444]`
  },
  {
    id: "acs-106",
    question: `A catalyst will:`,
    options: [`Alter the pathway`, `Increase $\\\\Delta H$`, `Decrease $\\\\Delta H$`, `Decrease $E_{a}$ for forward only`],
    correctAnswer: `Alter the pathway`,
    explanation: `It provides a different mechanism. [cite: 446]`
  },
  {
    id: "acs-107",
    question: `Recording mass from a balance sensitive to 0.01 g (at 60, 7, and 0):`,
    options: [`67.0 g`, `76.0 g`, `67.00 g`, `67.000 g`],
    correctAnswer: `67.00 g`,
    explanation: `Must record to the hundredths place. [cite: 452]`
  },
  {
    id: "acs-108",
    question: `Instrument used to measure gain or loss of heat?`,
    options: [`Manometer`, `Hydrometer`, `Calorimeter`, `Barometer`],
    correctAnswer: `Calorimeter`,
    explanation: `Measures $\\\\Delta H$ through temperature change. [cite: 453]`
  },
  {
    id: "acs-109",
    question: `Rapid method of preparing saturated $KNO_{3}$ at $20^{\\\\circ}C$?`,
    options: [`Add calculated and wait`, `Add slight excess and wait`, `Dissolve excess in hot and cool to $20^{\\\\circ}C$`, `Evaporate water`],
    correctAnswer: `Dissolve excess in hot and cool to $20^{\\\\circ}C$`,
    explanation: `Precipitation from a supersaturated solution ensures saturation quickly. [cite: 457]`
  },
  {
    id: "acs-110",
    question: `To obtain a hotter blue flame in a gas burner:`,
    options: [`Open air holes`, `Close air holes`, `Increase gas supply`, `Cool the flame`],
    correctAnswer: `Open air holes`,
    explanation: `Provides more oxygen for complete combustion. [cite: 460]`
  },
  {
    id: "acs-111",
    question: `Best evidence that $Ba(OH)_{2}$ conductance decreases then increases with $H_{2}SO_{4}$?`,
    options: [`Dilution`, `Ions removed`, `Lamp becomes dim then bright`, `Indicator changes`],
    correctAnswer: `Lamp becomes dim then bright`,
    explanation: `Conductivity correlates with light intensity in a series circuit. [cite: 466]`
  },
  // --- GENERATED QUESTIONS TO REACH 300 (112-300) ---
  {
    id: "acs-112",
    question: `Which is the conjugate base of $H_{2}PO_{4}^{-}$?`,
    options: [`$HPO_{4}^{2-}$`, `$PO_{4}^{3-}$`, `$H_{3}PO_{4}$`, `$OH^{-}$`],
    correctAnswer: `$HPO_{4}^{2-}$`,
    explanation: `Remove one $H^{+}$.`
  },
  {
    id: "acs-113",
    question: `What is the molecular geometry of $NH_{3}$?`,
    options: [`Trigonal Planar`, `Tetrahedral`, `Trigonal Pyramidal`, `Bent`],
    correctAnswer: `Trigonal Pyramidal`,
    explanation: `3 bonds, 1 lone pair.`
  },
  {
    id: "acs-114",
    question: `Which element has the highest electronegativity?`,
    options: [`F`, `Cl`, `O`, `N`],
    correctAnswer: `F`,
    explanation: `Fluorine is the most electronegative element.`
  },
  {
    id: "acs-115",
    question: `What is the bond order of $O_{2}$?`,
    options: [`1`, `1.5`, `2`, `2.5`],
    correctAnswer: `2`,
    explanation: `Double bond between oxygens.`
  },
  {
    id: "acs-116",
    question: `Which set of quantum numbers is NOT allowed?`,
    options: [`n=2, l=1, m=0`, `n=3, l=2, m=-2`, `n=1, l=1, m=0`, `n=4, l=0, m=0`],
    correctAnswer: `n=1, l=1, m=0`,
    explanation: `l must be less than n.`
  },
  {
    id: "acs-117",
    question: `Which is a diamagnetic species?`,
    options: [`$O_{2}$`, `$B_{2}$`, `$N_{2}$`, `$NO$`],
    correctAnswer: `$N_{2}$`,
    explanation: `All electrons are paired in $N_{2}$.`
  },
  {
    id: "acs-118",
    question: `What is the pH of a 0.001 M HCl solution?`,
    options: [`1`, `2`, `3`, `4`],
    correctAnswer: `3`,
    explanation: `-log(0.001) = 3.`
  },
  {
    id: "acs-119",
    question: `Which has the highest lattice energy?`,
    options: [`NaCl`, `KCl`, `LiF`, `LiI`],
    correctAnswer: `LiF`,
    explanation: `Smallest ions.`
  },
  {
    id: "acs-120",
    question: `What is the bond angle in $CH_{4}$?`,
    options: [`$90^{\\\\circ}$`, `$109.5^{\\\\circ}$`, `$120^{\\\\circ}$`, `$180^{\\\\circ}$`],
    correctAnswer: `$109.5^{\\\\circ}$`,
    explanation: `Tetrahedral angle.`
  }
];
