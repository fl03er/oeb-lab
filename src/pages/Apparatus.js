import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
// 🔧 assets에서 직접 import (파일명에 맞춰 조정)
import emgPng from "../assets/delsys-trigno.png";
import goproPng from "../assets/gopro.png";
import djiPng from "../assets/djiaction2.png";
import iphonePng from "../assets/iphone12pro1.png";
const GEARS = [
    { name: "Delsys Trigno EMG", subtitle: "무선 근전도(EMG) 측정 모듈", img: emgPng },
    { name: "GoPro Hero 12", subtitle: "액션 카메라 · 슬로모션/광각 촬영", img: goproPng },
    { name: "DJI Action 2", subtitle: "웨어러블 액션 카메라 · 자석 마운트", img: djiPng },
    { name: "iPhone 12 Pro", subtitle: "고속 프레임 영상 · OpenCap 데이터 수집", img: iphonePng },
];
export default function Apparatus() {
    useEffect(() => {
        document.title = "Apparatus | OEB LAB";
    }, []);
    return (_jsxs("main", { children: [_jsxs("section", { className: "hero hero--page", children: [_jsx("video", { className: "hero-video", src: "/video2.mp4" // public/video2.mp4
                        , autoPlay: true, muted: true, loop: true, playsInline: true }), _jsx("div", { className: "hero-overlay" }), _jsx("div", { className: "hero-inner", children: _jsxs("div", { className: "hero-copy", children: [_jsx("h1", { className: "hero-title glow", children: "Apparatus" }), _jsx("p", { className: "hero-sub", children: "Instruments, cameras and mobile devices used in OEB LAB" })] }) })] }), _jsx("section", { className: "features", children: _jsx("div", { className: "container", children: _jsx("div", { className: "gear-grid", children: GEARS.map((g) => (_jsxs("figure", { className: "gear-card", children: [_jsx("div", { className: "gear-thumb", children: g.img ? (_jsx("img", { src: g.img, alt: g.name, loading: "lazy" })) : (_jsx("div", { className: "thumb-fallback" })) }), _jsxs("figcaption", { className: "gear-meta", children: [_jsx("div", { className: "gear-title", children: g.name }), g.subtitle && _jsx("div", { className: "gear-sub", children: g.subtitle })] })] }, g.name))) }) }) })] }));
}
