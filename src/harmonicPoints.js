import { harmonicPointsColors } from "./colors"
const {
  uni,
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
  cSharp,
  d,
  e,
  f,
  fSharp,
  g,
  a,
  bFlat,
  b,
  div2,
  div3,
  div4,
  div5,
  div6,
  div7,
  div8,
  div9,
  div10,
  a4,
  a5,
  a6,
  b4,
  b5,
  b6,
  c3,
  c4,
  c5,
  c6,
  d4,
  d5,
  d6,
  e4,
  e5,
  e6,
  f5,
  g3,
  g4,
  g5,
  g6,
  bFlat4,
  fSharp5,
  fSharp6,
  cSharp6,
  cSharp7
} = harmonicPointsColors

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

const harmoncicRatios = [
  [1 / 2],
  [1 / 3, 2 / 3],
  [1 / 4, 2 / 4, 3 / 4],
  [1 / 5, 2 / 5, 3 / 5, 4 / 5],
  [1 / 6, 2 / 6, 3 / 6, 4 / 6, 5 / 6],
  [1 / 7, 2 / 7, 3 / 7, 4 / 7, 5 / 7, 6 / 7],
  [1 / 8, 2 / 8, 3 / 8, 4 / 8, 5 / 8, 6 / 8, 7 / 8],
  [1 / 9, 2 / 9, 3 / 9, 4 / 9, 5 / 9, 6 / 9, 7 / 9, 8 / 9],
  [1 / 10, 2 / 10, 3 / 10, 4 / 10, 5 / 10, 6 / 10, 7 / 10, 8 / 10, 9 / 10]
]

// let cyOfAllStrings = []
// cyOfAllStrings = calculateCyOfAllStrings()
// function calculateCyOfAllStrings() {
//   harmoncicRatios.map(ratio => {
//     console.log(ratio)
//     ratio.map(ratio => {
//       let cy = ratio * vectors.Violin[0].vectorY + vectors.Violin[0].originY
//       cyOfAllStrings.push(cy)
//     })
//   })
//   return cyOfAllStrings
// }
// console.log(cyOfAllStrings)

// let cxOfCelloCString = []
// cxOfCelloCString = calculateCxOfCelloCString()
// function calculateCxOfCelloCString() {
//   harmoncicRatios.map((ratio, index) => {
//     ratio.map((ratio, i) => {
//       let cx = ratio * vectors.Cello[0].vectorX + vectors.Cello[0].originX
//       cxOfCelloCString.push(cx)
//       console.log(`${i + 1}/${index + 2}: ${cx}`)
//     })
//   })
//   return cxOfCelloCString
// }

// let cxOfCelloGString = []
// cxOfCelloGString = calculateCxOfCelloGString()
// function calculateCxOfCelloGString() {
//   harmoncicRatios.map((ratio, index) => {
//     ratio.map((ratio, i) => {
//       let cx = ratio * vectors.Cello[1].vectorX + vectors.Cello[1].originX
//       cxOfCelloGString.push(cx)
//       console.log(`${i + 1}/${index + 2}: ${cx}`)
//     })
//   })
//   return cxOfCelloGString
// }

// let cxOfCelloDString = []
// cxOfCelloDString = calculateCxOfCelloDString()
// function calculateCxOfCelloDString() {
//   harmoncicRatios.map((ratio, index) => {
//     ratio.map((ratio, i) => {
//       let cx = ratio * vectors.Cello[2].vectorX + vectors.Cello[2].originX
//       cxOfCelloDString.push(cx)
//       console.log(`${i + 1}/${index + 2}: ${cx}`)
//     })
//   })
//   return cxOfCelloDString
// }

// let cxOfCelloAString = []
// cxOfCelloAString = calculateCxOfCelloAString()
// function calculateCxOfCelloAString() {
//   harmoncicRatios.map((ratio, index) => {
//     ratio.map((ratio, i) => {
//       let cx = ratio * vectors.Cello[3].vectorX + vectors.Cello[3].originX
//       cxOfCelloAString.push(cx)
//       console.log(`${i + 1}/${index + 2}: ${cx}`)
//     })
//   })
//   return cxOfCelloAString
// }

