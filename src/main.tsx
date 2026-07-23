import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

// Tipografías de Google Fonts self-hosteadas (@fontsource):
// Space Grotesk para títulos, Inter para texto y UI.
import "@fontsource/space-grotesk/500.css"
import "@fontsource/space-grotesk/700.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"

import App from "@/App"
import "@/index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
