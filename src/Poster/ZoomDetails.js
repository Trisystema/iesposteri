import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { QRCodeSVG } from 'qrcode.react';
import { Presentation } from 'lucide-react';
import styles from "./ZoomDetails.module.css";
const ZoomDetails = ({ theme, zlink }) => {
    const colorScheme = theme === 'dark'
        ? { bgColor: '#0b0b2b', fgColor: 'white' }
        : { bgColor: 'white', fgColor: '#0b0b2b' };
    return (_jsxs("div", { className: styles.zoomDetails, children: [_jsx(Presentation, {}), _jsx(QRCodeSVG, { id: "qr-code", value: zlink || 'null', size: 128, bgColor: colorScheme.bgColor, fgColor: colorScheme.fgColor, includeMargin: false, imageSettings: {
                    src: '/logo_ies_light.png', // ✅ use relative path that works in production
                    height: 24,
                    width: 24,
                    excavate: true
                } })] }));
};
export default ZoomDetails;
