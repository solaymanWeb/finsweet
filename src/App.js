import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Feature from './pages/Feature';
import Contact from './pages/Contact';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import FooterBottom from './components/footerbottom/FooterBottom';
import Priching from './pages/Priching';
import Blog from './components/homeComponents/blog/Blog';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="home" element={<Home/>}></Route>
        <Route path='feature' element={<Feature></Feature>}></Route>
        <Route path='about' element={<About></About>} ></Route>
        <Route path='priching' element={<Priching></Priching>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
      <FooterBottom></FooterBottom>
    </div>
  );
}

export default App;
