import {
  BrowserRouter,
  Route,
  Routes,   
} from "react-router";
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Quizez from "./pages/Quizez";
import Weeklyquiz from "./pages/Weeklyquiz";
import Rewards from "./pages/Rewards";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/quizzez" element={<Quizez />} />
          <Route path="/weeklyquiz" element={<Weeklyquiz />} />
          <Route path="/rewards" element={<Rewards />} />
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
