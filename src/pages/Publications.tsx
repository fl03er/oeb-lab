// src/pages/Publications.tsx
type Pub = { title: string; meta: string; authors: string; tags?: string[]; href?: string; };

const PUBS: Pub[] = [
  { title: "Neck muscular load when using a smartphone while sitting, standing, and walking",
    meta: "[Human Factors 63(5)]", authors: "W Yoon, S Choi, H Han, G Shin", tags: ["Tag1","Tag2","Tag3"], href: "https://journals.sagepub.com/doi/full/10.1177/0018720820904237?casa_token=jF5cACPHiy8AAAAA%3AqsiziZK8nCWYz-s3jzf-s6gJ0Gsp34oJnSE1W-Ba8SE1k-6ODXKlOkoQnMC5qCEVBeW0YKfVhVd2yw" },
  { title: "Effects of the center of mass of a stick vacuum cleaner on the muscle activities of the upper extremity during floor vacuuming",
    meta: "[Applied ergonomics 70, 1–5]", authors: "S Choi, G Shin", tags: ["Ergonomics","Shoulder"], href: "#" },
  { title: "Performance of ground-level signal detection when using a phone while walking",
    meta: "[Accident Analysis & Prevention 151, 105909]",
    authors: "E Kim, H Kim, Y Kwon, S Choi, G Shin", tags: ["Perception","Walking","Phone use"], href: "#" },
];

export default function Publications() {
  return (
    <div className="page publications-page">
      {/* HERO */}
      <section className="hero hero--page">
        <video className="hero-video" src="/video2.mp4" autoPlay muted loop playsInline preload="auto" />
        <div className="hero-dim"></div> {/* 오버레이 */}
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title glow">Publications</h1>
          </div>
        </div>
      </section>

      {/* LIST */}
      <main className="container pub-container">
        {PUBS.map((p, i) => (
          <article key={i} className="pub-item">
            <a className="pub-link" href={p.href || "#"}>{p.title}</a>
            <div className="pub-meta">{p.meta} {p.authors}</div>
            {p.tags?.length ? (
              <div className="pub-tags">
                {p.tags.map(t => <span key={t} className="pub-tag">{t}</span>)}
              </div>
            ) : null}
          </article>
        ))}
      </main>
    </div>
  );
}