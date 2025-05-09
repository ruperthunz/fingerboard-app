import { createHashRouter } from "react-router-dom"
import { Home } from "./pages/Home"
import { Violin } from "./pages/Violin"
import { Viola } from "./pages/Viola"
import { Cello } from "./pages/Cello"
import { Bass } from "./pages/Bass"

export const router = createHashRouter([
  { path: "/", element: <Home /> },
  { path: "/violin", element: <Violin instrument="Violin" /> },
  { path: "/viola", element: <Viola instrument="Viola" /> },
  { path: "/cello", element: <Cello instrument="Cello" /> },
  { path: "/bass", element: <Bass instrument="Bass" /> }
])
