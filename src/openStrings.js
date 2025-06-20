import { equalPointsColors } from "./colors"
import { justPointsColors } from "./colors"

const { uni, octave, fret12, c, d, e, g, a, white } = equalPointsColors

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

export const openStrings = {
  Violin: [
    [
      {
        name: { English: "G", German: "G" },
        fontSize: { name: 1.8, number: 1.8 },
        number: 0,
        string: "g",
        coordinates: {
          cx: null,
          cy: null
        },
        colors: {
          equal: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            piano: white
          },
          just: {
            uni: uniJust,
            uniPlus8: octaveJust,
            fret: fret12Just,
            name: gJust,
            row: middle
          }
        }
      }
    ],
    [
      {
        name: { English: "D", German: "D" },
        fontSize: { name: 1.8, number: 1.8 },
        number: 0,
        string: "d",
        coordinates: {
          cx: null,
          cy: null
        },
        colors: {
          equal: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            piano: white
          },
          just: {
            uni: uniJust,
            uniPlus8: octaveJust,
            fret: fret12Just,
            name: dJust,
            row: middle
          }
        }
      }
    ],
    [
      {
        name: { English: "A", German: "A" },
        fontSize: { name: 1.8, number: 1.8 },
        number: 0,
        string: "a",
        coordinates: {
          cx: null,
          cy: null
        },
        colors: {
          equal: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            piano: white
          },
          just: {
            uni: uniJust,
            uniPlus8: octaveJust,
            fret: fret12Just,
            name: aJust,
            row: middle
          }
        }
      }
    ],
    [
      {
        name: { English: "E", German: "E" },
        fontSize: { name: 1.8, number: 1.8 },
        number: 0,
        string: "e",
        coordinates: {
          cx: null,
          cy: null
        },
        colors: {
          equal: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: e,
            piano: white
          },
          just: {
            uni: uniJust,
            uniPlus8: octaveJust,
            fret: fret12Just,
            name: eJust,
            row: middle
          }
        }
      }
    ]
  ],
  Viola: [
    [
      {
        name: { English: "C", German: "C" },
        fontSize: { name: 1.8, number: 1.8 },
        number: 0,
        string: "c",
        coordinates: {
          cx: null,
          cy: null
        },
        colors: {
          equal: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: c,
            piano: white
          },
          just: {
            uni: uniJust,
            uniPlus8: octaveJust,
            fret: fret12Just,
            name: cJust,
            row: middle
          }
        }
      }
    ],
    [
      {
        name: { English: "G", German: "G" },
        fontSize: { name: 1.8, number: 1.8 },
        number: 0,
        string: "g",
        coordinates: {
          cx: null,
          cy: null
        },
        colors: {
          equal: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            piano: white
          },
          just: {
            uni: uniJust,
            uniPlus8: octaveJust,
            fret: fret12Just,
            name: gJust,
            row: middle
          }
        }
      }
    ],
    [
      {
        name: { English: "D", German: "D" },
        fontSize: { name: 1.8, number: 1.8 },
        number: 0,
        string: "d",
        coordinates: {
          cx: null,
          cy: null
        },
        colors: {
          equal: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            piano: white
          },
          just: {
            uni: uniJust,
            uniPlus8: octaveJust,
            fret: fret12Just,
            name: dJust,
            row: middle
          }
        }
      }
    ],
    [
      {
        name: { English: "A", German: "A" },
        fontSize: { name: 1.8, number: 1.8 },
        number: 0,
        string: "a",
        coordinates: {
          cx: null,
          cy: null
        },
        colors: {
          equal: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            piano: white
          },
          just: {
            uni: uniJust,
            uniPlus8: octaveJust,
            fret: fret12Just,
            name: aJust,
            row: middle
          }
        }
      }
    ]
  ],
  Cello: [
    [
      {
        name: { English: "C", German: "C" },
        fontSize: { name: 1.8, number: 1.8 },
        number: 0,
        string: "c",
        coordinates: {
          cx: null,
          cy: null
        },
        colors: {
          equal: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: c,
            piano: white
          },
          just: {
            uni: uniJust,
            uniPlus8: octaveJust,
            fret: fret12Just,
            name: cJust,
            row: middle
          }
        }
      }
    ],
    [
      {
        name: { English: "G", German: "G" },
        fontSize: { name: 1.8, number: 1.8 },
        number: 0,
        string: "g",
        coordinates: {
          cx: null,
          cy: null
        },
        colors: {
          equal: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            piano: white
          },
          just: {
            uni: uniJust,
            uniPlus8: octaveJust,
            fret: fret12Just,
            name: gJust,
            row: middle
          }
        }
      }
    ],
    [
      {
        name: { English: "D", German: "D" },
        fontSize: { name: 1.8, number: 1.8 },
        number: 0,
        string: "d",
        coordinates: {
          cx: null,
          cy: null
        },
        colors: {
          equal: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            piano: white
          },
          just: {
            uni: uniJust,
            uniPlus8: octaveJust,
            fret: fret12Just,
            name: dJust,
            row: middle
          }
        }
      }
    ],
    [
      {
        name: { English: "A", German: "A" },
        fontSize: { name: 1.8, number: 1.8 },
        number: 0,
        string: "a",
        coordinates: {
          cx: null,
          cy: null
        },
        colors: {
          equal: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            piano: white
          },
          just: {
            uni: uniJust,
            uniPlus8: octaveJust,
            fret: fret12Just,
            name: aJust,
            row: middle
          }
        }
      }
    ]
  ],
  Bass: [
    [
      {
        name: { English: "E", German: "E" },
        fontSize: { name: 1.8, number: 1.8 },
        number: 0,
        string: "e",
        coordinates: {
          cx: null,
          cy: null
        },
        colors: {
          equal: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: e,
            piano: white
          },
          just: {
            uni: uniJust,
            uniPlus8: octaveJust,
            fret: fret12Just,
            name: eJust,
            row: middle
          }
        }
      }
    ],
    [
      {
        name: { English: "A", German: "A" },
        fontSize: { name: 1.8, number: 1.8 },
        number: 0,
        string: "a",
        coordinates: {
          cx: null,
          cy: null
        },
        colors: {
          equal: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: a,
            piano: white
          },
          just: {
            uni: uniJust,
            uniPlus8: octaveJust,
            fret: fret12Just,
            name: aJust,
            row: middle
          }
        }
      }
    ],
    [
      {
        name: { English: "D", German: "D" },
        fontSize: { name: 1.8, number: 1.8 },
        number: 0,
        string: "d",
        coordinates: {
          cx: null,
          cy: null
        },
        colors: {
          equal: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: d,
            piano: white
          },
          just: {
            uni: uniJust,
            uniPlus8: octaveJust,
            fret: fret12Just,
            name: dJust,
            row: middle
          }
        }
      }
    ],
    [
      {
        name: { English: "G", German: "G" },
        fontSize: { name: 1.8, number: 1.8 },
        number: 0,
        string: "g",
        coordinates: {
          cx: null,
          cy: null
        },
        colors: {
          equal: {
            uni: uni,
            uniPlus8: octave,
            fret: fret12,
            name: g,
            piano: white
          },
          just: {
            uni: uniJust,
            uniPlus8: octaveJust,
            fret: fret12Just,
            name: gJust,
            row: middle
          }
        }
      }
    ]
  ]
}
