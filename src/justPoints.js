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
  b
} = justPointsColors

const vectors = {
  Violin: [
    { vectorX: -30, vectorY: 1164, originX: 270, originY: 16 },
    { vectorX: -10, vectorY: 1164, originX: 290, originY: 16 },
    { vectorX: 10, vectorY: 1164, originX: 310, originY: 16 },
    { vectorX: 30, vectorY: 1164, originX: 330, originY: 16 }
  ],
  Viola: [
    { vectorX: -30, vectorY: 1164, originX: 270, originY: 16 },
    { vectorX: -10, vectorY: 1164, originX: 290, originY: 16 },
    { vectorX: 10, vectorY: 1164, originX: 310, originY: 16 },
    { vectorX: 30, vectorY: 1164, originX: 330, originY: 16 }
  ],
  Cello: [
    { vectorX: -24, vectorY: 1164, originX: 282, originY: 16 },
    { vectorX: -8, vectorY: 1164, originX: 294, originY: 16 },
    { vectorX: 8, vectorY: 1164, originX: 306, originY: 16 },
    { vectorX: 24, vectorY: 1164, originX: 318, originY: 16 }
  ],
  Bass: [
    { vectorX: -30, vectorY: 1164, originX: 282, originY: 16 },
    { vectorX: -10, vectorY: 1164, originX: 294, originY: 16 },
    { vectorX: 10, vectorY: 1164, originX: 306, originY: 16 },
    { vectorX: 30, vectorY: 1164, originX: 318, originY: 16 }
  ]
}

const justRatiosString = [
  [
    "1 / 81",
    "7 / 135",
    "1 / 16",
    "1 / 10",
    "1 / 9",
    "191 / 1215",
    "1 / 6",
    "1 / 5",
    "17 / 81",
    "1 / 4",
    "7 / 27",
    "13 / 45",
    "19 / 64",
    "1 / 3",
    "83 / 243",
    "149 / 405",
    "3 / 8",
    "2 / 5",
    "11 / 27",
    "7 / 16",
    "4 / 9",
    "7 / 15",
    "115 / 243",
    "1 / 2",
    "41 / 81",
    "71 / 135",
    "17 / 32",
    "11 / 20",
    "5 / 9",
    "703 / 1215",
    "7 / 12",
    "3 / 5",
    "49 / 81",
    "5 / 8",
    "17 / 27",
    "29 / 45",
    "83 / 128",
    "2 / 3",
    "163 / 243",
    "277 / 405",
    "11 / 16",
    "7 / 10",
    "19 / 27",
    "23 / 32",
    "13 / 18",
    "11 / 15",
    "179 / 243",
    "3 / 4",
    "61 / 81",
    "103 / 135",
    "49 / 64",
    "31 / 40",
    "7 / 9",
    "959 / 1215",
    "19 / 24",
    "4 / 5",
    "65 / 81",
    "13 / 16",
    "22 / 27",
    "37 / 45",
    "211 / 256",
    "5 / 6",
    "203 / 243",
    "341 / 405",
    "27 / 32",
    "17 / 20",
    "23 / 27",
    "55 / 64",
    "31 / 36",
    "13 / 15",
    "211 / 243",
    "7 / 8"
  ],
  [
    "1 / 81",
    "7 / 135",
    "1 / 16",
    "1 / 10",
    "1 / 9",
    "5 / 32",
    "1 / 6",
    "1 / 5",
    "17 / 81",
    "1 / 4",
    "7 / 27",
    "13 / 45",
    "19 / 64",
    "13 / 40",
    "1 / 3",
    "149 / 405",
    "3 / 8",
    "2 / 5",
    "11 / 27",
    "7 / 16",
    "4 / 9",
    "7 / 15",
    "121 / 256",
    "1 / 2",
    "41 / 81",
    "71 / 135",
    "17 / 32",
    "11 / 20",
    "5 / 9",
    "37 / 64",
    "7 / 12",
    "3 / 5",
    "49 / 81",
    "5 / 8",
    "17 / 27",
    "29 / 45",
    "83 / 128",
    "53 / 80",
    "2 / 3",
    "277 / 405",
    "11 / 16",
    "7 / 10",
    "19 / 27",
    "23 / 32",
    "13 / 18",
    "11 / 15",
    "377 / 512",
    "3 / 4"
  ]
]

