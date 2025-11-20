import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(ScrollToTop, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/research", element: _jsx(Research, {}) }), _jsx(Route, { path: "/publications", element: _jsx(Publications, {}) }), _jsx(Route, { path: "/people", element: _jsx(People, {}) }), _jsx(Route, { path: "/apparatus", element: _jsx(Apparatus, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "*", element: _jsx(Home, {}) })] }), _jsx(Footer, {})] }));
}
