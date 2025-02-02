export function drawBass(height, width) {
  const x = 600
  const y = 1200

  const bodyD = `M ${width / (x / 78)},${height / (y / 1200)} 
        C ${width / (x / 119)},${height / (y / 1170)} ${width / (x / 148)},${
    height / (y / 970)
  } 
        ${width / (x / 47)},${height / (y / 982)} 
        L ${width / (x / 44)},${height / (y / 970)} 
        C ${width / (x / 61)},${height / (y / 942)} ${width / (x / 50)},${
    height / (y / 920)
  } 
        ${width / (x / 45)},${height / (y / 905)} 
        C ${width / (x / -18)},${height / (y / 710)} ${width / (x / 156)},${
    height / (y / 642)
  } 
        ${width / (x / 180)},${height / (y / 632)} 
        C ${width / (x / 248)},${height / (y / 606)} ${width / (x / 250)},${
    height / (y / 582)
  } 
        ${width / (x / 253)},${height / (y / 524)}
        C ${width / (x / 252)},${height / (y / 500)} ${width / (x / 260)},${
    height / (y / 498)
  } 
        ${width / (x / 262)},${height / (y / 498)}
        L ${width / (x / 338)},${height / (y / 498)} 

        C ${width / (x / 340)},${height / (y / 498)} ${width / (x / 348)},${
    height / (y / 500)
  } 
        ${width / (x / 347)},${height / (y / 524)}
        C ${width / (x / 350)},${height / (y / 582)} ${width / (x / 352)},${
    height / (y / 606)
  } 
        ${width / (x / 420)},${height / (y / 632)}
        C ${width / (x / 444)},${height / (y / 642)} ${width / (x / 618)},${
    height / (y / 710)
  } 
        ${width / (x / 555)},${height / (y / 905)}
        C ${width / (x / 550)},${height / (y / 920)} ${width / (x / 539)},${
    height / (y / 942)
  } 
        ${width / (x / 556)},${height / (y / 970)}
        L ${width / (x / 553)},${height / (y / 982)}
        C ${width / (x / 452)},${height / (y / 970)} ${width / (x / 480)},${
    height / (y / 1170)
  } 
        ${width / (x / 522)},${height / (y / 1200)}
        H ${width / (x / 40)} z`
  const fingerboardPoints = `${width / (x / 276)},${height / (y / 16)} ${
    width / (x / 324)
  },${height / (y / 16)} ${width / (x / 355)},${height / (y / 1024)} ${
    width / (x / 245)
  },${height / (y / 1024)}`
  const nutX = `${width / (x / 260)}`
  const nutY = `${height / (y / -10)}`
  const nutRx = `${width / (x / 6)}`
  const nutRy = `${height / (y / 6)}`
  const nutWidth = `${width / (x / 80)}`
  const nutHeigth = `${height / (y / 26)}`
  const bridgeX1 = `${width / (x / 238)}`
  const bridgeY1 = `${height / (y / 1184)}`
  const bridgeX2 = `${width / (x / 362)}`
  const bridgeY2 = `${height / (y / 1184)}`
  const bridgeStrokWidth = `${width / (x / 8)}`
  const fHoleD1 = `M ${width / (x / 148)},${height / (y / 1200)} 
        C ${width / (x / 164)},${height / (y / 1210)} ${width / (x / 150)},${
    height / (y / 1074)
  } 
        ${width / (x / 200)},${height / (y / 1084)} 
        C ${width / (x / 220)},${height / (y / 1088)} ${width / (x / 217)},${
    height / (y / 1112)
  } 
        ${width / (x / 204)},${height / (y / 1112)} 
        C ${width / (x / 194)},${height / (y / 1112)} ${width / (x / 193)},${
    height / (y / 1100)
  } 
        ${width / (x / 202)},${height / (y / 1094)} 
        L ${width / (x / 194)},${height / (y / 1087)} 
        C ${width / (x / 178)},${height / (y / 1098)} ${width / (x / 182)},${
    height / (y / 1190)
  } 
        ${width / (x / 174)},${height / (y / 1200)} z`
  const fHoleD2 = `M ${width / (x / 452)},${height / (y / 1200)} 
        C ${width / (x / 436)},${height / (y / 1210)} ${width / (x / 450)},${
    height / (y / 1074)
  } 
        ${width / (x / 400)},${height / (y / 1084)} 
        C ${width / (x / 380)},${height / (y / 1088)} ${width / (x / 383)},${
    height / (y / 1112)
  } 
        ${width / (x / 396)},${height / (y / 1112)} 
        C ${width / (x / 406)},${height / (y / 1112)} ${width / (x / 407)},${
    height / (y / 1100)
  } 
        ${width / (x / 398)},${height / (y / 1094)} 
        L ${width / (x / 406)},${height / (y / 1087)} 
        C ${width / (x / 422)},${height / (y / 1098)} ${width / (x / 418)},${
    height / (y / 1190)
  } 
        ${width / (x / 426)},${height / (y / 1200)} z`
  const stringYNut = `${height / (y / 16)}`
  const stringYBridge = `${height / (y / 1180)}`
  const stringEnds = `${height / (y / 1200)}`
  const stringStrokeWidth = `${width / (x / 2)}`
  const string1UpperX = `${width / (x / 282)}`
  const string1LowerX = `${width / (x / 252)}`
  const string2UpperX = `${width / (x / 294)}`
  const string2LowerX = `${width / (x / 284)}`
  const string3UpperX = `${width / (x / 306)}`
  const string3LowerX = `${width / (x / 316)}`
  const string4UpperX = `${width / (x / 318)}`
  const string4LowerX = `${width / (x / 348)}`

  return [
    bodyD,
    fingerboardPoints,
    nutX,
    nutY,
    nutRx,
    nutRy,
    nutWidth,
    nutHeigth,
    bridgeX1,
    bridgeY1,
    bridgeX2,
    bridgeY2,
    bridgeStrokWidth,
    fHoleD1,
    fHoleD2,
    stringYNut,
    stringYBridge,
    stringEnds,
    stringStrokeWidth,
    string1UpperX,
    string1LowerX,
    string2UpperX,
    string2LowerX,
    string3UpperX,
    string3LowerX,
    string4UpperX,
    string4LowerX
  ]
}
