import { equalPointsColors } from "./colors"
import { justPointsColors } from "./colors"

const { uni, octave, white, ghost, fret12, c, d, e, g, a } = equalPointsColors

const {
  uniJust,
  octaveJust,
  fret12Just,
  upper1,
  middle,
  lower1,
  cJust,
  dJust,
  eJust,
  gJust,
  aJust
} = justPointsColors

export const openStringStates = {
  Violin: [
    {
      name: { English: "G", German: "G" },
      fontSize: { name: 1.8, number: 1.8 },
      number: 0,
      stringIndex: 0,
      stringName: "g",
      state: 0,
      coordinates: {
        cx: 260,
        cy: 0
      },
      width: 20,
      colors: {
        equal: {
          uni: uni,
          uniPlus8: octave,
          fret: fret12,
          name: g,
          piano: white,
          ghost: ghost
        },
        just: {
          uni: uniJust,
          uniPlus8: octaveJust,
          fret: fret12Just,
          name: gJust,
          row: middle,
          ghost: ghost
        }
      }
    },
    {
      name: { English: "D", German: "D" },
      fontSize: { name: 1.8, number: 1.8 },
      number: 0,
      stringIndex: 1,
      stringName: "d",
      state: 0,
      coordinates: {
        cx: 280,
        cy: 0
      },
      width: 20,
      colors: {
        equal: {
          uni: uni,
          uniPlus8: octave,
          fret: fret12,
          name: d,
          piano: white,
          ghost: ghost
        },
        just: {
          uni: uniJust,
          uniPlus8: octaveJust,
          fret: fret12Just,
          name: dJust,
          row: middle,
          ghost: ghost
        }
      }
    },
    {
      name: { English: "A", German: "A" },
      fontSize: { name: 1.8, number: 1.8 },
      number: 0,
      stringIndex: 2,
      stringName: "a",
      state: 0,
      coordinates: {
        cx: 300,
        cy: 0
      },
      width: 20,
      colors: {
        equal: {
          uni: uni,
          uniPlus8: octave,
          fret: fret12,
          name: a,
          piano: white,
          ghost: ghost
        },
        just: {
          uni: uniJust,
          uniPlus8: octaveJust,
          fret: fret12Just,
          name: aJust,
          row: middle,
          ghost: ghost
        }
      }
    },
    {
      name: { English: "E", German: "E" },
      fontSize: { name: 1.8, number: 1.8 },
      number: 0,
      stringIndex: 3,
      stringName: "e",
      state: 0,
      coordinates: {
        cx: 320,
        cy: 0
      },
      width: 20,
      colors: {
        equal: {
          uni: uni,
          uniPlus8: octave,
          fret: fret12,
          name: e,
          piano: white,
          ghost: ghost
        },
        just: {
          uni: uniJust,
          uniPlus8: octaveJust,
          fret: fret12Just,
          name: eJust,
          row: middle,
          ghost: ghost
        }
      }
    }
  ],
  Viola: [
    {
      name: { English: "C", German: "C" },
      fontSize: { name: 1.8, number: 1.8 },
      number: 0,
      stringIndex: 0,
      stringName: "c",
      state: 0,
      coordinates: {
        cx: 260,
        cy: 0
      },
      width: 20,
      colors: {
        equal: {
          uni: uni,
          uniPlus8: octave,
          fret: fret12,
          name: c,
          piano: white,
          ghost: ghost
        },
        just: {
          uni: uniJust,
          uniPlus8: octaveJust,
          fret: fret12Just,
          name: cJust,
          row: middle,
          ghost: ghost
        }
      }
    },
    {
      name: { English: "G", German: "G" },
      fontSize: { name: 1.8, number: 1.8 },
      number: 0,
      stringIndex: 1,
      stringName: "g",
      state: 0,
      coordinates: {
        cx: 280,
        cy: 0
      },
      width: 20,
      colors: {
        equal: {
          uni: uni,
          uniPlus8: octave,
          fret: fret12,
          name: g,
          piano: white,
          ghost: ghost
        },
        just: {
          uni: uniJust,
          uniPlus8: octaveJust,
          fret: fret12Just,
          name: gJust,
          row: middle,
          ghost: ghost
        }
      }
    },
    {
      name: { English: "D", German: "D" },
      fontSize: { name: 1.8, number: 1.8 },
      number: 0,
      stringIndex: 2,
      stringName: "d",
      state: 0,
      coordinates: {
        cx: 300,
        cy: 0
      },
      width: 20,
      colors: {
        equal: {
          uni: uni,
          uniPlus8: octave,
          fret: fret12,
          name: d,
          piano: white,
          ghost: ghost
        },
        just: {
          uni: uniJust,
          uniPlus8: octaveJust,
          fret: fret12Just,
          name: dJust,
          row: middle,
          ghost: ghost
        }
      }
    },
    {
      name: { English: "A", German: "A" },
      fontSize: { name: 1.8, number: 1.8 },
      number: 0,
      stringIndex: 3,
      stringName: "a",
      state: 0,
      coordinates: {
        cx: 320,
        cy: 0
      },
      width: 20,
      colors: {
        equal: {
          uni: uni,
          uniPlus8: octave,
          fret: fret12,
          name: a,
          piano: white,
          ghost: ghost
        },
        just: {
          uni: uniJust,
          uniPlus8: octaveJust,
          fret: fret12Just,
          name: aJust,
          row: middle,
          ghost: ghost
        }
      }
    }
  ],
  Cello: [
    {
      name: { English: "C", German: "C" },
      fontSize: { name: 1.8, number: 1.8 },
      number: 0,
      stringIndex: 0,
      stringName: "c",
      state: 0,
      coordinates: {
        cx: 276,
        cy: 0
      },
      width: 12,
      colors: {
        equal: {
          uni: uni,
          uniPlus8: octave,
          fret: fret12,
          name: c,
          piano: white,
          ghost: ghost
        },
        just: {
          uni: uniJust,
          uniPlus8: octaveJust,
          fret: fret12Just,
          name: cJust,
          row: middle,
          ghost: ghost
        }
      }
    },
    {
      name: { English: "G", German: "G" },
      fontSize: { name: 1.8, number: 1.8 },
      number: 0,
      stringIndex: 1,
      stringName: "g",
      state: 0,
      coordinates: {
        cx: 288,
        cy: 0
      },
      width: 12,
      colors: {
        equal: {
          uni: uni,
          uniPlus8: octave,
          fret: fret12,
          name: g,
          piano: white,
          ghost: ghost
        },
        just: {
          uni: uniJust,
          uniPlus8: octaveJust,
          fret: fret12Just,
          name: gJust,
          row: middle,
          ghost: ghost
        }
      }
    },
    {
      name: { English: "D", German: "D" },
      fontSize: { name: 1.8, number: 1.8 },
      number: 0,
      stringIndex: 2,
      stringName: "d",
      state: 0,
      coordinates: {
        cx: 300,
        cy: 0
      },
      width: 12,
      colors: {
        equal: {
          uni: uni,
          uniPlus8: octave,
          fret: fret12,
          name: d,
          piano: white,
          ghost: ghost,
          ghost: ghost
        },
        just: {
          uni: uniJust,
          uniPlus8: octaveJust,
          fret: fret12Just,
          name: dJust,
          row: middle,
          ghost: ghost,
          ghost: ghost
        }
      }
    },
    {
      name: { English: "A", German: "A" },
      fontSize: { name: 1.8, number: 1.8 },
      number: 0,
      stringIndex: 3,
      stringName: "a",
      state: 0,
      coordinates: {
        cx: 312,
        cy: 0
      },
      width: 12,
      colors: {
        equal: {
          uni: uni,
          uniPlus8: octave,
          fret: fret12,
          name: a,
          piano: white,
          ghost: ghost,
          ghost: ghost
        },
        just: {
          uni: uniJust,
          uniPlus8: octaveJust,
          fret: fret12Just,
          name: aJust,
          row: middle,
          ghost: ghost,
          ghost: ghost
        }
      }
    }
  ],
  Bass: [
    {
      name: { English: "E", German: "E" },
      fontSize: { name: 1.8, number: 1.8 },
      number: 0,
      stringIndex: 0,
      stringName: "e",
      state: 0,
      coordinates: {
        cx: 276,
        cy: 0
      },
      width: 12,
      colors: {
        equal: {
          uni: uni,
          uniPlus8: octave,
          fret: fret12,
          name: e,
          piano: white,
          ghost: ghost
        },
        just: {
          uni: uniJust,
          uniPlus8: octaveJust,
          fret: fret12Just,
          name: eJust,
          row: middle,
          ghost: ghost
        }
      }
    },
    {
      name: { English: "A", German: "A" },
      fontSize: { name: 1.8, number: 1.8 },
      number: 0,
      stringIndex: 1,
      stringName: "a",
      state: 0,
      coordinates: {
        cx: 288,
        cy: 0
      },
      width: 12,
      colors: {
        equal: {
          uni: uni,
          uniPlus8: octave,
          fret: fret12,
          name: a,
          piano: white,
          ghost: ghost
        },
        just: {
          uni: uniJust,
          uniPlus8: octaveJust,
          fret: fret12Just,
          name: aJust,
          row: middle,
          ghost: ghost
        }
      }
    },
    {
      name: { English: "D", German: "D" },
      fontSize: { name: 1.8, number: 1.8 },
      number: 0,
      stringIndex: 2,
      stringName: "d",
      state: 0,
      coordinates: {
        cx: 300,
        cy: 0
      },
      width: 12,
      colors: {
        equal: {
          uni: uni,
          uniPlus8: octave,
          fret: fret12,
          name: d,
          piano: white,
          ghost: ghost
        },
        just: {
          uni: uniJust,
          uniPlus8: octaveJust,
          fret: fret12Just,
          name: dJust,
          row: middle,
          ghost: ghost
        }
      }
    },
    {
      name: { English: "G", German: "G" },
      fontSize: { name: 1.8, number: 1.8 },
      number: 0,
      stringIndex: 3,
      stringName: "g",
      state: 0,
      coordinates: {
        cx: 312,
        cy: 0
      },
      width: 12,
      colors: {
        equal: {
          uni: uni,
          uniPlus8: octave,
          fret: fret12,
          name: g,
          piano: white,
          ghost: ghost
        },
        just: {
          uni: uniJust,
          uniPlus8: octaveJust,
          fret: fret12Just,
          name: gJust,
          row: middle,
          ghost: ghost
        }
      }
    }
  ]
}
