import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MapPin } from 'lucide-react';
import styles from './Location.module.css';
const Location = ({ location }) => {
    const lines = location.split('\n').filter(line => line.trim() !== '');
    return (_jsx("div", { className: styles.location, children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(MapPin, {}) }), lines.map((line, idx) => (_jsx("li", { children: line }, idx)))] }) }));
};
export default Location;
