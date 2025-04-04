import * as React from 'react';
import { Button } from '@/components/ui/button';
import domtoimage from 'dom-to-image-more';


const ExportButton: React.FC = () => {
  const exportAsPicture = async () => {
    const poster = document.querySelector('#export-poster') as HTMLElement;
    if (!poster) return;


    try {
      // Ensure all images inside are loaded
      await Promise.all(
        Array.from(poster.querySelectorAll('img')).map(
          (img) =>
            new Promise<void>((resolve) => {
              if (img.complete) return resolve();
              img.onload = img.onerror = () => resolve();
            })
        )
      );

      const dataUrl = await domtoimage.toPng(poster, {
        width: 1600,
        height: 900,
        copyDefaultStyles: false, // <== here
      });

      const link = document.createElement('a');
      link.download = `poster_${new Date().toISOString().split('T')[0]}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to export image:', err);
    }
  };

  return <Button onClick={exportAsPicture}>сачувај</Button>;
};

export default ExportButton;
