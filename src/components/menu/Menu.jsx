import { MenuHeader } from "./MenuHeader"
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
import { useContext } from "react"
import { Context } from "../../App"

export function Menu() {
  const { menuOpen, setMenuOpen } = useContext(Context)
  return (
    <div
      id="menu"
      className="menus"
      style={menuOpen ? { right: "0" } : { right: "-300px" }}
    >
      <MenuHeader />
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