const justRatios = [
  [
    1 / 81,
    7 / 135,
    1 / 16,
    1 / 10,
    1 / 9,
    191 / 1215,
    1 / 6,
    1 / 5,
    17 / 81,
    1 / 4,
    7 / 27,
    13 / 45,
    19 / 64,
    1 / 3,
    83 / 243,
    149 / 405,
    3 / 8,
    2 / 5,
    11 / 27,
    7 / 16,
    4 / 9,
    7 / 15,
    115 / 243,
    1 / 2,
    41 / 81,
    71 / 135,
    17 / 32,
    11 / 20,
    5 / 9,
    703 / 1215,
    7 / 12,
    3 / 5,
    49 / 81,
    5 / 8,
    17 / 27,
    29 / 45,
    83 / 128,
    2 / 3,
    163 / 243,
    277 / 405,
    11 / 16,
    7 / 10,
    19 / 27,
    23 / 32,
    13 / 18,
    11 / 15,
    179 / 243,
    3 / 4,
    61 / 81,
    103 / 135,
    49 / 64,
    31 / 40,
    7 / 9,
    959 / 1215,
    19 / 24,
    4 / 5,
    65 / 81,
    13 / 16,
    22 / 27,
    37 / 45,
    211 / 256,
    5 / 6,
    203 / 243,
    341 / 405,
    27 / 32,
    17 / 20,
    23 / 27,
    55 / 64,
    31 / 36,
    13 / 15,
    211 / 243,
    7 / 8
  ],
  [
    1 / 81,
    7 / 135,
    1 / 16,
    1 / 10,
    1 / 9,
    5 / 32,
    1 / 6,
    1 / 5,
    17 / 81,
    1 / 4,
    7 / 27,
    13 / 45,
    19 / 64,
    13 / 40,
    1 / 3,
    149 / 405,
    3 / 8,
    2 / 5,
    11 / 27,
    7 / 16,
    4 / 9,
    7 / 15,
    121 / 256,
    1 / 2,
    41 / 81,
    71 / 135,
    17 / 32,
    11 / 20,
    5 / 9,
    37 / 64,
    7 / 12,
    3 / 5,
    49 / 81,
    5 / 8,
    17 / 27,
    29 / 45,
    83 / 128,
    53 / 80,
    2 / 3,
    277 / 405,
    11 / 16,
    7 / 10,
    19 / 27,
    23 / 32,
    13 / 18,
    11 / 15,
    377 / 512,
    3 / 4
  ],
  [
    7 / 135,
    1 / 16,
    1 / 10,
    1 / 9,
    5 / 32,
    1 / 6,
    1 / 5,
    107 / 512,
    1 / 4,
    7 / 27,
    13 / 45,
    19 / 64,
    13 / 40,
    1 / 3,
    47 / 128,
    3 / 8,
    2 / 5,
    11 / 27,
    7 / 16,
    4 / 9,
    7 / 15,
    121 / 256,
    79 / 160,
    1 / 2,
    71 / 135,
    17 / 32,
    11 / 20,
    5 / 9,
    37 / 64,
    7 / 12,
    3 / 5,
    619 / 1024,
    5 / 8,
    17 / 27,
    29 / 45,
    83 / 128,
    53 / 80,
    2 / 3,
    175 / 256,
    11 / 16,
    7 / 10,
    19 / 27,
    23 / 32,
    13 / 18,
    11 / 15,
    377 / 512,
    239 / 320,
    3 / 4
  ],
  [
    13 / 256,
    1 / 16,
    1 / 10,
    1 / 9,
    5 / 32,
    1 / 6,
    1 / 5,
    107 / 512,
    77 / 320,
    1 / 4,
    13 / 45,
    19 / 64,
    13 / 40,
    1 / 3,
    47 / 128,
    3 / 8,
    2 / 5,
    833 / 2048,
    7 / 16,
    4 / 9,
    7 / 15,
    121 / 256,
    79 / 160,
    1 / 2,
    269 / 512,
    17 / 32,
    11 / 20,
    5 / 9,
    37 / 64,
    7 / 12,
    3 / 5,
    619 / 1024,
    397 / 640,
    5 / 8,
    29 / 45,
    83 / 128,
    53 / 80,
    2 / 3,
    175 / 256,
    11 / 16,
    7 / 10,
    2881 / 4096,
    23 / 32,
    13 / 18,
    11 / 15,
    377 / 512,
    239 / 320,
    3 / 4
  ]
]

let cyOfAllStrings = []
cyOfAllStrings = calculateCyOfAllStrings()
function calculateCyOfAllStrings() {
  justRatios.map((string, index) => {
    string.map((ratio, index2) => {
      let cy = ratio * vectors.Violin[0].vectorY + vectors.Violin[0].originY
      cyOfAllStrings.push(cy)
      console.log(
        `String: ${index + 1} | Ratio: ${justRatiosString[index2]} | cy: ${cy}`
      )
    })
  })
  return cyOfAllStrings
}
console.log(cyOfAllStrings)

// export const justPoints = {}

