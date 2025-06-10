let equalRatios = []

equalRatios = calculateEqualRatios()

function calculateEqualRatios() {
  for (let i = 0; i < 36; i++) {
    equalRatios[i] = 1 - 2 ** -((i + 1) / 12)
  }
  return equalRatios
}

// console.log(equalRatios)

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

let cyOfAllStrings = []
cyOfAllStrings = calculateCyOfAllStrings()
function calculateCyOfAllStrings() {
  equalRatios.map(ratio => {
    let cy = ratio * vectors.Violin[0].vectorY + vectors.Violin[0].originY
    cyOfAllStrings.push(cy)
  })
  return cyOfAllStrings
}
// console.log(cyOfAllStrings)

let cxOfViolinAndViolaLowestString = []
cxOfViolinAndViolaLowestString = calculateCxOfViolinAndViolaLowestString()
function calculateCxOfViolinAndViolaLowestString() {
  equalRatios.map(ratio => {
    let cx = ratio * vectors.Violin[0].vectorX + vectors.Violin[0].originX
    cxOfViolinAndViolaLowestString.push(cx)
  })
  return cxOfViolinAndViolaLowestString
}
// console.log(cxOfViolinAndViolaLowestString)

let cxOfViolinAndViola2ndLowestString = []
cxOfViolinAndViola2ndLowestString = calculateCxOfViolinAndViola2ndLowestString()
function calculateCxOfViolinAndViola2ndLowestString() {
  equalRatios.map(ratio => {
    let cx = ratio * vectors.Violin[1].vectorX + vectors.Violin[1].originX
    cxOfViolinAndViola2ndLowestString.push(cx)
  })
  return cxOfViolinAndViola2ndLowestString
}
// console.log(cxOfViolinAndViola2ndLowestString)

let cxOfViolinAndViola2ndHighestString = []
cxOfViolinAndViola2ndHighestString =
  calculateCxOfViolinAndViola2ndHighestString()
function calculateCxOfViolinAndViola2ndHighestString() {
  equalRatios.map(ratio => {
    let cx = ratio * vectors.Violin[2].vectorX + vectors.Violin[2].originX
    cxOfViolinAndViola2ndHighestString.push(cx)
  })
  return cxOfViolinAndViola2ndHighestString
}
// console.log(cxOfViolinAndViola2ndHighestString)

let cxOfViolinAndViolaHighestString = []
cxOfViolinAndViolaHighestString = calculateCxOfViolinAndViolaHighestString()
function calculateCxOfViolinAndViolaHighestString() {
  equalRatios.map(ratio => {
    let cx = ratio * vectors.Violin[3].vectorX + vectors.Violin[3].originX
    cxOfViolinAndViolaHighestString.push(cx)
  })
  return cxOfViolinAndViolaHighestString
}
// console.log(cxOfViolinAndViolaHighestString)

let cxOfCelloCString = []
cxOfCelloCString = calculateCxOfCelloCString()
function calculateCxOfCelloCString() {
  equalRatios.map(ratio => {
    let cx = ratio * vectors.Cello[0].vectorX + vectors.Cello[0].originX
    cxOfCelloCString.push(cx)
  })
  return cxOfCelloCString
}
// console.log(cxOfCelloCString)

let cxOfCelloGString = []
cxOfCelloGString = calculateCxOfCelloGString()
function calculateCxOfCelloGString() {
  equalRatios.map(ratio => {
    let cx = ratio * vectors.Cello[1].vectorX + vectors.Cello[1].originX
    cxOfCelloGString.push(cx)
  })
  return cxOfCelloGString
}
// console.log(cxOfCelloGString)

let cxOfCelloDString = []
cxOfCelloDString = calculateCxOfCelloDString()
function calculateCxOfCelloDString() {
  equalRatios.map(ratio => {
    let cx = ratio * vectors.Cello[2].vectorX + vectors.Cello[2].originX
    cxOfCelloDString.push(cx)
  })
  return cxOfCelloDString
}
// console.log(cxOfCelloDString)

let cxOfCelloAString = []
cxOfCelloAString = calculateCxOfCelloAString()
function calculateCxOfCelloAString() {
  equalRatios.map(ratio => {
    let cx = ratio * vectors.Cello[3].vectorX + vectors.Cello[3].originX
    cxOfCelloAString.push(cx)
  })
  return cxOfCelloAString
}
// console.log(cxOfCelloAString)

let cxOfBassEString = []
cxOfBassEString = calculateCxOfBassEString()
function calculateCxOfBassEString() {
  equalRatios.map(ratio => {
    let cx = ratio * vectors.Bass[0].vectorX + vectors.Bass[0].originX
    cxOfBassEString.push(cx)
  })
  return cxOfBassEString
}
// console.log(cxOfBassEString)

