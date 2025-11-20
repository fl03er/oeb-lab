// src/pages/Publications.tsx
type Pub = { title: string; meta: string; authors: string; tags?: string[]; href?: string; };

const PUBS: Pub[] = [
  { title: "Effects of different sorting table heights on low back and shoulders biomechanical loads during dungeness crab sorting",
  meta: "[Applied Ergonomics 128, 104537]",
  authors: "Salehi, M., Choi, S., Kia, K., Chan, A., Kincl, L., Kim, J.",
  tags: ["Sorting","Low back","Shoulder","Crab industry"],
  href: "https://doi.org/10.1016/j.apergo.2025.104537" },

{ title: "How to walk to reduce footstep noise in multi-story residential buildings",
  meta: "[Ergonomics 68(1), 112-119]",
  authors: "Yoon, W., Kwon, Y., Yoon, J., Choi, S., Shin, G.",
  tags: ["Walking","Noise","Residential buildings"],
  href: "https://doi.org/10.1080/00140139.2023.2300954" },

{ title: "Effect of medial foot loading self-practice on lower limb kinematics in young individuals with asymptomatic varus knee alignment",
  meta: "[The Knee 30, 305-313]",
  authors: "Choi, S., Shin, G.",
  tags: ["Knee","Lower limb","Foot loading"],
  href: "https://doi.org/10.1016/j.knee.2021.04.018" },

{ title: "Changes in low back muscle activity and spine kinematics in response to smartphone use during walking",
  meta: "[Spine 46(7), E426-E432]",
  authors: "Choi, S., Kim, M., Kim, E., Shin, G.",
  tags: ["Smartphone","Walking","Low back","Spine"],
  href: "https://doi.org/10.1097/BRS.0000000000003808" },

{ title: "Performance of ground-level signal detection when using a phone while walking",
  meta: "[Accident Analysis and Prevention 151, 105909]",
  authors: "Kim, E., Kim, H., Kwon, Y., Choi, S., Shin, G.",
  tags: ["Perception","Walking","Phone use","Safety"],
  href: "https://doi.org/10.1016/j.aap.2020.105909" },

{ title: "Neck muscular load when using a smartphone in sitting, standing and while walking",
  meta: "[Human Factors 63(5), 868-879]",
  authors: "Yoon, W., Choi, S., Han, H., Shin, G.",
  tags: ["Neck","Smartphone","Posture","Walking"],
  href: "https://doi.org/10.1177/0018720820904237" },

{ title: "Effects of the center of mass of a stick vacuum cleaner on the muscle activities of the upper extremity during floor vacuuming",
  meta: "[Applied Ergonomics 70, 1-5]",
  authors: "Choi, S., Shin, G.",
  tags: ["Ergonomics","Vacuuming","Upper extremity","Shoulder"],
  href: "https://doi.org/10.1016/j.apergo.2018.02.001" },
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