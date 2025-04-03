import equalPointsColors from "./colors"
const {
  uni,
  octave,
  fret1,
  fret2,
  fret3,
  fret4,
  fret5,
  fret6,
  fret7,
  fret8,
  fret9,
  fret10,
  fret11,
  fret12,
  c,
  cSharp_dFlat,
  d,
  dSharp_eFlat,
  e,
  f,
  fSharp_gFlat,
  g,
  gSharp_aFlat,
  a,
  aSharp_bFlat,
  b,
  black,
  white
} = equalPointsColors

export const equalPoints = {
  Violin: [
    [
      [
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: { cx: 268.3162293804508, cy: 81.33030003850874 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: { cx: 266.72696154421016, cy: 142.9938920846451 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: { cx: 265.2268924576114, cy: 201.1965726446763 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: { cx: 263.811015779523, cy: 256.1325877545079 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: { cx: 262.4746061531502, cy: 307.98528125777136 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: { cx: 261.2132034355964, cy: 356.92770669885863 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: { cx: 260.02259781255054, cy: 403.12320487304 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: { cx: 258.8988157484231, cy: 446.7259489611838 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: { cx: 257.8381067250408, cy: 487.88145906841635 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: { cx: 256.8369307246406, cy: 526.7270878839449 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: { cx: 255.89194641538944, cy: 563.3924790828901 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 12,
          ratio: 0.5,
          coordinates: { cx: 255, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: { cx: 254.1581146902254, cy: 630.6651500192544 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: { cx: 253.36348077210508, cy: 661.4969460423226 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: { cx: 252.6134462288057, cy: 690.5982863223383 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: { cx: 251.9055078897615, cy: 718.066293877254 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: { cx: 251.2373030765751, cy: 743.9926406288856 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: { cx: 250.6066017177982, cy: 768.4638533494294 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: { cx: 250.01129890627527, cy: 791.56160243652 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: { cx: 249.44940787421154, cy: 813.3629744805918 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: { cx: 248.9190533625204, cy: 833.9407295342082 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: { cx: 248.4184653623203, cy: 853.3635439419725 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: { cx: 247.94597320769472, cy: 871.696239541445 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 12,
          ratio: 0.75,
          coordinates: { cx: 247.5, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: { cx: 247.0790573451127, cy: 905.3325750096271 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: { cx: 246.68174038605255, cy: 920.7484730211613 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: { cx: 246.30672311440287, cy: 935.2991431611691 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: { cx: 245.95275394488075, cy: 949.0331469386269 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: { cx: 245.61865153828757, cy: 961.9963203144429 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: { cx: 245.3033008588991, cy: 974.2319266747147 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: { cx: 245.00564945313764, cy: 985.7808012182601 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: { cx: 244.72470393710577, cy: 996.681487240296 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: { cx: 244.4595266812602, cy: 1006.9703647671041 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: { cx: 244.20923268116016, cy: 1016.6817719709862 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: { cx: 243.97298660384735, cy: 1025.8481197707224 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 12,
          ratio: 0.875,
          coordinates: { cx: 243.75, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            piano: white
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: { cx: 289.4387431268169, cy: 81.33030003850874 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: { cx: 288.9089871814034, cy: 142.9938920846451 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: { cx: 288.4089641525371, cy: 201.1965726446763 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: { cx: 287.937005259841, cy: 256.1325877545079 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: { cx: 287.4915353843834, cy: 307.98528125777136 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: { cx: 287.0710678118655, cy: 356.92770669885863 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: { cx: 286.6741992708502, cy: 403.12320487304 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: { cx: 286.2996052494744, cy: 446.7259489611838 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: { cx: 285.9460355750136, cy: 487.88145906841635 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: { cx: 285.6123102415469, cy: 526.7270878839449 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: { cx: 285.2973154717965, cy: 563.3924790828901 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 12,
          ratio: 0.5,
          coordinates: { cx: 285, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: { cx: 284.71937156340846, cy: 630.6651500192544 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: { cx: 284.4544935907017, cy: 661.4969460423226 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: { cx: 284.20448207626856, cy: 690.5982863223383 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: { cx: 283.9685026299205, cy: 718.066293877254 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: { cx: 283.7457676921917, cy: 743.9926406288856 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: { cx: 283.7457676921917, cy: 768.4638533494294 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: { cx: 283.3370996354251, cy: 791.56160243652 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: { cx: 283.14980262473716, cy: 813.3629744805918 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: { cx: 282.9730177875068, cy: 833.9407295342082 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: { cx: 282.80615512077344, cy: 853.3635439419725 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: { cx: 282.6486577358982, cy: 871.696239541445 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 12,
          ratio: 0.75,
          coordinates: { cx: 282.5, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: { cx: 282.35968578170423, cy: 905.3325750096271 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: { cx: 282.2272467953508, cy: 920.7484730211613 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: { cx: 282.1022410381343, cy: 935.2991431611691 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: { cx: 281.98425131496026, cy: 949.0331469386269 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: { cx: 281.8728838460959, cy: 961.9963203144429 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: { cx: 281.7677669529664, cy: 974.2319266747147 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: { cx: 281.6685498177125, cy: 985.7808012182601 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: { cx: 281.5749013123686, cy: 996.681487240296 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: { cx: 281.4865088937534, cy: 1006.9703647671041 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: { cx: 281.4030775603867, cy: 1016.6817719709862 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: { cx: 281.32432886794913, cy: 1025.8481197707224 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 12,
          ratio: 0.875,
          coordinates: { cx: 281.25, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            piano: white
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: { cx: 310.5612568731831, cy: 81.33030003850874 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: { cx: 311.0910128185966, cy: 142.9938920846451 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: { cx: 311.5910358474629, cy: 201.1965726446763 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: { cx: 312.062994740159, cy: 256.1325877545079 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: { cx: 312.5084646156166, cy: 307.98528125777136 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: { cx: 312.9289321881345, cy: 356.92770669885863 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: { cx: 313.3258007291498, cy: 403.12320487304 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: { cx: 313.7003947505256, cy: 446.7259489611838 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: { cx: 314.0539644249864, cy: 487.88145906841635 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: { cx: 314.3876897584531, cy: 526.7270878839449 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: { cx: 314.7026845282035, cy: 563.3924790828901 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 0.5,
          coordinates: { cx: 315, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: { cx: 315.28062843659154, cy: 630.6651500192544 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: { cx: 315.5455064092983, cy: 661.4969460423226 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: { cx: 315.79551792373144, cy: 690.5982863223383 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: { cx: 316.0314973700795, cy: 718.066293877254 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: { cx: 316.2542323078083, cy: 743.9926406288856 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: { cx: 316.46446609406723, cy: 768.4638533494294 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: { cx: 316.6629003645749, cy: 791.56160243652 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: { cx: 316.85019737526284, cy: 813.3629744805918 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: { cx: 317.0269822124932, cy: 833.9407295342082 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: { cx: 317.19384487922656, cy: 853.3635439419725 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: { cx: 317.3513422641018, cy: 871.696239541445 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 0.75,
          coordinates: { cx: 317.5, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: { cx: 317.64031421829577, cy: 905.3325750096271 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: { cx: 317.7727532046492, cy: 920.7484730211613 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: { cx: 317.8977589618657, cy: 935.2991431611691 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: { cx: 318.01574868503974, cy: 949.0331469386269 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: { cx: 318.1271161539041, cy: 961.9963203144429 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: { cx: 318.2322330470336, cy: 974.2319266747147 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: { cx: 318.3314501822875, cy: 985.7808012182601 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: { cx: 318.4250986876314, cy: 996.681487240296 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: { cx: 318.5134911062466, cy: 1006.9703647671041 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: { cx: 318.5969224396133, cy: 1016.6817719709862 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: { cx: 318.67567113205087, cy: 1025.8481197707224 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 0.875,
          coordinates: { cx: 318.75, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            piano: white
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "F", German: "F" },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: { cx: 331.6837706195492, cy: 81.33030003850874 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: { cx: 333.27303845578984, cy: 142.9938920846451 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: { cx: 334.7731075423886, cy: 201.1965726446763 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: { cx: 336.188984220477, cy: 256.1325877545079 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: { cx: 337.5253938468498, cy: 307.98528125777136 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: { cx: 338.7867965644036, cy: 356.92770669885863 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: { cx: 339.97740218744946, cy: 403.12320487304 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: { cx: 341.1011842515769, cy: 446.7259489611838 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: { cx: 342.1618932749592, cy: 487.88145906841635 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: { cx: 342.1618932749592, cy: 526.7270878839449 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: { cx: 344.10805358461056, cy: 563.3924790828901 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 12,
          ratio: 0.5,
          coordinates: { cx: 345, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: e,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "F", German: "F" },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: { cx: 345.8418853097746, cy: 630.6651500192544 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: { cx: 346.6365192278949, cy: 661.4969460423226 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: { cx: 347.38655377119426, cy: 690.5982863223383 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: { cx: 348.0944921102385, cy: 718.066293877254 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: { cx: 348.76269692342487, cy: 743.9926406288856 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: { cx: 349.3933982822018, cy: 768.4638533494294 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: { cx: 349.9887010937247, cy: 791.56160243652 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: { cx: 350.55059212578846, cy: 813.3629744805918 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: { cx: 351.0809466374796, cy: 833.9407295342082 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: { cx: 351.5815346376797, cy: 853.3635439419725 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: { cx: 352.0540267923053, cy: 871.696239541445 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 12,
          ratio: 0.75,
          coordinates: { cx: 352.5, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: e,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "F", German: "F" },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: { cx: 352.9209426548873, cy: 905.3325750096271 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: { cx: 353.3182596139475, cy: 920.7484730211613 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: { cx: 353.69327688559713, cy: 935.2991431611691 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: { cx: 354.0472460551193, cy: 949.0331469386269 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: { cx: 354.38134846171243, cy: 961.9963203144429 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: { cx: 354.6966991411009, cy: 974.2319266747147 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: { cx: 354.9943505468624, cy: 985.7808012182601 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: { cx: 355.2752960628942, cy: 996.681487240296 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: { cx: 355.54047331873977, cy: 1006.9703647671041 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: { cx: 355.79076731883987, cy: 1016.6817719709862 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: { cx: 356.02701339615265, cy: 1025.8481197707224 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 12,
          ratio: 0.875,
          coordinates: { cx: 356.25, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: e,
            piano: white
          }
        }
      ]
    ]
  ],
  Viola: [
    [
      [
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: { cx: 268.3162293804508, cy: 81.33030003850874 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: { cx: 266.72696154421016, cy: 142.9938920846451 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: { cx: 265.2268924576114, cy: 201.1965726446763 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: { cx: 263.811015779523, cy: 256.1325877545079 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: { cx: 262.4746061531502, cy: 307.98528125777136 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: { cx: 261.2132034355964, cy: 356.92770669885863 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: { cx: 260.02259781255054, cy: 403.12320487304 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: { cx: 258.8988157484231, cy: 446.7259489611838 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: { cx: 257.8381067250408, cy: 487.88145906841635 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: { cx: 256.8369307246406, cy: 526.7270878839449 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: { cx: 255.89194641538944, cy: 563.3924790828901 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 12,
          ratio: 0.5,
          coordinates: { cx: 255, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: c,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: { cx: 254.1581146902254, cy: 630.6651500192544 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: { cx: 253.36348077210508, cy: 661.4969460423226 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: { cx: 252.6134462288057, cy: 690.5982863223383 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: { cx: 251.9055078897615, cy: 718.066293877254 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: { cx: 251.2373030765751, cy: 743.9926406288856 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: { cx: 250.6066017177982, cy: 768.4638533494294 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: { cx: 250.01129890627527, cy: 791.56160243652 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: { cx: 249.44940787421154, cy: 813.3629744805918 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: { cx: 248.9190533625204, cy: 833.9407295342082 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: { cx: 248.4184653623203, cy: 853.3635439419725 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: { cx: 247.94597320769472, cy: 871.696239541445 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 12,
          ratio: 0.75,
          coordinates: { cx: 247.5, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: c,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: { cx: 247.0790573451127, cy: 905.3325750096271 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: { cx: 246.68174038605255, cy: 920.7484730211613 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: { cx: 246.30672311440287, cy: 935.2991431611691 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: { cx: 245.95275394488075, cy: 949.0331469386269 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: { cx: 245.61865153828757, cy: 961.9963203144429 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: { cx: 245.3033008588991, cy: 974.2319266747147 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: { cx: 245.00564945313764, cy: 985.7808012182601 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: { cx: 244.72470393710577, cy: 996.681487240296 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: { cx: 244.4595266812602, cy: 1006.9703647671041 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: { cx: 244.20923268116016, cy: 1016.6817719709862 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: { cx: 243.97298660384735, cy: 1025.8481197707224 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 12,
          ratio: 0.875,
          coordinates: { cx: 243.75, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: c,
            piano: white
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: { cx: 289.4387431268169, cy: 81.33030003850874 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: { cx: 288.9089871814034, cy: 142.9938920846451 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: { cx: 288.4089641525371, cy: 201.1965726446763 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: { cx: 287.937005259841, cy: 256.1325877545079 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: { cx: 287.4915353843834, cy: 307.98528125777136 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: { cx: 287.0710678118655, cy: 356.92770669885863 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: { cx: 286.6741992708502, cy: 403.12320487304 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: { cx: 286.2996052494744, cy: 446.7259489611838 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: { cx: 285.9460355750136, cy: 487.88145906841635 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: { cx: 285.6123102415469, cy: 526.7270878839449 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: { cx: 285.2973154717965, cy: 563.3924790828901 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 12,
          ratio: 0.5,
          coordinates: { cx: 285, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: { cx: 284.71937156340846, cy: 630.6651500192544 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: { cx: 284.4544935907017, cy: 661.4969460423226 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: { cx: 284.20448207626856, cy: 690.5982863223383 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: { cx: 283.9685026299205, cy: 718.066293877254 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: { cx: 283.7457676921917, cy: 743.9926406288856 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: { cx: 283.53553390593277, cy: 768.4638533494294 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: { cx: 283.3370996354251, cy: 791.56160243652 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: { cx: 283.14980262473716, cy: 813.3629744805918 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: { cx: 282.9730177875068, cy: 833.9407295342082 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: { cx: 282.80615512077344, cy: 853.3635439419725 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: { cx: 282.6486577358982, cy: 871.696239541445 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 12,
          ratio: 0.75,
          coordinates: { cx: 282.5, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: { cx: 282.35968578170423, cy: 905.3325750096271 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: { cx: 282.2272467953508, cy: 920.7484730211613 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: { cx: 282.1022410381343, cy: 935.2991431611691 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: { cx: 281.98425131496026, cy: 949.0331469386269 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: { cx: 281.8728838460959, cy: 961.9963203144429 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: { cx: 281.7677669529664, cy: 974.2319266747147 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: { cx: 281.6685498177125, cy: 985.7808012182601 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: { cx: 281.5749013123686, cy: 996.681487240296 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: { cx: 281.4865088937534, cy: 1006.9703647671041 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: { cx: 281.4030775603867, cy: 1016.6817719709862 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: { cx: 281.32432886794913, cy: 1025.8481197707224 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 12,
          ratio: 0.875,
          coordinates: { cx: 281.25, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            piano: white
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: { cx: 310.5612568731831, cy: 81.33030003850874 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: { cx: 311.0910128185966, cy: 142.9938920846451 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: { cx: 311.5910358474629, cy: 201.1965726446763 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: { cx: 312.062994740159, cy: 256.1325877545079 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: { cx: 312.5084646156166, cy: 307.98528125777136 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: { cx: 312.9289321881345, cy: 356.92770669885863 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: { cx: 313.3258007291498, cy: 403.12320487304 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: { cx: 313.7003947505256, cy: 446.7259489611838 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: { cx: 314.0539644249864, cy: 487.88145906841635 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: { cx: 314.3876897584531, cy: 526.7270878839449 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: { cx: 314.7026845282035, cy: 563.3924790828901 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 12,
          ratio: 0.5,
          coordinates: { cx: 315, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: { cx: 315.28062843659154, cy: 630.6651500192544 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: { cx: 315.5455064092983, cy: 661.4969460423226 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: { cx: 315.79551792373144, cy: 690.5982863223383 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: { cx: 316.0314973700795, cy: 718.066293877254 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: { cx: 316.2542323078083, cy: 743.9926406288856 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: { cx: 316.46446609406723, cy: 768.4638533494294 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: { cx: 316.6629003645749, cy: 791.56160243652 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: { cx: 316.85019737526284, cy: 813.3629744805918 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: { cx: 317.0269822124932, cy: 833.9407295342082 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: { cx: 317.19384487922656, cy: 853.3635439419725 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: { cx: 317.3513422641018, cy: 871.696239541445 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 12,
          ratio: 0.75,
          coordinates: { cx: 317.5, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: { cx: 317.64031421829577, cy: 905.3325750096271 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: { cx: 317.7727532046492, cy: 920.7484730211613 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: { cx: 317.8977589618657, cy: 935.2991431611691 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: { cx: 318.01574868503974, cy: 949.0331469386269 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: { cx: 318.1271161539041, cy: 961.9963203144429 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: { cx: 318.2322330470336, cy: 974.2319266747147 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: { cx: 318.3314501822875, cy: 985.7808012182601 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: { cx: 318.4250986876314, cy: 996.681487240296 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: { cx: 318.5134911062466, cy: 1006.9703647671041 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: { cx: 318.5969224396133, cy: 1016.6817719709862 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: { cx: 318.67567113205087, cy: 1025.8481197707224 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 12,
          ratio: 0.875,
          coordinates: { cx: 318.75, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            piano: white
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: { cx: 331.6837706195492, cy: 81.33030003850874 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: { cx: 333.27303845578984, cy: 142.9938920846451 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: { cx: 334.7731075423886, cy: 201.1965726446763 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: { cx: 336.188984220477, cy: 256.1325877545079 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: { cx: 337.5253938468498, cy: 307.98528125777136 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: { cx: 338.7867965644036, cy: 356.92770669885863 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: { cx: 339.97740218744946, cy: 403.12320487304 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: { cx: 341.1011842515769, cy: 446.7259489611838 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: { cx: 342.1618932749592, cy: 487.88145906841635 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: { cx: 343.1630692753594, cy: 526.7270878839449 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: { cx: 344.10805358461056, cy: 563.3924790828901 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 0.5,
          coordinates: { cx: 345, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: { cx: 345.8418853097746, cy: 630.6651500192544 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: { cx: 346.6365192278949, cy: 661.4969460423226 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: { cx: 347.38655377119426, cy: 690.5982863223383 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: { cx: 348.0944921102385, cy: 718.066293877254 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: { cx: 348.76269692342487, cy: 743.9926406288856 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: { cx: 349.3933982822018, cy: 768.4638533494294 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: { cx: 349.9887010937247, cy: 791.56160243652 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: { cx: 350.55059212578846, cy: 813.3629744805918 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: { cx: 351.0809466374796, cy: 833.9407295342082 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: { cx: 351.5815346376797, cy: 853.3635439419725 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: { cx: 352.0540267923053, cy: 871.696239541445 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 0.75,
          coordinates: { cx: 352.5, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: { cx: 352.9209426548873, cy: 905.3325750096271 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: { cx: 353.3182596139475, cy: 920.7484730211613 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: { cx: 353.69327688559713, cy: 935.2991431611691 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: { cx: 354.0472460551193, cy: 949.0331469386269 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: { cx: 354.38134846171243, cy: 961.9963203144429 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: { cx: 354.6966991411009, cy: 974.2319266747147 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: { cx: 354.9943505468624, cy: 985.7808012182601 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: { cx: 355.2752960628942, cy: 996.681487240296 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: { cx: 355.54047331873977, cy: 1006.9703647671041 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: { cx: 355.79076731883987, cy: 1016.6817719709862 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: { cx: 356.02701339615265, cy: 1025.8481197707224 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 0.875,
          coordinates: { cx: 356.25, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            piano: white
          }
        }
      ]
    ]
  ],
  Cello: [
    [
      [
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: { cx: 280.65298350436063, cy: 81.33030003850874 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: { cx: 279.38156923536815, cy: 142.9938920846451 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: { cx: 278.18151396608914, cy: 201.1965726446763 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: { cx: 277.0488126236184, cy: 256.1325877545079 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: { cx: 275.97968492252016, cy: 307.98528125777136 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: { cx: 274.97056274847716, cy: 356.92770669885863 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: { cx: 274.0180782500404, cy: 403.12320487304 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: { cx: 273.11905259873845, cy: 446.7259489611838 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: { cx: 272.27048538003265, cy: 487.88145906841635 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: { cx: 271.4695445797125, cy: 526.7270878839449 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: { cx: 270.71355713231156, cy: 563.3924790828901 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 12,
          ratio: 0.5,
          coordinates: { cx: 270, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: c,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: { cx: 269.32649175218035, cy: 630.6651500192544 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: { cx: 268.6907846176841, cy: 661.4969460423226 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: { cx: 268.09075698304457, cy: 690.5982863223383 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: { cx: 267.5244063118092, cy: 718.066293877254 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: { cx: 266.9898424612601, cy: 743.9926406288856 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: { cx: 266.4852813742386, cy: 768.4638533494294 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: { cx: 266.0090391250202, cy: 791.56160243652 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: { cx: 265.5595262993692, cy: 813.3629744805918 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: { cx: 265.1352426900163, cy: 833.9407295342082 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: { cx: 264.7347722898562, cy: 853.3635439419725 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: { cx: 264.35677856615575, cy: 871.696239541445 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 12,
          ratio: 0.75,
          coordinates: { cx: 264, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: c,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: { cx: 263.6632458760902, cy: 905.3325750096271 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: { cx: 263.34539230884207, cy: 920.7484730211613 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: { cx: 263.0453784915223, cy: 935.2991431611691 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: { cx: 262.7622031559046, cy: 949.0331469386269 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: { cx: 262.49492123063004, cy: 961.9963203144429 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: { cx: 262.24264068711926, cy: 974.2319266747147 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: { cx: 262.0045195625101, cy: 985.7808012182601 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: { cx: 261.77976314968464, cy: 996.681487240296 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: { cx: 261.56762134500815, cy: 1006.9703647671041 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: { cx: 261.3673861449281, cy: 1016.6817719709862 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: { cx: 261.1783892830779, cy: 1025.8481197707224 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 12,
          ratio: 0.875,
          coordinates: { cx: 261, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: c,
            piano: white
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: { cx: 293.55099450145354, cy: 81.33030003850874 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: { cx: 293.12718974512273, cy: 142.9938920846451 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: { cx: 292.72717132202973, cy: 201.1965726446763 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: { cx: 292.3496042078728, cy: 256.1325877545079 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: { cx: 291.99322830750674, cy: 307.98528125777136 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: { cx: 291.65685424949237, cy: 356.92770669885863 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: { cx: 291.3393594166801, cy: 403.12320487304 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: { cx: 291.0396841995795, cy: 446.7259489611838 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: { cx: 290.75682846001087, cy: 487.88145906841635 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: { cx: 290.4898481932375, cy: 526.7270878839449 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: { cx: 290.2378523774372, cy: 563.3924790828901 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 12,
          ratio: 0.5,
          coordinates: { cx: 290, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: { cx: 289.7754972507268, cy: 630.6651500192544 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: { cx: 289.56359487256134, cy: 661.4969460423226 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: { cx: 289.36358566101484, cy: 690.5982863223383 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: { cx: 289.1748021039364, cy: 718.066293877254 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: { cx: 288.99661415375334, cy: 743.9926406288856 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: { cx: 288.8284271247462, cy: 768.4638533494294 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: { cx: 288.6696797083401, cy: 791.56160243652 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: { cx: 288.51984209978974, cy: 813.3629744805918 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: { cx: 288.37841423000543, cy: 833.9407295342082 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: { cx: 288.2449240966188, cy: 853.3635439419725 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: { cx: 288.1189261887186, cy: 871.696239541445 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 12,
          ratio: 0.75,
          coordinates: { cx: 288, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: { cx: 287.8877486253634, cy: 905.3325750096271 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: { cx: 287.78179743628067, cy: 920.7484730211613 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: { cx: 287.68179283050745, cy: 935.2991431611691 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: { cx: 287.5874010519682, cy: 949.0331469386269 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: { cx: 287.4983070768767, cy: 961.9963203144429 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: { cx: 287.4142135623731, cy: 974.2319266747147 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: { cx: 287.33483985417, cy: 985.7808012182601 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: { cx: 287.2599210498949, cy: 996.681487240296 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: { cx: 287.1892071150027, cy: 1006.9703647671041 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: { cx: 287.1224620483094, cy: 1016.6817719709862 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: { cx: 287.0594630943593, cy: 1025.8481197707224 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 12,
          ratio: 0.875,
          coordinates: { cx: 287, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            piano: white
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: { cx: 306.44900549854646, cy: 81.33030003850874 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: { cx: 306.87281025487727, cy: 142.9938920846451 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: { cx: 307.27282867797027, cy: 201.1965726446763 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: { cx: 307.6503957921272, cy: 256.1325877545079 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: { cx: 308.00677169249326, cy: 307.98528125777136 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: { cx: 308.34314575050763, cy: 356.92770669885863 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: { cx: 308.6606405833199, cy: 403.12320487304 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: { cx: 308.9603158004205, cy: 446.7259489611838 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: { cx: 309.24317153998913, cy: 487.88145906841635 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: { cx: 309.5101518067625, cy: 526.7270878839449 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: { cx: 309.7621476225628, cy: 563.3924790828901 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 12,
          ratio: 0.5,
          coordinates: { cx: 310, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: { cx: 310.2245027492732, cy: 630.6651500192544 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: { cx: 310.43640512743866, cy: 661.4969460423226 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: { cx: 310.63641433898516, cy: 690.5982863223383 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: { cx: 310.8251978960636, cy: 718.066293877254 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: { cx: 311.00338584624666, cy: 743.9926406288856 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: { cx: 311.1715728752538, cy: 768.4638533494294 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: { cx: 311.3303202916599, cy: 791.56160243652 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: { cx: 311.48015790021026, cy: 813.3629744805918 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: { cx: 311.62158576999457, cy: 833.9407295342082 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: { cx: 311.7550759033812, cy: 853.3635439419725 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: { cx: 311.8810738112814, cy: 871.696239541445 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 12,
          ratio: 0.75,
          coordinates: { cx: 312, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: { cx: 312.1122513746366, cy: 905.3325750096271 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: { cx: 312.21820256371933, cy: 920.7484730211613 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: { cx: 312.31820716949255, cy: 935.2991431611691 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: { cx: 312.4125989480318, cy: 949.0331469386269 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: { cx: 312.5016929231233, cy: 961.9963203144429 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: { cx: 312.5857864376269, cy: 974.2319266747147 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: { cx: 312.66516014583, cy: 985.7808012182601 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: { cx: 312.7400789501051, cy: 996.681487240296 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: { cx: 312.8107928849973, cy: 1006.9703647671041 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: { cx: 312.8775379516906, cy: 1016.6817719709862 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: { cx: 312.9405369056407, cy: 1025.8481197707224 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 12,
          ratio: 0.875,
          coordinates: { cx: 313, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            piano: white
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: { cx: 319.34701649563937, cy: 81.33030003850874 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: { cx: 320.61843076463185, cy: 142.9938920846451 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: { cx: 321.81848603391086, cy: 201.1965726446763 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: { cx: 322.9511873763816, cy: 256.1325877545079 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: { cx: 324.02031507747984, cy: 307.98528125777136 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: { cx: 325.02943725152284, cy: 356.92770669885863 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: { cx: 325.9819217499596, cy: 403.12320487304 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: { cx: 326.88094740126155, cy: 446.7259489611838 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: { cx: 327.72951461996735, cy: 487.88145906841635 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: { cx: 328.5304554202875, cy: 526.7270878839449 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: { cx: 329.28644286768844, cy: 563.3924790828901 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 0.5,
          coordinates: { cx: 330, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: { cx: 330.67350824781965, cy: 630.6651500192544 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: { cx: 331.3092153823159, cy: 661.4969460423226 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: { cx: 331.90924301695543, cy: 690.5982863223383 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: { cx: 332.4755936881908, cy: 718.066293877254 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: { cx: 333.0101575387399, cy: 743.9926406288856 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: { cx: 333.5147186257614, cy: 768.4638533494294 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: { cx: 333.9909608749798, cy: 791.56160243652 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: { cx: 334.4404737006308, cy: 813.3629744805918 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: { cx: 334.8647573099837, cy: 833.9407295342082 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: { cx: 335.2652277101438, cy: 853.3635439419725 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: { cx: 335.64322143384425, cy: 871.696239541445 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 0.75,
          coordinates: { cx: 336, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: { cx: 336.3367541239098, cy: 905.3325750096271 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: { cx: 336.65460769115793, cy: 920.7484730211613 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: { cx: 336.9546215084777, cy: 935.2991431611691 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: { cx: 337.2377968440954, cy: 949.0331469386269 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: { cx: 337.50507876936996, cy: 961.9963203144429 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: { cx: 337.75735931288074, cy: 974.2319266747147 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: { cx: 337.9954804374899, cy: 985.7808012182601 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: { cx: 338.22023685031536, cy: 996.681487240296 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: { cx: 338.43237865499185, cy: 1006.9703647671041 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: { cx: 338.6326138550719, cy: 1016.6817719709862 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: { cx: 338.8216107169221, cy: 1025.8481197707224 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 0.875,
          coordinates: { cx: 339, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            piano: white
          }
        }
      ]
    ]
  ],
  Bass: [
    [
      [
        {
          name: { English: "F", German: "F" },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: { cx: 280.3162293804508, cy: 81.33030003850874 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: { cx: 278.72696154421016, cy: 142.9938920846451 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: { cx: 277.2268924576114, cy: 201.1965726446763 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: { cx: 275.811015779523, cy: 256.1325877545079 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: { cx: 274.4746061531502, cy: 307.98528125777136 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: { cx: 273.2132034355964, cy: 356.92770669885863 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: { cx: 272.02259781255054, cy: 403.12320487304 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: { cx: 270.8988157484231, cy: 446.7259489611838 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: { cx: 269.8381067250408, cy: 487.88145906841635 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: { cx: 268.8369307246406, cy: 526.7270878839449 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: { cx: 267.89194641538944, cy: 563.3924790828901 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 12,
          ratio: 0.5,
          coordinates: { cx: 267, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: e,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "F", German: "F" },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: { cx: 266.1581146902254, cy: 630.6651500192544 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: { cx: 265.3634807721051, cy: 661.4969460423226 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: { cx: 264.61344622880574, cy: 690.5982863223383 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: { cx: 263.9055078897615, cy: 718.066293877254 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: { cx: 263.23730307657513, cy: 743.9926406288856 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: { cx: 262.6066017177982, cy: 768.4638533494294 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: { cx: 262.0112989062753, cy: 791.56160243652 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: { cx: 261.44940787421154, cy: 813.3629744805918 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: { cx: 260.9190533625204, cy: 833.9407295342082 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: { cx: 260.4184653623203, cy: 853.3635439419725 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: { cx: 259.9459732076947, cy: 871.696239541445 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 12,
          ratio: 0.75,
          coordinates: { cx: 259.5, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: e,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "F", German: "F" },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: { cx: 259.0790573451127, cy: 905.3325750096271 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: { cx: 258.6817403860525, cy: 920.7484730211613 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: { cx: 258.30672311440287, cy: 935.2991431611691 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: { cx: 257.9527539448807, cy: 949.0331469386269 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: { cx: 257.61865153828757, cy: 961.9963203144429 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: { cx: 257.3033008588991, cy: 974.2319266747147 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: { cx: 257.0056494531376, cy: 985.7808012182601 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: { cx: 256.7247039371058, cy: 996.681487240296 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: { cx: 256.45952668126023, cy: 1006.9703647671041 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: { cx: 256.20923268116013, cy: 1016.6817719709862 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: { cx: 255.97298660384735, cy: 1025.8481197707224 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 12,
          ratio: 0.875,
          coordinates: { cx: 255.75, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: e,
            piano: white
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: { cx: 293.4387431268169, cy: 81.33030003850874 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: { cx: 292.9089871814034, cy: 142.9938920846451 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: { cx: 292.4089641525371, cy: 201.1965726446763 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: { cx: 291.937005259841, cy: 256.1325877545079 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: { cx: 291.4915353843834, cy: 307.98528125777136 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: { cx: 291.0710678118655, cy: 356.92770669885863 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: { cx: 290.6741992708502, cy: 403.12320487304 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: { cx: 290.2996052494744, cy: 446.7259489611838 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: { cx: 289.9460355750136, cy: 487.88145906841635 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: { cx: 289.6123102415469, cy: 526.7270878839449 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: { cx: 289.2973154717965, cy: 563.3924790828901 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 0.5,
          coordinates: { cx: 289, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: { cx: 288.71937156340846, cy: 630.6651500192544 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: { cx: 288.4544935907017, cy: 661.4969460423226 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: { cx: 288.20448207626856, cy: 690.5982863223383 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: { cx: 287.9685026299205, cy: 718.066293877254 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: { cx: 287.7457676921917, cy: 743.9926406288856 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: { cx: 287.53553390593277, cy: 768.4638533494294 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: { cx: 287.3370996354251, cy: 791.56160243652 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: { cx: 287.14980262473716, cy: 813.3629744805918 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: { cx: 286.9730177875068, cy: 833.9407295342082 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: { cx: 286.80615512077344, cy: 853.3635439419725 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: { cx: 286.6486577358982, cy: 871.696239541445 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 0.75,
          coordinates: { cx: 286.5, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: { cx: 286.35968578170423, cy: 905.3325750096271 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: { cx: 286.2272467953508, cy: 920.7484730211613 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: { cx: 286.1022410381343, cy: 935.2991431611691 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: { cx: 285.98425131496026, cy: 949.0331469386269 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: { cx: 285.8728838460959, cy: 961.9963203144429 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: { cx: 285.7677669529664, cy: 974.2319266747147 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: { cx: 285.6685498177125, cy: 985.7808012182601 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: { cx: 285.5749013123686, cy: 996.681487240296 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: { cx: 285.4865088937534, cy: 1006.9703647671041 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: { cx: 285.4030775603867, cy: 1016.6817719709862 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: { cx: 285.32432886794913, cy: 1025.8481197707224 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 0.875,
          coordinates: { cx: 285.25, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            piano: white
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: { cx: 306.5612568731831, cy: 81.33030003850874 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: { cx: 307.0910128185966, cy: 142.9938920846451 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: { cx: 307.5910358474629, cy: 201.1965726446763 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: { cx: 308.062994740159, cy: 256.1325877545079 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: { cx: 308.5084646156166, cy: 307.98528125777136 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: { cx: 308.9289321881345, cy: 356.92770669885863 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: { cx: 309.3258007291498, cy: 403.12320487304 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: { cx: 309.7003947505256, cy: 446.7259489611838 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: { cx: 310.0539644249864, cy: 487.88145906841635 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: { cx: 310.3876897584531, cy: 526.7270878839449 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: { cx: 310.7026845282035, cy: 563.3924790828901 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 12,
          ratio: 0.5,
          coordinates: { cx: 311, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: { cx: 311.28062843659154, cy: 630.6651500192544 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: { cx: 311.5455064092983, cy: 661.4969460423226 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: { cx: 311.79551792373144, cy: 690.5982863223383 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: { cx: 312.0314973700795, cy: 718.066293877254 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: { cx: 312.2542323078083, cy: 743.9926406288856 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: { cx: 312.46446609406723, cy: 768.4638533494294 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: { cx: 312.6629003645749, cy: 791.56160243652 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: { cx: 312.85019737526284, cy: 813.3629744805918 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: { cx: 313.0269822124932, cy: 833.9407295342082 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: { cx: 313.19384487922656, cy: 853.3635439419725 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: { cx: 313.3513422641018, cy: 871.696239541445 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 12,
          ratio: 0.75,
          coordinates: { cx: 313.5, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: { cx: 313.64031421829577, cy: 905.3325750096271 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: { cx: 313.7727532046492, cy: 920.7484730211613 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: { cx: 313.8977589618657, cy: 935.2991431611691 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: { cx: 314.01574868503974, cy: 949.0331469386269 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: { cx: 314.1271161539041, cy: 961.9963203144429 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: { cx: 314.2322330470336, cy: 974.2319266747147 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: { cx: 314.3314501822875, cy: 985.7808012182601 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: { cx: 314.4250986876314, cy: 996.681487240296 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: { cx: 314.5134911062466, cy: 1006.9703647671041 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: { cx: 314.5969224396133, cy: 1016.6817719709862 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: { cx: 314.67567113205087, cy: 1025.8481197707224 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 12,
          ratio: 0.875,
          coordinates: { cx: 314.75, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            piano: white
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: { cx: 319.6837706195492, cy: 81.33030003850874 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: { cx: 321.27303845578984, cy: 142.9938920846451 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: { cx: 322.7731075423886, cy: 201.1965726446763 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: { cx: 324.188984220477, cy: 256.1325877545079 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: { cx: 325.5253938468498, cy: 307.98528125777136 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: { cx: 326.7867965644036, cy: 356.92770669885863 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: { cx: 327.97740218744946, cy: 403.12320487304 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: { cx: 329.1011842515769, cy: 446.7259489611838 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: { cx: 330.1618932749592, cy: 487.88145906841635 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: { cx: 331.1630692753594, cy: 526.7270878839449 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: { cx: 332.10805358461056, cy: 563.3924790828901 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 12,
          ratio: 0.5,
          coordinates: { cx: 333, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: { cx: 333.8418853097746, cy: 630.6651500192544 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: { cx: 334.6365192278949, cy: 661.4969460423226 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: { cx: 335.38655377119426, cy: 690.5982863223383 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: { cx: 336.0944921102385, cy: 718.066293877254 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: { cx: 336.76269692342487, cy: 743.9926406288856 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: { cx: 337.3933982822018, cy: 768.4638533494294 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: { cx: 337.9887010937247, cy: 791.56160243652 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: { cx: 338.55059212578846, cy: 813.3629744805918 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: { cx: 339.0809466374796, cy: 833.9407295342082 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: { cx: 339.5815346376797, cy: 853.3635439419725 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: { cx: 340.0540267923053, cy: 871.696239541445 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 12,
          ratio: 0.75,
          coordinates: { cx: 340.5, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            piano: white
          }
        }
      ],
      [
        {
          name: { English: "G# A♭", German: "Gis As" },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: { cx: 340.9209426548873, cy: 905.3325750096271 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp_aFlat,
            piano: black
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: { cx: 341.3182596139475, cy: 920.7484730211613 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A# B♭", German: "Ais B" },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: { cx: 341.69327688559713, cy: 935.2991431611691 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: aSharp_bFlat,
            piano: black
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: { cx: 342.0472460551193, cy: 949.0331469386269 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            piano: white
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: { cx: 342.38134846171243, cy: 961.9963203144429 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C# D♭", German: "Cis Des" },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: { cx: 342.6966991411009, cy: 974.2319266747147 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp_dFlat,
            piano: black
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: { cx: 342.9943505468624, cy: 985.7808012182601 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D# E♭", German: "Dis Es" },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: { cx: 343.2752960628942, cy: 996.681487240296 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp_eFlat,
            piano: black
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: { cx: 343.54047331873977, cy: 1006.9703647671041 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            piano: white
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: { cx: 343.79076731883987, cy: 1016.6817719709862 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F# G♭", German: "Fis Ges" },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: { cx: 344.02701339615265, cy: 1025.8481197707224 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp_gFlat,
            piano: black
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 12,
          ratio: 0.875,
          coordinates: { cx: 344.25, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            piano: white
          }
        }
      ]
    ]
  ]
}
