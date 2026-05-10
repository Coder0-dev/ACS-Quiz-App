import { Question } from '../types';

export const rawQuestions: Question[] = [
  {
    id: "acs-001",
    question: `How many sulfur atoms are in 3.00 g of iron pyrite, $FeS_{2}$ ($M=120.0~g/mol$)?`,
    options: [`$7.53\times10^{21}$`, `$1.51\times10^{22}$`, `$3.01\times10^{22}$`, `$6.02\times10^{23}$`],
    correctAnswer: `$3.01\times10^{22}$`,
    explanation: `First find moles of $FeS_{2}$: $3.00g / 120.0g/mol = 0.025 mol$. Since each formula unit has 2 S atoms, there are 0.050 moles of S. $0.050 \times 6.022\times10^{23} = 3.01\times10^{22}$ atoms.`
  },
  {
    id: "acs-002",
    question: `What species is represented by $p^{+}=12, n^{\circ}=14, e^{-}=10$?`,
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
    options: [`The ion has more protons`, `The ion has a more stable electronic arrangement`, `The nuclear charge is different`, `The ion has more electrons`],
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
    explanation: `Increased nuclear charge (higher atomic number) pulls the electron shells closer to the nucleus.`
  },
  {
    id: "acs-013",
    question: `Which of the following describes a covalent bond most accurately?`,
    options: [
      `A pair of electrons located exactly midway between two nuclei`,
      `The attractive force between two atoms of opposite charge`,
      `A donor bond where one atom provides an unshared pair`,
      `A system of two nuclei where electrons are shared between atoms`
    ],
    correctAnswer: `A system of two nuclei where electrons are shared between atoms`,
    explanation: `Covalent bonding involves the sharing of electron pairs between atoms.`
  },
  {
    id: "acs-014",
    question: `Which pair of elements is most likely to react to form a covalently bonded species?`,
    options: [`P and O`, `Ca and O`, `K and S`, `Zn and C`],
    correctAnswer: `P and O`,
    explanation: `Covalent bonds typically form between nonmetals like Phosphorus and Oxygen.`
  },
  {
    id: "acs-015",
    question: `What is the proper description of chemical equilibrium?`,
    options: [
      `Reactant and product concentrations are identical`,
      `The velocities of molecules are identical`,
      `Products are forming as fast as they are reacting back into reactants`,
      `The number of moles of reactants and products are equal`
    ],
    correctAnswer: `Products are forming as fast as they are reacting back into reactants`,
    explanation: `Equilibrium is a dynamic state where the forward and reverse reaction rates are equal.`
  },
  {
    id: "acs-016",
    question: `Which operation will increase the yield of ammonia in: $N_2 + 3H_2 \rightleftharpoons 2NH_3$ ($\Delta H = -92~kJ$)?`,
    options: [`Reducing total pressure`, `Raising the temperature`, `Increasing reaction time`, `Increasing hydrogen concentration`],
    correctAnswer: `Increasing hydrogen concentration`,
    explanation: `Adding a reactant shifts the equilibrium toward the products (Le Chatelier's Principle).`
  },
  {
    id: "acs-017",
    question: `What is the name of $HBrO_{4(aq)}$?`,
    options: [`Bromic acid`, `Bromous acid`, `Hydrobromic acid`, `Perbromic acid`],
    correctAnswer: `Perbromic acid`,
    explanation: `The oxyacid of the perbromate ion ($BrO_4^-$) is perbromic acid.`
  },
  {
    id: "acs-018",
    question: `Magnesium forms an ionic compound with an element X with the formula MgX. Which ion could be X?`,
    options: [`$Be$`, `$P^{3-}$`, `$C^{4-}$`, `$S^{2-}$`],
    correctAnswer: `$S^{2-}$`,
    explanation: `Since Mg is +2, X must be -2 to achieve a 1:1 ratio. Sulfide is $S^{2-}$.`
  },
  {
    id: "acs-019",
    question: `Which instrument is directly used to determine the relative masses of atoms?`,
    options: [`Spectroscope`, `Geiger counter`, `Mass spectrograph`, `Electron microscope`],
    correctAnswer: `Mass spectrograph`,
    explanation: `Mass spectrometry measures the mass-to-charge ratio of ions.`
  },
  {
    id: "acs-020",
    question: `If each of these ions were reduced to metal with one coulomb, which would yield the greatest mass?`,
    options: [`$Cu^{2+}(aq)$`, `$Ag^+(aq)$`, `$Hg^{2+}(aq)$`, `$Cu^+(aq)$`],
    correctAnswer: `$Ag^+(aq)$`,
    explanation: `Silver has a high atomic mass and requires only 1 mole of electrons per mole of metal.`
  },
  {
    id: "acs-021",
    question: `A sample of He gas (3.0 L) at 5.6 atm and $25^{\circ}C$ was combined with 4.5 L of Ne gas at 3.6 atm and $25^{\circ}C$ in a 9.0 L flask. The total pressure is:`,
    options: [`2.6 atm`, `9.2 atm`, `1.0 atm`, `3.7 atm`],
    correctAnswer: `3.7 atm`,
    explanation: `He partial pressure: $(5.6 \times 3.0)/9.0 = 1.87$. Ne partial pressure: $(3.6 \times 4.5)/9.0 = 1.80$. Total = $3.67 \approx 3.7$ atm.`
  },
  {
    id: "acs-022",
    question: `The density of air at STP is $1.285~g/L$. Which gas cannot be used to fill a balloon that will float in air?`,
    options: [`$CH_4$`, `NO`, `$NH_3$`, `HF`],
    correctAnswer: `NO`,
    explanation: `NO ($M=30$) is heavier than the average molar mass of air ($\approx 29$), so its density is higher.`
  },
  {
    id: "acs-023",
    question: `Of the following, which is a correct statement of Boyle's law?`,
    options: [`$(P/V) = k$`, `$(V/P) = k$`, `$(V/T) = k$`, `$PV = k$`],
    correctAnswer: `$PV = k$`,
    explanation: `Boyle's law states that pressure and volume are inversely proportional.`
  },
  {
    id: "acs-024",
    question: `An ideal gas differs from a real gas in that ideal gas molecules:`,
    options: [`Have mass of zero`, `Have appreciable volume`, `Have no attraction for one another`, `Have no kinetic energy`],
    correctAnswer: `Have no attraction for one another`,
    explanation: `Ideal gases assume no intermolecular forces and negligible molecular volume.`
  },
  {
    id: "acs-025",
    question: `Given: $2NO \rightarrow N_2 + O_2$ ($\Delta H = -180~kJ$) and $2NO + O_2 \rightarrow 2NO_2$ ($\Delta H = -112~kJ$). Find $\Delta H$ for $N_2 + 2O_2 \rightarrow 2NO_2$.`,
    options: [`-292 kJ`, `292 kJ`, `-68 kJ`, `68 kJ`],
    correctAnswer: `68 kJ`,
    explanation: `Hess's Law: $180 - 112 = 68$ kJ.`
  },
  {
    id: "acs-026",
    question: `Photons with energy of $1.00\times10^3~kJ\cdot mol^{-1}$ have a wavelength of:`,
    options: [`$2.00\times10^{31}~m$`, `$1.20\times10^{-7}~m$`, `$1.20\times10^{-4}~m$`, `$8.36\times10^6~m$`],
    correctAnswer: `$1.20\times10^{-7}~m$`,
    explanation: `$\lambda = hcN_A / E_{total}$. Plugging in constants yields $\approx 1.20\times10^{-7}$ m.`
  },
  {
    id: "acs-027",
    question: `Which is a possible set of quantum numbers for a valence electron of sulfur (S)?`,
    options: [`3, 2, 2, 1/2`, `3, 1, -1, 1/2`, `2, 1, 0, 1/2`, `3, 2, 0, -1/2`],
    correctAnswer: `3, 1, -1, 1/2`,
    explanation: `Sulfur is $3p^4$. $n=3$, $l=1$ (p-orbital).`
  },
  {
    id: "acs-028",
    question: `The _______ quantum number defines the shape of an orbital.`,
    options: [`Principal`, `Spin`, `Angular momentum`, `Magnetic`],
    correctAnswer: `Angular momentum`,
    explanation: `The angular momentum quantum number ($l$) defines orbital shape.`
  },
  {
    id: "acs-029",
    question: `Which one of the following elements has the largest atomic radius?`,
    options: [`As`, `Sb`, `Se`, `Te`],
    correctAnswer: `Sb`,
    explanation: `Sb is the furthest down and left on the periodic table among these options.`
  },
  {
    id: "acs-030",
    question: `Which is the ground-state electron configuration of gas phase $Co^{2+}$?`,
    options: [`$[Ar]4s^2 3d^7$`, `$[Ar]4s^2 3d^5$`, `$[Ar]3d^7$`, `$[Ar]4s^2 4d^5$`],
    correctAnswer: `$[Ar]3d^7$`,
    explanation: `Cations lose $4s$ electrons before $3d$ electrons.`
  },
  {
    id: "acs-031",
    question: `As intermolecular forces increase, the enthalpy of vaporization ________ and vapor pressure ________.`,
    options: [`decreases; increases`, `increases; increases`, `decreases; decreases`, `increases; decreases`],
    correctAnswer: `increases; decreases`,
    explanation: `Stronger IMF requires more energy to vaporize and reduces escape tendency.`
  },
  {
    id: "acs-032",
    question: `Heating zinc sulfide in air causes the formation of:`,
    options: [`Zn and S`, `Zn and $SO_2$`, `ZnO and S`, `ZnO and $SO_2$`],
    correctAnswer: `ZnO and $SO_2$`,
    explanation: `Roasting sulfides in air produces the metal oxide and sulfur dioxide.`
  },
  {
    id: "acs-033",
    question: `The addition of a catalyst:`,
    options: [`Increases product yield`, `Increases high energy molecules`, `Provides a path with lower $E_a$`, `Lowers $\Delta H$`],
    correctAnswer: `Provides a path with lower $E_a$`,
    explanation: `Catalysts provide an alternative mechanism with a lower activation energy.`
  },
  {
    id: "acs-034",
    question: `What volume will 1200 mL of helium occupy if pressure is doubled and temperature goes from 300 K to 400 K?`,
    options: [`450 mL`, `800 mL`, `1650 mL`, `3200 mL`],
    correctAnswer: `800 mL`,
    explanation: `$V_2 = V_1 \times (P_1/P_2) \times (T_2/T_1) = 1200 \times (1/2) \times (400/300) = 800$ mL.`
  },
  {
    id: "acs-035",
    question: `Which group of ions can exist together in water without reacting?`,
    options: [`$Ba^{2+}, NO_3^-, K^+, CO_3^{2-}$`, `$Ba^{2+}, Cl^-, K^+, SO_4^{2-}$`, `$K^+, Cl^-, Na^+, NO_3^-$`, `$Ag^+, NO_3^-, K^+, Cl^-$`],
    correctAnswer: `$K^+, Cl^-, Na^+, NO_3^-$`,
    explanation: `These ions do not form precipitates, gases, or weak electrolytes together.`
  },
  {
    id: "acs-036",
    question: `Which mixture will NOT yield hydrogen gas?`,
    options: [`Sodium + water`, `Calcium + water`, `Zinc + HCl`, `Zinc + conc. nitric acid`],
    correctAnswer: `Zinc + conc. nitric acid`,
    explanation: `Nitric acid is an oxidizing acid; it produces nitrogen oxides rather than $H_2$.`
  },
  {
    id: "acs-037",
    question: `What mass should be recorded from a balance sensitive to 0.01 g if riders are at 60 g, 7 g, and 0.00 g?`,
    options: [`67.0 g`, `76.0 g`, `67.00 g`, `76.000 g`],
    correctAnswer: `67.00 g`,
    explanation: `Must include decimal places to show the instrument's precision.`
  },
  {
    id: "acs-038",
    question: `Oxygen ($O_2$) and ozone ($O_3$) are examples of:`,
    options: [`Isomers`, `Isobars`, `Allotropes`, `Isotopes`],
    correctAnswer: `Allotropes`,
    explanation: `Allotropes are different forms of the same element.`
  },
  {
    id: "acs-039",
    question: `Which instrument measures gain or loss of heat?`,
    options: [`Manometer`, `Hydrometer`, `Calorimeter`, `Barometer`],
    correctAnswer: `Calorimeter`,
    explanation: `Calorimeters measure heat exchange.`
  },
  {
    id: "acs-040",
    question: `The molar volume of an ideal gas at STP is:`,
    options: [`2.36 L`, `1.00 L`, `0.082 L`, `22.4 L`],
    correctAnswer: `22.4 L`,
    explanation: `At STP, 1 mole of ideal gas occupies 22.4 L.`
  },
  {
    id: "acs-041",
    question: `Which would increase the internal energy ($\Delta U$) of a system?`,
    options: [`Loses heat, does work`, `Gains heat, work done on it`, `Loses heat, work done on it`, `Gains heat, does work`],
    correctAnswer: `Gains heat, work done on it`,
    explanation: `$\Delta U = q + w$. Both positive $q$ and $w$ increase $\Delta U$.`
  },
  {
    id: "acs-042",
    question: `In the Bohr atom, which transition emits the highest-energy photon?`,
    options: [`$n=1 \rightarrow n=6$`, `$n=6 \rightarrow n=1$`, `$n=6 \rightarrow n=3$`, `$n=3 \rightarrow n=6$`],
    correctAnswer: `$n=6 \rightarrow n=1$`,
    explanation: `Emission is from high to low. $n=6$ to $n=1$ has the largest energy drop.`
  },
  {
    id: "acs-043",
    question: `If Na forms $Na_3X$, what is the formula for Ca and X?`,
    options: [`$CaX_2$`, `$CaX$`, `$Ca_2X_3$`, `$Ca_3X_2$`],
    correctAnswer: `$Ca_3X_2$`,
    explanation: `In $Na_3X$, X is -3. Calcium is +2. Balances to $Ca_3X_2$.`
  },
  {
    id: "acs-044",
    question: `What is the IUPAC name for $SnCl_4$?`,
    options: [`Tin chloride`, `Tin (II) chloride`, `Tin (IV) chloride`, `Tin tetrachloride`],
    correctAnswer: `Tin (IV) chloride`,
    explanation: `Tin is a metal with variable charge. Here it is +4.`
  },
  {
    id: "acs-045",
    question: `What volume does 9.49 g of $H_2$ occupy at 355 K and 2 atm? (Initial: 12.28 g, 100 L, 400 K, 2 atm)`,
    options: [`109 L`, `68.2 L`, `54.7 L`, `77.3 L`],
    correctAnswer: `68.2 L`,
    explanation: `$V_2 = V_1 \times (n_2/n_1) \times (T_2/T_1) = 100 \times (9.49/12.28) \times (355/400) = 68.2$ L.`
  },
  {
    id: "acs-046",
    question: `What is the molecular geometry of $SF_4$?`,
    options: [`Tetrahedral`, `Square planar`, `See-saw`, `Trigonal bipyramidal`],
    correctAnswer: `See-saw`,
    explanation: `5 electron domains (4 bonding, 1 lone pair) results in see-saw.`
  },
  {
    id: "acs-047",
    question: `Which has the highest lattice energy?`,
    options: [`LiF`, `$MgCl_2$`, `$CaBr_2$`, `$C_2H_6$`],
    correctAnswer: `$MgCl_2$`,
    explanation: `Lattice energy is highest with high charges and small radii. $Mg^{2+}$ has high charge density.`
  },
  {
    id: "acs-048",
    question: `Which molecule has a planar geometry?`,
    options: [`$CF_4$`, `$COF_2$`, `$SF_4$`, `$SOF_2$`],
    correctAnswer: `$COF_2$`,
    explanation: `$COF_2$ is trigonal planar around Carbon.`
  },
  {
    id: "acs-049",
    question: `Intermolecular forces in propanol ($C_3H_7OH$) include:`,
    options: [`Dispersion/Ion-dipole`, `Dispersion/Dipole-dipole`, `H-bond/Ion-dipole`, `Dispersion/Dipole/H-bond`],
    correctAnswer: `Dispersion/Dipole/H-bond`,
    explanation: `Propanol is polar and contains an OH group.`
  },
  {
    id: "acs-050",
    question: `In $P + HNO_3 + H_2O \rightarrow H_3PO_4 + NO$, what is the oxidizer to reducer ratio?`,
    options: [`1:1`, `5:2`, `5:3`, `3:5`],
    correctAnswer: `5:3`,
    explanation: `Balancing redox: P loses 5e-, N gains 3e-. Ratio is 5 $HNO_3$ to 3 P.`
  },
  {
    id: "acs-051",
    question: `What is the molarity of 25.0 g $BaCl_2$ in 450.0 mL solution?`,
    options: [`0.267 M`, `0.534 M`, `0.120 M`, `0.0556 M`],
    correctAnswer: `0.267 M`,
    explanation: `Moles = 25.0/208.2 = 0.12. $M = 0.12 / 0.450 = 0.267$.`
  },
  {
    id: "acs-052",
    question: `What mass of $K_2CO_3$ ($M=138.2$) is needed for 250 mL of 0.150 M?`,
    options: [`5.18 g`, `2.59 g`, `10.4 g`, `1.38 g`],
    correctAnswer: `5.18 g`,
    explanation: `Mass $= 0.250 \times 0.150 \times 138.2 = 5.18$ g.`
  },
  {
    id: "acs-053",
    question: `What is the oxidation number of sulfur in $S_2O_3^{2-}$?`,
    options: [`+2`, `+4`, `+6`, `-2`],
    correctAnswer: `+2`,
    explanation: `$2x + 3(-2) = -2 \implies 2x = 4 \implies x = +2$.`
  },
  {
    id: "acs-054",
    question: `How many moles of H atoms are in 6 moles of $Ca(OH)_2$?`,
    options: [`2`, `6`, `8`, `12`],
    correctAnswer: `12`,
    explanation: `$6 \times 2 = 12$ moles of H.`
  },
  {
    id: "acs-055",
    question: `In $(NH_4)_2S_2O_3$, which element is present in largest percent mass?`,
    options: [`H`, `N`, `O`, `S`],
    correctAnswer: `S`,
    explanation: `Sulfur mass is $2 \times 32 = 64$, larger than N (28) or O (48).`
  },
  {
    id: "acs-056",
    question: `What volume of 0.125 M $H_2SO_4$ neutralizes 25.0 mL of 0.250 M NaOH?`,
    options: [`12.5 mL`, `25.0 mL`, `50.0 mL`, `100 mL`],
    correctAnswer: `25.0 mL`,
    explanation: `$H_2SO_4$ has 2 protons. $2 \times M_a V_a = M_b V_b$. $2(0.125)V_a = (0.250)(25)$. $V_a = 25$ mL.`
  },
  {
    id: "acs-057",
    question: `Which set of quantum numbers is NOT allowed?`,
    options: [`3, 2, 0`, `2, 1, -1`, `1, 0, 0`, `2, 2, 1`],
    correctAnswer: `2, 2, 1`,
    explanation: `$l$ must be less than $n$.`
  },
  {
    id: "acs-058",
    question: `Which molecule has the largest dipole moment?`,
    options: [`$CCl_4$`, `$NH_3$`, `$BF_3$`, `$CO_2$`],
    correctAnswer: `$NH_3$`,
    explanation: `Ammonia is non-symmetric and polar.`
  },
  {
    id: "acs-059",
    question: `What is the formal charge on P in $PO_4^{3-}$?`,
    options: [`-1`, `0`, `+1`, `+5`],
    correctAnswer: `0`,
    explanation: `In the best Lewis structure (one P=O), P has 5 bonds and no lone pairs. $FC = 5 - 5 = 0$.`
  },
  {
    id: "acs-060",
    question: `Which hybrid orbitals are used by C in $C_2H_2$?`,
    options: [`sp`, `$sp^2$`, `$sp^3$`, `$dsp^2$`],
    correctAnswer: `sp`,
    explanation: `Acetylene is linear, indicating sp hybridization.`
  },
  {
    id: "acs-061",
    question: `How many sigma and pi bonds are in $CH_2=CH-C\equiv N$?`,
    options: [`6 $\sigma$, 3 $\pi$`, `4 $\sigma$, 3 $\pi$`, `7 $\sigma$, 3 $\pi$`, `5 $\sigma$, 2 $\pi$`],
    correctAnswer: `6 $\sigma$, 3 $\pi$`,
    explanation: `Single bonds are $\sigma$. Double is 1 $\sigma$, 1 $\pi$. Triple is 1 $\sigma$, 2 $\pi$.`
  },
  {
    id: "acs-062",
    question: `Which gas diffuses fastest?`,
    options: [`$CH_4$`, `$O_2$`, `$CO_2$`, `$N_2$`],
    correctAnswer: `$CH_4$`,
    explanation: `Lighter gases diffuse faster (Graham's Law). $CH_4$ is the lightest.`
  },
  {
    id: "acs-063",
    question: `What is the oxidation state of Cr in $K_2Cr_2O_7$?`,
    options: [`+3`, `+5`, `+6`, `+7`],
    correctAnswer: `+6`,
    explanation: `$2(1) + 2x + 7(-2) = 0 \implies 2x = 12 \implies x = +6$.`
  },
  {
    id: "acs-064",
    question: `Which atom has largest first ionization energy?`,
    options: [`Li`, `Be`, `B`, `C`],
    correctAnswer: `C`,
    explanation: `Ionization energy increases across a period.`
  },
  {
    id: "acs-065",
    question: `Which is a strong electrolyte?`,
    options: [`$CH_3COOH$`, `$NH_3$`, `$HCl$`, `$H_2O$`],
    correctAnswer: `$HCl$`,
    explanation: `HCl is a strong acid that dissociates completely.`
  },
  {
    id: "acs-066",
    question: `The boiling point of water is high due to:`,
    options: [`Ionic bonds`, `Covalent bonds`, `Hydrogen bonding`, `Dispersion`],
    correctAnswer: `Hydrogen bonding`,
    explanation: `Strong H-bonds between water molecules require significant energy to break.`
  },
  {
    id: "acs-067",
    question: `Which concentration unit is temperature-independent?`,
    options: [`Molarity`, `Molality`, `Volume %`, `Normality`],
    correctAnswer: `Molality`,
    explanation: `Molality uses mass of solvent, which doesn't change with volume expansion.`
  },
  {
    id: "acs-068",
    question: `What is the pH of 0.01 M HCl?`,
    options: [`1`, `2`, `7`, `12`],
    correctAnswer: `2`,
    explanation: `$pH = -\log(0.01) = 2$.`
  },
  {
    id: "acs-069",
    question: `What is the molecular shape of $H_2O$?`,
    options: [`Linear`, `Bent`, `Tetrahedral`, `Planar`],
    correctAnswer: `Bent`,
    explanation: `Two lone pairs on Oxygen cause a bent shape.`
  },
  {
    id: "acs-070",
    question: `Which is an intensive property?`,
    options: [`Mass`, `Volume`, `Density`, `Heat capacity`],
    correctAnswer: `Density`,
    explanation: `Intensive properties do not depend on quantity.`
  },
  {
    id: "acs-071",
    question: `Which orbital fills after 4s?`,
    options: [`4p`, `3d`, `5s`, `4d`],
    correctAnswer: `3d`,
    explanation: `According to the Aufbau principle, $3d$ follows $4s$.`
  },
  {
    id: "acs-072",
    question: `What is the empirical formula of 40% C, 6.7% H, 53.3% O?`,
    options: [`$CH_2O$`, `$C_2H_4O_2$`, `$CHO$`, `$C_2H_2O$`],
    correctAnswer: `$CH_2O$`,
    explanation: `Mole ratio is 1:2:1.`
  },
  {
    id: "acs-073",
    question: `Which is a buffer?`,
    options: [`$HCl/NaCl$`, `$NaOH/NaCl$`, `$NH_3/NH_4Cl$`, `$HNO_3/NaNO_3$`],
    correctAnswer: `$NH_3/NH_4Cl$`,
    explanation: `Weak base and its conjugate acid form a buffer.`
  },
  {
    id: "acs-074",
    question: `What is the volume of 1 mol gas at 273 K and 2.0 atm?`,
    options: [`22.4 L`, `11.2 L`, `44.8 L`, `5.6 L`],
    correctAnswer: `11.2 L`,
    explanation: `$V = (1 \times 0.0821 \times 273) / 2 = 11.2$ L.`
  },
  {
    id: "acs-075",
    question: `Which is the strongest acid?`,
    options: [`$HF$`, `$HCl$`, `$HBr$`, `$HI$`],
    correctAnswer: `$HI$`,
    explanation: `Binary acid strength increases down the halogen group.`
  },
  {
    id: "acs-076",
    question: `Which has the smallest atomic radius?`,
    options: [`Na`, `Mg`, `Al`, `Si`],
    correctAnswer: `Si`,
    explanation: `Radius decreases across a period.`
  },
  {
    id: "acs-077",
    question: `Which bond angle is $109.5^{\circ}$?`,
    options: [`Linear`, `Planar`, `Tetrahedral`, `Bent`],
    correctAnswer: `Tetrahedral`,
    explanation: `Ideal tetrahedral geometry has $109.5^{\circ}$ angles.`
  },
  {
    id: "acs-078",
    question: `The process of losing electrons is:`,
    options: [`Reduction`, `Oxidation`, `Ionization`, `Sublimation`],
    correctAnswer: `Oxidation`,
    explanation: `Oxidation is Loss (OIL).`
  },
  {
    id: "acs-079",
    question: `Which state of matter has definite volume but no definite shape?`,
    options: [`Solid`, `Liquid`, `Gas`, `Plasma`],
    correctAnswer: `Liquid`,
    explanation: `Liquids flow but are not compressible.`
  },
  {
    id: "acs-080",
    question: `Which subatomic particle is negative?`,
    options: [`Proton`, `Neutron`, `Electron`, `Positron`],
    correctAnswer: `Electron`,
    explanation: `Electrons are negatively charged particles.`
  },
  {
    id: "acs-081",
    question: `Which is a physical change?`,
    options: [`Burning`, `Rusting`, `Melting`, `Cooking`],
    correctAnswer: `Melting`,
    explanation: `Melting doesn't change the chemical identity.`
  },
  {
    id: "acs-082",
    question: `The vertical columns are called:`,
    options: [`Groups`, `Periods`, `Rows`, `Series`],
    correctAnswer: `Groups`,
    explanation: `Groups are the vertical columns.`
  },
  {
    id: "acs-083",
    question: `What is the most abundant element in the universe?`,
    options: [`He`, `O`, `C`, `H`],
    correctAnswer: `H`,
    explanation: `Hydrogen is the most common element.`
  },
  {
    id: "acs-084",
    question: `The unit of energy is:`,
    options: [`Watt`, `Joule`, `Pascal`, `Newton`],
    correctAnswer: `Joule`,
    explanation: `Joules measure energy/work.`
  },
  {
    id: "acs-085",
    question: `Which is a mixture?`,
    options: [`Water`, `Salt`, `Air`, `Oxygen`],
    correctAnswer: `Air`,
    explanation: `Air is a mixture of $N_2$, $O_2$, etc.`
  },
  {
    id: "acs-086",
    question: `What is the pH of pure water?`,
    options: [`0`, `1`, `7`, `14`],
    correctAnswer: `7`,
    explanation: `Pure water is neutral.`
  },
  {
    id: "acs-087",
    question: `Atomic number is the number of:`,
    options: [`Protons`, `Neutrons`, `Electrons`, `Nucleons`],
    correctAnswer: `Protons`,
    explanation: `Atomic number defines the element.`
  },
  {
    id: "acs-088",
    question: `Which gas is a noble gas?`,
    options: [`H`, `O`, `Ne`, `F`],
    correctAnswer: `Ne`,
    explanation: `Neon is in group 18.`
  },
  {
    id: "acs-089",
    question: `What is the oxidation state of O in $H_2O_2$?`,
    options: [`-2`, `-1`, `0`, `+1`],
    correctAnswer: `-1`,
    explanation: `Oxygen in peroxides is -1.`
  },
  {
    id: "acs-090",
    question: `Which bond is strongest?`,
    options: [`$C-C$`, `$C=C$`, `$C\equiv C$`, `Equal`],
    correctAnswer: `$C\equiv C$`,
    explanation: `Triple bonds are the strongest.`
  },
  {
    id: "acs-091",
    question: `What is the charge of an alpha particle?`,
    options: [`-1`, `0`, `+1`, `+2`],
    correctAnswer: `+2`,
    explanation: `An alpha particle is a helium nucleus.`
  },
  {
    id: "acs-092",
    question: `A reaction that absorbs heat is:`,
    options: [`Exothermic`, `Endothermic`, `Isothermic`, `Adiabatic`],
    correctAnswer: `Endothermic`,
    explanation: `Endo- means "in".`
  },
  {
    id: "acs-093",
    question: `Horizontal rows are called:`,
    options: [`Groups`, `Periods`, `Families`, `Columns`],
    correctAnswer: `Periods`,
    explanation: `Periods are the horizontal rows.`
  },
  {
    id: "acs-094",
    question: `The symbol for silver is:`,
    options: [`Si`, `Ag`, `Au`, `S`],
    correctAnswer: `Ag`,
    explanation: `Ag stands for Argentum.`
  },
  {
    id: "acs-095",
    question: `Which element is in all organic compounds?`,
    options: [`O`, `N`, `C`, `S`],
    correctAnswer: `C`,
    explanation: `Organic chemistry is carbon-based.`
  },
  {
    id: "acs-096",
    question: `The main component of air is:`,
    options: [`Oxygen`, `Nitrogen`, `Argon`, `CO2`],
    correctAnswer: `Nitrogen`,
    explanation: `Air is ~78% Nitrogen.`
  },
  {
    id: "acs-097",
    question: `Density of water is roughly:`,
    options: [`1 g/mL`, `1 kg/mL`, `0.5 g/mL`, `10 g/mL`],
    correctAnswer: `1 g/mL`,
    explanation: `Standard density of water.`
  },
  {
    id: "acs-098",
    question: `Which ion is responsible for acidity?`,
    options: [`$OH^-$`, `$Cl^-$`, `$H^+$`, `$Na^+$`],
    correctAnswer: `$H^+$`,
    explanation: `Proton concentration determines pH.`
  },
  {
    id: "acs-099",
    question: `Formula for methane:`,
    options: [`$CH_4$`, `$C_2H_6$`, `$CH_3OH$`, `$CO_2$`],
    correctAnswer: `$CH_4$`,
    explanation: `Simplest alkane.`
  },
  {
    id: "acs-100",
    question: `What is the mass of 0.5 mol $H_2O$?`,
    options: [`9 g`, `18 g`, `36 g`, `1 g`],
    correctAnswer: `9 g`,
    explanation: `$0.5 \times 18 = 9$ g.`
  }
];
