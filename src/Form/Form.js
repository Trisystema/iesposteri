"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    return (<div>
            <scroll_area_1.ScrollArea className="w-full h-full p-4 bg-background text-foreground">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 px-2">
                    <h1 className="text-2xl font-semibold tracking-tight">Генератор постера</h1>
                    <div className="flex items-center gap-2">
                        <label_1.Label htmlFor="app-theme-switch">🌙 Тамни мод</label_1.Label>
                        <switch_1.Switch id="app-theme-switch" checked={appTheme === 'dark'} onCheckedChange={function () { return setAppTheme(appTheme === 'light' ? 'dark' : 'light'); }}/>
                    </div>
                </div>

                <div className="mb-4 p-4 border rounded-md bg-muted text-muted-foreground text-sm">
                    <strong>Markdown подржан:</strong> У телу вести можеш употребити `**bold**`, `*italic*`, `# Headings`, lists (`- item`) и више. Види <a href="https://www.markdownguide.org/cheat-sheet/"><u>овде</u></a>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 max-w-screen-xl mx-auto">
                    <div className="flex flex-col gap-6 w-full lg:w-1/2 max-w-full overflow-hidden">
                        <card_1.Card className="p-6 space-y-6 w-full">
                            <div className="flex flex-col gap-4">
                                <PosterSettings_1.default theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} zoom={zoom} setZoom={setZoom}/>
                                <PosterInputs_1.default {...posterProps}/>
                                <FileUpload_1.default selectedFile={selectedFile} setSelectedFile={setSelectedFile} coop={coop} setCoop={setCoop}/>
                                <ExportButton_1.default />
                            </div>
                        </card_1.Card>
                    </div>

                    <div className="w-full lg:w-1/2 max-w-full overflow-auto flex justify-center items-center">
                        <dialog_1.Dialog>
                            <dialog_1.DialogTrigger asChild>
                                <card_1.Card ref={containerRef} className="overflow-hidden p-4 w-full flex justify-center items-center cursor-pointer">
                                    <div className="relative" style={{ width: "".concat(1600 * scale, "px"), height: "".concat(900 * scale, "px"), overflow: 'hidden' }}>
                                        <div style={{
            width: '1600px',
            height: '900px',
            transform: "scale(".concat(scale, ")"),
            transformOrigin: 'top left',
        }}>
                                            <Poster_1.default {...posterProps} width={1600} height={900}/>
                                        </div>
                                    </div>
                                </card_1.Card>
                            </dialog_1.DialogTrigger>
                            <dialog_1.DialogContent className="bg-background p-0" style={{
            width: '90vw',
            height: '90vh',
            maxWidth: '1600px',
            maxHeight: '900px',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
                                <Poster_1.default {...posterProps} width={1600} height={900}/>
                            </dialog_1.DialogContent>
                        </dialog_1.Dialog>
                    </div>
                </div>
            </scroll_area_1.ScrollArea>
            <ExportPoster_1.default {...posterProps} width={1600} height={900}/>
        </div>);
};
exports.default = Form;
