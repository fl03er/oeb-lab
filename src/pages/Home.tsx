export default function Home() {
  return (
    <main>
      {/* HERO (배경 비디오 + 오버레이 + 좌측 텍스트) */}
      <section className="hero" style={{ position: "relative", overflow: "hidden" }}>
        
        {/* Background Video */}
        <video
          className="hero-video"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div
          className="hero-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.45)",
            zIndex: 1,
          }}
        />

        {/* Text Layer */}
        <div
          className="hero-inner"
          style={{
            position: "relative",
            zIndex: 2
          }}
        >
          <div className="hero-copy">
            <h1 className="hero-title glow">
              <span className="nowrap-md">
                Occupational Ergonomics and&nbsp;Biomechanics
              </span>
              <br />
              Laboratory.
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
              to improve efficiency, safety, and well-being.
            </p>
          </article>

          <article className="feature">
            <h2>Biomechanics</h2>
            <p>
              The application of biological and medical principles to solve
              health-related problems, often involving engineering and technology.
              It encompasses a wide range of fields, including the study of human
              biology, disease mechanisms, and the development of medical devices,
              therapies, and diagnostic tools.
            </p>
          </article>

          <article className="feature">
            <h2>Occupational Health &amp; Safety</h2>
            <p>
              We focus on protecting the well-being of employees in the workplace.
              It encompasses practices, regulations, and strategies aimed at
              preventing workplace injuries, illnesses, and fatalities.
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