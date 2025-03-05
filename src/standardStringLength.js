export const standardStringLength = {
  Violin: {
    full: { mm: 325, inch: 12.8 },
    three4: { mm: 305, inch: 12.01 },
    half: { mm: 283, inch: 11.14 },
    quarter: { mm: 260, inch: 10.24 },
    eighth: { mm: 240, inch: 9.45 }
  },
  Viola: {
    full: { mm: 370, inch: 14.57 },
    three4: { mm: 350, inch: 13.78 },
    half: { mm: 330, inch: 12.99 },
    quarter: { mm: 300, inch: 11.81 },
    eighth: { mm: 270, inch: 10.63 }
  },
  Cello: {
    full: { mm: 690, inch: 27.17 },
    three4: { mm: 650, inch: 25.59 },
    half: { mm: 600, inch: 23.62 },
    quarter: { mm: 545, inch: 21.46 },
    eighth: { mm: 480, inch: 18.9 }
  },
  Bass: {
    full: { mm: 1100, inch: 43.31 },
    three4: { mm: 1040, inch: 40.94 },
    half: { mm: 965, inch: 37.99 },
    quarter: { mm: 905, inch: 35.63 },
    eighth: { mm: 800, inch: 31.5 }
  }
}

export const stringLengthBoundaries = {
  Violin: {
    mm: [
      {
        upperLimit: Infinity,
        lowerLimit:
          (standardStringLength.Violin.full.mm +
            standardStringLength.Violin.three4.mm) /
          2,
        fraction: "full"
      },
      {
        upperLimit:
          (standardStringLength.Violin.full.mm +
            standardStringLength.Violin.three4.mm) /
          2,
        lowerLimit:
          (standardStringLength.Violin.three4.mm +
            standardStringLength.Violin.half.mm) /
          2,
        fraction: "three4"
      },
      {
        upperLimit:
          (standardStringLength.Violin.three4.mm +
            standardStringLength.Violin.half.mm) /
          2,
        lowerLimit:
          (standardStringLength.Violin.half.mm +
            standardStringLength.Violin.quarter.mm) /
          2,
        fraction: "half"
      },
      {
        upperLimit:
          (standardStringLength.Violin.half.mm +
            standardStringLength.Violin.quarter.mm) /
          2,
        lowerLimit:
          (standardStringLength.Violin.quarter.mm +
            standardStringLength.Violin.eighth.mm) /
          2,
        fraction: "quarter"
      },
      {
        upperLimit:
          (standardStringLength.Violin.quarter.mm +
            standardStringLength.Violin.eighth.mm) /
          2,
        lowerLimit: 0,
        fraction: "eighth"
      }
    ],
    inch: [
      {
        upperLimit: Infinity,
        lowerLimit:
          (standardStringLength.Violin.full.inch * 100 +
            standardStringLength.Violin.three4.inch * 100) /
          2 /
          100,
        fraction: "full"
      },
      {
        upperLimit:
          (standardStringLength.Violin.full.inch * 100 +
            standardStringLength.Violin.three4.inch * 100) /
          2 /
          100,
        lowerLimit:
          (standardStringLength.Violin.three4.inch * 100 +
            standardStringLength.Violin.half.inch * 100) /
          2 /
          100,
        fraction: "three4"
      },
      {
        upperLimit:
          (standardStringLength.Violin.three4.inch * 100 +
            standardStringLength.Violin.half.inch * 100) /
          2 /
          100,
        lowerLimit:
          (standardStringLength.Violin.half.inch * 100 +
            standardStringLength.Violin.quarter.inch * 100) /
          2 /
          100,
        fraction: "half"
      },
      {
        upperLimit:
          (standardStringLength.Violin.half.inch * 100 +
            standardStringLength.Violin.quarter.inch * 100) /
          2 /
          100,
        lowerLimit:
          (standardStringLength.Violin.quarter.inch * 100 +
            standardStringLength.Violin.eighth.inch * 100) /
          2 /
          100,
        fraction: "quarter"
      },
      {
        upperLimit:
          (standardStringLength.Violin.quarter.inch * 100 +
            standardStringLength.Violin.eighth.inch * 100) /
          2 /
          100,
        lowerLimit: 0,
        fraction: "eighth"
      }
    ]
  },
  Viola: {
    mm: [
      {
        upperLimit: Infinity,
        lowerLimit:
          (standardStringLength.Viola.full.mm +
            standardStringLength.Viola.three4.mm) /
          2,
        fraction: "full"
      },
      {
        upperLimit:
          (standardStringLength.Viola.full.mm +
            standardStringLength.Viola.three4.mm) /
          2,
        lowerLimit:
          (standardStringLength.Viola.three4.mm +
            standardStringLength.Viola.half.mm) /
          2,
        fraction: "three4"
      },
      {
        upperLimit:
          (standardStringLength.Viola.three4.mm +
            standardStringLength.Viola.half.mm) /
          2,
        lowerLimit:
          (standardStringLength.Viola.half.mm +
            standardStringLength.Viola.quarter.mm) /
          2,
        fraction: "half"
      },
      {
        upperLimit:
          (standardStringLength.Viola.half.mm +
            standardStringLength.Viola.quarter.mm) /
          2,
        lowerLimit:
          (standardStringLength.Viola.quarter.mm +
            standardStringLength.Viola.eighth.mm) /
          2,
        fraction: "quarter"
      },
      {
        upperLimit:
          (standardStringLength.Viola.quarter.mm +
            standardStringLength.Viola.eighth.mm) /
          2,
        lowerLimit: 0,
        fraction: "eighth"
      }
    ],
    inch: [
      {
        upperLimit: Infinity,
        lowerLimit:
          (standardStringLength.Viola.full.inch * 100 +
            standardStringLength.Viola.three4.inch * 100) /
          2 /
          100,
        fraction: "full"
      },
      {
        upperLimit:
          (standardStringLength.Viola.full.inch * 100 +
            standardStringLength.Viola.three4.inch * 100) /
          2 /
          100,
        lowerLimit:
          (standardStringLength.Viola.three4.inch * 100 +
            standardStringLength.Viola.half.inch * 100) /
          2 /
          100,
        fraction: "three4"
      },
      {
        upperLimit:
          (standardStringLength.Viola.three4.inch * 100 +
            standardStringLength.Viola.half.inch * 100) /
          2 /
          100,
        lowerLimit:
          (standardStringLength.Viola.half.inch * 100 +
            standardStringLength.Viola.quarter.inch * 100) /
          2 /
          100,
        fraction: "half"
      },
      {
        upperLimit:
          (standardStringLength.Viola.half.inch * 100 +
            standardStringLength.Viola.quarter.inch * 100) /
          2 /
          100,
        lowerLimit:
          (standardStringLength.Viola.quarter.inch * 100 +
            standardStringLength.Viola.eighth.inch * 100) /
          2 /
          100,
        fraction: "quarter"
      },
      {
        upperLimit:
          (standardStringLength.Viola.quarter.inch * 100 +
            standardStringLength.Viola.eighth.inch * 100) /
          2 /
          100,
        lowerLimit: 0,
        fraction: "eighth"
      }
    ]
  },
  Cello: {
    mm: [
      {
        upperLimit: Infinity,
        lowerLimit:
          (standardStringLength.Cello.full.mm +
            standardStringLength.Cello.three4.mm) /
          2,
        fraction: "full"
      },
      {
        upperLimit:
          (standardStringLength.Cello.full.mm +
            standardStringLength.Cello.three4.mm) /
          2,
        lowerLimit:
          (standardStringLength.Cello.three4.mm +
            standardStringLength.Cello.half.mm) /
          2,
        fraction: "three4"
      },
      {
        upperLimit:
          (standardStringLength.Cello.three4.mm +
            standardStringLength.Cello.half.mm) /
          2,
        lowerLimit:
          (standardStringLength.Cello.half.mm +
            standardStringLength.Cello.quarter.mm) /
          2,
        fraction: "half"
      },
      {
        upperLimit:
          (standardStringLength.Cello.half.mm +
            standardStringLength.Cello.quarter.mm) /
          2,
        lowerLimit:
          (standardStringLength.Cello.quarter.mm +
            standardStringLength.Cello.eighth.mm) /
          2,
        fraction: "quarter"
      },
      {
        upperLimit:
          (standardStringLength.Cello.quarter.mm +
            standardStringLength.Cello.eighth.mm) /
          2,
        lowerLimit: 0,
        fraction: "eighth"
      }
    ],
    inch: [
      {
        upperLimit: Infinity,
        lowerLimit:
          (standardStringLength.Cello.full.inch * 100 +
            standardStringLength.Cello.three4.inch * 100) /
          2 /
          100,
        fraction: "full"
      },
      {
        upperLimit:
          (standardStringLength.Cello.full.inch * 100 +
            standardStringLength.Cello.three4.inch * 100) /
          2 /
          100,
        lowerLimit:
          (standardStringLength.Cello.three4.inch * 100 +
            standardStringLength.Cello.half.inch * 100) /
          2 /
          100,
        fraction: "three4"
      },
      {
        upperLimit:
          (standardStringLength.Cello.three4.inch * 100 +
            standardStringLength.Cello.half.inch * 100) /
          2 /
          100,
        lowerLimit:
          (standardStringLength.Cello.half.inch * 100 +
            standardStringLength.Cello.quarter.inch * 100) /
          2 /
          100,
        fraction: "half"
      },
      {
        upperLimit:
          (standardStringLength.Cello.half.inch * 100 +
            standardStringLength.Cello.quarter.inch * 100) /
          2 /
          100,
        lowerLimit:
          (standardStringLength.Cello.quarter.inch * 100 +
            standardStringLength.Cello.eighth.inch * 100) /
          2 /
          100,
        fraction: "quarter"
      },
      {
        upperLimit:
          (standardStringLength.Cello.quarter.inch * 100 +
            standardStringLength.Cello.eighth.inch * 100) /
          2 /
          100,
        lowerLimit: 0,
        fraction: "eighth"
      }
    ]
  },
  Bass: {
    mm: [
      {
        upperLimit: Infinity,
        lowerLimit:
          (standardStringLength.Bass.full.mm +
            standardStringLength.Bass.three4.mm) /
          2,
        fraction: "full"
      },
      {
        upperLimit:
          (standardStringLength.Bass.full.mm +
            standardStringLength.Bass.three4.mm) /
          2,
        lowerLimit:
          (standardStringLength.Bass.three4.mm +
            standardStringLength.Bass.half.mm) /
          2,
        fraction: "three4"
      },
      {
        upperLimit:
          (standardStringLength.Bass.three4.mm +
            standardStringLength.Bass.half.mm) /
          2,
        lowerLimit:
          (standardStringLength.Bass.half.mm +
            standardStringLength.Bass.quarter.mm) /
          2,
        fraction: "half"
      },
      {
        upperLimit:
          (standardStringLength.Bass.half.mm +
            standardStringLength.Bass.quarter.mm) /
          2,
        lowerLimit:
          (standardStringLength.Bass.quarter.mm +
            standardStringLength.Bass.eighth.mm) /
          2,
        fraction: "quarter"
      },
      {
        upperLimit:
          (standardStringLength.Bass.quarter.mm +
            standardStringLength.Bass.eighth.mm) /
          2,
        lowerLimit: 0,
        fraction: "eighth"
      }
    ],
    inch: [
      {
        upperLimit: Infinity,
        lowerLimit:
          (standardStringLength.Bass.full.inch * 100 +
            standardStringLength.Bass.three4.inch * 100) /
          2 /
          100,
        fraction: "full"
      },
      {
        upperLimit:
          (standardStringLength.Bass.full.inch * 100 +
            standardStringLength.Bass.three4.inch * 100) /
          2 /
          100,
        lowerLimit:
          (standardStringLength.Bass.three4.inch * 100 +
            standardStringLength.Bass.half.inch * 100) /
          2 /
          100,
        fraction: "three4"
      },
      {
        upperLimit:
          (standardStringLength.Bass.three4.inch * 100 +
            standardStringLength.Bass.half.inch * 100) /
          2 /
          100,
        lowerLimit:
          (standardStringLength.Bass.half.inch * 100 +
            standardStringLength.Bass.quarter.inch * 100) /
          2 /
          100,
        fraction: "half"
      },
      {
        upperLimit:
          (standardStringLength.Bass.half.inch * 100 +
            standardStringLength.Bass.quarter.inch * 100) /
          2 /
          100,
        lowerLimit:
          (standardStringLength.Bass.quarter.inch * 100 +
            standardStringLength.Bass.eighth.inch * 100) /
          2 /
          100,
        fraction: "quarter"
      },
      {
        upperLimit:
          (standardStringLength.Bass.quarter.inch * 100 +
            standardStringLength.Bass.eighth.inch * 100) /
          2 /
          100,
        lowerLimit: 0,
        fraction: "eighth"
      }
    ]
  }
}

