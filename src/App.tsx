
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
//import Cord from "./cardRotate";
import Corousel from "./2cardCarousel"

function App() {


  return (
    <div className="bg-slate-200 w-full h-screen">
    <Router>
      <Routes>
       <Route path="/" element={<Corousel/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
