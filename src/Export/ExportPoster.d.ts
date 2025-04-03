import * as React from 'react';
import { PosterFormData as PosterData } from '@/types/posterForm';
interface ExportPosterProps extends Omit<PosterData, "height" | "width"> {
    width: number;
    height: number;
}
declare const ExportPoster: React.FC<ExportPosterProps>;
export default ExportPoster;
