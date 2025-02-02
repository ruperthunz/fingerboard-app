import { drawViolin } from "./violinGraphic"
import { drawViola } from "./violaGraphic"
import { drawCello } from "./celloGraphic"
import { drawBass } from "./bassGraphic"

export function drawGraphic(height, width, instrument) {
  switch (instrument) {
    case "Violin":
      return drawViolin(height, width)
    case "Viola":
      return drawViola(height, width)
    case "Cello":
      return drawCello(height, width)
    case "Bass":
      return drawBass(height, width)
  }
}
