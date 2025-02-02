import { Tune } from "./Tune"
import { Sound } from "./Sound"
import { Show } from "./Show"
import { EqualPoints } from "./EqualPoints"
import { JustPoints } from "./JustPoints"
import { HarmonicPoints } from "./HarmonicPoints"
import { PositionsTraditional } from "./PositionsTraditional"
import { PositionsAbsolute } from "./PositionsAbsolute"
import { Search } from "./Search"
import { Measure } from "./Measure"
import { Calculator } from "./Calculator"

export function Menu() {
  return (
    <div id="menu" className="menus">
      <Tune />
      <Sound />
      <Show />
      <EqualPoints />
      <JustPoints />
      <HarmonicPoints />
      <PositionsTraditional />
      <PositionsAbsolute />
      <Search />
      <Measure />
      <Calculator />
    </div>
  )
}
