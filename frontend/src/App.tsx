import Header from "./components/Header"
import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from 'react';
import Privacy from "./pages/Privacy";
import TermsOfService from "./pages/TermsOfSerive";
import { useMenu } from "./context/MenuContext";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Lazy-loaded components
const Hero = lazy(() => import("./components/Hero"));
const Manga = lazy(() => import("./pages/Manga"));
const ChapterReader = lazy(() => import("./pages/ChapterReader"));



function App() {
  const { MenuClicked, setMenuClicked } = useMenu()

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-col min-h-screen">
          <Header />
          {MenuClicked && (
            <div onClick={()=>setMenuClicked(false)} className="fixed inset-0 z-44  opacity-10 transition-opacity duration-300"></div>
          )}
          <main className={`flex-grow w-11/12 mx-auto py-8 ${MenuClicked ? "opacity-20 " : "overflow-auto"}`}>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/manga/:title/:id" element={<Manga />} />
              <Route path="/:title/:id/:chapterId" element={<ChapterReader />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
            </Routes>
          </main>
        </div>
      </Suspense>


    </>
  )
}

export default App
