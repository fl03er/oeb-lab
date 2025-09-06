import labBrand from "../assets/oeblablogo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-wrap">
        <img
          src={labBrand}
          alt="al Ergonomics and Biomechanics Laboratory"
          className="footer-brand"
        />
        <div className="footer-right">
          <div>인천광역시 연수구 아카데미로 119, 인천대학교</div>
          <div>119 Academy-ro, Yeonsu-gu, Incheon 22012, Republic of Korea</div>
        </div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} OEB LAB</div>
    </footer>
  );
}