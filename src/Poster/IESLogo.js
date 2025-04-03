import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import lightLogo from '/logo_ies_light.png';
import darkLogo from '/logo_ies_dark.png';
import styles from './IESLogo.module.css';
const isValidImageSrc = (src) => {
    return src.startsWith('data:image') || src.startsWith('http') || src.startsWith('/');
};
const IESLogo = ({ theme, coop }) => {
    const logoImage = theme === 'dark' ? darkLogo : lightLogo;
    const showCoop = typeof coop === 'string' && isValidImageSrc(coop);
    return (_jsxs("div", { className: showCoop ? styles.dualLogo : styles.singleLogo, children: [_jsx("div", { className: styles.dualImageContainer, children: _jsx("img", { src: logoImage, alt: "IES Logo" }) }), showCoop && (_jsx("div", { className: styles.dualImageContainer, children: _jsx("img", { src: coop, alt: "Partnerski Logo" }) }))] }));
};
export default IESLogo;