let cxOfBassAString = []
cxOfBassAString = calculateCxOfBassAString()
function calculateCxOfBassAString() {
  equalRatios.map(ratio => {
    let cx = ratio * vectors.Bass[1].vectorX + vectors.Bass[1].originX
    cxOfBassAString.push(cx)
  })
  return cxOfBassAString
}
// console.log(cxOfBassAString)

let cxOfBassDString = []
cxOfBassDString = calculateCxOfBassDString()
function calculateCxOfBassDString() {
  equalRatios.map(ratio => {
    let cx = ratio * vectors.Bass[2].vectorX + vectors.Bass[2].originX
    cxOfBassDString.push(cx)
  })
  return cxOfBassDString
}
// console.log(cxOfBassDString)

let cxOfBassGString = []
cxOfBassGString = calculateCxOfBassGString()
function calculateCxOfBassGString() {
  equalRatios.map(ratio => {
    let cx = ratio * vectors.Bass[3].vectorX + vectors.Bass[3].originX
    cxOfBassGString.push(cx)
  })
  return cxOfBassGString
}
// console.log(cxOfBassGString)

// Difference/ratio between a just fifth and an equal fifth
let twoCentPlus = 2 ** (7 / 12) / (3 / 2)
let twoCentMinus = 3 / 2 / 2 ** (7 / 12)

equalRatios = calculateEqualRatios()

function calculateEqualRatios() {
  for (let i = 0; i < 36; i++) {
    equalRatios[i] = 1 - 2 ** -((i + 1) / 12)
  }
  return equalRatios
}

// let cyOfJustTunedCString = []
// cyOfJustTunedCString = calculateCyOfJustTunedCString()
// function calculateCyOfJustTunedCString() {
//   equalRatios.map((ratio, index) => {
//     let cy =
//       vectors.Viola[0].vectorY *
//         (ratio * twoCentPlus ** 3 + (1 - twoCentPlus ** 3)) +
//       vectors.Viola[0].originY
//     cyOfJustTunedCString.push(cy)
//     console.log(`${index + 1}: ${cy}`)
//   })
//   return cyOfJustTunedCString
// }

// let cyOfJustTunedGString = []
// cyOfJustTunedGString = calculateCyOfJustTunedGString()
// function calculateCyOfJustTunedGString() {
//   equalRatios.map((ratio, index) => {
//     let cy =
//       vectors.Violin[0].vectorY *
//         (ratio * twoCentPlus ** 2 + (1 - twoCentPlus ** 2)) +
//       vectors.Violin[0].originY
//     cyOfJustTunedGString.push(cy)
//     console.log(`${index + 1}: ${cy}`)
//   })
//   return cyOfJustTunedGString
// }

// let cyOfJustTunedDString = []
// cyOfJustTunedDString = calculateCyOfJustTunedDString()
// function calculateCyOfJustTunedDString() {
//   equalRatios.map((ratio, index) => {
//     let cy =
//       vectors.Violin[0].vectorY *
//         (ratio * twoCentPlus ** 1 + (1 - twoCentPlus ** 1)) +
//       vectors.Violin[0].originY
//     cyOfJustTunedDString.push(cy)
//     console.log(`${index + 1}: ${cy}`)
//   })
//   return cyOfJustTunedDString
// }

// let cyOfJustTunedAString = []
// cyOfJustTunedAString = calculateCyOfJustTunedAString()
// function calculateCyOfJustTunedAString() {
//   equalRatios.map((ratio, index) => {
//     let cy =
//       vectors.Violin[0].vectorY *
//         (ratio * twoCentPlus ** 0 + (1 - twoCentPlus ** 0)) +
//       vectors.Violin[0].originY
//     cyOfJustTunedAString.push(cy)
//     console.log(`${index + 1}: ${cy}`)
//   })
//   return cyOfJustTunedAString
// }

// let cyOfJustTunedEString = []
// cyOfJustTunedEString = calculateCyOfJustTunedEString()
// function calculateCyOfJustTunedEString() {
//   equalRatios.map((ratio, index) => {
//     let cy =
//       vectors.Violin[0].vectorY *
//         (ratio * twoCentMinus ** 1 + (1 - twoCentMinus ** 1)) +
//       vectors.Violin[0].originY
//     cyOfJustTunedEString.push(cy)
//     console.log(`${index + 1}: ${cy}`)
//   })
//   return cyOfJustTunedEString
// }

// `${
//   stringVectors[i][0] *
//     (equalRatios[j] * twoCentPlus ** (3 - i) + (1 - twoCentPlus ** (3 - i))) +
//   stringCoordinates[i][0]
// }`

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