export const justPoints = {
  Cello: [
    [
      [
        {
          name: { English: "C´", German: "C´" },
          number: 0,
          ratio: 1 / 81,
          coordinates: { cx: 270, cy: 30.37037037037037 },
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
          ratio: 1 / 81,
          coordinates: { cx: 270, cy: 76.35555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: cSharp_dFlat,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 1,
          ratio: 1 / 16,
          coordinates: { cx: 270, cy: 88.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: cSharp_dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 2,
          ratio: 1 / 10,
          coordinates: { cx: 270, cy: 132.4 },
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
          coordinates: { cx: 270, cy: 145.33333333333333 },
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
          coordinates: { cx: 270, cy: 198.9827160493827 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: dSharp_eFlat,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 3,
          ratio: 1 / 6,
          coordinates: { cx: 270, cy: 210 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: dSharp_eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 4,
          ratio: 1 / 5,
          coordinates: { cx: 270, cy: 248.8 },
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
          coordinates: { cx: 270, cy: 260.2962962962963 },
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
          coordinates: { cx: 270, cy: 307 },
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
          coordinates: { cx: 270, cy: 317.77777777777777 },
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
          coordinates: { cx: 270, cy: 352.26666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: fSharp_gFlat,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 6,
          ratio: 19 / 64,
          coordinates: { cx: 270, cy: 361.5625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: fSharp_gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 7,
          ratio: 1 / 3,
          coordinates: { cx: 270, cy: 404 },
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
          coordinates: { cx: 270, cy: 413.58024691358025 },
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
          coordinates: { cx: 270, cy: 444.23703703703706 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: gSharp_aFlat,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 8,
          ratio: 3 / 8,
          coordinates: { cx: 270, cy: 452.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: gSharp_aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 9,
          ratio: 2 / 5,
          coordinates: { cx: 270, cy: 481.6 },
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
          coordinates: { cx: 270, cy: 490.2222222222222 },
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
          coordinates: { cx: 270, cy: 525.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: aSharp_bFlat,
            row: middle
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 10,
          ratio: 4 / 9,
          coordinates: { cx: 270, cy: 533.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: aSharp_bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 11,
          ratio: 7 / 15,
          coordinates: { cx: 270, cy: 559.2 },
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
          coordinates: { cx: 270, cy: 566.8641975308642 },
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
        }
      ],
      [
        {
          name: { English: "C´", German: "C´" },
          number: 12,
          ratio: 41 / 81,
          coordinates: { cx: 270, cy: 605.1851851851852 },
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
          ratio: 71 / 135,
          coordinates: { cx: 270, cy: 628.1777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: cSharp_dFlat,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 1,
          ratio: 17 / 32,
          coordinates: { cx: 270, cy: 634.375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: cSharp_dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 2,
          ratio: 11 / 20,
          coordinates: { cx: 270, cy: 656.2 },
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
          coordinates: { cx: 270, cy: 662.6666666666666 },
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
          coordinates: { cx: 270, cy: 689.4913580246914 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: dSharp_eFlat,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 3,
          ratio: 7 / 12,
          coordinates: { cx: 270, cy: 695 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: dSharp_eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 4,
          ratio: 3 / 5,
          coordinates: { cx: 270, cy: 714.4 },
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
          coordinates: { cx: 270, cy: 720.1481481481482 },
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
          coordinates: { cx: 270, cy: 743.5 },
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
          coordinates: { cx: 270, cy: 748.8888888888888 },
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
          coordinates: { cx: 270, cy: 766.1333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: fSharp_gFlat,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 6,
          ratio: 83 / 128,
          coordinates: { cx: 270, cy: 770.78125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: fSharp_gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 7,
          ratio: 2 / 3,
          coordinates: { cx: 270, cy: 792 },
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
          coordinates: { cx: 270, cy: 796.7901234567902 },
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
          coordinates: { cx: 270, cy: 812.1185185185185 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: gSharp_aFlat,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 8,
          ratio: 11 / 16,
          coordinates: { cx: 270, cy: 816.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: gSharp_aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 9,
          ratio: 7 / 10,
          coordinates: { cx: 270, cy: 830.8 },
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
          coordinates: { cx: 270, cy: 835.1111111111111 },
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
          coordinates: { cx: 270, cy: 852.625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: aSharp_bFlat,
            row: middle
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 10,
          ratio: 13 / 18,
          coordinates: { cx: 270, cy: 856.6666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: aSharp_bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 11,
          ratio: 11 / 15,
          coordinates: { cx: 270, cy: 869.5999999999999 },
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
          coordinates: { cx: 270, cy: 873.4320987654321 },
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
          coordinates: { cx: 270, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: c,
            row: middle
          }
        }
      ],
      [
        {
          name: { English: "C´", German: "C´" },
          number: 12,
          ratio: 61 / 81,
          coordinates: { cx: 270, cy: 892.5925925925926 },
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
          ratio: 103 / 135,
          coordinates: { cx: 270, cy: 904.0888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: cSharp_dFlat,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 1,
          ratio: 49 / 64,
          coordinates: { cx: 270, cy: 907.1875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: cSharp_dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 2,
          ratio: 31 / 40,
          coordinates: { cx: 270, cy: 918.1 },
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
          coordinates: { cx: 270, cy: 921.3333333333333 },
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
          coordinates: { cx: 270, cy: 934.7456790123457 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: dSharp_eFlat,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 3,
          ratio: 19 / 24,
          coordinates: { cx: 270, cy: 937.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: dSharp_eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 4,
          ratio: 4 / 5,
          coordinates: { cx: 270, cy: 947.2 },
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
          coordinates: { cx: 270, cy: 950.0740740740741 },
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
          coordinates: { cx: 270, cy: 961.75 },
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
          coordinates: { cx: 270, cy: 964.4444444444444 },
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
          coordinates: { cx: 270, cy: 973.0666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: fSharp_gFlat,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 6,
          ratio: 211 / 256,
          coordinates: { cx: 270, cy: 975.390625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: fSharp_gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 7,
          ratio: 5 / 6,
          coordinates: { cx: 270, cy: 986 },
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
          coordinates: { cx: 270, cy: 988.395061728395 },
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
          coordinates: { cx: 270, cy: 996.0592592592593 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: gSharp_aFlat,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 8,
          ratio: 27 / 32,
          coordinates: { cx: 270, cy: 998.125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: gSharp_aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 9,
          ratio: 17 / 20,
          coordinates: { cx: 270, cy: 1005.4 },
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
          coordinates: { cx: 270, cy: 1007.5555555555555 },
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
          coordinates: { cx: 270, cy: 1016.3125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: aSharp_bFlat,
            row: middle
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 10,
          ratio: 31 / 36,
          coordinates: { cx: 270, cy: 1018.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: aSharp_bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 11,
          ratio: 13 / 15,
          coordinates: { cx: 270, cy: 1024.8000000000002 },
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
          coordinates: { cx: 270, cy: 1026.716049382716 },
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
          coordinates: { cx: 270, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: c,
            row: middle
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
          coordinates: { cx: 270, cy: 30.37037037037037 },
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
          coordinates: { cx: 270, cy: 76.35555555555555 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp_aFlat,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 1,
          ratio: 1 / 16,
          coordinates: { cx: 270, cy: 88.75 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp_aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 2,
          ratio: 1 / 10,
          coordinates: { cx: 270, cy: 132.4 },
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
          coordinates: { cx: 270, cy: 145.33333333333333 },
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
          coordinates: { cx: 270, cy: 197.875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: aSharp_bFlat,
            row: middle
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 3,
          ratio: 1 / 6,
          coordinates: { cx: 270, cy: 210 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: aSharp_bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 4,
          ratio: 1 / 5,
          coordinates: { cx: 270, cy: 248.8 },
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
          coordinates: { cx: 270, cy: 260.2962962962963 },
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
          coordinates: { cx: 270, cy: 307 },
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
          coordinates: { cx: 270, cy: 317.77777777777777 },
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
          coordinates: { cx: 270, cy: 352.26666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp_dFlat,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 6,
          ratio: 19 / 64,
          coordinates: { cx: 270, cy: 361.5625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp_dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 7,
          ratio: 13 / 40,
          coordinates: { cx: 270, cy: 394.3 },
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
          coordinates: { cx: 270, cy: 404 },
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
          coordinates: { cx: 270, cy: 444.23703703703706 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp_eFlat,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 8,
          ratio: 3 / 8,
          coordinates: { cx: 270, cy: 452.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp_eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 9,
          ratio: 2 / 5,
          coordinates: { cx: 270, cy: 481.6 },
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
          coordinates: { cx: 270, cy: 490.2222222222222 },
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
          coordinates: { cx: 270, cy: 525.25 },
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
          coordinates: { cx: 270, cy: 533.3333333333333 },
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
          coordinates: { cx: 270, cy: 559.2 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp_gFlat,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 11,
          ratio: 121 / 256,
          coordinates: { cx: 270, cy: 566.171875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp_gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 270, cy: 598 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            row: middle
          }
        }
      ],
      [
        {
          name: { English: "G´", German: "G´" },
          number: 12,
          ratio: 41 / 81,
          coordinates: { cx: 270, cy: 605.1851851851852 },
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
          ratio: 71 / 135,
          coordinates: { cx: 270, cy: 628.1777777777777 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp_aFlat,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 1,
          ratio: 17 / 32,
          coordinates: { cx: 270, cy: 634.375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: gSharp_aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 2,
          ratio: 11 / 20,
          coordinates: { cx: 270, cy: 656.2 },
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
          coordinates: { cx: 270, cy: 662.6666666666666 },
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
          coordinates: { cx: 270, cy: 688.9375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: aSharp_bFlat,
            row: lower1
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 3,
          ratio: 7 / 12,
          coordinates: { cx: 270, cy: 695 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: aSharp_bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 4,
          ratio: 3 / 5,
          coordinates: { cx: 270, cy: 714.4 },
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
          coordinates: { cx: 270, cy: 720.1481481481482 },
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
          coordinates: { cx: 270, cy: 743.5 },
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
          coordinates: { cx: 270, cy: 748.8888888888888 },
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
          coordinates: { cx: 270, cy: 766.1333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp_dFlat,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 6,
          ratio: 83 / 128,
          coordinates: { cx: 270, cy: 770.78125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: cSharp_dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 7,
          ratio: 53 / 80,
          coordinates: { cx: 270, cy: 787.15 },
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
          coordinates: { cx: 270, cy: 792 },
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
          coordinates: { cx: 270, cy: 812.1185185185185 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp_eFlat,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 8,
          ratio: 11 / 16,
          coordinates: { cx: 270, cy: 816.25 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: dSharp_eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 9,
          ratio: 7 / 10,
          coordinates: { cx: 270, cy: 830.8 },
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
          coordinates: { cx: 270, cy: 835.1111111111111 },
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
          coordinates: { cx: 270, cy: 852.625 },
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
          coordinates: { cx: 270, cy: 856.6666666666666 },
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
          coordinates: { cx: 270, cy: 869.5999999999999 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp_gFlat,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 11,
          ratio: 377 / 512,
          coordinates: { cx: 270, cy: 873.0859375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret11,
            name: fSharp_gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 270, cy: 889 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            row: middle
          }
        }
      ],
      [
        {
          name: { English: "C´", German: "C´" },
          number: 12,
          ratio: 61 / 81,
          coordinates: { cx: 270, cy: 892.5925925925926 },
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
          ratio: 103 / 135,
          coordinates: { cx: 270, cy: 904.0888888888888 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: cSharp_dFlat,
            row: lower1
          }
        },
        {
          name: { English: "D♭´", German: "Des´" },
          number: 1,
          ratio: 49 / 64,
          coordinates: { cx: 270, cy: 907.1875 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret1,
            name: cSharp_dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 2,
          ratio: 31 / 40,
          coordinates: { cx: 270, cy: 918.1 },
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
          coordinates: { cx: 270, cy: 921.3333333333333 },
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
          coordinates: { cx: 270, cy: 934.7456790123457 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: dSharp_eFlat,
            row: lower1
          }
        },
        {
          name: { English: "E♭´", German: "Es´" },
          number: 3,
          ratio: 19 / 24,
          coordinates: { cx: 270, cy: 937.5 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret3,
            name: dSharp_eFlat,
            row: upper1
          }
        },
        {
          name: { English: "E`", German: "E`" },
          number: 4,
          ratio: 4 / 5,
          coordinates: { cx: 270, cy: 947.2 },
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
          coordinates: { cx: 270, cy: 950.0740740740741 },
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
          coordinates: { cx: 270, cy: 961.75 },
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
          coordinates: { cx: 270, cy: 964.4444444444444 },
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
          coordinates: { cx: 270, cy: 973.0666666666666 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: fSharp_gFlat,
            row: lower1
          }
        },
        {
          name: { English: "G♭´", German: "Ges´" },
          number: 6,
          ratio: 211 / 256,
          coordinates: { cx: 270, cy: 975.390625 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret6,
            name: fSharp_gFlat,
            row: upper1
          }
        },
        {
          name: { English: "G°", German: "G°" },
          number: 7,
          ratio: 5 / 6,
          coordinates: { cx: 270, cy: 986 },
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
          coordinates: { cx: 270, cy: 988.395061728395 },
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
          coordinates: { cx: 270, cy: 996.0592592592593 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: gSharp_aFlat,
            row: lower1
          }
        },
        {
          name: { English: "A♭´", German: "As´" },
          number: 8,
          ratio: 27 / 32,
          coordinates: { cx: 270, cy: 998.125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret8,
            name: gSharp_aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 9,
          ratio: 17 / 20,
          coordinates: { cx: 270, cy: 1005.4 },
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
          coordinates: { cx: 270, cy: 1007.5555555555555 },
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
          coordinates: { cx: 270, cy: 1016.3125 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: aSharp_bFlat,
            row: middle
          }
        },
        {
          name: { English: "B♭´", German: "B´" },
          number: 10,
          ratio: 31 / 36,
          coordinates: { cx: 270, cy: 1018.3333333333333 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret10,
            name: aSharp_bFlat,
            row: upper1
          }
        },
        {
          name: { English: "B`", German: "H`" },
          number: 11,
          ratio: 13 / 15,
          coordinates: { cx: 270, cy: 1024.8000000000002 },
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
          coordinates: { cx: 270, cy: 1026.716049382716 },
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
          coordinates: { cx: 270, cy: 1034.5 },
          colors: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: c,
            row: middle
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "D", German: "D" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 310, cy: 598 },
          colors: {
            uni: uni,
            tone: d4,
            fret: fret12,
            name: d,
            div: div2
          }
        }
      ],
      [
        {
          name: { English: "A", German: "A" },
          number: 7,
          cents: "+2",
          ratio: 1 / 3,
          coordinates: { cx: 308.6666666666666, cy: 404 },
          colors: {
            uni: uni,
            tone: a4,
            fret: fret7,
            name: a,
            div: div3
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          cents: "+2",
          ratio: 2 / 3,
          coordinates: { cx: 311.3333333333333, cy: 792 },
          colors: {
            uni: uni,
            tone: a4,
            fret: fret7,
            name: a,
            div: div3
          }
        }
      ],
      [
        {
          name: { English: "F#", German: "Fis" },
          number: 4,
          cents: "-14",
          ratio: 1 / 5,
          coordinates: { cx: 307.6, cy: 248.8 },
          colors: {
            uni: uni,
            tone: fSharp5,
            fret: fret4,
            name: fSharp,
            div: div5
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          number: 9,
          cents: "-16",
          ratio: 2 / 5,
          coordinates: { cx: 309.2, cy: 481.6 },
          colors: {
            uni: uni,
            tone: fSharp5,
            fret: fret9,
            name: fSharp,
            div: div5
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          number: 4,
          cents: "-14",
          ratio: 3 / 5,
          coordinates: { cx: 310.8, cy: 714.4 },
          colors: {
            uni: uni,
            tone: fSharp5,
            fret: fret4,
            name: fSharp,
            div: div5
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          number: 4,
          cents: "-14",
          ratio: 4 / 5,
          coordinates: { cx: 312.4, cy: 947.2 },
          colors: {
            uni: uni,
            tone: fSharp5,
            fret: fret4,
            name: fSharp,
            div: div5
          }
        }
      ],
      [
        {
          name: { English: "D", German: "D" },
          number: 5,
          cents: "-2",
          ratio: 1 / 4,
          coordinates: { cx: 308, cy: 307 },
          colors: {
            uni: uni,
            tone: d5,
            fret: fret5,
            name: d,
            div: div4
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 310, cy: 598 },
          colors: {
            uni: uni,
            tone: d4,
            fret: fret12,
            name: d,
            div: div2
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 312, cy: 889 },
          colors: {
            uni: uni,
            tone: d5,
            fret: fret12,
            name: d,
            div: div4
          }
        }
      ],
      [
        {
          name: { English: "A", German: "A" },
          number: 3,
          cents: "+16",
          ratio: 1 / 6,
          coordinates: { cx: 307.3333333333333, cy: 210 },
          colors: {
            uni: uni,
            tone: a5,
            fret: fret3,
            name: a,
            div: div6
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          cents: "+2",
          ratio: 1 / 3,
          coordinates: { cx: 308.6666666666666, cy: 404 },
          colors: {
            uni: uni,
            tone: a4,
            fret: fret7,
            name: a,
            div: div3
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 310, cy: 598 },
          colors: {
            uni: uni,
            tone: d4,
            fret: fret12,
            name: d,
            div: div2
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          cents: "+2",
          ratio: 2 / 3,
          coordinates: { cx: 311.3333333333333, cy: 792 },
          colors: {
            uni: uni,
            tone: a4,
            fret: fret7,
            name: a,
            div: div3
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          cents: "+2",
          ratio: 5 / 6,
          coordinates: { cx: 312.6666666666666, cy: 986 },
          colors: {
            uni: uni,
            tone: a5,
            fret: fret7,
            name: a,
            div: div6
          }
        }
      ],
      [
        {
          name: { English: "F#", German: "Fis" },
          number: 2,
          cents: "-18",
          ratio: 1 / 10,
          coordinates: { cx: 306.8, cy: 132.4 },
          colors: {
            uni: uni,
            tone: fSharp6,
            fret: fret2,
            name: fSharp,
            div: div10
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          number: 4,
          cents: "-14",
          ratio: 1 / 5,
          coordinates: { cx: 307.6, cy: 248.8 },
          colors: {
            uni: uni,
            tone: fSharp5,
            fret: fret4,
            name: fSharp,
            div: div5
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          number: 6,
          cents: "+17",
          ratio: 3 / 10,
          coordinates: { cx: 308.4, cy: 365.2 },
          colors: {
            uni: uni,
            tone: fSharp6,
            fret: fret6,
            name: fSharp,
            div: div10
          }
        },

        {
          name: { English: "F#", German: "Fis" },
          number: 9,
          cents: "-16",
          ratio: 2 / 5,
          coordinates: { cx: 309.2, cy: 481.6 },
          colors: {
            uni: uni,
            tone: fSharp5,
            fret: fret9,
            name: fSharp,
            div: div5
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 310, cy: 598 },
          colors: {
            uni: uni,
            tone: d4,
            fret: fret12,
            name: d,
            div: div2
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          number: 4,
          cents: "-14",
          ratio: 3 / 5,
          coordinates: { cx: 310.8, cy: 714.4 },
          colors: {
            uni: uni,
            tone: fSharp5,
            fret: fret4,
            name: fSharp,
            div: div5
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          number: 9,
          cents: "-16",
          ratio: 7 / 10,
          coordinates: { cx: 311.6, cy: 830.8 },
          colors: {
            uni: uni,
            tone: fSharp6,
            fret: fret9,
            name: fSharp,
            div: div10
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          number: 4,
          cents: "-14",
          ratio: 4 / 5,
          coordinates: { cx: 312.4, cy: 947.2 },
          colors: {
            uni: uni,
            tone: fSharp5,
            fret: fret4,
            name: fSharp,
            div: div5
          }
        },
        {
          name: { English: "F#", German: "Fis" },
          number: 4,
          cents: "-14",
          ratio: 9 / 10,
          coordinates: { cx: 313.2, cy: 1063.6 },
          colors: {
            uni: uni,
            tone: fSharp6,
            fret: fret4,
            name: fSharp,
            div: div10
          }
        }
      ],
      [
        {
          name: { English: "D", German: "D" },
          number: 2,
          cents: "+31",
          ratio: 1 / 8,
          coordinates: { cx: 307, cy: 161.5 },
          colors: {
            uni: uni,
            tone: d6,
            fret: fret2,
            name: d,
            div: div8
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 5,
          cents: "-2",
          ratio: 1 / 4,
          coordinates: { cx: 308, cy: 307 },
          colors: {
            uni: uni,
            tone: d5,
            fret: fret5,
            name: d,
            div: div4
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 8,
          cents: "+14",
          ratio: 3 / 8,
          coordinates: { cx: 309, cy: 452.5 },
          colors: {
            uni: uni,
            tone: d6,
            fret: fret8,
            name: d,
            div: div8
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 310, cy: 598 },
          colors: {
            uni: uni,
            tone: d4,
            fret: fret12,
            name: d,
            div: div2
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 5,
          cents: "-2",
          ratio: 5 / 8,
          coordinates: { cx: 311, cy: 743.5 },
          colors: {
            uni: uni,
            tone: d6,
            fret: fret5,
            name: d,
            div: div8
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 312, cy: 889 },
          colors: {
            uni: uni,
            tone: d5,
            fret: fret12,
            name: d,
            div: div4
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 12,
          ratio: 7 / 8,
          coordinates: { cx: 313, cy: 1034.5 },
          colors: {
            uni: uni,
            tone: d6,
            fret: fret12,
            name: d,
            div: div8
          }
        }
      ],
      [
        {
          name: { English: "E", German: "E" },
          number: 2,
          cents: "+4",
          ratio: 1 / 9,
          coordinates: { cx: 306.8888888888888, cy: 145.33333333333333 },
          colors: {
            uni: uni,
            tone: e6,
            fret: fret2,
            name: e,
            div: div9
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 4,
          cents: "+35",
          ratio: 2 / 9,
          coordinates: { cx: 307.77777777777777, cy: 274.66666666666666 },
          colors: {
            uni: uni,
            tone: e6,
            fret: fret4,
            name: e,
            div: div9
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          cents: "+2",
          ratio: 1 / 3,
          coordinates: { cx: 308.6666666666666, cy: 404 },
          colors: {
            uni: uni,
            tone: a4,
            fret: fret7,
            name: a,
            div: div3
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 10,
          cents: "+18",
          ratio: 4 / 9,
          coordinates: { cx: 309.55555555555555, cy: 533.3333333333333 },
          colors: {
            uni: uni,
            tone: e6,
            fret: fret10,
            name: e,
            div: div9
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 2,
          cents: "+4",
          ratio: 5 / 9,
          coordinates: { cx: 310.44444444444444, cy: 662.6666666666667 },
          colors: {
            uni: uni,
            tone: e6,
            fret: fret2,
            name: e,
            div: div9
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 7,
          cents: "+2",
          ratio: 2 / 3,
          coordinates: { cx: 311.3333333333333, cy: 792 },
          colors: {
            uni: uni,
            tone: a4,
            fret: fret7,
            name: a,
            div: div3
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 2,
          cents: "+4",
          ratio: 7 / 9,
          coordinates: { cx: 312.22222222222222, cy: 921.3333333333333 },
          colors: {
            uni: uni,
            tone: e6,
            fret: fret2,
            name: e,
            div: div9
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 2,
          cents: "+4",
          ratio: 8 / 9,
          coordinates: { cx: 313.1111111111111, cy: 1050.6666666666667 },
          colors: {
            uni: uni,
            tone: e6,
            fret: fret2,
            name: e,
            div: div9
          }
        }
      ],
      [
        {
          name: { English: "C", German: "C" },
          number: 3,
          cents: "-33",
          ratio: 1 / 7,
          coordinates: { cx: 307.14285714285717, cy: 182.28571428571428 },
          colors: {
            uni: uni,
            tone: c6,
            fret: fret3,
            name: c,
            div: div7
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 6,
          cents: "-17",
          ratio: 2 / 7,
          coordinates: { cx: 308.2857142857143, cy: 348.57142857142856 },
          colors: {
            uni: uni,
            tone: c6,
            fret: fret6,
            name: c,
            div: div7
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 10,
          cents: "-31",
          ratio: 3 / 7,
          coordinates: { cx: 309.42857142857144, cy: 514.8571428571429 },
          colors: {
            uni: uni,
            tone: c6,
            fret: fret10,
            name: c,
            div: div7
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 3,
          cents: "-33",
          ratio: 4 / 7,
          coordinates: { cx: 310.57142857142856, cy: 681.1428571428571 },
          colors: {
            uni: uni,
            tone: c6,
            fret: fret3,
            name: c,
            div: div7
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 10,
          cents: "-31",
          ratio: 5 / 7,
          coordinates: { cx: 311.7142857142857, cy: 847.4285714285714 },
          colors: {
            uni: uni,
            tone: c6,
            fret: fret10,
            name: c,
            div: div7
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 10,
          cents: "-31",
          ratio: 6 / 7,
          coordinates: { cx: 312.85714285714283, cy: 1013.7142857142857 },
          colors: {
            uni: uni,
            tone: c6,
            fret: fret10,
            name: c,
            div: div7
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 330, cy: 598 },
          colors: {
            uni: uni,
            tone: a4,
            fret: fret12,
            name: a,
            div: div2
          }
        }
      ],
      [
        {
          name: { English: "E", German: "E" },
          number: 7,
          cents: "+2",
          ratio: 1 / 3,
          coordinates: { cx: 326, cy: 404 },
          colors: {
            uni: uni,
            tone: e5,
            fret: fret7,
            name: e,
            div: div3
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 7,
          cents: "+2",
          ratio: 2 / 3,
          coordinates: { cx: 334, cy: 792 },
          colors: {
            uni: uni,
            tone: e5,
            fret: fret7,
            name: e,
            div: div3
          }
        }
      ],
      [
        {
          name: { English: "C#", German: "Cis" },
          number: 4,
          cents: "-14",
          ratio: 1 / 5,
          coordinates: { cx: 322.8, cy: 248.8 },
          colors: {
            uni: uni,
            tone: cSharp6,
            fret: fret4,
            name: cSharp,
            div: div5
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          number: 9,
          cents: "-16",
          ratio: 2 / 5,
          coordinates: { cx: 327.6, cy: 481.6 },
          colors: {
            uni: uni,
            tone: cSharp6,
            fret: fret9,
            name: cSharp,
            div: div5
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          number: 4,
          cents: "-14",
          ratio: 3 / 5,
          coordinates: { cx: 332.4, cy: 714.4 },
          colors: {
            uni: uni,
            tone: cSharp6,
            fret: fret4,
            name: cSharp,
            div: div5
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          number: 4,
          cents: "-14",
          ratio: 4 / 5,
          coordinates: { cx: 337.2, cy: 947.2 },
          colors: {
            uni: uni,
            tone: cSharp6,
            fret: fret4,
            name: cSharp,
            div: div5
          }
        }
      ],
      [
        {
          name: { English: "A", German: "A" },
          number: 5,
          cents: "-2",
          ratio: 1 / 4,
          coordinates: { cx: 324, cy: 307 },
          colors: {
            uni: uni,
            tone: a5,
            fret: fret5,
            name: a,
            div: div4
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 330, cy: 598 },
          colors: {
            uni: uni,
            tone: a4,
            fret: fret12,
            name: a,
            div: div2
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 336, cy: 889 },
          colors: {
            uni: uni,
            tone: a5,
            fret: fret12,
            name: a,
            div: div4
          }
        }
      ],
      [
        {
          name: { English: "E", German: "E" },
          number: 3,
          cents: "+16",
          ratio: 1 / 6,
          coordinates: { cx: 322, cy: 210 },
          colors: {
            uni: uni,
            tone: e6,
            fret: fret3,
            name: e,
            div: div6
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 7,
          cents: "+2",
          ratio: 1 / 3,
          coordinates: { cx: 326, cy: 404 },
          colors: {
            uni: uni,
            tone: e5,
            fret: fret7,
            name: e,
            div: div3
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 330, cy: 598 },
          colors: {
            uni: uni,
            tone: a4,
            fret: fret12,
            name: a,
            div: div2
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 7,
          cents: "+2",
          ratio: 2 / 3,
          coordinates: { cx: 334, cy: 792 },
          colors: {
            uni: uni,
            tone: e5,
            fret: fret7,
            name: e,
            div: div3
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 7,
          cents: "+2",
          ratio: 5 / 6,
          coordinates: { cx: 338, cy: 986 },
          colors: {
            uni: uni,
            tone: e6,
            fret: fret7,
            name: e,
            div: div6
          }
        }
      ],
      [
        {
          name: { English: "C#", German: "Cis" },
          number: 2,
          cents: "-18",
          ratio: 1 / 10,
          coordinates: { cx: 320.4, cy: 132.4 },
          colors: {
            uni: uni,
            tone: cSharp7,
            fret: fret2,
            name: cSharp,
            div: div10
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          number: 4,
          cents: "-14",
          ratio: 1 / 5,
          coordinates: { cx: 322.8, cy: 248.8 },
          colors: {
            uni: uni,
            tone: cSharp6,
            fret: fret4,
            name: cSharp,
            div: div5
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          number: 6,
          cents: "+17",
          ratio: 3 / 10,
          coordinates: { cx: 325.2, cy: 365.2 },
          colors: {
            uni: uni,
            tone: cSharp7,
            fret: fret6,
            name: cSharp,
            div: div10
          }
        },

        {
          name: { English: "C#", German: "Cis" },
          number: 9,
          cents: "-16",
          ratio: 2 / 5,
          coordinates: { cx: 327.6, cy: 481.6 },
          colors: {
            uni: uni,
            tone: cSharp6,
            fret: fret9,
            name: cSharp,
            div: div5
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 330, cy: 598 },
          colors: {
            uni: uni,
            tone: a4,
            fret: fret12,
            name: a,
            div: div2
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          number: 4,
          cents: "-14",
          ratio: 3 / 5,
          coordinates: { cx: 332.4, cy: 714.4 },
          colors: {
            uni: uni,
            tone: cSharp6,
            fret: fret4,
            name: cSharp,
            div: div5
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          number: 9,
          cents: "-16",
          ratio: 7 / 10,
          coordinates: { cx: 334.8, cy: 830.8 },
          colors: {
            uni: uni,
            tone: cSharp7,
            fret: fret9,
            name: cSharp,
            div: div10
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          number: 4,
          cents: "-14",
          ratio: 4 / 5,
          coordinates: { cx: 337.2, cy: 947.2 },
          colors: {
            uni: uni,
            tone: cSharp6,
            fret: fret4,
            name: cSharp,
            div: div5
          }
        },
        {
          name: { English: "C#", German: "Cis" },
          number: 4,
          cents: "-14",
          ratio: 9 / 10,
          coordinates: { cx: 339.6, cy: 1063.6 },
          colors: {
            uni: uni,
            tone: cSharp7,
            fret: fret4,
            name: cSharp,
            div: div10
          }
        }
      ],
      [
        {
          name: { English: "A", German: "A" },
          number: 2,
          cents: "+31",
          ratio: 1 / 8,
          coordinates: { cx: 321, cy: 161.5 },
          colors: {
            uni: uni,
            tone: a6,
            fret: fret2,
            name: a,
            div: div8
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 5,
          cents: "-2",
          ratio: 1 / 4,
          coordinates: { cx: 324, cy: 307 },
          colors: {
            uni: uni,
            tone: a5,
            fret: fret5,
            name: a,
            div: div4
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 8,
          cents: "+14",
          ratio: 3 / 8,
          coordinates: { cx: 327, cy: 452.5 },
          colors: {
            uni: uni,
            tone: a6,
            fret: fret8,
            name: a,
            div: div8
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 330, cy: 598 },
          colors: {
            uni: uni,
            tone: a4,
            fret: fret12,
            name: a,
            div: div2
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 5,
          cents: "-2",
          ratio: 5 / 8,
          coordinates: { cx: 333, cy: 743.5 },
          colors: {
            uni: uni,
            tone: a6,
            fret: fret5,
            name: a,
            div: div8
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 336, cy: 889 },
          colors: {
            uni: uni,
            tone: a5,
            fret: fret12,
            name: a,
            div: div4
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 12,
          ratio: 7 / 8,
          coordinates: { cx: 339, cy: 1034.5 },
          colors: {
            uni: uni,
            tone: a6,
            fret: fret12,
            name: a,
            div: div8
          }
        }
      ],
      [
        {
          name: { English: "B", German: "H" },
          number: 2,
          cents: "+4",
          ratio: 1 / 9,
          coordinates: { cx: 320.6666666666666, cy: 145.33333333333333 },
          colors: {
            uni: uni,
            tone: b6,
            fret: fret2,
            name: b,
            div: div9
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 4,
          cents: "+35",
          ratio: 2 / 9,
          coordinates: { cx: 323.3333333333333, cy: 274.66666666666666 },
          colors: {
            uni: uni,
            tone: b6,
            fret: fret4,
            name: b,
            div: div9
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 7,
          cents: "+2",
          ratio: 1 / 3,
          coordinates: { cx: 326, cy: 404 },
          colors: {
            uni: uni,
            tone: e5,
            fret: fret7,
            name: e,
            div: div3
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 10,
          cents: "+18",
          ratio: 4 / 9,
          coordinates: { cx: 328.6666666666666, cy: 533.3333333333333 },
          colors: {
            uni: uni,
            tone: b6,
            fret: fret10,
            name: b,
            div: div9
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 2,
          cents: "+4",
          ratio: 5 / 9,
          coordinates: { cx: 331.3333333333333, cy: 662.6666666666667 },
          colors: {
            uni: uni,
            tone: b6,
            fret: fret2,
            name: b,
            div: div9
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 7,
          cents: "+2",
          ratio: 2 / 3,
          coordinates: { cx: 334, cy: 792 },
          colors: {
            uni: uni,
            tone: e5,
            fret: fret7,
            name: e,
            div: div3
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 2,
          cents: "+4",
          ratio: 7 / 9,
          coordinates: { cx: 336.6666666666666, cy: 921.3333333333333 },
          colors: {
            uni: uni,
            tone: b6,
            fret: fret2,
            name: b,
            div: div9
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 2,
          cents: "+4",
          ratio: 8 / 9,
          coordinates: { cx: 339.3333333333333, cy: 1050.6666666666667 },
          colors: {
            uni: uni,
            tone: b6,
            fret: fret2,
            name: b,
            div: div9
          }
        }
      ],
      [
        {
          name: { English: "G", German: "G" },
          number: 3,
          cents: "-33",
          ratio: 1 / 7,
          coordinates: { cx: 321.42857142857144, cy: 182.28571428571428 },
          colors: {
            uni: uni,
            tone: g6,
            fret: fret3,
            name: g,
            div: div7
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 6,
          cents: "-17",
          ratio: 2 / 7,
          coordinates: { cx: 324.85714285714283, cy: 348.57142857142856 },
          colors: {
            uni: uni,
            tone: g6,
            fret: fret6,
            name: g,
            div: div7
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 10,
          cents: "-31",
          ratio: 3 / 7,
          coordinates: { cx: 328.2857142857143, cy: 514.8571428571429 },
          colors: {
            uni: uni,
            tone: g6,
            fret: fret10,
            name: g,
            div: div7
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 3,
          cents: "-33",
          ratio: 4 / 7,
          coordinates: { cx: 331.7142857142857, cy: 681.1428571428571 },
          colors: {
            uni: uni,
            tone: g6,
            fret: fret3,
            name: g,
            div: div7
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 10,
          cents: "-31",
          ratio: 5 / 7,
          coordinates: { cx: 335.14285714285717, cy: 847.4285714285714 },
          colors: {
            uni: uni,
            tone: g6,
            fret: fret10,
            name: g,
            div: div7
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 10,
          cents: "-31",
          ratio: 6 / 7,
          coordinates: { cx: 338.57142857142856, cy: 1013.7142857142857 },
          colors: {
            uni: uni,
            tone: g6,
            fret: fret10,
            name: g,
            div: div7
          }
        }
      ]
    ]
  ]
}
