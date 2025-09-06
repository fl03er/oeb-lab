import { useEffect } from "react";

type Area = { title: string; desc: string };

const AREAS: Area[] = [
  {
    title: "Ergonomics",
    desc:
      "We focus on optimizing interactions between people and their environment to improve efficiency, safety, and well-being.",
  },
  {
    title: "Biomechanics",
    desc:
      "The application of biological and medical principles to solve health-related problems, often involving engineering and technology. It includes human biology, disease mechanisms, and development of medical devices, therapies, and diagnostics.",
  },
  {
    title: "Occupational Health & Safety",
    desc:
      "We focus on protecting employee well-being in the workplace through practices, regulations, and strategies to prevent injuries, illnesses, and fatalities.",
  },
  {
    title: "Human-Centered Product Design & Evaluation",
    desc:
      "We create user-friendly products/services by prioritizing user needs, behaviors, and preferences throughout the design and development process.",
  },
];

export default function Research() {
  useEffect(() => {
    document.title = "Research | OEB LAB";
  }, []);

  return (
    <div className="page research-page">
      {/* ===== HERO (video background) ===== */}
      <section className="hero hero--page">
        <video
          className="hero-video"
          src="/video2.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title glow">Research</h1>
          </div>
        </div>
      </section>

      {/* ===== 개요 섹션 ===== */}
      <section className="features section-pad">
        <div className="container">
          <div className="grid-2">
            {AREAS.map((a) => (
              <div key={a.title} className="feature">
                <h2>{a.title}</h2>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}