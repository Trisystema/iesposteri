export interface PosterData {
    width: number | string;
    height: number | string;
    theme: Theme;
    language: Language;
    title: string;
    subtitle: string;
    datetime: string;
    zlink: string;
    location: string;
    content: string;
    selectedFile: string | null;
    coop: string | null;
    zoom: boolean;
}
