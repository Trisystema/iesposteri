import * as React from 'react';
import Poster from '@/Poster/Poster';
import { PosterFormData as PosterData } from '@/types/posterForm';

interface ExportPosterProps extends Omit<PosterData, "height" | "width"> {
  width: number;
  height: number;
}

const ExportPoster: React.FC<ExportPosterProps> = ({ 
  width = 1600, 
  height = 900, 
  ...posterProps 
}) => {
  return (
    <div 
      id="export-poster"
      className={`
        fixed top-[-9999px] left-[-9999px] 
        bg-white overflow-hidden z-[9999] isolate
        [&_*]:border-none [&_*]:outline-none [&_*]:shadow-none
      `}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <Poster {...posterProps} width={width} height={height} />
    </div>
  );
};

export default ExportPoster;