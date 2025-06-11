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
    "7 / 8",
    "71 / 81"
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
    "7 / 8",
    "71 / 81"
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
    7 / 8,
    71 / 81
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
    7 / 8,
    71 / 81
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

// Difference/ratio between a just fifth and an equal fifth
let twoCentPlus = 2 ** (7 / 12) / (3 / 2)
let twoCentMinus = 3 / 2 / 2 ** (7 / 12)

// let cyOfEqualTunedCString = []
// cyOfEqualTunedCString = calculateCyOfEqualTunedCString()
// function calculateCyOfEqualTunedCString() {
//   justRatios.map((string, index) => {
//     string.map((ratio, index2) => {
//       let cy =
//         vectors.Viola[0].vectorY *
//           (ratio * twoCentMinus ** 3 + (1 - twoCentMinus ** 3)) +
//         vectors.Viola[0].originY
//       cyOfEqualTunedCString.push(cy)
//       console.log(
//         `String: ${index + 1} | Ratio: ${
//           justRatiosString[index][index2]
//         } | cy: ${cy}`
//       )
//     })
//   })
//   return cyOfEqualTunedCString
// }

// let cyOfEqualTunedGString = []
// cyOfEqualTunedGString = calculateCyOfEqualTunedGString()
// function calculateCyOfEqualTunedGString() {
//   justRatios.map((string, index) => {
//     string.map((ratio, index2) => {
//       let cy =
//         vectors.Viola[1].vectorY *
//           (ratio * twoCentMinus ** 2 + (1 - twoCentMinus ** 2)) +
//         vectors.Viola[1].originY
//       cyOfEqualTunedGString.push(cy)
//       console.log(
//         `String: ${index + 1} | Ratio: ${
//           justRatiosString[index][index2]
//         } | cy: ${cy}`
//       )
//     })
//   })
//   return cyOfEqualTunedGString
// }

// let cyOfEqualTunedDString = []
// cyOfEqualTunedDString = calculateCyOfEqualTunedDString()
// function calculateCyOfEqualTunedDString() {
//   justRatios.map((string, index) => {
//     string.map((ratio, index2) => {
//       let cy =
//         vectors.Viola[2].vectorY *
//           (ratio * twoCentMinus ** 1 + (1 - twoCentMinus ** 1)) +
//         vectors.Viola[2].originY
//       cyOfEqualTunedDString.push(cy)
//       console.log(
//         `String: ${index + 1} | Ratio: ${
//           justRatiosString[index][index2]
//         } | cy: ${cy}`
//       )
//     })
//   })
//   return cyOfEqualTunedDString
// }

// let cyOfEqualTunedEString = []
// cyOfEqualTunedEString = calculateCyOfEqualTunedEString()
// function calculateCyOfEqualTunedEString() {
//   justRatios.map((string, index) => {
//     string.map((ratio, index2) => {
//       let cy =
//         vectors.Violin[3].vectorY *
//           (ratio * twoCentPlus ** 1 + (1 - twoCentPlus ** 1)) +
//         vectors.Violin[3].originY
//       cyOfEqualTunedEString.push(cy)
//       console.log(
//         `String: ${index + 1} | Ratio: ${
//           justRatiosString[index][index2]
//         } | cy: ${cy}`
//       )
//     })
//   })
//   return cyOfEqualTunedEString
// }

// let cxOfViolinGString = []
// cxOfViolinGString = calculateCxOfViolinGString()
// function calculateCxOfViolinGString() {
//   justRatios[0].map((ratio, index) => {
//     let cx = ratio * vectors.Violin[0].vectorX + vectors.Violin[0].originX
//     console.log(`Ratio: ${justRatiosString[0][index]} | cx: ${cx}`)
//     cxOfViolinGString.push(cx)
//   })
//   return cxOfViolinGString
// }

// let cxOfJustTunedViolinGString = []
// cxOfJustTunedViolinGString = calculateCxOfJustTunedViolinGString()
// function calculateCxOfJustTunedViolinGString() {
//   equalRatios.map((ratio, index) => {
//     let cx =
//       vectors.Violin[0].vectorX *
//         (ratio * twoCentPlus ** 2 + (1 - twoCentPlus ** 2)) +
//       vectors.Violin[0].originX
//     cxOfJustTunedViolinGString.push(cx)
//     console.log(`${index + 1}: ${cx}`)
//   })
//   return cxOfJustTunedViolinGString
// }

// let cxOfEqualTunedViolinGString = []
// cxOfEqualTunedViolinGString = calculateCxOfEqualTunedViolinGString()
// function calculateCxOfEqualTunedViolinGString() {
//   justRatios[0].map((ratio, index) => {
//     let cx =
//       vectors.Violin[0].vectorX *
//         (ratio * twoCentMinus ** 2 + (1 - twoCentMinus ** 2)) +
//       vectors.Violin[0].originX
//     cxOfEqualTunedViolinGString.push(cx)
//     console.log(`Ratio: ${justRatiosString[0][index]} | cx: ${cx}`)
//   })
//   return cxOfEqualTunedViolinGString
// }

// let cxOfEqualTunedViolinDString = []
// cxOfEqualTunedViolinDString = calculateCxOfEqualTunedViolinDString()
// function calculateCxOfEqualTunedViolinDString() {
//   justRatios[1].map((ratio, index) => {
//     let cx =
//       vectors.Violin[1].vectorX *
//         (ratio * twoCentMinus ** 1 + (1 - twoCentMinus ** 1)) +
//       vectors.Violin[1].originX
//     cxOfEqualTunedViolinDString.push(cx)
//     console.log(`Ratio: ${justRatiosString[1][index]} | cx: ${cx}`)
//   })
//   return cxOfEqualTunedViolinDString
// }

// let cxOfEqualTunedViolinEString = []
// cxOfEqualTunedViolinEString = calculateCxOfEqualTunedViolinEString()
// function calculateCxOfEqualTunedViolinEString() {
//   justRatios[3].map((ratio, index) => {
//     let cx =
//       vectors.Violin[3].vectorX *
//         (ratio * twoCentPlus ** 1 + (1 - twoCentPlus ** 1)) +
//       vectors.Violin[3].originX
//     cxOfEqualTunedViolinEString.push(cx)
//     console.log(`Ratio: ${justRatiosString[3][index]} | cx: ${cx}`)
//   })
//   return cxOfEqualTunedViolinEString
// }

// let cxOfEqualTunedViolaCString = []
// cxOfEqualTunedViolaCString = calculateCxOfEqualTunedViolaCString()
// function calculateCxOfEqualTunedViolaCString() {
//   justRatios[0].map((ratio, index) => {
//     let cx =
//       vectors.Viola[0].vectorX *
//         (ratio * twoCentMinus ** 3 + (1 - twoCentMinus ** 3)) +
//       vectors.Viola[0].originX
//     cxOfEqualTunedViolaCString.push(cx)
//     console.log(`Ratio: ${justRatiosString[0][index]} | cx: ${cx}`)
//   })
//   return cxOfEqualTunedViolaCString
// }

// let cxOfEqualTunedViolaGString = []
// cxOfEqualTunedViolaGString = calculateCxOfEqualTunedViolaGString()
// function calculateCxOfEqualTunedViolaGString() {
//   justRatios[1].map((ratio, index) => {
//     let cx =
//       vectors.Viola[1].vectorX *
//         (ratio * twoCentMinus ** 2 + (1 - twoCentMinus ** 2)) +
//       vectors.Viola[1].originX
//     cxOfEqualTunedViolaGString.push(cx)
//     console.log(`Ratio: ${justRatiosString[1][index]} | cx: ${cx}`)
//   })
//   return cxOfEqualTunedViolaGString
// }

// let cxOfEqualTunedViolaDString = []
// cxOfEqualTunedViolaDString = calculateCxOfEqualTunedViolaDString()
// function calculateCxOfEqualTunedViolaDString() {
//   justRatios[2].map((ratio, index) => {
//     let cx =
//       vectors.Viola[2].vectorX *
//         (ratio * twoCentMinus ** 1 + (1 - twoCentMinus ** 1)) +
//       vectors.Viola[2].originX
//     cxOfEqualTunedViolaDString.push(cx)
//     console.log(`Ratio: ${justRatiosString[2][index]} | cx: ${cx}`)
//   })
//   return cxOfEqualTunedViolaDString
// }

let cxOfEqualTunedCelloCString = []
cxOfEqualTunedCelloCString = calculateCxOfEqualTunedCelloCString()
function calculateCxOfEqualTunedCelloCString() {
  justRatios[0].map((ratio, index) => {
    let cx =
      vectors.Cello[0].vectorX *
        (ratio * twoCentMinus ** 3 + (1 - twoCentMinus ** 3)) +
      vectors.Cello[0].originX
    cxOfEqualTunedCelloCString.push(cx)
    console.log(`Ratio: ${justRatiosString[0][index]} | cx: ${cx}`)
  })
  return cxOfEqualTunedCelloCString
}

