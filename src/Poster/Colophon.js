import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Facebook, Twitter, Youtube, Instagram, MapPin, LocateIcon, Mail, Newspaper } from 'lucide-react';
import styles from './Colophon.module.css';
const Colophon = ({ language }) => {
    const info = {
        address: {
            srb: 'Трг Николе Пашића 11, 11000 Београд',
            eng: '11 Trg Nikole Pašića, 11000 Belgrade'
        },
        location: {
            srb: 'III спрат, кабинети 105, 109-115',
            eng: 'Floor III, Rooms 105, 109-115'
        }
    };
    return (_jsxs("div", { className: styles.colophon, children: [_jsxs("div", { className: styles.colophonRow, children: [_jsxs("div", { className: styles.colophonLeft, children: [_jsx(Facebook, { size: 32 }), " @iesbeograd"] }), _jsxs("div", { className: styles.colophonRight, children: [info.address[language], " ", _jsx(MapPin, { size: 32 })] })] }), _jsxs("div", { className: styles.colophonRow, children: [_jsxs("div", { className: styles.colophonLeft, children: [_jsx(Instagram, { size: 32 }), " @iesbeograd"] }), _jsxs("div", { className: styles.colophonRight, children: [info.location[language], " ", _jsx(LocateIcon, { size: 32 })] })] }), _jsxs("div", { className: styles.colophonRow, children: [_jsxs("div", { className: styles.colophonLeft, children: [_jsx(Twitter, { size: 32 }), " @iesbeograd"] }), _jsxs("div", { className: styles.colophonRight, children: ["https://ies.rs ", _jsx(Newspaper, { size: 32 })] })] }), _jsxs("div", { className: styles.colophonRow, children: [_jsxs("div", { className: styles.colophonLeft, children: [_jsx(Youtube, { size: 32 }), " @iesbeograd"] }), _jsxs("div", { className: styles.colophonRight, children: ["tribina@ies.rs ", _jsx(Mail, { size: 32 })] })] })] }));
};
export default Colophon;
