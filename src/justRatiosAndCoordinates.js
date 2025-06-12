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

// let cxOfCelloAString = []
// cxOfCelloAString = calculateCxOfCelloAString()
// function calculateCxOfCelloAString() {
//   justRatios[3].map((ratio, index) => {
//     let cx = ratio * vectors.Cello[3].vectorX + vectors.Cello[3].originX
//     // console.log(`Ratio: ${justRatiosString[3][index]} | cx: ${cx}`)
//     cxOfCelloAString.push(cx)
//   })
//   return cxOfCelloAString
// }

// let cxOfViolaCString = []
// cxOfViolaCString = calculateCxOfViolaCString()
// function calculateCxOfViolaCString() {
//   justRatios[0].map((ratio, index) => {
//     let cx = ratio * vectors.Viola[0].vectorX + vectors.Viola[0].originX
//     console.log(`Ratio: ${justRatiosString[0][index]} | cx: ${cx}`)
//     cxOfViolaCString.push(cx)
//   })
//   return cxOfViolaCString
// }

// let cxOfViolaGString = []
// cxOfViolaGString = calculateCxOfViolaGString()
// function calculateCxOfViolaGString() {
//   justRatios[1].map((ratio, index) => {
//     let cx = ratio * vectors.Viola[1].vectorX + vectors.Viola[1].originX
//     console.log(`Ratio: ${justRatiosString[1][index]} | cx: ${cx}`)
//     cxOfViolaGString.push(cx)
//   })
//   return cxOfViolaGString
// }

// let cxOfViolaDString = []
// cxOfViolaDString = calculateCxOfViolaDString()
// function calculateCxOfViolaDString() {
//   justRatios[2].map((ratio, index) => {
//     let cx = ratio * vectors.Viola[2].vectorX + vectors.Viola[2].originX
//     console.log(`Ratio: ${justRatiosString[2][index]} | cx: ${cx}`)
//     cxOfViolaDString.push(cx)
//   })
//   return cxOfViolaDString
// }

// let cxOfViolaAString = []
// cxOfViolaAString = calculateCxOfViolaAString()
// function calculateCxOfViolaAString() {
//   justRatios[3].map((ratio, index) => {
//     let cx = ratio * vectors.Viola[3].vectorX + vectors.Viola[3].originX
//     console.log(`Ratio: ${justRatiosString[3][index]} | cx: ${cx}`)
//     cxOfViolaAString.push(cx)
//   })
//   return cxOfViolaAString
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

// let cxOfViolinDString = []
// cxOfViolinDString = calculateCxOfViolinDString()
// function calculateCxOfViolinDString() {
//   justRatios[1].map((ratio, index) => {
//     let cx = ratio * vectors.Violin[1].vectorX + vectors.Violin[1].originX
//     console.log(`Ratio: ${justRatiosString[1][index]} | cx: ${cx}`)
//     cxOfViolinDString.push(cx)
//   })
//   return cxOfViolinDString
// }

// let cxOfViolinAString = []
// cxOfViolinAString = calculateCxOfViolinAString()
// function calculateCxOfViolinAString() {
//   justRatios[2].map((ratio, index) => {
//     let cx = ratio * vectors.Violin[2].vectorX + vectors.Violin[2].originX
//     console.log(`Ratio: ${justRatiosString[2][index]} | cx: ${cx}`)
//     cxOfViolinAString.push(cx)
//   })
//   return cxOfViolinAString
// }

// let cxOfViolinEString = []
// cxOfViolinEString = calculateCxOfViolinEString()
// function calculateCxOfViolinEString() {
//   justRatios[3].map((ratio, index) => {
//     let cx = ratio * vectors.Violin[3].vectorX + vectors.Violin[3].originX
//     console.log(`Ratio: ${justRatiosString[3][index]} | cx: ${cx}`)
//     cxOfViolinEString.push(cx)
//   })
//   return cxOfViolinEString
// }

// let cxOfBassEString = []
// cxOfBassEString = calculateCxOfBassEString()
// function calculateCxOfBassEString() {
//   justRatios[3].map((ratio, index) => {
//     let cx = ratio * vectors.Bass[0].vectorX + vectors.Bass[0].originX
//     console.log(`Ratio: ${justRatiosString[3][index]} | cx: ${cx}`)
//     cxOfBassEString.push(cx)
//   })
//   return cxOfBassEString
// }

// let cxOfBassAString = []
// cxOfBassAString = calculateCxOfBassAString()
// function calculateCxOfBassAString() {
//   justRatios[2].map((ratio, index) => {
//     let cx = ratio * vectors.Bass[1].vectorX + vectors.Bass[1].originX
//     console.log(`Ratio: ${justRatiosString[2][index]} | cx: ${cx}`)
//     cxOfBassAString.push(cx)
//   })
//   return cxOfBassAString
// }

