import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Home() {
    return (_jsxs("main", { children: [_jsxs("section", { className: "hero", style: { position: "relative", overflow: "hidden" }, children: [_jsx("video", { className: "hero-video", style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            zIndex: 0,
                        }, autoPlay: true, muted: true, playsInline: true, loop: true, preload: "metadata", "aria-hidden": "true", children: _jsx("source", { src: "/video.mp4", type: "video/mp4" }) }), _jsx("div", { className: "hero-overlay", style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "rgba(0,0,0,0.45)",
                            zIndex: 1,
                        } }), _jsx("div", { className: "hero-inner", style: {
                            position: "relative",
                            zIndex: 2
                        }, children: _jsxs("div", { className: "hero-copy", children: [_jsxs("h1", { className: "hero-title glow", children: [_jsx("span", { className: "nowrap-md", children: "Occupational Ergonomics and\u00A0Biomechanics" }), _jsx("br", {}), "Laboratory."] }), _jsxs("p", { className: "hero-sub", children: ["Industrial & Management Engineering", _jsx("br", {}), "Incheon National University"] })] }) })] }), _jsx("section", { className: "features", children: _jsxs("div", { className: "container grid-2", children: [_jsxs("article", { className: "feature", children: [_jsx("h2", { children: "Ergonomics" }), _jsx("p", { children: "We focus on optimizing interactions between people and their environment to improve efficiency, safety, and well-being." })] }), _jsxs("article", { className: "feature", children: [_jsx("h2", { children: "Biomechanics" }), _jsx("p", { children: "The application of biological and medical principles to solve health-related problems, often involving engineering and technology. It encompasses a wide range of fields, including the study of human biology, disease mechanisms, and the development of medical devices, therapies, and diagnostic tools." })] }), _jsxs("article", { className: "feature", children: [_jsx("h2", { children: "Occupational Health & Safety" }), _jsx("p", { children: "We focus on protecting the well-being of employees in the workplace. It encompasses practices, regulations, and strategies aimed at preventing workplace injuries, illnesses, and fatalities." })] }), _jsxs("article", { className: "feature", children: [_jsxs("h2", { children: ["Human-Centered Product", _jsx("br", {}), "Design & Evaluation"] }), _jsx("p", { children: "We create user-friendly products and services through an approach that prioritizes understanding user needs, behaviors, and preferences across the entire design cycle." })] })] }) })] }));
}
