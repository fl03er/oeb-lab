// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import People from "./pages/People";
import Apparatus from "./pages/Apparatus";
import Contact from "./pages/Contact";

// 선택: 라우트 변경 시 스크롤 맨 위로
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/people" element={<People />} />
        <Route path="/apparatus" element={<Apparatus />} />
        <Route path="/contact" element={<Contact />} />
        {/* 404 */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}