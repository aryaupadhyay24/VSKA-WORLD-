import "./App.css"
import Header from "./components/common/header/Header"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Login from "./components/Login/Login"
import Register from "./components/Registration/Registration"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Header />
        <Routes>

          <Route exact path='/' element={<Home/>} /> 
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />


          <Route exact path='/about' element={<About/>} />
          <Route exact path='/courses' element={<CourseHome/>} />
          <Route exact path='/team' element={<Team/>} />
          <Route exact path='/pricing' element={<Pricing/>} />
          <Route exact path='/journal' element={<Blog/>} />
          <Route exact path='/contact' element={<Contact/>} />

        </Routes>
        <Footer />
        
        </BrowserRouter>
      
    </>
  )
}

export default App
