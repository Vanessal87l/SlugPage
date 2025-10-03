import './App.css'
import {BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom";
import Home from "./pages/home.jsx";
import Contact from "./pages/contact.jsx";
import SlugPage from "./pages/slug.jsx";
import Layout from "./pages/layout.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="product/:id" element={<SlugPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
 )
}

