import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import inuLogo from "../assets/InulogotransW.png";

export default function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "active" : undefined;

  return (
    <header className={`topbar ${solid ? "solid" : ""}`}>
      <div className="container-wide bar">
        {/* 왼쪽: 로고 + 워드마크 텍스트 */}
        <Link to="/" className="brand" aria-label="OEB LAB home">
          <img src={inuLogo} alt="INU logo" className="brand-logo" />
          <span className="brand-text">OEB LAB</span>
        </Link>

        {/* 오른쪽: 메뉴 */}
        <nav className="nav">
          {/* 반드시 선행 슬래시 + 소문자 경로 */}
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/publications">Publications</NavLink>
          <NavLink to="/people">People</NavLink>
          <NavLink to="/apparatus">Apparatus</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}