export const stringLengthAreas = {
  Violin: {
    full: {
      mm: {
        upperLimit: Infinity,
        lowerLimit:
          (standardStringLength.Violin.full.mm +
            standardStringLength.Violin.three4.mm) /
          2
      },
      inch: {
        upperLimit: Infinity,
        lowerLimit:
          (standardStringLength.Violin.full.inch * 100 +
            standardStringLength.Violin.three4.inch * 100) /
          2 /
          100
      }
    },
    three4: {
      mm: {
        upperLimit:
          (standardStringLength.Violin.full.mm +
            standardStringLength.Violin.three4.mm) /
          2,
        lowerLimit:
          (standardStringLength.Violin.three4.mm +
            standardStringLength.Violin.half.mm) /
          2
      },
      inch: {
        upperLimit:
          (standardStringLength.Violin.full.inch * 100 +
            standardStringLength.Violin.three4.inch * 100) /
          2 /
          100,
        lowerLimit:
          (standardStringLength.Violin.three4.inch * 100 +
            standardStringLength.Violin.half.inch * 100) /
          2 /
          100
      }
    },
    half: {
      mm: {
        upperLimit:
          (standardStringLength.Violin.three4.mm +
            standardStringLength.Violin.half.mm) /
          2,
        lowerLimit:
          (standardStringLength.Violin.half.mm +
            standardStringLength.Violin.quarter.mm) /
          2
      },
      inch: {
        upperLimit:
          (standardStringLength.Violin.three4.inch * 100 +
            standardStringLength.Violin.half.inch * 100) /
          2 /
          100,
        lowerLimit:
          (standardStringLength.Violin.half.inch * 100 +
            standardStringLength.Violin.quarter.inch * 100) /
          2 /
          100
      }
    },
    quarter: {
      mm: {
        upperLimit:
          (standardStringLength.Violin.half.mm +
            standardStringLength.Violin.quarter.mm) /
          2,
        lowerLimit:
          (standardStringLength.Violin.quarter.mm +
            standardStringLength.Violin.eighth.mm) /
          2
      },
      inch: {
        upperLimit:
          (standardStringLength.Violin.half.inch * 100 +
            standardStringLength.Violin.quarter.inch * 100) /
          2 /
          100,
        lowerLimit:
          (standardStringLength.Violin.quarter.inch * 100 +
            standardStringLength.Violin.eighth.inch * 100) /
          2 /
          100
      }
    },
    eighth: {
      mm: {
        upperLimit:
          (standardStringLength.Violin.quarter.mm +
            standardStringLength.Violin.eighth.mm) /
          2,
        lowerLimit: 0
      },
      inch: {
        upperLimit:
          (standardStringLength.Violin.quarter.inch * 100 +
            standardStringLength.Violin.eighth.inch * 100) /
          2 /
          100,
        lowerLimit: 0
      }
    }
  },
  Viola: {
    full: {
      mm: {
        upperLimit: Infinity,
        lowerLimit:
          (standardStringLength.Viola.full.mm +
            standardStringLength.Viola.three4.mm) /
          2
      },
      inch: {
        upperLimit: Infinity,
        lowerLimit:
          (standardStringLength.Viola.full.inch * 100 +
            standardStringLength.Viola.three4.inch * 100) /
          2 /
          100
      }
    },
    three4: {
      mm: {
        upperLimit:
          (standardStringLength.Viola.full.mm +
            standardStringLength.Viola.three4.mm) /
          2,
        lowerLimit:
          (standardStringLength.Viola.three4.mm +
            standardStringLength.Viola.half.mm) /
          2
      },
      inch: {
        upperLimit:
          (standardStringLength.Viola.full.inch * 100 +
            standardStringLength.Viola.three4.inch * 100) /
          2 /
          100,
        lowerLimit:
          (standardStringLength.Viola.three4.inch * 100 +
            standardStringLength.Viola.half.inch * 100) /
          2 /
          100
      }
    },
    half: {
      mm: {
        upperLimit:
          (standardStringLength.Viola.three4.mm +
            standardStringLength.Viola.half.mm) /
          2,
        lowerLimit:
          (standardStringLength.Viola.half.mm +
            standardStringLength.Viola.quarter.mm) /
          2
      },
      inch: {
        upperLimit:
          (standardStringLength.Viola.three4.inch * 100 +
            standardStringLength.Viola.half.inch * 100) /
          2 /
          100,
        lowerLimit:
          (standardStringLength.Viola.half.inch * 100 +
            standardStringLength.Viola.quarter.inch * 100) /
          2 /
          100
      }
    },
    quarter: {
      mm: {
        upperLimit:
          (standardStringLength.Viola.half.mm +
            standardStringLength.Viola.quarter.mm) /
          2,
        lowerLimit:
          (standardStringLength.Viola.quarter.mm +
            standardStringLength.Viola.eighth.mm) /
          2
      },
      inch: {
        upperLimit:
          (standardStringLength.Viola.half.inch * 100 +
            standardStringLength.Viola.quarter.inch * 100) /
          2 /
          100,
        lowerLimit:
          (standardStringLength.Viola.quarter.inch * 100 +
            standardStringLength.Viola.eighth.inch * 100) /
          2 /
          100
      }
    },
    eighth: {
      mm: {
        upperLimit:
          (standardStringLength.Viola.quarter.mm +
            standardStringLength.Viola.eighth.mm) /
          2,
        lowerLimit: standardStringLength.Viola.eighth.mm
      },
      inch: {
        upperLimit:
          (standardStringLength.Viola.quarter.inch * 100 +
            standardStringLength.Viola.eighth.inch * 100) /
          2 /
          100,
        lowerLimit: 0
      }
    }
  },
  Cello: {
    full: {
      mm: {
        upperLimit: Infinity,
        lowerLimit:
          (standardStringLength.Cello.full.mm +
            standardStringLength.Cello.three4.mm) /
          2
      },
      inch: {
        upperLimit: Infinity,
        lowerLimit:
          (standardStringLength.Cello.full.inch * 100 +
            standardStringLength.Cello.three4.inch * 100) /
          2 /
          100
      }
    },
    three4: {
      mm: {
        upperLimit:
          (standardStringLength.Cello.full.mm +
            standardStringLength.Cello.three4.mm) /
          2,
        lowerLimit:
          (standardStringLength.Cello.three4.mm +
            standardStringLength.Cello.half.mm) /
          2
      },
      inch: {
        upperLimit:
          (standardStringLength.Cello.full.inch * 100 +
            standardStringLength.Cello.three4.inch * 100) /
          2 /
          100,
        lowerLimit:
          (standardStringLength.Cello.three4.inch * 100 +
            standardStringLength.Cello.half.inch * 100) /
          2 /
          100
      }
    },
    half: {
      mm: {
        upperLimit:
          (standardStringLength.Cello.three4.mm +
            standardStringLength.Cello.half.mm) /
          2,
        lowerLimit:
          (standardStringLength.Cello.half.mm +
            standardStringLength.Cello.quarter.mm) /
          2
      },
      inch: {
        upperLimit:
          (standardStringLength.Cello.three4.inch * 100 +
            standardStringLength.Cello.half.inch * 100) /
          2 /
          100,
        lowerLimit:
          (standardStringLength.Cello.half.inch * 100 +
            standardStringLength.Cello.quarter.inch * 100) /
          2 /
          100
      }
    },
    quarter: {
      mm: {
        upperLimit:
          (standardStringLength.Cello.half.mm +
            standardStringLength.Cello.quarter.mm) /
          2,
        lowerLimit:
          (standardStringLength.Cello.quarter.mm +
            standardStringLength.Cello.eighth.mm) /
          2
      },
      inch: {
        upperLimit:
          (standardStringLength.Cello.half.inch * 100 +
            standardStringLength.Cello.quarter.inch * 100) /
          2 /
          100,
        lowerLimit:
          (standardStringLength.Cello.quarter.inch * 100 +
            standardStringLength.Cello.eighth.inch * 100) /
          2 /
          100
      }
    },
    eighth: {
      mm: {
        upperLimit:
          (standardStringLength.Cello.quarter.mm +
            standardStringLength.Cello.eighth.mm) /
          2,
        lowerLimit: 0
      },
      inch: {
        upperLimit:
          (standardStringLength.Cello.quarter.inch * 100 +
            standardStringLength.Cello.eighth.inch * 100) /
          2 /
          100,
        lowerLimit: 0
      }
    }
  },
  Bass: {
    full: {
      mm: {
        upperLimit: Infinity,
        lowerLimit:
          (standardStringLength.Bass.full.mm +
            standardStringLength.Bass.three4.mm) /
          2
      },
      inch: {
        upperLimit: Infinity,
        lowerLimit:
          (standardStringLength.Bass.full.inch * 100 +
            standardStringLength.Bass.three4.inch * 100) /
          2 /
          100
      }
    },
    three4: {
      mm: {
        upperLimit:
          (standardStringLength.Bass.full.mm +
            standardStringLength.Bass.three4.mm) /
          2,
        lowerLimit:
          (standardStringLength.Bass.three4.mm +
            standardStringLength.Bass.half.mm) /
          2
      },
      inch: {
        upperLimit:
          (standardStringLength.Bass.full.inch * 100 +
            standardStringLength.Bass.three4.inch * 100) /
          2 /
          100,
        lowerLimit:
          (standardStringLength.Bass.three4.inch * 100 +
            standardStringLength.Bass.half.inch * 100) /
          2 /
          100
      }
    },
    half: {
      mm: {
        upperLimit:
          (standardStringLength.Bass.three4.mm +
            standardStringLength.Bass.half.mm) /
          2,
        lowerLimit:
          (standardStringLength.Bass.half.mm +
            standardStringLength.Bass.quarter.mm) /
          2
      },
      inch: {
        upperLimit:
          (standardStringLength.Bass.three4.inch * 100 +
            standardStringLength.Bass.half.inch * 100) /
          2 /
          100,
        lowerLimit:
          (standardStringLength.Bass.half.inch * 100 +
            standardStringLength.Bass.quarter.inch * 100) /
          2 /
          100
      }
    },
    quarter: {
      mm: {
        upperLimit:
          (standardStringLength.Bass.half.mm +
            standardStringLength.Bass.quarter.mm) /
          2,
        lowerLimit:
          (standardStringLength.Bass.quarter.mm +
            standardStringLength.Bass.eighth.mm) /
          2
      },
      inch: {
        upperLimit:
          (standardStringLength.Bass.half.inch * 100 +
            standardStringLength.Bass.quarter.inch * 100) /
          2 /
          100,
        lowerLimit:
          (standardStringLength.Bass.quarter.inch * 100 +
            standardStringLength.Bass.eighth.inch * 100) /
          2 /
          100
      }
    },
    eighth: {
      mm: {
        upperLimit:
          (standardStringLength.Bass.quarter.mm +
            standardStringLength.Bass.eighth.mm) /
          2,
        lowerLimit: 0
      },
      inch: {
        upperLimit:
          (standardStringLength.Bass.quarter.inch * 100 +
            standardStringLength.Bass.eighth.inch * 100) /
          2 /
          100,
        lowerLimit: 0
      }
    }
  }
}
