// src/pages/Contact.tsx
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | OEB LAB";
  }, []);

  return (
    <div className="page contact-page">
      {/* ===== HERO ===== */}
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
            <h1 className="hero-title glow">Contact</h1>
          </div>
        </div>
      </section>

      {/* ===== CONTACT INFO ===== */}
      <section className="section-pad">
        <div className="container text-center">
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            궁금한 사항이 있다면 언제든지 아래의 메일로 연락바랍니다. 
            

            
            If you have any questions, or would like to
            learn more about our research, feel free to reach out to us using
            the email below.
          </p>

          <div className="mt-8">
            <a
              href="mailto:skylineveryday@inu.ac.kr"
              className="text-2xl font-medium underline-offset-4 hover:underline break-all"
            >
              skylineveryday@inu.ac.kr
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}