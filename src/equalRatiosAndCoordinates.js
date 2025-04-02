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
