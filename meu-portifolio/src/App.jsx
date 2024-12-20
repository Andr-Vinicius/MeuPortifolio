import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header/Header"
import DefaultPage from "./Pages/DefaultPage"
import AboutMe from "./Pages/AboutMe"
import MyProjects from "./Pages/MyProjects"
import Contact from "./Pages/Contact"
import Footer from "./Components/Footer/Footer"

function App() {

  return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route index element={<DefaultPage/>}></Route>
          <Route path="/sobremim" element={<AboutMe/>}></Route>
          <Route path="/projetos" element={<MyProjects/>}></Route>
          <Route path="/contato" element={<Contact/>}></Route>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
