import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
const AREAS = [
    {
        title: "Ergonomics",
        desc: "We focus on optimizing interactions between people and their environment to improve efficiency, safety, and well-being.",
    },
    {
        title: "Biomechanics",
        desc: "The application of biological and medical principles to solve health-related problems, often involving engineering and technology. It includes human biology, disease mechanisms, and development of medical devices, therapies, and diagnostics.",
    },
    {
        title: "Occupational Health & Safety",
        desc: "We focus on protecting employee well-being in the workplace through practices, regulations, and strategies to prevent injuries, illnesses, and fatalities.",
    },
    {
        title: "Human-Centered Product Design & Evaluation",
        desc: "We create user-friendly products/services by prioritizing user needs, behaviors, and preferences throughout the design and development process.",
    },
];
export default function Research() {
    useEffect(() => {
        document.title = "Research | OEB LAB";
    }, []);
    return (_jsxs("div", { className: "page research-page", children: [_jsxs("section", { className: "hero hero--page", children: [_jsx("video", { className: "hero-video", src: "/video2.mp4", autoPlay: true, muted: true, loop: true, playsInline: true }), _jsx("div", { className: "hero-inner", children: _jsx("div", { className: "hero-copy", children: _jsx("h1", { className: "hero-title glow", children: "Research" }) }) })] }), _jsx("section", { className: "features section-pad", children: _jsx("div", { className: "container", children: _jsx("div", { className: "grid-2", children: AREAS.map((a) => (_jsxs("div", { className: "feature", children: [_jsx("h2", { children: a.title }), _jsx("p", { children: a.desc })] }, a.title))) }) }) })] }));
}
