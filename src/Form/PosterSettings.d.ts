import * as React from 'react';
import { PosterFormData } from '@/types/posterForm';
declare const PosterSettings: React.FC<Pick<PosterFormData, 'theme' | 'language' | 'setTheme' | 'setLanguage' | 'zoom' | 'setZoom'>>;
export default PosterSettings;