export const justPoints = {
  Violin: [
    [
      [
        {
          name: { English: "G´", German: "G´" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 0,
          string: "g",
          ratio: 1 / 81,
          coordinates: {
            equal: { cx: 269.6966239380113, cy: 27.770991205161476 },
            just: { cx: 269.6296296296296, cy: 30.37037037037037 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "g",
          ratio: 7 / 135,
          coordinates: {
            equal: { cx: 268.5087589804908, cy: 73.86015155695502 },
            just: { cx: 268.44444444444446, cy: 76.35555555555555 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "g",
          ratio: 1 / 16,
          coordinates: {
            equal: { cx: 268.1885922536592, cy: 86.28262055802438 },
            just: { cx: 268.125, cy: 88.75 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "g",
          ratio: 1 / 10,
          coordinates: {
            equal: { cx: 267.0610485635128, cy: 130.0313157357034 },
            just: { cx: 267, cy: 132.4 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "g",
          ratio: 1 / 9,
          coordinates: {
            equal: { cx: 266.72696154421016, cy: 142.99389208464532 },
            just: { cx: 266.6666666666667, cy: 145.33333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "g",
          ratio: 191 / 1215,
          coordinates: {
            equal: { cx: 265.34111909376963, cy: 196.7645791617378 },
            just: { cx: 265.28395061728395, cy: 198.9827160493827 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "g",
          ratio: 1 / 6,
          coordinates: {
            equal: { cx: 265.056526447697, cy: 207.806773829355 },
            just: { cx: 265, cy: 210 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "g",
          ratio: 1 / 5,
          coordinates: {
            equal: { cx: 264.0542653897892, cy: 246.69450287618082 },
            just: { cx: 264, cy: 248.8 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "g",
          ratio: 17 / 81,
          coordinates: {
            equal: { cx: 263.75729915040904, cy: 258.2167929641292 },
            just: { cx: 263.7037037037037, cy: 260.2962962962963 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "g",
          ratio: 1 / 4,
          coordinates: {
            equal: { cx: 262.55087380292736, cy: 305.0260964464195 },
            just: { cx: 262.5, cy: 307 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "g",
          ratio: 7 / 27,
          coordinates: {
            equal: { cx: 262.27246795350845, cy: 315.8282434038711 },
            just: { cx: 262.22222222222223, cy: 317.77777777777777 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "g",
          ratio: 13 / 45,
          coordinates: {
            equal: { cx: 261.38156923536815, cy: 350.3951136677162 },
            just: { cx: 261.3333333333333, cy: 352.26666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "g",
          ratio: 19 / 64,
          coordinates: {
            equal: { cx: 261.1414441902444, cy: 359.7119654185183 },
            just: { cx: 261.09375, cy: 361.5625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "g",
          ratio: 1 / 3,
          coordinates: {
            equal: { cx: 260.04522115815763, cy: 402.24541906348395 },
            just: { cx: 260, cy: 404 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "g",
          ratio: 83 / 243,
          coordinates: {
            equal: { cx: 259.79774929200755, cy: 411.84732747010764 },
            just: { cx: 259.75308641975306, cy: 413.58024691358025 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "g",
          ratio: 149 / 405,
          coordinates: {
            equal: { cx: 259.00583932032725, cy: 442.57343437130334 },
            just: { cx: 258.96296296296293, cy: 444.23703703703706 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "g",
          ratio: 3 / 8,
          coordinates: {
            equal: { cx: 258.79239483577277, cy: 450.85508037201623 },
            just: { cx: 258.75, cy: 452.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "g",
          ratio: 2 / 5,
          coordinates: {
            equal: { cx: 258.0406990423419, cy: 480.02087715713566 },
            just: { cx: 258, cy: 481.6 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "g",
          ratio: 11 / 27,
          coordinates: {
            equal: { cx: 257.8179743628068, cy: 488.66259472309684 },
            just: { cx: 257.77777777777777, cy: 490.2222222222222 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "g",
          ratio: 7 / 16,
          coordinates: {
            equal: { cx: 256.9131553521955, cy: 523.7695723348146 },
            just: { cx: 256.875, cy: 525.25 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "g",
          ratio: 4 / 9,
          coordinates: {
            equal: { cx: 256.70435096513137, cy: 531.8711825529033 },
            just: { cx: 256.6666666666667, cy: 533.3333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "g",
          ratio: 7 / 15,
          coordinates: {
            equal: { cx: 256.0361769265261, cy: 557.7963352507873 },
            just: { cx: 256, cy: 559.2 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "g",
          ratio: 115 / 243,
          coordinates: {
            equal: { cx: 255.83819943360604, cy: 565.4778619760862 },
            just: { cx: 255.80246913580248, cy: 566.8641975308642 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "g",
          ratio: 1 / 2,
          coordinates: {
            equal: { cx: 255.0339158686182, cy: 596.684064297613 },
            just: { cx: 255, cy: 598 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "g",
          ratio: 41 / 81,
          coordinates: {
            equal: { cx: 254.84831196900564, cy: 603.8854956025808 },
            just: { cx: 254.8148148148148, cy: 605.1851851851852 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "g",
          ratio: 71 / 135,
          coordinates: {
            equal: { cx: 254.2543794902454, cy: 626.9300757784774 },
            just: { cx: 254.22222222222223, cy: 628.1777777777777 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "g",
          ratio: 17 / 32,
          coordinates: {
            equal: { cx: 254.0942961268296, cy: 633.1413102790121 },
            just: { cx: 254.0625, cy: 634.375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "g",
          ratio: 11 / 20,
          coordinates: {
            equal: { cx: 253.5305242817564, cy: 655.0156578678518 },
            just: { cx: 253.5, cy: 656.2 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "g",
          ratio: 5 / 9,
          coordinates: {
            equal: { cx: 253.36348077210508, cy: 661.4969460423227 },
            just: { cx: 253.33333333333334, cy: 662.6666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "g",
          ratio: 703 / 1215,
          coordinates: {
            equal: { cx: 252.67055954688482, cy: 688.3822895808688 },
            just: { cx: 252.64197530864197, cy: 689.4913580246914 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "g",
          ratio: 7 / 12,
          coordinates: {
            equal: { cx: 252.5282632238485, cy: 693.9033869146775 },
            just: { cx: 252.5, cy: 695 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "g",
          ratio: 3 / 5,
          coordinates: {
            equal: { cx: 252.0271326948946, cy: 713.3472514380904 },
            just: { cx: 252, cy: 714.4 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "g",
          ratio: 49 / 81,
          coordinates: {
            equal: { cx: 251.87864957520452, cy: 719.1083964820647 },
            just: { cx: 251.85185185185185, cy: 720.1481481481482 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "g",
          ratio: 5 / 8,
          coordinates: {
            equal: { cx: 251.27543690146365, cy: 742.5130482232098 },
            just: { cx: 251.25, cy: 743.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "g",
          ratio: 17 / 27,
          coordinates: {
            equal: { cx: 251.13623397675423, cy: 747.9141217019356 },
            just: { cx: 251.11111111111111, cy: 748.8888888888888 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "g",
          ratio: 29 / 45,
          coordinates: {
            equal: { cx: 250.69078461768407, cy: 765.1975568338582 },
            just: { cx: 250.66666666666666, cy: 766.1333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "g",
          ratio: 83 / 128,
          coordinates: {
            equal: { cx: 250.5707220951222, cy: 769.8559827092591 },
            just: { cx: 250.546875, cy: 770.78125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "g",
          ratio: 2 / 3,
          coordinates: {
            equal: { cx: 250.02261057907882, cy: 791.122709531742 },
            just: { cx: 250, cy: 792 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "g",
          ratio: 163 / 243,
          coordinates: {
            equal: { cx: 249.89887464600378, cy: 795.9236637350539 },
            just: { cx: 249.87654320987653, cy: 796.7901234567902 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "g",
          ratio: 277 / 405,
          coordinates: {
            equal: { cx: 249.50291966016363, cy: 811.2867171856516 },
            just: { cx: 249.4814814814815, cy: 812.1185185185185 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "g",
          ratio: 11 / 16,
          coordinates: {
            equal: { cx: 249.39619741788638, cy: 815.4275401860081 },
            just: { cx: 249.375, cy: 816.25 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "g",
          ratio: 7 / 10,
          coordinates: {
            equal: { cx: 249.02034952117094, cy: 830.0104385785677 },
            just: { cx: 249, cy: 830.8 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "g",
          ratio: 19 / 27,
          coordinates: {
            equal: { cx: 248.9089871814034, cy: 834.3312973615484 },
            just: { cx: 248.88888888888889, cy: 835.1111111111111 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "g",
          ratio: 23 / 32,
          coordinates: {
            equal: { cx: 248.45657767609774, cy: 851.8847861674074 },
            just: { cx: 248.4375, cy: 852.625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "g",
          ratio: 13 / 18,
          coordinates: {
            equal: { cx: 248.35217548256568, cy: 855.9355912764516 },
            just: { cx: 248.33333333333334, cy: 856.6666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "g",
          ratio: 11 / 15,
          coordinates: {
            equal: { cx: 248.01808846326304, cy: 868.8981676253935 },
            just: { cx: 248, cy: 869.5999999999999 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "g",
          ratio: 179 / 243,
          coordinates: {
            equal: { cx: 247.919099716803, cy: 872.738930988043 },
            just: { cx: 247.90123456790124, cy: 873.4320987654321 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "g",
          ratio: 3 / 4,
          coordinates: {
            equal: { cx: 247.51695793430912, cy: 888.3420321488065 },
            just: { cx: 247.5, cy: 889 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "g",
          ratio: 61 / 81,
          coordinates: {
            equal: { cx: 247.42415598450282, cy: 891.9427478012904 },
            just: { cx: 247.40740740740742, cy: 892.5925925925926 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "g",
          ratio: 103 / 135,
          coordinates: {
            equal: { cx: 247.1271897451227, cy: 903.4650378892388 },
            just: { cx: 247.11111111111111, cy: 904.0888888888888 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "g",
          ratio: 49 / 64,
          coordinates: {
            equal: { cx: 247.0471480634148, cy: 906.570655139506 },
            just: { cx: 247.03125, cy: 907.1875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "g",
          ratio: 31 / 40,
          coordinates: {
            equal: { cx: 246.7652621408782, cy: 917.5078289339259 },
            just: { cx: 246.75, cy: 918.1 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "g",
          ratio: 7 / 9,
          coordinates: {
            equal: { cx: 246.68174038605255, cy: 920.7484730211613 },
            just: { cx: 246.66666666666666, cy: 921.3333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "g",
          ratio: 959 / 1215,
          coordinates: {
            equal: { cx: 246.3352797734424, cy: 934.1911447904345 },
            just: { cx: 246.320987654321, cy: 934.7456790123457 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "g",
          ratio: 19 / 24,
          coordinates: {
            equal: { cx: 246.26413161192426, cy: 936.9516934573386 },
            just: { cx: 246.25, cy: 937.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "g",
          ratio: 4 / 5,
          coordinates: {
            equal: { cx: 246.0135663474473, cy: 946.6736257190453 },
            just: { cx: 246, cy: 947.2 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "g",
          ratio: 65 / 81,
          coordinates: {
            equal: { cx: 245.93932478760226, cy: 949.5541982410323 },
            just: { cx: 245.92592592592592, cy: 950.0740740740741 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "g",
          ratio: 13 / 16,
          coordinates: {
            equal: { cx: 245.63771845073182, cy: 961.2565241116049 },
            just: { cx: 245.625, cy: 961.75 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "g",
          ratio: 22 / 27,
          coordinates: {
            equal: { cx: 245.5681169883771, cy: 963.9570608509677 },
            just: { cx: 245.55555555555554, cy: 964.4444444444444 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "g",
          ratio: 37 / 45,
          coordinates: {
            equal: { cx: 245.34539230884204, cy: 972.598778416929 },
            just: { cx: 245.33333333333334, cy: 973.0666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "g",
          ratio: 211 / 256,
          coordinates: {
            equal: { cx: 245.28536104756108, cy: 974.9279913546296 },
            just: { cx: 245.2734375, cy: 975.390625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "g",
          ratio: 5 / 6,
          coordinates: {
            equal: { cx: 245.0113052895394, cy: 985.561354765871 },
            just: { cx: 245, cy: 986 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "g",
          ratio: 203 / 243,
          coordinates: {
            equal: { cx: 244.9494373230019, cy: 987.9618318675269 },
            just: { cx: 244.93827160493828, cy: 988.395061728395 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "g",
          ratio: 341 / 405,
          coordinates: {
            equal: { cx: 244.7514598300818, cy: 995.6433585928258 },
            just: { cx: 244.74074074074073, cy: 996.0592592592593 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "g",
          ratio: 27 / 32,
          coordinates: {
            equal: { cx: 244.6980987089432, cy: 997.7137700930041 },
            just: { cx: 244.6875, cy: 998.125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "g",
          ratio: 17 / 20,
          coordinates: {
            equal: { cx: 244.51017476058547, cy: 1005.0052192892839 },
            just: { cx: 244.5, cy: 1005.4 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "g",
          ratio: 23 / 27,
          coordinates: {
            equal: { cx: 244.4544935907017, cy: 1007.1656486807743 },
            just: { cx: 244.44444444444446, cy: 1007.5555555555555 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "g",
          ratio: 55 / 64,
          coordinates: {
            equal: { cx: 244.22828883804888, cy: 1015.9423930837036 },
            just: { cx: 244.21875, cy: 1016.3125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "g",
          ratio: 31 / 36,
          coordinates: {
            equal: { cx: 244.17608774128283, cy: 1017.9677956382259 },
            just: { cx: 244.16666666666666, cy: 1018.3333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "g",
          ratio: 13 / 15,
          coordinates: {
            equal: { cx: 244.00904423163152, cy: 1024.4490838126967 },
            just: { cx: 244, cy: 1024.8000000000002 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "g",
          ratio: 211 / 243,
          coordinates: {
            equal: { cx: 243.95954985840152, cy: 1026.3694654940216 },
            just: { cx: 243.9506172839506, cy: 1026.716049382716 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "g",
          ratio: 7 / 8,
          coordinates: {
            equal: { cx: 243.75847896715456, cy: 1034.1710160744033 },
            just: { cx: 243.75, cy: 1034.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "g",
          ratio: 71 / 81,
          coordinates: {
            equal: { cx: 243.7120779922514, cy: 1035.9713739006452 },
            just: { cx: 243.7037037037037, cy: 1036.2962962962963 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 0,
          string: "d",
          ratio: 1 / 81,
          coordinates: {
            equal: { cx: 289.88770262348174, cy: 29.07141462672605 },
            just: { cx: 289.87654320987656, cy: 30.37037037037037 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "d",
          ratio: 7 / 135,
          coordinates: {
            equal: { cx: 289.4921945185425, cy: 75.108558041657 },
            just: { cx: 289.48148148148147, cy: 76.35555555555555 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "d",
          ratio: 1 / 16,
          coordinates: {
            equal: { cx: 289.38559272463306, cy: 87.51700685271261 },
            just: { cx: 289.375, cy: 88.75 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "d",
          ratio: 1 / 10,
          coordinates: {
            equal: { cx: 289.0101690156477, cy: 131.2163265786041 },
            just: { cx: 289, cy: 132.4 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "d",
          ratio: 1 / 9,
          coordinates: {
            equal: { cx: 288.8989323611336, cy: 144.16427316405344 },
            just: { cx: 288.8888888888889, cy: 145.33333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "d",
          ratio: 5 / 32,
          coordinates: {
            equal: { cx: 288.44703345216976, cy: 196.76530616744137 },
            just: { cx: 288.42798353909467, cy: 197.875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "d",
          ratio: 1 / 6,
          coordinates: {
            equal: { cx: 288.3427490885627, cy: 208.9040060913001 },
            just: { cx: 288.3333333333333, cy: 210 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "d",
          ratio: 1 / 5,
          coordinates: {
            equal: { cx: 288.0090391250202, cy: 247.7478458476481 },
            just: { cx: 288, cy: 248.8 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "d",
          ratio: 17 / 81,
          coordinates: {
            equal: { cx: 287.9101620987854, cy: 259.25713170138084 },
            just: { cx: 287.9012345679012, cy: 260.2962962962963 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "d",
          ratio: 1 / 4,
          coordinates: {
            equal: { cx: 287.50847417970647, cy: 306.0136054821701 },
            just: { cx: 287.5, cy: 307 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "d",
          ratio: 7 / 27,
          coordinates: {
            equal: { cx: 287.4157769676113, cy: 316.80356097004454 },
            just: { cx: 287.4074074074074, cy: 317.77777777777777 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "d",
          ratio: 13 / 45,
          coordinates: {
            equal: { cx: 287.11914588890687, cy: 351.3314185312427 },
            just: { cx: 287.1111111111111, cy: 352.26666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "d",
          ratio: 19 / 64,
          coordinates: {
            equal: { cx: 287.03919454347476, cy: 360.6377551395345 },
            just: { cx: 287.03125, cy: 361.5625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "d",
          ratio: 13 / 40,
          coordinates: {
            equal: { cx: 286.7576267617358, cy: 393.4122449339531 },
            just: { cx: 286.6666666666667, cy: 394.3 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "d",
          ratio: 1 / 3,
          coordinates: {
            equal: { cx: 286.6741992708502, cy: 403.12320487304004 },
            just: { cx: 286.5843621399177, cy: 404 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "d",
          ratio: 149 / 405,
          coordinates: {
            equal: { cx: 286.32812967902834, cy: 443.40570536110465 },
            just: { cx: 286.320987654321, cy: 444.23703703703706 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "d",
          ratio: 3 / 8,
          coordinates: {
            equal: { cx: 286.25706181642204, cy: 451.6780045684751 },
            just: { cx: 286.25, cy: 452.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "d",
          ratio: 2 / 5,
          coordinates: {
            equal: { cx: 286.0067793437652, cy: 480.8108843857361 },
            just: { cx: 286, cy: 481.6 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "d",
          ratio: 11 / 27,
          coordinates: {
            equal: { cx: 285.93262157408907, cy: 489.4428487760356 },
            just: { cx: 285.9259259259259, cy: 490.2222222222222 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "d",
          ratio: 7 / 16,
          coordinates: {
            equal: { cx: 285.6313556347798, cy: 524.5102041116276 },
            just: { cx: 285.625, cy: 525.25 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "d",
          ratio: 4 / 9,
          coordinates: {
            equal: { cx: 285.5618327257085, cy: 532.6026707275335 },
            just: { cx: 285.55555555555554, cy: 533.3333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "d",
          ratio: 7 / 15,
          coordinates: {
            equal: { cx: 285.3393594166801, cy: 558.498563898432 },
            just: { cx: 285.3333333333333, cy: 559.2 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "d",
          ratio: 121 / 256,
          coordinates: {
            equal: { cx: 285.2793959076061, cy: 565.4783163546508 },
            just: { cx: 285.26748971193416, cy: 566.171875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "d",
          ratio: 1 / 2,
          coordinates: {
            equal: { cx: 285.0056494531376, cy: 597.34240365478 },
            just: { cx: 285, cy: 598 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "d",
          ratio: 41 / 81,
          coordinates: {
            equal: { cx: 284.94385131174084, cy: 604.5357073133631 },
            just: { cx: 284.9382716049383, cy: 605.1851851851852 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "d",
          ratio: 71 / 135,
          coordinates: {
            equal: { cx: 284.7460972592712, cy: 627.5542790208285 },
            just: { cx: 284.74074074074076, cy: 628.1777777777777 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "d",
          ratio: 17 / 32,
          coordinates: {
            equal: { cx: 284.6927963623165, cy: 633.7585034263562 },
            just: { cx: 284.6875, cy: 634.375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "d",
          ratio: 11 / 20,
          coordinates: {
            equal: { cx: 284.5050845078239, cy: 655.6081632893021 },
            just: { cx: 284.5, cy: 656.2 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "d",
          ratio: 5 / 9,
          coordinates: {
            equal: { cx: 284.4494661805668, cy: 662.0821365820268 },
            just: { cx: 284.44444444444446, cy: 662.6666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "d",
          ratio: 37 / 64,
          coordinates: {
            equal: { cx: 284.2235167260849, cy: 688.3826530837207 },
            just: { cx: 284.2139917695473, cy: 688.9375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "d",
          ratio: 7 / 12,
          coordinates: {
            equal: { cx: 284.1713745442814, cy: 694.4520030456501 },
            just: { cx: 284.1666666666667, cy: 695 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "d",
          ratio: 3 / 5,
          coordinates: {
            equal: { cx: 284.0045195625101, cy: 713.873922923824 },
            just: { cx: 284, cy: 714.4 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "d",
          ratio: 49 / 81,
          coordinates: {
            equal: { cx: 283.9550810493927, cy: 719.6285658506905 },
            just: { cx: 283.95061728395063, cy: 720.1481481481482 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "d",
          ratio: 5 / 8,
          coordinates: {
            equal: { cx: 283.75423708985323, cy: 743.0068027410852 },
            just: { cx: 283.75, cy: 743.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "d",
          ratio: 17 / 27,
          coordinates: {
            equal: { cx: 283.7078884838057, cy: 748.4017804850223 },
            just: { cx: 283.7037037037037, cy: 748.8888888888888 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "d",
          ratio: 29 / 45,
          coordinates: {
            equal: { cx: 283.5595729444534, cy: 765.6657092656214 },
            just: { cx: 283.55555555555554, cy: 766.1333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "d",
          ratio: 83 / 128,
          coordinates: {
            equal: { cx: 283.5195972717374, cy: 770.3188775697672 },
            just: { cx: 283.515625, cy: 770.78125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "d",
          ratio: 53 / 80,
          coordinates: {
            equal: { cx: 283.3788133808679, cy: 786.7061224669766 },
            just: { cx: 283.3333333333333, cy: 787.15 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "d",
          ratio: 2 / 3,
          coordinates: {
            equal: { cx: 283.3370996354251, cy: 791.56160243652 },
            just: { cx: 283.2921810699589, cy: 792 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "d",
          ratio: 277 / 405,
          coordinates: {
            equal: { cx: 283.16406483951414, cy: 811.7028526805523 },
            just: { cx: 283.1604938271605, cy: 812.1185185185185 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "d",
          ratio: 11 / 16,
          coordinates: {
            equal: { cx: 283.128530908211, cy: 815.8390022842375 },
            just: { cx: 283.125, cy: 816.25 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "d",
          ratio: 7 / 10,
          coordinates: {
            equal: { cx: 283.0033896718826, cy: 830.405442192868 },
            just: { cx: 283, cy: 830.8 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "d",
          ratio: 19 / 27,
          coordinates: {
            equal: { cx: 282.9663107870445, cy: 834.7214243880178 },
            just: { cx: 282.962962962963, cy: 835.1111111111111 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "d",
          ratio: 23 / 32,
          coordinates: {
            equal: { cx: 282.81567781738994, cy: 852.2551020558138 },
            just: { cx: 282.8125, cy: 852.625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "d",
          ratio: 13 / 18,
          coordinates: {
            equal: { cx: 282.7809163628542, cy: 856.3013353637667 },
            just: { cx: 282.77777777777777, cy: 856.6666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "d",
          ratio: 11 / 15,
          coordinates: {
            equal: { cx: 282.6696797083401, cy: 869.249281949216 },
            just: { cx: 282.6666666666667, cy: 869.5999999999999 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "d",
          ratio: 377 / 512,
          coordinates: {
            equal: { cx: 282.639697953803, cy: 872.7391581773254 },
            just: { cx: 282.63374485596705, cy: 873.0859375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "d",
          ratio: 3 / 4,
          coordinates: {
            equal: { cx: 282.5028247265688, cy: 888.6712018273901 },
            just: { cx: 282.5, cy: 889 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "d",
          ratio: 61 / 81,
          coordinates: {
            equal: { cx: 282.47192565587045, cy: 892.2678536566815 },
            just: { cx: 282.4691358024691, cy: 892.5925925925926 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "d",
          ratio: 103 / 135,
          coordinates: {
            equal: { cx: 282.3730486296356, cy: 903.7771395104143 },
            just: { cx: 282.3703703703704, cy: 904.0888888888888 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "d",
          ratio: 49 / 64,
          coordinates: {
            equal: { cx: 282.34639818115824, cy: 906.8792517131782 },
            just: { cx: 282.34375, cy: 907.1875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "d",
          ratio: 31 / 40,
          coordinates: {
            equal: { cx: 282.25254225391194, cy: 917.8040816446511 },
            just: { cx: 282.25, cy: 918.1 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "d",
          ratio: 7 / 9,
          coordinates: {
            equal: { cx: 282.2247330902834, cy: 921.0410682910133 },
            just: { cx: 282.22222222222223, cy: 921.3333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "d",
          ratio: 101 / 128,
          coordinates: {
            equal: { cx: 282.11175836304244, cy: 934.1913265418602 },
            just: { cx: 282.10699588477365, cy: 934.46875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "d",
          ratio: 19 / 24,
          coordinates: {
            equal: { cx: 282.08568727214066, cy: 937.226001522825 },
            just: { cx: 282.0833333333333, cy: 937.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "d",
          ratio: 4 / 5,
          coordinates: {
            equal: { cx: 282.0022597812551, cy: 946.936961461912 },
            just: { cx: 282, cy: 947.2 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "d",
          ratio: 65 / 81,
          coordinates: {
            equal: { cx: 281.97754052469634, cy: 949.8142829253452 },
            just: { cx: 281.9753086419753, cy: 950.0740740740741 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "d",
          ratio: 13 / 16,
          coordinates: {
            equal: { cx: 281.8771185449266, cy: 961.5034013705425 },
            just: { cx: 281.875, cy: 961.75 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "d",
          ratio: 22 / 27,
          coordinates: {
            equal: { cx: 281.8539442419028, cy: 964.200890242511 },
            just: { cx: 281.85185185185185, cy: 964.4444444444444 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "d",
          ratio: 37 / 45,
          coordinates: {
            equal: { cx: 281.7797864722267, cy: 972.8328546328106 },
            just: { cx: 281.77777777777777, cy: 973.0666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "d",
          ratio: 211 / 256,
          coordinates: {
            equal: { cx: 281.7597986358687, cy: 975.1594387848836 },
            just: { cx: 281.7578125, cy: 975.390625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "d",
          ratio: 133 / 160,
          coordinates: {
            equal: { cx: 281.68940669043394, cy: 983.3530612334883 },
            just: { cx: 281.6666666666667, cy: 983.575 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "d",
          ratio: 5 / 6,
          coordinates: {
            equal: { cx: 281.6685498177125, cy: 985.7808012182601 },
            just: { cx: 281.6460905349794, cy: 986 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "d",
          ratio: 341 / 405,
          coordinates: {
            equal: { cx: 281.58203241975707, cy: 995.8514263402762 },
            just: { cx: 281.58024691358025, cy: 996.0592592592593 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "d",
          ratio: 27 / 32,
          coordinates: {
            equal: { cx: 281.5642654541055, cy: 997.9195011421187 },
            just: { cx: 281.5625, cy: 998.125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "d",
          ratio: 17 / 20,
          coordinates: {
            equal: { cx: 281.5016948359413, cy: 1005.2027210964341 },
            just: { cx: 281.5, cy: 1005.4 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "d",
          ratio: 23 / 27,
          coordinates: {
            equal: { cx: 281.4831553935223, cy: 1007.360712194009 },
            just: { cx: 281.48148148148147, cy: 1007.5555555555555 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "d",
          ratio: 55 / 64,
          coordinates: {
            equal: { cx: 281.40783890869494, cy: 1016.1275510279069 },
            just: { cx: 281.40625, cy: 1016.3125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "d",
          ratio: 31 / 36,
          coordinates: {
            equal: { cx: 281.3904581814271, cy: 1018.1506676818834 },
            just: { cx: 281.3888888888889, cy: 1018.3333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "d",
          ratio: 13 / 15,
          coordinates: {
            equal: { cx: 281.33483985417, cy: 1024.6246409746082 },
            just: { cx: 281.3333333333333, cy: 1024.8000000000002 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "d",
          ratio: 889 / 1024,
          coordinates: {
            equal: { cx: 281.31984897690154, cy: 1026.3695790886627 },
            just: { cx: 281.3168724279835, cy: 1026.54296875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "d",
          ratio: 7 / 8,
          coordinates: {
            equal: { cx: 281.25141236328443, cy: 1034.335600913695 },
            just: { cx: 281.25, cy: 1034.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "d",
          ratio: 71 / 81,
          coordinates: {
            equal: { cx: 281.2359628279352, cy: 1036.133926828341 },
            just: { cx: 281.2345679012346, cy: 1036.2962962962963 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "a",
          ratio: 7 / 135,
          coordinates: {
            equal: { cx: 310.51851851851853, cy: 76.35555555555555 },
            just: { cx: 310.51851851851853, cy: 76.35555555555555 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "a",
          ratio: 1 / 16,
          coordinates: {
            equal: { cx: 310.625, cy: 88.75 },
            just: { cx: 310.625, cy: 88.75 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "a",
          ratio: 1 / 10,
          coordinates: {
            equal: { cx: 311, cy: 132.4 },
            just: { cx: 311, cy: 132.4 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "a",
          ratio: 1 / 9,
          coordinates: {
            equal: { cx: 311.1111111111111, cy: 145.33333333333333 },
            just: { cx: 311.1111111111111, cy: 145.33333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "a",
          ratio: 5 / 32,
          coordinates: {
            equal: { cx: 311.5625, cy: 197.875 },
            just: { cx: 311.5625, cy: 197.875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "a",
          ratio: 1 / 6,
          coordinates: {
            equal: { cx: 311.6666666666667, cy: 210 },
            just: { cx: 311.6666666666667, cy: 210 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "a",
          ratio: 1 / 5,
          coordinates: {
            equal: { cx: 312, cy: 248.8 },
            just: { cx: 312, cy: 248.8 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "a",
          ratio: 107 / 512,
          coordinates: {
            equal: { cx: 312.08984375, cy: 259.2578125 },
            just: { cx: 312.08984375, cy: 259.2578125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "a",
          ratio: 1 / 4,
          coordinates: {
            equal: { cx: 312.5, cy: 307 },
            just: { cx: 312.5, cy: 307 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "a",
          ratio: 7 / 27,
          coordinates: {
            equal: { cx: 312.5925925925926, cy: 317.77777777777777 },
            just: { cx: 312.5925925925926, cy: 317.77777777777777 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "a",
          ratio: 13 / 45,
          coordinates: {
            equal: { cx: 312.8888888888889, cy: 352.26666666666666 },
            just: { cx: 312.8888888888889, cy: 352.26666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "a",
          ratio: 19 / 64,
          coordinates: {
            equal: { cx: 312.96875, cy: 361.5625 },
            just: { cx: 312.96875, cy: 361.5625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "a",
          ratio: 13 / 40,
          coordinates: {
            equal: { cx: 313.25, cy: 394.3 },
            just: { cx: 313.25, cy: 394.3 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "a",
          ratio: 1 / 3,
          coordinates: {
            equal: { cx: 313.3333333333333, cy: 404 },
            just: { cx: 313.3333333333333, cy: 404 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "a",
          ratio: 47 / 128,
          coordinates: {
            equal: { cx: 313.671875, cy: 443.40625 },
            just: { cx: 313.671875, cy: 443.40625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "a",
          ratio: 3 / 8,
          coordinates: {
            equal: { cx: 313.75, cy: 452.5 },
            just: { cx: 313.75, cy: 452.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "a",
          ratio: 2 / 5,
          coordinates: {
            equal: { cx: 314, cy: 481.6 },
            just: { cx: 314, cy: 481.6 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "a",
          ratio: 11 / 27,
          coordinates: {
            equal: { cx: 314.0740740740741, cy: 490.2222222222222 },
            just: { cx: 314.0740740740741, cy: 490.2222222222222 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "a",
          ratio: 7 / 16,
          coordinates: {
            equal: { cx: 314.375, cy: 525.25 },
            just: { cx: 314.375, cy: 525.25 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "a",
          ratio: 4 / 9,
          coordinates: {
            equal: { cx: 314.44444444444446, cy: 533.3333333333333 },
            just: { cx: 314.44444444444446, cy: 533.3333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "a",
          ratio: 7 / 15,
          coordinates: {
            equal: { cx: 314.6666666666667, cy: 559.2 },
            just: { cx: 314.6666666666667, cy: 559.2 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "a",
          ratio: 121 / 256,
          coordinates: {
            equal: { cx: 314.7265625, cy: 566.171875 },
            just: { cx: 314.7265625, cy: 566.171875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "a",
          ratio: 79 / 160,
          coordinates: {
            equal: { cx: 314.9375, cy: 590.725 },
            just: { cx: 314.9375, cy: 590.725 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "a",
          ratio: 1 / 2,
          coordinates: {
            equal: { cx: 315, cy: 598 },
            just: { cx: 315, cy: 598 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "a",
          ratio: 71 / 135,
          coordinates: {
            equal: { cx: 315.25925925925924, cy: 628.1777777777777 },
            just: { cx: 315.25925925925924, cy: 628.1777777777777 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "a",
          ratio: 17 / 32,
          coordinates: {
            equal: { cx: 315.3125, cy: 634.375 },
            just: { cx: 315.3125, cy: 634.375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "a",
          ratio: 11 / 20,
          coordinates: {
            equal: { cx: 315.5, cy: 656.2 },
            just: { cx: 315.5, cy: 656.2 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "a",
          ratio: 5 / 9,
          coordinates: {
            equal: { cx: 315.55555555555554, cy: 662.6666666666666 },
            just: { cx: 315.55555555555554, cy: 662.6666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "a",
          ratio: 37 / 64,
          coordinates: {
            equal: { cx: 315.78125, cy: 688.9375 },
            just: { cx: 315.78125, cy: 688.9375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "a",
          ratio: 7 / 12,
          coordinates: {
            equal: { cx: 315.8333333333333, cy: 695 },
            just: { cx: 315.8333333333333, cy: 695 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "a",
          ratio: 3 / 5,
          coordinates: {
            equal: { cx: 316, cy: 714.4 },
            just: { cx: 316, cy: 714.4 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "a",
          ratio: 619 / 1024,
          coordinates: {
            equal: { cx: 316.044921875, cy: 719.62890625 },
            just: { cx: 316.044921875, cy: 719.62890625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "a",
          ratio: 5 / 8,
          coordinates: {
            equal: { cx: 316.25, cy: 743.5 },
            just: { cx: 316.25, cy: 743.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "a",
          ratio: 17 / 27,
          coordinates: {
            equal: { cx: 316.2962962962963, cy: 748.8888888888888 },
            just: { cx: 316.2962962962963, cy: 748.8888888888888 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "a",
          ratio: 29 / 45,
          coordinates: {
            equal: { cx: 316.44444444444446, cy: 766.1333333333333 },
            just: { cx: 316.44444444444446, cy: 766.1333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "a",
          ratio: 83 / 128,
          coordinates: {
            equal: { cx: 316.484375, cy: 770.78125 },
            just: { cx: 316.484375, cy: 770.78125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "a",
          ratio: 53 / 80,
          coordinates: {
            equal: { cx: 316.625, cy: 787.15 },
            just: { cx: 316.625, cy: 787.15 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "a",
          ratio: 2 / 3,
          coordinates: {
            equal: { cx: 316.6666666666667, cy: 792 },
            just: { cx: 316.6666666666667, cy: 792 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "a",
          ratio: 175 / 256,
          coordinates: {
            equal: { cx: 316.8359375, cy: 811.703125 },
            just: { cx: 316.8359375, cy: 811.703125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "a",
          ratio: 11 / 16,
          coordinates: {
            equal: { cx: 316.875, cy: 816.25 },
            just: { cx: 316.875, cy: 816.25 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "a",
          ratio: 7 / 10,
          coordinates: {
            equal: { cx: 317, cy: 830.8 },
            just: { cx: 317, cy: 830.8 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "a",
          ratio: 19 / 27,
          coordinates: {
            equal: { cx: 317.037037037037, cy: 835.1111111111111 },
            just: { cx: 317.037037037037, cy: 835.1111111111111 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "a",
          ratio: 23 / 32,
          coordinates: {
            equal: { cx: 317.1875, cy: 852.625 },
            just: { cx: 317.1875, cy: 852.625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "a",
          ratio: 13 / 18,
          coordinates: {
            equal: { cx: 317.22222222222223, cy: 856.6666666666666 },
            just: { cx: 317.22222222222223, cy: 856.6666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "a",
          ratio: 11 / 15,
          coordinates: {
            equal: { cx: 317.3333333333333, cy: 869.5999999999999 },
            just: { cx: 317.3333333333333, cy: 869.5999999999999 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "a",
          ratio: 377 / 512,
          coordinates: {
            equal: { cx: 317.36328125, cy: 873.0859375 },
            just: { cx: 317.36328125, cy: 873.0859375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "a",
          ratio: 239 / 320,
          coordinates: {
            equal: { cx: 317.46875, cy: 885.3625 },
            just: { cx: 317.46875, cy: 885.3625 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "a",
          ratio: 3 / 4,
          coordinates: {
            equal: { cx: 317.5, cy: 889 },
            just: { cx: 317.5, cy: 889 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "a",
          ratio: 103 / 135,
          coordinates: {
            equal: { cx: 317.6296296296296, cy: 904.0888888888888 },
            just: { cx: 317.6296296296296, cy: 904.0888888888888 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "a",
          ratio: 49 / 64,
          coordinates: {
            equal: { cx: 317.65625, cy: 907.1875 },
            just: { cx: 317.65625, cy: 907.1875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "a",
          ratio: 31 / 40,
          coordinates: {
            equal: { cx: 317.75, cy: 918.1 },
            just: { cx: 317.75, cy: 918.1 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "a",
          ratio: 7 / 9,
          coordinates: {
            equal: { cx: 317.77777777777777, cy: 921.3333333333333 },
            just: { cx: 317.77777777777777, cy: 921.3333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "a",
          ratio: 101 / 128,
          coordinates: {
            equal: { cx: 317.890625, cy: 934.46875 },
            just: { cx: 317.890625, cy: 934.46875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "a",
          ratio: 19 / 24,
          coordinates: {
            equal: { cx: 317.9166666666667, cy: 937.5 },
            just: { cx: 317.9166666666667, cy: 937.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "a",
          ratio: 4 / 5,
          coordinates: {
            equal: { cx: 318, cy: 947.2 },
            just: { cx: 318, cy: 947.2 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "a",
          ratio: 1643 / 2048,
          coordinates: {
            equal: { cx: 318.0224609375, cy: 949.814453125 },
            just: { cx: 318.0224609375, cy: 949.814453125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "a",
          ratio: 13 / 16,
          coordinates: {
            equal: { cx: 318.125, cy: 961.75 },
            just: { cx: 318.125, cy: 961.75 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "a",
          ratio: 22 / 27,
          coordinates: {
            equal: { cx: 318.14814814814815, cy: 964.4444444444444 },
            just: { cx: 318.14814814814815, cy: 964.4444444444444 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "a",
          ratio: 37 / 45,
          coordinates: {
            equal: { cx: 318.22222222222223, cy: 973.0666666666666 },
            just: { cx: 318.22222222222223, cy: 973.0666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "a",
          ratio: 211 / 256,
          coordinates: {
            equal: { cx: 318.2421875, cy: 975.390625 },
            just: { cx: 318.2421875, cy: 975.390625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "a",
          ratio: 133 / 160,
          coordinates: {
            equal: { cx: 318.3125, cy: 983.575 },
            just: { cx: 318.3125, cy: 983.575 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "a",
          ratio: 5 / 6,
          coordinates: {
            equal: { cx: 318.3333333333333, cy: 986 },
            just: { cx: 318.3333333333333, cy: 986 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "a",
          ratio: 431 / 512,
          coordinates: {
            equal: { cx: 318.41796875, cy: 995.8515625 },
            just: { cx: 318.41796875, cy: 995.8515625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "a",
          ratio: 27 / 32,
          coordinates: {
            equal: { cx: 318.4375, cy: 998.125 },
            just: { cx: 318.4375, cy: 998.125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "a",
          ratio: 17 / 20,
          coordinates: {
            equal: { cx: 318.5, cy: 1005.4 },
            just: { cx: 318.5, cy: 1005.4 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "a",
          ratio: 23 / 27,
          coordinates: {
            equal: { cx: 318.51851851851853, cy: 1007.5555555555555 },
            just: { cx: 318.51851851851853, cy: 1007.5555555555555 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "a",
          ratio: 55 / 64,
          coordinates: {
            equal: { cx: 318.59375, cy: 1016.3125 },
            just: { cx: 318.59375, cy: 1016.3125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "a",
          ratio: 31 / 36,
          coordinates: {
            equal: { cx: 318.6111111111111, cy: 1018.3333333333333 },
            just: { cx: 318.6111111111111, cy: 1018.3333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "a",
          ratio: 13 / 15,
          coordinates: {
            equal: { cx: 318.6666666666667, cy: 1024.8000000000002 },
            just: { cx: 318.6666666666667, cy: 1024.8000000000002 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "a",
          ratio: 889 / 1024,
          coordinates: {
            equal: { cx: 318.681640625, cy: 1026.54296875 },
            just: { cx: 318.681640625, cy: 1026.54296875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "a",
          ratio: 559 / 640,
          coordinates: {
            equal: { cx: 318.734375, cy: 1032.68125 },
            just: { cx: 318.734375, cy: 1032.68125 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "a",
          ratio: 7 / 8,
          coordinates: {
            equal: { cx: 318.75, cy: 1034.5 },
            just: { cx: 318.75, cy: 1034.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "e",
          ratio: 13 / 256,
          coordinates: {
            equal: { cx: 331.55557658741924, cy: 76.35637159186686 },
            just: { cx: 331.5234375, cy: 75.109375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "e",
          ratio: 1 / 16,
          coordinates: {
            equal: { cx: 331.90674230856223, cy: 89.98160157221419 },
            just: { cx: 331.875, cy: 88.75 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "e",
          ratio: 1 / 10,
          coordinates: {
            equal: { cx: 333.03047261621975, cy: 133.5823375093256 },
            just: { cx: 333, cy: 132.4 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "e",
          ratio: 1 / 9,
          coordinates: {
            equal: { cx: 333.36342974441453, cy: 146.50107408328455 },
            just: { cx: 333.3333333333333, cy: 145.33333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "e",
          ratio: 5 / 32,
          coordinates: {
            equal: { cx: 334.716068077706, cy: 198.98344141499277 },
            just: { cx: 334.6875, cy: 197.875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "e",
          ratio: 1 / 6,
          coordinates: {
            equal: { cx: 335.02821538538865, cy: 211.09475695307927 },
            just: { cx: 335, cy: 210 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "e",
          ratio: 1 / 5,
          coordinates: {
            equal: { cx: 336.0270867699731, cy: 249.8509666749561 },
            just: { cx: 336, cy: 248.8 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "e",
          ratio: 107 / 512,
          coordinates: {
            equal: { cx: 336.29631382284936, cy: 260.29697632655575 },
            just: { cx: 336.26953125, cy: 259.2578125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "e",
          ratio: 77 / 320,
          coordinates: {
            equal: { cx: 337.2444612699354, cy: 297.0850972734935 },
            just: { cx: 337.21875, cy: 296.08750000000003 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "e",
          ratio: 1 / 4,
          coordinates: {
            equal: { cx: 337.5253938468498, cy: 307.98528125777136 },
            just: { cx: 337.5, cy: 307 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "e",
          ratio: 13 / 45,
          coordinates: {
            equal: { cx: 338.69074379553166, cy: 353.2008592666276 },
            just: { cx: 338.6666666666667, cy: 352.26666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "e",
          ratio: 19 / 64,
          coordinates: {
            equal: { cx: 338.93005673142164, cy: 362.4862011791607 },
            just: { cx: 338.90625, cy: 361.5625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "e",
          ratio: 13 / 40,
          coordinates: {
            equal: { cx: 339.7728544621648, cy: 395.18675313199424 },
            just: { cx: 339.75, cy: 394.3 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "e",
          ratio: 1 / 3,
          coordinates: {
            equal: { cx: 340.02257230831094, cy: 404.8758055624634 },
            just: { cx: 340, cy: 404 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "e",
          ratio: 47 / 128,
          coordinates: {
            equal: { cx: 341.0370510582795, cy: 444.23758106124455 },
            just: { cx: 341.015625, cy: 443.40625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "e",
          ratio: 3 / 8,
          coordinates: {
            equal: { cx: 341.2711615390415, cy: 453.3210677148095 },
            just: { cx: 341.25, cy: 452.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "e",
          ratio: 2 / 5,
          coordinates: {
            equal: { cx: 342.02031507747984, cy: 482.3882250062171 },
            just: { cx: 342, cy: 481.6 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "e",
          ratio: 833 / 2048,
          coordinates: {
            equal: { cx: 342.22223536713705, cy: 490.2227322449168 },
            just: { cx: 342.2021484375, cy: 489.443359375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "e",
          ratio: 7 / 16,
          coordinates: {
            equal: { cx: 343.14404538513736, cy: 525.9889609433285 },
            just: { cx: 343.125, cy: 525.25 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "e",
          ratio: 4 / 9,
          coordinates: {
            equal: { cx: 343.3521435902591, cy: 534.0631713020528 },
            just: { cx: 343.3333333333333, cy: 533.3333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "e",
          ratio: 7 / 15,
          coordinates: {
            equal: { cx: 344.01805784664873, cy: 559.9006444499707 },
            just: { cx: 344, cy: 559.2 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "e",
          ratio: 121 / 256,
          coordinates: {
            equal: { cx: 344.1975425485663, cy: 566.8646508843705 },
            just: { cx: 344.1796875, cy: 566.171875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "e",
          ratio: 79 / 160,
          coordinates: {
            equal: { cx: 344.8296408466236, cy: 591.3900648489956 },
            just: { cx: 344.8125, cy: 590.725 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "e",
          ratio: 1 / 2,
          coordinates: {
            equal: { cx: 345.0169292312332, cy: 598.6568541718476 },
            just: { cx: 345, cy: 598 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "e",
          ratio: 269 / 512,
          coordinates: {
            equal: { cx: 345.77778829370965, cy: 628.1781857959335 },
            just: { cx: 345.76171875, cy: 627.5546875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "e",
          ratio: 17 / 32,
          coordinates: {
            equal: { cx: 345.9533711542811, cy: 634.9908007861071 },
            just: { cx: 345.9375, cy: 634.375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "e",
          ratio: 11 / 20,
          coordinates: {
            equal: { cx: 346.5152363081099, cy: 656.7911687546629 },
            just: { cx: 346.5, cy: 656.2 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "e",
          ratio: 5 / 9,
          coordinates: {
            equal: { cx: 346.6817148722073, cy: 663.2505370416422 },
            just: { cx: 346.6666666666667, cy: 662.6666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "e",
          ratio: 37 / 64,
          coordinates: {
            equal: { cx: 347.358034038853, cy: 689.4917207074964 },
            just: { cx: 347.34375, cy: 688.9375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "e",
          ratio: 7 / 12,
          coordinates: {
            equal: { cx: 347.5141076926943, cy: 695.5473784765397 },
            just: { cx: 347.5, cy: 695 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "e",
          ratio: 3 / 5,
          coordinates: {
            equal: { cx: 348.0135433849865, cy: 714.925483337478 },
            just: { cx: 348, cy: 714.4 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "e",
          ratio: 619 / 1024,
          coordinates: {
            equal: { cx: 348.1481569114247, cy: 720.1484881632779 },
            just: { cx: 348.134765625, cy: 719.62890625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "e",
          ratio: 397 / 640,
          coordinates: {
            equal: { cx: 348.6222306349677, cy: 738.5425486367468 },
            just: { cx: 348.609375, cy: 738.04375 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "e",
          ratio: 5 / 8,
          coordinates: {
            equal: { cx: 348.76269692342487, cy: 743.9926406288856 },
            just: { cx: 348.75, cy: 743.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "e",
          ratio: 29 / 45,
          coordinates: {
            equal: { cx: 349.3453718977658, cy: 766.6004296333139 },
            just: { cx: 349.3333333333333, cy: 766.1333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "e",
          ratio: 83 / 128,
          coordinates: {
            equal: { cx: 349.46502836571085, cy: 771.2431005895804 },
            just: { cx: 349.453125, cy: 770.78125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "e",
          ratio: 53 / 80,
          coordinates: {
            equal: { cx: 349.8864272310824, cy: 787.5933765659971 },
            just: { cx: 349.875, cy: 787.15 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "e",
          ratio: 2 / 3,
          coordinates: {
            equal: { cx: 350.01128615415547, cy: 792.4379027812316 },
            just: { cx: 350, cy: 792 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "e",
          ratio: 175 / 256,
          coordinates: {
            equal: { cx: 350.51852552913977, cy: 812.1187905306223 },
            just: { cx: 350.5078125, cy: 811.703125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "e",
          ratio: 11 / 16,
          coordinates: {
            equal: { cx: 350.63558076952074, cy: 816.6605338574047 },
            just: { cx: 350.625, cy: 816.25 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "e",
          ratio: 7 / 10,
          coordinates: {
            equal: { cx: 351.0101575387399, cy: 831.1941125031085 },
            just: { cx: 351, cy: 830.8 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "e",
          ratio: 2881 / 4096,
          coordinates: {
            equal: { cx: 351.1111176835685, cy: 835.1113661224584 },
            just: { cx: 351.10107421875, cy: 834.7216796875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "e",
          ratio: 23 / 32,
          coordinates: {
            equal: { cx: 351.5720226925687, cy: 852.9944804716642 },
            just: { cx: 351.5625, cy: 852.625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "e",
          ratio: 13 / 18,
          coordinates: {
            equal: { cx: 351.67607179512953, cy: 857.0315856510264 },
            just: { cx: 351.6666666666667, cy: 856.6666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "e",
          ratio: 11 / 15,
          coordinates: {
            equal: { cx: 352.00902892332437, cy: 869.9503222249853 },
            just: { cx: 352, cy: 869.5999999999999 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "e",
          ratio: 377 / 512,
          coordinates: {
            equal: { cx: 352.09877127428314, cy: 873.4323254421852 },
            just: { cx: 352.08984375, cy: 873.0859375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "e",
          ratio: 239 / 320,
          coordinates: {
            equal: { cx: 352.4148204233118, cy: 885.6950324244979 },
            just: { cx: 352.40625, cy: 885.3625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "e",
          ratio: 3 / 4,
          coordinates: {
            equal: { cx: 352.5084646156166, cy: 889.3284270859237 },
            just: { cx: 352.5, cy: 889 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "e",
          ratio: 781 / 1024,
          coordinates: {
            equal: { cx: 352.8888941468548, cy: 904.0890928979667 },
            just: { cx: 352.880859375, cy: 903.77734375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "e",
          ratio: 49 / 64,
          coordinates: {
            equal: { cx: 352.97668557714053, cy: 907.4954003930535 },
            just: { cx: 352.96875, cy: 907.1875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "e",
          ratio: 31 / 40,
          coordinates: {
            equal: { cx: 353.2576181540549, cy: 918.3955843773314 },
            just: { cx: 353.25, cy: 918.1 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "e",
          ratio: 7 / 9,
          coordinates: {
            equal: { cx: 353.34085743610365, cy: 921.6252685208212 },
            just: { cx: 353.3333333333333, cy: 921.3333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "e",
          ratio: 101 / 128,
          coordinates: {
            equal: { cx: 353.6790170194265, cy: 934.7458603537482 },
            just: { cx: 353.671875, cy: 934.46875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "e",
          ratio: 19 / 24,
          coordinates: {
            equal: { cx: 353.75705384634716, cy: 937.7736892382698 },
            just: { cx: 353.75, cy: 937.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "e",
          ratio: 4 / 5,
          coordinates: {
            equal: { cx: 354.00677169249326, cy: 947.462741668739 },
            just: { cx: 354, cy: 947.2 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "e",
          ratio: 1643 / 2048,
          coordinates: {
            equal: { cx: 354.07407845571237, cy: 950.0742440816389 },
            just: { cx: 354.0673828125, cy: 949.814453125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "e",
          ratio: 1037 / 1280,
          coordinates: {
            equal: { cx: 354.3111153174838, cy: 959.2712743183733 },
            just: { cx: 354.3046875, cy: 959.021875 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "e",
          ratio: 13 / 16,
          coordinates: {
            equal: { cx: 354.38134846171243, cy: 961.9963203144429 },
            just: { cx: 354.375, cy: 961.75 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "e",
          ratio: 37 / 45,
          coordinates: {
            equal: { cx: 354.67268594888293, cy: 973.3002148166569 },
            just: { cx: 354.6666666666667, cy: 973.0666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "e",
          ratio: 211 / 256,
          coordinates: {
            equal: { cx: 354.7325141828554, cy: 975.6215502947902 },
            just: { cx: 354.7265625, cy: 975.390625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "e",
          ratio: 133 / 160,
          coordinates: {
            equal: { cx: 354.9432136155412, cy: 983.7966882829985 },
            just: { cx: 354.9375, cy: 983.575 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "e",
          ratio: 5 / 6,
          coordinates: {
            equal: { cx: 355.0056430770777, cy: 986.2189513906159 },
            just: { cx: 355, cy: 986 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "e",
          ratio: 431 / 512,
          coordinates: {
            equal: { cx: 355.2592627645699, cy: 996.0593952653112 },
            just: { cx: 355.25390625, cy: 995.8515625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "e",
          ratio: 27 / 32,
          coordinates: {
            equal: { cx: 355.3177903847604, cy: 998.3302669287024 },
            just: { cx: 355.3125, cy: 998.125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "e",
          ratio: 17 / 20,
          coordinates: {
            equal: { cx: 355.50507876936996, cy: 1005.5970562515542 },
            just: { cx: 355.5, cy: 1005.4 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "e",
          ratio: 6977 / 8192,
          coordinates: {
            equal: { cx: 355.55555884178426, cy: 1007.5556830612293 },
            just: { cx: 355.550537109375, cy: 1007.36083984375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "e",
          ratio: 55 / 64,
          coordinates: {
            equal: { cx: 355.78601134628434, cy: 1016.4972402358321 },
            just: { cx: 355.78125, cy: 1016.3125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "e",
          ratio: 31 / 36,
          coordinates: {
            equal: { cx: 355.8380358975648, cy: 1018.5157928255134 },
            just: { cx: 355.8333333333333, cy: 1018.3333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "e",
          ratio: 13 / 15,
          coordinates: {
            equal: { cx: 356.0045144616622, cy: 1024.9751611124927 },
            just: { cx: 356, cy: 1024.8000000000002 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "e",
          ratio: 889 / 1024,
          coordinates: {
            equal: { cx: 356.04938563714154, cy: 1026.7161627210926 },
            just: { cx: 356.044921875, cy: 1026.54296875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "e",
          ratio: 559 / 640,
          coordinates: {
            equal: { cx: 356.2074102116559, cy: 1032.8475162122488 },
            just: { cx: 356.203125, cy: 1032.68125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "e",
          ratio: 7 / 8,
          coordinates: {
            equal: { cx: 356.2542323078083, cy: 1034.664213542962 },
            just: { cx: 356.25, cy: 1034.5 }
          },
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
          cents: { equal: "", just: "+22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 0,
          string: "c",
          ratio: 1 / 81,
          coordinates: {
            equal: { cx: 269.730177875068, cy: 26.46909844736104 },
            just: { cx: 269.6296296296296, cy: 30.37037037037037 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "c",
          ratio: 7 / 135,
          coordinates: {
            equal: { cx: 268.5409707600653, cy: 72.61033450946661 },
            just: { cx: 268.44444444444446, cy: 76.35555555555555 }
          },
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
          cents: { equal: "", just: "+12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "c",
          ratio: 1 / 16,
          coordinates: {
            equal: { cx: 268.2204422798497, cy: 85.04683954183099 },
            just: { cx: 268.125, cy: 88.75 }
          },
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
          cents: { equal: "", just: "-18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "c",
          ratio: 1 / 10,
          coordinates: {
            equal: { cx: 267.09162458865575, cy: 128.84496596015777 },
            just: { cx: 267, cy: 132.4 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "c",
          ratio: 1 / 9,
          coordinates: {
            equal: { cx: 266.7571600875612, cy: 141.82218860262492 },
            just: { cx: 266.6666666666667, cy: 145.33333333333333 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "c",
          ratio: 191 / 1215,
          coordinates: {
            equal: { cx: 265.3697517867247, cy: 195.65363067508142 },
            just: { cx: 265.28395061728395, cy: 198.9827160493827 }
          },
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
          cents: { equal: "", just: "+16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "c",
          ratio: 1 / 6,
          coordinates: {
            equal: { cx: 265.08483758208865, cy: 206.70830181496086 },
            just: { cx: 265, cy: 210 }
          },
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
          cents: { equal: "", just: "-14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "c",
          ratio: 1 / 5,
          coordinates: {
            equal: { cx: 264.0814440788051, cy: 245.63996974236247 },
            just: { cx: 264, cy: 248.8 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "c",
          ratio: 17 / 81,
          coordinates: {
            equal: { cx: 263.7841423000544, cy: 257.1752787578888 },
            just: { cx: 263.7037037037037, cy: 260.2962962962963 }
          },
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
          cents: { equal: "", just: "-2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "c",
          ratio: 1 / 4,
          coordinates: {
            equal: { cx: 262.5763538238798, cy: 304.0374716334648 },
            just: { cx: 262.5, cy: 307 }
          },
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
          cents: { equal: "", just: "+20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "c",
          ratio: 7 / 27,
          coordinates: {
            equal: { cx: 262.29763340630103, cy: 314.85182383552075 },
            just: { cx: 262.22222222222223, cy: 317.77777777777777 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "c",
          ratio: 13 / 45,
          coordinates: {
            equal: { cx: 261.40572807004895, cy: 349.45775088209996 },
            just: { cx: 261.3333333333333, cy: 352.26666666666666 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "c",
          ratio: 19 / 64,
          coordinates: {
            equal: { cx: 261.1653317098873, cy: 358.7851296563732 },
            just: { cx: 261.09375, cy: 361.5625 }
          },
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
          cents: { equal: "", just: "+2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "c",
          ratio: 1 / 3,
          coordinates: {
            equal: { cx: 260.0678700656709, cy: 401.3666414519687 },
            just: { cx: 260, cy: 404 }
          },
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
          cents: { equal: "", just: "+23" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "c",
          ratio: 83 / 243,
          coordinates: {
            equal: { cx: 259.8201185833787, cy: 410.9793989649073 },
            just: { cx: 259.75308641975306, cy: 413.58024691358025 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "c",
          ratio: 149 / 405,
          coordinates: {
            equal: { cx: 259.0273138400435, cy: 441.74022300631106 },
            just: { cx: 258.96296296296293, cy: 444.23703703703706 }
          },
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
          cents: { equal: "", just: "+14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "c",
          ratio: 3 / 8,
          coordinates: {
            equal: { cx: 258.81362818656646, cy: 450.03122636122066 },
            just: { cx: 258.75, cy: 452.5 }
          },
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
          cents: { equal: "", just: "-16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "c",
          ratio: 2 / 5,
          coordinates: {
            equal: { cx: 258.0610830591038, cy: 479.2299773067719 },
            just: { cx: 258, cy: 481.6 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "c",
          ratio: 11 / 27,
          coordinates: {
            equal: { cx: 257.8381067250408, cy: 487.88145906841663 },
            just: { cx: 257.77777777777777, cy: 490.2222222222222 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "c",
          ratio: 7 / 16,
          coordinates: {
            equal: { cx: 256.93226536790985, cy: 523.0281037250986 },
            just: { cx: 256.875, cy: 525.25 }
          },
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
          cents: { equal: "", just: "+18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "c",
          ratio: 4 / 9,
          coordinates: {
            equal: { cx: 256.72322505472573, cy: 531.1388678766406 },
            just: { cx: 256.6666666666667, cy: 533.3333333333333 }
          },
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
          cents: { equal: "", just: "-12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "c",
          ratio: 7 / 15,
          coordinates: {
            equal: { cx: 256.05429605253676, cy: 557.093313161575 },
            just: { cx: 256, cy: 559.2 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "c",
          ratio: 115 / 243,
          coordinates: {
            equal: { cx: 255.85609486670293, cy: 564.783519171926 },
            just: { cx: 255.80246913580248, cy: 566.8641975308642 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "c",
          ratio: 1 / 2,
          coordinates: {
            equal: { cx: 255.05090254925318, cy: 596.0249810889766 },
            just: { cx: 255, cy: 598 }
          },
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
          cents: { equal: "", just: "+22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "c",
          ratio: 41 / 81,
          coordinates: {
            equal: { cx: 254.865088937534, cy: 603.2345492236806 },
            just: { cx: 254.8148148148148, cy: 605.1851851851852 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "c",
          ratio: 71 / 135,
          coordinates: {
            equal: { cx: 254.27048538003265, cy: 626.3051672547333 },
            just: { cx: 254.22222222222223, cy: 628.1777777777777 }
          },
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
          cents: { equal: "", just: "+12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "c",
          ratio: 17 / 32,
          coordinates: {
            equal: { cx: 254.11022113992485, cy: 632.5234197709156 },
            just: { cx: 254.0625, cy: 634.375 }
          },
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
          cents: { equal: "", just: "-18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "c",
          ratio: 11 / 20,
          coordinates: {
            equal: { cx: 253.54581229432785, cy: 654.4224829800789 },
            just: { cx: 253.5, cy: 656.2 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "c",
          ratio: 5 / 9,
          coordinates: {
            equal: { cx: 253.3785800437806, cy: 660.9110943013125 },
            just: { cx: 253.33333333333334, cy: 662.6666666666666 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "c",
          ratio: 703 / 1215,
          coordinates: {
            equal: { cx: 252.68487589336235, cy: 687.8268153375408 },
            just: { cx: 252.64197530864197, cy: 689.4913580246914 }
          },
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
          cents: { equal: "", just: "+16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "c",
          ratio: 7 / 12,
          coordinates: {
            equal: { cx: 252.54241879104433, cy: 693.3541509074805 },
            just: { cx: 252.5, cy: 695 }
          },
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
          cents: { equal: "", just: "-14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "c",
          ratio: 3 / 5,
          coordinates: {
            equal: { cx: 252.04072203940254, cy: 712.8199848711812 },
            just: { cx: 252, cy: 714.4 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "c",
          ratio: 49 / 81,
          coordinates: {
            equal: { cx: 251.89207115002722, cy: 718.5876393789445 },
            just: { cx: 251.85185185185185, cy: 720.1481481481482 }
          },
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
          cents: { equal: "", just: "-2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "c",
          ratio: 5 / 8,
          coordinates: {
            equal: { cx: 251.2881769119399, cy: 742.0187358167324 },
            just: { cx: 251.25, cy: 743.5 }
          },
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
          cents: { equal: "", just: "+20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "c",
          ratio: 17 / 27,
          coordinates: {
            equal: { cx: 251.14881670315052, cy: 747.4259119177603 },
            just: { cx: 251.11111111111111, cy: 748.8888888888888 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "c",
          ratio: 29 / 45,
          coordinates: {
            equal: { cx: 250.70286403502448, cy: 764.7288754410499 },
            just: { cx: 250.66666666666666, cy: 766.1333333333333 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "c",
          ratio: 83 / 128,
          coordinates: {
            equal: { cx: 250.58266585494363, cy: 769.3925648281867 },
            just: { cx: 250.546875, cy: 770.78125 }
          },
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
          cents: { equal: "", just: "+2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "c",
          ratio: 2 / 3,
          coordinates: {
            equal: { cx: 250.03393503283544, cy: 790.6833207259843 },
            just: { cx: 250, cy: 792 }
          },
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
          cents: { equal: "", just: "+23" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "c",
          ratio: 163 / 243,
          coordinates: {
            equal: { cx: 249.91005929168932, cy: 795.4896994824537 },
            just: { cx: 249.87654320987653, cy: 796.7901234567902 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "c",
          ratio: 277 / 405,
          coordinates: {
            equal: { cx: 249.51365692002176, cy: 810.8701115031555 },
            just: { cx: 249.4814814814815, cy: 812.1185185185185 }
          },
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
          cents: { equal: "", just: "+14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "c",
          ratio: 11 / 16,
          coordinates: {
            equal: { cx: 249.40681409328323, cy: 815.0156131806103 },
            just: { cx: 249.375, cy: 816.25 }
          },
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
          cents: { equal: "", just: "-16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "c",
          ratio: 7 / 10,
          coordinates: {
            equal: { cx: 249.0305415295519, cy: 829.6149886533858 },
            just: { cx: 249, cy: 830.8 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "c",
          ratio: 19 / 27,
          coordinates: {
            equal: { cx: 248.9190533625204, cy: 833.9407295342083 },
            just: { cx: 248.88888888888889, cy: 835.1111111111111 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "c",
          ratio: 23 / 32,
          coordinates: {
            equal: { cx: 248.46613268395492, cy: 851.5140518625492 },
            just: { cx: 248.4375, cy: 852.625 }
          },
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
          cents: { equal: "", just: "+18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "c",
          ratio: 13 / 18,
          coordinates: {
            equal: { cx: 248.36161252736287, cy: 855.5694339383202 },
            just: { cx: 248.33333333333334, cy: 856.6666666666666 }
          },
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
          cents: { equal: "", just: "-12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "c",
          ratio: 11 / 15,
          coordinates: {
            equal: { cx: 248.02714802626838, cy: 868.5466565807875 },
            just: { cx: 248, cy: 869.5999999999999 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "c",
          ratio: 179 / 243,
          coordinates: {
            equal: { cx: 247.92804743335148, cy: 872.3917595859629 },
            just: { cx: 247.90123456790124, cy: 873.4320987654321 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "c",
          ratio: 3 / 4,
          coordinates: {
            equal: { cx: 247.5254512746266, cy: 888.0124905444883 },
            just: { cx: 247.5, cy: 889 }
          },
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
          cents: { equal: "", just: "+22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "c",
          ratio: 61 / 81,
          coordinates: {
            equal: { cx: 247.432544468767, cy: 891.6172746118403 },
            just: { cx: 247.40740740740742, cy: 892.5925925925926 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "c",
          ratio: 103 / 135,
          coordinates: {
            equal: { cx: 247.13524269001633, cy: 903.1525836273667 },
            just: { cx: 247.11111111111111, cy: 904.0888888888888 }
          },
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
          cents: { equal: "", just: "+12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "c",
          ratio: 49 / 64,
          coordinates: {
            equal: { cx: 247.05511056996244, cy: 906.2617098854578 },
            just: { cx: 247.03125, cy: 907.1875 }
          },
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
          cents: { equal: "", just: "-18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "c",
          ratio: 31 / 40,
          coordinates: {
            equal: { cx: 246.77290614716392, cy: 917.2112414900395 },
            just: { cx: 246.75, cy: 918.1 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "c",
          ratio: 7 / 9,
          coordinates: {
            equal: { cx: 246.68929002189032, cy: 920.4555471506562 },
            just: { cx: 246.66666666666666, cy: 921.3333333333333 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "c",
          ratio: 959 / 1215,
          coordinates: {
            equal: { cx: 246.34243794668117, cy: 933.9134076687703 },
            just: { cx: 246.320987654321, cy: 934.7456790123457 }
          },
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
          cents: { equal: "", just: "+16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "c",
          ratio: 19 / 24,
          coordinates: {
            equal: { cx: 246.27120939552216, cy: 936.6770754537401 },
            just: { cx: 246.25, cy: 937.5 }
          },
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
          cents: { equal: "", just: "-14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "c",
          ratio: 4 / 5,
          coordinates: {
            equal: { cx: 246.02036101970128, cy: 946.4099924355908 },
            just: { cx: 246, cy: 947.2 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "c",
          ratio: 65 / 81,
          coordinates: {
            equal: { cx: 245.9460355750136, cy: 949.2938196894722 },
            just: { cx: 245.92592592592592, cy: 950.0740740740741 }
          },
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
          cents: { equal: "", just: "-2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "c",
          ratio: 13 / 16,
          coordinates: {
            equal: { cx: 245.64408845596995, cy: 961.0093679083662 },
            just: { cx: 245.625, cy: 961.75 }
          },
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
          cents: { equal: "", just: "+20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "c",
          ratio: 22 / 27,
          coordinates: {
            equal: { cx: 245.57440835157524, cy: 963.7129559588802 },
            just: { cx: 245.55555555555554, cy: 964.4444444444444 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "c",
          ratio: 37 / 45,
          coordinates: {
            equal: { cx: 245.35143201751225, cy: 972.364437720525 },
            just: { cx: 245.33333333333334, cy: 973.0666666666666 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "c",
          ratio: 211 / 256,
          coordinates: {
            equal: { cx: 245.2913329274718, cy: 974.6962824140934 },
            just: { cx: 245.2734375, cy: 975.390625 }
          },
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
          cents: { equal: "", just: "+2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "c",
          ratio: 5 / 6,
          coordinates: {
            equal: { cx: 245.01696751641774, cy: 985.3416603629922 },
            just: { cx: 245, cy: 986 }
          },
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
          cents: { equal: "", just: "+23" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "c",
          ratio: 203 / 243,
          coordinates: {
            equal: { cx: 244.95502964584466, cy: 987.7448497412269 },
            just: { cx: 244.93827160493828, cy: 988.395061728395 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "c",
          ratio: 341 / 405,
          coordinates: {
            equal: { cx: 244.7568284600109, cy: 995.4350557515778 },
            just: { cx: 244.74074074074073, cy: 996.0592592592593 }
          },
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
          cents: { equal: "", just: "+14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "c",
          ratio: 27 / 32,
          coordinates: {
            equal: { cx: 244.70340704664162, cy: 997.5078065903051 },
            just: { cx: 244.6875, cy: 998.125 }
          },
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
          cents: { equal: "", just: "-16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "c",
          ratio: 17 / 20,
          coordinates: {
            equal: { cx: 244.51527076477595, cy: 1004.8074943266929 },
            just: { cx: 244.5, cy: 1005.4 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "c",
          ratio: 23 / 27,
          coordinates: {
            equal: { cx: 244.4595266812602, cy: 1006.9703647671041 },
            just: { cx: 244.44444444444446, cy: 1007.5555555555555 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "c",
          ratio: 55 / 64,
          coordinates: {
            equal: { cx: 244.23306634197746, cy: 1015.7570259312746 },
            just: { cx: 244.21875, cy: 1016.3125 }
          },
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
          cents: { equal: "", just: "+18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "c",
          ratio: 31 / 36,
          coordinates: {
            equal: { cx: 244.18080626368143, cy: 1017.7847169691602 },
            just: { cx: 244.16666666666666, cy: 1018.3333333333333 }
          },
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
          cents: { equal: "", just: "-12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "c",
          ratio: 13 / 15,
          coordinates: {
            equal: { cx: 244.0135740131342, cy: 1024.2733282903937 },
            just: { cx: 244, cy: 1024.8000000000002 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "c",
          ratio: 211 / 243,
          coordinates: {
            equal: { cx: 243.96402371667574, cy: 1026.1958797929815 },
            just: { cx: 243.9506172839506, cy: 1026.716049382716 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "c",
          ratio: 7 / 8,
          coordinates: {
            equal: { cx: 243.76272563731328, cy: 1034.006245272244 },
            just: { cx: 243.75, cy: 1034.5 }
          },
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
          cents: { equal: "", just: "+22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "c",
          ratio: 71 / 81,
          coordinates: {
            equal: { cx: 243.7162722343835, cy: 1035.80863730592 },
            just: { cx: 243.7037037037037, cy: 1036.2962962962963 }
          },
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
          cents: { equal: "", just: "+22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 0,
          string: "g",
          ratio: 1 / 81,
          coordinates: {
            equal: { cx: 289.8988746460038, cy: 27.770991205161476 },
            just: { cx: 289.87654320987656, cy: 30.37037037037037 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "g",
          ratio: 7 / 135,
          coordinates: {
            equal: { cx: 289.5029196601636, cy: 73.86015155695502 },
            just: { cx: 289.48148148148147, cy: 76.35555555555555 }
          },
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
          cents: { equal: "", just: "+12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "g",
          ratio: 1 / 16,
          coordinates: {
            equal: { cx: 289.3961974178864, cy: 86.28262055802438 },
            just: { cx: 289.375, cy: 88.75 }
          },
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
          cents: { equal: "", just: "-18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "g",
          ratio: 1 / 10,
          coordinates: {
            equal: { cx: 289.02034952117094, cy: 130.0313157357034 },
            just: { cx: 289, cy: 132.4 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "g",
          ratio: 1 / 9,
          coordinates: {
            equal: { cx: 288.9089871814034, cy: 142.99389208464532 },
            just: { cx: 288.8888888888889, cy: 145.33333333333333 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "g",
          ratio: 5 / 32,
          coordinates: {
            equal: { cx: 288.45657767609777, cy: 195.65435850222195 },
            just: { cx: 288.4375, cy: 197.875 }
          },
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
          cents: { equal: "", just: "+16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "g",
          ratio: 1 / 6,
          coordinates: {
            equal: { cx: 288.35217548256566, cy: 207.806773829355 },
            just: { cx: 288.3333333333333, cy: 210 }
          },
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
          cents: { equal: "", just: "-14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "g",
          ratio: 1 / 5,
          coordinates: {
            equal: { cx: 288.01808846326304, cy: 246.69450287618082 },
            just: { cx: 288, cy: 248.8 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "g",
          ratio: 17 / 81,
          coordinates: {
            equal: { cx: 287.91909971680303, cy: 258.2167929641292 },
            just: { cx: 287.9012345679012, cy: 260.2962962962963 }
          },
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
          cents: { equal: "", just: "-2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "g",
          ratio: 1 / 4,
          coordinates: {
            equal: { cx: 287.5169579343091, cy: 305.0260964464195 },
            just: { cx: 287.5, cy: 307 }
          },
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
          cents: { equal: "", just: "+20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "g",
          ratio: 7 / 27,
          coordinates: {
            equal: { cx: 287.4241559845028, cy: 315.8282434038711 },
            just: { cx: 287.4074074074074, cy: 317.77777777777777 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "g",
          ratio: 13 / 45,
          coordinates: {
            equal: { cx: 287.12718974512273, cy: 350.3951136677162 },
            just: { cx: 287.1111111111111, cy: 352.26666666666666 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "g",
          ratio: 19 / 64,
          coordinates: {
            equal: { cx: 287.0471480634148, cy: 359.7119654185183 },
            just: { cx: 287.03125, cy: 361.5625 }
          },
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
          cents: { equal: "", just: "-20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "g",
          ratio: 13 / 40,
          coordinates: {
            equal: { cx: 286.7652621408782, cy: 392.52348680177755 },
            just: { cx: 286.75, cy: 394.3 }
          },
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
          cents: { equal: "", just: "+2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "g",
          ratio: 1 / 3,
          coordinates: {
            equal: { cx: 286.6817403860525, cy: 402.24541906348395 },
            just: { cx: 286.6666666666667, cy: 404 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "g",
          ratio: 149 / 405,
          coordinates: {
            equal: { cx: 286.33527977344244, cy: 442.57343437130334 },
            just: { cx: 286.320987654321, cy: 444.23703703703706 }
          },
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
          cents: { equal: "", just: "+14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "g",
          ratio: 3 / 8,
          coordinates: {
            equal: { cx: 286.26413161192426, cy: 450.85508037201623 },
            just: { cx: 286.25, cy: 452.5 }
          },
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
          cents: { equal: "", just: "-16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "g",
          ratio: 2 / 5,
          coordinates: {
            equal: { cx: 286.0135663474473, cy: 480.02087715713566 },
            just: { cx: 286, cy: 481.6 }
          },
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
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "g",
          ratio: 11 / 27,
          coordinates: {
            equal: { cx: 285.9393247876023, cy: 488.66259472309684 },
            just: { cx: 285.9259259259259, cy: 490.2222222222222 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "g",
          ratio: 7 / 16,
          coordinates: {
            equal: { cx: 285.6377184507318, cy: 523.7695723348146 },
            just: { cx: 285.625, cy: 525.25 }
          },
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
          cents: { equal: "", just: "+18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "g",
          ratio: 4 / 9,
          coordinates: {
            equal: { cx: 285.56811698837714, cy: 531.8711825529033 },
            just: { cx: 285.55555555555554, cy: 533.3333333333333 }
          },
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
          cents: { equal: "", just: "-12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "g",
          ratio: 7 / 15,
          coordinates: {
            equal: { cx: 285.345392308842, cy: 557.7963352507873 },
            just: { cx: 285.3333333333333, cy: 559.2 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "g",
          ratio: 121 / 256,
          coordinates: {
            equal: { cx: 285.2853610475611, cy: 564.7839740638888 },
            just: { cx: 285.2734375, cy: 566.171875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "g",
          ratio: 1 / 2,
          coordinates: {
            equal: { cx: 285.0113052895394, cy: 596.684064297613 },
            just: { cx: 285, cy: 598 }
          },
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
          cents: { equal: "", just: "+22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "g",
          ratio: 41 / 81,
          coordinates: {
            equal: { cx: 284.94943732300186, cy: 603.8854956025808 },
            just: { cx: 284.9382716049383, cy: 605.1851851851852 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "g",
          ratio: 71 / 135,
          coordinates: {
            equal: { cx: 284.7514598300818, cy: 626.9300757784774 },
            just: { cx: 284.74074074074076, cy: 628.1777777777777 }
          },
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
          cents: { equal: "", just: "+12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "g",
          ratio: 17 / 32,
          coordinates: {
            equal: { cx: 284.6980987089432, cy: 633.1413102790121 },
            just: { cx: 284.6875, cy: 634.375 }
          },
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
          cents: { equal: "", just: "-18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "g",
          ratio: 11 / 20,
          coordinates: {
            equal: { cx: 284.51017476058547, cy: 655.0156578678518 },
            just: { cx: 284.5, cy: 656.2 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "g",
          ratio: 5 / 9,
          coordinates: {
            equal: { cx: 284.4544935907017, cy: 661.4969460423227 },
            just: { cx: 284.44444444444446, cy: 662.6666666666666 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "g",
          ratio: 37 / 64,
          coordinates: {
            equal: { cx: 284.22828883804885, cy: 687.8271792511109 },
            just: { cx: 284.21875, cy: 688.9375 }
          },
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
          cents: { equal: "", just: "+16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "g",
          ratio: 7 / 12,
          coordinates: {
            equal: { cx: 284.17608774128286, cy: 693.9033869146775 },
            just: { cx: 284.1666666666667, cy: 695 }
          },
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
          cents: { equal: "", just: "-14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "g",
          ratio: 3 / 5,
          coordinates: {
            equal: { cx: 284.00904423163155, cy: 713.3472514380904 },
            just: { cx: 284, cy: 714.4 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "g",
          ratio: 49 / 81,
          coordinates: {
            equal: { cx: 283.9595498584015, cy: 719.1083964820647 },
            just: { cx: 283.95061728395063, cy: 720.1481481481482 }
          },
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
          cents: { equal: "", just: "-2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "g",
          ratio: 5 / 8,
          coordinates: {
            equal: { cx: 283.75847896715453, cy: 742.5130482232098 },
            just: { cx: 283.75, cy: 743.5 }
          },
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
          cents: { equal: "", just: "+20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "g",
          ratio: 17 / 27,
          coordinates: {
            equal: { cx: 283.7120779922514, cy: 747.9141217019356 },
            just: { cx: 283.7037037037037, cy: 748.8888888888888 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "g",
          ratio: 29 / 45,
          coordinates: {
            equal: { cx: 283.56359487256134, cy: 765.1975568338582 },
            just: { cx: 283.55555555555554, cy: 766.1333333333333 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "g",
          ratio: 83 / 128,
          coordinates: {
            equal: { cx: 283.52357403170737, cy: 769.8559827092591 },
            just: { cx: 283.515625, cy: 770.78125 }
          },
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
          cents: { equal: "", just: "-20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "g",
          ratio: 53 / 80,
          coordinates: {
            equal: { cx: 283.3826310704391, cy: 786.2617434008887 },
            just: { cx: 283.375, cy: 787.15 }
          },
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
          cents: { equal: "", just: "+2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "g",
          ratio: 2 / 3,
          coordinates: {
            equal: { cx: 283.34087019302626, cy: 791.122709531742 },
            just: { cx: 283.3333333333333, cy: 792 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "g",
          ratio: 277 / 405,
          coordinates: {
            equal: { cx: 283.1676398867212, cy: 811.2867171856516 },
            just: { cx: 283.1604938271605, cy: 812.1185185185185 }
          },
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
          cents: { equal: "", just: "+14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "g",
          ratio: 11 / 16,
          coordinates: {
            equal: { cx: 283.13206580596216, cy: 815.4275401860081 },
            just: { cx: 283.125, cy: 816.25 }
          },
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
          cents: { equal: "", just: "-16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "g",
          ratio: 7 / 10,
          coordinates: {
            equal: { cx: 283.00678317372365, cy: 830.0104385785677 },
            just: { cx: 283, cy: 830.8 }
          },
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
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "g",
          ratio: 19 / 27,
          coordinates: {
            equal: { cx: 282.9696623938011, cy: 834.3312973615484 },
            just: { cx: 282.962962962963, cy: 835.1111111111111 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "g",
          ratio: 23 / 32,
          coordinates: {
            equal: { cx: 282.81885922536594, cy: 851.8847861674074 },
            just: { cx: 282.8125, cy: 852.625 }
          },
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
          cents: { equal: "", just: "+18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "g",
          ratio: 13 / 18,
          coordinates: {
            equal: { cx: 282.78405849418857, cy: 855.9355912764516 },
            just: { cx: 282.77777777777777, cy: 856.6666666666666 }
          },
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
          cents: { equal: "", just: "-12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "g",
          ratio: 11 / 15,
          coordinates: {
            equal: { cx: 282.67269615442103, cy: 868.8981676253935 },
            just: { cx: 282.6666666666667, cy: 869.5999999999999 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "g",
          ratio: 377 / 512,
          coordinates: {
            equal: { cx: 282.64268052378054, cy: 872.3919870319443 },
            just: { cx: 282.63671875, cy: 873.0859375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "g",
          ratio: 3 / 4,
          coordinates: {
            equal: { cx: 282.5056526447697, cy: 888.3420321488065 },
            just: { cx: 282.5, cy: 889 }
          },
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
          cents: { equal: "", just: "+22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "g",
          ratio: 61 / 81,
          coordinates: {
            equal: { cx: 282.47471866150096, cy: 891.9427478012904 },
            just: { cx: 282.4691358024691, cy: 892.5925925925926 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "g",
          ratio: 103 / 135,
          coordinates: {
            equal: { cx: 282.3757299150409, cy: 903.4650378892388 },
            just: { cx: 282.3703703703704, cy: 904.0888888888888 }
          },
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
          cents: { equal: "", just: "+12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "g",
          ratio: 49 / 64,
          coordinates: {
            equal: { cx: 282.3490493544716, cy: 906.570655139506 },
            just: { cx: 282.34375, cy: 907.1875 }
          },
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
          cents: { equal: "", just: "-18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "g",
          ratio: 31 / 40,
          coordinates: {
            equal: { cx: 282.2550873802927, cy: 917.5078289339259 },
            just: { cx: 282.25, cy: 918.1 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "g",
          ratio: 7 / 9,
          coordinates: {
            equal: { cx: 282.2272467953508, cy: 920.7484730211613 },
            just: { cx: 282.22222222222223, cy: 921.3333333333333 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "g",
          ratio: 101 / 128,
          coordinates: {
            equal: { cx: 282.11414441902446, cy: 933.9135896255555 },
            just: { cx: 282.109375, cy: 934.46875 }
          },
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
          cents: { equal: "", just: "+16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "g",
          ratio: 19 / 24,
          coordinates: {
            equal: { cx: 282.0880438706414, cy: 936.9516934573386 },
            just: { cx: 282.0833333333333, cy: 937.5 }
          },
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
          cents: { equal: "", just: "-14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "g",
          ratio: 4 / 5,
          coordinates: {
            equal: { cx: 282.00452211581575, cy: 946.6736257190453 },
            just: { cx: 282, cy: 947.2 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "g",
          ratio: 65 / 81,
          coordinates: {
            equal: { cx: 281.97977492920074, cy: 949.5541982410323 },
            just: { cx: 281.9753086419753, cy: 950.0740740740741 }
          },
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
          cents: { equal: "", just: "-2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "g",
          ratio: 13 / 16,
          coordinates: {
            equal: { cx: 281.8792394835773, cy: 961.2565241116049 },
            just: { cx: 281.875, cy: 961.75 }
          },
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
          cents: { equal: "", just: "+20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "g",
          ratio: 22 / 27,
          coordinates: {
            equal: { cx: 281.85603899612573, cy: 963.9570608509677 },
            just: { cx: 281.85185185185185, cy: 964.4444444444444 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "g",
          ratio: 37 / 45,
          coordinates: {
            equal: { cx: 281.78179743628067, cy: 972.598778416929 },
            just: { cx: 281.77777777777777, cy: 973.0666666666666 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "g",
          ratio: 211 / 256,
          coordinates: {
            equal: { cx: 281.7617870158537, cy: 974.9279913546296 },
            just: { cx: 281.7578125, cy: 975.390625 }
          },
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
          cents: { equal: "", just: "-20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "g",
          ratio: 133 / 160,
          coordinates: {
            equal: { cx: 281.69131553521953, cy: 983.1308717004445 },
            just: { cx: 281.6875, cy: 983.575 }
          },
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
          cents: { equal: "", just: "+2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "g",
          ratio: 5 / 6,
          coordinates: {
            equal: { cx: 281.67043509651313, cy: 985.561354765871 },
            just: { cx: 281.6666666666667, cy: 986 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "g",
          ratio: 341 / 405,
          coordinates: {
            equal: { cx: 281.5838199433606, cy: 995.6433585928258 },
            just: { cx: 281.58024691358025, cy: 996.0592592592593 }
          },
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
          cents: { equal: "", just: "+14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "g",
          ratio: 27 / 32,
          coordinates: {
            equal: { cx: 281.5660329029811, cy: 997.7137700930041 },
            just: { cx: 281.5625, cy: 998.125 }
          },
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
          cents: { equal: "", just: "-16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "g",
          ratio: 17 / 20,
          coordinates: {
            equal: { cx: 281.5033915868618, cy: 1005.0052192892839 },
            just: { cx: 281.5, cy: 1005.4 }
          },
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
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "g",
          ratio: 23 / 27,
          coordinates: {
            equal: { cx: 281.4848311969006, cy: 1007.1656486807743 },
            just: { cx: 281.48148148148147, cy: 1007.5555555555555 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "g",
          ratio: 55 / 64,
          coordinates: {
            equal: { cx: 281.40942961268297, cy: 1015.9423930837036 },
            just: { cx: 281.40625, cy: 1016.3125 }
          },
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
          cents: { equal: "", just: "+18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "g",
          ratio: 31 / 36,
          coordinates: {
            equal: { cx: 281.3920292470943, cy: 1017.9677956382259 },
            just: { cx: 281.3888888888889, cy: 1018.3333333333333 }
          },
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
          cents: { equal: "", just: "-12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "g",
          ratio: 13 / 15,
          coordinates: {
            equal: { cx: 281.3363480772105, cy: 1024.4490838126967 },
            just: { cx: 281.3333333333333, cy: 1024.8000000000002 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "g",
          ratio: 889 / 1024,
          coordinates: {
            equal: { cx: 281.32134026189027, cy: 1026.195993515972 },
            just: { cx: 281.318359375, cy: 1026.54296875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "g",
          ratio: 7 / 8,
          coordinates: {
            equal: { cx: 281.25282632238486, cy: 1034.1710160744033 },
            just: { cx: 281.25, cy: 1034.5 }
          },
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
          cents: { equal: "", just: "+22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "g",
          ratio: 71 / 81,
          coordinates: {
            equal: { cx: 281.23735933075045, cy: 1035.9713739006452 },
            just: { cx: 281.2345679012346, cy: 1036.2962962962963 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "d",
          ratio: 7 / 135,
          coordinates: {
            equal: { cx: 310.5078054814575, cy: 75.108558041657 },
            just: { cx: 310.51851851851853, cy: 76.35555555555555 }
          },
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
          cents: { equal: "", just: "+12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "d",
          ratio: 1 / 16,
          coordinates: {
            equal: { cx: 310.61440727536694, cy: 87.51700685271261 },
            just: { cx: 310.625, cy: 88.75 }
          },
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
          cents: { equal: "", just: "-18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "d",
          ratio: 1 / 10,
          coordinates: {
            equal: { cx: 310.9898309843523, cy: 131.2163265786041 },
            just: { cx: 311, cy: 132.4 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "d",
          ratio: 1 / 9,
          coordinates: {
            equal: { cx: 311.1010676388664, cy: 144.16427316405344 },
            just: { cx: 311.1111111111111, cy: 145.33333333333333 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "d",
          ratio: 5 / 32,
          coordinates: {
            equal: { cx: 311.55296654783024, cy: 196.76530616744137 },
            just: { cx: 311.5625, cy: 197.875 }
          },
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
          cents: { equal: "", just: "+16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "d",
          ratio: 1 / 6,
          coordinates: {
            equal: { cx: 311.6572509114373, cy: 208.9040060913001 },
            just: { cx: 311.6666666666667, cy: 210 }
          },
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
          cents: { equal: "", just: "-14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "d",
          ratio: 1 / 5,
          coordinates: {
            equal: { cx: 311.9909608749798, cy: 247.7478458476481 },
            just: { cx: 312, cy: 248.8 }
          },
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
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "d",
          ratio: 107 / 512,
          coordinates: {
            equal: { cx: 312.0809061385909, cy: 258.2174745319763 },
            just: { cx: 312.08984375, cy: 259.2578125 }
          },
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
          cents: { equal: "", just: "-2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "d",
          ratio: 1 / 4,
          coordinates: {
            equal: { cx: 312.49152582029353, cy: 306.0136054821701 },
            just: { cx: 312.5, cy: 307 }
          },
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
          cents: { equal: "", just: "+20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "d",
          ratio: 7 / 27,
          coordinates: {
            equal: { cx: 312.5842230323887, cy: 316.80356097004454 },
            just: { cx: 312.5925925925926, cy: 317.77777777777777 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "d",
          ratio: 13 / 45,
          coordinates: {
            equal: { cx: 312.88085411109313, cy: 351.3314185312427 },
            just: { cx: 312.8888888888889, cy: 352.26666666666666 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "d",
          ratio: 19 / 64,
          coordinates: {
            equal: { cx: 312.96080545652524, cy: 360.6377551395345 },
            just: { cx: 312.96875, cy: 361.5625 }
          },
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
          cents: { equal: "", just: "-20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "d",
          ratio: 13 / 40,
          coordinates: {
            equal: { cx: 313.2423732382642, cy: 393.4122449339531 },
            just: { cx: 313.25, cy: 394.3 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "+2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "d",
          ratio: 1 / 3,
          coordinates: {
            equal: { cx: 313.3258007291498, cy: 403.12320487304004 },
            just: { cx: 313.3333333333333, cy: 404 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "d",
          ratio: 47 / 128,
          coordinates: {
            equal: { cx: 313.6647249108727, cy: 442.57397962558105 },
            just: { cx: 313.671875, cy: 443.40625 }
          },
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
          cents: { equal: "", just: "+14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "d",
          ratio: 3 / 8,
          coordinates: {
            equal: { cx: 313.74293818357796, cy: 451.6780045684751 },
            just: { cx: 313.75, cy: 452.5 }
          },
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
          cents: { equal: "", just: "-16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "d",
          ratio: 2 / 5,
          coordinates: {
            equal: { cx: 313.9932206562348, cy: 480.8108843857361 },
            just: { cx: 314, cy: 481.6 }
          },
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
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "d",
          ratio: 11 / 27,
          coordinates: {
            equal: { cx: 314.06737842591093, cy: 489.4428487760356 },
            just: { cx: 314.0740740740741, cy: 490.2222222222222 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "d",
          ratio: 7 / 16,
          coordinates: {
            equal: { cx: 314.3686443652202, cy: 524.5102041116276 },
            just: { cx: 314.375, cy: 525.25 }
          },
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
          cents: { equal: "", just: "+18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "d",
          ratio: 4 / 9,
          coordinates: {
            equal: { cx: 314.4381672742915, cy: 532.6026707275335 },
            just: { cx: 314.44444444444446, cy: 533.3333333333333 }
          },
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
          cents: { equal: "", just: "-12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "d",
          ratio: 7 / 15,
          coordinates: {
            equal: { cx: 314.6606405833199, cy: 558.498563898432 },
            just: { cx: 314.6666666666667, cy: 559.2 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "d",
          ratio: 121 / 256,
          coordinates: {
            equal: { cx: 314.7206040923939, cy: 565.4783163546508 },
            just: { cx: 314.7265625, cy: 566.171875 }
          },
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
          cents: { equal: "", just: "-22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "d",
          ratio: 79 / 160,
          coordinates: {
            equal: { cx: 314.9317799286982, cy: 590.0591837004648 },
            just: { cx: 314.9375, cy: 590.725 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "d",
          ratio: 1 / 2,
          coordinates: {
            equal: { cx: 314.9943505468624, cy: 597.34240365478 },
            just: { cx: 315, cy: 598 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "d",
          ratio: 71 / 135,
          coordinates: {
            equal: { cx: 315.2539027407288, cy: 627.5542790208285 },
            just: { cx: 315.25925925925924, cy: 628.1777777777777 }
          },
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
          cents: { equal: "", just: "+12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "d",
          ratio: 17 / 32,
          coordinates: {
            equal: { cx: 315.3072036376835, cy: 633.7585034263562 },
            just: { cx: 315.3125, cy: 634.375 }
          },
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
          cents: { equal: "", just: "-18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "d",
          ratio: 11 / 20,
          coordinates: {
            equal: { cx: 315.4949154921761, cy: 655.6081632893021 },
            just: { cx: 315.5, cy: 656.2 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "d",
          ratio: 5 / 9,
          coordinates: {
            equal: { cx: 315.5505338194332, cy: 662.0821365820268 },
            just: { cx: 315.55555555555554, cy: 662.6666666666666 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "d",
          ratio: 37 / 64,
          coordinates: {
            equal: { cx: 315.7764832739151, cy: 688.3826530837207 },
            just: { cx: 315.78125, cy: 688.9375 }
          },
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
          cents: { equal: "", just: "+16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "d",
          ratio: 7 / 12,
          coordinates: {
            equal: { cx: 315.8286254557186, cy: 694.4520030456501 },
            just: { cx: 315.8333333333333, cy: 695 }
          },
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
          cents: { equal: "", just: "-14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "d",
          ratio: 3 / 5,
          coordinates: {
            equal: { cx: 315.9954804374899, cy: 713.873922923824 },
            just: { cx: 316, cy: 714.4 }
          },
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
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "d",
          ratio: 619 / 1024,
          coordinates: {
            equal: { cx: 316.04045306929544, cy: 719.1087372659881 },
            just: { cx: 316.044921875, cy: 719.62890625 }
          },
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
          cents: { equal: "", just: "-2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "d",
          ratio: 5 / 8,
          coordinates: {
            equal: { cx: 316.24576291014677, cy: 743.0068027410852 },
            just: { cx: 316.25, cy: 743.5 }
          },
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
          cents: { equal: "", just: "+20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "d",
          ratio: 17 / 27,
          coordinates: {
            equal: { cx: 316.2921115161943, cy: 748.4017804850223 },
            just: { cx: 316.2962962962963, cy: 748.8888888888888 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "d",
          ratio: 29 / 45,
          coordinates: {
            equal: { cx: 316.4404270555466, cy: 765.6657092656214 },
            just: { cx: 316.44444444444446, cy: 766.1333333333333 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "d",
          ratio: 83 / 128,
          coordinates: {
            equal: { cx: 316.4804027282626, cy: 770.3188775697672 },
            just: { cx: 316.484375, cy: 770.78125 }
          },
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
          cents: { equal: "", just: "-20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "d",
          ratio: 53 / 80,
          coordinates: {
            equal: { cx: 316.6211866191321, cy: 786.7061224669766 },
            just: { cx: 316.625, cy: 787.15 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "+2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "d",
          ratio: 2 / 3,
          coordinates: {
            equal: { cx: 316.6629003645749, cy: 791.56160243652 },
            just: { cx: 316.6666666666667, cy: 792 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "d",
          ratio: 175 / 256,
          coordinates: {
            equal: { cx: 316.83236245543634, cy: 811.2869898127906 },
            just: { cx: 316.8359375, cy: 811.703125 }
          },
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
          cents: { equal: "", just: "+14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "d",
          ratio: 11 / 16,
          coordinates: {
            equal: { cx: 316.871469091789, cy: 815.8390022842375 },
            just: { cx: 316.875, cy: 816.25 }
          },
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
          cents: { equal: "", just: "-16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "d",
          ratio: 7 / 10,
          coordinates: {
            equal: { cx: 316.9966103281174, cy: 830.405442192868 },
            just: { cx: 317, cy: 830.8 }
          },
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
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "d",
          ratio: 19 / 27,
          coordinates: {
            equal: { cx: 317.0336892129555, cy: 834.7214243880178 },
            just: { cx: 317.037037037037, cy: 835.1111111111111 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "d",
          ratio: 23 / 32,
          coordinates: {
            equal: { cx: 317.18432218261006, cy: 852.2551020558138 },
            just: { cx: 317.1875, cy: 852.625 }
          },
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
          cents: { equal: "", just: "+18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "d",
          ratio: 13 / 18,
          coordinates: {
            equal: { cx: 317.2190836371458, cy: 856.3013353637667 },
            just: { cx: 317.22222222222223, cy: 856.6666666666666 }
          },
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
          cents: { equal: "", just: "-12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "d",
          ratio: 11 / 15,
          coordinates: {
            equal: { cx: 317.3303202916599, cy: 869.249281949216 },
            just: { cx: 317.3333333333333, cy: 869.5999999999999 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "d",
          ratio: 377 / 512,
          coordinates: {
            equal: { cx: 317.360302046197, cy: 872.7391581773254 },
            just: { cx: 317.36328125, cy: 873.0859375 }
          },
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
          cents: { equal: "", just: "-22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "d",
          ratio: 239 / 320,
          coordinates: {
            equal: { cx: 317.46588996434906, cy: 885.0295918502324 },
            just: { cx: 317.46875, cy: 885.3625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "d",
          ratio: 3 / 4,
          coordinates: {
            equal: { cx: 317.4971752734312, cy: 888.6712018273901 },
            just: { cx: 317.5, cy: 889 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "d",
          ratio: 103 / 135,
          coordinates: {
            equal: { cx: 317.6269513703644, cy: 903.7771395104143 },
            just: { cx: 317.6296296296296, cy: 904.0888888888888 }
          },
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
          cents: { equal: "", just: "+12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "d",
          ratio: 49 / 64,
          coordinates: {
            equal: { cx: 317.65360181884176, cy: 906.8792517131782 },
            just: { cx: 317.65625, cy: 907.1875 }
          },
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
          cents: { equal: "", just: "-18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "d",
          ratio: 31 / 40,
          coordinates: {
            equal: { cx: 317.74745774608806, cy: 917.8040816446511 },
            just: { cx: 317.75, cy: 918.1 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "d",
          ratio: 7 / 9,
          coordinates: {
            equal: { cx: 317.7752669097166, cy: 921.0410682910133 },
            just: { cx: 317.77777777777777, cy: 921.3333333333333 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "d",
          ratio: 101 / 128,
          coordinates: {
            equal: { cx: 317.88824163695756, cy: 934.1913265418602 },
            just: { cx: 317.890625, cy: 934.46875 }
          },
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
          cents: { equal: "", just: "+16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "d",
          ratio: 19 / 24,
          coordinates: {
            equal: { cx: 317.91431272785934, cy: 937.226001522825 },
            just: { cx: 317.9166666666667, cy: 937.5 }
          },
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
          cents: { equal: "", just: "-14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "d",
          ratio: 4 / 5,
          coordinates: {
            equal: { cx: 317.9977402187449, cy: 946.936961461912 },
            just: { cx: 318, cy: 947.2 }
          },
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
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "d",
          ratio: 1643 / 2048,
          coordinates: {
            equal: { cx: 318.0202265346477, cy: 949.554368632994 },
            just: { cx: 318.0224609375, cy: 949.814453125 }
          },
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
          cents: { equal: "", just: "-2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "d",
          ratio: 13 / 16,
          coordinates: {
            equal: { cx: 318.1228814550734, cy: 961.5034013705425 },
            just: { cx: 318.125, cy: 961.75 }
          },
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
          cents: { equal: "", just: "+20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "d",
          ratio: 22 / 27,
          coordinates: {
            equal: { cx: 318.1460557580972, cy: 964.200890242511 },
            just: { cx: 318.14814814814815, cy: 964.4444444444444 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "d",
          ratio: 37 / 45,
          coordinates: {
            equal: { cx: 318.2202135277733, cy: 972.8328546328106 },
            just: { cx: 318.22222222222223, cy: 973.0666666666666 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "d",
          ratio: 211 / 256,
          coordinates: {
            equal: { cx: 318.2402013641313, cy: 975.1594387848836 },
            just: { cx: 318.2421875, cy: 975.390625 }
          },
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
          cents: { equal: "", just: "-20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "d",
          ratio: 133 / 160,
          coordinates: {
            equal: { cx: 318.31059330956606, cy: 983.3530612334883 },
            just: { cx: 318.3125, cy: 983.575 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "+2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "d",
          ratio: 5 / 6,
          coordinates: {
            equal: { cx: 318.3314501822875, cy: 985.7808012182601 },
            just: { cx: 318.3333333333333, cy: 986 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "d",
          ratio: 431 / 512,
          coordinates: {
            equal: { cx: 318.4161812277182, cy: 995.6434949063953 },
            just: { cx: 318.41796875, cy: 995.8515625 }
          },
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
          cents: { equal: "", just: "+14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "d",
          ratio: 27 / 32,
          coordinates: {
            equal: { cx: 318.4357345458945, cy: 997.9195011421187 },
            just: { cx: 318.4375, cy: 998.125 }
          },
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
          cents: { equal: "", just: "-16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "d",
          ratio: 17 / 20,
          coordinates: {
            equal: { cx: 318.4983051640587, cy: 1005.2027210964341 },
            just: { cx: 318.5, cy: 1005.4 }
          },
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
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "d",
          ratio: 23 / 27,
          coordinates: {
            equal: { cx: 318.5168446064777, cy: 1007.360712194009 },
            just: { cx: 318.51851851851853, cy: 1007.5555555555555 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "d",
          ratio: 55 / 64,
          coordinates: {
            equal: { cx: 318.59216109130506, cy: 1016.1275510279069 },
            just: { cx: 318.59375, cy: 1016.3125 }
          },
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
          cents: { equal: "", just: "+18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "d",
          ratio: 31 / 36,
          coordinates: {
            equal: { cx: 318.6095418185729, cy: 1018.1506676818834 },
            just: { cx: 318.6111111111111, cy: 1018.3333333333333 }
          },
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
          cents: { equal: "", just: "-12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "d",
          ratio: 13 / 15,
          coordinates: {
            equal: { cx: 318.66516014583, cy: 1024.6246409746082 },
            just: { cx: 318.6666666666667, cy: 1024.8000000000002 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "d",
          ratio: 889 / 1024,
          coordinates: {
            equal: { cx: 318.68015102309846, cy: 1026.3695790886627 },
            just: { cx: 318.681640625, cy: 1026.54296875 }
          },
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
          cents: { equal: "", just: "-22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "d",
          ratio: 559 / 640,
          coordinates: {
            equal: { cx: 318.73294498217456, cy: 1032.5147959251162 },
            just: { cx: 318.734375, cy: 1032.68125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "d",
          ratio: 7 / 8,
          coordinates: {
            equal: { cx: 318.74858763671557, cy: 1034.335600913695 },
            just: { cx: 318.75, cy: 1034.5 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "a",
          ratio: 13 / 256,
          coordinates: {
            equal: { cx: 331.5234375, cy: 75.109375 },
            just: { cx: 331.5234375, cy: 75.109375 }
          },
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
          cents: { equal: "", just: "+12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "a",
          ratio: 1 / 16,
          coordinates: {
            equal: { cx: 331.875, cy: 88.75 },
            just: { cx: 331.875, cy: 88.75 }
          },
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
          cents: { equal: "", just: "-18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "a",
          ratio: 1 / 10,
          coordinates: {
            equal: { cx: 333, cy: 132.4 },
            just: { cx: 333, cy: 132.4 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "a",
          ratio: 1 / 9,
          coordinates: {
            equal: { cx: 333.3333333333333, cy: 145.33333333333333 },
            just: { cx: 333.3333333333333, cy: 145.33333333333333 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "a",
          ratio: 5 / 32,
          coordinates: {
            equal: { cx: 334.6875, cy: 197.875 },
            just: { cx: 334.6875, cy: 197.875 }
          },
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
          cents: { equal: "", just: "+16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "a",
          ratio: 1 / 6,
          coordinates: {
            equal: { cx: 335, cy: 210 },
            just: { cx: 335, cy: 210 }
          },
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
          cents: { equal: "", just: "-14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "a",
          ratio: 1 / 5,
          coordinates: {
            equal: { cx: 336, cy: 248.8 },
            just: { cx: 336, cy: 248.8 }
          },
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
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "a",
          ratio: 107 / 512,
          coordinates: {
            equal: { cx: 336.26953125, cy: 259.2578125 },
            just: { cx: 336.26953125, cy: 259.2578125 }
          },
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
          cents: { equal: "", just: "-23" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "a",
          ratio: 77 / 320,
          coordinates: {
            equal: { cx: 337.21875, cy: 296.08750000000003 },
            just: { cx: 337.21875, cy: 296.08750000000003 }
          },
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
          cents: { equal: "", just: "-2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "a",
          ratio: 1 / 4,
          coordinates: {
            equal: { cx: 337.5, cy: 307 },
            just: { cx: 337.5, cy: 307 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "a",
          ratio: 13 / 45,
          coordinates: {
            equal: { cx: 338.6666666666667, cy: 352.26666666666666 },
            just: { cx: 338.6666666666667, cy: 352.26666666666666 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "a",
          ratio: 19 / 64,
          coordinates: {
            equal: { cx: 338.90625, cy: 361.5625 },
            just: { cx: 338.90625, cy: 361.5625 }
          },
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
          cents: { equal: "", just: "-20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "a",
          ratio: 13 / 40,
          coordinates: {
            equal: { cx: 339.75, cy: 394.3 },
            just: { cx: 339.75, cy: 394.3 }
          },
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
          cents: { equal: "", just: "+2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "a",
          ratio: 1 / 3,
          coordinates: {
            equal: { cx: 340, cy: 404 },
            just: { cx: 340, cy: 404 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "a",
          ratio: 47 / 128,
          coordinates: {
            equal: { cx: 341.015625, cy: 443.40625 },
            just: { cx: 341.015625, cy: 443.40625 }
          },
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
          cents: { equal: "", just: "+14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "a",
          ratio: 3 / 8,
          coordinates: {
            equal: { cx: 341.25, cy: 452.5 },
            just: { cx: 341.25, cy: 452.5 }
          },
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
          cents: { equal: "", just: "-16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "a",
          ratio: 2 / 5,
          coordinates: {
            equal: { cx: 342, cy: 481.6 },
            just: { cx: 342, cy: 481.6 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "a",
          ratio: 833 / 2048,
          coordinates: {
            equal: { cx: 342.2021484375, cy: 489.443359375 },
            just: { cx: 342.2021484375, cy: 489.443359375 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "a",
          ratio: 7 / 16,
          coordinates: {
            equal: { cx: 343.125, cy: 525.25 },
            just: { cx: 343.125, cy: 525.25 }
          },
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
          cents: { equal: "", just: "+18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "a",
          ratio: 4 / 9,
          coordinates: {
            equal: { cx: 343.3333333333333, cy: 533.3333333333333 },
            just: { cx: 343.3333333333333, cy: 533.3333333333333 }
          },
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
          cents: { equal: "", just: "-12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "a",
          ratio: 7 / 15,
          coordinates: {
            equal: { cx: 344, cy: 559.2 },
            just: { cx: 344, cy: 559.2 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "a",
          ratio: 121 / 256,
          coordinates: {
            equal: { cx: 344.1796875, cy: 566.171875 },
            just: { cx: 344.1796875, cy: 566.171875 }
          },
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
          cents: { equal: "", just: "-22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "a",
          ratio: 79 / 160,
          coordinates: {
            equal: { cx: 344.8125, cy: 590.725 },
            just: { cx: 344.8125, cy: 590.725 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "a",
          ratio: 1 / 2,
          coordinates: {
            equal: { cx: 345, cy: 598 },
            just: { cx: 345, cy: 598 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "a",
          ratio: 269 / 512,
          coordinates: {
            equal: { cx: 345.76171875, cy: 627.5546875 },
            just: { cx: 345.76171875, cy: 627.5546875 }
          },
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
          cents: { equal: "", just: "+12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "a",
          ratio: 17 / 32,
          coordinates: {
            equal: { cx: 345.9375, cy: 634.375 },
            just: { cx: 345.9375, cy: 634.375 }
          },
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
          cents: { equal: "", just: "-18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "a",
          ratio: 11 / 20,
          coordinates: {
            equal: { cx: 346.5, cy: 656.2 },
            just: { cx: 346.5, cy: 656.2 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "a",
          ratio: 5 / 9,
          coordinates: {
            equal: { cx: 346.6666666666667, cy: 662.6666666666666 },
            just: { cx: 346.6666666666667, cy: 662.6666666666666 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "a",
          ratio: 37 / 64,
          coordinates: {
            equal: { cx: 347.34375, cy: 688.9375 },
            just: { cx: 347.34375, cy: 688.9375 }
          },
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
          cents: { equal: "", just: "+16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "a",
          ratio: 7 / 12,
          coordinates: {
            equal: { cx: 347.5, cy: 695 },
            just: { cx: 347.5, cy: 695 }
          },
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
          cents: { equal: "", just: "-14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "a",
          ratio: 3 / 5,
          coordinates: {
            equal: { cx: 348, cy: 714.4 },
            just: { cx: 348, cy: 714.4 }
          },
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
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "a",
          ratio: 619 / 1024,
          coordinates: {
            equal: { cx: 348.134765625, cy: 719.62890625 },
            just: { cx: 348.134765625, cy: 719.62890625 }
          },
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
          cents: { equal: "", just: "-23" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "a",
          ratio: 397 / 640,
          coordinates: {
            equal: { cx: 348.609375, cy: 738.04375 },
            just: { cx: 348.609375, cy: 738.04375 }
          },
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
          cents: { equal: "", just: "-2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "a",
          ratio: 5 / 8,
          coordinates: {
            equal: { cx: 348.75, cy: 743.5 },
            just: { cx: 348.75, cy: 743.5 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "a",
          ratio: 29 / 45,
          coordinates: {
            equal: { cx: 349.3333333333333, cy: 766.1333333333333 },
            just: { cx: 349.3333333333333, cy: 766.1333333333333 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "a",
          ratio: 83 / 128,
          coordinates: {
            equal: { cx: 349.453125, cy: 770.78125 },
            just: { cx: 349.453125, cy: 770.78125 }
          },
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
          cents: { equal: "", just: "-20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "a",
          ratio: 53 / 80,
          coordinates: {
            equal: { cx: 349.875, cy: 787.15 },
            just: { cx: 349.875, cy: 787.15 }
          },
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
          cents: { equal: "", just: "+2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "a",
          ratio: 2 / 3,
          coordinates: {
            equal: { cx: 350, cy: 792 },
            just: { cx: 350, cy: 792 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "a",
          ratio: 175 / 256,
          coordinates: {
            equal: { cx: 350.5078125, cy: 811.703125 },
            just: { cx: 350.5078125, cy: 811.703125 }
          },
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
          cents: { equal: "", just: "+14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "a",
          ratio: 11 / 16,
          coordinates: {
            equal: { cx: 350.625, cy: 816.25 },
            just: { cx: 350.625, cy: 816.25 }
          },
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
          cents: { equal: "", just: "-16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "a",
          ratio: 7 / 10,
          coordinates: {
            equal: { cx: 351, cy: 830.8 },
            just: { cx: 351, cy: 830.8 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "a",
          ratio: 2881 / 4096,
          coordinates: {
            equal: { cx: 351.10107421875, cy: 834.7216796875 },
            just: { cx: 351.10107421875, cy: 834.7216796875 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "a",
          ratio: 23 / 32,
          coordinates: {
            equal: { cx: 351.5625, cy: 852.625 },
            just: { cx: 351.5625, cy: 852.625 }
          },
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
          cents: { equal: "", just: "+18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "a",
          ratio: 13 / 18,
          coordinates: {
            equal: { cx: 351.6666666666667, cy: 856.6666666666666 },
            just: { cx: 351.6666666666667, cy: 856.6666666666666 }
          },
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
          cents: { equal: "", just: "-12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "a",
          ratio: 11 / 15,
          coordinates: {
            equal: { cx: 352, cy: 869.5999999999999 },
            just: { cx: 352, cy: 869.5999999999999 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "a",
          ratio: 377 / 512,
          coordinates: {
            equal: { cx: 352.08984375, cy: 873.0859375 },
            just: { cx: 352.08984375, cy: 873.0859375 }
          },
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
          cents: { equal: "", just: "-22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "a",
          ratio: 239 / 320,
          coordinates: {
            equal: { cx: 352.40625, cy: 885.3625 },
            just: { cx: 352.40625, cy: 885.3625 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "a",
          ratio: 3 / 4,
          coordinates: {
            equal: { cx: 352.5, cy: 889 },
            just: { cx: 352.5, cy: 889 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "a",
          ratio: 781 / 1024,
          coordinates: {
            equal: { cx: 352.880859375, cy: 903.77734375 },
            just: { cx: 352.880859375, cy: 903.77734375 }
          },
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
          cents: { equal: "", just: "+12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "a",
          ratio: 49 / 64,
          coordinates: {
            equal: { cx: 352.96875, cy: 907.1875 },
            just: { cx: 352.96875, cy: 907.1875 }
          },
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
          cents: { equal: "", just: "-18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "a",
          ratio: 31 / 40,
          coordinates: {
            equal: { cx: 353.25, cy: 918.1 },
            just: { cx: 353.25, cy: 918.1 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "a",
          ratio: 7 / 9,
          coordinates: {
            equal: { cx: 353.3333333333333, cy: 921.3333333333333 },
            just: { cx: 353.3333333333333, cy: 921.3333333333333 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "a",
          ratio: 101 / 128,
          coordinates: {
            equal: { cx: 353.671875, cy: 934.46875 },
            just: { cx: 353.671875, cy: 934.46875 }
          },
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
          cents: { equal: "", just: "+16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "a",
          ratio: 19 / 24,
          coordinates: {
            equal: { cx: 353.75, cy: 937.5 },
            just: { cx: 353.75, cy: 937.5 }
          },
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
          cents: { equal: "", just: "-14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "a",
          ratio: 4 / 5,
          coordinates: {
            equal: { cx: 354, cy: 947.2 },
            just: { cx: 354, cy: 947.2 }
          },
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
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "a",
          ratio: 1643 / 2048,
          coordinates: {
            equal: { cx: 354.0673828125, cy: 949.814453125 },
            just: { cx: 354.0673828125, cy: 949.814453125 }
          },
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
          cents: { equal: "", just: "-23" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "a",
          ratio: 1037 / 1280,
          coordinates: {
            equal: { cx: 354.3046875, cy: 959.021875 },
            just: { cx: 354.3046875, cy: 959.021875 }
          },
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
          cents: { equal: "", just: "-2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "a",
          ratio: 13 / 16,
          coordinates: {
            equal: { cx: 354.375, cy: 961.75 },
            just: { cx: 354.375, cy: 961.75 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "a",
          ratio: 37 / 45,
          coordinates: {
            equal: { cx: 354.6666666666667, cy: 973.0666666666666 },
            just: { cx: 354.6666666666667, cy: 973.0666666666666 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "a",
          ratio: 211 / 256,
          coordinates: {
            equal: { cx: 354.7265625, cy: 975.390625 },
            just: { cx: 354.7265625, cy: 975.390625 }
          },
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
          cents: { equal: "", just: "-20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "a",
          ratio: 133 / 160,
          coordinates: {
            equal: { cx: 354.9375, cy: 983.575 },
            just: { cx: 354.9375, cy: 983.575 }
          },
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
          cents: { equal: "", just: "+2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "a",
          ratio: 5 / 6,
          coordinates: {
            equal: { cx: 355, cy: 986 },
            just: { cx: 355, cy: 986 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "a",
          ratio: 431 / 512,
          coordinates: {
            equal: { cx: 355.25390625, cy: 995.8515625 },
            just: { cx: 355.25390625, cy: 995.8515625 }
          },
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
          cents: { equal: "", just: "+14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "a",
          ratio: 27 / 32,
          coordinates: {
            equal: { cx: 355.3125, cy: 998.125 },
            just: { cx: 355.3125, cy: 998.125 }
          },
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
          cents: { equal: "", just: "-16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "a",
          ratio: 17 / 20,
          coordinates: {
            equal: { cx: 355.5, cy: 1005.4 },
            just: { cx: 355.5, cy: 1005.4 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "a",
          ratio: 6977 / 8192,
          coordinates: {
            equal: { cx: 355.550537109375, cy: 1007.36083984375 },
            just: { cx: 355.550537109375, cy: 1007.36083984375 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "a",
          ratio: 55 / 64,
          coordinates: {
            equal: { cx: 355.78125, cy: 1016.3125 },
            just: { cx: 355.78125, cy: 1016.3125 }
          },
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
          cents: { equal: "", just: "+18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "a",
          ratio: 31 / 36,
          coordinates: {
            equal: { cx: 355.8333333333333, cy: 1018.3333333333333 },
            just: { cx: 355.8333333333333, cy: 1018.3333333333333 }
          },
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
          cents: { equal: "", just: "-12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "a",
          ratio: 13 / 15,
          coordinates: {
            equal: { cx: 356, cy: 1024.8000000000002 },
            just: { cx: 356, cy: 1024.8000000000002 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "a",
          ratio: 889 / 1024,
          coordinates: {
            equal: { cx: 356.044921875, cy: 1026.54296875 },
            just: { cx: 356.044921875, cy: 1026.54296875 }
          },
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
          cents: { equal: "", just: "-22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "a",
          ratio: 559 / 640,
          coordinates: {
            equal: { cx: 356.203125, cy: 1032.68125 },
            just: { cx: 356.203125, cy: 1032.68125 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "a",
          ratio: 7 / 8,
          coordinates: {
            equal: { cx: 356.25, cy: 1034.5 },
            just: { cx: 356.25, cy: 1034.5 }
          },
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
          cents: { equal: "", just: "+22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 0,
          string: "c",
          ratio: 1 / 81,
          coordinates: {
            equal: { cx: null, cy: 26.46909844736104 },
            just: { cx: 281.7037037037037, cy: 30.37037037037037 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "c",
          ratio: 7 / 135,
          coordinates: {
            equal: { cx: null, cy: 72.61033450946661 },
            just: { cx: 280.75555555555553, cy: 76.35555555555555 }
          },
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
          cents: { equal: "", just: "+12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "c",
          ratio: 1 / 16,
          coordinates: {
            equal: { cx: null, cy: 85.04683954183099 },
            just: { cx: 280.5, cy: 88.75 }
          },
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
          cents: { equal: "", just: "-18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "c",
          ratio: 1 / 10,
          coordinates: {
            equal: { cx: null, cy: 128.84496596015777 },
            just: { cx: 279.6, cy: 132.4 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "c",
          ratio: 1 / 9,
          coordinates: {
            equal: { cx: null, cy: 141.82218860262492 },
            just: { cx: 279.3333333333333, cy: 145.33333333333333 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "c",
          ratio: 191 / 1215,
          coordinates: {
            equal: { cx: null, cy: 195.65363067508142 },
            just: { cx: 278.22716049382717, cy: 198.9827160493827 }
          },
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
          cents: { equal: "", just: "+16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "c",
          ratio: 1 / 6,
          coordinates: {
            equal: { cx: null, cy: 206.70830181496086 },
            just: { cx: 278, cy: 210 }
          },
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
          cents: { equal: "", just: "-14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "c",
          ratio: 1 / 5,
          coordinates: {
            equal: { cx: null, cy: 245.63996974236247 },
            just: { cx: 277.2, cy: 248.8 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "c",
          ratio: 17 / 81,
          coordinates: {
            equal: { cx: null, cy: 257.1752787578888 },
            just: { cx: 276.962962962963, cy: 260.2962962962963 }
          },
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
          cents: { equal: "", just: "-2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "c",
          ratio: 1 / 4,
          coordinates: {
            equal: { cx: null, cy: 304.0374716334648 },
            just: { cx: 276, cy: 307 }
          },
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
          cents: { equal: "", just: "+20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "c",
          ratio: 7 / 27,
          coordinates: {
            equal: { cx: null, cy: 314.85182383552075 },
            just: { cx: 275.77777777777777, cy: 317.77777777777777 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "c",
          ratio: 13 / 45,
          coordinates: {
            equal: { cx: null, cy: 349.45775088209996 },
            just: { cx: 275.06666666666666, cy: 352.26666666666666 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "c",
          ratio: 19 / 64,
          coordinates: {
            equal: { cx: null, cy: 358.7851296563732 },
            just: { cx: 274.875, cy: 361.5625 }
          },
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
          cents: { equal: "", just: "+2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "c",
          ratio: 1 / 3,
          coordinates: {
            equal: { cx: null, cy: 401.3666414519687 },
            just: { cx: 274, cy: 404 }
          },
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
          cents: { equal: "", just: "+23" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "c",
          ratio: 83 / 243,
          coordinates: {
            equal: { cx: null, cy: 410.9793989649073 },
            just: { cx: 273.8024691358025, cy: 413.58024691358025 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "c",
          ratio: 149 / 405,
          coordinates: {
            equal: { cx: null, cy: 441.74022300631106 },
            just: { cx: 273.1703703703704, cy: 444.23703703703706 }
          },
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
          cents: { equal: "", just: "+14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "c",
          ratio: 3 / 8,
          coordinates: {
            equal: { cx: null, cy: 450.03122636122066 },
            just: { cx: 273, cy: 452.5 }
          },
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
          cents: { equal: "", just: "-16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "c",
          ratio: 2 / 5,
          coordinates: {
            equal: { cx: null, cy: 479.2299773067719 },
            just: { cx: 272.4, cy: 481.6 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "c",
          ratio: 11 / 27,
          coordinates: {
            equal: { cx: null, cy: 487.88145906841663 },
            just: { cx: 272.22222222222223, cy: 490.2222222222222 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "c",
          ratio: 7 / 16,
          coordinates: {
            equal: { cx: null, cy: 523.0281037250986 },
            just: { cx: 271.5, cy: 525.25 }
          },
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
          cents: { equal: "", just: "+18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "c",
          ratio: 4 / 9,
          coordinates: {
            equal: { cx: null, cy: 531.1388678766406 },
            just: { cx: 271.3333333333333, cy: 533.3333333333333 }
          },
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
          cents: { equal: "", just: "-12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "c",
          ratio: 7 / 15,
          coordinates: {
            equal: { cx: null, cy: 557.093313161575 },
            just: { cx: 270.8, cy: 559.2 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "c",
          ratio: 115 / 243,
          coordinates: {
            equal: { cx: null, cy: 564.783519171926 },
            just: { cx: 270.641975308642, cy: 566.8641975308642 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "c",
          ratio: 1 / 2,
          coordinates: {
            equal: { cx: null, cy: 596.0249810889766 },
            just: { cx: 270, cy: 598 }
          },
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
          cents: { equal: "", just: "+22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "c",
          ratio: 41 / 81,
          coordinates: {
            equal: { cx: null, cy: 603.2345492236806 },
            just: { cx: 269.85185185185185, cy: 605.1851851851852 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "c",
          ratio: 71 / 135,
          coordinates: {
            equal: { cx: null, cy: 626.3051672547333 },
            just: { cx: 269.3777777777778, cy: 628.1777777777777 }
          },
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
          cents: { equal: "", just: "+12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "c",
          ratio: 17 / 32,
          coordinates: {
            equal: { cx: null, cy: 632.5234197709156 },
            just: { cx: 269.25, cy: 634.375 }
          },
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
          cents: { equal: "", just: "-18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "c",
          ratio: 11 / 20,
          coordinates: {
            equal: { cx: null, cy: 654.4224829800789 },
            just: { cx: 268.8, cy: 656.2 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "c",
          ratio: 5 / 9,
          coordinates: {
            equal: { cx: null, cy: 660.9110943013125 },
            just: { cx: 268.6666666666667, cy: 662.6666666666666 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "c",
          ratio: 703 / 1215,
          coordinates: {
            equal: { cx: null, cy: 687.8268153375408 },
            just: { cx: 268.11358024691356, cy: 689.4913580246914 }
          },
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
          cents: { equal: "", just: "+16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "c",
          ratio: 7 / 12,
          coordinates: {
            equal: { cx: null, cy: 693.3541509074805 },
            just: { cx: 268, cy: 695 }
          },
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
          cents: { equal: "", just: "-14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "c",
          ratio: 3 / 5,
          coordinates: {
            equal: { cx: null, cy: 712.8199848711812 },
            just: { cx: 267.6, cy: 714.4 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "c",
          ratio: 49 / 81,
          coordinates: {
            equal: { cx: null, cy: 718.5876393789445 },
            just: { cx: 267.48148148148147, cy: 720.1481481481482 }
          },
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
          cents: { equal: "", just: "-2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "c",
          ratio: 5 / 8,
          coordinates: {
            equal: { cx: null, cy: 742.0187358167324 },
            just: { cx: 267, cy: 743.5 }
          },
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
          cents: { equal: "", just: "+20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "c",
          ratio: 17 / 27,
          coordinates: {
            equal: { cx: null, cy: 747.4259119177603 },
            just: { cx: 266.8888888888889, cy: 748.8888888888888 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "c",
          ratio: 29 / 45,
          coordinates: {
            equal: { cx: null, cy: 764.7288754410499 },
            just: { cx: 266.5333333333333, cy: 766.1333333333333 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "c",
          ratio: 83 / 128,
          coordinates: {
            equal: { cx: null, cy: 769.3925648281867 },
            just: { cx: 266.4375, cy: 770.78125 }
          },
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
          cents: { equal: "", just: "+2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "c",
          ratio: 2 / 3,
          coordinates: {
            equal: { cx: null, cy: 790.6833207259843 },
            just: { cx: 266, cy: 792 }
          },
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
          cents: { equal: "", just: "+23" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "c",
          ratio: 163 / 243,
          coordinates: {
            equal: { cx: null, cy: 795.4896994824537 },
            just: { cx: 265.9012345679012, cy: 796.7901234567902 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "c",
          ratio: 277 / 405,
          coordinates: {
            equal: { cx: null, cy: 810.8701115031555 },
            just: { cx: 265.5851851851852, cy: 812.1185185185185 }
          },
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
          cents: { equal: "", just: "+14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "c",
          ratio: 11 / 16,
          coordinates: {
            equal: { cx: null, cy: 815.0156131806103 },
            just: { cx: 265.5, cy: 816.25 }
          },
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
          cents: { equal: "", just: "-16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "c",
          ratio: 7 / 10,
          coordinates: {
            equal: { cx: null, cy: 829.6149886533858 },
            just: { cx: 265.2, cy: 830.8 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "c",
          ratio: 19 / 27,
          coordinates: {
            equal: { cx: null, cy: 833.9407295342083 },
            just: { cx: 265.1111111111111, cy: 835.1111111111111 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "c",
          ratio: 23 / 32,
          coordinates: {
            equal: { cx: null, cy: 851.5140518625492 },
            just: { cx: 264.75, cy: 852.625 }
          },
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
          cents: { equal: "", just: "+18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "c",
          ratio: 13 / 18,
          coordinates: {
            equal: { cx: null, cy: 855.5694339383202 },
            just: { cx: 264.6666666666667, cy: 856.6666666666666 }
          },
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
          cents: { equal: "", just: "-12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "c",
          ratio: 11 / 15,
          coordinates: {
            equal: { cx: null, cy: 868.5466565807875 },
            just: { cx: 264.4, cy: 869.5999999999999 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "c",
          ratio: 179 / 243,
          coordinates: {
            equal: { cx: null, cy: 872.3917595859629 },
            just: { cx: 264.320987654321, cy: 873.4320987654321 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "c",
          ratio: 3 / 4,
          coordinates: {
            equal: { cx: null, cy: 888.0124905444883 },
            just: { cx: 264, cy: 889 }
          },
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
          cents: { equal: "", just: "+22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "c",
          ratio: 61 / 81,
          coordinates: {
            equal: { cx: null, cy: 891.6172746118403 },
            just: { cx: 263.9259259259259, cy: 892.5925925925926 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "c",
          ratio: 103 / 135,
          coordinates: {
            equal: { cx: null, cy: 903.1525836273667 },
            just: { cx: 263.68888888888887, cy: 904.0888888888888 }
          },
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
          cents: { equal: "", just: "+12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "c",
          ratio: 49 / 64,
          coordinates: {
            equal: { cx: null, cy: 906.2617098854578 },
            just: { cx: 263.625, cy: 907.1875 }
          },
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
          cents: { equal: "", just: "-18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "c",
          ratio: 31 / 40,
          coordinates: {
            equal: { cx: null, cy: 917.2112414900395 },
            just: { cx: 263.4, cy: 918.1 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "c",
          ratio: 7 / 9,
          coordinates: {
            equal: { cx: null, cy: 920.4555471506562 },
            just: { cx: 263.3333333333333, cy: 921.3333333333333 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "c",
          ratio: 959 / 1215,
          coordinates: {
            equal: { cx: null, cy: 933.9134076687703 },
            just: { cx: 263.0567901234568, cy: 934.7456790123457 }
          },
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
          cents: { equal: "", just: "+16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "c",
          ratio: 19 / 24,
          coordinates: {
            equal: { cx: null, cy: 936.6770754537401 },
            just: { cx: 263, cy: 937.5 }
          },
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
          cents: { equal: "", just: "-14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "c",
          ratio: 4 / 5,
          coordinates: {
            equal: { cx: null, cy: 946.4099924355908 },
            just: { cx: 262.8, cy: 947.2 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "c",
          ratio: 65 / 81,
          coordinates: {
            equal: { cx: null, cy: 949.2938196894722 },
            just: { cx: 262.74074074074076, cy: 950.0740740740741 }
          },
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
          cents: { equal: "", just: "-2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "c",
          ratio: 13 / 16,
          coordinates: {
            equal: { cx: null, cy: 961.0093679083662 },
            just: { cx: 262.5, cy: 961.75 }
          },
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
          cents: { equal: "", just: "+20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "c",
          ratio: 22 / 27,
          coordinates: {
            equal: { cx: null, cy: 963.7129559588802 },
            just: { cx: 262.44444444444446, cy: 964.4444444444444 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "c",
          ratio: 37 / 45,
          coordinates: {
            equal: { cx: null, cy: 972.364437720525 },
            just: { cx: 262.26666666666665, cy: 973.0666666666666 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "c",
          ratio: 211 / 256,
          coordinates: {
            equal: { cx: null, cy: 974.6962824140934 },
            just: { cx: 262.21875, cy: 975.390625 }
          },
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
          cents: { equal: "", just: "+2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "c",
          ratio: 5 / 6,
          coordinates: {
            equal: { cx: null, cy: 985.3416603629922 },
            just: { cx: 262, cy: 986 }
          },
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
          cents: { equal: "", just: "+23" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "c",
          ratio: 203 / 243,
          coordinates: {
            equal: { cx: null, cy: 987.7448497412269 },
            just: { cx: 261.95061728395063, cy: 988.395061728395 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "c",
          ratio: 341 / 405,
          coordinates: {
            equal: { cx: null, cy: 995.4350557515778 },
            just: { cx: 261.7925925925926, cy: 996.0592592592593 }
          },
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
          cents: { equal: "", just: "+14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "c",
          ratio: 27 / 32,
          coordinates: {
            equal: { cx: null, cy: 997.5078065903051 },
            just: { cx: 261.75, cy: 998.125 }
          },
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
          cents: { equal: "", just: "-16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "c",
          ratio: 17 / 20,
          coordinates: {
            equal: { cx: null, cy: 1004.8074943266929 },
            just: { cx: 261.6, cy: 1005.4 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret9,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "c",
          ratio: 23 / 27,
          coordinates: {
            equal: { cx: null, cy: 1006.9703647671041 },
            just: { cx: 261.55555555555554, cy: 1007.5555555555555 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "c",
          ratio: 55 / 64,
          coordinates: {
            equal: { cx: null, cy: 1015.7570259312746 },
            just: { cx: 261.375, cy: 1016.3125 }
          },
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
          cents: { equal: "", just: "+18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "c",
          ratio: 31 / 36,
          coordinates: {
            equal: { cx: null, cy: 1017.7847169691602 },
            just: { cx: 261.3333333333333, cy: 1018.3333333333333 }
          },
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
          cents: { equal: "", just: "-12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "c",
          ratio: 13 / 15,
          coordinates: {
            equal: { cx: null, cy: 1024.2733282903937 },
            just: { cx: 261.2, cy: 1024.8000000000002 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "c",
          ratio: 211 / 243,
          coordinates: {
            equal: { cx: null, cy: 1026.1958797929815 },
            just: { cx: 261.1604938271605, cy: 1026.716049382716 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "c",
          ratio: 7 / 8,
          coordinates: {
            equal: { cx: null, cy: 1034.006245272244 },
            just: { cx: 261, cy: 1034.5 }
          },
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
          cents: { equal: "", just: "+22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "c",
          ratio: 71 / 81,
          coordinates: {
            equal: { cx: null, cy: 1035.80863730592 },
            just: { cx: 260.96296296296293, cy: 1036.2962962962963 }
          },
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
          cents: { equal: "", just: "+22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 0,
          string: "g",
          ratio: 1 / 81,
          coordinates: {
            equal: { cx: null, cy: 27.770991205161476 },
            just: { cx: 293.9012345679012, cy: 30.37037037037037 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "g",
          ratio: 7 / 135,
          coordinates: {
            equal: { cx: null, cy: 73.86015155695502 },
            just: { cx: 293.5851851851852, cy: 76.35555555555555 }
          },
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
          cents: { equal: "", just: "+12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "g",
          ratio: 1 / 16,
          coordinates: {
            equal: { cx: null, cy: 86.28262055802438 },
            just: { cx: 293.5, cy: 88.75 }
          },
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
          cents: { equal: "", just: "-18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "g",
          ratio: 1 / 10,
          coordinates: {
            equal: { cx: null, cy: 130.0313157357034 },
            just: { cx: 293.2, cy: 132.4 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "g",
          ratio: 1 / 9,
          coordinates: {
            equal: { cx: null, cy: 142.99389208464532 },
            just: { cx: 293.1111111111111, cy: 145.33333333333333 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "g",
          ratio: 5 / 32,
          coordinates: {
            equal: { cx: null, cy: 195.65435850222195 },
            just: { cx: 292.75, cy: 197.875 }
          },
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
          cents: { equal: "", just: "+16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "g",
          ratio: 1 / 6,
          coordinates: {
            equal: { cx: null, cy: 207.806773829355 },
            just: { cx: 292.6666666666667, cy: 210 }
          },
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
          cents: { equal: "", just: "-14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "g",
          ratio: 1 / 5,
          coordinates: {
            equal: { cx: null, cy: 246.69450287618082 },
            just: { cx: 292.4, cy: 248.8 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "g",
          ratio: 17 / 81,
          coordinates: {
            equal: { cx: null, cy: 258.2167929641292 },
            just: { cx: 292.320987654321, cy: 260.2962962962963 }
          },
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
          cents: { equal: "", just: "-2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "g",
          ratio: 1 / 4,
          coordinates: {
            equal: { cx: null, cy: 305.0260964464195 },
            just: { cx: 292, cy: 307 }
          },
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
          cents: { equal: "", just: "+20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "g",
          ratio: 7 / 27,
          coordinates: {
            equal: { cx: null, cy: 315.8282434038711 },
            just: { cx: 291.9259259259259, cy: 317.77777777777777 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "g",
          ratio: 13 / 45,
          coordinates: {
            equal: { cx: null, cy: 350.3951136677162 },
            just: { cx: 291.68888888888887, cy: 352.26666666666666 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "g",
          ratio: 19 / 64,
          coordinates: {
            equal: { cx: null, cy: 359.7119654185183 },
            just: { cx: 291.625, cy: 361.5625 }
          },
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
          cents: { equal: "", just: "-20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "g",
          ratio: 13 / 40,
          coordinates: {
            equal: { cx: null, cy: 392.52348680177755 },
            just: { cx: 291.4, cy: 394.3 }
          },
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
          cents: { equal: "", just: "+2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "g",
          ratio: 1 / 3,
          coordinates: {
            equal: { cx: null, cy: 402.24541906348395 },
            just: { cx: 291.3333333333333, cy: 404 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "g",
          ratio: 149 / 405,
          coordinates: {
            equal: { cx: null, cy: 442.57343437130334 },
            just: { cx: 291.0567901234568, cy: 444.23703703703706 }
          },
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
          cents: { equal: "", just: "+14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "g",
          ratio: 3 / 8,
          coordinates: {
            equal: { cx: null, cy: 450.85508037201623 },
            just: { cx: 291, cy: 452.5 }
          },
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
          cents: { equal: "", just: "-16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "g",
          ratio: 2 / 5,
          coordinates: {
            equal: { cx: null, cy: 480.02087715713566 },
            just: { cx: 290.8, cy: 481.6 }
          },
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
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "g",
          ratio: 11 / 27,
          coordinates: {
            equal: { cx: null, cy: 488.66259472309684 },
            just: { cx: 290.74074074074076, cy: 490.2222222222222 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "g",
          ratio: 7 / 16,
          coordinates: {
            equal: { cx: null, cy: 523.7695723348146 },
            just: { cx: 290.5, cy: 525.25 }
          },
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
          cents: { equal: "", just: "+18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "g",
          ratio: 4 / 9,
          coordinates: {
            equal: { cx: null, cy: 531.8711825529033 },
            just: { cx: 290.44444444444446, cy: 533.3333333333333 }
          },
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
          cents: { equal: "", just: "-12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "g",
          ratio: 7 / 15,
          coordinates: {
            equal: { cx: null, cy: 557.7963352507873 },
            just: { cx: 290.26666666666665, cy: 559.2 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "g",
          ratio: 121 / 256,
          coordinates: {
            equal: { cx: null, cy: 564.7839740638888 },
            just: { cx: 290.21875, cy: 566.171875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "g",
          ratio: 1 / 2,
          coordinates: {
            equal: { cx: null, cy: 596.684064297613 },
            just: { cx: 290, cy: 598 }
          },
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
          cents: { equal: "", just: "+22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "g",
          ratio: 41 / 81,
          coordinates: {
            equal: { cx: null, cy: 603.8854956025808 },
            just: { cx: 289.95061728395063, cy: 605.1851851851852 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "g",
          ratio: 71 / 135,
          coordinates: {
            equal: { cx: null, cy: 626.9300757784774 },
            just: { cx: 289.7925925925926, cy: 628.1777777777777 }
          },
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
          cents: { equal: "", just: "+12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "g",
          ratio: 17 / 32,
          coordinates: {
            equal: { cx: null, cy: 633.1413102790121 },
            just: { cx: 289.75, cy: 634.375 }
          },
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
          cents: { equal: "", just: "-18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "g",
          ratio: 11 / 20,
          coordinates: {
            equal: { cx: null, cy: 655.0156578678518 },
            just: { cx: 289.6, cy: 656.2 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "g",
          ratio: 5 / 9,
          coordinates: {
            equal: { cx: null, cy: 661.4969460423227 },
            just: { cx: 289.55555555555554, cy: 662.6666666666666 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "g",
          ratio: 37 / 64,
          coordinates: {
            equal: { cx: null, cy: 687.8271792511109 },
            just: { cx: 289.375, cy: 688.9375 }
          },
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
          cents: { equal: "", just: "+16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "g",
          ratio: 7 / 12,
          coordinates: {
            equal: { cx: null, cy: 693.9033869146775 },
            just: { cx: 289.3333333333333, cy: 695 }
          },
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
          cents: { equal: "", just: "-14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "g",
          ratio: 3 / 5,
          coordinates: {
            equal: { cx: null, cy: 713.3472514380904 },
            just: { cx: 289.2, cy: 714.4 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "g",
          ratio: 49 / 81,
          coordinates: {
            equal: { cx: null, cy: 719.1083964820647 },
            just: { cx: 289.1604938271605, cy: 720.1481481481482 }
          },
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
          cents: { equal: "", just: "-2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "g",
          ratio: 5 / 8,
          coordinates: {
            equal: { cx: null, cy: 742.5130482232098 },
            just: { cx: 289, cy: 743.5 }
          },
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
          cents: { equal: "", just: "+20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "g",
          ratio: 17 / 27,
          coordinates: {
            equal: { cx: null, cy: 747.9141217019356 },
            just: { cx: 288.962962962963, cy: 748.8888888888888 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "g",
          ratio: 29 / 45,
          coordinates: {
            equal: { cx: null, cy: 765.1975568338582 },
            just: { cx: 288.84444444444443, cy: 766.1333333333333 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "g",
          ratio: 83 / 128,
          coordinates: {
            equal: { cx: null, cy: 769.8559827092591 },
            just: { cx: 288.8125, cy: 770.78125 }
          },
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
          cents: { equal: "", just: "-20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "g",
          ratio: 53 / 80,
          coordinates: {
            equal: { cx: null, cy: 786.2617434008887 },
            just: { cx: 288.7, cy: 787.15 }
          },
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
          cents: { equal: "", just: "+2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "g",
          ratio: 2 / 3,
          coordinates: {
            equal: { cx: null, cy: 791.122709531742 },
            just: { cx: 288.6666666666667, cy: 792 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "g",
          ratio: 277 / 405,
          coordinates: {
            equal: { cx: null, cy: 811.2867171856516 },
            just: { cx: 288.5283950617284, cy: 812.1185185185185 }
          },
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
          cents: { equal: "", just: "+14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "g",
          ratio: 11 / 16,
          coordinates: {
            equal: { cx: null, cy: 815.4275401860081 },
            just: { cx: 288.5, cy: 816.25 }
          },
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
          cents: { equal: "", just: "-16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "g",
          ratio: 7 / 10,
          coordinates: {
            equal: { cx: null, cy: 830.0104385785677 },
            just: { cx: 288.4, cy: 830.8 }
          },
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
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "g",
          ratio: 19 / 27,
          coordinates: {
            equal: { cx: null, cy: 834.3312973615484 },
            just: { cx: 288.3703703703704, cy: 835.1111111111111 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "g",
          ratio: 23 / 32,
          coordinates: {
            equal: { cx: null, cy: 851.8847861674074 },
            just: { cx: 288.25, cy: 852.625 }
          },
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
          cents: { equal: "", just: "+18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "g",
          ratio: 13 / 18,
          coordinates: {
            equal: { cx: null, cy: 855.9355912764516 },
            just: { cx: 288.22222222222223, cy: 856.6666666666666 }
          },
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
          cents: { equal: "", just: "-12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "g",
          ratio: 11 / 15,
          coordinates: {
            equal: { cx: null, cy: 868.8981676253935 },
            just: { cx: 288.1333333333333, cy: 869.5999999999999 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "g",
          ratio: 377 / 512,
          coordinates: {
            equal: { cx: null, cy: 872.3919870319443 },
            just: { cx: 288.109375, cy: 873.0859375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "g",
          ratio: 3 / 4,
          coordinates: {
            equal: { cx: null, cy: 888.3420321488065 },
            just: { cx: 288, cy: 889 }
          },
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
          cents: { equal: "", just: "+22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "g",
          ratio: 61 / 81,
          coordinates: {
            equal: { cx: null, cy: 891.9427478012904 },
            just: { cx: 287.9753086419753, cy: 892.5925925925926 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "g",
          ratio: 103 / 135,
          coordinates: {
            equal: { cx: null, cy: 903.4650378892388 },
            just: { cx: 287.89629629629627, cy: 904.0888888888888 }
          },
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
          cents: { equal: "", just: "+12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "g",
          ratio: 49 / 64,
          coordinates: {
            equal: { cx: null, cy: 906.570655139506 },
            just: { cx: 287.875, cy: 907.1875 }
          },
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
          cents: { equal: "", just: "-18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "g",
          ratio: 31 / 40,
          coordinates: {
            equal: { cx: null, cy: 917.5078289339259 },
            just: { cx: 287.8, cy: 918.1 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "g",
          ratio: 7 / 9,
          coordinates: {
            equal: { cx: null, cy: 920.7484730211613 },
            just: { cx: 287.77777777777777, cy: 921.3333333333333 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "g",
          ratio: 101 / 128,
          coordinates: {
            equal: { cx: null, cy: 933.9135896255555 },
            just: { cx: 287.6875, cy: 934.46875 }
          },
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
          cents: { equal: "", just: "+16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "g",
          ratio: 19 / 24,
          coordinates: {
            equal: { cx: null, cy: 936.9516934573386 },
            just: { cx: 287.6666666666667, cy: 937.5 }
          },
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
          cents: { equal: "", just: "-14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "g",
          ratio: 4 / 5,
          coordinates: {
            equal: { cx: null, cy: 946.6736257190453 },
            just: { cx: 287.6, cy: 947.2 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "g",
          ratio: 65 / 81,
          coordinates: {
            equal: { cx: null, cy: 949.5541982410323 },
            just: { cx: 287.58024691358025, cy: 950.0740740740741 }
          },
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
          cents: { equal: "", just: "-2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "g",
          ratio: 13 / 16,
          coordinates: {
            equal: { cx: null, cy: 961.2565241116049 },
            just: { cx: 287.5, cy: 961.75 }
          },
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
          cents: { equal: "", just: "+20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "g",
          ratio: 22 / 27,
          coordinates: {
            equal: { cx: null, cy: 963.9570608509677 },
            just: { cx: 287.48148148148147, cy: 964.4444444444444 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "g",
          ratio: 37 / 45,
          coordinates: {
            equal: { cx: null, cy: 972.598778416929 },
            just: { cx: 287.4222222222222, cy: 973.0666666666666 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "g",
          ratio: 211 / 256,
          coordinates: {
            equal: { cx: null, cy: 974.9279913546296 },
            just: { cx: 287.40625, cy: 975.390625 }
          },
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
          cents: { equal: "", just: "-20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "g",
          ratio: 133 / 160,
          coordinates: {
            equal: { cx: null, cy: 983.1308717004445 },
            just: { cx: 287.35, cy: 983.575 }
          },
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
          cents: { equal: "", just: "+2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "g",
          ratio: 5 / 6,
          coordinates: {
            equal: { cx: null, cy: 985.561354765871 },
            just: { cx: 287.3333333333333, cy: 986 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "g",
          ratio: 341 / 405,
          coordinates: {
            equal: { cx: null, cy: 995.6433585928258 },
            just: { cx: 287.2641975308642, cy: 996.0592592592593 }
          },
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
          cents: { equal: "", just: "+14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "g",
          ratio: 27 / 32,
          coordinates: {
            equal: { cx: null, cy: 997.7137700930041 },
            just: { cx: 287.25, cy: 998.125 }
          },
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
          cents: { equal: "", just: "-16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "g",
          ratio: 17 / 20,
          coordinates: {
            equal: { cx: null, cy: 1005.0052192892839 },
            just: { cx: 287.2, cy: 1005.4 }
          },
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
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "g",
          ratio: 23 / 27,
          coordinates: {
            equal: { cx: null, cy: 1007.1656486807743 },
            just: { cx: 287.18518518518516, cy: 1007.5555555555555 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "g",
          ratio: 55 / 64,
          coordinates: {
            equal: { cx: null, cy: 1015.9423930837036 },
            just: { cx: 287.125, cy: 1016.3125 }
          },
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
          cents: { equal: "", just: "+18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "g",
          ratio: 31 / 36,
          coordinates: {
            equal: { cx: null, cy: 1017.9677956382259 },
            just: { cx: 287.1111111111111, cy: 1018.3333333333333 }
          },
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
          cents: { equal: "", just: "-12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "g",
          ratio: 13 / 15,
          coordinates: {
            equal: { cx: null, cy: 1024.4490838126967 },
            just: { cx: 287.06666666666666, cy: 1024.8000000000002 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "g",
          ratio: 889 / 1024,
          coordinates: {
            equal: { cx: null, cy: 1026.195993515972 },
            just: { cx: 287.0546875, cy: 1026.54296875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "g",
          ratio: 7 / 8,
          coordinates: {
            equal: { cx: null, cy: 1034.1710160744033 },
            just: { cx: 287, cy: 1034.5 }
          },
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
          cents: { equal: "", just: "+22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "g",
          ratio: 71 / 81,
          coordinates: {
            equal: { cx: null, cy: 1035.9713739006452 },
            just: { cx: 286.98765432098764, cy: 1036.2962962962963 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "d",
          ratio: 7 / 135,
          coordinates: {
            equal: { cx: null, cy: 75.108558041657 },
            just: { cx: 306.4148148148148, cy: 76.35555555555555 }
          },
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
          cents: { equal: "", just: "+12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "d",
          ratio: 1 / 16,
          coordinates: {
            equal: { cx: null, cy: 87.51700685271261 },
            just: { cx: 306.5, cy: 88.75 }
          },
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
          cents: { equal: "", just: "-18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "d",
          ratio: 1 / 10,
          coordinates: {
            equal: { cx: null, cy: 131.2163265786041 },
            just: { cx: 306.8, cy: 132.4 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "d",
          ratio: 1 / 9,
          coordinates: {
            equal: { cx: null, cy: 144.16427316405344 },
            just: { cx: 306.8888888888889, cy: 145.33333333333333 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "d",
          ratio: 5 / 32,
          coordinates: {
            equal: { cx: null, cy: 196.76530616744137 },
            just: { cx: 307.25, cy: 197.875 }
          },
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
          cents: { equal: "", just: "+16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "d",
          ratio: 1 / 6,
          coordinates: {
            equal: { cx: null, cy: 208.9040060913001 },
            just: { cx: 307.3333333333333, cy: 210 }
          },
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
          cents: { equal: "", just: "-14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "d",
          ratio: 1 / 5,
          coordinates: {
            equal: { cx: null, cy: 247.7478458476481 },
            just: { cx: 307.6, cy: 248.8 }
          },
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
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "d",
          ratio: 107 / 512,
          coordinates: {
            equal: { cx: null, cy: 258.2174745319763 },
            just: { cx: 307.671875, cy: 259.2578125 }
          },
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
          cents: { equal: "", just: "-2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "d",
          ratio: 1 / 4,
          coordinates: {
            equal: { cx: null, cy: 306.0136054821701 },
            just: { cx: 308, cy: 307 }
          },
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
          cents: { equal: "", just: "+20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "d",
          ratio: 7 / 27,
          coordinates: {
            equal: { cx: null, cy: 316.80356097004454 },
            just: { cx: 308.0740740740741, cy: 317.77777777777777 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "d",
          ratio: 13 / 45,
          coordinates: {
            equal: { cx: null, cy: 351.3314185312427 },
            just: { cx: 308.31111111111113, cy: 352.26666666666666 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "d",
          ratio: 19 / 64,
          coordinates: {
            equal: { cx: null, cy: 360.6377551395345 },
            just: { cx: 308.375, cy: 361.5625 }
          },
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
          cents: { equal: "", just: "-20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "d",
          ratio: 13 / 40,
          coordinates: {
            equal: { cx: null, cy: 393.4122449339531 },
            just: { cx: 308.6, cy: 394.3 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "+2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "d",
          ratio: 1 / 3,
          coordinates: {
            equal: { cx: null, cy: 403.12320487304004 },
            just: { cx: 308.6666666666667, cy: 404 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "d",
          ratio: 47 / 128,
          coordinates: {
            equal: { cx: null, cy: 442.57397962558105 },
            just: { cx: 308.9375, cy: 443.40625 }
          },
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
          cents: { equal: "", just: "+14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "d",
          ratio: 3 / 8,
          coordinates: {
            equal: { cx: null, cy: 451.6780045684751 },
            just: { cx: 309, cy: 452.5 }
          },
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
          cents: { equal: "", just: "-16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "d",
          ratio: 2 / 5,
          coordinates: {
            equal: { cx: null, cy: 480.8108843857361 },
            just: { cx: 309.2, cy: 481.6 }
          },
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
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "d",
          ratio: 11 / 27,
          coordinates: {
            equal: { cx: null, cy: 489.4428487760356 },
            just: { cx: 309.25925925925924, cy: 490.2222222222222 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "d",
          ratio: 7 / 16,
          coordinates: {
            equal: { cx: null, cy: 524.5102041116276 },
            just: { cx: 309.5, cy: 525.25 }
          },
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
          cents: { equal: "", just: "+18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "d",
          ratio: 4 / 9,
          coordinates: {
            equal: { cx: null, cy: 532.6026707275335 },
            just: { cx: 309.55555555555554, cy: 533.3333333333333 }
          },
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
          cents: { equal: "", just: "-12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "d",
          ratio: 7 / 15,
          coordinates: {
            equal: { cx: null, cy: 558.498563898432 },
            just: { cx: 309.73333333333335, cy: 559.2 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "d",
          ratio: 121 / 256,
          coordinates: {
            equal: { cx: null, cy: 565.4783163546508 },
            just: { cx: 309.78125, cy: 566.171875 }
          },
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
          cents: { equal: "", just: "-22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "d",
          ratio: 79 / 160,
          coordinates: {
            equal: { cx: null, cy: 590.0591837004648 },
            just: { cx: 309.95, cy: 590.725 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "d",
          ratio: 1 / 2,
          coordinates: {
            equal: { cx: null, cy: 597.34240365478 },
            just: { cx: 310, cy: 598 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "d",
          ratio: 71 / 135,
          coordinates: {
            equal: { cx: null, cy: 627.5542790208285 },
            just: { cx: 310.2074074074074, cy: 628.1777777777777 }
          },
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
          cents: { equal: "", just: "+12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "d",
          ratio: 17 / 32,
          coordinates: {
            equal: { cx: null, cy: 633.7585034263562 },
            just: { cx: 310.25, cy: 634.375 }
          },
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
          cents: { equal: "", just: "-18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "d",
          ratio: 11 / 20,
          coordinates: {
            equal: { cx: null, cy: 655.6081632893021 },
            just: { cx: 310.4, cy: 656.2 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "d",
          ratio: 5 / 9,
          coordinates: {
            equal: { cx: null, cy: 662.0821365820268 },
            just: { cx: 310.44444444444446, cy: 662.6666666666666 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "d",
          ratio: 37 / 64,
          coordinates: {
            equal: { cx: null, cy: 688.3826530837207 },
            just: { cx: 310.625, cy: 688.9375 }
          },
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
          cents: { equal: "", just: "+16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "d",
          ratio: 7 / 12,
          coordinates: {
            equal: { cx: null, cy: 694.4520030456501 },
            just: { cx: 310.6666666666667, cy: 695 }
          },
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
          cents: { equal: "", just: "-14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "d",
          ratio: 3 / 5,
          coordinates: {
            equal: { cx: null, cy: 713.873922923824 },
            just: { cx: 310.8, cy: 714.4 }
          },
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
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "d",
          ratio: 619 / 1024,
          coordinates: {
            equal: { cx: null, cy: 719.1087372659881 },
            just: { cx: 310.8359375, cy: 719.62890625 }
          },
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
          cents: { equal: "", just: "-2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "d",
          ratio: 5 / 8,
          coordinates: {
            equal: { cx: null, cy: 743.0068027410852 },
            just: { cx: 311, cy: 743.5 }
          },
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
          cents: { equal: "", just: "+20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "d",
          ratio: 17 / 27,
          coordinates: {
            equal: { cx: null, cy: 748.4017804850223 },
            just: { cx: 311.037037037037, cy: 748.8888888888888 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "d",
          ratio: 29 / 45,
          coordinates: {
            equal: { cx: null, cy: 765.6657092656214 },
            just: { cx: 311.15555555555557, cy: 766.1333333333333 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "d",
          ratio: 83 / 128,
          coordinates: {
            equal: { cx: null, cy: 770.3188775697672 },
            just: { cx: 311.1875, cy: 770.78125 }
          },
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
          cents: { equal: "", just: "-20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "d",
          ratio: 53 / 80,
          coordinates: {
            equal: { cx: null, cy: 786.7061224669766 },
            just: { cx: 311.3, cy: 787.15 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "+2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "d",
          ratio: 2 / 3,
          coordinates: {
            equal: { cx: null, cy: 791.56160243652 },
            just: { cx: 311.3333333333333, cy: 792 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "d",
          ratio: 175 / 256,
          coordinates: {
            equal: { cx: null, cy: 811.2869898127906 },
            just: { cx: 311.46875, cy: 811.703125 }
          },
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
          cents: { equal: "", just: "+14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "d",
          ratio: 11 / 16,
          coordinates: {
            equal: { cx: null, cy: 815.8390022842375 },
            just: { cx: 311.5, cy: 816.25 }
          },
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
          cents: { equal: "", just: "-16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "d",
          ratio: 7 / 10,
          coordinates: {
            equal: { cx: null, cy: 830.405442192868 },
            just: { cx: 311.6, cy: 830.8 }
          },
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
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "d",
          ratio: 19 / 27,
          coordinates: {
            equal: { cx: null, cy: 834.7214243880178 },
            just: { cx: 311.6296296296296, cy: 835.1111111111111 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "d",
          ratio: 23 / 32,
          coordinates: {
            equal: { cx: null, cy: 852.2551020558138 },
            just: { cx: 311.75, cy: 852.625 }
          },
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
          cents: { equal: "", just: "+18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "d",
          ratio: 13 / 18,
          coordinates: {
            equal: { cx: null, cy: 856.3013353637667 },
            just: { cx: 311.77777777777777, cy: 856.6666666666666 }
          },
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
          cents: { equal: "", just: "-12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "d",
          ratio: 11 / 15,
          coordinates: {
            equal: { cx: null, cy: 869.249281949216 },
            just: { cx: 311.8666666666667, cy: 869.5999999999999 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "d",
          ratio: 377 / 512,
          coordinates: {
            equal: { cx: null, cy: 872.7391581773254 },
            just: { cx: 311.890625, cy: 873.0859375 }
          },
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
          cents: { equal: "", just: "-22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "d",
          ratio: 239 / 320,
          coordinates: {
            equal: { cx: null, cy: 885.0295918502324 },
            just: { cx: 311.975, cy: 885.3625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "d",
          ratio: 3 / 4,
          coordinates: {
            equal: { cx: null, cy: 888.6712018273901 },
            just: { cx: 312, cy: 889 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "d",
          ratio: 103 / 135,
          coordinates: {
            equal: { cx: null, cy: 903.7771395104143 },
            just: { cx: 312.10370370370373, cy: 904.0888888888888 }
          },
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
          cents: { equal: "", just: "+12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "d",
          ratio: 49 / 64,
          coordinates: {
            equal: { cx: null, cy: 906.8792517131782 },
            just: { cx: 312.125, cy: 907.1875 }
          },
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
          cents: { equal: "", just: "-18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "d",
          ratio: 31 / 40,
          coordinates: {
            equal: { cx: null, cy: 917.8040816446511 },
            just: { cx: 312.2, cy: 918.1 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "d",
          ratio: 7 / 9,
          coordinates: {
            equal: { cx: null, cy: 921.0410682910133 },
            just: { cx: 312.22222222222223, cy: 921.3333333333333 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "d",
          ratio: 101 / 128,
          coordinates: {
            equal: { cx: null, cy: 934.1913265418602 },
            just: { cx: 312.3125, cy: 934.46875 }
          },
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
          cents: { equal: "", just: "+16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "d",
          ratio: 19 / 24,
          coordinates: {
            equal: { cx: null, cy: 937.226001522825 },
            just: { cx: 312.3333333333333, cy: 937.5 }
          },
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
          cents: { equal: "", just: "-14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "d",
          ratio: 4 / 5,
          coordinates: {
            equal: { cx: null, cy: 946.936961461912 },
            just: { cx: 312.4, cy: 947.2 }
          },
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
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "d",
          ratio: 1643 / 2048,
          coordinates: {
            equal: { cx: null, cy: 949.554368632994 },
            just: { cx: 312.41796875, cy: 949.814453125 }
          },
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
          cents: { equal: "", just: "-2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "d",
          ratio: 13 / 16,
          coordinates: {
            equal: { cx: null, cy: 961.5034013705425 },
            just: { cx: 312.5, cy: 961.75 }
          },
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
          cents: { equal: "", just: "+20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "d",
          ratio: 22 / 27,
          coordinates: {
            equal: { cx: null, cy: 964.200890242511 },
            just: { cx: 312.51851851851853, cy: 964.4444444444444 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "d",
          ratio: 37 / 45,
          coordinates: {
            equal: { cx: null, cy: 972.8328546328106 },
            just: { cx: 312.5777777777778, cy: 973.0666666666666 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "d",
          ratio: 211 / 256,
          coordinates: {
            equal: { cx: null, cy: 975.1594387848836 },
            just: { cx: 312.59375, cy: 975.390625 }
          },
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
          cents: { equal: "", just: "-20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "d",
          ratio: 133 / 160,
          coordinates: {
            equal: { cx: null, cy: 983.3530612334883 },
            just: { cx: 312.65, cy: 983.575 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "+2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "d",
          ratio: 5 / 6,
          coordinates: {
            equal: { cx: null, cy: 985.7808012182601 },
            just: { cx: 312.6666666666667, cy: 986 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "d",
          ratio: 431 / 512,
          coordinates: {
            equal: { cx: null, cy: 995.6434949063953 },
            just: { cx: 312.734375, cy: 995.8515625 }
          },
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
          cents: { equal: "", just: "+14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "d",
          ratio: 27 / 32,
          coordinates: {
            equal: { cx: null, cy: 997.9195011421187 },
            just: { cx: 312.75, cy: 998.125 }
          },
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
          cents: { equal: "", just: "-16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "d",
          ratio: 17 / 20,
          coordinates: {
            equal: { cx: null, cy: 1005.2027210964341 },
            just: { cx: 312.8, cy: 1005.4 }
          },
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
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "d",
          ratio: 23 / 27,
          coordinates: {
            equal: { cx: null, cy: 1007.360712194009 },
            just: { cx: 312.81481481481484, cy: 1007.5555555555555 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "d",
          ratio: 55 / 64,
          coordinates: {
            equal: { cx: null, cy: 1016.1275510279069 },
            just: { cx: 312.875, cy: 1016.3125 }
          },
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
          cents: { equal: "", just: "+18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "d",
          ratio: 31 / 36,
          coordinates: {
            equal: { cx: null, cy: 1018.1506676818834 },
            just: { cx: 312.8888888888889, cy: 1018.3333333333333 }
          },
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
          cents: { equal: "", just: "-12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "d",
          ratio: 13 / 15,
          coordinates: {
            equal: { cx: null, cy: 1024.6246409746082 },
            just: { cx: 312.93333333333334, cy: 1024.8000000000002 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "d",
          ratio: 889 / 1024,
          coordinates: {
            equal: { cx: null, cy: 1026.3695790886627 },
            just: { cx: 312.9453125, cy: 1026.54296875 }
          },
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
          cents: { equal: "", just: "-22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "d",
          ratio: 559 / 640,
          coordinates: {
            equal: { cx: null, cy: 1032.5147959251162 },
            just: { cx: 312.9875, cy: 1032.68125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "d",
          ratio: 7 / 8,
          coordinates: {
            equal: { cx: null, cy: 1034.335600913695 },
            just: { cx: 313, cy: 1034.5 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "a",
          ratio: 13 / 256,
          coordinates: {
            equal: { cx: 319.21875, cy: 75.109375 },
            just: { cx: 319.21875, cy: 75.109375 }
          },
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
          cents: { equal: "", just: "+12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "a",
          ratio: 1 / 16,
          coordinates: {
            equal: { cx: 319.5, cy: 88.75 },
            just: { cx: 319.5, cy: 88.75 }
          },
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
          cents: { equal: "", just: "-18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "a",
          ratio: 1 / 10,
          coordinates: {
            equal: { cx: 320.4, cy: 132.4 },
            just: { cx: 320.4, cy: 132.4 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "a",
          ratio: 1 / 9,
          coordinates: {
            equal: { cx: 320.6666666666667, cy: 145.33333333333333 },
            just: { cx: 320.6666666666667, cy: 145.33333333333333 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "a",
          ratio: 5 / 32,
          coordinates: {
            equal: { cx: 321.75, cy: 197.875 },
            just: { cx: 321.75, cy: 197.875 }
          },
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
          cents: { equal: "", just: "+16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "a",
          ratio: 1 / 6,
          coordinates: {
            equal: { cx: 322, cy: 210 },
            just: { cx: 322, cy: 210 }
          },
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
          cents: { equal: "", just: "-14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "a",
          ratio: 1 / 5,
          coordinates: {
            equal: { cx: 322.8, cy: 248.8 },
            just: { cx: 322.8, cy: 248.8 }
          },
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
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "a",
          ratio: 107 / 512,
          coordinates: {
            equal: { cx: 323.015625, cy: 259.2578125 },
            just: { cx: 323.015625, cy: 259.2578125 }
          },
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
          cents: { equal: "", just: "-23" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "a",
          ratio: 77 / 320,
          coordinates: {
            equal: { cx: 323.775, cy: 296.08750000000003 },
            just: { cx: 323.775, cy: 296.08750000000003 }
          },
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
          cents: { equal: "", just: "-2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "a",
          ratio: 1 / 4,
          coordinates: {
            equal: { cx: 324, cy: 307 },
            just: { cx: 324, cy: 307 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "a",
          ratio: 13 / 45,
          coordinates: {
            equal: { cx: 324.93333333333334, cy: 352.26666666666666 },
            just: { cx: 324.93333333333334, cy: 352.26666666666666 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "a",
          ratio: 19 / 64,
          coordinates: {
            equal: { cx: 325.125, cy: 361.5625 },
            just: { cx: 325.125, cy: 361.5625 }
          },
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
          cents: { equal: "", just: "-20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "a",
          ratio: 13 / 40,
          coordinates: {
            equal: { cx: 325.8, cy: 394.3 },
            just: { cx: 325.8, cy: 394.3 }
          },
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
          cents: { equal: "", just: "+2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "a",
          ratio: 1 / 3,
          coordinates: {
            equal: { cx: 326, cy: 404 },
            just: { cx: 326, cy: 404 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "a",
          ratio: 47 / 128,
          coordinates: {
            equal: { cx: 326.8125, cy: 443.40625 },
            just: { cx: 326.8125, cy: 443.40625 }
          },
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
          cents: { equal: "", just: "+14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "a",
          ratio: 3 / 8,
          coordinates: {
            equal: { cx: 327, cy: 452.5 },
            just: { cx: 327, cy: 452.5 }
          },
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
          cents: { equal: "", just: "-16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "a",
          ratio: 2 / 5,
          coordinates: {
            equal: { cx: 327.6, cy: 481.6 },
            just: { cx: 327.6, cy: 481.6 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "a",
          ratio: 833 / 2048,
          coordinates: {
            equal: { cx: 327.76171875, cy: 489.443359375 },
            just: { cx: 327.76171875, cy: 489.443359375 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "a",
          ratio: 7 / 16,
          coordinates: {
            equal: { cx: 328.5, cy: 525.25 },
            just: { cx: 328.5, cy: 525.25 }
          },
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
          cents: { equal: "", just: "+18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "a",
          ratio: 4 / 9,
          coordinates: {
            equal: { cx: 328.6666666666667, cy: 533.3333333333333 },
            just: { cx: 328.6666666666667, cy: 533.3333333333333 }
          },
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
          cents: { equal: "", just: "-12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "a",
          ratio: 7 / 15,
          coordinates: {
            equal: { cx: 329.2, cy: 559.2 },
            just: { cx: 329.2, cy: 559.2 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "a",
          ratio: 121 / 256,
          coordinates: {
            equal: { cx: 329.34375, cy: 566.171875 },
            just: { cx: 329.34375, cy: 566.171875 }
          },
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
          cents: { equal: "", just: "-22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "a",
          ratio: 79 / 160,
          coordinates: {
            equal: { cx: 329.85, cy: 590.725 },
            just: { cx: 329.85, cy: 590.725 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "a",
          ratio: 1 / 2,
          coordinates: {
            equal: { cx: 330, cy: 598 },
            just: { cx: 330, cy: 598 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "a",
          ratio: 269 / 512,
          coordinates: {
            equal: { cx: 330.609375, cy: 627.5546875 },
            just: { cx: 330.609375, cy: 627.5546875 }
          },
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
          cents: { equal: "", just: "+12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "a",
          ratio: 17 / 32,
          coordinates: {
            equal: { cx: 330.75, cy: 634.375 },
            just: { cx: 330.75, cy: 634.375 }
          },
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
          cents: { equal: "", just: "-18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "a",
          ratio: 11 / 20,
          coordinates: {
            equal: { cx: 331.2, cy: 656.2 },
            just: { cx: 331.2, cy: 656.2 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "a",
          ratio: 5 / 9,
          coordinates: {
            equal: { cx: 331.3333333333333, cy: 662.6666666666666 },
            just: { cx: 331.3333333333333, cy: 662.6666666666666 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "a",
          ratio: 37 / 64,
          coordinates: {
            equal: { cx: 331.875, cy: 688.9375 },
            just: { cx: 331.875, cy: 688.9375 }
          },
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
          cents: { equal: "", just: "+16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "a",
          ratio: 7 / 12,
          coordinates: {
            equal: { cx: 332, cy: 695 },
            just: { cx: 332, cy: 695 }
          },
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
          cents: { equal: "", just: "-14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "a",
          ratio: 3 / 5,
          coordinates: {
            equal: { cx: 332.4, cy: 714.4 },
            just: { cx: 332.4, cy: 714.4 }
          },
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
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "a",
          ratio: 619 / 1024,
          coordinates: {
            equal: { cx: 332.5078125, cy: 719.62890625 },
            just: { cx: 332.5078125, cy: 719.62890625 }
          },
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
          cents: { equal: "", just: "-23" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "a",
          ratio: 397 / 640,
          coordinates: {
            equal: { cx: 332.8875, cy: 738.04375 },
            just: { cx: 332.8875, cy: 738.04375 }
          },
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
          cents: { equal: "", just: "-2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "a",
          ratio: 5 / 8,
          coordinates: {
            equal: { cx: 333, cy: 743.5 },
            just: { cx: 333, cy: 743.5 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "a",
          ratio: 29 / 45,
          coordinates: {
            equal: { cx: 333.4666666666667, cy: 766.1333333333333 },
            just: { cx: 333.4666666666667, cy: 766.1333333333333 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "a",
          ratio: 83 / 128,
          coordinates: {
            equal: { cx: 333.5625, cy: 770.78125 },
            just: { cx: 333.5625, cy: 770.78125 }
          },
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
          cents: { equal: "", just: "-20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "a",
          ratio: 53 / 80,
          coordinates: {
            equal: { cx: 333.9, cy: 787.15 },
            just: { cx: 333.9, cy: 787.15 }
          },
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
          cents: { equal: "", just: "+2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "a",
          ratio: 2 / 3,
          coordinates: {
            equal: { cx: 334, cy: 792 },
            just: { cx: 334, cy: 792 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "a",
          ratio: 175 / 256,
          coordinates: {
            equal: { cx: 334.40625, cy: 811.703125 },
            just: { cx: 334.40625, cy: 811.703125 }
          },
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
          cents: { equal: "", just: "+14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "a",
          ratio: 11 / 16,
          coordinates: {
            equal: { cx: 334.5, cy: 816.25 },
            just: { cx: 334.5, cy: 816.25 }
          },
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
          cents: { equal: "", just: "-16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "a",
          ratio: 7 / 10,
          coordinates: {
            equal: { cx: 334.8, cy: 830.8 },
            just: { cx: 334.8, cy: 830.8 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "a",
          ratio: 2881 / 4096,
          coordinates: {
            equal: { cx: 334.880859375, cy: 834.7216796875 },
            just: { cx: 334.880859375, cy: 834.7216796875 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "a",
          ratio: 23 / 32,
          coordinates: {
            equal: { cx: 335.25, cy: 852.625 },
            just: { cx: 335.25, cy: 852.625 }
          },
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
          cents: { equal: "", just: "+18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "a",
          ratio: 13 / 18,
          coordinates: {
            equal: { cx: 335.3333333333333, cy: 856.6666666666666 },
            just: { cx: 335.3333333333333, cy: 856.6666666666666 }
          },
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
          cents: { equal: "", just: "-12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "a",
          ratio: 11 / 15,
          coordinates: {
            equal: { cx: 335.6, cy: 869.5999999999999 },
            just: { cx: 335.6, cy: 869.5999999999999 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "a",
          ratio: 377 / 512,
          coordinates: {
            equal: { cx: 335.671875, cy: 873.0859375 },
            just: { cx: 335.671875, cy: 873.0859375 }
          },
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
          cents: { equal: "", just: "-22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "a",
          ratio: 239 / 320,
          coordinates: {
            equal: { cx: 335.925, cy: 885.3625 },
            just: { cx: 335.925, cy: 885.3625 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "a",
          ratio: 3 / 4,
          coordinates: {
            equal: { cx: 336, cy: 889 },
            just: { cx: 336, cy: 889 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "a",
          ratio: 781 / 1024,
          coordinates: {
            equal: { cx: 336.3046875, cy: 903.77734375 },
            just: { cx: 336.3046875, cy: 903.77734375 }
          },
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
          cents: { equal: "", just: "+12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "a",
          ratio: 49 / 64,
          coordinates: {
            equal: { cx: 336.375, cy: 907.1875 },
            just: { cx: 336.375, cy: 907.1875 }
          },
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
          cents: { equal: "", just: "-18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "a",
          ratio: 31 / 40,
          coordinates: {
            equal: { cx: 336.6, cy: 918.1 },
            just: { cx: 336.6, cy: 918.1 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "a",
          ratio: 7 / 9,
          coordinates: {
            equal: { cx: 336.6666666666667, cy: 921.3333333333333 },
            just: { cx: 336.6666666666667, cy: 921.3333333333333 }
          },
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
          cents: { equal: "", just: "-6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "a",
          ratio: 101 / 128,
          coordinates: {
            equal: { cx: 336.9375, cy: 934.46875 },
            just: { cx: 336.9375, cy: 934.46875 }
          },
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
          cents: { equal: "", just: "+16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "a",
          ratio: 19 / 24,
          coordinates: {
            equal: { cx: 337, cy: 937.5 },
            just: { cx: 337, cy: 937.5 }
          },
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
          cents: { equal: "", just: "-14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "a",
          ratio: 4 / 5,
          coordinates: {
            equal: { cx: 337.2, cy: 947.2 },
            just: { cx: 337.2, cy: 947.2 }
          },
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
          cents: { equal: "", just: "+6" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "a",
          ratio: 1643 / 2048,
          coordinates: {
            equal: { cx: 337.25390625, cy: 949.814453125 },
            just: { cx: 337.25390625, cy: 949.814453125 }
          },
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
          cents: { equal: "", just: "-23" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "a",
          ratio: 1037 / 1280,
          coordinates: {
            equal: { cx: 337.44375, cy: 959.021875 },
            just: { cx: 337.44375, cy: 959.021875 }
          },
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
          cents: { equal: "", just: "-2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "a",
          ratio: 13 / 16,
          coordinates: {
            equal: { cx: 337.5, cy: 961.75 },
            just: { cx: 337.5, cy: 961.75 }
          },
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
          cents: { equal: "", just: "-10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "a",
          ratio: 37 / 45,
          coordinates: {
            equal: { cx: 337.73333333333335, cy: 973.0666666666666 },
            just: { cx: 337.73333333333335, cy: 973.0666666666666 }
          },
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
          cents: { equal: "", just: "+10" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "a",
          ratio: 211 / 256,
          coordinates: {
            equal: { cx: 337.78125, cy: 975.390625 },
            just: { cx: 337.78125, cy: 975.390625 }
          },
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
          cents: { equal: "", just: "-20" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "a",
          ratio: 133 / 160,
          coordinates: {
            equal: { cx: 337.95, cy: 983.575 },
            just: { cx: 337.95, cy: 983.575 }
          },
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
          cents: { equal: "", just: "+2" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "a",
          ratio: 5 / 6,
          coordinates: {
            equal: { cx: 338, cy: 986 },
            just: { cx: 338, cy: 986 }
          },
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
          cents: { equal: "", just: "-8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "a",
          ratio: 431 / 512,
          coordinates: {
            equal: { cx: 338.203125, cy: 995.8515625 },
            just: { cx: 338.203125, cy: 995.8515625 }
          },
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
          cents: { equal: "", just: "+14" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "a",
          ratio: 27 / 32,
          coordinates: {
            equal: { cx: 338.25, cy: 998.125 },
            just: { cx: 338.25, cy: 998.125 }
          },
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
          cents: { equal: "", just: "-16" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "a",
          ratio: 17 / 20,
          coordinates: {
            equal: { cx: 338.4, cy: 1005.4 },
            just: { cx: 338.4, cy: 1005.4 }
          },
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
          cents: { equal: "", just: "+4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "a",
          ratio: 6977 / 8192,
          coordinates: {
            equal: { cx: 338.4404296875, cy: 1007.36083984375 },
            just: { cx: 338.4404296875, cy: 1007.36083984375 }
          },
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
          cents: { equal: "", just: "-4" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "a",
          ratio: 55 / 64,
          coordinates: {
            equal: { cx: 338.625, cy: 1016.3125 },
            just: { cx: 338.625, cy: 1016.3125 }
          },
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
          cents: { equal: "", just: "+18" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "a",
          ratio: 31 / 36,
          coordinates: {
            equal: { cx: 338.6666666666667, cy: 1018.3333333333333 },
            just: { cx: 338.6666666666667, cy: 1018.3333333333333 }
          },
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
          cents: { equal: "", just: "-12" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "a",
          ratio: 13 / 15,
          coordinates: {
            equal: { cx: 338.8, cy: 1024.8000000000002 },
            just: { cx: 338.8, cy: 1024.8000000000002 }
          },
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
          cents: { equal: "", just: "+8" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "a",
          ratio: 889 / 1024,
          coordinates: {
            equal: { cx: 338.8359375, cy: 1026.54296875 },
            just: { cx: 338.8359375, cy: 1026.54296875 }
          },
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
          cents: { equal: "", just: "-22" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "a",
          ratio: 559 / 640,
          coordinates: {
            equal: { cx: 338.9625, cy: 1032.68125 },
            just: { cx: 338.9625, cy: 1032.68125 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "a",
          ratio: 7 / 8,
          coordinates: {
            equal: { cx: 339, cy: 1034.5 },
            just: { cx: 339, cy: 1034.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "e",
          ratio: 13 / 256,
          coordinates: {
            equal: { cx: null, cy: 76.35637159186686 },
            just: { cx: 280.4765625, cy: 75.109375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "e",
          ratio: 1 / 16,
          coordinates: {
            equal: { cx: null, cy: 89.98160157221419 },
            just: { cx: 280.125, cy: 88.75 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "e",
          ratio: 1 / 10,
          coordinates: {
            equal: { cx: null, cy: 133.5823375093256 },
            just: { cx: 279, cy: 132.4 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "e",
          ratio: 1 / 9,
          coordinates: {
            equal: { cx: null, cy: 146.50107408328455 },
            just: { cx: 278.6666666666667, cy: 145.33333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "e",
          ratio: 5 / 32,
          coordinates: {
            equal: { cx: null, cy: 198.98344141499277 },
            just: { cx: 277.3125, cy: 197.875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "e",
          ratio: 1 / 6,
          coordinates: {
            equal: { cx: null, cy: 211.09475695307927 },
            just: { cx: 277, cy: 210 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "e",
          ratio: 1 / 5,
          coordinates: {
            equal: { cx: null, cy: 249.8509666749561 },
            just: { cx: 276, cy: 248.8 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "e",
          ratio: 107 / 512,
          coordinates: {
            equal: { cx: null, cy: 260.29697632655575 },
            just: { cx: 275.73046875, cy: 259.2578125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "e",
          ratio: 77 / 320,
          coordinates: {
            equal: { cx: null, cy: 297.0850972734935 },
            just: { cx: 274.78125, cy: 296.08750000000003 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "e",
          ratio: 1 / 4,
          coordinates: {
            equal: { cx: null, cy: 307.98528125777136 },
            just: { cx: 274.5, cy: 307 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "e",
          ratio: 13 / 45,
          coordinates: {
            equal: { cx: null, cy: 353.2008592666276 },
            just: { cx: 273.3333333333333, cy: 352.26666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "e",
          ratio: 19 / 64,
          coordinates: {
            equal: { cx: null, cy: 362.4862011791607 },
            just: { cx: 273.09375, cy: 361.5625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "e",
          ratio: 13 / 40,
          coordinates: {
            equal: { cx: null, cy: 395.18675313199424 },
            just: { cx: 272.25, cy: 394.3 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "e",
          ratio: 1 / 3,
          coordinates: {
            equal: { cx: null, cy: 404.8758055624634 },
            just: { cx: 272, cy: 404 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "e",
          ratio: 47 / 128,
          coordinates: {
            equal: { cx: null, cy: 444.23758106124455 },
            just: { cx: 270.984375, cy: 443.40625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "e",
          ratio: 3 / 8,
          coordinates: {
            equal: { cx: null, cy: 453.3210677148095 },
            just: { cx: 270.75, cy: 452.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "e",
          ratio: 2 / 5,
          coordinates: {
            equal: { cx: null, cy: 482.3882250062171 },
            just: { cx: 270, cy: 481.6 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "e",
          ratio: 833 / 2048,
          coordinates: {
            equal: { cx: null, cy: 490.2227322449168 },
            just: { cx: 269.7978515625, cy: 489.443359375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "e",
          ratio: 7 / 16,
          coordinates: {
            equal: { cx: null, cy: 525.9889609433285 },
            just: { cx: 268.875, cy: 525.25 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "e",
          ratio: 4 / 9,
          coordinates: {
            equal: { cx: null, cy: 534.0631713020528 },
            just: { cx: 268.6666666666667, cy: 533.3333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "e",
          ratio: 7 / 15,
          coordinates: {
            equal: { cx: null, cy: 559.9006444499707 },
            just: { cx: 268, cy: 559.2 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "e",
          ratio: 121 / 256,
          coordinates: {
            equal: { cx: null, cy: 566.8646508843705 },
            just: { cx: 267.8203125, cy: 566.171875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "e",
          ratio: 79 / 160,
          coordinates: {
            equal: { cx: null, cy: 591.3900648489956 },
            just: { cx: 267.1875, cy: 590.725 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "e",
          ratio: 1 / 2,
          coordinates: {
            equal: { cx: null, cy: 598.6568541718476 },
            just: { cx: 267, cy: 598 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "e",
          ratio: 269 / 512,
          coordinates: {
            equal: { cx: null, cy: 628.1781857959335 },
            just: { cx: 266.23828125, cy: 627.5546875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "e",
          ratio: 17 / 32,
          coordinates: {
            equal: { cx: null, cy: 634.9908007861071 },
            just: { cx: 266.0625, cy: 634.375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "e",
          ratio: 11 / 20,
          coordinates: {
            equal: { cx: null, cy: 656.7911687546629 },
            just: { cx: 265.5, cy: 656.2 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "e",
          ratio: 5 / 9,
          coordinates: {
            equal: { cx: null, cy: 663.2505370416422 },
            just: { cx: 265.3333333333333, cy: 662.6666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "e",
          ratio: 37 / 64,
          coordinates: {
            equal: { cx: null, cy: 689.4917207074964 },
            just: { cx: 264.65625, cy: 688.9375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "e",
          ratio: 7 / 12,
          coordinates: {
            equal: { cx: null, cy: 695.5473784765397 },
            just: { cx: 264.5, cy: 695 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "e",
          ratio: 3 / 5,
          coordinates: {
            equal: { cx: null, cy: 714.925483337478 },
            just: { cx: 264, cy: 714.4 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "e",
          ratio: 619 / 1024,
          coordinates: {
            equal: { cx: null, cy: 720.1484881632779 },
            just: { cx: 263.865234375, cy: 719.62890625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "e",
          ratio: 397 / 640,
          coordinates: {
            equal: { cx: null, cy: 738.5425486367468 },
            just: { cx: 263.390625, cy: 738.04375 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "e",
          ratio: 5 / 8,
          coordinates: {
            equal: { cx: null, cy: 743.9926406288856 },
            just: { cx: 263.25, cy: 743.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "e",
          ratio: 29 / 45,
          coordinates: {
            equal: { cx: null, cy: 766.6004296333139 },
            just: { cx: 262.6666666666667, cy: 766.1333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "e",
          ratio: 83 / 128,
          coordinates: {
            equal: { cx: null, cy: 771.2431005895804 },
            just: { cx: 262.546875, cy: 770.78125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "e",
          ratio: 53 / 80,
          coordinates: {
            equal: { cx: null, cy: 787.5933765659971 },
            just: { cx: 262.125, cy: 787.15 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "e",
          ratio: 2 / 3,
          coordinates: {
            equal: { cx: null, cy: 792.4379027812316 },
            just: { cx: 262, cy: 792 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "e",
          ratio: 175 / 256,
          coordinates: {
            equal: { cx: null, cy: 812.1187905306223 },
            just: { cx: 261.4921875, cy: 811.703125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "e",
          ratio: 11 / 16,
          coordinates: {
            equal: { cx: null, cy: 816.6605338574047 },
            just: { cx: 261.375, cy: 816.25 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "e",
          ratio: 7 / 10,
          coordinates: {
            equal: { cx: null, cy: 831.1941125031085 },
            just: { cx: 261, cy: 830.8 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "e",
          ratio: 2881 / 4096,
          coordinates: {
            equal: { cx: null, cy: 835.1113661224584 },
            just: { cx: 260.89892578125, cy: 834.7216796875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "e",
          ratio: 23 / 32,
          coordinates: {
            equal: { cx: null, cy: 852.9944804716642 },
            just: { cx: 260.4375, cy: 852.625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "e",
          ratio: 13 / 18,
          coordinates: {
            equal: { cx: null, cy: 857.0315856510264 },
            just: { cx: 260.3333333333333, cy: 856.6666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "e",
          ratio: 11 / 15,
          coordinates: {
            equal: { cx: null, cy: 869.9503222249853 },
            just: { cx: 260, cy: 869.5999999999999 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "e",
          ratio: 377 / 512,
          coordinates: {
            equal: { cx: null, cy: 873.4323254421852 },
            just: { cx: 259.91015625, cy: 873.0859375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "e",
          ratio: 239 / 320,
          coordinates: {
            equal: { cx: null, cy: 885.6950324244979 },
            just: { cx: 259.59375, cy: 885.3625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "e",
          ratio: 3 / 4,
          coordinates: {
            equal: { cx: null, cy: 889.3284270859237 },
            just: { cx: 259.5, cy: 889 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "e",
          ratio: 781 / 1024,
          coordinates: {
            equal: { cx: null, cy: 904.0890928979667 },
            just: { cx: 259.119140625, cy: 903.77734375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "e",
          ratio: 49 / 64,
          coordinates: {
            equal: { cx: null, cy: 907.4954003930535 },
            just: { cx: 259.03125, cy: 907.1875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "e",
          ratio: 31 / 40,
          coordinates: {
            equal: { cx: null, cy: 918.3955843773314 },
            just: { cx: 258.75, cy: 918.1 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "e",
          ratio: 7 / 9,
          coordinates: {
            equal: { cx: null, cy: 921.6252685208212 },
            just: { cx: 258.6666666666667, cy: 921.3333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "e",
          ratio: 101 / 128,
          coordinates: {
            equal: { cx: null, cy: 934.7458603537482 },
            just: { cx: 258.328125, cy: 934.46875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "e",
          ratio: 19 / 24,
          coordinates: {
            equal: { cx: null, cy: 937.7736892382698 },
            just: { cx: 258.25, cy: 937.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "e",
          ratio: 4 / 5,
          coordinates: {
            equal: { cx: null, cy: 947.462741668739 },
            just: { cx: 258, cy: 947.2 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "e",
          ratio: 1643 / 2048,
          coordinates: {
            equal: { cx: null, cy: 950.0742440816389 },
            just: { cx: 257.9326171875, cy: 949.814453125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "e",
          ratio: 1037 / 1280,
          coordinates: {
            equal: { cx: null, cy: 959.2712743183733 },
            just: { cx: 257.6953125, cy: 959.021875 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret5,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "e",
          ratio: 13 / 16,
          coordinates: {
            equal: { cx: null, cy: 961.9963203144429 },
            just: { cx: 257.625, cy: 961.75 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "e",
          ratio: 37 / 45,
          coordinates: {
            equal: { cx: null, cy: 973.3002148166569 },
            just: { cx: 257.3333333333333, cy: 973.0666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "e",
          ratio: 211 / 256,
          coordinates: {
            equal: { cx: null, cy: 975.6215502947902 },
            just: { cx: 257.2734375, cy: 975.390625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "e",
          ratio: 133 / 160,
          coordinates: {
            equal: { cx: null, cy: 983.7966882829985 },
            just: { cx: 257.0625, cy: 983.575 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "e",
          ratio: 5 / 6,
          coordinates: {
            equal: { cx: null, cy: 986.2189513906159 },
            just: { cx: 257, cy: 986 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "e",
          ratio: 431 / 512,
          coordinates: {
            equal: { cx: null, cy: 996.0593952653112 },
            just: { cx: 256.74609375, cy: 995.8515625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "e",
          ratio: 27 / 32,
          coordinates: {
            equal: { cx: null, cy: 998.3302669287024 },
            just: { cx: 256.6875, cy: 998.125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "e",
          ratio: 17 / 20,
          coordinates: {
            equal: { cx: null, cy: 1005.5970562515542 },
            just: { cx: 256.5, cy: 1005.4 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "e",
          ratio: 6977 / 8192,
          coordinates: {
            equal: { cx: null, cy: 1007.5556830612293 },
            just: { cx: 256.449462890625, cy: 1007.36083984375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "e",
          ratio: 55 / 64,
          coordinates: {
            equal: { cx: null, cy: 1016.4972402358321 },
            just: { cx: 256.21875, cy: 1016.3125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "e",
          ratio: 31 / 36,
          coordinates: {
            equal: { cx: null, cy: 1018.5157928255134 },
            just: { cx: 256.1666666666667, cy: 1018.3333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "e",
          ratio: 13 / 15,
          coordinates: {
            equal: { cx: null, cy: 1024.9751611124927 },
            just: { cx: 256, cy: 1024.8000000000002 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "e",
          ratio: 889 / 1024,
          coordinates: {
            equal: { cx: null, cy: 1026.7161627210926 },
            just: { cx: 255.955078125, cy: 1026.54296875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "e",
          ratio: 559 / 640,
          coordinates: {
            equal: { cx: null, cy: 1032.8475162122488 },
            just: { cx: 255.796875, cy: 1032.68125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "e",
          ratio: 7 / 8,
          coordinates: {
            equal: { cx: null, cy: 1034.664213542962 },
            just: { cx: 255.75, cy: 1034.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "a",
          ratio: 7 / 135,
          coordinates: {
            equal: { cx: 293.48148148148147, cy: 76.35555555555555 },
            just: { cx: 293.48148148148147, cy: 76.35555555555555 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "a",
          ratio: 1 / 16,
          coordinates: {
            equal: { cx: 293.375, cy: 88.75 },
            just: { cx: 293.375, cy: 88.75 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "a",
          ratio: 1 / 10,
          coordinates: {
            equal: { cx: 293, cy: 132.4 },
            just: { cx: 293, cy: 132.4 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "a",
          ratio: 1 / 9,
          coordinates: {
            equal: { cx: 292.8888888888889, cy: 145.33333333333333 },
            just: { cx: 292.8888888888889, cy: 145.33333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "a",
          ratio: 5 / 32,
          coordinates: {
            equal: { cx: 292.4375, cy: 197.875 },
            just: { cx: 292.4375, cy: 197.875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "a",
          ratio: 1 / 6,
          coordinates: {
            equal: { cx: 292.3333333333333, cy: 210 },
            just: { cx: 292.3333333333333, cy: 210 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "a",
          ratio: 1 / 5,
          coordinates: {
            equal: { cx: 292, cy: 248.8 },
            just: { cx: 292, cy: 248.8 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "a",
          ratio: 107 / 512,
          coordinates: {
            equal: { cx: 291.91015625, cy: 259.2578125 },
            just: { cx: 291.91015625, cy: 259.2578125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "a",
          ratio: 1 / 4,
          coordinates: {
            equal: { cx: 291.5, cy: 307 },
            just: { cx: 291.5, cy: 307 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "a",
          ratio: 7 / 27,
          coordinates: {
            equal: { cx: 291.4074074074074, cy: 317.77777777777777 },
            just: { cx: 291.4074074074074, cy: 317.77777777777777 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "a",
          ratio: 13 / 45,
          coordinates: {
            equal: { cx: 291.1111111111111, cy: 352.26666666666666 },
            just: { cx: 291.1111111111111, cy: 352.26666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "a",
          ratio: 19 / 64,
          coordinates: {
            equal: { cx: 291.03125, cy: 361.5625 },
            just: { cx: 291.03125, cy: 361.5625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "a",
          ratio: 13 / 40,
          coordinates: {
            equal: { cx: 290.75, cy: 394.3 },
            just: { cx: 290.75, cy: 394.3 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "a",
          ratio: 1 / 3,
          coordinates: {
            equal: { cx: 290.6666666666667, cy: 404 },
            just: { cx: 290.6666666666667, cy: 404 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "a",
          ratio: 47 / 128,
          coordinates: {
            equal: { cx: 290.328125, cy: 443.40625 },
            just: { cx: 290.328125, cy: 443.40625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "a",
          ratio: 3 / 8,
          coordinates: {
            equal: { cx: 290.25, cy: 452.5 },
            just: { cx: 290.25, cy: 452.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "a",
          ratio: 2 / 5,
          coordinates: {
            equal: { cx: 290, cy: 481.6 },
            just: { cx: 290, cy: 481.6 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "a",
          ratio: 11 / 27,
          coordinates: {
            equal: { cx: 289.9259259259259, cy: 490.2222222222222 },
            just: { cx: 289.9259259259259, cy: 490.2222222222222 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "a",
          ratio: 7 / 16,
          coordinates: {
            equal: { cx: 289.625, cy: 525.25 },
            just: { cx: 289.625, cy: 525.25 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "a",
          ratio: 4 / 9,
          coordinates: {
            equal: { cx: 289.55555555555554, cy: 533.3333333333333 },
            just: { cx: 289.55555555555554, cy: 533.3333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "a",
          ratio: 7 / 15,
          coordinates: {
            equal: { cx: 289.3333333333333, cy: 559.2 },
            just: { cx: 289.3333333333333, cy: 559.2 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "a",
          ratio: 121 / 256,
          coordinates: {
            equal: { cx: 289.2734375, cy: 566.171875 },
            just: { cx: 289.2734375, cy: 566.171875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "a",
          ratio: 79 / 160,
          coordinates: {
            equal: { cx: 289.0625, cy: 590.725 },
            just: { cx: 289.0625, cy: 590.725 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "a",
          ratio: 1 / 2,
          coordinates: {
            equal: { cx: 289, cy: 598 },
            just: { cx: 289, cy: 598 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "a",
          ratio: 71 / 135,
          coordinates: {
            equal: { cx: 288.74074074074076, cy: 628.1777777777777 },
            just: { cx: 288.74074074074076, cy: 628.1777777777777 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "a",
          ratio: 17 / 32,
          coordinates: {
            equal: { cx: 288.6875, cy: 634.375 },
            just: { cx: 288.6875, cy: 634.375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "a",
          ratio: 11 / 20,
          coordinates: {
            equal: { cx: 288.5, cy: 656.2 },
            just: { cx: 288.5, cy: 656.2 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "a",
          ratio: 5 / 9,
          coordinates: {
            equal: { cx: 288.44444444444446, cy: 662.6666666666666 },
            just: { cx: 288.44444444444446, cy: 662.6666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "a",
          ratio: 37 / 64,
          coordinates: {
            equal: { cx: 288.21875, cy: 688.9375 },
            just: { cx: 288.21875, cy: 688.9375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "a",
          ratio: 7 / 12,
          coordinates: {
            equal: { cx: 288.1666666666667, cy: 695 },
            just: { cx: 288.1666666666667, cy: 695 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "a",
          ratio: 3 / 5,
          coordinates: {
            equal: { cx: 288, cy: 714.4 },
            just: { cx: 288, cy: 714.4 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "a",
          ratio: 619 / 1024,
          coordinates: {
            equal: { cx: 287.955078125, cy: 719.62890625 },
            just: { cx: 287.955078125, cy: 719.62890625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "a",
          ratio: 5 / 8,
          coordinates: {
            equal: { cx: 287.75, cy: 743.5 },
            just: { cx: 287.75, cy: 743.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "a",
          ratio: 17 / 27,
          coordinates: {
            equal: { cx: 287.7037037037037, cy: 748.8888888888888 },
            just: { cx: 287.7037037037037, cy: 748.8888888888888 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "a",
          ratio: 29 / 45,
          coordinates: {
            equal: { cx: 287.55555555555554, cy: 766.1333333333333 },
            just: { cx: 287.55555555555554, cy: 766.1333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "a",
          ratio: 83 / 128,
          coordinates: {
            equal: { cx: 287.515625, cy: 770.78125 },
            just: { cx: 287.515625, cy: 770.78125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "a",
          ratio: 53 / 80,
          coordinates: {
            equal: { cx: 287.375, cy: 787.15 },
            just: { cx: 287.375, cy: 787.15 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "a",
          ratio: 2 / 3,
          coordinates: {
            equal: { cx: 287.3333333333333, cy: 792 },
            just: { cx: 287.3333333333333, cy: 792 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "a",
          ratio: 175 / 256,
          coordinates: {
            equal: { cx: 287.1640625, cy: 811.703125 },
            just: { cx: 287.1640625, cy: 811.703125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "a",
          ratio: 11 / 16,
          coordinates: {
            equal: { cx: 287.125, cy: 816.25 },
            just: { cx: 287.125, cy: 816.25 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "a",
          ratio: 7 / 10,
          coordinates: {
            equal: { cx: 287, cy: 830.8 },
            just: { cx: 287, cy: 830.8 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "a",
          ratio: 19 / 27,
          coordinates: {
            equal: { cx: 286.962962962963, cy: 835.1111111111111 },
            just: { cx: 286.962962962963, cy: 835.1111111111111 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "a",
          ratio: 23 / 32,
          coordinates: {
            equal: { cx: 286.8125, cy: 852.625 },
            just: { cx: 286.8125, cy: 852.625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "a",
          ratio: 13 / 18,
          coordinates: {
            equal: { cx: 286.77777777777777, cy: 856.6666666666666 },
            just: { cx: 286.77777777777777, cy: 856.6666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "a",
          ratio: 11 / 15,
          coordinates: {
            equal: { cx: 286.6666666666667, cy: 869.5999999999999 },
            just: { cx: 286.6666666666667, cy: 869.5999999999999 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "a",
          ratio: 377 / 512,
          coordinates: {
            equal: { cx: 286.63671875, cy: 873.0859375 },
            just: { cx: 286.63671875, cy: 873.0859375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "a",
          ratio: 239 / 320,
          coordinates: {
            equal: { cx: 286.53125, cy: 885.3625 },
            just: { cx: 286.53125, cy: 885.3625 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "a",
          ratio: 3 / 4,
          coordinates: {
            equal: { cx: 286.5, cy: 889 },
            just: { cx: 286.5, cy: 889 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "a",
          ratio: 103 / 135,
          coordinates: {
            equal: { cx: 286.3703703703704, cy: 904.0888888888888 },
            just: { cx: 286.3703703703704, cy: 904.0888888888888 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "a",
          ratio: 49 / 64,
          coordinates: {
            equal: { cx: 286.34375, cy: 907.1875 },
            just: { cx: 286.34375, cy: 907.1875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "a",
          ratio: 31 / 40,
          coordinates: {
            equal: { cx: 286.25, cy: 918.1 },
            just: { cx: 286.25, cy: 918.1 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "a",
          ratio: 7 / 9,
          coordinates: {
            equal: { cx: 286.22222222222223, cy: 921.3333333333333 },
            just: { cx: 286.22222222222223, cy: 921.3333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "a",
          ratio: 101 / 128,
          coordinates: {
            equal: { cx: 286.109375, cy: 934.46875 },
            just: { cx: 286.109375, cy: 934.46875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "a",
          ratio: 19 / 24,
          coordinates: {
            equal: { cx: 286.0833333333333, cy: 937.5 },
            just: { cx: 286.0833333333333, cy: 937.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "a",
          ratio: 4 / 5,
          coordinates: {
            equal: { cx: 286, cy: 947.2 },
            just: { cx: 286, cy: 947.2 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "a",
          ratio: 1643 / 2048,
          coordinates: {
            equal: { cx: 285.9775390625, cy: 949.814453125 },
            just: { cx: 285.9775390625, cy: 949.814453125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "a",
          ratio: 13 / 16,
          coordinates: {
            equal: { cx: 285.875, cy: 961.75 },
            just: { cx: 285.875, cy: 961.75 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "a",
          ratio: 22 / 27,
          coordinates: {
            equal: { cx: 285.85185185185185, cy: 964.4444444444444 },
            just: { cx: 285.85185185185185, cy: 964.4444444444444 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "a",
          ratio: 37 / 45,
          coordinates: {
            equal: { cx: 285.77777777777777, cy: 973.0666666666666 },
            just: { cx: 285.77777777777777, cy: 973.0666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "a",
          ratio: 211 / 256,
          coordinates: {
            equal: { cx: 285.7578125, cy: 975.390625 },
            just: { cx: 285.7578125, cy: 975.390625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "a",
          ratio: 133 / 160,
          coordinates: {
            equal: { cx: 285.6875, cy: 983.575 },
            just: { cx: 285.6875, cy: 983.575 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "a",
          ratio: 5 / 6,
          coordinates: {
            equal: { cx: 285.6666666666667, cy: 986 },
            just: { cx: 285.6666666666667, cy: 986 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "a",
          ratio: 431 / 512,
          coordinates: {
            equal: { cx: 285.58203125, cy: 995.8515625 },
            just: { cx: 285.58203125, cy: 995.8515625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "a",
          ratio: 27 / 32,
          coordinates: {
            equal: { cx: 285.5625, cy: 998.125 },
            just: { cx: 285.5625, cy: 998.125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "a",
          ratio: 17 / 20,
          coordinates: {
            equal: { cx: 285.5, cy: 1005.4 },
            just: { cx: 285.5, cy: 1005.4 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "a",
          ratio: 23 / 27,
          coordinates: {
            equal: { cx: 285.48148148148147, cy: 1007.5555555555555 },
            just: { cx: 285.48148148148147, cy: 1007.5555555555555 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "a",
          ratio: 55 / 64,
          coordinates: {
            equal: { cx: 285.40625, cy: 1016.3125 },
            just: { cx: 285.40625, cy: 1016.3125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "a",
          ratio: 31 / 36,
          coordinates: {
            equal: { cx: 285.3888888888889, cy: 1018.3333333333333 },
            just: { cx: 285.3888888888889, cy: 1018.3333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "a",
          ratio: 13 / 15,
          coordinates: {
            equal: { cx: 285.3333333333333, cy: 1024.8000000000002 },
            just: { cx: 285.3333333333333, cy: 1024.8000000000002 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "a",
          ratio: 889 / 1024,
          coordinates: {
            equal: { cx: 285.318359375, cy: 1026.54296875 },
            just: { cx: 285.318359375, cy: 1026.54296875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "a",
          ratio: 559 / 640,
          coordinates: {
            equal: { cx: 285.265625, cy: 1032.68125 },
            just: { cx: 285.265625, cy: 1032.68125 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret12,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "a",
          ratio: 7 / 8,
          coordinates: {
            equal: { cx: 285.25, cy: 1034.5 },
            just: { cx: 285.25, cy: 1034.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 0,
          string: "d",
          ratio: 1 / 81,
          coordinates: {
            equal: { cx: null, cy: 29.07141462672605 },
            just: { cx: 306.12345679012344, cy: 30.37037037037037 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "d",
          ratio: 7 / 135,
          coordinates: {
            equal: { cx: null, cy: 75.108558041657 },
            just: { cx: 306.51851851851853, cy: 76.35555555555555 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "d",
          ratio: 1 / 16,
          coordinates: {
            equal: { cx: null, cy: 87.51700685271261 },
            just: { cx: 306.625, cy: 88.75 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "d",
          ratio: 1 / 10,
          coordinates: {
            equal: { cx: null, cy: 131.2163265786041 },
            just: { cx: 307, cy: 132.4 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "d",
          ratio: 1 / 9,
          coordinates: {
            equal: { cx: null, cy: 144.16427316405344 },
            just: { cx: 307.1111111111111, cy: 145.33333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "d",
          ratio: 5 / 32,
          coordinates: {
            equal: { cx: null, cy: 196.76530616744137 },
            just: { cx: 307.5625, cy: 197.875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "d",
          ratio: 1 / 6,
          coordinates: {
            equal: { cx: null, cy: 208.9040060913001 },
            just: { cx: 307.6666666666667, cy: 210 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "d",
          ratio: 1 / 5,
          coordinates: {
            equal: { cx: null, cy: 247.7478458476481 },
            just: { cx: 308, cy: 248.8 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "d",
          ratio: 17 / 81,
          coordinates: {
            equal: { cx: null, cy: 259.25713170138084 },
            just: { cx: 308.0987654320988, cy: 260.2962962962963 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "d",
          ratio: 1 / 4,
          coordinates: {
            equal: { cx: null, cy: 306.0136054821701 },
            just: { cx: 308.5, cy: 307 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "d",
          ratio: 7 / 27,
          coordinates: {
            equal: { cx: null, cy: 316.80356097004454 },
            just: { cx: 308.5925925925926, cy: 317.77777777777777 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "d",
          ratio: 13 / 45,
          coordinates: {
            equal: { cx: null, cy: 351.3314185312427 },
            just: { cx: 308.8888888888889, cy: 352.26666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "d",
          ratio: 19 / 64,
          coordinates: {
            equal: { cx: null, cy: 360.6377551395345 },
            just: { cx: 308.96875, cy: 361.5625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "d",
          ratio: 13 / 40,
          coordinates: {
            equal: { cx: null, cy: 393.4122449339531 },
            just: { cx: 309.25, cy: 394.3 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "d",
          ratio: 1 / 3,
          coordinates: {
            equal: { cx: null, cy: 403.12320487304004 },
            just: { cx: 309.3333333333333, cy: 404 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "d",
          ratio: 149 / 405,
          coordinates: {
            equal: { cx: null, cy: 443.40570536110465 },
            just: { cx: 309.679012345679, cy: 444.23703703703706 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "d",
          ratio: 3 / 8,
          coordinates: {
            equal: { cx: null, cy: 451.6780045684751 },
            just: { cx: 309.75, cy: 452.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "d",
          ratio: 2 / 5,
          coordinates: {
            equal: { cx: null, cy: 480.8108843857361 },
            just: { cx: 310, cy: 481.6 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "d",
          ratio: 11 / 27,
          coordinates: {
            equal: { cx: null, cy: 489.4428487760356 },
            just: { cx: 310.0740740740741, cy: 490.2222222222222 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "d",
          ratio: 7 / 16,
          coordinates: {
            equal: { cx: null, cy: 524.5102041116276 },
            just: { cx: 310.375, cy: 525.25 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "d",
          ratio: 4 / 9,
          coordinates: {
            equal: { cx: null, cy: 532.6026707275335 },
            just: { cx: 310.44444444444446, cy: 533.3333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "d",
          ratio: 7 / 15,
          coordinates: {
            equal: { cx: null, cy: 558.498563898432 },
            just: { cx: 310.6666666666667, cy: 559.2 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "d",
          ratio: 121 / 256,
          coordinates: {
            equal: { cx: null, cy: 565.4783163546508 },
            just: { cx: 310.7265625, cy: 566.171875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "d",
          ratio: 1 / 2,
          coordinates: {
            equal: { cx: null, cy: 597.34240365478 },
            just: { cx: 311, cy: 598 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "d",
          ratio: 41 / 81,
          coordinates: {
            equal: { cx: null, cy: 604.5357073133631 },
            just: { cx: 311.0617283950617, cy: 605.1851851851852 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "d",
          ratio: 71 / 135,
          coordinates: {
            equal: { cx: null, cy: 627.5542790208285 },
            just: { cx: 311.25925925925924, cy: 628.1777777777777 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "d",
          ratio: 17 / 32,
          coordinates: {
            equal: { cx: null, cy: 633.7585034263562 },
            just: { cx: 311.3125, cy: 634.375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "d",
          ratio: 11 / 20,
          coordinates: {
            equal: { cx: null, cy: 655.6081632893021 },
            just: { cx: 311.5, cy: 656.2 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "d",
          ratio: 5 / 9,
          coordinates: {
            equal: { cx: null, cy: 662.0821365820268 },
            just: { cx: 311.55555555555554, cy: 662.6666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "d",
          ratio: 37 / 64,
          coordinates: {
            equal: { cx: null, cy: 688.3826530837207 },
            just: { cx: 311.78125, cy: 688.9375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "d",
          ratio: 7 / 12,
          coordinates: {
            equal: { cx: null, cy: 694.4520030456501 },
            just: { cx: 311.8333333333333, cy: 695 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "d",
          ratio: 3 / 5,
          coordinates: {
            equal: { cx: null, cy: 713.873922923824 },
            just: { cx: 312, cy: 714.4 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "d",
          ratio: 49 / 81,
          coordinates: {
            equal: { cx: null, cy: 719.6285658506905 },
            just: { cx: 312.04938271604937, cy: 720.1481481481482 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "d",
          ratio: 5 / 8,
          coordinates: {
            equal: { cx: null, cy: 743.0068027410852 },
            just: { cx: 312.25, cy: 743.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "d",
          ratio: 17 / 27,
          coordinates: {
            equal: { cx: null, cy: 748.4017804850223 },
            just: { cx: 312.2962962962963, cy: 748.8888888888888 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "d",
          ratio: 29 / 45,
          coordinates: {
            equal: { cx: null, cy: 765.6657092656214 },
            just: { cx: 312.44444444444446, cy: 766.1333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "d",
          ratio: 83 / 128,
          coordinates: {
            equal: { cx: null, cy: 770.3188775697672 },
            just: { cx: 312.484375, cy: 770.78125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "d",
          ratio: 53 / 80,
          coordinates: {
            equal: { cx: null, cy: 786.7061224669766 },
            just: { cx: 312.625, cy: 787.15 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "d",
          ratio: 2 / 3,
          coordinates: {
            equal: { cx: null, cy: 791.56160243652 },
            just: { cx: 312.6666666666667, cy: 792 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "d",
          ratio: 277 / 405,
          coordinates: {
            equal: { cx: null, cy: 811.7028526805523 },
            just: { cx: 312.8395061728395, cy: 812.1185185185185 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "d",
          ratio: 11 / 16,
          coordinates: {
            equal: { cx: null, cy: 815.8390022842375 },
            just: { cx: 312.875, cy: 816.25 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "d",
          ratio: 7 / 10,
          coordinates: {
            equal: { cx: null, cy: 830.405442192868 },
            just: { cx: 313, cy: 830.8 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "d",
          ratio: 19 / 27,
          coordinates: {
            equal: { cx: null, cy: 834.7214243880178 },
            just: { cx: 313.037037037037, cy: 835.1111111111111 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "d",
          ratio: 23 / 32,
          coordinates: {
            equal: { cx: null, cy: 852.2551020558138 },
            just: { cx: 313.1875, cy: 852.625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "d",
          ratio: 13 / 18,
          coordinates: {
            equal: { cx: null, cy: 856.3013353637667 },
            just: { cx: 313.22222222222223, cy: 856.6666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "d",
          ratio: 11 / 15,
          coordinates: {
            equal: { cx: null, cy: 869.249281949216 },
            just: { cx: 313.3333333333333, cy: 869.5999999999999 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "d",
          ratio: 377 / 512,
          coordinates: {
            equal: { cx: null, cy: 872.7391581773254 },
            just: { cx: 313.36328125, cy: 873.0859375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "d",
          ratio: 3 / 4,
          coordinates: {
            equal: { cx: null, cy: 888.6712018273901 },
            just: { cx: 313.5, cy: 889 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "d",
          ratio: 61 / 81,
          coordinates: {
            equal: { cx: null, cy: 892.2678536566815 },
            just: { cx: 313.5308641975309, cy: 892.5925925925926 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "d",
          ratio: 103 / 135,
          coordinates: {
            equal: { cx: null, cy: 903.7771395104143 },
            just: { cx: 313.6296296296296, cy: 904.0888888888888 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "d",
          ratio: 49 / 64,
          coordinates: {
            equal: { cx: null, cy: 906.8792517131782 },
            just: { cx: 313.65625, cy: 907.1875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "d",
          ratio: 31 / 40,
          coordinates: {
            equal: { cx: null, cy: 917.8040816446511 },
            just: { cx: 313.75, cy: 918.1 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "d",
          ratio: 7 / 9,
          coordinates: {
            equal: { cx: null, cy: 921.0410682910133 },
            just: { cx: 313.77777777777777, cy: 921.3333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "d",
          ratio: 101 / 128,
          coordinates: {
            equal: { cx: null, cy: 934.1913265418602 },
            just: { cx: 313.890625, cy: 934.46875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "d",
          ratio: 19 / 24,
          coordinates: {
            equal: { cx: null, cy: 937.226001522825 },
            just: { cx: 313.9166666666667, cy: 937.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "d",
          ratio: 4 / 5,
          coordinates: {
            equal: { cx: null, cy: 946.936961461912 },
            just: { cx: 314, cy: 947.2 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "d",
          ratio: 65 / 81,
          coordinates: {
            equal: { cx: null, cy: 949.8142829253452 },
            just: { cx: 314.0246913580247, cy: 950.0740740740741 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "d",
          ratio: 13 / 16,
          coordinates: {
            equal: { cx: null, cy: 961.5034013705425 },
            just: { cx: 314.125, cy: 961.75 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "d",
          ratio: 22 / 27,
          coordinates: {
            equal: { cx: null, cy: 964.200890242511 },
            just: { cx: 314.14814814814815, cy: 964.4444444444444 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "d",
          ratio: 37 / 45,
          coordinates: {
            equal: { cx: null, cy: 972.8328546328106 },
            just: { cx: 314.22222222222223, cy: 973.0666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "d",
          ratio: 211 / 256,
          coordinates: {
            equal: { cx: null, cy: 975.1594387848836 },
            just: { cx: 314.2421875, cy: 975.390625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "d",
          ratio: 133 / 160,
          coordinates: {
            equal: { cx: null, cy: 983.3530612334883 },
            just: { cx: 314.3125, cy: 983.575 }
          },
          colors: {
            uni: uni,
            uniPlus8: uni,
            fret: fret7,
            name: a,
            row: lower1
          }
        },
        {
          name: { English: "A°", German: "A°" },
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "d",
          ratio: 5 / 6,
          coordinates: {
            equal: { cx: null, cy: 985.7808012182601 },
            just: { cx: 314.3333333333333, cy: 986 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "d",
          ratio: 341 / 405,
          coordinates: {
            equal: { cx: null, cy: 995.8514263402762 },
            just: { cx: 314.41975308641975, cy: 996.0592592592593 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "d",
          ratio: 27 / 32,
          coordinates: {
            equal: { cx: null, cy: 997.9195011421187 },
            just: { cx: 314.4375, cy: 998.125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "d",
          ratio: 17 / 20,
          coordinates: {
            equal: { cx: null, cy: 1005.2027210964341 },
            just: { cx: 314.5, cy: 1005.4 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "d",
          ratio: 23 / 27,
          coordinates: {
            equal: { cx: null, cy: 1007.360712194009 },
            just: { cx: 314.51851851851853, cy: 1007.5555555555555 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "d",
          ratio: 55 / 64,
          coordinates: {
            equal: { cx: null, cy: 1016.1275510279069 },
            just: { cx: 314.59375, cy: 1016.3125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "d",
          ratio: 31 / 36,
          coordinates: {
            equal: { cx: null, cy: 1018.1506676818834 },
            just: { cx: 314.6111111111111, cy: 1018.3333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "d",
          ratio: 13 / 15,
          coordinates: {
            equal: { cx: null, cy: 1024.6246409746082 },
            just: { cx: 314.6666666666667, cy: 1024.8000000000002 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "d",
          ratio: 889 / 1024,
          coordinates: {
            equal: { cx: null, cy: 1026.3695790886627 },
            just: { cx: 314.681640625, cy: 1026.54296875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "d",
          ratio: 7 / 8,
          coordinates: {
            equal: { cx: null, cy: 1034.335600913695 },
            just: { cx: 314.75, cy: 1034.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "d",
          ratio: 71 / 81,
          coordinates: {
            equal: { cx: null, cy: 1036.133926828341 },
            just: { cx: 314.7654320987654, cy: 1036.2962962962963 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 0,
          string: "g",
          ratio: 1 / 81,
          coordinates: {
            equal: { cx: null, cy: 27.770991205161476 },
            just: { cx: 318.3703703703704, cy: 30.37037037037037 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "g",
          ratio: 7 / 135,
          coordinates: {
            equal: { cx: null, cy: 73.86015155695502 },
            just: { cx: 319.55555555555554, cy: 76.35555555555555 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "g",
          ratio: 1 / 16,
          coordinates: {
            equal: { cx: null, cy: 86.28262055802438 },
            just: { cx: 319.875, cy: 88.75 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "g",
          ratio: 1 / 10,
          coordinates: {
            equal: { cx: null, cy: 130.0313157357034 },
            just: { cx: 321, cy: 132.4 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "g",
          ratio: 1 / 9,
          coordinates: {
            equal: { cx: null, cy: 142.99389208464532 },
            just: { cx: 321.3333333333333, cy: 145.33333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "g",
          ratio: 191 / 1215,
          coordinates: {
            equal: { cx: null, cy: 196.7645791617378 },
            just: { cx: 322.71604938271605, cy: 198.9827160493827 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "g",
          ratio: 1 / 6,
          coordinates: {
            equal: { cx: null, cy: 207.806773829355 },
            just: { cx: 323, cy: 210 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "g",
          ratio: 1 / 5,
          coordinates: {
            equal: { cx: null, cy: 246.69450287618082 },
            just: { cx: 324, cy: 248.8 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "g",
          ratio: 17 / 81,
          coordinates: {
            equal: { cx: null, cy: 258.2167929641292 },
            just: { cx: 324.2962962962963, cy: 260.2962962962963 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "g",
          ratio: 1 / 4,
          coordinates: {
            equal: { cx: null, cy: 305.0260964464195 },
            just: { cx: 325.5, cy: 307 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "g",
          ratio: 7 / 27,
          coordinates: {
            equal: { cx: null, cy: 315.8282434038711 },
            just: { cx: 325.77777777777777, cy: 317.77777777777777 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "g",
          ratio: 13 / 45,
          coordinates: {
            equal: { cx: null, cy: 350.3951136677162 },
            just: { cx: 326.6666666666667, cy: 352.26666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "g",
          ratio: 19 / 64,
          coordinates: {
            equal: { cx: null, cy: 359.7119654185183 },
            just: { cx: 326.90625, cy: 361.5625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "g",
          ratio: 1 / 3,
          coordinates: {
            equal: { cx: null, cy: 402.24541906348395 },
            just: { cx: 328, cy: 404 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "g",
          ratio: 83 / 243,
          coordinates: {
            equal: { cx: null, cy: 411.84732747010764 },
            just: { cx: 328.24691358024694, cy: 413.58024691358025 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "g",
          ratio: 149 / 405,
          coordinates: {
            equal: { cx: null, cy: 442.57343437130334 },
            just: { cx: 329.03703703703707, cy: 444.23703703703706 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "g",
          ratio: 3 / 8,
          coordinates: {
            equal: { cx: null, cy: 450.85508037201623 },
            just: { cx: 329.25, cy: 452.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "g",
          ratio: 2 / 5,
          coordinates: {
            equal: { cx: null, cy: 480.02087715713566 },
            just: { cx: 330, cy: 481.6 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "g",
          ratio: 11 / 27,
          coordinates: {
            equal: { cx: null, cy: 488.66259472309684 },
            just: { cx: 330.22222222222223, cy: 490.2222222222222 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "g",
          ratio: 7 / 16,
          coordinates: {
            equal: { cx: null, cy: 523.7695723348146 },
            just: { cx: 331.125, cy: 525.25 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "g",
          ratio: 4 / 9,
          coordinates: {
            equal: { cx: null, cy: 531.8711825529033 },
            just: { cx: 331.3333333333333, cy: 533.3333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "g",
          ratio: 7 / 15,
          coordinates: {
            equal: { cx: null, cy: 557.7963352507873 },
            just: { cx: 332, cy: 559.2 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "g",
          ratio: 115 / 243,
          coordinates: {
            equal: { cx: null, cy: 565.4778619760862 },
            just: { cx: 332.1975308641975, cy: 566.8641975308642 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "g",
          ratio: 1 / 2,
          coordinates: {
            equal: { cx: null, cy: 596.684064297613 },
            just: { cx: 333, cy: 598 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "g",
          ratio: 41 / 81,
          coordinates: {
            equal: { cx: null, cy: 603.8854956025808 },
            just: { cx: 333.18518518518516, cy: 605.1851851851852 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "g",
          ratio: 71 / 135,
          coordinates: {
            equal: { cx: null, cy: 626.9300757784774 },
            just: { cx: 333.77777777777777, cy: 628.1777777777777 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "g",
          ratio: 17 / 32,
          coordinates: {
            equal: { cx: null, cy: 633.1413102790121 },
            just: { cx: 333.9375, cy: 634.375 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "g",
          ratio: 11 / 20,
          coordinates: {
            equal: { cx: null, cy: 655.0156578678518 },
            just: { cx: 334.5, cy: 656.2 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "g",
          ratio: 5 / 9,
          coordinates: {
            equal: { cx: null, cy: 661.4969460423227 },
            just: { cx: 334.6666666666667, cy: 662.6666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "g",
          ratio: 703 / 1215,
          coordinates: {
            equal: { cx: null, cy: 688.3822895808688 },
            just: { cx: 335.358024691358, cy: 689.4913580246914 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "g",
          ratio: 7 / 12,
          coordinates: {
            equal: { cx: null, cy: 693.9033869146775 },
            just: { cx: 335.5, cy: 695 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "g",
          ratio: 3 / 5,
          coordinates: {
            equal: { cx: null, cy: 713.3472514380904 },
            just: { cx: 336, cy: 714.4 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "g",
          ratio: 49 / 81,
          coordinates: {
            equal: { cx: null, cy: 719.1083964820647 },
            just: { cx: 336.14814814814815, cy: 720.1481481481482 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "g",
          ratio: 5 / 8,
          coordinates: {
            equal: { cx: null, cy: 742.5130482232098 },
            just: { cx: 336.75, cy: 743.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "g",
          ratio: 17 / 27,
          coordinates: {
            equal: { cx: null, cy: 747.9141217019356 },
            just: { cx: 336.8888888888889, cy: 748.8888888888888 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "g",
          ratio: 29 / 45,
          coordinates: {
            equal: { cx: null, cy: 765.1975568338582 },
            just: { cx: 337.3333333333333, cy: 766.1333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "g",
          ratio: 83 / 128,
          coordinates: {
            equal: { cx: null, cy: 769.8559827092591 },
            just: { cx: 337.453125, cy: 770.78125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "g",
          ratio: 2 / 3,
          coordinates: {
            equal: { cx: null, cy: 791.122709531742 },
            just: { cx: 338, cy: 792 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "g",
          ratio: 163 / 243,
          coordinates: {
            equal: { cx: null, cy: 795.9236637350539 },
            just: { cx: 338.12345679012344, cy: 796.7901234567902 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "g",
          ratio: 277 / 405,
          coordinates: {
            equal: { cx: null, cy: 811.2867171856516 },
            just: { cx: 338.51851851851853, cy: 812.1185185185185 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "g",
          ratio: 11 / 16,
          coordinates: {
            equal: { cx: null, cy: 815.4275401860081 },
            just: { cx: 338.625, cy: 816.25 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "g",
          ratio: 7 / 10,
          coordinates: {
            equal: { cx: null, cy: 830.0104385785677 },
            just: { cx: 339, cy: 830.8 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "g",
          ratio: 19 / 27,
          coordinates: {
            equal: { cx: null, cy: 834.3312973615484 },
            just: { cx: 339.1111111111111, cy: 835.1111111111111 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "g",
          ratio: 23 / 32,
          coordinates: {
            equal: { cx: null, cy: 851.8847861674074 },
            just: { cx: 339.5625, cy: 852.625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "g",
          ratio: 13 / 18,
          coordinates: {
            equal: { cx: null, cy: 855.9355912764516 },
            just: { cx: 339.6666666666667, cy: 856.6666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "g",
          ratio: 11 / 15,
          coordinates: {
            equal: { cx: null, cy: 868.8981676253935 },
            just: { cx: 340, cy: 869.5999999999999 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "g",
          ratio: 179 / 243,
          coordinates: {
            equal: { cx: null, cy: 872.738930988043 },
            just: { cx: 340.0987654320988, cy: 873.4320987654321 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "g",
          ratio: 3 / 4,
          coordinates: {
            equal: { cx: null, cy: 888.3420321488065 },
            just: { cx: 340.5, cy: 889 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "g",
          ratio: 61 / 81,
          coordinates: {
            equal: { cx: null, cy: 891.9427478012904 },
            just: { cx: 340.5925925925926, cy: 892.5925925925926 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "g",
          ratio: 103 / 135,
          coordinates: {
            equal: { cx: null, cy: 903.4650378892388 },
            just: { cx: 340.8888888888889, cy: 904.0888888888888 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 1,
          string: "g",
          ratio: 49 / 64,
          coordinates: {
            equal: { cx: null, cy: 906.570655139506 },
            just: { cx: 340.96875, cy: 907.1875 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "g",
          ratio: 31 / 40,
          coordinates: {
            equal: { cx: null, cy: 917.5078289339259 },
            just: { cx: 341.25, cy: 918.1 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 2,
          string: "g",
          ratio: 7 / 9,
          coordinates: {
            equal: { cx: null, cy: 920.7484730211613 },
            just: { cx: 341.3333333333333, cy: 921.3333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "g",
          ratio: 959 / 1215,
          coordinates: {
            equal: { cx: null, cy: 934.1911447904345 },
            just: { cx: 341.679012345679, cy: 934.7456790123457 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 3,
          string: "g",
          ratio: 19 / 24,
          coordinates: {
            equal: { cx: null, cy: 936.9516934573386 },
            just: { cx: 341.75, cy: 937.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "g",
          ratio: 4 / 5,
          coordinates: {
            equal: { cx: null, cy: 946.6736257190453 },
            just: { cx: 342, cy: 947.2 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 4,
          string: "g",
          ratio: 65 / 81,
          coordinates: {
            equal: { cx: null, cy: 949.5541982410323 },
            just: { cx: 342.0740740740741, cy: 950.0740740740741 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "g",
          ratio: 13 / 16,
          coordinates: {
            equal: { cx: null, cy: 961.2565241116049 },
            just: { cx: 342.375, cy: 961.75 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 5,
          string: "g",
          ratio: 22 / 27,
          coordinates: {
            equal: { cx: null, cy: 963.9570608509677 },
            just: { cx: 342.44444444444446, cy: 964.4444444444444 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "g",
          ratio: 37 / 45,
          coordinates: {
            equal: { cx: null, cy: 972.598778416929 },
            just: { cx: 342.6666666666667, cy: 973.0666666666666 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 6,
          string: "g",
          ratio: 211 / 256,
          coordinates: {
            equal: { cx: null, cy: 974.9279913546296 },
            just: { cx: 342.7265625, cy: 975.390625 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "g",
          ratio: 5 / 6,
          coordinates: {
            equal: { cx: null, cy: 985.561354765871 },
            just: { cx: 343, cy: 986 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 7,
          string: "g",
          ratio: 203 / 243,
          coordinates: {
            equal: { cx: null, cy: 987.9618318675269 },
            just: { cx: 343.0617283950617, cy: 988.395061728395 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "g",
          ratio: 341 / 405,
          coordinates: {
            equal: { cx: null, cy: 995.6433585928258 },
            just: { cx: 343.25925925925924, cy: 996.0592592592593 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 8,
          string: "g",
          ratio: 27 / 32,
          coordinates: {
            equal: { cx: null, cy: 997.7137700930041 },
            just: { cx: 343.3125, cy: 998.125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "g",
          ratio: 17 / 20,
          coordinates: {
            equal: { cx: null, cy: 1005.0052192892839 },
            just: { cx: 343.5, cy: 1005.4 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 9,
          string: "g",
          ratio: 23 / 27,
          coordinates: {
            equal: { cx: null, cy: 1007.1656486807743 },
            just: { cx: 343.55555555555554, cy: 1007.5555555555555 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "g",
          ratio: 55 / 64,
          coordinates: {
            equal: { cx: null, cy: 1015.9423930837036 },
            just: { cx: 343.78125, cy: 1016.3125 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 10,
          string: "g",
          ratio: 31 / 36,
          coordinates: {
            equal: { cx: null, cy: 1017.9677956382259 },
            just: { cx: 343.8333333333333, cy: 1018.3333333333333 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "g",
          ratio: 13 / 15,
          coordinates: {
            equal: { cx: null, cy: 1024.4490838126967 },
            just: { cx: 344, cy: 1024.8000000000002 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 11,
          string: "g",
          ratio: 211 / 243,
          coordinates: {
            equal: { cx: null, cy: 1026.3694654940216 },
            just: { cx: 344.04938271604937, cy: 1026.716049382716 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "g",
          ratio: 7 / 8,
          coordinates: {
            equal: { cx: null, cy: 1034.1710160744033 },
            just: { cx: 344.25, cy: 1034.5 }
          },
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
          cents: { equal: "", just: "" },
          fontSize: { name: 1.5, number: 1.7 },
          number: 12,
          string: "g",
          ratio: 71 / 81,
          coordinates: {
            equal: { cx: null, cy: 1035.9713739006452 },
            just: { cx: 344.2962962962963, cy: 1036.2962962962963 }
          },
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
