import { PosterData } from "./poster";

export interface PosterFormData extends PosterData {
    setTheme: (theme: Theme) => void;
    setLanguage: (language: Language) => void;
    setTitle: (val: string) => void;
    setSubtitle: (val: string) => void;
    setDatetime: (val: string) => void;
    setZlink: (val: string) => void;
    setLocation: (val: string) => void;
    setContent: (val: string) => void;
    setSelectedFile: (file: string | null) => void;
    setCoop: (file: string | null) => void;  
  }
  