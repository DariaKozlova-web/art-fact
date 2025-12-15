import { Home } from "lucide-react"
import { BrowserRouter, Routes, Route } from "react-router"
import { MainLayout } from "./layouts/MainLayout"
import { Explore } from "./pages/Explore"
import { Gallery } from "./pages/Gallery"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/explore" element={<Explore/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
