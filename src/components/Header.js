import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import inuLogo from "../assets/InulogotransW.png";
export default function Header() {
    const [solid, setSolid] = useState(false);
    const [open, setOpen] = useState(false); // ✅ 모바일 메뉴 상태
    useEffect(() => {
        const onScroll = () => setSolid(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    // NavLink 활성화 클래스
    const navClass = ({ isActive }) => isActive ? "active" : undefined;
    // 모바일 메뉴 열릴 때 배경 스크롤 잠금(선택)
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);
    const closeMenu = () => setOpen(false);
    return (_jsxs("header", { className: `topbar ${solid ? "solid" : ""}`, children: [_jsxs("div", { className: "container-wide bar", children: [_jsxs(Link, { to: "/", className: "brand", "aria-label": "OEB LAB home", onClick: closeMenu, children: [_jsx("img", { src: inuLogo, alt: "INU logo", className: "brand-logo" }), _jsx("span", { className: "brand-text", children: "OEB LAB" })] }), _jsxs("nav", { className: "nav", children: [_jsx(NavLink, { to: "/research", className: navClass, children: "Research" }), _jsx(NavLink, { to: "/publications", className: navClass, children: "Publications" }), _jsx(NavLink, { to: "/people", className: navClass, children: "People" }), _jsx(NavLink, { to: "/apparatus", className: navClass, children: "Apparatus" }), _jsx(NavLink, { to: "/contact", className: navClass, children: "Contact" })] }), _jsxs("button", { className: "menu-btn", "aria-label": "Open menu", "aria-controls": "mobile-nav", "aria-expanded": open, onClick: () => setOpen(!open), children: [_jsx("span", {}), _jsx("span", {}), _jsx("span", {})] })] }), _jsxs("div", { id: "mobile-nav", className: `mobile-nav ${open ? "open" : ""}`, children: [_jsx(NavLink, { to: "/research", className: navClass, onClick: closeMenu, children: "Research" }), _jsx(NavLink, { to: "/publications", className: navClass, onClick: closeMenu, children: "Publications" }), _jsx(NavLink, { to: "/people", className: navClass, onClick: closeMenu, children: "People" }), _jsx(NavLink, { to: "/apparatus", className: navClass, onClick: closeMenu, children: "Apparatus" }), _jsx(NavLink, { to: "/contact", className: navClass, onClick: closeMenu, children: "Contact" })] })] }));
}
