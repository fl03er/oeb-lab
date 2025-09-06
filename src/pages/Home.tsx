export default function Home() {
  return (
    <main>
      {/* HERO (배경 비디오 + 오버레이 + 좌측 텍스트) */}
      <section className="hero">
        <video
          className="hero-video"
          src="/video2.mp4"   // ✅ public/video2.mp4
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title glow">
              {/* 첫 줄 전체를 묶어주어 줄바꿈 안 생기게 처리 */}
              <span className="nowrap">Occupational Ergonomics and</span>
              <br />
              Biomechanics Laboratory.
            </h1>
            <p className="hero-sub">
              Industrial &amp; Management Engineering
              <br />
              Incheon National University
            </p>
          </div>
        </div>
      </section>

      {/* 2×2 GRID */}
      <section className="features">
        <div className="container grid-2">
          <article className="feature">
            <h2>Ergonomics</h2>
            <p>
              We focus on optimizing interactions between people and their environment
              to improve efficiency, safety, and well-being
            </p>
          </article>
          <article className="feature">
            <h2>Biomechanics</h2>
            <p>
              The application of biological and medical principles to solve health-related
              problems, often involving engineering and technology. It encompasses a wide
              range of fields, including the study of human biology, disease mechanisms,
              and the development of medical devices, therapies, and diagnostic tools
            </p>
          </article>
          <article className="feature">
            <h2>Occupational Health &amp; Safety</h2>
            <p>
              We focus on protecting the well-being of employees in the workplace.
              It encompasses practices, regulations, and strategies aimed at preventing
              workplace injuries, illnesses, and fatalities.
            </p>
          </article>
          <article className="feature">
            <h2>
              Human-Centered Product
              <br />
              Design &amp; Evaluation
            </h2>
            <p>
              We create user-friendly products and services through an approach that
              prioritizes understanding user needs, behaviors, and preferences across
              the entire design cycle.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}