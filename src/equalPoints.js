import { equalPointsColors } from "./colors"
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
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: {
            equal: { cx: 268.3162293804508, cy: 81.33030003850874 },
            just: { cx: 268.25234918291454, cy: 83.80885170291582 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: {
            equal: { cx: 266.72696154421016, cy: 142.9938920846451 },
            just: { cx: 266.6666666666667, cy: 145.3333333333334 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: {
            equal: { cx: 265.2268924576114, cy: 201.1965726446763 },
            just: { cx: 265.16998167151183, cy: 203.4047111453412 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: {
            equal: { cx: 263.811015779523, cy: 256.1325877545079 },
            just: { cx: 263.75729915040904, cy: 258.2167929641289 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: {
            equal: { cx: 262.4746061531502, cy: 307.98528125777136 },
            just: { cx: 262.4239044067657, cy: 309.95250901749 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: {
            equal: { cx: 261.2132034355964, cy: 356.92770669885863 },
            just: { cx: 261.165347359576, cy: 358.78452244845147 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: {
            equal: { cx: 260.02259781255054, cy: 403.12320487304 },
            just: { cx: 259.97742769168906, cy: 404.8758055624635 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: {
            equal: { cx: 258.8988157484231, cy: 446.7259489611838 },
            just: { cx: 258.85618083164127, cy: 448.3801837323188 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: {
            equal: { cx: 257.8381067250408, cy: 487.88145906841635 },
            just: { cx: 257.79786472226715, cy: 489.4428487760356 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: {
            equal: { cx: 256.8369307246406, cy: 526.7270878839449 },
            just: { cx: 256.79894733193163, cy: 528.2008435210523 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: {
            equal: { cx: 255.89194641538944, cy: 563.3924790828901 },
            just: { cx: 255.85609486670296, cy: 564.7835191719256 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.5,
          coordinates: {
            equal: { cx: 255, cy: 598 },
            just: { cx: 254.96616064412498, cy: 599.3129670079511 }
          },
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
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: {
            equal: { cx: 254.1581146902254, cy: 630.6651500192544 },
            just: { cx: 254.12617459145727, cy: 631.9044258514579 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: {
            equal: { cx: 253.36348077210508, cy: 661.4969460423226 },
            just: { cx: 253.33333333333334, cy: 662.6666666666667 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: {
            equal: { cx: 252.6134462288057, cy: 690.5982863223383 },
            just: { cx: 252.58499083575592, cy: 691.7023555726707 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: {
            equal: { cx: 251.9055078897615, cy: 718.066293877254 },
            just: { cx: 251.87864957520452, cy: 719.1083964820646 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: {
            equal: { cx: 251.2373030765751, cy: 743.9926406288856 },
            just: { cx: 251.21195220338285, cy: 744.976254508745 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: {
            equal: { cx: 250.6066017177982, cy: 768.4638533494294 },
            just: { cx: 250.582673679788, cy: 769.3922612242258 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: {
            equal: { cx: 250.01129890627527, cy: 791.56160243652 },
            just: { cx: 249.98871384584453, cy: 792.4379027812316 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: {
            equal: { cx: 249.44940787421154, cy: 813.3629744805918 },
            just: { cx: 249.42809041582063, cy: 814.1900918661594 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: {
            equal: { cx: 248.9190533625204, cy: 833.9407295342082 },
            just: { cx: 248.89893236113357, cy: 834.7214243880178 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: {
            equal: { cx: 248.4184653623203, cy: 853.3635439419725 },
            just: { cx: 248.39947366596581, cy: 854.1004217605262 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: {
            equal: { cx: 247.94597320769472, cy: 871.696239541445 },
            just: { cx: 247.92804743335148, cy: 872.3917595859627 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.75,
          coordinates: {
            equal: { cx: 247.5, cy: 889 },
            just: { cx: 247.48308032206248, cy: 889.6564835039756 }
          },
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
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: {
            equal: { cx: 247.0790573451127, cy: 905.3325750096271 },
            just: { cx: 247.06308729572862, cy: 905.952212925729 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: {
            equal: { cx: 246.68174038605255, cy: 920.7484730211613 },
            just: { cx: 246.66666666666666, cy: 921.3333333333334 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: {
            equal: { cx: 246.30672311440287, cy: 935.2991431611691 },
            just: { cx: 246.29249541787794, cy: 935.8511777863354 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: {
            equal: { cx: 245.95275394488075, cy: 949.0331469386269 },
            just: { cx: 245.93932478760226, cy: 949.5541982410323 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: {
            equal: { cx: 245.61865153828757, cy: 961.9963203144429 },
            just: { cx: 245.60597610169143, cy: 962.4881272543726 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: {
            equal: { cx: 245.3033008588991, cy: 974.2319266747147 },
            just: { cx: 245.291336839894, cy: 974.6961306121129 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: {
            equal: { cx: 245.00564945313764, cy: 985.7808012182601 },
            just: { cx: 244.99435692292226, cy: 986.2189513906159 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: {
            equal: { cx: 244.72470393710577, cy: 996.681487240296 },
            just: { cx: 244.71404520791032, cy: 997.0950459330796 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: {
            equal: { cx: 244.4595266812602, cy: 1006.9703647671041 },
            just: { cx: 244.4494661805668, cy: 1007.360712194009 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: {
            equal: { cx: 244.20923268116016, cy: 1016.6817719709862 },
            just: { cx: 244.19973683298292, cy: 1017.050210880263 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: {
            equal: { cx: 243.97298660384735, cy: 1025.8481197707224 },
            just: { cx: 243.96402371667574, cy: 1026.1958797929815 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.875,
          coordinates: {
            equal: { cx: 243.75, cy: 1034.5 },
            just: { cx: 243.74154016103125, cy: 1034.8282417519877 }
          },
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
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: {
            equal: { cx: 289.4387431268169, cy: 81.33030003850874 },
            just: { cx: 289.42809041582063, cy: 82.57027559847819 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: {
            equal: { cx: 288.9089871814034, cy: 142.9938920846451 },
            just: { cx: 288.8989323611336, cy: 144.16427316405336 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: {
            equal: { cx: 288.4089641525371, cy: 201.1965726446763 },
            just: { cx: 288.39947366596584, cy: 202.30126528157845 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: {
            equal: { cx: 287.937005259841, cy: 256.1325877545079 },
            just: { cx: 287.9280474333515, cy: 257.17527875788835 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: {
            equal: { cx: 287.4915353843834, cy: 307.98528125777136 },
            just: { cx: 287.4830803220625, cy: 308.96945051192654 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: {
            equal: { cx: 287.0710678118655, cy: 356.92770669885863 },
            just: { cx: 287.0630872957286, cy: 357.85663877718684 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: {
            equal: { cx: 286.6741992708502, cy: 403.12320487304 },
            just: { cx: 286.6666666666667, cy: 404 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: {
            equal: { cx: 286.2996052494744, cy: 446.7259489611838 },
            just: { cx: 286.29249541787794, cy: 447.5535333590058 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: {
            equal: { cx: 285.9460355750136, cy: 487.88145906841635 },
            just: { cx: 285.9393247876023, cy: 488.6625947230967 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: {
            equal: { cx: 285.6123102415469, cy: 526.7270878839449 },
            just: { cx: 285.60597610169145, cy: 527.4643817631174 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: {
            equal: { cx: 285.2973154717965, cy: 563.3924790828901 },
            just: { cx: 285.291336839894, cy: 564.0883918363386 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.5,
          coordinates: {
            equal: { cx: 285, cy: 598 },
            just: { cx: 284.9943569229223, cy: 598.6568541718476 }
          },
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
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: {
            equal: { cx: 284.71937156340846, cy: 630.6651500192544 },
            just: { cx: 284.7140452079103, cy: 631.2851377992391 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: {
            equal: { cx: 284.4544935907017, cy: 661.4969460423226 },
            just: { cx: 284.4494661805668, cy: 662.0821365820268 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: {
            equal: { cx: 284.20448207626856, cy: 690.5982863223383 },
            just: { cx: 284.1997368329829, cy: 691.1506326407892 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: {
            equal: { cx: 283.9685026299205, cy: 718.066293877254 },
            just: { cx: 283.96402371667574, cy: 718.5876393789442 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: {
            equal: { cx: 283.7457676921917, cy: 743.9926406288856 },
            just: { cx: 283.74154016103125, cy: 744.4847252559632 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: {
            equal: { cx: 283.7457676921917, cy: 768.4638533494294 },
            just: { cx: 283.53154364786434, cy: 768.9283193885935 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: {
            equal: { cx: 283.3370996354251, cy: 791.56160243652 },
            just: { cx: 283.3333333333333, cy: 792 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: {
            equal: { cx: 283.14980262473716, cy: 813.3629744805918 },
            just: { cx: 283.146247708939, cy: 813.7767666795028 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: {
            equal: { cx: 282.9730177875068, cy: 833.9407295342082 },
            just: { cx: 282.9696623938011, cy: 834.3312973615484 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: {
            equal: { cx: 282.80615512077344, cy: 853.3635439419725 },
            just: { cx: 282.8029880508457, cy: 853.7321908815587 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: {
            equal: { cx: 282.6486577358982, cy: 871.696239541445 },
            just: { cx: 282.645668419947, cy: 872.0441959181693 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.75,
          coordinates: {
            equal: { cx: 282.5, cy: 889 },
            just: { cx: 282.49717846146115, cy: 889.3284270859237 }
          },
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
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: {
            equal: { cx: 282.35968578170423, cy: 905.3325750096271 },
            just: { cx: 282.35702260395516, cy: 905.6425688996195 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: {
            equal: { cx: 282.2272467953508, cy: 920.7484730211613 },
            just: { cx: 282.2247330902834, cy: 921.0410682910133 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: {
            equal: { cx: 282.1022410381343, cy: 935.2991431611691 },
            just: { cx: 282.09986841649146, cy: 935.5753163203947 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: {
            equal: { cx: 281.98425131496026, cy: 949.0331469386269 },
            just: { cx: 281.98201185833784, cy: 949.2938196894721 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: {
            equal: { cx: 281.8728838460959, cy: 961.9963203144429 },
            just: { cx: 281.8707700805156, cy: 962.2423626279817 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: {
            equal: { cx: 281.7677669529664, cy: 974.2319266747147 },
            just: { cx: 281.76577182393214, cy: 974.4641596942968 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: {
            equal: { cx: 281.6685498177125, cy: 985.7808012182601 },
            just: { cx: 281.6666666666667, cy: 986 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: {
            equal: { cx: 281.5749013123686, cy: 996.681487240296 },
            just: { cx: 281.5731238544695, cy: 996.8883833397515 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: {
            equal: { cx: 281.4865088937534, cy: 1006.9703647671041 },
            just: { cx: 281.4848311969006, cy: 1007.1656486807742 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: {
            equal: { cx: 281.4030775603867, cy: 1016.6817719709862 },
            just: { cx: 281.40149402542283, cy: 1016.8660954407793 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: {
            equal: { cx: 281.32432886794913, cy: 1025.8481197707224 },
            just: { cx: 281.3228342099735, cy: 1026.0220979590845 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.875,
          coordinates: {
            equal: { cx: 281.25, cy: 1034.5 },
            just: { cx: 281.24858923073054, cy: 1034.664213542962 }
          },
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
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: {
            equal: { cx: 310.5612568731831, cy: 81.33030003850874 },
            just: { cx: 310.5612568731831, cy: 81.33030003850874 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: {
            equal: { cx: 311.0910128185966, cy: 142.9938920846451 },
            just: { cx: 311.0910128185966, cy: 142.9938920846451 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: {
            equal: { cx: 311.5910358474629, cy: 201.1965726446763 },
            just: { cx: 311.5910358474629, cy: 201.1965726446763 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: {
            equal: { cx: 312.062994740159, cy: 256.1325877545079 },
            just: { cx: 312.062994740159, cy: 256.1325877545079 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: {
            equal: { cx: 312.5084646156166, cy: 307.98528125777136 },
            just: { cx: 312.5084646156166, cy: 307.98528125777136 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: {
            equal: { cx: 312.9289321881345, cy: 356.92770669885863 },
            just: { cx: 312.9289321881345, cy: 356.92770669885863 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: {
            equal: { cx: 313.3258007291498, cy: 403.12320487304 },
            just: { cx: 313.3258007291498, cy: 403.12320487304 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: {
            equal: { cx: 313.7003947505256, cy: 446.7259489611838 },
            just: { cx: 313.7003947505256, cy: 446.7259489611838 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: {
            equal: { cx: 314.0539644249864, cy: 487.88145906841635 },
            just: { cx: 314.0539644249864, cy: 487.88145906841635 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: {
            equal: { cx: 314.3876897584531, cy: 526.7270878839449 },
            just: { cx: 314.3876897584531, cy: 526.7270878839449 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: {
            equal: { cx: 314.7026845282035, cy: 563.3924790828901 },
            just: { cx: 314.7026845282035, cy: 563.3924790828901 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.5,
          coordinates: {
            equal: { cx: 315, cy: 598 },
            just: { cx: 315, cy: 598 }
          },
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
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: {
            equal: { cx: 315.28062843659154, cy: 630.6651500192544 },
            just: { cx: 315.28062843659154, cy: 630.6651500192544 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: {
            equal: { cx: 315.5455064092983, cy: 661.4969460423226 },
            just: { cx: 315.5455064092983, cy: 661.4969460423226 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: {
            equal: { cx: 315.79551792373144, cy: 690.5982863223383 },
            just: { cx: 315.79551792373144, cy: 690.5982863223383 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: {
            equal: { cx: 316.0314973700795, cy: 718.066293877254 },
            just: { cx: 316.0314973700795, cy: 718.066293877254 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: {
            equal: { cx: 316.2542323078083, cy: 743.9926406288856 },
            just: { cx: 316.2542323078083, cy: 743.9926406288856 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: {
            equal: { cx: 316.46446609406723, cy: 768.4638533494294 },
            just: { cx: 316.46446609406723, cy: 768.4638533494294 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: {
            equal: { cx: 316.6629003645749, cy: 791.56160243652 },
            just: { cx: 316.6629003645749, cy: 791.56160243652 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: {
            equal: { cx: 316.85019737526284, cy: 813.3629744805918 },
            just: { cx: 316.85019737526284, cy: 813.3629744805918 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: {
            equal: { cx: 317.0269822124932, cy: 833.9407295342082 },
            just: { cx: 317.0269822124932, cy: 833.9407295342082 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: {
            equal: { cx: 317.19384487922656, cy: 853.3635439419725 },
            just: { cx: 317.19384487922656, cy: 853.3635439419725 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: {
            equal: { cx: 317.3513422641018, cy: 871.696239541445 },
            just: { cx: 317.3513422641018, cy: 871.696239541445 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.75,
          coordinates: {
            equal: { cx: 317.5, cy: 889 },
            just: { cx: 317.5, cy: 889 }
          },
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
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: {
            equal: { cx: 317.64031421829577, cy: 905.3325750096271 },
            just: { cx: 317.64031421829577, cy: 905.3325750096271 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: {
            equal: { cx: 317.7727532046492, cy: 920.7484730211613 },
            just: { cx: 317.7727532046492, cy: 920.7484730211613 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: {
            equal: { cx: 317.8977589618657, cy: 935.2991431611691 },
            just: { cx: 317.8977589618657, cy: 935.2991431611691 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: {
            equal: { cx: 318.01574868503974, cy: 949.0331469386269 },
            just: { cx: 318.01574868503974, cy: 949.0331469386269 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: {
            equal: { cx: 318.1271161539041, cy: 961.9963203144429 },
            just: { cx: 318.1271161539041, cy: 961.9963203144429 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: {
            equal: { cx: 318.2322330470336, cy: 974.2319266747147 },
            just: { cx: 318.2322330470336, cy: 974.2319266747147 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: {
            equal: { cx: 318.3314501822875, cy: 985.7808012182601 },
            just: { cx: 318.3314501822875, cy: 985.7808012182601 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: {
            equal: { cx: 318.4250986876314, cy: 996.681487240296 },
            just: { cx: 318.4250986876314, cy: 996.681487240296 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: {
            equal: { cx: 318.5134911062466, cy: 1006.9703647671041 },
            just: { cx: 318.5134911062466, cy: 1006.9703647671041 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: {
            equal: { cx: 318.5969224396133, cy: 1016.6817719709862 },
            just: { cx: 318.5969224396133, cy: 1016.6817719709862 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: {
            equal: { cx: 318.67567113205087, cy: 1025.8481197707224 },
            just: { cx: 318.67567113205087, cy: 1025.8481197707224 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.875,
          coordinates: {
            equal: { cx: 318.75, cy: 1034.5 },
            just: { cx: 318.75, cy: 1034.5 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: {
            equal: { cx: 331.6837706195492, cy: 81.33030003850874 },
            just: { cx: 331.65177637736537, cy: 80.0889234417758 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: {
            equal: { cx: 333.27303845578984, cy: 142.9938920846451 },
            just: { cx: 333.2428399124388, cy: 141.82218860262466 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: {
            equal: { cx: 334.7731075423886, cy: 201.1965726446763 },
            just: { cx: 334.7446039130391, cy: 200.09063182591754 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: {
            equal: { cx: 336.188984220477, cy: 256.1325877545079 },
            just: { cx: 336.16208037691587, cy: 255.08871862433526 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: {
            equal: { cx: 337.5253938468498, cy: 307.98528125777136 },
            just: { cx: 337.5, cy: 307.00000000000006 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: {
            equal: { cx: 338.7867965644036, cy: 356.92770669885863 },
            just: { cx: 338.7628279646619, cy: 355.99772502888163 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: {
            equal: { cx: 339.97740218744946, cy: 403.12320487304 },
            just: { cx: 339.95477884184237, cy: 402.24541906348384 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: {
            equal: { cx: 341.1011842515769, cy: 446.7259489611838 },
            just: { cx: 341.07983065679144, cy: 445.89742948350727 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: {
            equal: { cx: 342.1618932749592, cy: 487.88145906841635 },
            just: { cx: 342.14173816535776, cy: 487.09944081588105 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: {
            equal: { cx: 343.1630692753594, cy: 526.7270878839449 },
            just: { cx: 343.14404538513736, cy: 525.9889609433286 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: {
            equal: { cx: 344.10805358461056, cy: 563.3924790828901 },
            just: { cx: 344.09009742330267, cy: 562.695780024144 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.5,
          coordinates: {
            equal: { cx: 345, cy: 598 },
            just: { cx: 344.9830516405871, cy: 597.34240365478 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: {
            equal: { cx: 345.8418853097746, cy: 630.6651500192544 },
            just: { cx: 345.82588818868265, cy: 630.0444617208879 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: {
            equal: { cx: 346.6365192278949, cy: 661.4969460423226 },
            just: { cx: 346.62141995621937, cy: 660.9110943013123 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: {
            equal: { cx: 347.38655377119426, cy: 690.5982863223383 },
            just: { cx: 347.37230195651955, cy: 690.0453159129588 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: {
            equal: { cx: 348.0944921102385, cy: 718.066293877254 },
            just: { cx: 348.0810401884579, cy: 717.5443593121678 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: {
            equal: { cx: 348.76269692342487, cy: 743.9926406288856 },
            just: { cx: 348.75, cy: 743.5 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: {
            equal: { cx: 349.3933982822018, cy: 768.4638533494294 },
            just: { cx: 349.38141398233097, cy: 767.9988625144408 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: {
            equal: { cx: 349.9887010937247, cy: 791.56160243652 },
            just: { cx: 349.9773894209212, cy: 791.122709531742 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: {
            equal: { cx: 350.55059212578846, cy: 813.3629744805918 },
            just: { cx: 350.5399153283957, cy: 812.9487147417536 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: {
            equal: { cx: 351.0809466374796, cy: 833.9407295342082 },
            just: { cx: 351.0708690826789, cy: 833.5497204079405 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: {
            equal: { cx: 351.5815346376797, cy: 853.3635439419725 },
            just: { cx: 351.5720226925687, cy: 852.9944804716642 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: {
            equal: { cx: 352.0540267923053, cy: 871.696239541445 },
            just: { cx: 352.04504871165136, cy: 871.347890012072 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.75,
          coordinates: {
            equal: { cx: 352.5, cy: 889 },
            just: { cx: 352.49152582029353, cy: 888.6712018273901 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: {
            equal: { cx: 352.9209426548873, cy: 905.3325750096271 },
            just: { cx: 352.91294409434136, cy: 905.022230860444 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: {
            equal: { cx: 353.3182596139475, cy: 920.7484730211613 },
            just: { cx: 353.3107099781097, cy: 920.4555471506562 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: {
            equal: { cx: 353.69327688559713, cy: 935.2991431611691 },
            just: { cx: 353.6861509782598, cy: 935.0226579564795 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: {
            equal: { cx: 354.0472460551193, cy: 949.0331469386269 },
            just: { cx: 354.04052009422895, cy: 948.7721796560838 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: {
            equal: { cx: 354.38134846171243, cy: 961.9963203144429 },
            just: { cx: 354.375, cy: 961.75 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: {
            equal: { cx: 354.6966991411009, cy: 974.2319266747147 },
            just: { cx: 354.6907069911655, cy: 973.9994312572205 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: {
            equal: { cx: 354.9943505468624, cy: 985.7808012182601 },
            just: { cx: 354.9886947104606, cy: 985.561354765871 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: {
            equal: { cx: 355.2752960628942, cy: 996.681487240296 },
            just: { cx: 355.2699576641979, cy: 996.4743573708768 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: {
            equal: { cx: 355.54047331873977, cy: 1006.9703647671041 },
            just: { cx: 355.53543454133944, cy: 1006.7748602039703 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: {
            equal: { cx: 355.79076731883987, cy: 1016.6817719709862 },
            just: { cx: 355.78601134628434, cy: 1016.4972402358321 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: {
            equal: { cx: 356.02701339615265, cy: 1025.8481197707224 },
            just: { cx: 356.0225243558257, cy: 1025.6739450060359 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.875,
          coordinates: {
            equal: { cx: 356.25, cy: 1034.5 },
            just: { cx: 356.24576291014677, cy: 1034.335600913695 }
          },
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
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: {
            equal: { cx: 268.3162293804508, cy: 81.33030003850874 },
            just: { cx: 268.22046314610134, cy: 85.0460299312686 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: {
            equal: { cx: 266.72696154421016, cy: 142.9938920846451 },
            just: { cx: 266.63657025558547, cy: 146.50107408328464 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: {
            equal: { cx: 265.2268924576114, cy: 201.1965726446763 },
            just: { cx: 265.14157444218836, cy: 204.50691164309183 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: {
            equal: { cx: 263.811015779523, cy: 256.1325877545079 },
            just: { cx: 263.73048629635616, cy: 259.2571317013807 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: {
            equal: { cx: 262.4746061531502, cy: 307.98528125777136 },
            just: { cx: 262.3985964425755, cy: 310.9344580280697 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: {
            equal: { cx: 261.2132034355964, cy: 356.92770669885863 },
            just: { cx: 261.1414598222706, cy: 359.7113588959008 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: {
            equal: { cx: 260.02259781255054, cy: 403.12320487304 },
            just: { cx: 259.9548808588333, cy: 405.7506226772681 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: {
            equal: { cx: 258.8988157484231, cy: 446.7259489611838 },
            just: { cx: 258.83489945527634, cy: 449.2059011352772 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: {
            equal: { cx: 257.8381067250408, cy: 487.88145906841635 },
            just: { cx: 257.77777777777777, cy: 490.2222222222223 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: {
            equal: { cx: 256.8369307246406, cy: 526.7270878839449 },
            just: { cx: 256.7799877810079, cy: 528.9364740968941 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: {
            equal: { cx: 255.89194641538944, cy: 563.3924790828901 },
            just: { cx: 255.83819943360604, cy: 565.4778619760859 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.5,
          coordinates: {
            equal: { cx: 255, cy: 598 },
            just: { cx: 254.94926960451048, cy: 599.9683393449933 }
          },
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
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: {
            equal: { cx: 254.1581146902254, cy: 630.6651500192544 },
            just: { cx: 254.11023157305067, cy: 632.5230149656343 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: {
            equal: { cx: 253.36348077210508, cy: 661.4969460423226 },
            just: { cx: 253.3182851277927, cy: 663.2505370416424 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: {
            equal: { cx: 252.6134462288057, cy: 690.5982863223383 },
            just: { cx: 252.57078722109418, cy: 692.2534558215459 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: {
            equal: { cx: 251.9055078897615, cy: 718.066293877254 },
            just: { cx: 251.86524314817808, cy: 719.6285658506905 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: {
            equal: { cx: 251.2373030765751, cy: 743.9926406288856 },
            just: { cx: 251.19929822128776, cy: 745.467229014035 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: {
            equal: { cx: 250.6066017177982, cy: 768.4638533494294 },
            just: { cx: 250.5707299111353, cy: 769.8556794479505 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: {
            equal: { cx: 250.01129890627527, cy: 791.56160243652 },
            just: { cx: 249.97744042941665, cy: 792.8753113386341 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: {
            equal: { cx: 249.44940787421154, cy: 813.3629744805918 },
            just: { cx: 249.41744972763817, cy: 814.6029505676386 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: {
            equal: { cx: 248.9190533625204, cy: 833.9407295342082 },
            just: { cx: 248.88888888888889, cy: 835.1111111111111 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: {
            equal: { cx: 248.4184653623203, cy: 853.3635439419725 },
            just: { cx: 248.38999389050394, cy: 854.468237048447 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: {
            equal: { cx: 247.94597320769472, cy: 871.696239541445 },
            just: { cx: 247.91909971680303, cy: 872.7389309880429 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.75,
          coordinates: {
            equal: { cx: 247.5, cy: 889 },
            just: { cx: 247.47463480225525, cy: 889.9841696724966 }
          },
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
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: {
            equal: { cx: 247.0790573451127, cy: 905.3325750096271 },
            just: { cx: 247.05511578652533, cy: 906.2615074828173 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: {
            equal: { cx: 246.68174038605255, cy: 920.7484730211613 },
            just: { cx: 246.65914256389635, cy: 921.6252685208212 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: {
            equal: { cx: 246.30672311440287, cy: 935.2991431611691 },
            just: { cx: 246.2853936105471, cy: 936.1267279107731 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: {
            equal: { cx: 245.95275394488075, cy: 949.0331469386269 },
            just: { cx: 245.93262157408904, cy: 949.8142829253452 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: {
            equal: { cx: 245.61865153828757, cy: 961.9963203144429 },
            just: { cx: 245.5996491106439, cy: 962.7336145070174 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: {
            equal: { cx: 245.3033008588991, cy: 974.2319266747147 },
            just: { cx: 245.28536495556764, cy: 974.9278397239752 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: {
            equal: { cx: 245.00564945313764, cy: 985.7808012182601 },
            just: { cx: 244.98872021470834, cy: 986.4376556693171 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: {
            equal: { cx: 244.72470393710577, cy: 996.681487240296 },
            just: { cx: 244.7087248638191, cy: 997.3014752838193 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: {
            equal: { cx: 244.4595266812602, cy: 1006.9703647671041 },
            just: { cx: 244.44444444444446, cy: 1007.5555555555555 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: {
            equal: { cx: 244.20923268116016, cy: 1016.6817719709862 },
            just: { cx: 244.19499694525197, cy: 1017.2341185242236 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: {
            equal: { cx: 243.97298660384735, cy: 1025.8481197707224 },
            just: { cx: 243.95954985840152, cy: 1026.3694654940214 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.875,
          coordinates: {
            equal: { cx: 243.75, cy: 1034.5 },
            just: { cx: 243.73731740112763, cy: 1034.9920848362485 }
          },
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
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: {
            equal: { cx: 289.4387431268169, cy: 81.33030003850874 },
            just: { cx: 289.4174497276382, cy: 83.80885170291582 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: {
            equal: { cx: 288.9089871814034, cy: 142.9938920846451 },
            just: { cx: 288.8888888888889, cy: 145.3333333333334 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: {
            equal: { cx: 288.4089641525371, cy: 201.1965726446763 },
            just: { cx: 288.38999389050394, cy: 203.4047111453412 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: {
            equal: { cx: 287.937005259841, cy: 256.1325877545079 },
            just: { cx: 287.91909971680303, cy: 258.2167929641289 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: {
            equal: { cx: 287.4915353843834, cy: 307.98528125777136 },
            just: { cx: 287.47463480225525, cy: 309.95250901749 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: {
            equal: { cx: 287.0710678118655, cy: 356.92770669885863 },
            just: { cx: 287.05511578652533, cy: 358.78452244845147 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: {
            equal: { cx: 286.6741992708502, cy: 403.12320487304 },
            just: { cx: 286.65914256389635, cy: 404.8758055624635 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: {
            equal: { cx: 286.2996052494744, cy: 446.7259489611838 },
            just: { cx: 286.2853936105471, cy: 448.3801837323188 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: {
            equal: { cx: 285.9460355750136, cy: 487.88145906841635 },
            just: { cx: 285.93262157408907, cy: 489.4428487760356 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: {
            equal: { cx: 285.6123102415469, cy: 526.7270878839449 },
            just: { cx: 285.5996491106439, cy: 528.2008435210523 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: {
            equal: { cx: 285.2973154717965, cy: 563.3924790828901 },
            just: { cx: 285.2853649555677, cy: 564.7835191719256 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.5,
          coordinates: {
            equal: { cx: 285, cy: 598 },
            just: { cx: 284.98872021470834, cy: 599.3129670079511 }
          },
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
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: {
            equal: { cx: 284.71937156340846, cy: 630.6651500192544 },
            just: { cx: 284.7087248638191, cy: 631.9044258514579 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: {
            equal: { cx: 284.4544935907017, cy: 661.4969460423226 },
            just: { cx: 284.44444444444446, cy: 662.6666666666667 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: {
            equal: { cx: 284.20448207626856, cy: 690.5982863223383 },
            just: { cx: 284.19499694525194, cy: 691.7023555726707 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: {
            equal: { cx: 283.9685026299205, cy: 718.066293877254 },
            just: { cx: 283.9595498584015, cy: 719.1083964820646 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: {
            equal: { cx: 283.7457676921917, cy: 743.9926406288856 },
            just: { cx: 283.7373174011276, cy: 744.976254508745 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: {
            equal: { cx: 283.53553390593277, cy: 768.4638533494294 },
            just: { cx: 283.52755789326267, cy: 769.3922612242258 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: {
            equal: { cx: 283.3370996354251, cy: 791.56160243652 },
            just: { cx: 283.3295712819482, cy: 792.4379027812316 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: {
            equal: { cx: 283.14980262473716, cy: 813.3629744805918 },
            just: { cx: 283.14269680527354, cy: 814.1900918661594 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: {
            equal: { cx: 282.9730177875068, cy: 833.9407295342082 },
            just: { cx: 282.9663107870445, cy: 834.7214243880178 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: {
            equal: { cx: 282.80615512077344, cy: 853.3635439419725 },
            just: { cx: 282.79982455532195, cy: 854.1004217605262 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: {
            equal: { cx: 282.6486577358982, cy: 871.696239541445 },
            just: { cx: 282.6426824777838, cy: 872.3917595859627 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.75,
          coordinates: {
            equal: { cx: 282.5, cy: 889 },
            just: { cx: 282.49436010735417, cy: 889.6564835039756 }
          },
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
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: {
            equal: { cx: 282.35968578170423, cy: 905.3325750096271 },
            just: { cx: 282.3543624319095, cy: 905.952212925729 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: {
            equal: { cx: 282.2272467953508, cy: 920.7484730211613 },
            just: { cx: 282.22222222222223, cy: 921.3333333333334 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: {
            equal: { cx: 282.1022410381343, cy: 935.2991431611691 },
            just: { cx: 282.097498472626, cy: 935.8511777863354 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: {
            equal: { cx: 281.98425131496026, cy: 949.0331469386269 },
            just: { cx: 281.97977492920074, cy: 949.5541982410323 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: {
            equal: { cx: 281.8728838460959, cy: 961.9963203144429 },
            just: { cx: 281.8686587005638, cy: 962.4881272543726 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: {
            equal: { cx: 281.7677669529664, cy: 974.2319266747147 },
            just: { cx: 281.7637789466313, cy: 974.6961306121129 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: {
            equal: { cx: 281.6685498177125, cy: 985.7808012182601 },
            just: { cx: 281.6647856409741, cy: 986.2189513906159 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: {
            equal: { cx: 281.5749013123686, cy: 996.681487240296 },
            just: { cx: 281.5713484026368, cy: 997.0950459330796 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: {
            equal: { cx: 281.4865088937534, cy: 1006.9703647671041 },
            just: { cx: 281.4831553935223, cy: 1007.360712194009 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: {
            equal: { cx: 281.4030775603867, cy: 1016.6817719709862 },
            just: { cx: 281.399912277661, cy: 1017.050210880263 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: {
            equal: { cx: 281.32432886794913, cy: 1025.8481197707224 },
            just: { cx: 281.32134123889193, cy: 1026.1958797929815 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.875,
          coordinates: {
            equal: { cx: 281.25, cy: 1034.5 },
            just: { cx: 281.2471800536771, cy: 1034.8282417519877 }
          },
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
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: {
            equal: { cx: 310.5612568731831, cy: 81.33030003850874 },
            just: { cx: 310.57190958417937, cy: 82.57027559847819 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: {
            equal: { cx: 311.0910128185966, cy: 142.9938920846451 },
            just: { cx: 311.1010676388664, cy: 144.16427316405336 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: {
            equal: { cx: 311.5910358474629, cy: 201.1965726446763 },
            just: { cx: 311.60052633403416, cy: 202.30126528157845 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: {
            equal: { cx: 312.062994740159, cy: 256.1325877545079 },
            just: { cx: 312.0719525666485, cy: 257.17527875788835 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: {
            equal: { cx: 312.5084646156166, cy: 307.98528125777136 },
            just: { cx: 312.5169196779375, cy: 308.96945051192654 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: {
            equal: { cx: 312.9289321881345, cy: 356.92770669885863 },
            just: { cx: 312.9369127042714, cy: 357.85663877718684 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: {
            equal: { cx: 313.3258007291498, cy: 403.12320487304 },
            just: { cx: 313.3333333333333, cy: 404 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: {
            equal: { cx: 313.7003947505256, cy: 446.7259489611838 },
            just: { cx: 313.70750458212206, cy: 447.5535333590058 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: {
            equal: { cx: 314.0539644249864, cy: 487.88145906841635 },
            just: { cx: 314.0606752123977, cy: 488.6625947230967 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: {
            equal: { cx: 314.3876897584531, cy: 526.7270878839449 },
            just: { cx: 314.39402389830855, cy: 527.4643817631174 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: {
            equal: { cx: 314.7026845282035, cy: 563.3924790828901 },
            just: { cx: 314.708663160106, cy: 564.0883918363386 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.5,
          coordinates: {
            equal: { cx: 315, cy: 598 },
            just: { cx: 315.0056430770777, cy: 598.6568541718476 }
          },
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
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: {
            equal: { cx: 315.28062843659154, cy: 630.6651500192544 },
            just: { cx: 315.2859547920897, cy: 631.2851377992391 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: {
            equal: { cx: 315.5455064092983, cy: 661.4969460423226 },
            just: { cx: 315.5505338194332, cy: 662.0821365820268 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: {
            equal: { cx: 315.79551792373144, cy: 690.5982863223383 },
            just: { cx: 315.8002631670171, cy: 691.1506326407892 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: {
            equal: { cx: 316.0314973700795, cy: 718.066293877254 },
            just: { cx: 316.03597628332426, cy: 718.5876393789442 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: {
            equal: { cx: 316.2542323078083, cy: 743.9926406288856 },
            just: { cx: 316.25845983896875, cy: 744.4847252559632 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: {
            equal: { cx: 316.46446609406723, cy: 768.4638533494294 },
            just: { cx: 316.46845635213566, cy: 768.9283193885935 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: {
            equal: { cx: 316.6629003645749, cy: 791.56160243652 },
            just: { cx: 316.6666666666667, cy: 792 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: {
            equal: { cx: 316.85019737526284, cy: 813.3629744805918 },
            just: { cx: 316.853752291061, cy: 813.7767666795028 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: {
            equal: { cx: 317.0269822124932, cy: 833.9407295342082 },
            just: { cx: 317.0303376061989, cy: 834.3312973615484 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: {
            equal: { cx: 317.19384487922656, cy: 853.3635439419725 },
            just: { cx: 317.1970119491543, cy: 853.7321908815587 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: {
            equal: { cx: 317.3513422641018, cy: 871.696239541445 },
            just: { cx: 317.354331580053, cy: 872.0441959181693 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.75,
          coordinates: {
            equal: { cx: 317.5, cy: 889 },
            just: { cx: 317.50282153853885, cy: 889.3284270859237 }
          },
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
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: {
            equal: { cx: 317.64031421829577, cy: 905.3325750096271 },
            just: { cx: 317.64297739604484, cy: 905.6425688996195 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: {
            equal: { cx: 317.7727532046492, cy: 920.7484730211613 },
            just: { cx: 317.7752669097166, cy: 921.0410682910133 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: {
            equal: { cx: 317.8977589618657, cy: 935.2991431611691 },
            just: { cx: 317.90013158350854, cy: 935.5753163203947 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: {
            equal: { cx: 318.01574868503974, cy: 949.0331469386269 },
            just: { cx: 318.01798814166216, cy: 949.2938196894721 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: {
            equal: { cx: 318.1271161539041, cy: 961.9963203144429 },
            just: { cx: 318.1292299194844, cy: 962.2423626279817 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: {
            equal: { cx: 318.2322330470336, cy: 974.2319266747147 },
            just: { cx: 318.23422817606786, cy: 974.4641596942968 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: {
            equal: { cx: 318.3314501822875, cy: 985.7808012182601 },
            just: { cx: 318.3333333333333, cy: 986 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: {
            equal: { cx: 318.4250986876314, cy: 996.681487240296 },
            just: { cx: 318.4268761455305, cy: 996.8883833397515 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: {
            equal: { cx: 318.5134911062466, cy: 1006.9703647671041 },
            just: { cx: 318.5151688030994, cy: 1007.1656486807742 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: {
            equal: { cx: 318.5969224396133, cy: 1016.6817719709862 },
            just: { cx: 318.59850597457717, cy: 1016.8660954407793 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: {
            equal: { cx: 318.67567113205087, cy: 1025.8481197707224 },
            just: { cx: 318.6771657900265, cy: 1026.0220979590845 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.875,
          coordinates: {
            equal: { cx: 318.75, cy: 1034.5 },
            just: { cx: 318.75141076926946, cy: 1034.664213542962 }
          },
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
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: {
            equal: { cx: 331.6837706195492, cy: 81.33030003850874 },
            just: { cx: 331.6837706195492, cy: 81.33030003850874 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: {
            equal: { cx: 333.27303845578984, cy: 142.9938920846451 },
            just: { cx: 333.27303845578984, cy: 142.9938920846451 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: {
            equal: { cx: 334.7731075423886, cy: 201.1965726446763 },
            just: { cx: 334.7731075423886, cy: 201.1965726446763 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: {
            equal: { cx: 336.188984220477, cy: 256.1325877545079 },
            just: { cx: 336.188984220477, cy: 256.1325877545079 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: {
            equal: { cx: 337.5253938468498, cy: 307.98528125777136 },
            just: { cx: 337.5253938468498, cy: 307.98528125777136 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: {
            equal: { cx: 338.7867965644036, cy: 356.92770669885863 },
            just: { cx: 338.7867965644036, cy: 356.92770669885863 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: {
            equal: { cx: 339.97740218744946, cy: 403.12320487304 },
            just: { cx: 339.97740218744946, cy: 403.12320487304 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: {
            equal: { cx: 341.1011842515769, cy: 446.7259489611838 },
            just: { cx: 341.1011842515769, cy: 446.7259489611838 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: {
            equal: { cx: 342.1618932749592, cy: 487.88145906841635 },
            just: { cx: 342.1618932749592, cy: 487.88145906841635 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: {
            equal: { cx: 343.1630692753594, cy: 526.7270878839449 },
            just: { cx: 343.1630692753594, cy: 526.7270878839449 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: {
            equal: { cx: 344.10805358461056, cy: 563.3924790828901 },
            just: { cx: 344.10805358461056, cy: 563.3924790828901 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.5,
          coordinates: {
            equal: { cx: 345, cy: 598 },
            just: { cx: 345, cy: 598 }
          },
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
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: {
            equal: { cx: 345.8418853097746, cy: 630.6651500192544 },
            just: { cx: 345.8418853097746, cy: 630.6651500192544 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: {
            equal: { cx: 346.6365192278949, cy: 661.4969460423226 },
            just: { cx: 346.6365192278949, cy: 661.4969460423226 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: {
            equal: { cx: 347.38655377119426, cy: 690.5982863223383 },
            just: { cx: 347.38655377119426, cy: 690.5982863223383 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: {
            equal: { cx: 348.0944921102385, cy: 718.066293877254 },
            just: { cx: 348.0944921102385, cy: 718.066293877254 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: {
            equal: { cx: 348.76269692342487, cy: 743.9926406288856 },
            just: { cx: 348.76269692342487, cy: 743.9926406288856 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: {
            equal: { cx: 349.3933982822018, cy: 768.4638533494294 },
            just: { cx: 349.3933982822018, cy: 768.4638533494294 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: {
            equal: { cx: 349.9887010937247, cy: 791.56160243652 },
            just: { cx: 349.9887010937247, cy: 791.56160243652 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: {
            equal: { cx: 350.55059212578846, cy: 813.3629744805918 },
            just: { cx: 350.55059212578846, cy: 813.3629744805918 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: {
            equal: { cx: 351.0809466374796, cy: 833.9407295342082 },
            just: { cx: 351.0809466374796, cy: 833.9407295342082 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: {
            equal: { cx: 351.5815346376797, cy: 853.3635439419725 },
            just: { cx: 351.5815346376797, cy: 853.3635439419725 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: {
            equal: { cx: 352.0540267923053, cy: 871.696239541445 },
            just: { cx: 352.0540267923053, cy: 871.696239541445 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.75,
          coordinates: {
            equal: { cx: 352.5, cy: 889 },
            just: { cx: 352.5, cy: 871.696239541445 }
          },
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
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: {
            equal: { cx: 352.9209426548873, cy: 905.3325750096271 },
            just: { cx: 352.9209426548873, cy: 905.3325750096271 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: {
            equal: { cx: 353.3182596139475, cy: 920.7484730211613 },
            just: { cx: 353.3182596139475, cy: 920.7484730211613 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: {
            equal: { cx: 353.69327688559713, cy: 935.2991431611691 },
            just: { cx: 353.69327688559713, cy: 935.2991431611691 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: {
            equal: { cx: 354.0472460551193, cy: 949.0331469386269 },
            just: { cx: 354.0472460551193, cy: 949.0331469386269 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: {
            equal: { cx: 354.38134846171243, cy: 961.9963203144429 },
            just: { cx: 354.38134846171243, cy: 961.9963203144429 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: {
            equal: { cx: 354.6966991411009, cy: 974.2319266747147 },
            just: { cx: 354.6966991411009, cy: 974.2319266747147 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: {
            equal: { cx: 354.9943505468624, cy: 985.7808012182601 },
            just: { cx: 354.9943505468624, cy: 985.7808012182601 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: {
            equal: { cx: 355.2752960628942, cy: 996.681487240296 },
            just: { cx: 355.2752960628942, cy: 996.681487240296 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: {
            equal: { cx: 355.54047331873977, cy: 1006.9703647671041 },
            just: { cx: 355.54047331873977, cy: 1006.9703647671041 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: {
            equal: { cx: 355.79076731883987, cy: 1016.6817719709862 },
            just: { cx: 355.79076731883987, cy: 1016.6817719709862 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: {
            equal: { cx: 356.02701339615265, cy: 1025.8481197707224 },
            just: { cx: 356.02701339615265, cy: 1025.8481197707224 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.875,
          coordinates: {
            equal: { cx: 356.25, cy: 1034.5 },
            just: { cx: 356.25, cy: 1034.5 }
          },
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
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: {
            equal: { cx: 280.65298350436063, cy: 81.33030003850874 },
            just: { cx: 280.57637051688107, cy: 85.0460299312686 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: {
            equal: { cx: 279.38156923536815, cy: 142.9938920846451 },
            just: { cx: 279.30925620446834, cy: 146.50107408328464 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: {
            equal: { cx: 278.18151396608914, cy: 201.1965726446763 },
            just: { cx: 278.1132595537507, cy: 204.50691164309183 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: {
            equal: { cx: 277.0488126236184, cy: 256.1325877545079 },
            just: { cx: 276.98438903708495, cy: 259.2571317013807 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: {
            equal: { cx: 275.97968492252016, cy: 307.98528125777136 },
            just: { cx: 275.9188771540604, cy: 310.9344580280697 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: {
            equal: { cx: 274.97056274847716, cy: 356.92770669885863 },
            just: { cx: 274.91316785781646, cy: 359.7113588959008 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: {
            equal: { cx: 274.0180782500404, cy: 403.12320487304 },
            just: { cx: 273.96390468706664, cy: 405.7506226772681 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: {
            equal: { cx: 273.11905259873845, cy: 446.7259489611838 },
            just: { cx: 273.0679195642211, cy: 449.2059011352772 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: {
            equal: { cx: 272.27048538003265, cy: 487.88145906841635 },
            just: { cx: 272.22222222222223, cy: 490.2222222222223 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: {
            equal: { cx: 271.4695445797125, cy: 526.7270878839449 },
            just: { cx: 271.4239902248063, cy: 528.9364740968941 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: {
            equal: { cx: 270.71355713231156, cy: 563.3924790828901 },
            just: { cx: 270.6705595468848, cy: 565.4778619760859 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.5,
          coordinates: {
            equal: { cx: 270, cy: 598 },
            just: { cx: 269.95941568360837, cy: 599.9683393449933 }
          },
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
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: {
            equal: { cx: 269.32649175218035, cy: 630.6651500192544 },
            just: { cx: 269.28818525844054, cy: 632.5230149656343 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: {
            equal: { cx: 268.6907846176841, cy: 661.4969460423226 },
            just: { cx: 268.6546281022342, cy: 663.2505370416424 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: {
            equal: { cx: 268.09075698304457, cy: 690.5982863223383 },
            just: { cx: 268.05662977687535, cy: 692.2534558215459 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: {
            equal: { cx: 267.5244063118092, cy: 718.066293877254 },
            just: { cx: 267.4921945185425, cy: 719.6285658506905 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: {
            equal: { cx: 266.9898424612601, cy: 743.9926406288856 },
            just: { cx: 266.9594385770302, cy: 745.467229014035 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: {
            equal: { cx: 266.4852813742386, cy: 768.4638533494294 },
            just: { cx: 266.45658392890823, cy: 769.8556794479505 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: {
            equal: { cx: 266.0090391250202, cy: 791.56160243652 },
            just: { cx: 265.9819523435333, cy: 792.8753113386341 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: {
            equal: { cx: 265.5595262993692, cy: 813.3629744805918 },
            just: { cx: 265.53395978211057, cy: 814.6029505676386 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: {
            equal: { cx: 265.1352426900163, cy: 833.9407295342082 },
            just: { cx: 265.1111111111111, cy: 835.1111111111111 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: {
            equal: { cx: 264.7347722898562, cy: 853.3635439419725 },
            just: { cx: 264.71199511240314, cy: 854.468237048447 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: {
            equal: { cx: 264.35677856615575, cy: 871.696239541445 },
            just: { cx: 264.33527977344244, cy: 872.7389309880429 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.75,
          coordinates: {
            equal: { cx: 264, cy: 889 },
            just: { cx: 263.9797078418042, cy: 889.9841696724966 }
          },
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
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: {
            equal: { cx: 263.6632458760902, cy: 905.3325750096271 },
            just: { cx: 263.64409262922027, cy: 906.2615074828173 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: {
            equal: { cx: 263.34539230884207, cy: 920.7484730211613 },
            just: { cx: 263.32731405111707, cy: 921.6252685208212 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: {
            equal: { cx: 263.0453784915223, cy: 935.2991431611691 },
            just: { cx: 263.02831488843765, cy: 936.1267279107731 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: {
            equal: { cx: 262.7622031559046, cy: 949.0331469386269 },
            just: { cx: 262.7460972592712, cy: 949.8142829253452 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: {
            equal: { cx: 262.49492123063004, cy: 961.9963203144429 },
            just: { cx: 262.4797192885151, cy: 962.7336145070174 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: {
            equal: { cx: 262.24264068711926, cy: 974.2319266747147 },
            just: { cx: 262.2282919644541, cy: 974.9278397239752 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: {
            equal: { cx: 262.0045195625101, cy: 985.7808012182601 },
            just: { cx: 261.99097617176665, cy: 986.4376556693171 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: {
            equal: { cx: 261.77976314968464, cy: 996.681487240296 },
            just: { cx: 261.76697989105526, cy: 997.3014752838193 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: {
            equal: { cx: 261.56762134500815, cy: 1006.9703647671041 },
            just: { cx: 261.55555555555554, cy: 1007.5555555555555 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: {
            equal: { cx: 261.3673861449281, cy: 1016.6817719709862 },
            just: { cx: 261.3559975562016, cy: 1017.2341185242236 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: {
            equal: { cx: 261.1783892830779, cy: 1025.8481197707224 },
            just: { cx: 261.1676398867212, cy: 1026.3694654940214 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.875,
          coordinates: {
            equal: { cx: 261, cy: 1034.5 },
            just: { cx: 260.9898539209021, cy: 1034.9920848362485 }
          },
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
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: {
            equal: { cx: 293.55099450145354, cy: 81.33030003850874 },
            just: { cx: 293.53395978211057, cy: 83.80885170291582 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: {
            equal: { cx: 293.12718974512273, cy: 142.9938920846451 },
            just: { cx: 293.1111111111111, cy: 145.3333333333334 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: {
            equal: { cx: 292.72717132202973, cy: 201.1965726446763 },
            just: { cx: 292.71199511240314, cy: 203.4047111453412 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: {
            equal: { cx: 292.3496042078728, cy: 256.1325877545079 },
            just: { cx: 292.33527977344244, cy: 258.2167929641289 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: {
            equal: { cx: 291.99322830750674, cy: 307.98528125777136 },
            just: { cx: 291.9797078418042, cy: 309.95250901749 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: {
            equal: { cx: 291.65685424949237, cy: 356.92770669885863 },
            just: { cx: 291.64409262922027, cy: 358.78452244845147 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: {
            equal: { cx: 291.3393594166801, cy: 403.12320487304 },
            just: { cx: 291.32731405111707, cy: 404.8758055624635 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: {
            equal: { cx: 291.0396841995795, cy: 446.7259489611838 },
            just: { cx: 291.02831488843765, cy: 448.3801837323188 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: {
            equal: { cx: 290.75682846001087, cy: 487.88145906841635 },
            just: { cx: 290.7460972592712, cy: 489.4428487760356 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: {
            equal: { cx: 290.4898481932375, cy: 526.7270878839449 },
            just: { cx: 290.4797192885151, cy: 528.2008435210523 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: {
            equal: { cx: 290.2378523774372, cy: 563.3924790828901 },
            just: { cx: 290.2282919644541, cy: 564.7835191719256 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.5,
          coordinates: {
            equal: { cx: 290, cy: 598 },
            just: { cx: 289.99097617176665, cy: 599.3129670079511 }
          },
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
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: {
            equal: { cx: 289.7754972507268, cy: 630.6651500192544 },
            just: { cx: 289.76697989105526, cy: 631.9044258514579 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: {
            equal: { cx: 289.56359487256134, cy: 661.4969460423226 },
            just: { cx: 289.55555555555554, cy: 662.6666666666667 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: {
            equal: { cx: 289.36358566101484, cy: 690.5982863223383 },
            just: { cx: 289.3559975562016, cy: 691.7023555726707 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: {
            equal: { cx: 289.1748021039364, cy: 718.066293877254 },
            just: { cx: 289.1676398867212, cy: 719.1083964820646 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: {
            equal: { cx: 288.99661415375334, cy: 743.9926406288856 },
            just: { cx: 288.9898539209021, cy: 744.976254508745 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: {
            equal: { cx: 288.8284271247462, cy: 768.4638533494294 },
            just: { cx: 288.82204631461013, cy: 769.3922612242258 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: {
            equal: { cx: 288.6696797083401, cy: 791.56160243652 },
            just: { cx: 288.66365702555856, cy: 792.4379027812316 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: {
            equal: { cx: 288.51984209978974, cy: 813.3629744805918 },
            just: { cx: 288.5141574442188, cy: 814.1900918661594 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: {
            equal: { cx: 288.37841423000543, cy: 833.9407295342082 },
            just: { cx: 288.3730486296356, cy: 834.7214243880178 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: {
            equal: { cx: 288.2449240966188, cy: 853.3635439419725 },
            just: { cx: 288.23985964425754, cy: 854.1004217605262 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: {
            equal: { cx: 288.1189261887186, cy: 871.696239541445 },
            just: { cx: 288.11414598222706, cy: 872.3917595859627 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.75,
          coordinates: {
            equal: { cx: 288, cy: 889 },
            just: { cx: 287.9954880858833, cy: 889.6564835039756 }
          },
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
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: {
            equal: { cx: 287.8877486253634, cy: 905.3325750096271 },
            just: { cx: 287.88348994552763, cy: 905.952212925729 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: {
            equal: { cx: 287.78179743628067, cy: 920.7484730211613 },
            just: { cx: 287.77777777777777, cy: 921.3333333333334 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: {
            equal: { cx: 287.68179283050745, cy: 935.2991431611691 },
            just: { cx: 287.6779987781008, cy: 935.8511777863354 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: {
            equal: { cx: 287.5874010519682, cy: 949.0331469386269 },
            just: { cx: 287.5838199433606, cy: 949.5541982410323 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: {
            equal: { cx: 287.4983070768767, cy: 961.9963203144429 },
            just: { cx: 287.49492696045104, cy: 962.4881272543726 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: {
            equal: { cx: 287.4142135623731, cy: 974.2319266747147 },
            just: { cx: 287.41102315730507, cy: 974.6961306121129 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: {
            equal: { cx: 287.33483985417, cy: 985.7808012182601 },
            just: { cx: 287.3318285127793, cy: 986.2189513906159 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: {
            equal: { cx: 287.2599210498949, cy: 996.681487240296 },
            just: { cx: 287.25707872210944, cy: 997.0950459330796 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: {
            equal: { cx: 287.1892071150027, cy: 1006.9703647671041 },
            just: { cx: 287.1865243148178, cy: 1007.360712194009 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: {
            equal: { cx: 287.1224620483094, cy: 1016.6817719709862 },
            just: { cx: 287.11992982212877, cy: 1017.050210880263 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: {
            equal: { cx: 287.0594630943593, cy: 1025.8481197707224 },
            just: { cx: 287.05707299111356, cy: 1026.1958797929815 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.875,
          coordinates: {
            equal: { cx: 287, cy: 1034.5 },
            just: { cx: 286.9977440429417, cy: 1034.8282417519877 }
          },
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
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: {
            equal: { cx: 306.44900549854646, cy: 81.33030003850874 },
            just: { cx: 306.45752766734347, cy: 82.57027559847819 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: {
            equal: { cx: 306.87281025487727, cy: 142.9938920846451 },
            just: { cx: 306.88085411109313, cy: 144.16427316405336 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: {
            equal: { cx: 307.27282867797027, cy: 201.1965726446763 },
            just: { cx: 307.28042106722734, cy: 202.30126528157845 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: {
            equal: { cx: 307.6503957921272, cy: 256.1325877545079 },
            just: { cx: 307.6575620533188, cy: 257.17527875788835 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: {
            equal: { cx: 308.00677169249326, cy: 307.98528125777136 },
            just: { cx: 308.01353574235003, cy: 308.96945051192654 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: {
            equal: { cx: 308.34314575050763, cy: 356.92770669885863 },
            just: { cx: 308.3495301634171, cy: 357.85663877718684 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: {
            equal: { cx: 308.6606405833199, cy: 403.12320487304 },
            just: { cx: 308.6666666666667, cy: 404 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: {
            equal: { cx: 308.9603158004205, cy: 446.7259489611838 },
            just: { cx: 308.96600366569766, cy: 447.5535333590058 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: {
            equal: { cx: 309.24317153998913, cy: 487.88145906841635 },
            just: { cx: 309.2485401699182, cy: 488.6625947230967 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: {
            equal: { cx: 309.5101518067625, cy: 526.7270878839449 },
            just: { cx: 309.5152191186469, cy: 527.4643817631174 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: {
            equal: { cx: 309.7621476225628, cy: 563.3924790828901 },
            just: { cx: 309.7669305280848, cy: 564.0883918363386 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.5,
          coordinates: {
            equal: { cx: 310, cy: 598 },
            just: { cx: 310.0045144616622, cy: 598.6568541718476 }
          },
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
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: {
            equal: { cx: 310.2245027492732, cy: 630.6651500192544 },
            just: { cx: 310.22876383367174, cy: 631.2851377992391 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: {
            equal: { cx: 310.43640512743866, cy: 661.4969460423226 },
            just: { cx: 310.4404270555466, cy: 662.0821365820268 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: {
            equal: { cx: 310.63641433898516, cy: 690.5982863223383 },
            just: { cx: 310.6402105336137, cy: 691.1506326407892 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: {
            equal: { cx: 310.8251978960636, cy: 718.066293877254 },
            just: { cx: 310.8287810266594, cy: 718.5876393789442 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: {
            equal: { cx: 311.00338584624666, cy: 743.9926406288856 },
            just: { cx: 311.006767871175, cy: 744.4847252559632 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: {
            equal: { cx: 311.1715728752538, cy: 768.4638533494294 },
            just: { cx: 311.17476508170853, cy: 768.9283193885935 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: {
            equal: { cx: 311.3303202916599, cy: 791.56160243652 },
            just: { cx: 311.3333333333333, cy: 792 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: {
            equal: { cx: 311.48015790021026, cy: 813.3629744805918 },
            just: { cx: 311.4830018328488, cy: 813.7767666795028 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: {
            equal: { cx: 311.62158576999457, cy: 833.9407295342082 },
            just: { cx: 311.6242700849591, cy: 834.3312973615484 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: {
            equal: { cx: 311.7550759033812, cy: 853.3635439419725 },
            just: { cx: 311.75760955932344, cy: 853.7321908815587 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: {
            equal: { cx: 311.8810738112814, cy: 871.696239541445 },
            just: { cx: 311.8834652640424, cy: 872.0441959181693 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.75,
          coordinates: {
            equal: { cx: 312, cy: 889 },
            just: { cx: 312.0022572308311, cy: 889.3284270859237 }
          },
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
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: {
            equal: { cx: 312.1122513746366, cy: 905.3325750096271 },
            just: { cx: 312.1143819168359, cy: 905.6425688996195 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: {
            equal: { cx: 312.21820256371933, cy: 920.7484730211613 },
            just: { cx: 312.2202135277733, cy: 921.0410682910133 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: {
            equal: { cx: 312.31820716949255, cy: 935.2991431611691 },
            just: { cx: 312.3201052668068, cy: 935.5753163203947 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: {
            equal: { cx: 312.4125989480318, cy: 949.0331469386269 },
            just: { cx: 312.4143905133297, cy: 949.2938196894721 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: {
            equal: { cx: 312.5016929231233, cy: 961.9963203144429 },
            just: { cx: 312.5033839355875, cy: 962.2423626279817 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: {
            equal: { cx: 312.5857864376269, cy: 974.2319266747147 },
            just: { cx: 312.58738254085426, cy: 974.4641596942968 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: {
            equal: { cx: 312.66516014583, cy: 985.7808012182601 },
            just: { cx: 312.6666666666667, cy: 986 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: {
            equal: { cx: 312.7400789501051, cy: 996.681487240296 },
            just: { cx: 312.7415009164244, cy: 996.8883833397515 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: {
            equal: { cx: 312.8107928849973, cy: 1006.9703647671041 },
            just: { cx: 312.81213504247955, cy: 1007.1656486807742 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: {
            equal: { cx: 312.8775379516906, cy: 1016.6817719709862 },
            just: { cx: 312.8788047796617, cy: 1016.8660954407793 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: {
            equal: { cx: 312.9405369056407, cy: 1025.8481197707224 },
            just: { cx: 312.94173263202117, cy: 1026.0220979590845 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.875,
          coordinates: {
            equal: { cx: 313, cy: 1034.5 },
            just: { cx: 313.00112861541555, cy: 1034.664213542962 }
          },
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
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: {
            equal: { cx: 319.34701649563937, cy: 81.33030003850874 },
            just: { cx: 319.34701649563937, cy: 81.33030003850874 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: {
            equal: { cx: 320.61843076463185, cy: 142.9938920846451 },
            just: { cx: 320.61843076463185, cy: 142.9938920846451 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: {
            equal: { cx: 321.81848603391086, cy: 201.1965726446763 },
            just: { cx: 321.81848603391086, cy: 201.1965726446763 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: {
            equal: { cx: 322.9511873763816, cy: 256.1325877545079 },
            just: { cx: 322.9511873763816, cy: 256.1325877545079 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: {
            equal: { cx: 324.02031507747984, cy: 307.98528125777136 },
            just: { cx: 324.02031507747984, cy: 307.98528125777136 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: {
            equal: { cx: 325.02943725152284, cy: 356.92770669885863 },
            just: { cx: 325.02943725152284, cy: 356.92770669885863 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: {
            equal: { cx: 325.9819217499596, cy: 403.12320487304 },
            just: { cx: 325.9819217499596, cy: 403.12320487304 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: {
            equal: { cx: 326.88094740126155, cy: 446.7259489611838 },
            just: { cx: 326.88094740126155, cy: 446.7259489611838 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: {
            equal: { cx: 327.72951461996735, cy: 487.88145906841635 },
            just: { cx: 327.72951461996735, cy: 487.88145906841635 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: {
            equal: { cx: 328.5304554202875, cy: 526.7270878839449 },
            just: { cx: 328.5304554202875, cy: 526.7270878839449 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: {
            equal: { cx: 329.28644286768844, cy: 563.3924790828901 },
            just: { cx: 329.28644286768844, cy: 563.3924790828901 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.5,
          coordinates: {
            equal: { cx: 330, cy: 598 },
            just: { cx: 330, cy: 598 }
          },
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
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: {
            equal: { cx: 330.67350824781965, cy: 630.6651500192544 },
            just: { cx: 330.67350824781965, cy: 630.6651500192544 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: {
            equal: { cx: 331.3092153823159, cy: 661.4969460423226 },
            just: { cx: 331.3092153823159, cy: 661.4969460423226 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: {
            equal: { cx: 331.90924301695543, cy: 690.5982863223383 },
            just: { cx: 331.90924301695543, cy: 690.5982863223383 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: {
            equal: { cx: 332.4755936881908, cy: 718.066293877254 },
            just: { cx: 332.4755936881908, cy: 718.066293877254 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: {
            equal: { cx: 333.0101575387399, cy: 743.9926406288856 },
            just: { cx: 333.0101575387399, cy: 743.9926406288856 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: {
            equal: { cx: 333.5147186257614, cy: 768.4638533494294 },
            just: { cx: 333.5147186257614, cy: 768.4638533494294 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: {
            equal: { cx: 333.9909608749798, cy: 791.56160243652 },
            just: { cx: 333.9909608749798, cy: 791.56160243652 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: {
            equal: { cx: 334.4404737006308, cy: 813.3629744805918 },
            just: { cx: 334.4404737006308, cy: 813.3629744805918 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: {
            equal: { cx: 334.8647573099837, cy: 833.9407295342082 },
            just: { cx: 334.8647573099837, cy: 833.9407295342082 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: {
            equal: { cx: 335.2652277101438, cy: 853.3635439419725 },
            just: { cx: 335.2652277101438, cy: 853.3635439419725 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: {
            equal: { cx: 335.64322143384425, cy: 871.696239541445 },
            just: { cx: 335.64322143384425, cy: 871.696239541445 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.75,
          coordinates: {
            equal: { cx: 336, cy: 889 },
            just: { cx: 336, cy: 889 }
          },
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
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: {
            equal: { cx: 336.3367541239098, cy: 905.3325750096271 },
            just: { cx: 336.3367541239098, cy: 905.3325750096271 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: {
            equal: { cx: 336.65460769115793, cy: 920.7484730211613 },
            just: { cx: 336.65460769115793, cy: 920.7484730211613 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: {
            equal: { cx: 336.9546215084777, cy: 935.2991431611691 },
            just: { cx: 336.9546215084777, cy: 935.2991431611691 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: {
            equal: { cx: 337.2377968440954, cy: 949.0331469386269 },
            just: { cx: 337.2377968440954, cy: 949.0331469386269 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: {
            equal: { cx: 337.50507876936996, cy: 961.9963203144429 },
            just: { cx: 337.50507876936996, cy: 961.9963203144429 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: {
            equal: { cx: 337.75735931288074, cy: 974.2319266747147 },
            just: { cx: 337.75735931288074, cy: 974.2319266747147 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: {
            equal: { cx: 337.9954804374899, cy: 985.7808012182601 },
            just: { cx: 337.9954804374899, cy: 985.7808012182601 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: {
            equal: { cx: 338.22023685031536, cy: 996.681487240296 },
            just: { cx: 338.22023685031536, cy: 996.681487240296 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: {
            equal: { cx: 338.43237865499185, cy: 1006.9703647671041 },
            just: { cx: 338.43237865499185, cy: 1006.9703647671041 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: {
            equal: { cx: 338.6326138550719, cy: 1016.6817719709862 },
            just: { cx: 338.6326138550719, cy: 1016.6817719709862 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: {
            equal: { cx: 338.8216107169221, cy: 1025.8481197707224 },
            just: { cx: 338.8216107169221, cy: 1025.8481197707224 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.875,
          coordinates: {
            equal: { cx: 339, cy: 1034.5 },
            just: { cx: 339, cy: 1034.5 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: {
            equal: { cx: 280.3162293804508, cy: 81.33030003850874 },
            just: { cx: 280.34822362263463, cy: 80.0889234417758 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: {
            equal: { cx: 278.72696154421016, cy: 142.9938920846451 },
            just: { cx: 278.7571600875612, cy: 141.82218860262466 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: {
            equal: { cx: 277.2268924576114, cy: 201.1965726446763 },
            just: { cx: 277.2553960869609, cy: 200.09063182591754 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: {
            equal: { cx: 275.811015779523, cy: 256.1325877545079 },
            just: { cx: 275.83791962308413, cy: 255.08871862433526 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: {
            equal: { cx: 274.4746061531502, cy: 307.98528125777136 },
            just: { cx: 274.5, cy: 307.00000000000006 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: {
            equal: { cx: 273.2132034355964, cy: 356.92770669885863 },
            just: { cx: 273.2371720353381, cy: 355.99772502888163 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: {
            equal: { cx: 272.02259781255054, cy: 403.12320487304 },
            just: { cx: 272.04522115815763, cy: 402.24541906348384 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: {
            equal: { cx: 270.8988157484231, cy: 446.7259489611838 },
            just: { cx: 270.92016934320856, cy: 445.89742948350727 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: {
            equal: { cx: 269.8381067250408, cy: 487.88145906841635 },
            just: { cx: 269.85826183464224, cy: 487.09944081588105 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: {
            equal: { cx: 268.8369307246406, cy: 526.7270878839449 },
            just: { cx: 268.85595461486264, cy: 525.9889609433286 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: {
            equal: { cx: 267.89194641538944, cy: 563.3924790828901 },
            just: { cx: 267.90990257669733, cy: 562.695780024144 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.5,
          coordinates: {
            equal: { cx: 267, cy: 598 },
            just: { cx: 267.0169483594129, cy: 597.34240365478 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: {
            equal: { cx: 266.1581146902254, cy: 630.6651500192544 },
            just: { cx: 266.17411181131735, cy: 630.0444617208879 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: {
            equal: { cx: 265.3634807721051, cy: 661.4969460423226 },
            just: { cx: 265.37858004378063, cy: 660.9110943013123 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: {
            equal: { cx: 264.61344622880574, cy: 690.5982863223383 },
            just: { cx: 264.62769804348045, cy: 690.0453159129588 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: {
            equal: { cx: 263.9055078897615, cy: 718.066293877254 },
            just: { cx: 263.9189598115421, cy: 717.5443593121678 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: {
            equal: { cx: 263.23730307657513, cy: 743.9926406288856 },
            just: { cx: 263.25, cy: 743.5 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: {
            equal: { cx: 262.6066017177982, cy: 768.4638533494294 },
            just: { cx: 262.61858601766903, cy: 767.9988625144408 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: {
            equal: { cx: 262.0112989062753, cy: 791.56160243652 },
            just: { cx: 262.0226105790788, cy: 791.122709531742 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: {
            equal: { cx: 261.44940787421154, cy: 813.3629744805918 },
            just: { cx: 261.4600846716043, cy: 812.9487147417536 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: {
            equal: { cx: 260.9190533625204, cy: 833.9407295342082 },
            just: { cx: 260.9291309173211, cy: 833.5497204079405 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: {
            equal: { cx: 260.4184653623203, cy: 853.3635439419725 },
            just: { cx: 260.4279773074313, cy: 852.9944804716642 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: {
            equal: { cx: 259.9459732076947, cy: 871.696239541445 },
            just: { cx: 259.95495128834864, cy: 871.347890012072 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.75,
          coordinates: {
            equal: { cx: 259.5, cy: 889 },
            just: { cx: 259.50847417970647, cy: 888.6712018273901 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: {
            equal: { cx: 259.0790573451127, cy: 905.3325750096271 },
            just: { cx: 259.08705590565864, cy: 905.022230860444 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: {
            equal: { cx: 258.6817403860525, cy: 920.7484730211613 },
            just: { cx: 258.6892900218903, cy: 920.4555471506562 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: {
            equal: { cx: 258.30672311440287, cy: 935.2991431611691 },
            just: { cx: 258.3138490217402, cy: 935.0226579564795 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: {
            equal: { cx: 257.9527539448807, cy: 949.0331469386269 },
            just: { cx: 257.95947990577105, cy: 948.7721796560838 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: {
            equal: { cx: 257.61865153828757, cy: 961.9963203144429 },
            just: { cx: 257.625, cy: 961.75 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: {
            equal: { cx: 257.3033008588991, cy: 974.2319266747147 },
            just: { cx: 257.3092930088345, cy: 973.9994312572205 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: {
            equal: { cx: 257.0056494531376, cy: 985.7808012182601 },
            just: { cx: 257.0113052895394, cy: 985.561354765871 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: {
            equal: { cx: 256.7247039371058, cy: 996.681487240296 },
            just: { cx: 256.7300423358021, cy: 996.4743573708768 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: {
            equal: { cx: 256.45952668126023, cy: 1006.9703647671041 },
            just: { cx: 256.46456545866056, cy: 1006.7748602039703 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: {
            equal: { cx: 256.20923268116013, cy: 1016.6817719709862 },
            just: { cx: 256.21398865371566, cy: 1016.4972402358321 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: {
            equal: { cx: 255.97298660384735, cy: 1025.8481197707224 },
            just: { cx: 255.97747564417432, cy: 1025.6739450060359 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.875,
          coordinates: {
            equal: { cx: 255.75, cy: 1034.5 },
            just: { cx: 255.75423708985323, cy: 1034.335600913695 }
          },
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
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: {
            equal: { cx: 293.4387431268169, cy: 81.33030003850874 },
            just: { cx: 293.4387431268169, cy: 81.33030003850874 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: {
            equal: { cx: 292.9089871814034, cy: 142.9938920846451 },
            just: { cx: 292.9089871814034, cy: 142.9938920846451 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: {
            equal: { cx: 292.4089641525371, cy: 201.1965726446763 },
            just: { cx: 292.4089641525371, cy: 201.1965726446763 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: {
            equal: { cx: 291.937005259841, cy: 256.1325877545079 },
            just: { cx: 291.937005259841, cy: 256.1325877545079 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: {
            equal: { cx: 291.4915353843834, cy: 307.98528125777136 },
            just: { cx: 291.4915353843834, cy: 307.98528125777136 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: {
            equal: { cx: 291.0710678118655, cy: 356.92770669885863 },
            just: { cx: 291.0710678118655, cy: 356.92770669885863 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: {
            equal: { cx: 290.6741992708502, cy: 403.12320487304 },
            just: { cx: 290.6741992708502, cy: 403.12320487304 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: {
            equal: { cx: 290.2996052494744, cy: 446.7259489611838 },
            just: { cx: 290.2996052494744, cy: 446.7259489611838 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: {
            equal: { cx: 289.9460355750136, cy: 487.88145906841635 },
            just: { cx: 289.9460355750136, cy: 487.88145906841635 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: {
            equal: { cx: 289.6123102415469, cy: 526.7270878839449 },
            just: { cx: 289.6123102415469, cy: 526.7270878839449 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: {
            equal: { cx: 289.2973154717965, cy: 563.3924790828901 },
            just: { cx: 289.2973154717965, cy: 563.3924790828901 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.5,
          coordinates: {
            equal: { cx: 289, cy: 598 },
            just: { cx: 289, cy: 598 }
          },
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
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: {
            equal: { cx: 288.71937156340846, cy: 630.6651500192544 },
            just: { cx: 288.71937156340846, cy: 630.6651500192544 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: {
            equal: { cx: 288.4544935907017, cy: 661.4969460423226 },
            just: { cx: 288.4544935907017, cy: 661.4969460423226 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: {
            equal: { cx: 288.20448207626856, cy: 690.5982863223383 },
            just: { cx: 288.20448207626856, cy: 690.5982863223383 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: {
            equal: { cx: 287.9685026299205, cy: 718.066293877254 },
            just: { cx: 287.9685026299205, cy: 718.066293877254 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: {
            equal: { cx: 287.7457676921917, cy: 743.9926406288856 },
            just: { cx: 287.7457676921917, cy: 743.9926406288856 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: {
            equal: { cx: 287.53553390593277, cy: 768.4638533494294 },
            just: { cx: 287.53553390593277, cy: 768.4638533494294 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: {
            equal: { cx: 287.3370996354251, cy: 791.56160243652 },
            just: { cx: 287.3370996354251, cy: 791.56160243652 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: {
            equal: { cx: 287.14980262473716, cy: 813.3629744805918 },
            just: { cx: 287.14980262473716, cy: 813.3629744805918 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: {
            equal: { cx: 286.9730177875068, cy: 833.9407295342082 },
            just: { cx: 286.9730177875068, cy: 833.9407295342082 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: {
            equal: { cx: 286.80615512077344, cy: 853.3635439419725 },
            just: { cx: 286.80615512077344, cy: 853.3635439419725 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: {
            equal: { cx: 286.6486577358982, cy: 871.696239541445 },
            just: { cx: 286.6486577358982, cy: 871.696239541445 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.75,
          coordinates: {
            equal: { cx: 286.5, cy: 889 },
            just: { cx: 286.5, cy: 889 }
          },
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
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: {
            equal: { cx: 286.35968578170423, cy: 905.3325750096271 },
            just: { cx: 286.35968578170423, cy: 905.3325750096271 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: {
            equal: { cx: 286.2272467953508, cy: 920.7484730211613 },
            just: { cx: 286.2272467953508, cy: 920.7484730211613 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: {
            equal: { cx: 286.1022410381343, cy: 935.2991431611691 },
            just: { cx: 286.1022410381343, cy: 935.2991431611691 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: {
            equal: { cx: 285.98425131496026, cy: 949.0331469386269 },
            just: { cx: 285.98425131496026, cy: 949.0331469386269 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: {
            equal: { cx: 285.8728838460959, cy: 961.9963203144429 },
            just: { cx: 285.8728838460959, cy: 961.9963203144429 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: {
            equal: { cx: 285.7677669529664, cy: 974.2319266747147 },
            just: { cx: 285.7677669529664, cy: 974.2319266747147 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: {
            equal: { cx: 285.6685498177125, cy: 985.7808012182601 },
            just: { cx: 285.6685498177125, cy: 985.7808012182601 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: {
            equal: { cx: 285.5749013123686, cy: 996.681487240296 },
            just: { cx: 285.5749013123686, cy: 996.681487240296 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: {
            equal: { cx: 285.4865088937534, cy: 1006.9703647671041 },
            just: { cx: 285.4865088937534, cy: 1006.9703647671041 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: {
            equal: { cx: 285.4030775603867, cy: 1016.6817719709862 },
            just: { cx: 285.4030775603867, cy: 1016.6817719709862 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: {
            equal: { cx: 285.32432886794913, cy: 1025.8481197707224 },
            just: { cx: 285.32432886794913, cy: 1025.8481197707224 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.875,
          coordinates: {
            equal: { cx: 285.25, cy: 1034.5 },
            just: { cx: 285.25, cy: 1034.5 }
          },
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
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: {
            equal: { cx: 306.5612568731831, cy: 81.33030003850874 },
            just: { cx: 306.57190958417937, cy: 82.57027559847819 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: {
            equal: { cx: 307.0910128185966, cy: 142.9938920846451 },
            just: { cx: 307.1010676388664, cy: 144.16427316405336 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: {
            equal: { cx: 307.5910358474629, cy: 201.1965726446763 },
            just: { cx: 307.60052633403416, cy: 202.30126528157845 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: {
            equal: { cx: 308.062994740159, cy: 256.1325877545079 },
            just: { cx: 308.0719525666485, cy: 257.17527875788835 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: {
            equal: { cx: 308.5084646156166, cy: 307.98528125777136 },
            just: { cx: 308.5169196779375, cy: 308.96945051192654 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: {
            equal: { cx: 308.9289321881345, cy: 356.92770669885863 },
            just: { cx: 308.9369127042714, cy: 357.85663877718684 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: {
            equal: { cx: 309.3258007291498, cy: 403.12320487304 },
            just: { cx: 309.3333333333333, cy: 404 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: {
            equal: { cx: 309.7003947505256, cy: 446.7259489611838 },
            just: { cx: 309.70750458212206, cy: 447.5535333590058 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: {
            equal: { cx: 310.0539644249864, cy: 487.88145906841635 },
            just: { cx: 310.0606752123977, cy: 488.6625947230967 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: {
            equal: { cx: 310.3876897584531, cy: 526.7270878839449 },
            just: { cx: 310.39402389830855, cy: 527.4643817631174 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: {
            equal: { cx: 310.7026845282035, cy: 563.3924790828901 },
            just: { cx: 310.708663160106, cy: 564.0883918363386 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.5,
          coordinates: {
            equal: { cx: 311, cy: 598 },
            just: { cx: 311.0056430770777, cy: 598.6568541718476 }
          },
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
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: {
            equal: { cx: 311.28062843659154, cy: 630.6651500192544 },
            just: { cx: 311.2859547920897, cy: 631.2851377992391 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: {
            equal: { cx: 311.5455064092983, cy: 661.4969460423226 },
            just: { cx: 311.5505338194332, cy: 662.0821365820268 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: {
            equal: { cx: 311.79551792373144, cy: 690.5982863223383 },
            just: { cx: 311.8002631670171, cy: 691.1506326407892 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: {
            equal: { cx: 312.0314973700795, cy: 718.066293877254 },
            just: { cx: 312.03597628332426, cy: 718.5876393789442 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: {
            equal: { cx: 312.2542323078083, cy: 743.9926406288856 },
            just: { cx: 312.25845983896875, cy: 744.4847252559632 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: {
            equal: { cx: 312.46446609406723, cy: 768.4638533494294 },
            just: { cx: 312.46845635213566, cy: 768.9283193885935 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: {
            equal: { cx: 312.6629003645749, cy: 791.56160243652 },
            just: { cx: 312.6666666666667, cy: 792 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: {
            equal: { cx: 312.85019737526284, cy: 813.3629744805918 },
            just: { cx: 312.853752291061, cy: 813.7767666795028 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: {
            equal: { cx: 313.0269822124932, cy: 833.9407295342082 },
            just: { cx: 313.0303376061989, cy: 834.3312973615484 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: {
            equal: { cx: 313.19384487922656, cy: 853.3635439419725 },
            just: { cx: 313.1970119491543, cy: 853.7321908815587 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: {
            equal: { cx: 313.3513422641018, cy: 871.696239541445 },
            just: { cx: 313.354331580053, cy: 872.0441959181693 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.75,
          coordinates: {
            equal: { cx: 313.5, cy: 889 },
            just: { cx: 313.50282153853885, cy: 889.3284270859237 }
          },
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
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: {
            equal: { cx: 313.64031421829577, cy: 905.3325750096271 },
            just: { cx: 313.64297739604484, cy: 905.6425688996195 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: {
            equal: { cx: 313.7727532046492, cy: 920.7484730211613 },
            just: { cx: 313.7752669097166, cy: 921.0410682910133 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: {
            equal: { cx: 313.8977589618657, cy: 935.2991431611691 },
            just: { cx: 313.90013158350854, cy: 935.5753163203947 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: {
            equal: { cx: 314.01574868503974, cy: 949.0331469386269 },
            just: { cx: 314.01798814166216, cy: 949.2938196894721 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: {
            equal: { cx: 314.1271161539041, cy: 961.9963203144429 },
            just: { cx: 314.1292299194844, cy: 962.2423626279817 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            piano: white
          }
        },
        {
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: {
            equal: { cx: 314.2322330470336, cy: 974.2319266747147 },
            just: { cx: 314.23422817606786, cy: 974.4641596942968 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: {
            equal: { cx: 314.3314501822875, cy: 985.7808012182601 },
            just: { cx: 314.3333333333333, cy: 986 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: {
            equal: { cx: 314.4250986876314, cy: 996.681487240296 },
            just: { cx: 314.4268761455305, cy: 996.8883833397515 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: {
            equal: { cx: 314.5134911062466, cy: 1006.9703647671041 },
            just: { cx: 314.5151688030994, cy: 1007.1656486807742 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: {
            equal: { cx: 314.5969224396133, cy: 1016.6817719709862 },
            just: { cx: 314.59850597457717, cy: 1016.8660954407793 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: {
            equal: { cx: 314.67567113205087, cy: 1025.8481197707224 },
            just: { cx: 314.6771657900265, cy: 1026.0220979590845 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.875,
          coordinates: {
            equal: { cx: 314.75, cy: 1034.5 },
            just: { cx: 314.75141076926946, cy: 1034.664213542962 }
          },
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
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.05612568731830647,
          coordinates: {
            equal: { cx: 319.6837706195492, cy: 81.33030003850874 },
            just: { cx: 319.74765081708546, cy: 83.80885170291582 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.10910128185966073,
          coordinates: {
            equal: { cx: 321.27303845578984, cy: 142.9938920846451 },
            just: { cx: 321.3333333333333, cy: 145.3333333333334 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 3,
          ratio: 0.1591035847462855,
          coordinates: {
            equal: { cx: 322.7731075423886, cy: 201.1965726446763 },
            just: { cx: 322.83001832848817, cy: 203.4047111453412 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 4,
          ratio: 0.2062994740159002,
          coordinates: {
            equal: { cx: 324.188984220477, cy: 256.1325877545079 },
            just: { cx: 324.24270084959096, cy: 258.2167929641289 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.25084646156165924,
          coordinates: {
            equal: { cx: 325.5253938468498, cy: 307.98528125777136 },
            just: { cx: 325.5760955932343, cy: 309.95250901749 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.2928932188134524,
          coordinates: {
            equal: { cx: 326.7867965644036, cy: 356.92770669885863 },
            just: { cx: 326.834652640424, cy: 358.78452244845147 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.3325800729149828,
          coordinates: {
            equal: { cx: 327.97740218744946, cy: 403.12320487304 },
            just: { cx: 328.02257230831094, cy: 404.8758055624635 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.3700394750525634,
          coordinates: {
            equal: { cx: 329.1011842515769, cy: 446.7259489611838 },
            just: { cx: 329.14381916835873, cy: 448.3801837323188 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.4053964424986395,
          coordinates: {
            equal: { cx: 330.1618932749592, cy: 487.88145906841635 },
            just: { cx: 330.20213527773285, cy: 489.4428487760356 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.4387689758453135,
          coordinates: {
            equal: { cx: 331.1630692753594, cy: 526.7270878839449 },
            just: { cx: 331.20105266806837, cy: 528.2008435210523 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.47026845282035235,
          coordinates: {
            equal: { cx: 332.10805358461056, cy: 563.3924790828901 },
            just: { cx: 332.14390513329704, cy: 564.7835191719256 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.5,
          coordinates: {
            equal: { cx: 333, cy: 598 },
            just: { cx: 333.03383935587505, cy: 599.3129670079511 }
          },
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
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.5280628436591532,
          coordinates: {
            equal: { cx: 333.8418853097746, cy: 630.6651500192544 },
            just: { cx: 333.87382540854276, cy: 631.9044258514579 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.5545506409298304,
          coordinates: {
            equal: { cx: 334.6365192278949, cy: 661.4969460423226 },
            just: { cx: 334.6666666666667, cy: 662.6666666666667 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 3,
          ratio: 0.5795517923731428,
          coordinates: {
            equal: { cx: 335.38655377119426, cy: 690.5982863223383 },
            just: { cx: 335.4150091642441, cy: 691.7023555726707 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 4,
          ratio: 0.6031497370079502,
          coordinates: {
            equal: { cx: 336.0944921102385, cy: 718.066293877254 },
            just: { cx: 336.1213504247955, cy: 719.1083964820646 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.6254232307808296,
          coordinates: {
            equal: { cx: 336.76269692342487, cy: 743.9926406288856 },
            just: { cx: 336.78804779661715, cy: 744.976254508745 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.6464466094067263,
          coordinates: {
            equal: { cx: 337.3933982822018, cy: 768.4638533494294 },
            just: { cx: 337.417326320212, cy: 769.3922612242258 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.6662900364574914,
          coordinates: {
            equal: { cx: 337.9887010937247, cy: 791.56160243652 },
            just: { cx: 338.01128615415547, cy: 792.4379027812316 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.6850197375262816,
          coordinates: {
            equal: { cx: 338.55059212578846, cy: 813.3629744805918 },
            just: { cx: 338.57190958417937, cy: 814.1900918661594 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.7026982212493198,
          coordinates: {
            equal: { cx: 339.0809466374796, cy: 833.9407295342082 },
            just: { cx: 339.1010676388664, cy: 834.7214243880178 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.7193844879226567,
          coordinates: {
            equal: { cx: 339.5815346376797, cy: 853.3635439419725 },
            just: { cx: 339.60052633403416, cy: 854.1004217605262 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.7351342264101761,
          coordinates: {
            equal: { cx: 340.0540267923053, cy: 871.696239541445 },
            just: { cx: 340.0719525666485, cy: 872.3917595859627 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.75,
          coordinates: {
            equal: { cx: 340.5, cy: 889 },
            just: { cx: 340.5169196779375, cy: 889.6564835039756 }
          },
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
          name: { English: "G#", German: "Gis" },
          name2: { English: "A♭", German: "As" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 1,
          ratio: 0.7640314218295766,
          coordinates: {
            equal: { cx: 340.9209426548873, cy: 905.3325750096271 },
            just: { cx: 340.9369127042714, cy: 905.952212925729 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 2,
          ratio: 0.7772753204649152,
          coordinates: {
            equal: { cx: 341.3182596139475, cy: 920.7484730211613 },
            just: { cx: 341.3333333333333, cy: 921.3333333333334 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            piano: white
          }
        },
        {
          name: { English: "A#", German: "Ais" },
          name2: { English: "B♭", German: "B" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 3,
          ratio: 0.7897758961865714,
          coordinates: {
            equal: { cx: 341.69327688559713, cy: 935.2991431611691 },
            just: { cx: 341.70750458212206, cy: 935.8511777863354 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 4,
          ratio: 0.8015748685039751,
          coordinates: {
            equal: { cx: 342.0472460551193, cy: 949.0331469386269 },
            just: { cx: 342.06067521239777, cy: 949.5541982410323 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 5,
          ratio: 0.8127116153904148,
          coordinates: {
            equal: { cx: 342.38134846171243, cy: 961.9963203144429 },
            just: { cx: 342.39402389830855, cy: 962.4881272543726 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            piano: white
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          name2: { English: "D♭", German: "Des" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 6,
          ratio: 0.8232233047033631,
          coordinates: {
            equal: { cx: 342.6966991411009, cy: 974.2319266747147 },
            just: { cx: 342.708663160106, cy: 974.6961306121129 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 7,
          ratio: 0.8331450182287458,
          coordinates: {
            equal: { cx: 342.9943505468624, cy: 985.7808012182601 },
            just: { cx: 343.0056430770777, cy: 986.2189513906159 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            piano: white
          }
        },
        {
          name: { English: "D#", German: "Dis" },
          name2: { English: "E♭", German: "Es" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 8,
          ratio: 0.8425098687631408,
          coordinates: {
            equal: { cx: 343.2752960628942, cy: 996.681487240296 },
            just: { cx: 343.2859547920897, cy: 997.0950459330796 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 9,
          ratio: 0.8513491106246599,
          coordinates: {
            equal: { cx: 343.54047331873977, cy: 1006.9703647671041 },
            just: { cx: 343.5505338194332, cy: 1007.360712194009 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 10,
          ratio: 0.8596922439613284,
          coordinates: {
            equal: { cx: 343.79076731883987, cy: 1016.6817719709862 },
            just: { cx: 343.8002631670171, cy: 1017.050210880263 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            piano: white
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          name2: { English: "G♭", German: "Ges" },
          fontSize: { name: 1.3, number: 1.8 },
          number: 11,
          ratio: 0.8675671132050881,
          coordinates: {
            equal: { cx: 344.02701339615265, cy: 1025.8481197707224 },
            just: { cx: 344.03597628332426, cy: 1026.1958797929815 }
          },
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
          fontSize: { name: 1.8, number: 1.8 },
          number: 12,
          ratio: 0.875,
          coordinates: {
            equal: { cx: 344.25, cy: 1034.5 },
            just: { cx: 344.25845983896875, cy: 1034.8282417519877 }
          },
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
