export function drawViolin(height, width) {
  const x = 600
  const y = 1200

  const bodyD = `M ${width / (x / 60)},${height / (y / 1200)} 
      C ${width / (x / 120)},${height / (y / 1170)} ${width / (x / 142)},${
    height / (y / 872)
  } 
      ${width / (x / 32)},${height / (y / 942)} 
      L ${width / (x / 20)},${height / (y / 914)} 
      C ${width / (x / 58)},${height / (y / 880)} ${width / (x / 18)},${
    height / (y / 820)
  } 
      ${width / (x / 20)},${height / (y / 814)} 
      C ${width / (x / -56)},${height / (y / 584)} ${width / (x / 144)},${
    height / (y / 448)
  } 
      ${width / (x / 300)},${height / (y / 488)} 

      C ${width / (x / 456)},${height / (y / 448)} ${width / (x / 656)},${
    height / (y / 584)
  } 
      ${width / (x / 580)},${height / (y / 814)} 
      C ${width / (x / 582)},${height / (y / 820)} ${width / (x / 542)},${
    height / (y / 884)
  } 
      ${width / (x / 580)},${height / (y / 914)} 
      L ${width / (x / 568)},${height / (y / 942)} 
      C ${width / (x / 458)},${height / (y / 872)} ${width / (x / 480)},${
    height / (y / 1170)
  } 
      ${width / (x / 540)},${height / (y / 1200)} 
      H ${width / (x / 40)} z`
  const fingerboardPoints = `${width / (x / 260)},${height / (y / 16)} ${
    width / (x / 340)
  },${height / (y / 16)} ${width / (x / 376)},${height / (y / 974)} ${
    width / (x / 224)
  },${height / (y / 974)}`
  const nutX = `${width / (x / 256)}`
  const nutY = `${height / (y / -10)}`
  const nutRx = `${width / (x / 6)}`
  const nutRy = `${height / (y / 6)}`
  const nutWidth = `${width / (x / 88)}`
  const nutHeigth = `${height / (y / 26)}`
  const bridgeX1 = `${width / (x / 214)}`
  const bridgeY1 = `${height / (y / 1184)}`
  const bridgeX2 = `${width / (x / 386)}`
  const bridgeY2 = `${height / (y / 1184)}`
  const bridgeStrokWidth = `${width / (x / 6)}`
  const fHoleD1 = `M ${width / (x / 150)},${height / (y / 1200)} 
      C ${width / (x / 152)},${height / (y / 1164)} ${width / (x / 152)},${
    height / (y / 1020)
  } 
      ${width / (x / 212)},${height / (y / 1042)} 
      C ${width / (x / 246)},${height / (y / 1056)} ${width / (x / 230)},${
    height / (y / 1082)
  } 
      ${width / (x / 228)},${height / (y / 1081)} 
      C ${width / (x / 210)},${height / (y / 1090)} ${width / (x / 200)},${
    height / (y / 1070)
  } 
      ${width / (x / 218)},${height / (y / 1056)} 
      L ${width / (x / 202)},${height / (y / 1044)} 
      C ${width / (x / 164)},${height / (y / 1060)} ${width / (x / 186)},${
    height / (y / 1160)
  } 
      ${width / (x / 172)},${height / (y / 1200)} z`
  const fHoleD2 = `M ${width / (x / 450)},${height / (y / 1200)} 
      C ${width / (x / 448)},${height / (y / 1164)} ${width / (x / 448)},${
    height / (y / 1020)
  } 
      ${width / (x / 388)},${height / (y / 1042)} 
      C ${width / (x / 354)},${height / (y / 1056)} ${width / (x / 370)},${
    height / (y / 1082)
  } 
      ${width / (x / 372)},${height / (y / 1081)} 
      C ${width / (x / 390)},${height / (y / 1090)} ${width / (x / 400)},${
    height / (y / 1070)
  } 
      ${width / (x / 382)},${height / (y / 1056)} 
      L ${width / (x / 398)},${height / (y / 1044)} 
      C ${width / (x / 436)},${height / (y / 1060)} ${width / (x / 414)},${
    height / (y / 1160)
  } 
      ${width / (x / 428)},${height / (y / 1200)} z`
  const stringYNut = `${height / (y / 16)}`
  const stringYBridge = `${height / (y / 1180)}`
  const stringEnds = `${height / (y / 1200)}`
  const stringStrokeWidth = `${width / (x / 2)}`
  const string1UpperX = `${width / (x / 270)}`
  const string1LowerX = `${width / (x / 240)}`
  const string2UpperX = `${width / (x / 290)}`
  const string2LowerX = `${width / (x / 280)}`
  const string3UpperX = `${width / (x / 310)}`
  const string3LowerX = `${width / (x / 320)}`
  const string4UpperX = `${width / (x / 330)}`
  const string4LowerX = `${width / (x / 360)}`

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
