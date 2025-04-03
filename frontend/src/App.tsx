import Header from "./components/Header"
import Hero from "./components/Hero"
import { Route, Routes } from "react-router-dom"
import Manga from "./components/pages/Manga"

function App() {

  return (
    <>
      <div className="w-11/12 m-auto">
        <Header/>
        <Routes>
           <Route path="/" element={<Hero/>}/>
          <Route path="/manga/:title/:id" element={<Manga/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
