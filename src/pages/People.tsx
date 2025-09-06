// src/pages/People.tsx

// (선택) Link 안 쓰면 아래 줄 지워도 됩니다.
import { Link } from "react-router-dom";

/* ------- 이미지 import (src/assets) ------- */
import profImg from "../assets/prof.jpeg";
import imgSia from "../assets/siamoon.jpg";
import imgSeunghwan from "../assets/SeunghwanKim.jpg";
import imgJonggyu from "../assets/JonggyuYun.jpg";
import scholarIcon from "../assets/googlescholar.logo.png";
import linkedinIcon from "../assets/linkedin.logo.png";

/* ------- StudentCard (사이트 CSS 클래스 사용) ------- */
type StudentCardProps = {
  img: string;
  nameKr: string;
  nameEn: string;
  role: "PhD" | "MS" | "BS";
  tags: string[];
  email?: string;
  scholar?: string;
  linkedin?: string;
};

function StudentCard({
  img,
  nameKr,
  nameEn,
  role,
  tags,
  email,
  scholar,
  linkedin,
}: StudentCardProps) {
  return (
    <div className="person-card">
      <div className="person-thumb">
        <img src={img} alt={`${nameEn} photo`} />
      </div>

      <div className="person-role">{role}</div>
      <div className="person-name-kr">{nameKr}</div>
      <div className="person-name-en">{nameEn}</div>

      {/* 태그(빈 값 제거 후 있을 때만 렌더) */}
      {tags.filter(Boolean).length > 0 && (
        <div className="person-tags">
          {tags.filter(Boolean).map((t) => (
            <span key={t} className="person-tag">
              {t}
            </span>
          ))}
        </div>
      )}

      {/* 이메일 / 아이콘 */}
      <div className="person-links">
        {email && (
          <a href={`mailto:${email}`} className="person-mail" title={email}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
            <span className="ellipsis">{email}</span>
          </a>
        )}

        {scholar && (
          <a
            href={scholar}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Scholar"
            className="icon-link"
            title="Google Scholar"
          >
            <img src={scholarIcon} alt="Scholar" className="icon-20" />
          </a>
        )}

        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="icon-link"
            title="LinkedIn"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="icon-20" />
          </a>
        )}
      </div>
    </div>
  );
}

/* ------- People 페이지 ------- */
export default function People() {
  return (
    <div className="page people-page">
      {/* HERO (공통 히어로 스타일 + 페이지용 높이) */}
<section className="hero hero--page">
  <video className="hero-video" autoPlay muted loop playsInline preload="auto">
    <source src="/video2.mp4" type="video/mp4" />
  </video>

  <div className="hero-overlay" />

  <div className="hero-inner">
    <div className="hero-copy">
      <h1 className="hero-title glow">People</h1>
    </div>
  </div>
</section>

      {/* Professor 섹션 */}
      <section className="container page-pad">
        <div className="section-title-box">Professor</div>

        <div className="prof-wrap">
          {/* 사진 */}
          <div className="prof-thumb">
            <div className="thumb-aspect">
              <img src={profImg} alt="Seobin Choi" loading="lazy" />
            </div>
          </div>

          {/* 텍스트 */}
          <div className="prof-meta">
            <div className="prof-role">PI / Principal Investigator</div>
            <div className="prof-name">최서빈 Seobin Choi</div>

            <div className="prof-line strong">
              Assistant Professor, Industrial Management Engineering, INU
            </div>
            <div className="prof-line">PhD, Biomedical Engineering, UNIST</div>
            <div className="prof-line">BS, Biomedical Engineering, UNIST</div>
            <div className="prof-line">2024.08 ~ 2025.02 Texas A&amp;M University (Postdoc)</div>
            <div className="prof-line">2024.01 ~ 2024.07 Oregon State University (Postdoc)</div>
            <div className="prof-line">
              2023.06 ~ 2023.08 KIST AI Research Group (Research Associate)
            </div>

            <div className="prof-icons">
              <a
                href="https://scholar.google.com/citations?user=PcCmQdcAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Scholar"
                title="Google Scholar"
              >
                <img src={scholarIcon} className="icon-28" alt="Scholar" />
              </a>

              <a
                href="https://www.linkedin.com/in/seobinchoi/?locale=ko_KR"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <img src={linkedinIcon} className="icon-28" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Students 섹션 */}
      <section className="container page-pad">
        <div className="section-title-box">Students</div>

        <div className="students-grid">
          <StudentCard
            img={imgSia}
            nameKr="문시아"
            nameEn="Sia Moon"
            role="MS"
            tags={["UserInterface", "UserExperience", "HCI", "Data Analysis"]}
            email="skylineveryday@inu.ac.kr"
          />

          <StudentCard
            img={imgSeunghwan}
            nameKr="김승환"
            nameEn="Seunghwan Kim"
            role="BS"
            tags={[]}
            email="wicsh@inu.ac.kr"
          />

          <StudentCard
            img={imgJonggyu}
            nameKr="윤종규"
            nameEn="Jonggyu Yun"
            role="BS"
            tags={[]}
            email="fl03er@inu.ac.kr"
          />
        </div>
      </section>
    </div>
  );
}