import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import Quality from './pages/Quality';
import Sustainability from './pages/Sustainability';
import News from './pages/News';
import Contact from './pages/Contact';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/products" element={<Products />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}
