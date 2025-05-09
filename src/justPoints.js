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
    "3 / 4",
    "61 / 81",
    "103 / 135",
    "49 / 64",
    "31 / 40",
    "7 / 9",
    "101 / 128",
    "19 / 24",
    "4 / 5",
    "65 / 81",
    "13 / 16",
    "22 / 27",
    "37 / 45",
    "211 / 256",
    "133 / 160",
    "5 / 6",
    "341 / 405",
    "27 / 32",
    "17 / 20",
    "23 / 27",
    "55 / 64",
    "31 / 36",
    "13 / 15",
    "889 / 1024",
    "7 / 8"
  ],
  [
    "7 / 135",
    "1 / 16",
    "1 / 10",
    "1 / 9",
    "5 / 32",
    "1 / 6",
    "1 / 5",
    "107 / 512",
    "1 / 4",
    "7 / 27",
    "13 / 45",
    "19 / 64",
    "13 / 40",
    "1 / 3",
    "47 / 128",
    "3 / 8",
    "2 / 5",
    "11 / 27",
    "7 / 16",
    "4 / 9",
    "7 / 15",
    "121 / 256",
    "79 / 160",
    "1 / 2",
    "71 / 135",
    "17 / 32",
    "11 / 20",
    "5 / 9",
    "37 / 64",
    "7 / 12",
    "3 / 5",
    "619 / 1024",
    "5 / 8",
    "17 / 27",
    "29 / 45",
    "83 / 128",
    "53 / 80",
    "2 / 3",
    "175 / 256",
    "11 / 16",
    "7 / 10",
    "19 / 27",
    "23 / 32",
    "13 / 18",
    "11 / 15",
    "377 / 512",
    "239 / 320",
    "3 / 4",
    "103 / 135",
    "49 / 64",
    "31 / 40",
    "7 / 9",
    "101 / 128",
    "19 / 24",
    "4 / 5",
    "1643 / 2048",
    "13 / 16",
    "22 / 27",
    "37 / 45",
    "211 / 256",
    "133 / 160",
    "5 / 6",
    "431 / 512",
    "27 / 32",
    "17 / 20",
    "23 / 27",
    "55 / 64",
    "31 / 36",
    "13 / 15",
    "889 / 1024",
    "559 / 640",
    "7 / 8"
  ],
  [
    "13 / 256",
    "1 / 16",
    "1 / 10",
    "1 / 9",
    "5 / 32",
    "1 / 6",
    "1 / 5",
    "107 / 512",
    "77 / 320",
    "1 / 4",
    "13 / 45",
    "19 / 64",
    "13 / 40",
    "1 / 3",
    "47 / 128",
    "3 / 8",
    "2 / 5",
    "833 / 2048",
    "7 / 16",
    "4 / 9",
    "7 / 15",
    "121 / 256",
    "79 / 160",
    "1 / 2",
    "269 / 512",
    "17 / 32",
    "11 / 20",
    "5 / 9",
    "37 / 64",
    "7 / 12",
    "3 / 5",
    "619 / 1024",
    "397 / 640",
    "5 / 8",
    "29 / 45",
    "83 / 128",
    "53 / 80",
    "2 / 3",
    "175 / 256",
    "11 / 16",
    "7 / 10",
    "2881 / 4096",
    "23 / 32",
    "13 / 18",
    "11 / 15",
    "377 / 512",
    "239 / 320",
    "3 / 4",
    "781 / 1024",
    "49 / 64",
    "31 / 40",
    "7 / 9",
    "101 / 128",
    "19 / 24",
    "4 / 5",
    "1643 / 2048",
    "1037 / 1280",
    "13 / 16",
    "37 / 45",
    "211 / 256",
    "133 / 160",
    "5 / 6",
    "431 / 512",
    "27 / 32",
    "17 / 20",
    "6977 / 8192",
    "55 / 64",
    "31 / 36",
    "13 / 15",
    "889 / 1024",
    "559 / 640",
    "7 / 8"
  ]
]

