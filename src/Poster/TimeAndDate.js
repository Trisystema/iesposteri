import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Calendar } from 'lucide-react';
import styles from './TimeAndDate.module.css';
const TimeAndDate = ({ datetime, language }) => {
    const date = new Date(datetime || '1970-01-01');
    const getLocale = (language) => language === "srb" ? "sr-RS" : "en-US";
    const t_options = {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'CET',
        timeZoneName: 'short'
    };
    const d_weekday = {
        weekday: 'long'
    };
    const d_options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return (_jsx("div", { className: styles.timeAndDate, children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(Calendar, {}) }), _jsx("li", { children: date.toLocaleDateString(getLocale(language), d_weekday).toUpperCase() }), _jsx("li", { children: date.toLocaleDateString(getLocale(language), d_options) }), _jsx("li", { children: date.toLocaleTimeString(getLocale(language), t_options) })] }) }));
};
export default TimeAndDate;