// let cxOfJustTunedViolinDString = []
// cxOfJustTunedViolinDString = calculateCxOfJustTunedViolinDString()
// function calculateCxOfJustTunedViolinDString() {
//   equalRatios.map((ratio, index) => {
//     let cx =
//       vectors.Violin[1].vectorX *
//         (ratio * twoCentPlus ** 1 + (1 - twoCentPlus ** 1)) +
//       vectors.Violin[1].originX
//     cxOfJustTunedViolinDString.push(cx)
//     console.log(`${index + 1}: ${cx}`)
//   })
//   return cxOfJustTunedViolinDString
// }

// let cxOfJustTunedViolinAString = []
// cxOfJustTunedViolinAString = calculateCxOfJustTunedViolinAString()
// function calculateCxOfJustTunedViolinAString() {
//   equalRatios.map((ratio, index) => {
//     let cx =
//       vectors.Violin[2].vectorX *
//         (ratio * twoCentPlus ** 0 + (1 - twoCentPlus ** 0)) +
//       vectors.Violin[2].originX
//     cxOfJustTunedViolinAString.push(cx)
//     console.log(`${index + 1}: ${cx}`)
//   })
//   return cxOfJustTunedViolinAString
// }

// let cxOfJustTunedViolinEString = []
// cxOfJustTunedViolinEString = calculateCxOfJustTunedViolinEString()
// function calculateCxOfJustTunedViolinEString() {
//   equalRatios.map((ratio, index) => {
//     let cx =
//       vectors.Violin[3].vectorX *
//         (ratio * twoCentMinus ** 1 + (1 - twoCentMinus ** 1)) +
//       vectors.Violin[3].originX
//     cxOfJustTunedViolinEString.push(cx)
//     console.log(`${index + 1}: ${cx}`)
//   })
//   return cxOfJustTunedViolinEString
// }

// let cxOfJustTunedViolaCString = []
// cxOfJustTunedViolaCString = calculateCxOfJustTunedViolaCString()
// function calculateCxOfJustTunedViolaCString() {
//   equalRatios.map((ratio, index) => {
//     let cx =
//       vectors.Viola[0].vectorX *
//         (ratio * twoCentPlus ** 3 + (1 - twoCentPlus ** 3)) +
//       vectors.Viola[0].originX
//     cxOfJustTunedViolaCString.push(cx)
//     console.log(`${index + 1}: ${cx}`)
//   })
//   return cxOfJustTunedViolaCString
// }

// let cxOfJustTunedViolaGString = []
// cxOfJustTunedViolaGString = calculateCxOfJustTunedViolaGString()
// function calculateCxOfJustTunedViolaGString() {
//   equalRatios.map((ratio, index) => {
//     let cx =
//       vectors.Viola[1].vectorX *
//         (ratio * twoCentPlus ** 2 + (1 - twoCentPlus ** 2)) +
//       vectors.Viola[1].originX
//     cxOfJustTunedViolaGString.push(cx)
//     console.log(`${index + 1}: ${cx}`)
//   })
//   return cxOfJustTunedViolaGString
// }

// let cxOfJustTunedViolaDString = []
// cxOfJustTunedViolaDString = calculateCxOfJustTunedViolaDString()
// function calculateCxOfJustTunedViolaDString() {
//   equalRatios.map((ratio, index) => {
//     let cx =
//       vectors.Viola[2].vectorX *
//         (ratio * twoCentPlus ** 1 + (1 - twoCentPlus ** 1)) +
//       vectors.Viola[2].originX
//     cxOfJustTunedViolaDString.push(cx)
//     console.log(`${index + 1}: ${cx}`)
//   })
//   return cxOfJustTunedViolaDString
// }

// let cxOfJustTunedViolaAString = []
// cxOfJustTunedViolaAString = calculateCxOfJustTunedViolaAString()
// function calculateCxOfJustTunedViolaAString() {
//   equalRatios.map((ratio, index) => {
//     let cx =
//       vectors.Viola[3].vectorX *
//         (ratio * twoCentPlus ** 0 + (1 - twoCentPlus ** 0)) +
//       vectors.Viola[3].originX
//     cxOfJustTunedViolaAString.push(cx)
//     console.log(`${index + 1}: ${cx}`)
//   })
//   return cxOfJustTunedViolaAString
// }

// let cxOfJustTunedCelloCString = []
// cxOfJustTunedCelloCString = calculateCxOfJustTunedCelloCString()
// function calculateCxOfJustTunedCelloCString() {
//   equalRatios.map((ratio, index) => {
//     let cx =
//       vectors.Cello[0].vectorX *
//         (ratio * twoCentPlus ** 3 + (1 - twoCentPlus ** 3)) +
//       vectors.Cello[0].originX
//     cxOfJustTunedCelloCString.push(cx)
//     console.log(`${index + 1}: ${cx}`)
//   })
//   return cxOfJustTunedCelloCString
// }

