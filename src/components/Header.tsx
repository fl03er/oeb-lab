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
  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "active" : undefined;

  // 모바일 메뉴 열릴 때 배경 스크롤 잠금(선택)
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`topbar ${solid ? "solid" : ""}`}>
      <div className="container-wide bar">
        {/* 왼쪽: 로고 + 워드마크 */}
        <Link to="/" className="brand" aria-label="OEB LAB home" onClick={closeMenu}>
          <img src={inuLogo} alt="INU logo" className="brand-logo" />
          <span className="brand-text">OEB LAB</span>
        </Link>

        {/* 데스크톱 메뉴 */}
        <nav className="nav">
          <NavLink to="/research" className={navClass}>Research</NavLink>
          <NavLink to="/publications" className={navClass}>Publications</NavLink>
          <NavLink to="/people" className={navClass}>People</NavLink>
          <NavLink to="/apparatus" className={navClass}>Apparatus</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="menu-btn"
          aria-label="Open menu"
          aria-controls="mobile-nav"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      <div id="mobile-nav" className={`mobile-nav ${open ? "open" : ""}`}>
        <NavLink to="/research" className={navClass} onClick={closeMenu}>Research</NavLink>
        <NavLink to="/publications" className={navClass} onClick={closeMenu}>Publications</NavLink>
        <NavLink to="/people" className={navClass} onClick={closeMenu}>People</NavLink>
        <NavLink to="/apparatus" className={navClass} onClick={closeMenu}>Apparatus</NavLink>
        <NavLink to="/contact" className={navClass} onClick={closeMenu}>Contact</NavLink>
      </div>
    </header>
  );
}