// let cxOfBassDString = []
// cxOfBassDString = calculateCxOfBassDString()
// function calculateCxOfBassDString() {
//   justRatios[1].map((ratio, index) => {
//     let cx = ratio * vectors.Bass[2].vectorX + vectors.Bass[2].originX
//     console.log(`Ratio: ${justRatiosString[1][index]} | cx: ${cx}`)
//     cxOfBassDString.push(cx)
//   })
//   return cxOfBassDString
// }

// let cxOfBassGString = []
// cxOfBassGString = calculateCxOfBassGString()
// function calculateCxOfBassGString() {
//   justRatios[0].map((ratio, index) => {
//     let cx = ratio * vectors.Bass[3].vectorX + vectors.Bass[3].originX
//     console.log(`Ratio: ${justRatiosString[0][index]} | cx: ${cx}`)
//     cxOfBassGString.push(cx)
//   })
//   return cxOfBassGString
// }

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

// let cxOfEqualTunedCelloCString = []
// cxOfEqualTunedCelloCString = calculateCxOfEqualTunedCelloCString()
// function calculateCxOfEqualTunedCelloCString() {
//   justRatios[0].map((ratio, index) => {
//     let cx =
//       vectors.Cello[0].vectorX *
//         (ratio * twoCentMinus ** 3 + (1 - twoCentMinus ** 3)) +
//       vectors.Cello[0].originX
//     cxOfEqualTunedCelloCString.push(cx)
//     console.log(`Ratio: ${justRatiosString[0][index]} | cx: ${cx}`)
//   })
//   return cxOfEqualTunedCelloCString
// }

// let cxOfEqualTunedCelloGString = []
// cxOfEqualTunedCelloGString = calculateCxOfEqualTunedCelloGString()
// function calculateCxOfEqualTunedCelloGString() {
//   justRatios[1].map((ratio, index) => {
//     let cx =
//       vectors.Cello[1].vectorX *
//         (ratio * twoCentMinus ** 2 + (1 - twoCentMinus ** 2)) +
//       vectors.Cello[1].originX
//     cxOfEqualTunedCelloGString.push(cx)
//     console.log(`Ratio: ${justRatiosString[1][index]} | cx: ${cx}`)
//   })
//   return cxOfEqualTunedCelloGString
// }

// let cxOfEqualTunedCelloDString = []
// cxOfEqualTunedCelloDString = calculateCxOfEqualTunedCelloDString()
// function calculateCxOfEqualTunedCelloDString() {
//   justRatios[2].map((ratio, index) => {
//     let cx =
//       vectors.Cello[2].vectorX *
//         (ratio * twoCentMinus ** 1 + (1 - twoCentMinus ** 1)) +
//       vectors.Cello[2].originX
//     cxOfEqualTunedCelloDString.push(cx)
//     console.log(`Ratio: ${justRatiosString[2][index]} | cx: ${cx}`)
//   })
//   return cxOfEqualTunedCelloDString
// }

// let cxOfEqualTunedBassEString = []
// cxOfEqualTunedBassEString = calculateCxOfEqualTunedBassEString()
// function calculateCxOfEqualTunedBassEString() {
//   justRatios[3].map((ratio, index) => {
//     let cx =
//       vectors.Bass[0].vectorX *
//         (ratio * twoCentPlus ** 1 + (1 - twoCentPlus ** 1)) +
//       vectors.Bass[0].originX
//     cxOfEqualTunedBassEString.push(cx)
//     console.log(`Ratio: ${justRatiosString[3][index]} | cx: ${cx}`)
//   })
//   return cxOfEqualTunedBassEString
// }

// let cxOfEqualTunedBassDString = []
// cxOfEqualTunedBassDString = calculateCxOfEqualTunedBassDString()
// function calculateCxOfEqualTunedBassDString() {
//   justRatios[1].map((ratio, index) => {
//     let cx =
//       vectors.Bass[2].vectorX *
//         (ratio * twoCentMinus ** 1 + (1 - twoCentMinus ** 1)) +
//       vectors.Bass[2].originX
//     cxOfEqualTunedBassDString.push(cx)
//     console.log(`Ratio: ${justRatiosString[1][index]} | cx: ${cx}`)
//   })
//   return cxOfEqualTunedBassDString
// }

// let cxOfEqualTunedBassGString = []
// cxOfEqualTunedBassGString = calculateCxOfEqualTunedBassGString()
// function calculateCxOfEqualTunedBassGString() {
//   justRatios[0].map((ratio, index) => {
//     let cx =
//       vectors.Bass[3].vectorX *
//         (ratio * twoCentMinus ** 2 + (1 - twoCentMinus ** 2)) +
//       vectors.Bass[3].originX
//     cxOfEqualTunedBassGString.push(cx)
//     console.log(`Ratio: ${justRatiosString[0][index]} | cx: ${cx}`)
//   })
//   return cxOfEqualTunedBassGString
// }