export const harmonicPoints = {
  Violin: [
    [
      [
        {
          name: { English: "G", German: "G" },
          number: 12,
          ratio: 0.5,
          coordinates: { cx: 255, cy: 598 },
          colors: {
            uni: uni,
            tone: g,
            fret: fret12,
            name: g,
            div: div2
          }
        }
      ],
      [
        {
          name: { English: "D", German: "D" },
          number: 7,
          cents: "+2",
          ratio: 1 / 3,
          // coordinates: { cx: , cy: 404},
          colors: {
            uni: uni,
            tone: d,
            fret: fret7,
            name: d,
            div: div3
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 7,
          cents: "+2",
          ratio: 2 / 3,
          // coordinates: { cx: , cy: 792},
          colors: {
            uni: uni,
            tone: d,
            fret: fret7,
            name: d,
            div: div3
          }
        }
      ],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ],
    [],
    [],
    []
  ],
  Viola: [[], [], [], []],
  Cello: [
    [
      [
        {
          name: { English: "C", German: "C" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 270, cy: 598 },
          colors: {
            uni: uni,
            tone: c3,
            fret: fret12,
            name: c,
            div: div2
          }
        }
      ],
      [
        {
          name: { English: "G", German: "G" },
          number: 7,
          cents: "+2",
          ratio: 1 / 3,
          coordinates: { cx: 274, cy: 404 },
          colors: {
            uni: uni,
            tone: g3,
            fret: fret7,
            name: g,
            div: div3
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 7,
          cents: "+2",
          ratio: 2 / 3,
          coordinates: { cx: 266, cy: 792 },
          colors: {
            uni: uni,
            tone: g3,
            fret: fret7,
            name: g,
            div: div3
          }
        }
      ],
      [
        {
          name: { English: "E", German: "E" },
          number: 4,
          cents: "-14",
          ratio: 1 / 5,
          coordinates: { cx: 277.2, cy: 248.8 },
          colors: {
            uni: uni,
            tone: e4,
            fret: fret4,
            name: e,
            div: div5
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 9,
          cents: "-16",
          ratio: 2 / 5,
          coordinates: { cx: 272.4, cy: 481.6 },
          colors: {
            uni: uni,
            tone: e4,
            fret: fret9,
            name: e,
            div: div5
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 4,
          cents: "-14",
          ratio: 3 / 5,
          coordinates: { cx: 267.6, cy: 714.4 },
          colors: {
            uni: uni,
            tone: e4,
            fret: fret4,
            name: e,
            div: div5
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 4,
          cents: "-14",
          ratio: 4 / 5,
          coordinates: { cx: 262.8, cy: 947.2 },
          colors: {
            uni: uni,
            tone: e4,
            fret: fret4,
            name: e,
            div: div5
          }
        }
      ],
      [
        {
          name: { English: "C", German: "C" },
          number: 5,
          cents: "-2",
          ratio: 1 / 4,
          coordinates: { cx: 276, cy: 307 },
          colors: {
            uni: uni,
            tone: c4,
            fret: fret5,
            name: c,
            div: div4
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 270, cy: 598 },
          colors: {
            uni: uni,
            tone: c3,
            fret: fret12,
            name: c,
            div: div2
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 264, cy: 889 },
          colors: {
            uni: uni,
            tone: c4,
            fret: fret12,
            name: c,
            div: div4
          }
        }
      ],
      [
        {
          name: { English: "G", German: "G" },
          number: 3,
          cents: "+16",
          ratio: 1 / 6,
          coordinates: { cx: 278, cy: 210 },
          colors: {
            uni: uni,
            tone: g4,
            fret: fret3,
            name: g,
            div: div6
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 7,
          cents: "+2",
          ratio: 1 / 3,
          coordinates: { cx: 274, cy: 404 },
          colors: {
            uni: uni,
            tone: g3,
            fret: fret7,
            name: g,
            div: div3
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 270, cy: 598 },
          colors: {
            uni: uni,
            tone: c3,
            fret: fret12,
            name: c,
            div: div2
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 7,
          cents: "+2",
          ratio: 2 / 3,
          coordinates: { cx: 266, cy: 792 },
          colors: {
            uni: uni,
            tone: g3,
            fret: fret7,
            name: g,
            div: div3
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 7,
          cents: "+2",
          ratio: 5 / 6,
          coordinates: { cx: 262, cy: 986 },
          colors: {
            uni: uni,
            tone: g4,
            fret: fret7,
            name: g,
            div: div6
          }
        }
      ],
      [
        {
          name: { English: "E", German: "E" },
          number: 2,
          cents: "-18",
          ratio: 1 / 10,
          coordinates: { cx: 279.6, cy: 132.4 },
          colors: {
            uni: uni,
            tone: e5,
            fret: fret2,
            name: e,
            div: div10
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 4,
          cents: "-14",
          ratio: 1 / 5,
          coordinates: { cx: 277.2, cy: 248.8 },
          colors: {
            uni: uni,
            tone: e4,
            fret: fret4,
            name: e,
            div: div5
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 6,
          cents: "+17",
          ratio: 3 / 10,
          coordinates: { cx: 274.8, cy: 365.2 },
          colors: {
            uni: uni,
            tone: e5,
            fret: fret6,
            name: e,
            div: div10
          }
        },

        {
          name: { English: "E", German: "E" },
          number: 9,
          cents: "-16",
          ratio: 2 / 5,
          coordinates: { cx: 272.4, cy: 481.6 },
          colors: {
            uni: uni,
            tone: e4,
            fret: fret9,
            name: e,
            div: div5
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 270, cy: 598 },
          colors: {
            uni: uni,
            tone: c3,
            fret: fret12,
            name: c,
            div: div2
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 4,
          cents: "-14",
          ratio: 3 / 5,
          coordinates: { cx: 267.6, cy: 714.4 },
          colors: {
            uni: uni,
            tone: e4,
            fret: fret4,
            name: e,
            div: div5
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 9,
          cents: "-16",
          ratio: 7 / 10,
          coordinates: { cx: 265.2, cy: 830.8 },
          colors: {
            uni: uni,
            tone: e5,
            fret: fret9,
            name: e,
            div: div10
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 4,
          cents: "-14",
          ratio: 4 / 5,
          coordinates: { cx: 262.8, cy: 947.2 },
          colors: {
            uni: uni,
            tone: e4,
            fret: fret4,
            name: e,
            div: div5
          }
        },
        {
          name: { English: "E", German: "E" },
          number: 4,
          cents: "-14",
          ratio: 9 / 10,
          coordinates: { cx: 260.4, cy: 1063.6 },
          colors: {
            uni: uni,
            tone: e5,
            fret: fret4,
            name: e,
            div: div10
          }
        }
      ],
      [
        {
          name: { English: "C", German: "C" },
          number: 2,
          cents: "+31",
          ratio: 1 / 8,
          coordinates: { cx: 279, cy: 161.5 },
          colors: {
            uni: uni,
            tone: c5,
            fret: fret2,
            name: c,
            div: div8
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 5,
          cents: "-2",
          ratio: 1 / 4,
          coordinates: { cx: 276, cy: 307 },
          colors: {
            uni: uni,
            tone: c4,
            fret: fret5,
            name: c,
            div: div4
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 8,
          cents: "+14",
          ratio: 3 / 8,
          coordinates: { cx: 273, cy: 452.5 },
          colors: {
            uni: uni,
            tone: c5,
            fret: fret8,
            name: c,
            div: div8
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 270, cy: 598 },
          colors: {
            uni: uni,
            tone: c3,
            fret: fret12,
            name: c,
            div: div2
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 5,
          cents: "-2",
          ratio: 5 / 8,
          coordinates: { cx: 267, cy: 743.5 },
          colors: {
            uni: uni,
            tone: c5,
            fret: fret5,
            name: c,
            div: div8
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 264, cy: 889 },
          colors: {
            uni: uni,
            tone: c4,
            fret: fret12,
            name: c,
            div: div4
          }
        },
        {
          name: { English: "C", German: "C" },
          number: 12,
          ratio: 7 / 8,
          coordinates: { cx: 261, cy: 1034.5 },
          colors: {
            uni: uni,
            tone: c5,
            fret: fret12,
            name: c,
            div: div8
          }
        }
      ],
      [
        {
          name: { English: "D", German: "D" },
          number: 2,
          cents: "+4",
          ratio: 1 / 9,
          coordinates: { cx: 279.3333333333333, cy: 145.33333333333333 },
          colors: {
            uni: uni,
            tone: d5,
            fret: fret2,
            name: d,
            div: div9
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 4,
          cents: "+35",
          ratio: 2 / 9,
          coordinates: { cx: 276.6666666666667, cy: 274.66666666666666 },
          colors: {
            uni: uni,
            tone: d5,
            fret: fret4,
            name: d,
            div: div9
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 7,
          cents: "+2",
          ratio: 1 / 3,
          coordinates: { cx: 274, cy: 404 },
          colors: {
            uni: uni,
            tone: g3,
            fret: fret7,
            name: g,
            div: div3
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 10,
          cents: "+18",
          ratio: 4 / 9,
          coordinates: { cx: 271.3333333333333, cy: 533.3333333333333 },
          colors: {
            uni: uni,
            tone: d5,
            fret: fret10,
            name: d,
            div: div9
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 2,
          cents: "+4",
          ratio: 5 / 9,
          coordinates: { cx: 268.6666666666667, cy: 662.6666666666667 },
          colors: {
            uni: uni,
            tone: d5,
            fret: fret2,
            name: d,
            div: div9
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 7,
          cents: "+2",
          ratio: 2 / 3,
          coordinates: { cx: 266, cy: 792 },
          colors: {
            uni: uni,
            tone: g3,
            fret: fret7,
            name: g,
            div: div3
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 2,
          cents: "+4",
          ratio: 7 / 9,
          coordinates: { cx: 263.3333333333333, cy: 921.3333333333333 },
          colors: {
            uni: uni,
            tone: d5,
            fret: fret2,
            name: d,
            div: div9
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 2,
          cents: "+4",
          ratio: 8 / 9,
          coordinates: { cx: 260.6666666666667, cy: 1050.6666666666667 },
          colors: {
            uni: uni,
            tone: d5,
            fret: fret2,
            name: d,
            div: div9
          }
        }
      ],
      [
        {
          name: { English: "B♭", German: "B" },
          number: 3,
          cents: "-33",
          ratio: 1 / 7,
          coordinates: { cx: 278.57142857142856, cy: 182.28571428571428 },
          colors: {
            uni: uni,
            tone: bFlat4,
            fret: fret3,
            name: bFlat,
            div: div7
          }
        },
        {
          name: { English: "B♭", German: "B" },
          number: 6,
          cents: "-17",
          ratio: 2 / 7,
          coordinates: { cx: 275.14285714285717, cy: 348.57142857142856 },
          colors: {
            uni: uni,
            tone: bFlat4,
            fret: fret6,
            name: bFlat,
            div: div7
          }
        },
        {
          name: { English: "B♭", German: "B" },
          number: 10,
          cents: "-31",
          ratio: 3 / 7,
          coordinates: { cx: 271.7142857142857, cy: 514.8571428571429 },
          colors: {
            uni: uni,
            tone: bFlat4,
            fret: fret10,
            name: bFlat,
            div: div7
          }
        },
        {
          name: { English: "B♭", German: "B" },
          number: 3,
          cents: "-33",
          ratio: 4 / 7,
          coordinates: { cx: 268.2857142857143, cy: 681.1428571428571 },
          colors: {
            uni: uni,
            tone: bFlat4,
            fret: fret3,
            name: bFlat,
            div: div7
          }
        },
        {
          name: { English: "B♭", German: "B" },
          number: 10,
          cents: "-31",
          ratio: 5 / 7,
          coordinates: { cx: 264.85714285714283, cy: 847.4285714285714 },
          colors: {
            uni: uni,
            tone: bFlat4,
            fret: fret10,
            name: bFlat,
            div: div7
          }
        },
        {
          name: { English: "B♭", German: "B" },
          number: 10,
          cents: "-31",
          ratio: 6 / 7,
          coordinates: { cx: 261.42857142857144, cy: 1013.7142857142857 },
          colors: {
            uni: uni,
            tone: bFlat4,
            fret: fret10,
            name: bFlat,
            div: div7
          }
        }
      ]
    ],
    [
      [
        {
          name: { English: "G", German: "G" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 290, cy: 598 },
          colors: {
            uni: uni,
            tone: g3,
            fret: fret12,
            name: g,
            div: div2
          }
        }
      ],
      [
        {
          name: { English: "D", German: "D" },
          number: 7,
          cents: "+2",
          ratio: 1 / 3,
          coordinates: { cx: 291.3333333333333, cy: 404 },
          colors: {
            uni: uni,
            tone: d4,
            fret: fret7,
            name: d,
            div: div3
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 7,
          cents: "+2",
          ratio: 2 / 3,
          coordinates: { cx: 288.6666666666667, cy: 792 },
          colors: {
            uni: uni,
            tone: d4,
            fret: fret7,
            name: d,
            div: div3
          }
        }
      ],
      [
        {
          name: { English: "B", German: "H" },
          number: 4,
          cents: "-14",
          ratio: 1 / 5,
          coordinates: { cx: 292.4, cy: 248.8 },
          colors: {
            uni: uni,
            tone: b4,
            fret: fret4,
            name: b,
            div: div5
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 9,
          cents: "-16",
          ratio: 2 / 5,
          coordinates: { cx: 290.8, cy: 481.6 },
          colors: {
            uni: uni,
            tone: b4,
            fret: fret9,
            name: b,
            div: div5
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 4,
          cents: "-14",
          ratio: 3 / 5,
          coordinates: { cx: 289.2, cy: 714.4 },
          colors: {
            uni: uni,
            tone: b4,
            fret: fret4,
            name: b,
            div: div5
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 4,
          cents: "-14",
          ratio: 4 / 5,
          coordinates: { cx: 287.6, cy: 947.2 },
          colors: {
            uni: uni,
            tone: b4,
            fret: fret4,
            name: b,
            div: div5
          }
        }
      ],
      [
        {
          name: { English: "G", German: "G" },
          number: 5,
          cents: "-2",
          ratio: 1 / 4,
          coordinates: { cx: 292, cy: 307 },
          colors: {
            uni: uni,
            tone: g4,
            fret: fret5,
            name: g,
            div: div4
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 290, cy: 598 },
          colors: {
            uni: uni,
            tone: g3,
            fret: fret12,
            name: g,
            div: div2
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 288, cy: 889 },
          colors: {
            uni: uni,
            tone: g4,
            fret: fret12,
            name: g,
            div: div4
          }
        }
      ],
      [
        {
          name: { English: "D", German: "D" },
          number: 3,
          cents: "+16",
          ratio: 1 / 6,
          coordinates: { cx: 292.6666666666667, cy: 210 },
          colors: {
            uni: uni,
            tone: d5,
            fret: fret3,
            name: d,
            div: div6
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 7,
          cents: "+2",
          ratio: 1 / 3,
          coordinates: { cx: 291.3333333333333, cy: 404 },
          colors: {
            uni: uni,
            tone: d4,
            fret: fret7,
            name: d,
            div: div3
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 290, cy: 598 },
          colors: {
            uni: uni,
            tone: g3,
            fret: fret12,
            name: g,
            div: div2
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 7,
          cents: "+2",
          ratio: 2 / 3,
          coordinates: { cx: 288.6666666666667, cy: 792 },
          colors: {
            uni: uni,
            tone: d4,
            fret: fret7,
            name: d,
            div: div3
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 7,
          cents: "+2",
          ratio: 5 / 6,
          coordinates: { cx: 287.3333333333333, cy: 986 },
          colors: {
            uni: uni,
            tone: d5,
            fret: fret7,
            name: d,
            div: div6
          }
        }
      ],
      [
        {
          name: { English: "B", German: "H" },
          number: 2,
          cents: "-18",
          ratio: 1 / 10,
          coordinates: { cx: 293.2, cy: 132.4 },
          colors: {
            uni: uni,
            tone: b5,
            fret: fret2,
            name: b,
            div: div10
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 4,
          cents: "-14",
          ratio: 1 / 5,
          coordinates: { cx: 292.4, cy: 248.8 },
          colors: {
            uni: uni,
            tone: b4,
            fret: fret4,
            name: b,
            div: div5
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 6,
          cents: "+17",
          ratio: 3 / 10,
          coordinates: { cx: 291.6, cy: 365.2 },
          colors: {
            uni: uni,
            tone: b5,
            fret: fret6,
            name: b,
            div: div10
          }
        },

        {
          name: { English: "B", German: "H" },
          number: 9,
          cents: "-16",
          ratio: 2 / 5,
          coordinates: { cx: 290.8, cy: 481.6 },
          colors: {
            uni: uni,
            tone: b4,
            fret: fret9,
            name: b,
            div: div5
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 290, cy: 598 },
          colors: {
            uni: uni,
            tone: g3,
            fret: fret12,
            name: g,
            div: div2
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 4,
          cents: "-14",
          ratio: 3 / 5,
          coordinates: { cx: 289.2, cy: 714.4 },
          colors: {
            uni: uni,
            tone: b4,
            fret: fret4,
            name: b,
            div: div5
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 9,
          cents: "-16",
          ratio: 7 / 10,
          coordinates: { cx: 288.4, cy: 830.8 },
          colors: {
            uni: uni,
            tone: b5,
            fret: fret9,
            name: b,
            div: div10
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 4,
          cents: "-14",
          ratio: 4 / 5,
          coordinates: { cx: 287.6, cy: 947.2 },
          colors: {
            uni: uni,
            tone: b4,
            fret: fret4,
            name: b,
            div: div5
          }
        },
        {
          name: { English: "B", German: "H" },
          number: 4,
          cents: "-14",
          ratio: 9 / 10,
          coordinates: { cx: 286.8, cy: 1063.6 },
          colors: {
            uni: uni,
            tone: b5,
            fret: fret4,
            name: b,
            div: div10
          }
        }
      ],
      [
        {
          name: { English: "G", German: "G" },
          number: 2,
          cents: "+31",
          ratio: 1 / 8,
          coordinates: { cx: 293, cy: 161.5 },
          colors: {
            uni: uni,
            tone: g5,
            fret: fret2,
            name: g,
            div: div8
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 5,
          cents: "-2",
          ratio: 1 / 4,
          coordinates: { cx: 292, cy: 307 },
          colors: {
            uni: uni,
            tone: g4,
            fret: fret5,
            name: g,
            div: div4
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 8,
          cents: "+14",
          ratio: 3 / 8,
          coordinates: { cx: 291, cy: 452.5 },
          colors: {
            uni: uni,
            tone: g5,
            fret: fret8,
            name: g,
            div: div8
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 12,
          ratio: 1 / 2,
          coordinates: { cx: 290, cy: 598 },
          colors: {
            uni: uni,
            tone: g3,
            fret: fret12,
            name: g,
            div: div2
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 5,
          cents: "-2",
          ratio: 5 / 8,
          coordinates: { cx: 289, cy: 743.5 },
          colors: {
            uni: uni,
            tone: g5,
            fret: fret5,
            name: g,
            div: div8
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 12,
          ratio: 3 / 4,
          coordinates: { cx: 288, cy: 889 },
          colors: {
            uni: uni,
            tone: g4,
            fret: fret12,
            name: g,
            div: div4
          }
        },
        {
          name: { English: "G", German: "G" },
          number: 12,
          ratio: 7 / 8,
          coordinates: { cx: 287, cy: 1034.5 },
          colors: {
            uni: uni,
            tone: g5,
            fret: fret12,
            name: g,
            div: div8
          }
        }
      ],
      [
        {
          name: { English: "A", German: "A" },
          number: 2,
          cents: "+4",
          ratio: 1 / 9,
          coordinates: { cx: 293.1111111111111, cy: 145.33333333333333 },
          colors: {
            uni: uni,
            tone: a5,
            fret: fret2,
            name: a,
            div: div9
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 4,
          cents: "+35",
          ratio: 2 / 9,
          coordinates: { cx: 292.2222222222222, cy: 274.66666666666666 },
          colors: {
            uni: uni,
            tone: a5,
            fret: fret4,
            name: a,
            div: div9
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 7,
          cents: "+2",
          ratio: 1 / 3,
          coordinates: { cx: 291.3333333333333, cy: 404 },
          colors: {
            uni: uni,
            tone: d4,
            fret: fret7,
            name: d,
            div: div3
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 10,
          cents: "+18",
          ratio: 4 / 9,
          coordinates: { cx: 290.44444444444444, cy: 533.3333333333333 },
          colors: {
            uni: uni,
            tone: a5,
            fret: fret10,
            name: a,
            div: div9
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 2,
          cents: "+4",
          ratio: 5 / 9,
          coordinates: { cx: 289.55555555555555, cy: 662.6666666666667 },
          colors: {
            uni: uni,
            tone: a5,
            fret: fret2,
            name: a,
            div: div9
          }
        },
        {
          name: { English: "D", German: "D" },
          number: 7,
          cents: "+2",
          ratio: 2 / 3,
          coordinates: { cx: 288.6666666666666, cy: 792 },
          colors: {
            uni: uni,
            tone: d4,
            fret: fret7,
            name: d,
            div: div3
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 2,
          cents: "+4",
          ratio: 7 / 9,
          coordinates: { cx: 287.77777777777777, cy: 921.3333333333333 },
          colors: {
            uni: uni,
            tone: a5,
            fret: fret2,
            name: a,
            div: div9
          }
        },
        {
          name: { English: "A", German: "A" },
          number: 2,
          cents: "+4",
          ratio: 8 / 9,
          coordinates: { cx: 286.8888888888888, cy: 1050.6666666666667 },
          colors: {
            uni: uni,
            tone: a5,
            fret: fret2,
            name: a,
            div: div9
          }
        }
      ],
      [
        {
          name: { English: "F", German: "F" },
          number: 3,
          cents: "-33",
          ratio: 1 / 7,
          coordinates: { cx: 292.85714285714283, cy: 182.28571428571428 },
          colors: {
            uni: uni,
            tone: f5,
            fret: fret3,
            name: f,
            div: div7
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 6,
          cents: "-17",
          ratio: 2 / 7,
          coordinates: { cx: 291.7142857142857, cy: 348.57142857142856 },
          colors: {
            uni: uni,
            tone: f5,
            fret: fret6,
            name: f,
            div: div7
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 10,
          cents: "-31",
          ratio: 3 / 7,
          coordinates: { cx: 290.57142857142856, cy: 514.8571428571429 },
          colors: {
            uni: uni,
            tone: f5,
            fret: fret10,
            name: f,
            div: div7
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 3,
          cents: "-33",
          ratio: 4 / 7,
          coordinates: { cx: 289.42857142857144, cy: 681.1428571428571 },
          colors: {
            uni: uni,
            tone: f5,
            fret: fret3,
            name: f,
            div: div7
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 10,
          cents: "-31",
          ratio: 5 / 7,
          coordinates: { cx: 288.2857142857143, cy: 847.4285714285714 },
          colors: {
            uni: uni,
            tone: f5,
            fret: fret10,
            name: f,
            div: div7
          }
        },
        {
          name: { English: "F", German: "F" },
          number: 10,
          cents: "-31",
          ratio: 6 / 7,
          coordinates: { cx: 287.14285714285717, cy: 1013.7142857142857 },
          colors: {
            uni: uni,
            tone: f5,
            fret: fret10,
            name: f,
            div: div7
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
  ],
  Bass: [[], [], [], []]
}
