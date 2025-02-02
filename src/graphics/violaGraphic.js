export function drawViola(height, width) {
  const x = 600
  const y = 1200

  const bodyD = `M ${width / (x / 46)},${height / (y / 1200)} 
        C ${width / (x / 110)},${height / (y / 1164)} ${width / (x / 134)},${
    height / (y / 880)
  } 
        ${width / (x / 20)},${height / (y / 928)} 
        L ${width / (x / 10)},${height / (y / 902)} 
        C ${width / (x / 32)},${height / (y / 866)} ${width / (x / 24)},${
    height / (y / 820)
  } 
        ${width / (x / 20)},${height / (y / 812)} 
        C ${width / (x / 14)},${height / (y / 788)} ${width / (x / -26)},${
    height / (y / 660)
  } 
        ${width / (x / 42)},${height / (y / 566)}

        C ${width / (x / 128)},${height / (y / 426)} ${width / (x / 472)},${
    height / (y / 426)
  } 
        ${width / (x / 558)},${height / (y / 566)} 
        C ${width / (x / 626)},${height / (y / 660)} ${width / (x / 586)},${
    height / (y / 788)
  } 
        ${width / (x / 580)},${height / (y / 812)} 
        C ${width / (x / 576)},${height / (y / 820)} ${width / (x / 568)},${
    height / (y / 866)
  } 
        ${width / (x / 590)},${height / (y / 902)} 
        L ${width / (x / 580)},${height / (y / 928)} 
        C ${width / (x / 466)},${height / (y / 880)} ${width / (x / 490)},${
    height / (y / 1164)
  } 
        ${width / (x / 554)},${height / (y / 1200)} 
        H ${width / (x / 46)} z`
  const fingerboardPoints = `${width / (x / 260)},${height / (y / 16)} ${
    width / (x / 340)
  },${height / (y / 16)} ${width / (x / 374)},${height / (y / 962)} ${
    width / (x / 226)
  },${height / (y / 962)}`
  const nutX = `${width / (x / 246)}`
  const nutY = `${height / (y / -10)}`
  const nutRx = `${width / (x / 6)}`
  const nutRy = `${height / (y / 6)}`
  const nutWidth = `${width / (x / 108)}`
  const nutHeigth = `${height / (y / 26)}`
  const bridgeX1 = `${width / (x / 214)}`
  const bridgeY1 = `${height / (y / 1184)}`
  const bridgeX2 = `${width / (x / 386)}`
  const bridgeY2 = `${height / (y / 1184)}`
  const bridgeStrokWidth = `${width / (x / 6)}`
  const fHoleD1 = `M ${width / (x / 138)},${height / (y / 1200)} 
        C ${width / (x / 140)},${height / (y / 1164)} ${width / (x / 136)},${
    height / (y / 1028)
  } 
        ${width / (x / 200)},${height / (y / 1048)} 
        C ${width / (x / 226)},${height / (y / 1056)} ${width / (x / 226)},${
    height / (y / 1086)
  } 
        ${width / (x / 206)},${height / (y / 1084)} 
        C ${width / (x / 202)},${height / (y / 1086)} ${width / (x / 188)},${
    height / (y / 1076)
  } 
        ${width / (x / 200)},${height / (y / 1060)} 
        L ${width / (x / 184)},${height / (y / 1050)} 
        C ${width / (x / 152)},${height / (y / 1064)} ${width / (x / 168)},${
    height / (y / 1160)
  } 
        ${width / (x / 160)},${height / (y / 1200)} z`
  const fHoleD2 = `M ${width / (x / 462)},${height / (y / 1200)} 
        C ${width / (x / 460)},${height / (y / 1164)} ${width / (x / 464)},${
    height / (y / 1028)
  } 
        ${width / (x / 400)},${height / (y / 1048)} 
        C ${width / (x / 374)},${height / (y / 1056)} ${width / (x / 374)},${
    height / (y / 1086)
  } 
        ${width / (x / 394)},${height / (y / 1084)} 
        C ${width / (x / 398)},${height / (y / 1086)} ${width / (x / 412)},${
    height / (y / 1076)
  } 
        ${width / (x / 400)},${height / (y / 1060)} 
        L ${width / (x / 416)},${height / (y / 1050)} 
        C ${width / (x / 448)},${height / (y / 1064)} ${width / (x / 432)},${
    height / (y / 1160)
  } 
        ${width / (x / 440)},${height / (y / 1200)} z`
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
