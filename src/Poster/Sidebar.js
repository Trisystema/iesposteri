import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TimeAndDate from './TimeAndDate';
import IESLogo from './IESLogo';
import ZoomDetails from './ZoomDetails';
import Location from './Location';
import styles from './Sidebar.module.css';
const Sidebar = ({ coop, theme, datetime, language, location, zlink, zoom }) => {
    return (_jsxs("div", { className: styles.sidebar, children: [_jsx(IESLogo, { coop: coop, theme: theme }), _jsx(TimeAndDate, { datetime: datetime, language: language }), _jsx(Location, { location: location }), zoom ? _jsx(ZoomDetails, { theme: theme, zlink: zlink }) : _jsx("div", { style: { width: 128, height: 128 } })] }));
};
export default Sidebar;
