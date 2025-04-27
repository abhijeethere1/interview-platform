(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/ui/stars-background.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "StarsBackground": (()=>StarsBackground)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const StarsBackground = ({ starDensity = 0.00015, allStarsTwinkle = true, twinkleProbability = 0.7, minTwinkleSpeed = 0.5, maxTwinkleSpeed = 1, className })=>{
    _s();
    const [stars, setStars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const generateStars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StarsBackground.useCallback[generateStars]": (width, height)=>{
            const area = width * height;
            const numStars = Math.floor(area * starDensity);
            return Array.from({
                length: numStars
            }, {
                "StarsBackground.useCallback[generateStars]": ()=>{
                    const shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability;
                    return {
                        x: Math.random() * width,
                        y: Math.random() * height,
                        radius: Math.random() * 0.05 + 0.5,
                        opacity: Math.random() * 0.5 + 0.5,
                        twinkleSpeed: shouldTwinkle ? minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed) : null
                    };
                }
            }["StarsBackground.useCallback[generateStars]"]);
        }
    }["StarsBackground.useCallback[generateStars]"], [
        starDensity,
        allStarsTwinkle,
        twinkleProbability,
        minTwinkleSpeed,
        maxTwinkleSpeed
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StarsBackground.useEffect": ()=>{
            const updateStars = {
                "StarsBackground.useEffect.updateStars": ()=>{
                    if (canvasRef.current) {
                        const canvas = canvasRef.current;
                        const ctx = canvas.getContext("2d");
                        if (!ctx) return;
                        const { width, height } = canvas.getBoundingClientRect();
                        canvas.width = width;
                        canvas.height = height;
                        setStars(generateStars(width, height));
                    }
                }
            }["StarsBackground.useEffect.updateStars"];
            updateStars();
            const resizeObserver = new ResizeObserver(updateStars);
            if (canvasRef.current) {
                resizeObserver.observe(canvasRef.current);
            }
            return ({
                "StarsBackground.useEffect": ()=>{
                    if (canvasRef.current) {
                        resizeObserver.unobserve(canvasRef.current);
                    }
                }
            })["StarsBackground.useEffect"];
        }
    }["StarsBackground.useEffect"], [
        starDensity,
        allStarsTwinkle,
        twinkleProbability,
        minTwinkleSpeed,
        maxTwinkleSpeed,
        generateStars
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StarsBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            let animationFrameId;
            const render = {
                "StarsBackground.useEffect.render": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    stars.forEach({
                        "StarsBackground.useEffect.render": (star)=>{
                            ctx.beginPath();
                            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                            ctx.fill();
                            if (star.twinkleSpeed !== null) {
                                star.opacity = 0.5 + Math.abs(Math.sin(Date.now() * 0.001 / star.twinkleSpeed) * 0.5);
                            }
                        }
                    }["StarsBackground.useEffect.render"]);
                    animationFrameId = requestAnimationFrame(render);
                }
            }["StarsBackground.useEffect.render"];
            render();
            return ({
                "StarsBackground.useEffect": ()=>{
                    cancelAnimationFrame(animationFrameId);
                }
            })["StarsBackground.useEffect"];
        }
    }["StarsBackground.useEffect"], [
        stars
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full w-full absolute inset-0", className)
    }, void 0, false, {
        fileName: "[project]/components/ui/stars-background.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
};
_s(StarsBackground, "50/0E8QIGjoqR59aWisQHL7DxHk=");
_c = StarsBackground;
var _c;
__turbopack_context__.k.register(_c, "StarsBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/shooting-stars.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ShootingStars": (()=>ShootingStars)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const getRandomStartPoint = ()=>{
    const side = Math.floor(Math.random() * 4);
    const offset = Math.random() * window.innerWidth;
    switch(side){
        case 0:
            return {
                x: offset,
                y: 0,
                angle: 45
            };
        case 1:
            return {
                x: window.innerWidth,
                y: offset,
                angle: 135
            };
        case 2:
            return {
                x: offset,
                y: window.innerHeight,
                angle: 225
            };
        case 3:
            return {
                x: 0,
                y: offset,
                angle: 315
            };
        default:
            return {
                x: 0,
                y: 0,
                angle: 45
            };
    }
};
const ShootingStars = ({ minSpeed = 10, maxSpeed = 30, minDelay = 800, maxDelay = 2500, starColor = "#9E00FF", trailColor = "#2EB9DF", starWidth = 10, starHeight = 1, className })=>{
    _s();
    const [star, setStar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShootingStars.useEffect": ()=>{
            const createStar = {
                "ShootingStars.useEffect.createStar": ()=>{
                    const { x, y, angle } = getRandomStartPoint();
                    const newStar = {
                        id: Date.now(),
                        x,
                        y,
                        angle,
                        scale: 1,
                        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
                        distance: 0
                    };
                    setStar(newStar);
                    const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
                    setTimeout(createStar, randomDelay);
                }
            }["ShootingStars.useEffect.createStar"];
            createStar();
            return ({
                "ShootingStars.useEffect": ()=>{}
            })["ShootingStars.useEffect"];
        }
    }["ShootingStars.useEffect"], [
        minSpeed,
        maxSpeed,
        minDelay,
        maxDelay
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShootingStars.useEffect": ()=>{
            const moveStar = {
                "ShootingStars.useEffect.moveStar": ()=>{
                    if (star) {
                        setStar({
                            "ShootingStars.useEffect.moveStar": (prevStar)=>{
                                if (!prevStar) return null;
                                const newX = prevStar.x + prevStar.speed * Math.cos(prevStar.angle * Math.PI / 180);
                                const newY = prevStar.y + prevStar.speed * Math.sin(prevStar.angle * Math.PI / 180);
                                const newDistance = prevStar.distance + prevStar.speed;
                                const newScale = 1 + newDistance / 100;
                                if (newX < -20 || newX > window.innerWidth + 20 || newY < -20 || newY > window.innerHeight + 20) {
                                    return null;
                                }
                                return {
                                    ...prevStar,
                                    x: newX,
                                    y: newY,
                                    distance: newDistance,
                                    scale: newScale
                                };
                            }
                        }["ShootingStars.useEffect.moveStar"]);
                    }
                }
            }["ShootingStars.useEffect.moveStar"];
            const animationFrame = requestAnimationFrame(moveStar);
            return ({
                "ShootingStars.useEffect": ()=>cancelAnimationFrame(animationFrame)
            })["ShootingStars.useEffect"];
        }
    }["ShootingStars.useEffect"], [
        star
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: svgRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full h-full absolute inset-0", className),
        children: [
            star && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: star.x,
                y: star.y,
                width: starWidth * star.scale,
                height: starHeight,
                fill: "url(#gradient)",
                transform: `rotate(${star.angle}, ${star.x + starWidth * star.scale / 2}, ${star.y + starHeight / 2})`
            }, star.id, false, {
                fileName: "[project]/components/ui/shooting-stars.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "gradient",
                    x1: "0%",
                    y1: "0%",
                    x2: "100%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            style: {
                                stopColor: trailColor,
                                stopOpacity: 0
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ui/shooting-stars.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            style: {
                                stopColor: starColor,
                                stopOpacity: 1
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/ui/shooting-stars.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/shooting-stars.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/shooting-stars.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/shooting-stars.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
};
_s(ShootingStars, "7Ikn3hdHqdmQk/sl7XaPR8O9zfg=");
_c = ShootingStars;
var _c;
__turbopack_context__.k.register(_c, "ShootingStars");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_ui_e98b9147._.js.map