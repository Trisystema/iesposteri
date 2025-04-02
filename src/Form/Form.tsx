// src/form/Form.tsx
import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { PosterFormData as PosterData } from '@/types/posterForm';
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
import ExportPoster from '@/Export/ExportPoster'

const Form: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const [language, setLanguage] = useState<'srb' | 'eng'>('srb');
    const [appTheme, setAppTheme] = useState<'light' | 'dark'>(() => {
        return (localStorage.getItem('appTheme') as 'light' | 'dark') || 'light';
    });

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [datetime, setDatetime] = useState(new Date().toISOString().substring(0, 16));
    const [zlink, setZlink] = useState('https://zoom.us');
    const [location, setLocation] = useState('Свечана сала\nIV спрат\nкабинет 136');
    const [content, setContent] = useState('');
    const [selectedFile, setSelectedFile] = useState<string | null>(null);
    const [coop, setCoop] = useState<string | null>(null);
    const [zoom, setZoom] = useState<boolean>(true);

    const containerRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);

    useLayoutEffect(() => {
        const updateScale = () => {
            const container = containerRef.current;
            if (!container) return;
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
        } else {
            setLocation('Conference Hall\nFloor IV\nRoom 136');
        }
    }, [language]);

    useEffect(() => {
        setZoom(zoom)
    }, [zoom]);

    const posterProps: Omit<PosterData, "height" | "width"> = {
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

    return (
        <div>
            <ScrollArea className="w-full h-full p-4 bg-background text-foreground">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 px-2">
                    <h1 className="text-2xl font-semibold tracking-tight">Генератор постера</h1>
                    <div className="flex items-center gap-2">
                        <Label htmlFor="app-theme-switch">🌙 Тамни мод</Label>
                        <Switch
                            id="app-theme-switch"
                            checked={appTheme === 'dark'}
                            onCheckedChange={() => setAppTheme(appTheme === 'light' ? 'dark' : 'light')}
                        />
                    </div>
                </div>

                <div className="mb-4 p-4 border rounded-md bg-muted text-muted-foreground text-sm">
                    <strong>Markdown подржан:</strong> У телу вести можеш употребити `**bold**`, `*italic*`, `# Headings`, lists (`- item`) и више. Види <a href="https://www.markdownguide.org/cheat-sheet/"><u>овде</u></a>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 max-w-screen-xl mx-auto">
                    <div className="flex flex-col gap-6 w-full lg:w-1/2 max-w-full overflow-hidden">
                        <Card className="p-6 space-y-6 w-full">
                            <div className="flex flex-col gap-4">
                                <PosterSettings theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} zoom={zoom} setZoom={setZoom} />
                                <PosterFormInputs {...posterProps} />
                                <FileUpload selectedFile={selectedFile} setSelectedFile={setSelectedFile} coop={coop} setCoop={setCoop} />
                                <ExportButton />
                            </div>
                        </Card>
                    </div>

                    <div className="w-full lg:w-1/2 max-w-full overflow-auto flex justify-center items-center">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Card ref={containerRef} className="overflow-hidden p-4 w-full flex justify-center items-center cursor-pointer">
                                    <div
                                        className="relative"
                                        style={{ width: `${1600 * scale}px`, height: `${900 * scale}px`, overflow: 'hidden' }}
                                    >
                                        <div
                                            style={{
                                                width: '1600px',
                                                height: '900px',
                                                transform: `scale(${scale})`,
                                                transformOrigin: 'top left',
                                            }}
                                        >
                                            <Poster {...posterProps} width={1600} height={900} />
                                        </div>
                                    </div>
                                </Card>
                            </DialogTrigger>
                            <DialogContent
                                className="bg-background p-0"
                                style={{
                                    width: '90vw',
                                    height: '90vh',
                                    maxWidth: '1600px',
                                    maxHeight: '900px',
                                    margin: 'auto',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Poster {...posterProps} width={1600} height={900} />
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </ScrollArea>
            <ExportPoster {...posterProps} width={1600} height={900} />
        </div>
    );
};

export default Form;