// for (let i = 0; i < justRatiosString[0].length; i++) {
//   console.log(`${justRatiosString[0][i]} | ${justRatiosString[1][i]}`)
// }

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
    3 / 4,
    61 / 81,
    103 / 135,
    49 / 64,
    31 / 40,
    7 / 9,
    101 / 128,
    19 / 24,
    4 / 5,
    65 / 81,
    13 / 16,
    22 / 27,
    37 / 45,
    211 / 256,
    133 / 160,
    5 / 6,
    341 / 405,
    27 / 32,
    17 / 20,
    23 / 27,
    55 / 64,
    31 / 36,
    13 / 15,
    889 / 1024,
    7 / 8
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
    3 / 4,
    103 / 135,
    49 / 64,
    31 / 40,
    7 / 9,
    101 / 128,
    19 / 24,
    4 / 5,
    1643 / 2048,
    13 / 16,
    22 / 27,
    37 / 45,
    211 / 256,
    133 / 160,
    5 / 6,
    431 / 512,
    27 / 32,
    17 / 20,
    23 / 27,
    55 / 64,
    31 / 36,
    13 / 15,
    889 / 1024,
    559 / 640,
    7 / 8
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
    3 / 4,
    781 / 1024,
    49 / 64,
    31 / 40,
    7 / 9,
    101 / 128,
    19 / 24,
    4 / 5,
    1643 / 2048,
    1037 / 1280,
    13 / 16,
    37 / 45,
    211 / 256,
    133 / 160,
    5 / 6,
    431 / 512,
    27 / 32,
    17 / 20,
    6977 / 8192,
    55 / 64,
    31 / 36,
    13 / 15,
    889 / 1024,
    559 / 640,
    7 / 8
  ]
]

// let cyOfAllStrings = []
// cyOfAllStrings = calculateCyOfAllStrings()
// function calculateCyOfAllStrings() {
//   justRatios.map((string, index) => {
//     string.map((ratio, index2) => {
//       let cy = ratio * vectors.Violin[0].vectorY + vectors.Violin[0].originY
//       cyOfAllStrings.push(cy)
//       console.log(
//         `String: ${index + 1} | Ratio: ${
//           justRatiosString[index][index2]
//         } | cy: ${cy}`
//       )
//     })
//   })
//   return cyOfAllStrings
// }
// console.log(cyOfAllStrings)

// let cxOfCelloCString = []
// cxOfCelloCString = calculateCxOfCelloCString()
// function calculateCxOfCelloCString() {
//   justRatios[0].map((ratio, index) => {
//     let cx = ratio * vectors.Cello[0].vectorX + vectors.Cello[0].originX
//     console.log(`Ratio: ${justRatiosString[0][index]} | cx: ${cx}`)
//     cxOfCelloCString.push(cx)
//   })
//   return cxOfCelloCString
// }

// let cxOfCelloGString = []
// cxOfCelloGString = calculateCxOfCelloGString()
// function calculateCxOfCelloGString() {
//   justRatios[1].map((ratio, index) => {
//     let cx = ratio * vectors.Cello[1].vectorX + vectors.Cello[1].originX
//     console.log(`Ratio: ${justRatiosString[1][index]} | cx: ${cx}`)
//     cxOfCelloGString.push(cx)
//   })
//   return cxOfCelloGString
// }

// let cxOfCelloDString = []
// cxOfCelloDString = calculateCxOfCelloDString()
// function calculateCxOfCelloDString() {
//   justRatios[2].map((ratio, index) => {
//     let cx = ratio * vectors.Cello[2].vectorX + vectors.Cello[2].originX
//     console.log(`Ratio: ${justRatiosString[2][index]} | cx: ${cx}`)
//     cxOfCelloDString.push(cx)
//   })
//   return cxOfCelloDString
// }

let cxOfCelloAString = []
cxOfCelloAString = calculateCxOfCelloAString()
function calculateCxOfCelloAString() {
  justRatios[3].map((ratio, index) => {
    let cx = ratio * vectors.Cello[3].vectorX + vectors.Cello[3].originX
    // console.log(`Ratio: ${justRatiosString[3][index]} | cx: ${cx}`)
    cxOfCelloAString.push(cx)
  })
  return cxOfCelloAString
}

