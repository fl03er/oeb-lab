import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/Contact.tsx
import { useEffect } from "react";
export default function Contact() {
    useEffect(() => {
        document.title = "Contact | OEB LAB";
    }, []);
    return (_jsxs("div", { className: "page contact-page", children: [_jsxs("section", { className: "hero hero--page", children: [_jsx("video", { className: "hero-video", src: "/video2.mp4", autoPlay: true, muted: true, loop: true, playsInline: true }), _jsx("div", { className: "hero-inner", children: _jsx("div", { className: "hero-copy", children: _jsx("h1", { className: "hero-title glow", children: "Contact" }) }) })] }), _jsx("section", { className: "section-pad", children: _jsxs("div", { className: "container text-center", children: [_jsx("p", { className: "text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed", children: "\uAD81\uAE08\uD55C \uC0AC\uD56D\uC774 \uC788\uB2E4\uBA74 \uC5B8\uC81C\uB4E0\uC9C0 \uC544\uB798\uC758 \uBA54\uC77C\uB85C \uC5F0\uB77D\uBC14\uB78D\uB2C8\uB2E4. If you have any questions, or would like to learn more about our research, feel free to reach out to us using the email below." }), _jsx("div", { className: "mt-8", children: _jsx("a", { href: "mailto:skylineveryday@inu.ac.kr", className: "text-2xl font-medium underline-offset-4 hover:underline break-all", children: "skylineveryday@inu.ac.kr" }) })] }) })] }));
}
