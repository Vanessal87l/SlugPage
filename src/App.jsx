import 'react-router-dom'
import './App.css'
import {BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom";
import Home from "./pages/home.jsx";
import Contact from "./pages/contact.jsx";
import SlugPage from "./pages/slug.jsx";

function App() {
    return (
    <BrowserRouter>
        <Link to="/">Глав стран</Link>
        <Link to="/contact">Contakt стран</Link>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/product/:id" element={<SlugPage/>}/>
</Routes>
    </BrowserRouter>
  )
}

export default App
