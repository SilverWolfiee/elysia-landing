import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import GnzyPage from './gnzyyyyyyy/App';
import AhiruPage from './AhiruSareas/App';
import SilverWolfPage from './SilverWolf/App.jsx'
import PTRPage from './Cryscwl/App.jsx'


const ThemeButton = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' 
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-6 right-6 z-[100] px-4 py-2 rounded-full bg-pink-400 dark:bg-pink-600 text-white font-bold shadow-lg hover:scale-110 transition-transform active:scale-95"
    >
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeButton />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Gnzyyyyyyy" element={<GnzyPage />} />
        <Route path="/AhiruSareas" element={<AhiruPage />} />
        <Route path="/SilverWolf" element={<SilverWolfPage />} />
        <Route path="/Cryscwl" element={<PTRPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)