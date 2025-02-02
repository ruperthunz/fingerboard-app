export function drawCello(height, width) {
  const x = 600
  const y = 1200

  const bodyD = `M ${width / (x / 40)},${height / (y / 1200)} C ${
    width / (x / 110)
  },${height / (y / 1164)} ${width / (x / 134)},${height / (y / 892)} ${
    width / (x / 36)
  },${height / (y / 924)} L ${width / (x / 30)},${height / (y / 910)} C ${
    width / (x / 58)
  },${height / (y / 880)} ${width / (x / 28)},${height / (y / 820)} ${
    width / (x / 28)
  },${height / (y / 816)} C ${width / (x / 18)},${height / (y / 788)} ${
    width / (x / -18)
  },${height / (y / 684)} ${width / (x / 48)},${height / (y / 584)} C ${
    width / (x / 144)
  },${height / (y / 434)} ${width / (x / 456)},${height / (y / 434)} ${
    width / (x / 552)
  },${height / (y / 584)} C ${width / (x / 618)},${height / (y / 684)} ${
    width / (x / 582)
  },${height / (y / 788)} ${width / (x / 572)},${height / (y / 816)} C ${
    width / (x / 572)
  },${height / (y / 820)} ${width / (x / 542)},${height / (y / 880)} ${
    width / (x / 570)
  },${height / (y / 910)} L ${width / (x / 564)},${height / (y / 924)} C ${
    width / (x / 466)
  },${height / (y / 892)} ${width / (x / 490)},${height / (y / 1164)} ${
    width / (x / 560)
  },${height / (y / 1200)} H ${width / (x / 40)} z`
  const fingerboardPoints = `${width / (x / 272)},${height / (y / 16)} ${
    width / (x / 328)
  },${height / (y / 16)} ${width / (x / 358)},${height / (y / 990)} ${
    width / (x / 242)
  },${height / (y / 990)}`
  const nutX = `${width / (x / 262)}`
  const nutY = `${height / (y / -10)}`
  const nutRx = `${width / (x / 6)}`
  const nutRy = `${height / (y / 6)}`
  const nutWidth = `${width / (x / 76)}`
  const nutHeigth = `${height / (y / 26)}`
  const bridgeX1 = `${width / (x / 242)}`
  const bridgeY1 = `${height / (y / 1184)}`
  const bridgeX2 = `${width / (x / 358)}`
  const bridgeY2 = `${height / (y / 1184)}`
  const bridgeStrokWidth = `${width / (x / 8)}`
  const fHoleD1 = `M ${width / (x / 146)},${height / (y / 1200)} C ${
    width / (x / 146)
  },${height / (y / 1164)} ${width / (x / 152)},${height / (y / 1020)} ${
    width / (x / 210)
  },${height / (y / 1048)} C ${width / (x / 226)},${height / (y / 1056)} ${
    width / (x / 228)
  },${height / (y / 1080)} ${width / (x / 212)},${height / (y / 1080)} C ${
    width / (x / 198)
  },${height / (y / 1080)} ${width / (x / 200)},${height / (y / 1060)} ${
    width / (x / 210)
  },${height / (y / 1058)} L ${width / (x / 194)},${height / (y / 1048)} C ${
    width / (x / 166)
  },${height / (y / 1064)} ${width / (x / 170)},${height / (y / 1160)} ${
    width / (x / 166)
  },${height / (y / 1200)} z`
  const fHoleD2 = `M ${width / (x / 454)},${height / (y / 1200)} C ${
    width / (x / 454)
  },${height / (y / 1164)} ${width / (x / 448)},${height / (y / 1020)} ${
    width / (x / 390)
  },${height / (y / 1048)} C ${width / (x / 374)},${height / (y / 1056)} ${
    width / (x / 372)
  },${height / (y / 1080)} ${width / (x / 388)},${height / (y / 1080)} C ${
    width / (x / 402)
  },${height / (y / 1080)} ${width / (x / 400)},${height / (y / 1060)} ${
    width / (x / 390)
  },${height / (y / 1058)} L ${width / (x / 406)},${height / (y / 1048)} C ${
    width / (x / 434)
  },${height / (y / 1064)} ${width / (x / 430)},${height / (y / 1160)} ${
    width / (x / 434)
  },${height / (y / 1200)} z`
  const stringYNut = `${height / (y / 16)}`
  const stringYBridge = `${height / (y / 1180)}`
  const stringEnds = `${height / (y / 1200)}`
  const stringStrokeWidth = `${width / (x / 2)}`
  const string1UpperX = `${width / (x / 282)}`
  const string1LowerX = `${width / (x / 258)}`
  const string2UpperX = `${width / (x / 294)}`
  const string2LowerX = `${width / (x / 286)}`
  const string3UpperX = `${width / (x / 306)}`
  const string3LowerX = `${width / (x / 314)}`
  const string4UpperX = `${width / (x / 318)}`
  const string4LowerX = `${width / (x / 342)}`

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
