import Header from "./components/Header"
import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from 'react';
import Privacy from './components/pages/Privacy'
import TermsOfService from "./components/pages/TermsOfSerive";
import { useMenu } from "./context/MenuContext";

// Lazy-loaded components
const Hero = lazy(() => import("./components/Hero"));
const Manga = lazy(() => import("./components/pages/Manga"));
const ChapterReader = lazy(() => import("./components/pages/ChapterReader"));



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
          <main className={`flex-grow w-11/12 mx-auto py-8 ${MenuClicked ? "opacity-15 overflow-hidden" : ""}`}>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/manga/:title/:id" element={<Manga />} />
              <Route path="/:title/:id/:chapterId" element={<ChapterReader />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<TermsOfService />} />
            </Routes>
          </main>
        </div>
      </Suspense>


    </>
  )
}

export default App
