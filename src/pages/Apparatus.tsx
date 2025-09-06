import { useEffect } from "react";

// 🔧 assets에서 직접 import (파일명에 맞춰 조정)
import emgPng from "../assets/delsys-trigno.png";
import goproPng from "../assets/gopro.png";
import djiPng from "../assets/djiaction2.png";
import iphonePng from "../assets/iphone12pro1.png";

type Gear = {
  name: string;
  subtitle?: string;
  img?: string;
};

const GEARS: Gear[] = [
  { name: "Delsys Trigno EMG", subtitle: "무선 근전도(EMG) 측정 모듈", img: emgPng },
  { name: "GoPro Hero 12", subtitle: "액션 카메라 · 슬로모션/광각 촬영", img: goproPng },
  { name: "DJI Action 2", subtitle: "웨어러블 액션 카메라 · 자석 마운트", img: djiPng },
  { name: "iPhone 12 Pro", subtitle: "고속 프레임 영상 · OpenCap 데이터 수집", img: iphonePng },
];

export default function Apparatus() {
  useEffect(() => {
    document.title = "Apparatus | OEB LAB";
  }, []);

  return (
    <main>
      {/* HERO (사이트 공통 히어로 스타일 재사용, 페이지 높이 버전) */}
      <section className="hero hero--page">
        <video
          className="hero-video"
          src="/video2.mp4"   // public/video2.mp4
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title glow">Apparatus</h1>
            <p className="hero-sub">
              Instruments, cameras and mobile devices used in OEB LAB
            </p>
          </div>
        </div>
      </section>

      {/* 장비 카드 그리드 */}
      <section className="features">
        <div className="container">
          <div className="gear-grid">
            {GEARS.map((g) => (
              <figure key={g.name} className="gear-card">
                <div className="gear-thumb">
                  {g.img ? (
                    <img src={g.img} alt={g.name} loading="lazy" />
                  ) : (
                    <div className="thumb-fallback" />
                  )}
                </div>
                <figcaption className="gear-meta">
                  <div className="gear-title">{g.name}</div>
                  {g.subtitle && <div className="gear-sub">{g.subtitle}</div>}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}