export const justPoints = {
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
            name: cSharp_dFlat,
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
            name: cSharp_dFlat,
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
            name: dSharp_eFlat,
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
            name: dSharp_eFlat,
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
            name: fSharp_gFlat,
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
            name: fSharp_gFlat,
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
            name: gSharp_aFlat,
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
            name: gSharp_aFlat,
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
            name: aSharp_bFlat,
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
            name: aSharp_bFlat,
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
        }
      ],
      [
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
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 1,
          ratio: 71 / 135,
          coordinates: { cx: 269.3777777777778, cy: 628.1777777777777 },
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
          coordinates: { cx: 269.25, cy: 634.375 },
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
            name: dSharp_eFlat,
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
            name: dSharp_eFlat,
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
            name: fSharp_gFlat,
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
            name: fSharp_gFlat,
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
            name: gSharp_aFlat,
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
            name: gSharp_aFlat,
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
            name: aSharp_bFlat,
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
            name: aSharp_bFlat,
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
        }
      ],
      [
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
        },
        {
          name: { English: "C#`", German: "Cis`" },
          number: 1,
          ratio: 103 / 135,
          coordinates: { cx: 263.68888888888887, cy: 904.0888888888888 },
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
          coordinates: { cx: 263.625, cy: 907.1875 },
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
            name: dSharp_eFlat,
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
            name: dSharp_eFlat,
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
            name: fSharp_gFlat,
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
            name: fSharp_gFlat,
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
            name: gSharp_aFlat,
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
            name: gSharp_aFlat,
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
            name: aSharp_bFlat,
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
            name: aSharp_bFlat,
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
            name: gSharp_aFlat,
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
            name: gSharp_aFlat,
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
            name: aSharp_bFlat,
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
            name: aSharp_bFlat,
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
            name: cSharp_dFlat,
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
            name: cSharp_dFlat,
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
            name: dSharp_eFlat,
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
            name: dSharp_eFlat,
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
            name: fSharp_gFlat,
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
            name: fSharp_gFlat,
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
        }
      ],
      [
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
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 1,
          ratio: 71 / 135,
          coordinates: { cx: 289.7925925925926, cy: 628.1777777777777 },
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
          coordinates: { cx: 289.75, cy: 634.375 },
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
            name: aSharp_bFlat,
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
            name: aSharp_bFlat,
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
            name: cSharp_dFlat,
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
            name: cSharp_dFlat,
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
            name: dSharp_eFlat,
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
            name: dSharp_eFlat,
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
            name: fSharp_gFlat,
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
            name: fSharp_gFlat,
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
        }
      ],
      [
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
        },
        {
          name: { English: "G#`", German: "Gis`" },
          number: 1,
          ratio: 103 / 135,
          coordinates: { cx: 287.89629629629627, cy: 904.0888888888888 },
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
          ratio: 49 / 64,
          coordinates: { cx: 287.875, cy: 907.1875 },
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
            name: aSharp_bFlat,
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
            name: aSharp_bFlat,
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
            name: cSharp_dFlat,
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
            name: cSharp_dFlat,
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
            name: dSharp_eFlat,
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
            name: dSharp_eFlat,
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
            name: fSharp_gFlat,
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
            name: fSharp_gFlat,
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
            name: dSharp_eFlat,
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
            name: dSharp_eFlat,
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
            name: fSharp_gFlat,
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
            name: fSharp_gFlat,
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
            name: gSharp_aFlat,
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
            name: gSharp_aFlat,
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
            name: aSharp_bFlat,
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
            name: aSharp_bFlat,
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
            name: cSharp_dFlat,
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
            name: cSharp_dFlat,
            row: upper1
          }
        },
        {
          name: { English: "D`", German: "D`" },
          number: 0,
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
            name: dSharp_eFlat,
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
            name: dSharp_eFlat,
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
            name: fSharp_gFlat,
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
            name: b,
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
            name: gSharp_aFlat,
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
            name: gSharp_aFlat,
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
            name: aSharp_bFlat,
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
            name: aSharp_bFlat,
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
            name: cSharp_dFlat,
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
            name: cSharp_dFlat,
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
            name: dSharp_eFlat,
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
            name: dSharp_eFlat,
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
            name: fSharp_gFlat,
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
            name: fSharp_gFlat,
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
            name: gSharp_aFlat,
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
            name: gSharp_aFlat,
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
            name: aSharp_bFlat,
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
            name: aSharp_bFlat,
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
            name: cSharp_dFlat,
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
            name: cSharp_dFlat,
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
            name: aSharp_bFlat,
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
            name: aSharp_bFlat,
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
            name: cSharp_dFlat,
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
            name: cSharp_dFlat,
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
            name: dSharp_eFlat,
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
            name: dSharp_eFlat,
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
            name: fSharp_gFlat,
            row: lower1
          }
        },
        {
          name: { English: "G´", German: "Ges´" },
          number: 9,
          ratio: 833 / 2048,
          coordinates: { cx: 327.76171875, cy: 489.443359375 },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: fSharp_gFlat,
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
            name: gSharp_aFlat,
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
            name: gSharp_aFlat,
            row: upper1
          }
        },
        {
          name: { English: "A`", German: "A`" },
          number: 0,
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
            name: aSharp_bFlat,
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
            name: aSharp_bFlat,
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
            name: cSharp_dFlat,
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
            name: cSharp_dFlat,
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
            name: dSharp_eFlat,
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
            name: dSharp_eFlat,
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
            name: fSharp_gFlat,
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
            name: fSharp_gFlat,
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
            name: gSharp_aFlat,
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
            name: gSharp_aFlat,
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
            name: aSharp_bFlat,
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
            name: aSharp_bFlat,
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
            name: cSharp_dFlat,
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
            name: cSharp_dFlat,
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
            name: dSharp_eFlat,
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
            name: dSharp_eFlat,
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
            name: fSharp_gFlat,
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
            name: fSharp_gFlat,
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
            name: gSharp_aFlat,
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
            name: gSharp_aFlat,
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
  ]
}
