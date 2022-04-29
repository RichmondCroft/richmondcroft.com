import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import './style.css'
import Layout from "../Layout";
import Home from "../Header/Home";
import Contact from "../Header/Contact";
import About from "../Header/About";
import Projects from "../Header/Projects";

export default function NavigationMenu() {

    return <>
        <BrowserRouter>
         <Layout></Layout>
            <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path = '/about' element = {<About/>}></Route>
                    <Route path = '/project' element = {<Projects/>}></Route>
                    <Route path= '/contact' element = {<Contact/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
}