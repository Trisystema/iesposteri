import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/form/Form.tsx
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import Poster from '@/Poster/Poster';
import PosterSettings from './PosterSettings';
import PosterFormInputs from './PosterInputs';
import FileUpload from './FileUpload';
import ExportButton from '@/Export/ExportButton';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import ExportPoster from '@/Export/ExportPoster';
const Form = () => {
    const [theme, setTheme] = useState('dark');
    const [language, setLanguage] = useState('srb');
    const [appTheme, setAppTheme] = useState(() => {
        return localStorage.getItem('appTheme') || 'light';
    });
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [datetime, setDatetime] = useState(new Date().toISOString().substring(0, 16));
    const [zlink, setZlink] = useState('https://zoom.us');
    const [location, setLocation] = useState('Свечана сала\nIV спрат\nкабинет 136');
    const [content, setContent] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [coop, setCoop] = useState(null);
    const [zoom, setZoom] = useState(true);
    const containerRef = useRef(null);
    const [scale, setScale] = useState(1);
    useLayoutEffect(() => {
        const updateScale = () => {
            const container = containerRef.current;
            if (!container)
                return;
            const maxWidth = container.offsetWidth;
            const baseWidth = 1600;
            const calculated = Math.min(maxWidth / baseWidth, 1);
            setScale(calculated);
        };
        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);
    useEffect(() => {
        document.documentElement.style.setProperty('--primary-color', theme === 'dark' ? '#0b0b2b' : 'white');
        document.documentElement.style.setProperty('--secondary-color', theme === 'dark' ? 'white' : '#0b0b2b');
    }, [theme]);
    useEffect(() => {
        document.documentElement.classList.toggle('dark', appTheme === 'dark');
        localStorage.setItem('appTheme', appTheme);
    }, [appTheme]);
    useEffect(() => {
        if (language === 'srb') {
            setLocation('Свечана сала\nIV спрат\nкабинет 136');
        }
        else {
            setLocation('Conference Hall\nFloor IV\nRoom 136');
        }
    }, [language]);
    useEffect(() => {
        setZoom(zoom);
    }, [zoom]);
    const posterProps = {
        theme,
        setTheme,
        language,
        setLanguage,
        title,
        subtitle,
        datetime,
        zlink,
        location,
        content,
        selectedFile,
        coop,
        zoom,
        setTitle,
        setSubtitle,
        setDatetime,
        setZlink,
        setLocation,
        setContent,
        setSelectedFile,
        setCoop,
        setZoom,
    };
    return (_jsxs("div", { children: [_jsxs(ScrollArea, { className: "w-full h-full p-4 bg-background text-foreground", children: [_jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 px-2", children: [_jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: "\u0413\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043F\u043E\u0441\u0442\u0435\u0440\u0430" }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Label, { htmlFor: "app-theme-switch", children: "\uD83C\uDF19 \u0422\u0430\u043C\u043D\u0438 \u043C\u043E\u0434" }), _jsx(Switch, { id: "app-theme-switch", checked: appTheme === 'dark', onCheckedChange: () => setAppTheme(appTheme === 'light' ? 'dark' : 'light') })] })] }), _jsxs("div", { className: "mb-4 p-4 border rounded-md bg-muted text-muted-foreground text-sm", children: [_jsx("strong", { children: "Markdown \u043F\u043E\u0434\u0440\u0436\u0430\u043D:" }), " \u0423 \u0442\u0435\u043B\u0443 \u0432\u0435\u0441\u0442\u0438 \u043C\u043E\u0436\u0435\u0448 \u0443\u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0438 `**bold**`, `*italic*`, `# Headings`, lists (`- item`) \u0438 \u0432\u0438\u0448\u0435. \u0412\u0438\u0434\u0438 ", _jsx("a", { href: "https://www.markdownguide.org/cheat-sheet/", children: _jsx("u", { children: "\u043E\u0432\u0434\u0435" }) })] }), _jsxs("div", { className: "flex flex-col lg:flex-row gap-6 max-w-screen-xl mx-auto", children: [_jsx("div", { className: "flex flex-col gap-6 w-full lg:w-1/2 max-w-full overflow-hidden", children: _jsx(Card, { className: "p-6 space-y-6 w-full", children: _jsxs("div", { className: "flex flex-col gap-4", children: [_jsx(PosterSettings, { theme: theme, setTheme: setTheme, language: language, setLanguage: setLanguage, zoom: zoom, setZoom: setZoom }), _jsx(PosterFormInputs, { ...posterProps }), _jsx(FileUpload, { selectedFile: selectedFile, setSelectedFile: setSelectedFile, coop: coop, setCoop: setCoop }), _jsx(ExportButton, {})] }) }) }), _jsx("div", { className: "w-full lg:w-1/2 max-w-full overflow-auto flex justify-center items-center", children: _jsxs(Dialog, { children: [_jsx(DialogTrigger, { asChild: true, children: _jsx(Card, { ref: containerRef, className: "overflow-hidden p-4 w-full flex justify-center items-center cursor-pointer", children: _jsx("div", { className: "relative", style: { width: `${1600 * scale}px`, height: `${900 * scale}px`, overflow: 'hidden' }, children: _jsx("div", { style: {
                                                            width: '1600px',
                                                            height: '900px',
                                                            transform: `scale(${scale})`,
                                                            transformOrigin: 'top left',
                                                        }, children: _jsx(Poster, { ...posterProps, width: 1600, height: 900 }) }) }) }) }), _jsx(DialogContent, { className: "bg-background p-0", style: {
                                                width: '90vw',
                                                height: '90vh',
                                                maxWidth: '1600px',
                                                maxHeight: '900px',
                                                margin: 'auto',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }, children: _jsx(Poster, { ...posterProps, width: 1600, height: 900 }) })] }) })] })] }), _jsx(ExportPoster, { ...posterProps, width: 1600, height: 900 })] }));
};
export default Form;