// let cxOfJustTunedCelloGString = []
// cxOfJustTunedCelloGString = calculateCxOfJustTunedCelloGString()
// function calculateCxOfJustTunedCelloGString() {
//   equalRatios.map((ratio, index) => {
//     let cx =
//       vectors.Cello[1].vectorX *
//         (ratio * twoCentPlus ** 2 + (1 - twoCentPlus ** 2)) +
//       vectors.Cello[1].originX
//     cxOfJustTunedCelloGString.push(cx)
//     console.log(`${index + 1}: ${cx}`)
//   })
//   return cxOfJustTunedCelloGString
// }

// let cxOfJustTunedCelloDString = []
// cxOfJustTunedCelloDString = calculateCxOfJustTunedCelloDString()
// function calculateCxOfJustTunedCelloDString() {
//   equalRatios.map((ratio, index) => {
//     let cx =
//       vectors.Cello[2].vectorX *
//         (ratio * twoCentPlus ** 1 + (1 - twoCentPlus ** 1)) +
//       vectors.Cello[2].originX
//     cxOfJustTunedCelloDString.push(cx)
//     console.log(`${index + 1}: ${cx}`)
//   })
//   return cxOfJustTunedCelloDString
// }

// let cxOfJustTunedCelloAString = []
// cxOfJustTunedCelloAString = calculateCxOfJustTunedCelloAString()
// function calculateCxOfJustTunedCelloAString() {
//   equalRatios.map((ratio, index) => {
//     let cx =
//       vectors.Cello[3].vectorX *
//         (ratio * twoCentPlus ** 0 + (1 - twoCentPlus ** 0)) +
//       vectors.Cello[3].originX
//     cxOfJustTunedCelloAString.push(cx)
//     console.log(`${index + 1}: ${cx}`)
//   })
//   return cxOfJustTunedCelloAString
// }

// let cxOfJustTunedBassEString = []
// cxOfJustTunedBassEString = calculateCxOfJustTunedBassEString()
// function calculateCxOfJustTunedBassEString() {
//   equalRatios.map((ratio, index) => {
//     let cx =
//       vectors.Bass[0].vectorX *
//         (ratio * twoCentMinus ** 1 + (1 - twoCentMinus ** 1)) +
//       vectors.Bass[0].originX
//     cxOfJustTunedBassEString.push(cx)
//     console.log(`${index + 1}: ${cx}`)
//   })
//   return cxOfJustTunedBassEString
// }

// let cxOfJustTunedBassAString = []
// cxOfJustTunedBassAString = calculateCxOfJustTunedBassAString()
// function calculateCxOfJustTunedBassAString() {
//   equalRatios.map((ratio, index) => {
//     let cx =
//       vectors.Bass[1].vectorX *
//         (ratio * twoCentPlus ** 0 + (1 - twoCentPlus ** 0)) +
//       vectors.Bass[1].originX
//     cxOfJustTunedBassAString.push(cx)
//     console.log(`${index + 1}: ${cx}`)
//   })
//   return cxOfJustTunedBassAString
// }

// let cxOfJustTunedBassDString = []
// cxOfJustTunedBassDString = calculateCxOfJustTunedBassDString()
// function calculateCxOfJustTunedBassDString() {
//   equalRatios.map((ratio, index) => {
//     let cx =
//       vectors.Bass[2].vectorX *
//         (ratio * twoCentPlus ** 1 + (1 - twoCentPlus ** 1)) +
//       vectors.Bass[2].originX
//     cxOfJustTunedBassDString.push(cx)
//     console.log(`${index + 1}: ${cx}`)
//   })
//   return cxOfJustTunedBassDString
// }

// let cxOfJustTunedBassGString = []
// cxOfJustTunedBassGString = calculateCxOfJustTunedBassGString()
// function calculateCxOfJustTunedBassGString() {
//   equalRatios.map((ratio, index) => {
//     let cx =
//       vectors.Bass[3].vectorX *
//         (ratio * twoCentPlus ** 2 + (1 - twoCentPlus ** 2)) +
//       vectors.Bass[3].originX
//     cxOfJustTunedBassGString.push(cx)
//     console.log(`${index + 1}: ${cx}`)
//   })
//   return cxOfJustTunedBassGString
// }

// let cxOfViolinAndViolaLowestString = []
// cxOfViolinAndViolaLowestString = calculateCxOfViolinAndViolaLowestString()
// function calculateCxOfViolinAndViolaLowestString() {
//   equalRatios.map(ratio => {
//     let cx = ratio * vectors.Violin[0].vectorX + vectors.Violin[0].originX
//     cxOfViolinAndViolaLowestString.push(cx)
//   })
//   return cxOfViolinAndViolaLowestString
// }
// console.log(cxOfViolinAndViolaLowestString)
