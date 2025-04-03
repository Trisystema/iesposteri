import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from '@/components/ui/button';
import domtoimage from 'dom-to-image-more';
const ExportButton = () => {
    const exportAsPicture = async () => {
        const poster = document.querySelector('#export-poster');
        if (!poster)
            return;
        try {
            // Ensure all images inside are loaded
            await Promise.all(Array.from(poster.querySelectorAll('img')).map((img) => new Promise((resolve) => {
                if (img.complete)
                    return resolve();
                img.onload = img.onerror = () => resolve();
            })));
            const dataUrl = await domtoimage.toSvg(poster, {
                width: 1600,
                height: 900,
                copyDefaultStyles: false, // <== here
            });
            const link = document.createElement('a');
            link.download = `poster_${new Date().toISOString().split('T')[0]}.svg`;
            link.href = dataUrl;
            link.click();
        }
        catch (err) {
            console.error('Failed to export image:', err);
        }
    };
    return _jsx(Button, { onClick: exportAsPicture, children: "\u0441\u0430\u0447\u0443\u0432\u0430\u0458" });
};
export default ExportButton;
