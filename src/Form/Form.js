"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
// src/form/Form.tsx
var react_1 = require("react");
var Poster_1 = require("@/Poster/Poster");
var PosterSettings_1 = require("./PosterSettings");
var PosterInputs_1 = require("./PosterInputs");
var FileUpload_1 = require("./FileUpload");
var ExportButton_1 = require("@/Export/ExportButton");
var card_1 = require("@/components/ui/card");
var scroll_area_1 = require("@/components/ui/scroll-area");
var dialog_1 = require("@/components/ui/dialog");
var switch_1 = require("@/components/ui/switch");
var label_1 = require("@/components/ui/label");
var ExportPoster_1 = require("@/Export/ExportPoster");
var Form = function () {
    var _a = (0, react_1.useState)('dark'), theme = _a[0], setTheme = _a[1];
    var _b = (0, react_1.useState)('srb'), language = _b[0], setLanguage = _b[1];
    var _c = (0, react_1.useState)(function () {
        return localStorage.getItem('appTheme') || 'light';
    }), appTheme = _c[0], setAppTheme = _c[1];
    var _d = (0, react_1.useState)(''), title = _d[0], setTitle = _d[1];
    var _e = (0, react_1.useState)(''), subtitle = _e[0], setSubtitle = _e[1];
    var _f = (0, react_1.useState)(new Date().toISOString().substring(0, 16)), datetime = _f[0], setDatetime = _f[1];
    var _g = (0, react_1.useState)('https://zoom.us'), zlink = _g[0], setZlink = _g[1];
    var _h = (0, react_1.useState)('Свечана сала\nIV спрат\nкабинет 136'), location = _h[0], setLocation = _h[1];
    var _j = (0, react_1.useState)(''), content = _j[0], setContent = _j[1];
    var _k = (0, react_1.useState)(null), selectedFile = _k[0], setSelectedFile = _k[1];
    var _l = (0, react_1.useState)(null), coop = _l[0], setCoop = _l[1];
    var _m = (0, react_1.useState)(true), zoom = _m[0], setZoom = _m[1];
    var containerRef = (0, react_1.useRef)(null);
    var _o = (0, react_1.useState)(1), scale = _o[0], setScale = _o[1];
    (0, react_1.useLayoutEffect)(function () {
        var updateScale = function () {
            var container = containerRef.current;
            if (!container)
                return;
            var maxWidth = container.offsetWidth;
            var baseWidth = 1600;
            var calculated = Math.min(maxWidth / baseWidth, 1);
            setScale(calculated);
        };
        updateScale();
        window.addEventListener('resize', updateScale);
        return function () { return window.removeEventListener('resize', updateScale); };
    }, []);
    (0, react_1.useEffect)(function () {
        document.documentElement.style.setProperty('--primary-color', theme === 'dark' ? '#0b0b2b' : 'white');
        document.documentElement.style.setProperty('--secondary-color', theme === 'dark' ? 'white' : '#0b0b2b');
    }, [theme]);
    (0, react_1.useEffect)(function () {
        document.documentElement.classList.toggle('dark', appTheme === 'dark');
        localStorage.setItem('appTheme', appTheme);
    }, [appTheme]);
    (0, react_1.useEffect)(function () {
        if (language === 'srb') {
            setLocation('Свечана сала\nIV спрат\nкабинет 136');
        }
        else {
            setLocation('Conference Hall\nFloor IV\nRoom 136');
        }
    }, [language]);
    (0, react_1.useEffect)(function () {
        setZoom(zoom);
    }, [zoom]);
    var posterProps = {
        theme: theme,
        setTheme: setTheme,
        language: language,
        setLanguage: setLanguage,
        title: title,
        subtitle: subtitle,
        datetime: datetime,
        zlink: zlink,
        location: location,
        content: content,
        selectedFile: selectedFile,
        coop: coop,
        zoom: zoom,
        setTitle: setTitle,
        setSubtitle: setSubtitle,
        setDatetime: setDatetime,
        setZlink: setZlink,
        setLocation: setLocation,
        setContent: setContent,
        setSelectedFile: setSelectedFile,
        setCoop: setCoop,
        setZoom: setZoom,
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)(scroll_area_1.ScrollArea, { className: "w-full h-full p-4 bg-background text-foreground", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 px-2", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl font-semibold tracking-tight", children: "\u0413\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043F\u043E\u0441\u0442\u0435\u0440\u0430" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2", children: [(0, jsx_runtime_1.jsx)(label_1.Label, { htmlFor: "app-theme-switch", children: "\uD83C\uDF19 \u0422\u0430\u043C\u043D\u0438 \u043C\u043E\u0434" }), (0, jsx_runtime_1.jsx)(switch_1.Switch, { id: "app-theme-switch", checked: appTheme === 'dark', onCheckedChange: function () { return setAppTheme(appTheme === 'light' ? 'dark' : 'light'); } })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-4 p-4 border rounded-md bg-muted text-muted-foreground text-sm", children: [(0, jsx_runtime_1.jsx)("strong", { children: "Markdown \u043F\u043E\u0434\u0440\u0436\u0430\u043D:" }), " \u0423 \u0442\u0435\u043B\u0443 \u0432\u0435\u0441\u0442\u0438 \u043C\u043E\u0436\u0435\u0448 \u0443\u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0438 `**bold**`, `*italic*`, `# Headings`, lists (`- item`) \u0438 \u0432\u0438\u0448\u0435. \u0412\u0438\u0434\u0438 ", (0, jsx_runtime_1.jsx)("a", { href: "https://www.markdownguide.org/cheat-sheet/", children: (0, jsx_runtime_1.jsx)("u", { children: "\u043E\u0432\u0434\u0435" }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col lg:flex-row gap-6 max-w-screen-xl mx-auto", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex flex-col gap-6 w-full lg:w-1/2 max-w-full overflow-hidden", children: (0, jsx_runtime_1.jsx)(card_1.Card, { className: "p-6 space-y-6 w-full", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-4", children: [(0, jsx_runtime_1.jsx)(PosterSettings_1.default, { theme: theme, setTheme: setTheme, language: language, setLanguage: setLanguage, zoom: zoom, setZoom: setZoom }), (0, jsx_runtime_1.jsx)(PosterInputs_1.default, __assign({}, posterProps)), (0, jsx_runtime_1.jsx)(FileUpload_1.default, { selectedFile: selectedFile, setSelectedFile: setSelectedFile, coop: coop, setCoop: setCoop }), (0, jsx_runtime_1.jsx)(ExportButton_1.default, {})] }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "w-full lg:w-1/2 max-w-full overflow-auto flex justify-center items-center", children: (0, jsx_runtime_1.jsxs)(dialog_1.Dialog, { children: [(0, jsx_runtime_1.jsx)(dialog_1.DialogTrigger, { asChild: true, children: (0, jsx_runtime_1.jsx)(card_1.Card, { ref: containerRef, className: "overflow-hidden p-4 w-full flex justify-center items-center cursor-pointer", children: (0, jsx_runtime_1.jsx)("div", { className: "relative", style: { width: "".concat(1600 * scale, "px"), height: "".concat(900 * scale, "px"), overflow: 'hidden' }, children: (0, jsx_runtime_1.jsx)("div", { style: {
                                                            width: '1600px',
                                                            height: '900px',
                                                            transform: "scale(".concat(scale, ")"),
                                                            transformOrigin: 'top left',
                                                        }, children: (0, jsx_runtime_1.jsx)(Poster_1.default, __assign({}, posterProps, { width: 1600, height: 900 })) }) }) }) }), (0, jsx_runtime_1.jsx)(dialog_1.DialogContent, { className: "bg-background p-0", style: {
                                                width: '90vw',
                                                height: '90vh',
                                                maxWidth: '1600px',
                                                maxHeight: '900px',
                                                margin: 'auto',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }, children: (0, jsx_runtime_1.jsx)(Poster_1.default, __assign({}, posterProps, { width: 1600, height: 900 })) })] }) })] })] }), (0, jsx_runtime_1.jsx)(ExportPoster_1.default, __assign({}, posterProps, { width: 1600, height: 900 }))] }));
};
exports.default = Form;
