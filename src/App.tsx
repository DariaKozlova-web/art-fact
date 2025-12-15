import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "./context/ThemeProvider";
import { MainLayout } from "./layouts/MainLayout";
import { Explore } from "./pages/Explore";
import { Gallery } from "./pages/Gallery";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/gallery" element={<Gallery />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
