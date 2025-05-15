import { justPointsColors } from "./colors"
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
  upper1,
  middle,
  lower1,
  c,
  d,
  e,
  f,
  g,
  a,
  b,
  gSharp,
  aFlat,
  aSharp,
  bFlat,
  cSharp,
  dFlat,
  dSharp,
  eFlat,
  fSharp,
  gFlat
} = justPointsColors

export const justPoints = {
  Violin: [
    [
      [
        {
          name: { English: "G´", German: "G´" },
          number: 0,
          ratio: 1 / 81,
          coordinates: { cx: 269.6296296296296, cy: 30.37037037037037 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 1,
          ratio: 7 / 135,
          coordinates: { cx: 268.44444444444446, cy: 76.35555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 1,
          ratio: 1 / 16,
          coordinates: { cx: 268.125, cy: 88.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 2,
          ratio: 1 / 10,
          coordinates: { cx: 267, cy: 132.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          number: 2,
          ratio: 1 / 9,
          coordinates: { cx: 266.6666666666667, cy: 145.33333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "A#`", German: "Ais`" },
          number: 3,
          ratio: 191 / 1215,
          coordinates: { cx: 265.28395061728395, cy: 198.9827160493827 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: aSharp,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 3,
          ratio: 1 / 6,
          coordinates: { cx: 265, cy: 210 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 4,
          ratio: 1 / 5,
          coordinates: { cx: 264, cy: 248.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 4,
          ratio: 17 / 81,
          coordinates: { cx: 263.7037037037037, cy: 260.2962962962963 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 5,
          ratio: 1 / 4,
          coordinates: { cx: 262.5, cy: 307 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 5,
          ratio: 7 / 27,
          coordinates: { cx: 262.22222222222223, cy: 317.77777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 6,
          ratio: 13 / 45,
          coordinates: { cx: 261.3333333333333, cy: 352.26666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 6,
          ratio: 19 / 64,
          coordinates: { cx: 261.09375, cy: 361.5625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 7,
          ratio: 1 / 3,
          coordinates: { cx: 260, cy: 404 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D´", German: "D´" },
          number: 7,
          ratio: 83 / 243,
          coordinates: { cx: 259.75308641975306, cy: 413.58024691358025 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            row: upper1
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 8,
          ratio: 149 / 405,
          coordinates: { cx: 258.96296296296293, cy: 444.23703703703706 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 8,
          ratio: 3 / 8,
          coordinates: { cx: 258.75, cy: 452.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 9,
          ratio: 2 / 5,
          coordinates: { cx: 258, cy: 481.6 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 9,
          ratio: 11 / 27,
          coordinates: { cx: 257.77777777777777, cy: 490.2222222222222 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 10,
          ratio: 7 / 16,
          coordinates: { cx: 256.875, cy: 525.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 10,
          ratio: 4 / 9,
          coordinates: { cx: 256.6666666666667, cy: 533.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 11,
          ratio: 7 / 15,
          coordinates: { cx: 256, cy: 559.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "F#°", German: "Fis°" },
          number: 11,
          ratio: 115 / 243,
          coordinates: { cx: 255.80246913580248, cy: 566.8641975308642 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp,
            row: middle
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 255, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 12,
          ratio: 41 / 81,
          coordinates: { cx: 254.8148148148148, cy: 605.1851851851852 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: g,
            row: upper1
          }
        }
      ],
      [
        {
          name: { English: "G#`", German: "Gis`" },
          number: 1,
          ratio: 71 / 135,
          coordinates: { cx: 254.22222222222223, cy: 628.1777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 1,
          ratio: 17 / 32,
          coordinates: { cx: 254.0625, cy: 634.375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 2,
          ratio: 11 / 20,
          coordinates: { cx: 253.5, cy: 656.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          number: 2,
          ratio: 5 / 9,
          coordinates: { cx: 253.33333333333334, cy: 662.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "A#`", German: "Ais`" },
          number: 3,
          ratio: 703 / 1215,
          coordinates: { cx: 252.64197530864197, cy: 689.4913580246914 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: aSharp,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 3,
          ratio: 7 / 12,
          coordinates: { cx: 252.5, cy: 695 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 4,
          ratio: 3 / 5,
          coordinates: { cx: 252, cy: 714.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 4,
          ratio: 49 / 81,
          coordinates: { cx: 251.85185185185185, cy: 720.1481481481482 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 5,
          ratio: 5 / 8,
          coordinates: { cx: 251.25, cy: 743.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 5,
          ratio: 17 / 27,
          coordinates: { cx: 251.11111111111111, cy: 748.8888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 6,
          ratio: 29 / 45,
          coordinates: { cx: 250.66666666666666, cy: 766.1333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 6,
          ratio: 83 / 128,
          coordinates: { cx: 250.546875, cy: 770.78125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 7,
          ratio: 2 / 3,
          coordinates: { cx: 250, cy: 792 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D´", German: "D´" },
          number: 7,
          ratio: 163 / 243,
          coordinates: { cx: 249.87654320987653, cy: 796.7901234567902 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            row: upper1
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 8,
          ratio: 277 / 405,
          coordinates: { cx: 249.4814814814815, cy: 812.1185185185185 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 8,
          ratio: 11 / 16,
          coordinates: { cx: 249.375, cy: 816.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 9,
          ratio: 7 / 10,
          coordinates: { cx: 249, cy: 830.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 9,
          ratio: 19 / 27,
          coordinates: { cx: 248.88888888888889, cy: 835.1111111111111 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 10,
          ratio: 23 / 32,
          coordinates: { cx: 248.4375, cy: 852.625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 10,
          ratio: 13 / 18,
          coordinates: { cx: 248.33333333333334, cy: 856.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 11,
          ratio: 11 / 15,
          coordinates: { cx: 248, cy: 869.5999999999999 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "F#°", German: "Fis°" },
          number: 11,
          ratio: 179 / 243,
          coordinates: { cx: 247.90123456790124, cy: 873.4320987654321 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp,
            row: middle
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 247.5, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 12,
          ratio: 61 / 81,
          coordinates: { cx: 247.40740740740742, cy: 892.5925925925926 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: g,
            row: upper1
          }
        }
      ],
      [
        {
          name: { English: "G#`", German: "Gis`" },
          number: 1,
          ratio: 103 / 135,
          coordinates: { cx: 247.11111111111111, cy: 904.0888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 1,
          ratio: 49 / 64,
          coordinates: { cx: 247.03125, cy: 907.1875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 2,
          ratio: 31 / 40,
          coordinates: { cx: 246.75, cy: 918.1 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          number: 2,
          ratio: 7 / 9,
          coordinates: { cx: 246.66666666666666, cy: 921.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "A#`", German: "Ais`" },
          number: 3,
          ratio: 959 / 1215,
          coordinates: { cx: 246.320987654321, cy: 934.7456790123457 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: aSharp,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 3,
          ratio: 19 / 24,
          coordinates: { cx: 246.25, cy: 937.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 4,
          ratio: 4 / 5,
          coordinates: { cx: 246, cy: 947.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 4,
          ratio: 65 / 81,
          coordinates: { cx: 245.92592592592592, cy: 950.0740740740741 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 5,
          ratio: 13 / 16,
          coordinates: { cx: 245.625, cy: 961.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 5,
          ratio: 22 / 27,
          coordinates: { cx: 245.55555555555554, cy: 964.4444444444444 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 6,
          ratio: 37 / 45,
          coordinates: { cx: 245.33333333333334, cy: 973.0666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 6,
          ratio: 211 / 256,
          coordinates: { cx: 245.2734375, cy: 975.390625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 7,
          ratio: 5 / 6,
          coordinates: { cx: 245, cy: 986 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D´", German: "D´" },
          number: 7,
          ratio: 203 / 243,
          coordinates: { cx: 244.93827160493828, cy: 988.395061728395 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            row: upper1
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 8,
          ratio: 341 / 405,
          coordinates: { cx: 244.74074074074073, cy: 996.0592592592593 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 8,
          ratio: 27 / 32,
          coordinates: { cx: 244.6875, cy: 998.125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 9,
          ratio: 17 / 20,
          coordinates: { cx: 244.5, cy: 1005.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 9,
          ratio: 23 / 27,
          coordinates: { cx: 244.44444444444446, cy: 1007.5555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 10,
          ratio: 55 / 64,
          coordinates: { cx: 244.21875, cy: 1016.3125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 10,
          ratio: 31 / 36,
          coordinates: { cx: 244.16666666666666, cy: 1018.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 11,
          ratio: 13 / 15,
          coordinates: { cx: 244, cy: 1024.8000000000002 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "F#°", German: "Fis°" },
          number: 11,
          ratio: 211 / 243,
          coordinates: { cx: 243.9506172839506, cy: 1026.716049382716 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp,
            row: middle
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 12,
          ratio: 7 / 8,
          coordinates: { cx: 243.75, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 12,
          ratio: 71 / 81,
          coordinates: { cx: 243.7037037037037, cy: 1036.2962962962963 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: g,
            row: upper1
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "D´", German: "D´" },
          number: 0,
          ratio: 1 / 81,
          coordinates: { cx: 289.87654320987656, cy: 30.37037037037037 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: d,
            row: upper1
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 1,
          ratio: 7 / 135,
          coordinates: { cx: 289.48148148148147, cy: 76.35555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 1,
          ratio: 1 / 16,
          coordinates: { cx: 289.375, cy: 88.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 2,
          ratio: 1 / 10,
          coordinates: { cx: 289, cy: 132.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 2,
          ratio: 1 / 9,
          coordinates: { cx: 288.8888888888889, cy: 145.33333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 3,
          ratio: 5 / 32,
          coordinates: { cx: 288.42798353909467, cy: 197.875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 3,
          ratio: 1 / 6,
          coordinates: { cx: 288.3333333333333, cy: 210 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 4,
          ratio: 1 / 5,
          coordinates: { cx: 288, cy: 248.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "F#°", German: "Fis°" },
          number: 4,
          ratio: 17 / 81,
          coordinates: { cx: 287.9012345679012, cy: 260.2962962962963 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp,
            row: middle
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 5,
          ratio: 1 / 4,
          coordinates: { cx: 287.5, cy: 307 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 5,
          ratio: 7 / 27,
          coordinates: { cx: 287.4074074074074, cy: 317.77777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 6,
          ratio: 13 / 45,
          coordinates: { cx: 287.1111111111111, cy: 352.26666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 6,
          ratio: 19 / 64,
          coordinates: { cx: 287.03125, cy: 361.5625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 7,
          ratio: 13 / 40,
          coordinates: { cx: 286.6666666666667, cy: 394.3 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          ratio: 1 / 3,
          coordinates: { cx: 286.5843621399177, cy: 404 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "A#`", German: "Ais`" },
          number: 8,
          ratio: 149 / 405,
          coordinates: { cx: 286.320987654321, cy: 444.23703703703706 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: aSharp,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 8,
          ratio: 3 / 8,
          coordinates: { cx: 286.25, cy: 452.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 9,
          ratio: 2 / 5,
          coordinates: { cx: 286, cy: 481.6 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 9,
          ratio: 11 / 27,
          coordinates: { cx: 285.9259259259259, cy: 490.2222222222222 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 10,
          ratio: 7 / 16,
          coordinates: { cx: 285.625, cy: 525.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 10,
          ratio: 4 / 9,
          coordinates: { cx: 285.55555555555554, cy: 533.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 11,
          ratio: 7 / 15,
          coordinates: { cx: 285.3333333333333, cy: 559.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 11,
          ratio: 121 / 256,
          coordinates: { cx: 285.26748971193416, cy: 566.171875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 285, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D´", German: "D´" },
          number: 12,
          ratio: 41 / 81,
          coordinates: { cx: 284.9382716049383, cy: 605.1851851851852 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: d,
            row: upper1
          }
        }
      ],
      [
        {
          name: { English: "D#`", German: "Dis`" },
          number: 1,
          ratio: 71 / 135,
          coordinates: { cx: 284.74074074074076, cy: 628.1777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 1,
          ratio: 17 / 32,
          coordinates: { cx: 284.6875, cy: 634.375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 2,
          ratio: 11 / 20,
          coordinates: { cx: 284.5, cy: 656.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 2,
          ratio: 5 / 9,
          coordinates: { cx: 284.44444444444446, cy: 662.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 3,
          ratio: 37 / 64,
          coordinates: { cx: 284.2139917695473, cy: 688.9375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            row: lower1
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 3,
          ratio: 7 / 12,
          coordinates: { cx: 284.1666666666667, cy: 695 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 4,
          ratio: 3 / 5,
          coordinates: { cx: 284, cy: 714.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "F#°", German: "Fis°" },
          number: 4,
          ratio: 49 / 81,
          coordinates: { cx: 283.95061728395063, cy: 720.1481481481482 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp,
            row: middle
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 5,
          ratio: 5 / 8,
          coordinates: { cx: 283.75, cy: 743.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 5,
          ratio: 17 / 27,
          coordinates: { cx: 283.7037037037037, cy: 748.8888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 6,
          ratio: 29 / 45,
          coordinates: { cx: 283.55555555555554, cy: 766.1333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 6,
          ratio: 83 / 128,
          coordinates: { cx: 283.515625, cy: 770.78125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 7,
          ratio: 53 / 80,
          coordinates: { cx: 283.3333333333333, cy: 787.15 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          ratio: 2 / 3,
          coordinates: { cx: 283.2921810699589, cy: 792 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "A#`", German: "Ais`" },
          number: 8,
          ratio: 277 / 405,
          coordinates: { cx: 283.1604938271605, cy: 812.1185185185185 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: aSharp,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 8,
          ratio: 11 / 16,
          coordinates: { cx: 283.125, cy: 816.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 9,
          ratio: 7 / 10,
          coordinates: { cx: 283, cy: 830.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 9,
          ratio: 19 / 27,
          coordinates: { cx: 282.962962962963, cy: 835.1111111111111 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 10,
          ratio: 23 / 32,
          coordinates: { cx: 282.8125, cy: 852.625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 10,
          ratio: 13 / 18,
          coordinates: { cx: 282.77777777777777, cy: 856.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 11,
          ratio: 11 / 15,
          coordinates: { cx: 282.6666666666667, cy: 869.5999999999999 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 11,
          ratio: 377 / 512,
          coordinates: { cx: 282.63374485596705, cy: 873.0859375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 282.5, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D´", German: "D´" },
          number: 12,
          ratio: 61 / 81,
          coordinates: { cx: 282.4691358024691, cy: 892.5925925925926 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: d,
            row: upper1
          }
        }
      ],
      [
        {
          name: { English: "D#`", German: "Dis`" },
          number: 1,
          ratio: 103 / 135,
          coordinates: { cx: 282.3703703703704, cy: 904.0888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 1,
          ratio: 49 / 64,
          coordinates: { cx: 282.34375, cy: 907.1875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 2,
          ratio: 31 / 40,
          coordinates: { cx: 282.25, cy: 918.1 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 2,
          ratio: 7 / 9,
          coordinates: { cx: 282.22222222222223, cy: 921.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 3,
          ratio: 101 / 128,
          coordinates: { cx: 282.10699588477365, cy: 934.46875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            row: lower1
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 3,
          ratio: 19 / 24,
          coordinates: { cx: 282.0833333333333, cy: 937.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 4,
          ratio: 4 / 5,
          coordinates: { cx: 282, cy: 947.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "F#°", German: "Fis°" },
          number: 4,
          ratio: 65 / 81,
          coordinates: { cx: 281.9753086419753, cy: 950.0740740740741 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp,
            row: middle
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 5,
          ratio: 13 / 16,
          coordinates: { cx: 281.875, cy: 961.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 5,
          ratio: 22 / 27,
          coordinates: { cx: 281.85185185185185, cy: 964.4444444444444 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 6,
          ratio: 37 / 45,
          coordinates: { cx: 281.77777777777777, cy: 973.0666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 6,
          ratio: 211 / 256,
          coordinates: { cx: 281.7578125, cy: 975.390625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 7,
          ratio: 133 / 160,
          coordinates: { cx: 281.6666666666667, cy: 983.575 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          ratio: 5 / 6,
          coordinates: { cx: 281.6460905349794, cy: 986 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "A#`", German: "Ais`" },
          number: 8,
          ratio: 341 / 405,
          coordinates: { cx: 281.58024691358025, cy: 996.0592592592593 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: aSharp,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 8,
          ratio: 27 / 32,
          coordinates: { cx: 281.5625, cy: 998.125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 9,
          ratio: 17 / 20,
          coordinates: { cx: 281.5, cy: 1005.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 9,
          ratio: 23 / 27,
          coordinates: { cx: 281.48148148148147, cy: 1007.5555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 10,
          ratio: 55 / 64,
          coordinates: { cx: 281.40625, cy: 1016.3125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 10,
          ratio: 31 / 36,
          coordinates: { cx: 281.3888888888889, cy: 1018.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 11,
          ratio: 13 / 15,
          coordinates: { cx: 281.3333333333333, cy: 1024.8000000000002 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 11,
          ratio: 889 / 1024,
          coordinates: { cx: 281.3168724279835, cy: 1026.54296875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 12,
          ratio: 7 / 8,
          coordinates: { cx: 281.25, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D´", German: "D´" },
          number: 12,
          ratio: 71 / 81,
          coordinates: { cx: 281.2345679012346, cy: 1036.2962962962963 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: d,
            row: upper1
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "A#`", German: "Ais`" },
          number: 1,
          ratio: 7 / 135,
          coordinates: { cx: 310.51851851851853, cy: 76.35555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aSharp,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 1,
          ratio: 1 / 16,
          coordinates: { cx: 310.625, cy: 88.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 2,
          ratio: 1 / 10,
          coordinates: { cx: 311, cy: 132.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 2,
          ratio: 1 / 9,
          coordinates: { cx: 311.1111111111111, cy: 145.33333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 3,
          ratio: 5 / 32,
          coordinates: { cx: 311.5625, cy: 197.875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 3,
          ratio: 1 / 6,
          coordinates: { cx: 311.6666666666667, cy: 210 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 4,
          ratio: 1 / 5,
          coordinates: { cx: 312, cy: 248.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 4,
          ratio: 107 / 512,
          coordinates: { cx: 312.08984375, cy: 259.2578125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 5,
          ratio: 1 / 4,
          coordinates: { cx: 312.5, cy: 307 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D´", German: "D´" },
          number: 5,
          ratio: 7 / 27,
          coordinates: { cx: 312.5925925925926, cy: 317.77777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            row: upper1
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 6,
          ratio: 13 / 45,
          coordinates: { cx: 312.8888888888889, cy: 352.26666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 6,
          ratio: 19 / 64,
          coordinates: { cx: 312.96875, cy: 361.5625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 7,
          ratio: 13 / 40,
          coordinates: { cx: 313.25, cy: 394.3 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 7,
          ratio: 1 / 3,
          coordinates: { cx: 313.3333333333333, cy: 404 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 8,
          ratio: 47 / 128,
          coordinates: { cx: 313.671875, cy: 443.40625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 8,
          ratio: 3 / 8,
          coordinates: { cx: 313.75, cy: 452.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 9,
          ratio: 2 / 5,
          coordinates: { cx: 314, cy: 481.6 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "F#°", German: "Fis°" },
          number: 9,
          ratio: 11 / 27,
          coordinates: { cx: 314.0740740740741, cy: 490.2222222222222 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp,
            row: middle
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 10,
          ratio: 7 / 16,
          coordinates: { cx: 314.375, cy: 525.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 10,
          ratio: 4 / 9,
          coordinates: { cx: 314.44444444444446, cy: 533.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 11,
          ratio: 7 / 15,
          coordinates: { cx: 314.6666666666667, cy: 559.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 11,
          ratio: 121 / 256,
          coordinates: { cx: 314.7265625, cy: 566.171875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 12,
          ratio: 79 / 160,
          coordinates: { cx: 314.9375, cy: 590.725 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 315, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            row: middle
          }
        }
      ],
      [
        {
          name: { English: "A#`", German: "Ais`" },
          number: 1,
          ratio: 71 / 135,
          coordinates: { cx: 315.25925925925924, cy: 628.1777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aSharp,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 1,
          ratio: 17 / 32,
          coordinates: { cx: 315.3125, cy: 634.375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 2,
          ratio: 11 / 20,
          coordinates: { cx: 315.5, cy: 656.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 2,
          ratio: 5 / 9,
          coordinates: { cx: 315.55555555555554, cy: 662.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 3,
          ratio: 37 / 64,
          coordinates: { cx: 315.78125, cy: 688.9375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            row: lower1
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 3,
          ratio: 7 / 12,
          coordinates: { cx: 315.8333333333333, cy: 695 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 4,
          ratio: 3 / 5,
          coordinates: { cx: 316, cy: 714.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 4,
          ratio: 619 / 1024,
          coordinates: { cx: 316.044921875, cy: 719.62890625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 5,
          ratio: 5 / 8,
          coordinates: { cx: 316.25, cy: 743.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D´", German: "D´" },
          number: 5,
          ratio: 17 / 27,
          coordinates: { cx: 316.2962962962963, cy: 748.8888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            row: upper1
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 6,
          ratio: 29 / 45,
          coordinates: { cx: 316.44444444444446, cy: 766.1333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 6,
          ratio: 83 / 128,
          coordinates: { cx: 316.484375, cy: 770.78125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 7,
          ratio: 53 / 80,
          coordinates: { cx: 316.625, cy: 787.15 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 7,
          ratio: 2 / 3,
          coordinates: { cx: 316.6666666666667, cy: 792 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 8,
          ratio: 175 / 256,
          coordinates: { cx: 316.8359375, cy: 811.703125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            row: lower1
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 8,
          ratio: 11 / 16,
          coordinates: { cx: 316.875, cy: 816.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 9,
          ratio: 7 / 10,
          coordinates: { cx: 317, cy: 830.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "F#°", German: "Fis°" },
          number: 9,
          ratio: 19 / 27,
          coordinates: { cx: 317.037037037037, cy: 835.1111111111111 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp,
            row: middle
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 10,
          ratio: 23 / 32,
          coordinates: { cx: 317.1875, cy: 852.625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 10,
          ratio: 13 / 18,
          coordinates: { cx: 317.22222222222223, cy: 856.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 11,
          ratio: 11 / 15,
          coordinates: { cx: 317.3333333333333, cy: 869.5999999999999 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 11,
          ratio: 377 / 512,
          coordinates: { cx: 317.36328125, cy: 873.0859375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 12,
          ratio: 239 / 320,
          coordinates: { cx: 317.46875, cy: 885.3625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 317.5, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            row: middle
          }
        }
      ],
      [
        {
          name: { English: "A#`", German: "Ais`" },
          number: 1,
          ratio: 103 / 135,
          coordinates: { cx: 317.6296296296296, cy: 904.0888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aSharp,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 1,
          ratio: 49 / 64,
          coordinates: { cx: 317.65625, cy: 907.1875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 2,
          ratio: 31 / 40,
          coordinates: { cx: 317.75, cy: 918.1 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 2,
          ratio: 7 / 9,
          coordinates: { cx: 317.77777777777777, cy: 921.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 3,
          ratio: 101 / 128,
          coordinates: { cx: 317.890625, cy: 934.46875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 3,
          ratio: 19 / 24,
          coordinates: { cx: 317.9166666666667, cy: 937.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 4,
          ratio: 4 / 5,
          coordinates: { cx: 318, cy: 947.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 4,
          ratio: 1643 / 2048,
          coordinates: { cx: 318.0224609375, cy: 949.814453125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 5,
          ratio: 13 / 16,
          coordinates: { cx: 318.125, cy: 961.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D´", German: "D´" },
          number: 5,
          ratio: 22 / 27,
          coordinates: { cx: 318.14814814814815, cy: 964.4444444444444 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            row: upper1
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 6,
          ratio: 37 / 45,
          coordinates: { cx: 318.22222222222223, cy: 973.0666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 6,
          ratio: 211 / 256,
          coordinates: { cx: 318.2421875, cy: 975.390625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 7,
          ratio: 133 / 160,
          coordinates: { cx: 318.3125, cy: 983.575 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 7,
          ratio: 5 / 6,
          coordinates: { cx: 318.3333333333333, cy: 986 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 8,
          ratio: 431 / 512,
          coordinates: { cx: 318.41796875, cy: 995.8515625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 8,
          ratio: 27 / 32,
          coordinates: { cx: 318.4375, cy: 998.125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 9,
          ratio: 17 / 20,
          coordinates: { cx: 318.5, cy: 1005.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "F#°", German: "Fis°" },
          number: 9,
          ratio: 23 / 27,
          coordinates: { cx: 318.51851851851853, cy: 1007.5555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp,
            row: middle
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 10,
          ratio: 55 / 64,
          coordinates: { cx: 318.59375, cy: 1016.3125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 10,
          ratio: 31 / 36,
          coordinates: { cx: 318.6111111111111, cy: 1018.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 11,
          ratio: 13 / 15,
          coordinates: { cx: 318.6666666666667, cy: 1024.8000000000002 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 11,
          ratio: 889 / 1024,
          coordinates: { cx: 318.681640625, cy: 1026.54296875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 12,
          ratio: 559 / 640,
          coordinates: { cx: 318.734375, cy: 1032.68125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 7 / 8,
          coordinates: { cx: 318.75, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            row: middle
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "F°", German: "F°" },
          number: 1,
          ratio: 13 / 256,
          coordinates: { cx: 331.5234375, cy: 75.109375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 1,
          ratio: 1 / 16,
          coordinates: { cx: 331.875, cy: 88.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 2,
          ratio: 1 / 10,
          coordinates: { cx: 333, cy: 132.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "F#°", German: "Fis°" },
          number: 2,
          ratio: 1 / 9,
          coordinates: { cx: 333.3333333333333, cy: 145.33333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: fSharp,
            row: middle
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 3,
          ratio: 5 / 32,
          coordinates: { cx: 334.6875, cy: 197.875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 3,
          ratio: 1 / 6,
          coordinates: { cx: 335, cy: 210 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 4,
          ratio: 1 / 5,
          coordinates: { cx: 336, cy: 248.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 4,
          ratio: 107 / 512,
          coordinates: { cx: 336.26953125, cy: 259.2578125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 5,
          ratio: 77 / 320,
          coordinates: { cx: 337.21875, cy: 296.08750000000003 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 5,
          ratio: 1 / 4,
          coordinates: { cx: 337.5, cy: 307 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "A#`", German: "Ais`" },
          number: 6,
          ratio: 13 / 45,
          coordinates: { cx: 338.6666666666667, cy: 352.26666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: aSharp,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 6,
          ratio: 19 / 64,
          coordinates: { cx: 338.90625, cy: 361.5625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 7,
          ratio: 13 / 40,
          coordinates: { cx: 339.75, cy: 394.3 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 7,
          ratio: 1 / 3,
          coordinates: { cx: 340, cy: 404 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 8,
          ratio: 47 / 128,
          coordinates: { cx: 341.015625, cy: 443.40625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 8,
          ratio: 3 / 8,
          coordinates: { cx: 341.25, cy: 452.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 9,
          ratio: 2 / 5,
          coordinates: { cx: 342, cy: 481.6 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "G´", German: "Ges´" },
          number: 9,
          ratio: 833 / 2048,
          coordinates: { cx: 342.2021484375, cy: 489.443359375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 10,
          ratio: 7 / 16,
          coordinates: { cx: 343.125, cy: 525.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D´", German: "D´" },
          number: 10,
          ratio: 4 / 9,
          coordinates: { cx: 343.3333333333333, cy: 533.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: d,
            row: upper1
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 11,
          ratio: 7 / 15,
          coordinates: { cx: 344, cy: 559.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 11,
          ratio: 121 / 256,
          coordinates: { cx: 344.1796875, cy: 566.171875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 12,
          ratio: 79 / 160,
          coordinates: { cx: 344.8125, cy: 590.725 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 345, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: e,
            row: middle
          }
        }
      ],
      [
        {
          name: { English: "F°", German: "F°" },
          number: 1,
          ratio: 269 / 512,
          coordinates: { cx: 345.76171875, cy: 627.5546875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 1,
          ratio: 17 / 32,
          coordinates: { cx: 345.9375, cy: 634.375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 2,
          ratio: 11 / 20,
          coordinates: { cx: 346.5, cy: 656.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "F#°", German: "Fis°" },
          number: 2,
          ratio: 5 / 9,
          coordinates: { cx: 346.6666666666667, cy: 662.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: fSharp,
            row: middle
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 3,
          ratio: 37 / 64,
          coordinates: { cx: 347.34375, cy: 688.9375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 3,
          ratio: 7 / 12,
          coordinates: { cx: 347.5, cy: 695 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 4,
          ratio: 3 / 5,
          coordinates: { cx: 348, cy: 714.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 4,
          ratio: 619 / 1024,
          coordinates: { cx: 348.134765625, cy: 719.62890625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 5,
          ratio: 397 / 640,
          coordinates: { cx: 348.609375, cy: 738.04375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 5,
          ratio: 5 / 8,
          coordinates: { cx: 348.75, cy: 743.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "A#`", German: "Ais`" },
          number: 6,
          ratio: 29 / 45,
          coordinates: { cx: 349.3333333333333, cy: 766.1333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: aSharp,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 6,
          ratio: 83 / 128,
          coordinates: { cx: 349.453125, cy: 770.78125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 7,
          ratio: 53 / 80,
          coordinates: { cx: 349.875, cy: 787.15 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 7,
          ratio: 2 / 3,
          coordinates: { cx: 350, cy: 792 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 8,
          ratio: 175 / 256,
          coordinates: { cx: 350.5078125, cy: 811.703125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 8,
          ratio: 11 / 16,
          coordinates: { cx: 350.625, cy: 816.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 9,
          ratio: 7 / 10,
          coordinates: { cx: 351, cy: 830.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 9,
          ratio: 2881 / 4096,
          coordinates: { cx: 351.10107421875, cy: 834.7216796875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 10,
          ratio: 23 / 32,
          coordinates: { cx: 351.5625, cy: 852.625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D´", German: "D´" },
          number: 10,
          ratio: 13 / 18,
          coordinates: { cx: 351.6666666666667, cy: 856.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: d,
            row: upper1
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 11,
          ratio: 11 / 15,
          coordinates: { cx: 352, cy: 869.5999999999999 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 11,
          ratio: 377 / 512,
          coordinates: { cx: 352.08984375, cy: 873.0859375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 12,
          ratio: 239 / 320,
          coordinates: { cx: 352.40625, cy: 885.3625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 352.5, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: e,
            row: middle
          }
        }
      ],
      [
        {
          name: { English: "F°", German: "F°" },
          number: 1,
          ratio: 781 / 1024,
          coordinates: { cx: 352.880859375, cy: 903.77734375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 1,
          ratio: 49 / 64,
          coordinates: { cx: 352.96875, cy: 907.1875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 2,
          ratio: 31 / 40,
          coordinates: { cx: 353.25, cy: 918.1 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "F#°", German: "Fis°" },
          number: 2,
          ratio: 7 / 9,
          coordinates: { cx: 353.3333333333333, cy: 921.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: fSharp,
            row: middle
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 3,
          ratio: 101 / 128,
          coordinates: { cx: 353.671875, cy: 934.46875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 3,
          ratio: 19 / 24,
          coordinates: { cx: 353.75, cy: 937.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 4,
          ratio: 4 / 5,
          coordinates: { cx: 354, cy: 947.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 4,
          ratio: 1643 / 2048,
          coordinates: { cx: 354.0673828125, cy: 949.814453125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 5,
          ratio: 1037 / 1280,
          coordinates: { cx: 354.3046875, cy: 959.021875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 5,
          ratio: 13 / 16,
          coordinates: { cx: 354.375, cy: 961.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "A#`", German: "Ais`" },
          number: 6,
          ratio: 37 / 45,
          coordinates: { cx: 354.6666666666667, cy: 973.0666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: aSharp,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 6,
          ratio: 211 / 256,
          coordinates: { cx: 354.7265625, cy: 975.390625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 7,
          ratio: 133 / 160,
          coordinates: { cx: 354.9375, cy: 983.575 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 7,
          ratio: 5 / 6,
          coordinates: { cx: 355, cy: 986 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 8,
          ratio: 431 / 512,
          coordinates: { cx: 355.25390625, cy: 995.8515625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 8,
          ratio: 27 / 32,
          coordinates: { cx: 355.3125, cy: 998.125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 9,
          ratio: 17 / 20,
          coordinates: { cx: 355.5, cy: 1005.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 9,
          ratio: 6977 / 8192,
          coordinates: { cx: 355.550537109375, cy: 1007.36083984375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 10,
          ratio: 55 / 64,
          coordinates: { cx: 355.78125, cy: 1016.3125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D´", German: "D´" },
          number: 10,
          ratio: 31 / 36,
          coordinates: { cx: 355.8333333333333, cy: 1018.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: d,
            row: upper1
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 11,
          ratio: 13 / 15,
          coordinates: { cx: 356, cy: 1024.8000000000002 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 11,
          ratio: 889 / 1024,
          coordinates: { cx: 356.044921875, cy: 1026.54296875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 12,
          ratio: 559 / 640,
          coordinates: { cx: 356.203125, cy: 1032.68125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 12,
          ratio: 7 / 8,
          coordinates: { cx: 356.25, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: e,
            row: middle
          }
        }
      ]
    ]
  ],
  Viola: [
    [
      [
        {
          name: { English: "C´", German: "C´" },
          number: 0,
          ratio: 1 / 81,
          coordinates: { cx: 269.6296296296296, cy: 30.37037037037037 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 1,
          ratio: 7 / 135,
          coordinates: { cx: 268.44444444444446, cy: 76.35555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 1,
          ratio: 1 / 16,
          coordinates: { cx: 268.125, cy: 88.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 2,
          ratio: 1 / 10,
          coordinates: { cx: 267, cy: 132.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: d,
            row: lower1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 2,
          ratio: 1 / 9,
          coordinates: { cx: 266.6666666666667, cy: 145.33333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 3,
          ratio: 191 / 1215,
          coordinates: { cx: 265.28395061728395, cy: 198.9827160493827 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 3,
          ratio: 1 / 6,
          coordinates: { cx: 265, cy: 210 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 4,
          ratio: 1 / 5,
          coordinates: { cx: 264, cy: 248.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 4,
          ratio: 17 / 81,
          coordinates: { cx: 263.7037037037037, cy: 260.2962962962963 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 5,
          ratio: 1 / 4,
          coordinates: { cx: 262.5, cy: 307 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 5,
          ratio: 7 / 27,
          coordinates: { cx: 262.22222222222223, cy: 317.77777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 6,
          ratio: 13 / 45,
          coordinates: { cx: 261.3333333333333, cy: 352.26666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 6,
          ratio: 19 / 64,
          coordinates: { cx: 261.09375, cy: 361.5625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 7,
          ratio: 1 / 3,
          coordinates: { cx: 260, cy: 404 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 7,
          ratio: 83 / 243,
          coordinates: { cx: 259.75308641975306, cy: 413.58024691358025 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 8,
          ratio: 149 / 405,
          coordinates: { cx: 258.96296296296293, cy: 444.23703703703706 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 8,
          ratio: 3 / 8,
          coordinates: { cx: 258.75, cy: 452.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 9,
          ratio: 2 / 5,
          coordinates: { cx: 258, cy: 481.6 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 9,
          ratio: 11 / 27,
          coordinates: { cx: 257.77777777777777, cy: 490.2222222222222 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "B♭°", German: "B°" },
          number: 10,
          ratio: 7 / 16,
          coordinates: { cx: 256.875, cy: 525.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: bFlat,
            row: middle
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 10,
          ratio: 4 / 9,
          coordinates: { cx: 256.6666666666667, cy: 533.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 11,
          ratio: 7 / 15,
          coordinates: { cx: 256, cy: 559.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 11,
          ratio: 115 / 243,
          coordinates: { cx: 255.80246913580248, cy: 566.8641975308642 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 255, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 12,
          ratio: 41 / 81,
          coordinates: { cx: 254.8148148148148, cy: 605.1851851851852 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: c,
            row: upper1
          }
        }
      ],
      [
        {
          name: { English: "C#`", German: "Cis`" },
          number: 1,
          ratio: 71 / 135,
          coordinates: { cx: 254.22222222222223, cy: 628.1777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 1,
          ratio: 17 / 32,
          coordinates: { cx: 254.0625, cy: 634.375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 2,
          ratio: 11 / 20,
          coordinates: { cx: 253.5, cy: 656.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: d,
            row: lower1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 2,
          ratio: 5 / 9,
          coordinates: { cx: 253.33333333333334, cy: 662.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 3,
          ratio: 703 / 1215,
          coordinates: { cx: 252.64197530864197, cy: 689.4913580246914 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 3,
          ratio: 7 / 12,
          coordinates: { cx: 252.5, cy: 695 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 4,
          ratio: 3 / 5,
          coordinates: { cx: 252, cy: 714.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 4,
          ratio: 49 / 81,
          coordinates: { cx: 251.85185185185185, cy: 720.1481481481482 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 5,
          ratio: 5 / 8,
          coordinates: { cx: 251.25, cy: 743.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 5,
          ratio: 17 / 27,
          coordinates: { cx: 251.11111111111111, cy: 748.8888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 6,
          ratio: 29 / 45,
          coordinates: { cx: 250.66666666666666, cy: 766.1333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 6,
          ratio: 83 / 128,
          coordinates: { cx: 250.546875, cy: 770.78125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 7,
          ratio: 2 / 3,
          coordinates: { cx: 250, cy: 792 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 7,
          ratio: 163 / 243,
          coordinates: { cx: 249.87654320987653, cy: 796.7901234567902 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 8,
          ratio: 277 / 405,
          coordinates: { cx: 249.4814814814815, cy: 812.1185185185185 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 8,
          ratio: 11 / 16,
          coordinates: { cx: 249.375, cy: 816.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 9,
          ratio: 7 / 10,
          coordinates: { cx: 249, cy: 830.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 9,
          ratio: 19 / 27,
          coordinates: { cx: 248.88888888888889, cy: 835.1111111111111 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "B♭°", German: "B°" },
          number: 10,
          ratio: 23 / 32,
          coordinates: { cx: 248.4375, cy: 852.625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: bFlat,
            row: middle
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 10,
          ratio: 13 / 18,
          coordinates: { cx: 248.33333333333334, cy: 856.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 11,
          ratio: 11 / 15,
          coordinates: { cx: 248, cy: 869.5999999999999 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 11,
          ratio: 179 / 243,
          coordinates: { cx: 247.90123456790124, cy: 873.4320987654321 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 247.5, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 12,
          ratio: 61 / 81,
          coordinates: { cx: 247.40740740740742, cy: 892.5925925925926 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: c,
            row: upper1
          }
        }
      ],
      [
        {
          name: { English: "C#`", German: "Cis`" },
          number: 1,
          ratio: 103 / 135,
          coordinates: { cx: 247.11111111111111, cy: 904.0888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 1,
          ratio: 49 / 64,
          coordinates: { cx: 247.03125, cy: 907.1875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 2,
          ratio: 31 / 40,
          coordinates: { cx: 246.75, cy: 918.1 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: d,
            row: lower1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 2,
          ratio: 7 / 9,
          coordinates: { cx: 246.66666666666666, cy: 921.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 3,
          ratio: 959 / 1215,
          coordinates: { cx: 246.320987654321, cy: 934.7456790123457 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 3,
          ratio: 19 / 24,
          coordinates: { cx: 246.25, cy: 937.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 4,
          ratio: 4 / 5,
          coordinates: { cx: 246, cy: 947.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 4,
          ratio: 65 / 81,
          coordinates: { cx: 245.92592592592592, cy: 950.0740740740741 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 5,
          ratio: 13 / 16,
          coordinates: { cx: 245.625, cy: 961.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 5,
          ratio: 22 / 27,
          coordinates: { cx: 245.55555555555554, cy: 964.4444444444444 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 6,
          ratio: 37 / 45,
          coordinates: { cx: 245.33333333333334, cy: 973.0666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 6,
          ratio: 211 / 256,
          coordinates: { cx: 245.2734375, cy: 975.390625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 7,
          ratio: 5 / 6,
          coordinates: { cx: 245, cy: 986 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 7,
          ratio: 203 / 243,
          coordinates: { cx: 244.93827160493828, cy: 988.395061728395 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 8,
          ratio: 341 / 405,
          coordinates: { cx: 244.74074074074073, cy: 996.0592592592593 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 8,
          ratio: 27 / 32,
          coordinates: { cx: 244.6875, cy: 998.125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 9,
          ratio: 17 / 20,
          coordinates: { cx: 244.5, cy: 1005.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 9,
          ratio: 23 / 27,
          coordinates: { cx: 244.44444444444446, cy: 1007.5555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "B♭°", German: "B°" },
          number: 10,
          ratio: 55 / 64,
          coordinates: { cx: 244.21875, cy: 1016.3125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: bFlat,
            row: middle
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 10,
          ratio: 31 / 36,
          coordinates: { cx: 244.16666666666666, cy: 1018.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 11,
          ratio: 13 / 15,
          coordinates: { cx: 244, cy: 1024.8000000000002 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 11,
          ratio: 211 / 243,
          coordinates: { cx: 243.9506172839506, cy: 1026.716049382716 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 12,
          ratio: 7 / 8,
          coordinates: { cx: 243.75, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 12,
          ratio: 71 / 81,
          coordinates: { cx: 243.7037037037037, cy: 1036.2962962962963 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: c,
            row: upper1
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "G´", German: "G´" },
          number: 0,
          ratio: 1 / 81,
          coordinates: { cx: 289.87654320987656, cy: 30.37037037037037 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 1,
          ratio: 7 / 135,
          coordinates: { cx: 289.48148148148147, cy: 76.35555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 1,
          ratio: 1 / 16,
          coordinates: { cx: 289.375, cy: 88.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 2,
          ratio: 1 / 10,
          coordinates: { cx: 289, cy: 132.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          number: 2,
          ratio: 1 / 9,
          coordinates: { cx: 288.8888888888889, cy: 145.33333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "B♭°", German: "B°" },
          number: 3,
          ratio: 5 / 32,
          coordinates: { cx: 288.4375, cy: 197.875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: bFlat,
            row: middle
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 3,
          ratio: 1 / 6,
          coordinates: { cx: 288.3333333333333, cy: 210 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 4,
          ratio: 1 / 5,
          coordinates: { cx: 288, cy: 248.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 4,
          ratio: 17 / 81,
          coordinates: { cx: 287.9012345679012, cy: 260.2962962962963 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 5,
          ratio: 1 / 4,
          coordinates: { cx: 287.5, cy: 307 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 5,
          ratio: 7 / 27,
          coordinates: { cx: 287.4074074074074, cy: 317.77777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 6,
          ratio: 13 / 45,
          coordinates: { cx: 287.1111111111111, cy: 352.26666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 6,
          ratio: 19 / 64,
          coordinates: { cx: 287.03125, cy: 361.5625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 7,
          ratio: 13 / 40,
          coordinates: { cx: 286.75, cy: 394.3 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            row: lower1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 7,
          ratio: 1 / 3,
          coordinates: { cx: 286.6666666666667, cy: 404 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 8,
          ratio: 149 / 405,
          coordinates: { cx: 286.320987654321, cy: 444.23703703703706 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 8,
          ratio: 3 / 8,
          coordinates: { cx: 286.25, cy: 452.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 9,
          ratio: 2 / 5,
          coordinates: { cx: 286, cy: 481.6 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 9,
          ratio: 11 / 27,
          coordinates: { cx: 285.9259259259259, cy: 490.2222222222222 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 10,
          ratio: 7 / 16,
          coordinates: { cx: 285.625, cy: 525.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 10,
          ratio: 4 / 9,
          coordinates: { cx: 285.55555555555554, cy: 533.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 11,
          ratio: 7 / 15,
          coordinates: { cx: 285.3333333333333, cy: 559.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 11,
          ratio: 121 / 256,
          coordinates: { cx: 285.2734375, cy: 566.171875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 285, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 12,
          ratio: 41 / 81,
          coordinates: { cx: 284.9382716049383, cy: 605.1851851851852 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: g,
            row: upper1
          }
        }
      ],
      [
        {
          name: { English: "G#`", German: "Gis`" },
          number: 1,
          ratio: 71 / 135,
          coordinates: { cx: 284.74074074074076, cy: 628.1777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 1,
          ratio: 17 / 32,
          coordinates: { cx: 284.6875, cy: 634.375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 2,
          ratio: 11 / 20,
          coordinates: { cx: 284.5, cy: 656.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 2,
          ratio: 5 / 9,
          coordinates: { cx: 284.44444444444446, cy: 662.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "B♭°", German: "B°" },
          number: 3,
          ratio: 37 / 64,
          coordinates: { cx: 284.21875, cy: 688.9375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: bFlat,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 3,
          ratio: 7 / 12,
          coordinates: { cx: 284.1666666666667, cy: 695 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 4,
          ratio: 3 / 5,
          coordinates: { cx: 284, cy: 714.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 4,
          ratio: 49 / 81,
          coordinates: { cx: 283.95061728395063, cy: 720.1481481481482 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 5,
          ratio: 5 / 8,
          coordinates: { cx: 283.75, cy: 743.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 5,
          ratio: 17 / 27,
          coordinates: { cx: 283.7037037037037, cy: 748.8888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 6,
          ratio: 29 / 45,
          coordinates: { cx: 283.55555555555554, cy: 766.1333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 6,
          ratio: 83 / 128,
          coordinates: { cx: 283.515625, cy: 770.78125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 7,
          ratio: 53 / 80,
          coordinates: { cx: 283.375, cy: 787.15 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            row: lower1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 7,
          ratio: 2 / 3,
          coordinates: { cx: 283.3333333333333, cy: 792 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 8,
          ratio: 277 / 405,
          coordinates: { cx: 283.1604938271605, cy: 812.1185185185185 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 8,
          ratio: 11 / 16,
          coordinates: { cx: 283.125, cy: 816.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 9,
          ratio: 7 / 10,
          coordinates: { cx: 283, cy: 830.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 9,
          ratio: 19 / 27,
          coordinates: { cx: 282.962962962963, cy: 835.1111111111111 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 10,
          ratio: 23 / 32,
          coordinates: { cx: 282.8125, cy: 852.625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 10,
          ratio: 13 / 18,
          coordinates: { cx: 282.77777777777777, cy: 856.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 11,
          ratio: 11 / 15,
          coordinates: { cx: 282.6666666666667, cy: 869.5999999999999 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 11,
          ratio: 377 / 512,
          coordinates: { cx: 282.63671875, cy: 873.0859375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 282.5, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 12,
          ratio: 61 / 81,
          coordinates: { cx: 282.4691358024691, cy: 892.5925925925926 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: g,
            row: upper1
          }
        }
      ],
      [
        {
          name: { English: "G#`", German: "Gis`" },
          number: 1,
          ratio: 103 / 135,
          coordinates: { cx: 282.3703703703704, cy: 904.0888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 1,
          ratio: 49 / 64,
          coordinates: { cx: 282.34375, cy: 907.1875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 2,
          ratio: 31 / 40,
          coordinates: { cx: 282.25, cy: 918.1 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 2,
          ratio: 7 / 9,
          coordinates: { cx: 282.22222222222223, cy: 921.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "B♭°", German: "B°" },
          number: 3,
          ratio: 101 / 128,
          coordinates: { cx: 282.109375, cy: 934.46875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: bFlat,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 3,
          ratio: 19 / 24,
          coordinates: { cx: 282.0833333333333, cy: 937.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 4,
          ratio: 4 / 5,
          coordinates: { cx: 282, cy: 947.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 4,
          ratio: 65 / 81,
          coordinates: { cx: 281.9753086419753, cy: 950.0740740740741 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 5,
          ratio: 13 / 16,
          coordinates: { cx: 281.875, cy: 961.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 5,
          ratio: 22 / 27,
          coordinates: { cx: 281.85185185185185, cy: 964.4444444444444 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 6,
          ratio: 37 / 45,
          coordinates: { cx: 281.77777777777777, cy: 973.0666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 6,
          ratio: 211 / 256,
          coordinates: { cx: 281.7578125, cy: 975.390625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 7,
          ratio: 133 / 160,
          coordinates: { cx: 281.6875, cy: 983.575 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            row: lower1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 7,
          ratio: 5 / 6,
          coordinates: { cx: 281.6666666666667, cy: 986 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 8,
          ratio: 341 / 405,
          coordinates: { cx: 281.58024691358025, cy: 996.0592592592593 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 8,
          ratio: 27 / 32,
          coordinates: { cx: 281.5625, cy: 998.125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 9,
          ratio: 17 / 20,
          coordinates: { cx: 281.5, cy: 1005.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 9,
          ratio: 23 / 27,
          coordinates: { cx: 281.48148148148147, cy: 1007.5555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 10,
          ratio: 55 / 64,
          coordinates: { cx: 281.40625, cy: 1016.3125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 10,
          ratio: 31 / 36,
          coordinates: { cx: 281.3888888888889, cy: 1018.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 11,
          ratio: 13 / 15,
          coordinates: { cx: 281.3333333333333, cy: 1024.8000000000002 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 11,
          ratio: 889 / 1024,
          coordinates: { cx: 281.318359375, cy: 1026.54296875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 12,
          ratio: 7 / 8,
          coordinates: { cx: 281.25, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 12,
          ratio: 71 / 81,
          coordinates: { cx: 281.2345679012346, cy: 1036.2962962962963 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: g,
            row: upper1
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "D#`", German: "Dis`" },
          number: 1,
          ratio: 7 / 135,
          coordinates: { cx: 310.51851851851853, cy: 76.35555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 1,
          ratio: 1 / 16,
          coordinates: { cx: 310.625, cy: 88.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 2,
          ratio: 1 / 10,
          coordinates: { cx: 311, cy: 132.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 2,
          ratio: 1 / 9,
          coordinates: { cx: 311.1111111111111, cy: 145.33333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 3,
          ratio: 5 / 32,
          coordinates: { cx: 311.5625, cy: 197.875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 3,
          ratio: 1 / 6,
          coordinates: { cx: 311.6666666666667, cy: 210 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 4,
          ratio: 1 / 5,
          coordinates: { cx: 312, cy: 248.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 4,
          ratio: 107 / 512,
          coordinates: { cx: 312.08984375, cy: 259.2578125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 5,
          ratio: 1 / 4,
          coordinates: { cx: 312.5, cy: 307 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 5,
          ratio: 7 / 27,
          coordinates: { cx: 312.5925925925926, cy: 317.77777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 6,
          ratio: 13 / 45,
          coordinates: { cx: 312.8888888888889, cy: 352.26666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 6,
          ratio: 19 / 64,
          coordinates: { cx: 312.96875, cy: 361.5625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 7,
          ratio: 13 / 40,
          coordinates: { cx: 313.25, cy: 394.3 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          ratio: 1 / 3,
          coordinates: { cx: 313.3333333333333, cy: 404 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "B♭°", German: "B°" },
          number: 8,
          ratio: 47 / 128,
          coordinates: { cx: 313.671875, cy: 443.40625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: bFlat,
            row: middle
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 8,
          ratio: 3 / 8,
          coordinates: { cx: 313.75, cy: 452.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 9,
          ratio: 2 / 5,
          coordinates: { cx: 314, cy: 481.6 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 9,
          ratio: 11 / 27,
          coordinates: { cx: 314.0740740740741, cy: 490.2222222222222 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 10,
          ratio: 7 / 16,
          coordinates: { cx: 314.375, cy: 525.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 10,
          ratio: 4 / 9,
          coordinates: { cx: 314.44444444444446, cy: 533.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 11,
          ratio: 7 / 15,
          coordinates: { cx: 314.6666666666667, cy: 559.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 11,
          ratio: 121 / 256,
          coordinates: { cx: 314.7265625, cy: 566.171875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 12,
          ratio: 79 / 160,
          coordinates: { cx: 314.9375, cy: 590.725 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: d,
            row: lower1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 315, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            row: middle
          }
        }
      ],
      [
        {
          name: { English: "D#`", German: "Dis`" },
          number: 1,
          ratio: 71 / 135,
          coordinates: { cx: 315.25925925925924, cy: 628.1777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 1,
          ratio: 17 / 32,
          coordinates: { cx: 315.3125, cy: 634.375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 2,
          ratio: 11 / 20,
          coordinates: { cx: 315.5, cy: 656.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 2,
          ratio: 5 / 9,
          coordinates: { cx: 315.55555555555554, cy: 662.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 3,
          ratio: 37 / 64,
          coordinates: { cx: 315.78125, cy: 688.9375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            row: lower1
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 3,
          ratio: 7 / 12,
          coordinates: { cx: 315.8333333333333, cy: 695 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 4,
          ratio: 3 / 5,
          coordinates: { cx: 316, cy: 714.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 4,
          ratio: 619 / 1024,
          coordinates: { cx: 316.044921875, cy: 719.62890625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 5,
          ratio: 5 / 8,
          coordinates: { cx: 316.25, cy: 743.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 5,
          ratio: 17 / 27,
          coordinates: { cx: 316.2962962962963, cy: 748.8888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 6,
          ratio: 29 / 45,
          coordinates: { cx: 316.44444444444446, cy: 766.1333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 6,
          ratio: 83 / 128,
          coordinates: { cx: 316.484375, cy: 770.78125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 7,
          ratio: 53 / 80,
          coordinates: { cx: 316.625, cy: 787.15 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          ratio: 2 / 3,
          coordinates: { cx: 316.6666666666667, cy: 792 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "B♭°", German: "B°" },
          number: 8,
          ratio: 175 / 256,
          coordinates: { cx: 316.8359375, cy: 811.703125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: bFlat,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 8,
          ratio: 11 / 16,
          coordinates: { cx: 316.875, cy: 816.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 9,
          ratio: 7 / 10,
          coordinates: { cx: 317, cy: 830.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 9,
          ratio: 19 / 27,
          coordinates: { cx: 317.037037037037, cy: 835.1111111111111 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 10,
          ratio: 23 / 32,
          coordinates: { cx: 317.1875, cy: 852.625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 10,
          ratio: 13 / 18,
          coordinates: { cx: 317.22222222222223, cy: 856.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 11,
          ratio: 11 / 15,
          coordinates: { cx: 317.3333333333333, cy: 869.5999999999999 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 11,
          ratio: 377 / 512,
          coordinates: { cx: 317.36328125, cy: 873.0859375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 12,
          ratio: 239 / 320,
          coordinates: { cx: 317.46875, cy: 885.3625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: d,
            row: lower1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 317.5, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            row: middle
          }
        }
      ],
      [
        {
          name: { English: "D#`", German: "Dis`" },
          number: 1,
          ratio: 103 / 135,
          coordinates: { cx: 317.6296296296296, cy: 904.0888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 1,
          ratio: 49 / 64,
          coordinates: { cx: 317.65625, cy: 907.1875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 2,
          ratio: 31 / 40,
          coordinates: { cx: 317.75, cy: 918.1 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 2,
          ratio: 7 / 9,
          coordinates: { cx: 317.77777777777777, cy: 921.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 3,
          ratio: 101 / 128,
          coordinates: { cx: 317.890625, cy: 934.46875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 3,
          ratio: 19 / 24,
          coordinates: { cx: 317.9166666666667, cy: 937.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 4,
          ratio: 4 / 5,
          coordinates: { cx: 318, cy: 947.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 4,
          ratio: 1643 / 2048,
          coordinates: { cx: 318.0224609375, cy: 949.814453125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 5,
          ratio: 13 / 16,
          coordinates: { cx: 318.125, cy: 961.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 5,
          ratio: 22 / 27,
          coordinates: { cx: 318.14814814814815, cy: 964.4444444444444 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 6,
          ratio: 37 / 45,
          coordinates: { cx: 318.22222222222223, cy: 973.0666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 6,
          ratio: 211 / 256,
          coordinates: { cx: 318.2421875, cy: 975.390625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 7,
          ratio: 133 / 160,
          coordinates: { cx: 318.3125, cy: 983.575 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          ratio: 5 / 6,
          coordinates: { cx: 318.3333333333333, cy: 986 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "B♭°", German: "B°" },
          number: 8,
          ratio: 431 / 512,
          coordinates: { cx: 318.41796875, cy: 995.8515625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: bFlat,
            row: middle
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 8,
          ratio: 27 / 32,
          coordinates: { cx: 318.4375, cy: 998.125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 9,
          ratio: 17 / 20,
          coordinates: { cx: 318.5, cy: 1005.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 9,
          ratio: 23 / 27,
          coordinates: { cx: 318.51851851851853, cy: 1007.5555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 10,
          ratio: 55 / 64,
          coordinates: { cx: 318.59375, cy: 1016.3125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 10,
          ratio: 31 / 36,
          coordinates: { cx: 318.6111111111111, cy: 1018.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 11,
          ratio: 13 / 15,
          coordinates: { cx: 318.6666666666667, cy: 1024.8000000000002 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 11,
          ratio: 889 / 1024,
          coordinates: { cx: 318.681640625, cy: 1026.54296875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 12,
          ratio: 559 / 640,
          coordinates: { cx: 318.734375, cy: 1032.68125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: d,
            row: lower1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 12,
          ratio: 7 / 8,
          coordinates: { cx: 318.75, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            row: middle
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "B♭°", German: "B°" },
          number: 1,
          ratio: 13 / 256,
          coordinates: { cx: 331.5234375, cy: 75.109375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: bFlat,
            row: middle
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 1,
          ratio: 1 / 16,
          coordinates: { cx: 331.875, cy: 88.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 2,
          ratio: 1 / 10,
          coordinates: { cx: 333, cy: 132.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 2,
          ratio: 1 / 9,
          coordinates: { cx: 333.3333333333333, cy: 145.33333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 3,
          ratio: 5 / 32,
          coordinates: { cx: 334.6875, cy: 197.875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 3,
          ratio: 1 / 6,
          coordinates: { cx: 335, cy: 210 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 4,
          ratio: 1 / 5,
          coordinates: { cx: 336, cy: 248.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 4,
          ratio: 107 / 512,
          coordinates: { cx: 336.26953125, cy: 259.2578125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 5,
          ratio: 77 / 320,
          coordinates: { cx: 337.21875, cy: 296.08750000000003 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            row: lower1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 5,
          ratio: 1 / 4,
          coordinates: { cx: 337.5, cy: 307 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 6,
          ratio: 13 / 45,
          coordinates: { cx: 338.6666666666667, cy: 352.26666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 6,
          ratio: 19 / 64,
          coordinates: { cx: 338.90625, cy: 361.5625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 7,
          ratio: 13 / 40,
          coordinates: { cx: 339.75, cy: 394.3 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 7,
          ratio: 1 / 3,
          coordinates: { cx: 340, cy: 404 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 8,
          ratio: 47 / 128,
          coordinates: { cx: 341.015625, cy: 443.40625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 8,
          ratio: 3 / 8,
          coordinates: { cx: 341.25, cy: 452.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 9,
          ratio: 2 / 5,
          coordinates: { cx: 342, cy: 481.6 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 9,
          ratio: 833 / 2048,
          coordinates: { cx: 342.2021484375, cy: 489.443359375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 10,
          ratio: 7 / 16,
          coordinates: { cx: 343.125, cy: 525.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 10,
          ratio: 4 / 9,
          coordinates: { cx: 343.3333333333333, cy: 533.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 11,
          ratio: 7 / 15,
          coordinates: { cx: 344, cy: 559.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 11,
          ratio: 121 / 256,
          coordinates: { cx: 344.1796875, cy: 566.171875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 12,
          ratio: 79 / 160,
          coordinates: { cx: 344.8125, cy: 590.725 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 345, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            row: middle
          }
        }
      ],
      [
        {
          name: { English: "B♭°", German: "B°" },
          number: 1,
          ratio: 269 / 512,
          coordinates: { cx: 345.76171875, cy: 627.5546875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: bFlat,
            row: middle
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 1,
          ratio: 17 / 32,
          coordinates: { cx: 345.9375, cy: 634.375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 2,
          ratio: 11 / 20,
          coordinates: { cx: 346.5, cy: 656.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 2,
          ratio: 5 / 9,
          coordinates: { cx: 346.6666666666667, cy: 662.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 3,
          ratio: 37 / 64,
          coordinates: { cx: 347.34375, cy: 688.9375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 3,
          ratio: 7 / 12,
          coordinates: { cx: 347.5, cy: 695 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 4,
          ratio: 3 / 5,
          coordinates: { cx: 348, cy: 714.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 4,
          ratio: 619 / 1024,
          coordinates: { cx: 348.134765625, cy: 719.62890625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 5,
          ratio: 397 / 640,
          coordinates: { cx: 348.609375, cy: 738.04375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            row: lower1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 5,
          ratio: 5 / 8,
          coordinates: { cx: 348.75, cy: 743.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 6,
          ratio: 29 / 45,
          coordinates: { cx: 349.3333333333333, cy: 766.1333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 6,
          ratio: 83 / 128,
          coordinates: { cx: 349.453125, cy: 770.78125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 7,
          ratio: 53 / 80,
          coordinates: { cx: 349.875, cy: 787.15 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 7,
          ratio: 2 / 3,
          coordinates: { cx: 350, cy: 792 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 8,
          ratio: 175 / 256,
          coordinates: { cx: 350.5078125, cy: 811.703125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 8,
          ratio: 11 / 16,
          coordinates: { cx: 350.625, cy: 816.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 9,
          ratio: 7 / 10,
          coordinates: { cx: 351, cy: 830.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 9,
          ratio: 2881 / 4096,
          coordinates: { cx: 351.10107421875, cy: 834.7216796875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 10,
          ratio: 23 / 32,
          coordinates: { cx: 351.5625, cy: 852.625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 10,
          ratio: 13 / 18,
          coordinates: { cx: 351.6666666666667, cy: 856.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 11,
          ratio: 11 / 15,
          coordinates: { cx: 352, cy: 869.5999999999999 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 11,
          ratio: 377 / 512,
          coordinates: { cx: 352.08984375, cy: 873.0859375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 12,
          ratio: 239 / 320,
          coordinates: { cx: 352.40625, cy: 885.3625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 352.5, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            row: middle
          }
        }
      ],
      [
        {
          name: { English: "B♭°", German: "B°" },
          number: 1,
          ratio: 781 / 1024,
          coordinates: { cx: 352.880859375, cy: 903.77734375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: bFlat,
            row: middle
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 1,
          ratio: 49 / 64,
          coordinates: { cx: 352.96875, cy: 907.1875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 2,
          ratio: 31 / 40,
          coordinates: { cx: 353.25, cy: 918.1 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 2,
          ratio: 7 / 9,
          coordinates: { cx: 353.3333333333333, cy: 921.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 3,
          ratio: 101 / 128,
          coordinates: { cx: 353.671875, cy: 934.46875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 3,
          ratio: 19 / 24,
          coordinates: { cx: 353.75, cy: 937.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 4,
          ratio: 4 / 5,
          coordinates: { cx: 354, cy: 947.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 4,
          ratio: 1643 / 2048,
          coordinates: { cx: 354.0673828125, cy: 949.814453125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 5,
          ratio: 1037 / 1280,
          coordinates: { cx: 354.3046875, cy: 959.021875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            row: lower1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 5,
          ratio: 13 / 16,
          coordinates: { cx: 354.375, cy: 961.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 6,
          ratio: 37 / 45,
          coordinates: { cx: 354.6666666666667, cy: 973.0666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 6,
          ratio: 211 / 256,
          coordinates: { cx: 354.7265625, cy: 975.390625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 7,
          ratio: 133 / 160,
          coordinates: { cx: 354.9375, cy: 983.575 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 7,
          ratio: 5 / 6,
          coordinates: { cx: 355, cy: 986 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 8,
          ratio: 431 / 512,
          coordinates: { cx: 355.25390625, cy: 995.8515625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 8,
          ratio: 27 / 32,
          coordinates: { cx: 355.3125, cy: 998.125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 9,
          ratio: 17 / 20,
          coordinates: { cx: 355.5, cy: 1005.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 9,
          ratio: 6977 / 8192,
          coordinates: { cx: 355.550537109375, cy: 1007.36083984375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 10,
          ratio: 55 / 64,
          coordinates: { cx: 355.78125, cy: 1016.3125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 10,
          ratio: 31 / 36,
          coordinates: { cx: 355.8333333333333, cy: 1018.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 11,
          ratio: 13 / 15,
          coordinates: { cx: 356, cy: 1024.8000000000002 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 11,
          ratio: 889 / 1024,
          coordinates: { cx: 356.044921875, cy: 1026.54296875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 12,
          ratio: 559 / 640,
          coordinates: { cx: 356.203125, cy: 1032.68125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 7 / 8,
          coordinates: { cx: 356.25, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            row: middle
          }
        }
      ]
    ]
  ],
  Cello: [
    [
      [
        {
          name: { English: "C´", German: "C´" },
          number: 0,
          ratio: 1 / 81,
          coordinates: { cx: 281.7037037037037, cy: 30.37037037037037 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 1,
          ratio: 7 / 135,
          coordinates: { cx: 280.75555555555553, cy: 76.35555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 1,
          ratio: 1 / 16,
          coordinates: { cx: 280.5, cy: 88.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 2,
          ratio: 1 / 10,
          coordinates: { cx: 279.6, cy: 132.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: d,
            row: lower1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 2,
          ratio: 1 / 9,
          coordinates: { cx: 279.3333333333333, cy: 145.33333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 3,
          ratio: 191 / 1215,
          coordinates: { cx: 278.22716049382717, cy: 198.9827160493827 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 3,
          ratio: 1 / 6,
          coordinates: { cx: 278, cy: 210 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 4,
          ratio: 1 / 5,
          coordinates: { cx: 277.2, cy: 248.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 4,
          ratio: 17 / 81,
          coordinates: { cx: 276.962962962963, cy: 260.2962962962963 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 5,
          ratio: 1 / 4,
          coordinates: { cx: 276, cy: 307 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 5,
          ratio: 7 / 27,
          coordinates: { cx: 275.77777777777777, cy: 317.77777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 6,
          ratio: 13 / 45,
          coordinates: { cx: 275.06666666666666, cy: 352.26666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 6,
          ratio: 19 / 64,
          coordinates: { cx: 274.875, cy: 361.5625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 7,
          ratio: 1 / 3,
          coordinates: { cx: 274, cy: 404 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 7,
          ratio: 83 / 243,
          coordinates: { cx: 273.8024691358025, cy: 413.58024691358025 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 8,
          ratio: 149 / 405,
          coordinates: { cx: 273.1703703703704, cy: 444.23703703703706 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 8,
          ratio: 3 / 8,
          coordinates: { cx: 273, cy: 452.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 9,
          ratio: 2 / 5,
          coordinates: { cx: 272.4, cy: 481.6 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 9,
          ratio: 11 / 27,
          coordinates: { cx: 272.22222222222223, cy: 490.2222222222222 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "B♭°", German: "B°" },
          number: 10,
          ratio: 7 / 16,
          coordinates: { cx: 271.5, cy: 525.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: bFlat,
            row: middle
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 10,
          ratio: 4 / 9,
          coordinates: { cx: 271.3333333333333, cy: 533.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 11,
          ratio: 7 / 15,
          coordinates: { cx: 270.8, cy: 559.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 11,
          ratio: 115 / 243,
          coordinates: { cx: 270.641975308642, cy: 566.8641975308642 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 270, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 12,
          ratio: 41 / 81,
          coordinates: { cx: 269.85185185185185, cy: 605.1851851851852 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: c,
            row: upper1
          }
        }
      ],
      [
        {
          name: { English: "C#`", German: "Cis`" },
          number: 1,
          ratio: 71 / 135,
          coordinates: { cx: 269.3777777777778, cy: 628.1777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 1,
          ratio: 17 / 32,
          coordinates: { cx: 269.25, cy: 634.375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 2,
          ratio: 11 / 20,
          coordinates: { cx: 268.8, cy: 656.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: d,
            row: lower1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 2,
          ratio: 5 / 9,
          coordinates: { cx: 268.6666666666667, cy: 662.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 3,
          ratio: 703 / 1215,
          coordinates: { cx: 268.11358024691356, cy: 689.4913580246914 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 3,
          ratio: 7 / 12,
          coordinates: { cx: 268, cy: 695 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 4,
          ratio: 3 / 5,
          coordinates: { cx: 267.6, cy: 714.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 4,
          ratio: 49 / 81,
          coordinates: { cx: 267.48148148148147, cy: 720.1481481481482 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 5,
          ratio: 5 / 8,
          coordinates: { cx: 267, cy: 743.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 5,
          ratio: 17 / 27,
          coordinates: { cx: 266.8888888888889, cy: 748.8888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 6,
          ratio: 29 / 45,
          coordinates: { cx: 266.5333333333333, cy: 766.1333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 6,
          ratio: 83 / 128,
          coordinates: { cx: 266.4375, cy: 770.78125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 7,
          ratio: 2 / 3,
          coordinates: { cx: 266, cy: 792 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 7,
          ratio: 163 / 243,
          coordinates: { cx: 265.9012345679012, cy: 796.7901234567902 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 8,
          ratio: 277 / 405,
          coordinates: { cx: 265.5851851851852, cy: 812.1185185185185 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 8,
          ratio: 11 / 16,
          coordinates: { cx: 265.5, cy: 816.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 9,
          ratio: 7 / 10,
          coordinates: { cx: 265.2, cy: 830.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 9,
          ratio: 19 / 27,
          coordinates: { cx: 265.1111111111111, cy: 835.1111111111111 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "B♭°", German: "B°" },
          number: 10,
          ratio: 23 / 32,
          coordinates: { cx: 264.75, cy: 852.625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: bFlat,
            row: middle
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 10,
          ratio: 13 / 18,
          coordinates: { cx: 264.6666666666667, cy: 856.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 11,
          ratio: 11 / 15,
          coordinates: { cx: 264.4, cy: 869.5999999999999 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 11,
          ratio: 179 / 243,
          coordinates: { cx: 264.320987654321, cy: 873.4320987654321 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 264, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 12,
          ratio: 61 / 81,
          coordinates: { cx: 263.9259259259259, cy: 892.5925925925926 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: c,
            row: upper1
          }
        }
      ],
      [
        {
          name: { English: "C#`", German: "Cis`" },
          number: 1,
          ratio: 103 / 135,
          coordinates: { cx: 263.68888888888887, cy: 904.0888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 1,
          ratio: 49 / 64,
          coordinates: { cx: 263.625, cy: 907.1875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 2,
          ratio: 31 / 40,
          coordinates: { cx: 263.4, cy: 918.1 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: d,
            row: lower1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 2,
          ratio: 7 / 9,
          coordinates: { cx: 263.3333333333333, cy: 921.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 3,
          ratio: 959 / 1215,
          coordinates: { cx: 263.0567901234568, cy: 934.7456790123457 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 3,
          ratio: 19 / 24,
          coordinates: { cx: 263, cy: 937.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 4,
          ratio: 4 / 5,
          coordinates: { cx: 262.8, cy: 947.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 4,
          ratio: 65 / 81,
          coordinates: { cx: 262.74074074074076, cy: 950.0740740740741 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 5,
          ratio: 13 / 16,
          coordinates: { cx: 262.5, cy: 961.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 5,
          ratio: 22 / 27,
          coordinates: { cx: 262.44444444444446, cy: 964.4444444444444 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 6,
          ratio: 37 / 45,
          coordinates: { cx: 262.26666666666665, cy: 973.0666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 6,
          ratio: 211 / 256,
          coordinates: { cx: 262.21875, cy: 975.390625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 7,
          ratio: 5 / 6,
          coordinates: { cx: 262, cy: 986 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 7,
          ratio: 203 / 243,
          coordinates: { cx: 261.95061728395063, cy: 988.395061728395 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 8,
          ratio: 341 / 405,
          coordinates: { cx: 261.7925925925926, cy: 996.0592592592593 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 8,
          ratio: 27 / 32,
          coordinates: { cx: 261.75, cy: 998.125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 9,
          ratio: 17 / 20,
          coordinates: { cx: 261.6, cy: 1005.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 9,
          ratio: 23 / 27,
          coordinates: { cx: 261.55555555555554, cy: 1007.5555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "B♭°", German: "B°" },
          number: 10,
          ratio: 55 / 64,
          coordinates: { cx: 261.375, cy: 1016.3125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: bFlat,
            row: middle
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 10,
          ratio: 31 / 36,
          coordinates: { cx: 261.3333333333333, cy: 1018.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 11,
          ratio: 13 / 15,
          coordinates: { cx: 261.2, cy: 1024.8000000000002 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 11,
          ratio: 211 / 243,
          coordinates: { cx: 261.1604938271605, cy: 1026.716049382716 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 12,
          ratio: 7 / 8,
          coordinates: { cx: 261, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 12,
          ratio: 71 / 81,
          coordinates: { cx: 260.96296296296293, cy: 1036.2962962962963 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: c,
            row: upper1
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "G´", German: "G´" },
          number: 0,
          ratio: 1 / 81,
          coordinates: { cx: 293.9012345679012, cy: 30.37037037037037 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 1,
          ratio: 7 / 135,
          coordinates: { cx: 293.5851851851852, cy: 76.35555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 1,
          ratio: 1 / 16,
          coordinates: { cx: 293.5, cy: 88.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 2,
          ratio: 1 / 10,
          coordinates: { cx: 293.2, cy: 132.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          number: 2,
          ratio: 1 / 9,
          coordinates: { cx: 293.1111111111111, cy: 145.33333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "B♭°", German: "B°" },
          number: 3,
          ratio: 5 / 32,
          coordinates: { cx: 292.75, cy: 197.875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: bFlat,
            row: middle
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 3,
          ratio: 1 / 6,
          coordinates: { cx: 292.6666666666667, cy: 210 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 4,
          ratio: 1 / 5,
          coordinates: { cx: 292.4, cy: 248.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 4,
          ratio: 17 / 81,
          coordinates: { cx: 292.320987654321, cy: 260.2962962962963 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 5,
          ratio: 1 / 4,
          coordinates: { cx: 292, cy: 307 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 5,
          ratio: 7 / 27,
          coordinates: { cx: 291.9259259259259, cy: 317.77777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 6,
          ratio: 13 / 45,
          coordinates: { cx: 291.68888888888887, cy: 352.26666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 6,
          ratio: 19 / 64,
          coordinates: { cx: 291.625, cy: 361.5625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 7,
          ratio: 13 / 40,
          coordinates: { cx: 291.4, cy: 394.3 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            row: lower1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 7,
          ratio: 1 / 3,
          coordinates: { cx: 291.3333333333333, cy: 404 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 8,
          ratio: 149 / 405,
          coordinates: { cx: 291.0567901234568, cy: 444.23703703703706 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 8,
          ratio: 3 / 8,
          coordinates: { cx: 291, cy: 452.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 9,
          ratio: 2 / 5,
          coordinates: { cx: 290.8, cy: 481.6 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 9,
          ratio: 11 / 27,
          coordinates: { cx: 290.74074074074076, cy: 490.2222222222222 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 10,
          ratio: 7 / 16,
          coordinates: { cx: 290.5, cy: 525.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 10,
          ratio: 4 / 9,
          coordinates: { cx: 290.44444444444446, cy: 533.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 11,
          ratio: 7 / 15,
          coordinates: { cx: 290.26666666666665, cy: 559.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 11,
          ratio: 121 / 256,
          coordinates: { cx: 290.21875, cy: 566.171875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 290, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 12,
          ratio: 41 / 81,
          coordinates: { cx: 289.95061728395063, cy: 605.1851851851852 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: g,
            row: upper1
          }
        }
      ],
      [
        {
          name: { English: "G#`", German: "Gis`" },
          number: 1,
          ratio: 71 / 135,
          coordinates: { cx: 289.7925925925926, cy: 628.1777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 1,
          ratio: 17 / 32,
          coordinates: { cx: 289.75, cy: 634.375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 2,
          ratio: 11 / 20,
          coordinates: { cx: 289.6, cy: 656.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 2,
          ratio: 5 / 9,
          coordinates: { cx: 289.55555555555554, cy: 662.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "B♭°", German: "B°" },
          number: 3,
          ratio: 37 / 64,
          coordinates: { cx: 289.375, cy: 688.9375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: bFlat,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 3,
          ratio: 7 / 12,
          coordinates: { cx: 289.3333333333333, cy: 695 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 4,
          ratio: 3 / 5,
          coordinates: { cx: 289.2, cy: 714.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 4,
          ratio: 49 / 81,
          coordinates: { cx: 289.1604938271605, cy: 720.1481481481482 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 5,
          ratio: 5 / 8,
          coordinates: { cx: 289, cy: 743.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 5,
          ratio: 17 / 27,
          coordinates: { cx: 288.962962962963, cy: 748.8888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 6,
          ratio: 29 / 45,
          coordinates: { cx: 288.84444444444443, cy: 766.1333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 6,
          ratio: 83 / 128,
          coordinates: { cx: 288.8125, cy: 770.78125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 7,
          ratio: 53 / 80,
          coordinates: { cx: 288.7, cy: 787.15 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            row: lower1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 7,
          ratio: 2 / 3,
          coordinates: { cx: 288.6666666666667, cy: 792 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 8,
          ratio: 277 / 405,
          coordinates: { cx: 288.5283950617284, cy: 812.1185185185185 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 8,
          ratio: 11 / 16,
          coordinates: { cx: 288.5, cy: 816.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 9,
          ratio: 7 / 10,
          coordinates: { cx: 288.4, cy: 830.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 9,
          ratio: 19 / 27,
          coordinates: { cx: 288.3703703703704, cy: 835.1111111111111 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 10,
          ratio: 23 / 32,
          coordinates: { cx: 288.25, cy: 852.625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 10,
          ratio: 13 / 18,
          coordinates: { cx: 288.22222222222223, cy: 856.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 11,
          ratio: 11 / 15,
          coordinates: { cx: 288.1333333333333, cy: 869.5999999999999 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 11,
          ratio: 377 / 512,
          coordinates: { cx: 288.109375, cy: 873.0859375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 288, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 12,
          ratio: 61 / 81,
          coordinates: { cx: 287.9753086419753, cy: 892.5925925925926 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: g,
            row: upper1
          }
        }
      ],
      [
        {
          name: { English: "G#`", German: "Gis`" },
          number: 1,
          ratio: 103 / 135,
          coordinates: { cx: 287.89629629629627, cy: 904.0888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 1,
          ratio: 49 / 64,
          coordinates: { cx: 287.875, cy: 907.1875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 2,
          ratio: 31 / 40,
          coordinates: { cx: 287.8, cy: 918.1 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 2,
          ratio: 7 / 9,
          coordinates: { cx: 287.77777777777777, cy: 921.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "B♭°", German: "B°" },
          number: 3,
          ratio: 101 / 128,
          coordinates: { cx: 287.6875, cy: 934.46875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: bFlat,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 3,
          ratio: 19 / 24,
          coordinates: { cx: 287.6666666666667, cy: 937.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 4,
          ratio: 4 / 5,
          coordinates: { cx: 287.6, cy: 947.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 4,
          ratio: 65 / 81,
          coordinates: { cx: 287.58024691358025, cy: 950.0740740740741 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 5,
          ratio: 13 / 16,
          coordinates: { cx: 287.5, cy: 961.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 5,
          ratio: 22 / 27,
          coordinates: { cx: 287.48148148148147, cy: 964.4444444444444 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 6,
          ratio: 37 / 45,
          coordinates: { cx: 287.4222222222222, cy: 973.0666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 6,
          ratio: 211 / 256,
          coordinates: { cx: 287.40625, cy: 975.390625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 7,
          ratio: 133 / 160,
          coordinates: { cx: 287.35, cy: 983.575 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            row: lower1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 7,
          ratio: 5 / 6,
          coordinates: { cx: 287.3333333333333, cy: 986 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 8,
          ratio: 341 / 405,
          coordinates: { cx: 287.2641975308642, cy: 996.0592592592593 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 8,
          ratio: 27 / 32,
          coordinates: { cx: 287.25, cy: 998.125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 9,
          ratio: 17 / 20,
          coordinates: { cx: 287.2, cy: 1005.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 9,
          ratio: 23 / 27,
          coordinates: { cx: 287.18518518518516, cy: 1007.5555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 10,
          ratio: 55 / 64,
          coordinates: { cx: 287.125, cy: 1016.3125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 10,
          ratio: 31 / 36,
          coordinates: { cx: 287.1111111111111, cy: 1018.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 11,
          ratio: 13 / 15,
          coordinates: { cx: 287.06666666666666, cy: 1024.8000000000002 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 11,
          ratio: 889 / 1024,
          coordinates: { cx: 287.0546875, cy: 1026.54296875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 12,
          ratio: 7 / 8,
          coordinates: { cx: 287, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 12,
          ratio: 71 / 81,
          coordinates: { cx: 286.98765432098764, cy: 1036.2962962962963 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: g,
            row: upper1
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "D#`", German: "Dis`" },
          number: 1,
          ratio: 7 / 135,
          coordinates: { cx: 306.4148148148148, cy: 76.35555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 1,
          ratio: 1 / 16,
          coordinates: { cx: 306.5, cy: 88.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 2,
          ratio: 1 / 10,
          coordinates: { cx: 306.8, cy: 132.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 2,
          ratio: 1 / 9,
          coordinates: { cx: 306.8888888888889, cy: 145.33333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 3,
          ratio: 5 / 32,
          coordinates: { cx: 307.25, cy: 197.875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 3,
          ratio: 1 / 6,
          coordinates: { cx: 307.3333333333333, cy: 210 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 4,
          ratio: 1 / 5,
          coordinates: { cx: 307.6, cy: 248.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 4,
          ratio: 107 / 512,
          coordinates: { cx: 307.671875, cy: 259.2578125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 5,
          ratio: 1 / 4,
          coordinates: { cx: 308, cy: 307 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 5,
          ratio: 7 / 27,
          coordinates: { cx: 308.0740740740741, cy: 317.77777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 6,
          ratio: 13 / 45,
          coordinates: { cx: 308.31111111111113, cy: 352.26666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 6,
          ratio: 19 / 64,
          coordinates: { cx: 308.375, cy: 361.5625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 7,
          ratio: 13 / 40,
          coordinates: { cx: 308.6, cy: 394.3 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          ratio: 1 / 3,
          coordinates: { cx: 308.6666666666667, cy: 404 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "B♭°", German: "B°" },
          number: 8,
          ratio: 47 / 128,
          coordinates: { cx: 308.9375, cy: 443.40625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: bFlat,
            row: middle
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 8,
          ratio: 3 / 8,
          coordinates: { cx: 309, cy: 452.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 9,
          ratio: 2 / 5,
          coordinates: { cx: 309.2, cy: 481.6 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 9,
          ratio: 11 / 27,
          coordinates: { cx: 309.25925925925924, cy: 490.2222222222222 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 10,
          ratio: 7 / 16,
          coordinates: { cx: 309.5, cy: 525.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 10,
          ratio: 4 / 9,
          coordinates: { cx: 309.55555555555554, cy: 533.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 11,
          ratio: 7 / 15,
          coordinates: { cx: 309.73333333333335, cy: 559.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 11,
          ratio: 121 / 256,
          coordinates: { cx: 309.78125, cy: 566.171875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 12,
          ratio: 79 / 160,
          coordinates: { cx: 309.95, cy: 590.725 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: d,
            row: lower1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 310, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            row: middle
          }
        }
      ],
      [
        {
          name: { English: "D#`", German: "Dis`" },
          number: 1,
          ratio: 71 / 135,
          coordinates: { cx: 310.2074074074074, cy: 628.1777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 1,
          ratio: 17 / 32,
          coordinates: { cx: 310.25, cy: 634.375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 2,
          ratio: 11 / 20,
          coordinates: { cx: 310.4, cy: 656.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 2,
          ratio: 5 / 9,
          coordinates: { cx: 310.44444444444446, cy: 662.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 3,
          ratio: 37 / 64,
          coordinates: { cx: 310.625, cy: 688.9375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            row: lower1
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 3,
          ratio: 7 / 12,
          coordinates: { cx: 310.6666666666667, cy: 695 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 4,
          ratio: 3 / 5,
          coordinates: { cx: 310.8, cy: 714.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 4,
          ratio: 619 / 1024,
          coordinates: { cx: 310.8359375, cy: 719.62890625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 5,
          ratio: 5 / 8,
          coordinates: { cx: 311, cy: 743.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 5,
          ratio: 17 / 27,
          coordinates: { cx: 311.037037037037, cy: 748.8888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 6,
          ratio: 29 / 45,
          coordinates: { cx: 311.15555555555557, cy: 766.1333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 6,
          ratio: 83 / 128,
          coordinates: { cx: 311.1875, cy: 770.78125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 7,
          ratio: 53 / 80,
          coordinates: { cx: 311.3, cy: 787.15 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          ratio: 2 / 3,
          coordinates: { cx: 311.3333333333333, cy: 792 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "B♭°", German: "B°" },
          number: 8,
          ratio: 175 / 256,
          coordinates: { cx: 311.46875, cy: 811.703125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: bFlat,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 8,
          ratio: 11 / 16,
          coordinates: { cx: 311.5, cy: 816.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 9,
          ratio: 7 / 10,
          coordinates: { cx: 311.6, cy: 830.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 9,
          ratio: 19 / 27,
          coordinates: { cx: 311.6296296296296, cy: 835.1111111111111 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 10,
          ratio: 23 / 32,
          coordinates: { cx: 311.75, cy: 852.625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 10,
          ratio: 13 / 18,
          coordinates: { cx: 311.77777777777777, cy: 856.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 11,
          ratio: 11 / 15,
          coordinates: { cx: 311.8666666666667, cy: 869.5999999999999 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 11,
          ratio: 377 / 512,
          coordinates: { cx: 311.890625, cy: 873.0859375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 12,
          ratio: 239 / 320,
          coordinates: { cx: 311.975, cy: 885.3625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: d,
            row: lower1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 312, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            row: middle
          }
        }
      ],
      [
        {
          name: { English: "D#`", German: "Dis`" },
          number: 1,
          ratio: 103 / 135,
          coordinates: { cx: 312.10370370370373, cy: 904.0888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 1,
          ratio: 49 / 64,
          coordinates: { cx: 312.125, cy: 907.1875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 2,
          ratio: 31 / 40,
          coordinates: { cx: 312.2, cy: 918.1 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 2,
          ratio: 7 / 9,
          coordinates: { cx: 312.22222222222223, cy: 921.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 3,
          ratio: 101 / 128,
          coordinates: { cx: 312.3125, cy: 934.46875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 3,
          ratio: 19 / 24,
          coordinates: { cx: 312.3333333333333, cy: 937.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 4,
          ratio: 4 / 5,
          coordinates: { cx: 312.4, cy: 947.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 4,
          ratio: 1643 / 2048,
          coordinates: { cx: 312.41796875, cy: 949.814453125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 5,
          ratio: 13 / 16,
          coordinates: { cx: 312.5, cy: 961.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 5,
          ratio: 22 / 27,
          coordinates: { cx: 312.51851851851853, cy: 964.4444444444444 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 6,
          ratio: 37 / 45,
          coordinates: { cx: 312.5777777777778, cy: 973.0666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 6,
          ratio: 211 / 256,
          coordinates: { cx: 312.59375, cy: 975.390625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 7,
          ratio: 133 / 160,
          coordinates: { cx: 312.65, cy: 983.575 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          ratio: 5 / 6,
          coordinates: { cx: 312.6666666666667, cy: 986 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "B♭°", German: "B°" },
          number: 8,
          ratio: 431 / 512,
          coordinates: { cx: 312.734375, cy: 995.8515625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: bFlat,
            row: middle
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 8,
          ratio: 27 / 32,
          coordinates: { cx: 312.75, cy: 998.125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 9,
          ratio: 17 / 20,
          coordinates: { cx: 312.8, cy: 1005.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 9,
          ratio: 23 / 27,
          coordinates: { cx: 312.81481481481484, cy: 1007.5555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 10,
          ratio: 55 / 64,
          coordinates: { cx: 312.875, cy: 1016.3125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 10,
          ratio: 31 / 36,
          coordinates: { cx: 312.8888888888889, cy: 1018.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 11,
          ratio: 13 / 15,
          coordinates: { cx: 312.93333333333334, cy: 1024.8000000000002 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 11,
          ratio: 889 / 1024,
          coordinates: { cx: 312.9453125, cy: 1026.54296875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 12,
          ratio: 559 / 640,
          coordinates: { cx: 312.9875, cy: 1032.68125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: d,
            row: lower1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 12,
          ratio: 7 / 8,
          coordinates: { cx: 313, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            row: middle
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "B♭°", German: "B°" },
          number: 1,
          ratio: 13 / 256,
          coordinates: { cx: 319.21875, cy: 75.109375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: bFlat,
            row: middle
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 1,
          ratio: 1 / 16,
          coordinates: { cx: 319.5, cy: 88.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 2,
          ratio: 1 / 10,
          coordinates: { cx: 320.4, cy: 132.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 2,
          ratio: 1 / 9,
          coordinates: { cx: 320.6666666666667, cy: 145.33333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 3,
          ratio: 5 / 32,
          coordinates: { cx: 321.75, cy: 197.875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 3,
          ratio: 1 / 6,
          coordinates: { cx: 322, cy: 210 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 4,
          ratio: 1 / 5,
          coordinates: { cx: 322.8, cy: 248.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 4,
          ratio: 107 / 512,
          coordinates: { cx: 323.015625, cy: 259.2578125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 5,
          ratio: 77 / 320,
          coordinates: { cx: 323.775, cy: 296.08750000000003 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            row: lower1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 5,
          ratio: 1 / 4,
          coordinates: { cx: 324, cy: 307 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 6,
          ratio: 13 / 45,
          coordinates: { cx: 324.93333333333334, cy: 352.26666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 6,
          ratio: 19 / 64,
          coordinates: { cx: 325.125, cy: 361.5625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 7,
          ratio: 13 / 40,
          coordinates: { cx: 325.8, cy: 394.3 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 7,
          ratio: 1 / 3,
          coordinates: { cx: 326, cy: 404 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 8,
          ratio: 47 / 128,
          coordinates: { cx: 326.8125, cy: 443.40625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 8,
          ratio: 3 / 8,
          coordinates: { cx: 327, cy: 452.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 9,
          ratio: 2 / 5,
          coordinates: { cx: 327.6, cy: 481.6 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 9,
          ratio: 833 / 2048,
          coordinates: { cx: 327.76171875, cy: 489.443359375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 10,
          ratio: 7 / 16,
          coordinates: { cx: 328.5, cy: 525.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 10,
          ratio: 4 / 9,
          coordinates: { cx: 328.6666666666667, cy: 533.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 11,
          ratio: 7 / 15,
          coordinates: { cx: 329.2, cy: 559.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 11,
          ratio: 121 / 256,
          coordinates: { cx: 329.34375, cy: 566.171875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 12,
          ratio: 79 / 160,
          coordinates: { cx: 329.85, cy: 590.725 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 330, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            row: middle
          }
        }
      ],
      [
        {
          name: { English: "B♭°", German: "B°" },
          number: 1,
          ratio: 269 / 512,
          coordinates: { cx: 330.609375, cy: 627.5546875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: bFlat,
            row: middle
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 1,
          ratio: 17 / 32,
          coordinates: { cx: 330.75, cy: 634.375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 2,
          ratio: 11 / 20,
          coordinates: { cx: 331.2, cy: 656.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 2,
          ratio: 5 / 9,
          coordinates: { cx: 331.3333333333333, cy: 662.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 3,
          ratio: 37 / 64,
          coordinates: { cx: 331.875, cy: 688.9375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 3,
          ratio: 7 / 12,
          coordinates: { cx: 332, cy: 695 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 4,
          ratio: 3 / 5,
          coordinates: { cx: 332.4, cy: 714.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 4,
          ratio: 619 / 1024,
          coordinates: { cx: 332.5078125, cy: 719.62890625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 5,
          ratio: 397 / 640,
          coordinates: { cx: 332.8875, cy: 738.04375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            row: lower1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 5,
          ratio: 5 / 8,
          coordinates: { cx: 333, cy: 743.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 6,
          ratio: 29 / 45,
          coordinates: { cx: 333.4666666666667, cy: 766.1333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 6,
          ratio: 83 / 128,
          coordinates: { cx: 333.5625, cy: 770.78125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 7,
          ratio: 53 / 80,
          coordinates: { cx: 333.9, cy: 787.15 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 7,
          ratio: 2 / 3,
          coordinates: { cx: 334, cy: 792 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 8,
          ratio: 175 / 256,
          coordinates: { cx: 334.40625, cy: 811.703125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 8,
          ratio: 11 / 16,
          coordinates: { cx: 334.5, cy: 816.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 9,
          ratio: 7 / 10,
          coordinates: { cx: 334.8, cy: 830.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 9,
          ratio: 2881 / 4096,
          coordinates: { cx: 334.880859375, cy: 834.7216796875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 10,
          ratio: 23 / 32,
          coordinates: { cx: 335.25, cy: 852.625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 10,
          ratio: 13 / 18,
          coordinates: { cx: 335.3333333333333, cy: 856.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 11,
          ratio: 11 / 15,
          coordinates: { cx: 335.6, cy: 869.5999999999999 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 11,
          ratio: 377 / 512,
          coordinates: { cx: 335.671875, cy: 873.0859375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 12,
          ratio: 239 / 320,
          coordinates: { cx: 335.925, cy: 885.3625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 336, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            row: middle
          }
        }
      ],
      [
        {
          name: { English: "B♭°", German: "B°" },
          number: 1,
          ratio: 781 / 1024,
          coordinates: { cx: 336.3046875, cy: 903.77734375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: bFlat,
            row: middle
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 1,
          ratio: 49 / 64,
          coordinates: { cx: 336.375, cy: 907.1875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 2,
          ratio: 31 / 40,
          coordinates: { cx: 336.6, cy: 918.1 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 2,
          ratio: 7 / 9,
          coordinates: { cx: 336.6666666666667, cy: 921.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 3,
          ratio: 101 / 128,
          coordinates: { cx: 336.9375, cy: 934.46875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 3,
          ratio: 19 / 24,
          coordinates: { cx: 337, cy: 937.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 4,
          ratio: 4 / 5,
          coordinates: { cx: 337.2, cy: 947.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 4,
          ratio: 1643 / 2048,
          coordinates: { cx: 337.25390625, cy: 949.814453125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 5,
          ratio: 1037 / 1280,
          coordinates: { cx: 337.44375, cy: 959.021875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            row: lower1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 5,
          ratio: 13 / 16,
          coordinates: { cx: 337.5, cy: 961.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 6,
          ratio: 37 / 45,
          coordinates: { cx: 337.73333333333335, cy: 973.0666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 6,
          ratio: 211 / 256,
          coordinates: { cx: 337.78125, cy: 975.390625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 7,
          ratio: 133 / 160,
          coordinates: { cx: 337.95, cy: 983.575 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 7,
          ratio: 5 / 6,
          coordinates: { cx: 338, cy: 986 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 8,
          ratio: 431 / 512,
          coordinates: { cx: 338.203125, cy: 995.8515625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 8,
          ratio: 27 / 32,
          coordinates: { cx: 338.25, cy: 998.125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 9,
          ratio: 17 / 20,
          coordinates: { cx: 338.4, cy: 1005.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 9,
          ratio: 6977 / 8192,
          coordinates: { cx: 338.4404296875, cy: 1007.36083984375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 10,
          ratio: 55 / 64,
          coordinates: { cx: 338.625, cy: 1016.3125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 10,
          ratio: 31 / 36,
          coordinates: { cx: 338.6666666666667, cy: 1018.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 11,
          ratio: 13 / 15,
          coordinates: { cx: 338.8, cy: 1024.8000000000002 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 11,
          ratio: 889 / 1024,
          coordinates: { cx: 338.8359375, cy: 1026.54296875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 12,
          ratio: 559 / 640,
          coordinates: { cx: 338.9625, cy: 1032.68125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 7 / 8,
          coordinates: { cx: 339, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            row: middle
          }
        }
      ]
    ]
  ],
  Bass: [
    [
      [
        {
          name: { English: "F°", German: "F°" },
          number: 1,
          ratio: 13 / 256,
          coordinates: { cx: 280.4765625, cy: 75.109375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 1,
          ratio: 1 / 16,
          coordinates: { cx: 280.125, cy: 88.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 2,
          ratio: 1 / 10,
          coordinates: { cx: 279, cy: 132.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "F#°", German: "Fis°" },
          number: 2,
          ratio: 1 / 9,
          coordinates: { cx: 278.6666666666667, cy: 145.33333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: fSharp,
            row: middle
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 3,
          ratio: 5 / 32,
          coordinates: { cx: 277.3125, cy: 197.875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 3,
          ratio: 1 / 6,
          coordinates: { cx: 277, cy: 210 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 4,
          ratio: 1 / 5,
          coordinates: { cx: 276, cy: 248.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 4,
          ratio: 107 / 512,
          coordinates: { cx: 275.73046875, cy: 259.2578125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 5,
          ratio: 77 / 320,
          coordinates: { cx: 274.78125, cy: 296.08750000000003 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 5,
          ratio: 1 / 4,
          coordinates: { cx: 274.5, cy: 307 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "A#`", German: "Ais`" },
          number: 6,
          ratio: 13 / 45,
          coordinates: { cx: 273.3333333333333, cy: 352.26666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: aSharp,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 6,
          ratio: 19 / 64,
          coordinates: { cx: 273.09375, cy: 361.5625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 7,
          ratio: 13 / 40,
          coordinates: { cx: 272.25, cy: 394.3 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 7,
          ratio: 1 / 3,
          coordinates: { cx: 272, cy: 404 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 8,
          ratio: 47 / 128,
          coordinates: { cx: 270.984375, cy: 443.40625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 8,
          ratio: 3 / 8,
          coordinates: { cx: 270.75, cy: 452.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 9,
          ratio: 2 / 5,
          coordinates: { cx: 270, cy: 481.6 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "G´", German: "Ges´" },
          number: 9,
          ratio: 833 / 2048,
          coordinates: { cx: 269.7978515625, cy: 489.443359375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 10,
          ratio: 7 / 16,
          coordinates: { cx: 268.875, cy: 525.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D´", German: "D´" },
          number: 10,
          ratio: 4 / 9,
          coordinates: { cx: 268.6666666666667, cy: 533.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: d,
            row: upper1
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 11,
          ratio: 7 / 15,
          coordinates: { cx: 268, cy: 559.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 11,
          ratio: 121 / 256,
          coordinates: { cx: 267.8203125, cy: 566.171875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 12,
          ratio: 79 / 160,
          coordinates: { cx: 267.1875, cy: 590.725 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 267, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: e,
            row: middle
          }
        }
      ],
      [
        {
          name: { English: "F°", German: "F°" },
          number: 1,
          ratio: 269 / 512,
          coordinates: { cx: 266.23828125, cy: 627.5546875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 1,
          ratio: 17 / 32,
          coordinates: { cx: 266.0625, cy: 634.375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 2,
          ratio: 11 / 20,
          coordinates: { cx: 265.5, cy: 656.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "F#°", German: "Fis°" },
          number: 2,
          ratio: 5 / 9,
          coordinates: { cx: 265.3333333333333, cy: 662.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: fSharp,
            row: middle
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 3,
          ratio: 37 / 64,
          coordinates: { cx: 264.65625, cy: 688.9375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 3,
          ratio: 7 / 12,
          coordinates: { cx: 264.5, cy: 695 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 4,
          ratio: 3 / 5,
          coordinates: { cx: 264, cy: 714.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 4,
          ratio: 619 / 1024,
          coordinates: { cx: 263.865234375, cy: 719.62890625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 5,
          ratio: 397 / 640,
          coordinates: { cx: 263.390625, cy: 738.04375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 5,
          ratio: 5 / 8,
          coordinates: { cx: 263.25, cy: 743.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "A#`", German: "Ais`" },
          number: 6,
          ratio: 29 / 45,
          coordinates: { cx: 262.6666666666667, cy: 766.1333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: aSharp,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 6,
          ratio: 83 / 128,
          coordinates: { cx: 262.546875, cy: 770.78125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 7,
          ratio: 53 / 80,
          coordinates: { cx: 262.125, cy: 787.15 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 7,
          ratio: 2 / 3,
          coordinates: { cx: 262, cy: 792 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 8,
          ratio: 175 / 256,
          coordinates: { cx: 261.4921875, cy: 811.703125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 8,
          ratio: 11 / 16,
          coordinates: { cx: 261.375, cy: 816.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 9,
          ratio: 7 / 10,
          coordinates: { cx: 261, cy: 830.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 9,
          ratio: 2881 / 4096,
          coordinates: { cx: 260.89892578125, cy: 834.7216796875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 10,
          ratio: 23 / 32,
          coordinates: { cx: 260.4375, cy: 852.625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D´", German: "D´" },
          number: 10,
          ratio: 13 / 18,
          coordinates: { cx: 260.3333333333333, cy: 856.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: d,
            row: upper1
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 11,
          ratio: 11 / 15,
          coordinates: { cx: 260, cy: 869.5999999999999 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 11,
          ratio: 377 / 512,
          coordinates: { cx: 259.91015625, cy: 873.0859375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 12,
          ratio: 239 / 320,
          coordinates: { cx: 259.59375, cy: 885.3625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 259.5, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: e,
            row: middle
          }
        }
      ],
      [
        {
          name: { English: "F°", German: "F°" },
          number: 1,
          ratio: 781 / 1024,
          coordinates: { cx: 259.119140625, cy: 903.77734375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 1,
          ratio: 49 / 64,
          coordinates: { cx: 259.03125, cy: 907.1875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 2,
          ratio: 31 / 40,
          coordinates: { cx: 258.75, cy: 918.1 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "F#°", German: "Fis°" },
          number: 2,
          ratio: 7 / 9,
          coordinates: { cx: 258.6666666666667, cy: 921.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: fSharp,
            row: middle
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 3,
          ratio: 101 / 128,
          coordinates: { cx: 258.328125, cy: 934.46875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 3,
          ratio: 19 / 24,
          coordinates: { cx: 258.25, cy: 937.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 4,
          ratio: 4 / 5,
          coordinates: { cx: 258, cy: 947.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 4,
          ratio: 1643 / 2048,
          coordinates: { cx: 257.9326171875, cy: 949.814453125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 5,
          ratio: 1037 / 1280,
          coordinates: { cx: 257.6953125, cy: 959.021875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 5,
          ratio: 13 / 16,
          coordinates: { cx: 257.625, cy: 961.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "A#`", German: "Ais`" },
          number: 6,
          ratio: 37 / 45,
          coordinates: { cx: 257.3333333333333, cy: 973.0666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: aSharp,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 6,
          ratio: 211 / 256,
          coordinates: { cx: 257.2734375, cy: 975.390625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 7,
          ratio: 133 / 160,
          coordinates: { cx: 257.0625, cy: 983.575 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 7,
          ratio: 5 / 6,
          coordinates: { cx: 257, cy: 986 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 8,
          ratio: 431 / 512,
          coordinates: { cx: 256.74609375, cy: 995.8515625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 8,
          ratio: 27 / 32,
          coordinates: { cx: 256.6875, cy: 998.125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 9,
          ratio: 17 / 20,
          coordinates: { cx: 256.5, cy: 1005.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 9,
          ratio: 6977 / 8192,
          coordinates: { cx: 256.449462890625, cy: 1007.36083984375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 10,
          ratio: 55 / 64,
          coordinates: { cx: 256.21875, cy: 1016.3125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D´", German: "D´" },
          number: 10,
          ratio: 31 / 36,
          coordinates: { cx: 256.1666666666667, cy: 1018.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: d,
            row: upper1
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 11,
          ratio: 13 / 15,
          coordinates: { cx: 256, cy: 1024.8000000000002 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 11,
          ratio: 889 / 1024,
          coordinates: { cx: 255.955078125, cy: 1026.54296875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 12,
          ratio: 559 / 640,
          coordinates: { cx: 255.796875, cy: 1032.68125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 12,
          ratio: 7 / 8,
          coordinates: { cx: 255.75, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: e,
            row: middle
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "A#`", German: "Ais`" },
          number: 1,
          ratio: 7 / 135,
          coordinates: { cx: 293.48148148148147, cy: 76.35555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aSharp,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 1,
          ratio: 1 / 16,
          coordinates: { cx: 293.375, cy: 88.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 2,
          ratio: 1 / 10,
          coordinates: { cx: 293, cy: 132.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 2,
          ratio: 1 / 9,
          coordinates: { cx: 292.8888888888889, cy: 145.33333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 3,
          ratio: 5 / 32,
          coordinates: { cx: 292.4375, cy: 197.875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 3,
          ratio: 1 / 6,
          coordinates: { cx: 292.3333333333333, cy: 210 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 4,
          ratio: 1 / 5,
          coordinates: { cx: 292, cy: 248.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 4,
          ratio: 107 / 512,
          coordinates: { cx: 291.91015625, cy: 259.2578125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 5,
          ratio: 1 / 4,
          coordinates: { cx: 291.5, cy: 307 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D´", German: "D´" },
          number: 5,
          ratio: 7 / 27,
          coordinates: { cx: 291.4074074074074, cy: 317.77777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            row: upper1
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 6,
          ratio: 13 / 45,
          coordinates: { cx: 291.1111111111111, cy: 352.26666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 6,
          ratio: 19 / 64,
          coordinates: { cx: 291.03125, cy: 361.5625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 7,
          ratio: 13 / 40,
          coordinates: { cx: 290.75, cy: 394.3 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 7,
          ratio: 1 / 3,
          coordinates: { cx: 290.6666666666667, cy: 404 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 8,
          ratio: 47 / 128,
          coordinates: { cx: 290.328125, cy: 443.40625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 8,
          ratio: 3 / 8,
          coordinates: { cx: 290.25, cy: 452.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 9,
          ratio: 2 / 5,
          coordinates: { cx: 290, cy: 481.6 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "F#°", German: "Fis°" },
          number: 9,
          ratio: 11 / 27,
          coordinates: { cx: 289.9259259259259, cy: 490.2222222222222 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp,
            row: middle
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 10,
          ratio: 7 / 16,
          coordinates: { cx: 289.625, cy: 525.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 10,
          ratio: 4 / 9,
          coordinates: { cx: 289.55555555555554, cy: 533.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 11,
          ratio: 7 / 15,
          coordinates: { cx: 289.3333333333333, cy: 559.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 11,
          ratio: 121 / 256,
          coordinates: { cx: 289.2734375, cy: 566.171875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 12,
          ratio: 79 / 160,
          coordinates: { cx: 289.0625, cy: 590.725 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 289, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            row: middle
          }
        }
      ],
      [
        {
          name: { English: "A#`", German: "Ais`" },
          number: 1,
          ratio: 71 / 135,
          coordinates: { cx: 288.74074074074076, cy: 628.1777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aSharp,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 1,
          ratio: 17 / 32,
          coordinates: { cx: 288.6875, cy: 634.375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 2,
          ratio: 11 / 20,
          coordinates: { cx: 288.5, cy: 656.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 2,
          ratio: 5 / 9,
          coordinates: { cx: 288.44444444444446, cy: 662.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 3,
          ratio: 37 / 64,
          coordinates: { cx: 288.21875, cy: 688.9375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            row: lower1
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 3,
          ratio: 7 / 12,
          coordinates: { cx: 288.1666666666667, cy: 695 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 4,
          ratio: 3 / 5,
          coordinates: { cx: 288, cy: 714.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 4,
          ratio: 619 / 1024,
          coordinates: { cx: 287.955078125, cy: 719.62890625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 5,
          ratio: 5 / 8,
          coordinates: { cx: 287.75, cy: 743.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D´", German: "D´" },
          number: 5,
          ratio: 17 / 27,
          coordinates: { cx: 287.7037037037037, cy: 748.8888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            row: upper1
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 6,
          ratio: 29 / 45,
          coordinates: { cx: 287.55555555555554, cy: 766.1333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 6,
          ratio: 83 / 128,
          coordinates: { cx: 287.515625, cy: 770.78125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 7,
          ratio: 53 / 80,
          coordinates: { cx: 287.375, cy: 787.15 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 7,
          ratio: 2 / 3,
          coordinates: { cx: 287.3333333333333, cy: 792 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 8,
          ratio: 175 / 256,
          coordinates: { cx: 287.1640625, cy: 811.703125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            row: lower1
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 8,
          ratio: 11 / 16,
          coordinates: { cx: 287.125, cy: 816.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 9,
          ratio: 7 / 10,
          coordinates: { cx: 287, cy: 830.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "F#°", German: "Fis°" },
          number: 9,
          ratio: 19 / 27,
          coordinates: { cx: 286.962962962963, cy: 835.1111111111111 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp,
            row: middle
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 10,
          ratio: 23 / 32,
          coordinates: { cx: 286.8125, cy: 852.625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 10,
          ratio: 13 / 18,
          coordinates: { cx: 286.77777777777777, cy: 856.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 11,
          ratio: 11 / 15,
          coordinates: { cx: 286.6666666666667, cy: 869.5999999999999 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 11,
          ratio: 377 / 512,
          coordinates: { cx: 286.63671875, cy: 873.0859375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 12,
          ratio: 239 / 320,
          coordinates: { cx: 286.53125, cy: 885.3625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 286.5, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            row: middle
          }
        }
      ],
      [
        {
          name: { English: "A#`", German: "Ais`" },
          number: 1,
          ratio: 103 / 135,
          coordinates: { cx: 286.3703703703704, cy: 904.0888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aSharp,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 1,
          ratio: 49 / 64,
          coordinates: { cx: 286.34375, cy: 907.1875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 2,
          ratio: 31 / 40,
          coordinates: { cx: 286.25, cy: 918.1 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 2,
          ratio: 7 / 9,
          coordinates: { cx: 286.22222222222223, cy: 921.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 3,
          ratio: 101 / 128,
          coordinates: { cx: 286.109375, cy: 934.46875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 3,
          ratio: 19 / 24,
          coordinates: { cx: 286.0833333333333, cy: 937.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 4,
          ratio: 4 / 5,
          coordinates: { cx: 286, cy: 947.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 4,
          ratio: 1643 / 2048,
          coordinates: { cx: 285.9775390625, cy: 949.814453125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 5,
          ratio: 13 / 16,
          coordinates: { cx: 285.875, cy: 961.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D´", German: "D´" },
          number: 5,
          ratio: 22 / 27,
          coordinates: { cx: 285.85185185185185, cy: 964.4444444444444 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: d,
            row: upper1
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 6,
          ratio: 37 / 45,
          coordinates: { cx: 285.77777777777777, cy: 973.0666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 6,
          ratio: 211 / 256,
          coordinates: { cx: 285.7578125, cy: 975.390625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 7,
          ratio: 133 / 160,
          coordinates: { cx: 285.6875, cy: 983.575 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 7,
          ratio: 5 / 6,
          coordinates: { cx: 285.6666666666667, cy: 986 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 8,
          ratio: 431 / 512,
          coordinates: { cx: 285.58203125, cy: 995.8515625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 8,
          ratio: 27 / 32,
          coordinates: { cx: 285.5625, cy: 998.125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 9,
          ratio: 17 / 20,
          coordinates: { cx: 285.5, cy: 1005.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "F#°", German: "Fis°" },
          number: 9,
          ratio: 23 / 27,
          coordinates: { cx: 285.48148148148147, cy: 1007.5555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp,
            row: middle
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 10,
          ratio: 55 / 64,
          coordinates: { cx: 285.40625, cy: 1016.3125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 10,
          ratio: 31 / 36,
          coordinates: { cx: 285.3888888888889, cy: 1018.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 11,
          ratio: 13 / 15,
          coordinates: { cx: 285.3333333333333, cy: 1024.8000000000002 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 11,
          ratio: 889 / 1024,
          coordinates: { cx: 285.318359375, cy: 1026.54296875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 12,
          ratio: 559 / 640,
          coordinates: { cx: 285.265625, cy: 1032.68125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 7 / 8,
          coordinates: { cx: 285.25, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            row: middle
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "D´", German: "D´" },
          number: 0,
          ratio: 1 / 81,
          coordinates: { cx: 306.12345679012344, cy: 30.37037037037037 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: d,
            row: upper1
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 1,
          ratio: 7 / 135,
          coordinates: { cx: 306.51851851851853, cy: 76.35555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 1,
          ratio: 1 / 16,
          coordinates: { cx: 306.625, cy: 88.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 2,
          ratio: 1 / 10,
          coordinates: { cx: 307, cy: 132.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 2,
          ratio: 1 / 9,
          coordinates: { cx: 307.1111111111111, cy: 145.33333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 3,
          ratio: 5 / 32,
          coordinates: { cx: 307.5625, cy: 197.875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 3,
          ratio: 1 / 6,
          coordinates: { cx: 307.6666666666667, cy: 210 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 4,
          ratio: 1 / 5,
          coordinates: { cx: 308, cy: 248.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "F#°", German: "Fis°" },
          number: 4,
          ratio: 17 / 81,
          coordinates: { cx: 308.0987654320988, cy: 260.2962962962963 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp,
            row: middle
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 5,
          ratio: 1 / 4,
          coordinates: { cx: 308.5, cy: 307 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 5,
          ratio: 7 / 27,
          coordinates: { cx: 308.5925925925926, cy: 317.77777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 6,
          ratio: 13 / 45,
          coordinates: { cx: 308.8888888888889, cy: 352.26666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 6,
          ratio: 19 / 64,
          coordinates: { cx: 308.96875, cy: 361.5625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 7,
          ratio: 13 / 40,
          coordinates: { cx: 309.25, cy: 394.3 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          ratio: 1 / 3,
          coordinates: { cx: 309.3333333333333, cy: 404 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "A#`", German: "Ais`" },
          number: 8,
          ratio: 149 / 405,
          coordinates: { cx: 309.679012345679, cy: 444.23703703703706 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: aSharp,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 8,
          ratio: 3 / 8,
          coordinates: { cx: 309.75, cy: 452.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 9,
          ratio: 2 / 5,
          coordinates: { cx: 310, cy: 481.6 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 9,
          ratio: 11 / 27,
          coordinates: { cx: 310.0740740740741, cy: 490.2222222222222 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 10,
          ratio: 7 / 16,
          coordinates: { cx: 310.375, cy: 525.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 10,
          ratio: 4 / 9,
          coordinates: { cx: 310.44444444444446, cy: 533.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 11,
          ratio: 7 / 15,
          coordinates: { cx: 310.6666666666667, cy: 559.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 11,
          ratio: 121 / 256,
          coordinates: { cx: 310.7265625, cy: 566.171875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 311, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D´", German: "D´" },
          number: 12,
          ratio: 41 / 81,
          coordinates: { cx: 311.0617283950617, cy: 605.1851851851852 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: d,
            row: upper1
          }
        }
      ],
      [
        {
          name: { English: "D#`", German: "Dis`" },
          number: 1,
          ratio: 71 / 135,
          coordinates: { cx: 311.25925925925924, cy: 628.1777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 1,
          ratio: 17 / 32,
          coordinates: { cx: 311.3125, cy: 634.375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 2,
          ratio: 11 / 20,
          coordinates: { cx: 311.5, cy: 656.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 2,
          ratio: 5 / 9,
          coordinates: { cx: 311.55555555555554, cy: 662.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 3,
          ratio: 37 / 64,
          coordinates: { cx: 311.78125, cy: 688.9375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            row: lower1
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 3,
          ratio: 7 / 12,
          coordinates: { cx: 311.8333333333333, cy: 695 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 4,
          ratio: 3 / 5,
          coordinates: { cx: 312, cy: 714.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "F#°", German: "Fis°" },
          number: 4,
          ratio: 49 / 81,
          coordinates: { cx: 312.04938271604937, cy: 720.1481481481482 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp,
            row: middle
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 5,
          ratio: 5 / 8,
          coordinates: { cx: 312.25, cy: 743.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 5,
          ratio: 17 / 27,
          coordinates: { cx: 312.2962962962963, cy: 748.8888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 6,
          ratio: 29 / 45,
          coordinates: { cx: 312.44444444444446, cy: 766.1333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 6,
          ratio: 83 / 128,
          coordinates: { cx: 312.484375, cy: 770.78125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 7,
          ratio: 53 / 80,
          coordinates: { cx: 312.625, cy: 787.15 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          ratio: 2 / 3,
          coordinates: { cx: 312.6666666666667, cy: 792 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "A#`", German: "Ais`" },
          number: 8,
          ratio: 277 / 405,
          coordinates: { cx: 312.8395061728395, cy: 812.1185185185185 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: aSharp,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 8,
          ratio: 11 / 16,
          coordinates: { cx: 312.875, cy: 816.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 9,
          ratio: 7 / 10,
          coordinates: { cx: 313, cy: 830.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 9,
          ratio: 19 / 27,
          coordinates: { cx: 313.037037037037, cy: 835.1111111111111 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 10,
          ratio: 23 / 32,
          coordinates: { cx: 313.1875, cy: 852.625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 10,
          ratio: 13 / 18,
          coordinates: { cx: 313.22222222222223, cy: 856.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 11,
          ratio: 11 / 15,
          coordinates: { cx: 313.3333333333333, cy: 869.5999999999999 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 11,
          ratio: 377 / 512,
          coordinates: { cx: 313.36328125, cy: 873.0859375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 313.5, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D´", German: "D´" },
          number: 12,
          ratio: 61 / 81,
          coordinates: { cx: 313.5308641975309, cy: 892.5925925925926 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: d,
            row: upper1
          }
        }
      ],
      [
        {
          name: { English: "D#`", German: "Dis`" },
          number: 1,
          ratio: 103 / 135,
          coordinates: { cx: 313.6296296296296, cy: 904.0888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 1,
          ratio: 49 / 64,
          coordinates: { cx: 313.65625, cy: 907.1875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 2,
          ratio: 31 / 40,
          coordinates: { cx: 313.75, cy: 918.1 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 2,
          ratio: 7 / 9,
          coordinates: { cx: 313.77777777777777, cy: 921.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 3,
          ratio: 101 / 128,
          coordinates: { cx: 313.890625, cy: 934.46875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            row: lower1
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 3,
          ratio: 19 / 24,
          coordinates: { cx: 313.9166666666667, cy: 937.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 4,
          ratio: 4 / 5,
          coordinates: { cx: 314, cy: 947.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "F#°", German: "Fis°" },
          number: 4,
          ratio: 65 / 81,
          coordinates: { cx: 314.0246913580247, cy: 950.0740740740741 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: fSharp,
            row: middle
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 5,
          ratio: 13 / 16,
          coordinates: { cx: 314.125, cy: 961.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 5,
          ratio: 22 / 27,
          coordinates: { cx: 314.14814814814815, cy: 964.4444444444444 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 6,
          ratio: 37 / 45,
          coordinates: { cx: 314.22222222222223, cy: 973.0666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 6,
          ratio: 211 / 256,
          coordinates: { cx: 314.2421875, cy: 975.390625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 7,
          ratio: 133 / 160,
          coordinates: { cx: 314.3125, cy: 983.575 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          ratio: 5 / 6,
          coordinates: { cx: 314.3333333333333, cy: 986 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "A#`", German: "Ais`" },
          number: 8,
          ratio: 341 / 405,
          coordinates: { cx: 314.41975308641975, cy: 996.0592592592593 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: aSharp,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 8,
          ratio: 27 / 32,
          coordinates: { cx: 314.4375, cy: 998.125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 9,
          ratio: 17 / 20,
          coordinates: { cx: 314.5, cy: 1005.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 9,
          ratio: 23 / 27,
          coordinates: { cx: 314.51851851851853, cy: 1007.5555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 10,
          ratio: 55 / 64,
          coordinates: { cx: 314.59375, cy: 1016.3125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 10,
          ratio: 31 / 36,
          coordinates: { cx: 314.6111111111111, cy: 1018.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 11,
          ratio: 13 / 15,
          coordinates: { cx: 314.6666666666667, cy: 1024.8000000000002 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 11,
          ratio: 889 / 1024,
          coordinates: { cx: 314.681640625, cy: 1026.54296875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 12,
          ratio: 7 / 8,
          coordinates: { cx: 314.75, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D´", German: "D´" },
          number: 12,
          ratio: 71 / 81,
          coordinates: { cx: 314.7654320987654, cy: 1036.2962962962963 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: d,
            row: upper1
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "G´", German: "G´" },
          number: 0,
          ratio: 1 / 81,
          coordinates: { cx: 318.3703703703704, cy: 30.37037037037037 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: g,
            row: upper1
          }
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 1,
          ratio: 7 / 135,
          coordinates: { cx: 319.55555555555554, cy: 76.35555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 1,
          ratio: 1 / 16,
          coordinates: { cx: 319.875, cy: 88.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 2,
          ratio: 1 / 10,
          coordinates: { cx: 321, cy: 132.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          number: 2,
          ratio: 1 / 9,
          coordinates: { cx: 321.3333333333333, cy: 145.33333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "A#`", German: "Ais`" },
          number: 3,
          ratio: 191 / 1215,
          coordinates: { cx: 322.71604938271605, cy: 198.9827160493827 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: aSharp,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 3,
          ratio: 1 / 6,
          coordinates: { cx: 323, cy: 210 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 4,
          ratio: 1 / 5,
          coordinates: { cx: 324, cy: 248.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 4,
          ratio: 17 / 81,
          coordinates: { cx: 324.2962962962963, cy: 260.2962962962963 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 5,
          ratio: 1 / 4,
          coordinates: { cx: 325.5, cy: 307 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 5,
          ratio: 7 / 27,
          coordinates: { cx: 325.77777777777777, cy: 317.77777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 6,
          ratio: 13 / 45,
          coordinates: { cx: 326.6666666666667, cy: 352.26666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 6,
          ratio: 19 / 64,
          coordinates: { cx: 326.90625, cy: 361.5625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 7,
          ratio: 1 / 3,
          coordinates: { cx: 328, cy: 404 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D´", German: "D´" },
          number: 7,
          ratio: 83 / 243,
          coordinates: { cx: 328.24691358024694, cy: 413.58024691358025 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            row: upper1
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 8,
          ratio: 149 / 405,
          coordinates: { cx: 329.03703703703707, cy: 444.23703703703706 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 8,
          ratio: 3 / 8,
          coordinates: { cx: 329.25, cy: 452.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 9,
          ratio: 2 / 5,
          coordinates: { cx: 330, cy: 481.6 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 9,
          ratio: 11 / 27,
          coordinates: { cx: 330.22222222222223, cy: 490.2222222222222 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 10,
          ratio: 7 / 16,
          coordinates: { cx: 331.125, cy: 525.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 10,
          ratio: 4 / 9,
          coordinates: { cx: 331.3333333333333, cy: 533.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 11,
          ratio: 7 / 15,
          coordinates: { cx: 332, cy: 559.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "F#°", German: "Fis°" },
          number: 11,
          ratio: 115 / 243,
          coordinates: { cx: 332.1975308641975, cy: 566.8641975308642 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp,
            row: middle
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 333, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 12,
          ratio: 41 / 81,
          coordinates: { cx: 333.18518518518516, cy: 605.1851851851852 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: g,
            row: upper1
          }
        }
      ],
      [
        {
          name: { English: "G#`", German: "Gis`" },
          number: 1,
          ratio: 71 / 135,
          coordinates: { cx: 333.77777777777777, cy: 628.1777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 1,
          ratio: 17 / 32,
          coordinates: { cx: 333.9375, cy: 634.375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 2,
          ratio: 11 / 20,
          coordinates: { cx: 334.5, cy: 656.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          number: 2,
          ratio: 5 / 9,
          coordinates: { cx: 334.6666666666667, cy: 662.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "A#`", German: "Ais`" },
          number: 3,
          ratio: 703 / 1215,
          coordinates: { cx: 335.358024691358, cy: 689.4913580246914 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: aSharp,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 3,
          ratio: 7 / 12,
          coordinates: { cx: 335.5, cy: 695 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 4,
          ratio: 3 / 5,
          coordinates: { cx: 336, cy: 714.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 4,
          ratio: 49 / 81,
          coordinates: { cx: 336.14814814814815, cy: 720.1481481481482 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 5,
          ratio: 5 / 8,
          coordinates: { cx: 336.75, cy: 743.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 5,
          ratio: 17 / 27,
          coordinates: { cx: 336.8888888888889, cy: 748.8888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 6,
          ratio: 29 / 45,
          coordinates: { cx: 337.3333333333333, cy: 766.1333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 6,
          ratio: 83 / 128,
          coordinates: { cx: 337.453125, cy: 770.78125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 7,
          ratio: 2 / 3,
          coordinates: { cx: 338, cy: 792 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D´", German: "D´" },
          number: 7,
          ratio: 163 / 243,
          coordinates: { cx: 338.12345679012344, cy: 796.7901234567902 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            row: upper1
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 8,
          ratio: 277 / 405,
          coordinates: { cx: 338.51851851851853, cy: 812.1185185185185 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 8,
          ratio: 11 / 16,
          coordinates: { cx: 338.625, cy: 816.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 9,
          ratio: 7 / 10,
          coordinates: { cx: 339, cy: 830.8 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 9,
          ratio: 19 / 27,
          coordinates: { cx: 339.1111111111111, cy: 835.1111111111111 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 10,
          ratio: 23 / 32,
          coordinates: { cx: 339.5625, cy: 852.625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 10,
          ratio: 13 / 18,
          coordinates: { cx: 339.6666666666667, cy: 856.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 11,
          ratio: 11 / 15,
          coordinates: { cx: 340, cy: 869.5999999999999 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "F#°", German: "Fis°" },
          number: 11,
          ratio: 179 / 243,
          coordinates: { cx: 340.0987654320988, cy: 873.4320987654321 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp,
            row: middle
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 340.5, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 12,
          ratio: 61 / 81,
          coordinates: { cx: 340.5925925925926, cy: 892.5925925925926 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: g,
            row: upper1
          }
        }
      ],
      [
        {
          name: { English: "G#`", German: "Gis`" },
          number: 1,
          ratio: 103 / 135,
          coordinates: { cx: 340.8888888888889, cy: 904.0888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 1,
          ratio: 49 / 64,
          coordinates: { cx: 340.96875, cy: 907.1875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 2,
          ratio: 31 / 40,
          coordinates: { cx: 341.25, cy: 918.1 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          number: 2,
          ratio: 7 / 9,
          coordinates: { cx: 341.3333333333333, cy: 921.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret2,
            name: a,
            row: middle
          }
        },
        {
          name: { English: "A#`", German: "Ais`" },
          number: 3,
          ratio: 959 / 1215,
          coordinates: { cx: 341.679012345679, cy: 934.7456790123457 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: aSharp,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 3,
          ratio: 19 / 24,
          coordinates: { cx: 341.75, cy: 937.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 4,
          ratio: 4 / 5,
          coordinates: { cx: 342, cy: 947.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            row: lower1
          }
        },
        {
          name: { English: "B°", German: "H°" },
          number: 4,
          ratio: 65 / 81,
          coordinates: { cx: 342.0740740740741, cy: 950.0740740740741 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret4,
            name: b,
            row: middle
          }
        },
        {
          name: { English: "C°", German: "C°" },
          number: 5,
          ratio: 13 / 16,
          coordinates: { cx: 342.375, cy: 961.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            row: middle
          }
        },
        {
          name: { English: "C´", German: "C´" },
          number: 5,
          ratio: 22 / 27,
          coordinates: { cx: 342.44444444444446, cy: 964.4444444444444 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: c,
            row: upper1
          }
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 6,
          ratio: 37 / 45,
          coordinates: { cx: 342.6666666666667, cy: 973.0666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 6,
          ratio: 211 / 256,
          coordinates: { cx: 342.7265625, cy: 975.390625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D°", German: "D°" },
          number: 7,
          ratio: 5 / 6,
          coordinates: { cx: 343, cy: 986 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            row: middle
          }
        },
        {
          name: { English: "D´", German: "D´" },
          number: 7,
          ratio: 203 / 243,
          coordinates: { cx: 343.0617283950617, cy: 988.395061728395 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: d,
            row: upper1
          }
        },
        {
          name: { English: "D#`", German: "Dis`" },
          number: 8,
          ratio: 341 / 405,
          coordinates: { cx: 343.25925925925924, cy: 996.0592592592593 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 8,
          ratio: 27 / 32,
          coordinates: { cx: 343.3125, cy: 998.125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 9,
          ratio: 17 / 20,
          coordinates: { cx: 343.5, cy: 1005.4 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            row: lower1
          }
        },
        {
          name: { English: "E°", German: "E°" },
          number: 9,
          ratio: 23 / 27,
          coordinates: { cx: 343.55555555555554, cy: 1007.5555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: e,
            row: middle
          }
        },
        {
          name: { English: "F°", German: "F°" },
          number: 10,
          ratio: 55 / 64,
          coordinates: { cx: 343.78125, cy: 1016.3125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            row: middle
          }
        },
        {
          name: { English: "F´", German: "F´" },
          number: 10,
          ratio: 31 / 36,
          coordinates: { cx: 343.8333333333333, cy: 1018.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: f,
            row: upper1
          }
        },
        {
          name: { English: "F#`", German: "Fis`" },
          number: 11,
          ratio: 13 / 15,
          coordinates: { cx: 344, cy: 1024.8000000000002 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp,
            row: lower1
          }
        },
        {
          name: { English: "F#°", German: "Fis°" },
          number: 11,
          ratio: 211 / 243,
          coordinates: { cx: 344.04938271604937, cy: 1026.716049382716 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp,
            row: middle
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 12,
          ratio: 7 / 8,
          coordinates: { cx: 344.25, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            row: middle
          }
        },
        {
          name: { English: "G´", German: "G´" },
          number: 12,
          ratio: 71 / 81,
          coordinates: { cx: 344.2962962962963, cy: 1036.2962962962963 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: g,
            row: upper1
          }
        }
      ]
    ]
  ]
}
