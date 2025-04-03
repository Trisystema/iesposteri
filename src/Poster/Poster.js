import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ReactMarkdown from 'react-markdown';
import Colophon from './Colophon';
import ContentImage from './ContentImage';
import Sidebar from './Sidebar';
import styles from './Poster.module.css';
const Poster = (props) => {
    return (_jsxs("div", { className: styles.poster, style: { width: props.width, height: props.height, maxWidth: "100%", maxHeight: "auto" }, children: [_jsx(Sidebar, { language: props.language, theme: props.theme, zlink: props.zlink, location: props.location, datetime: props.datetime, coop: props.coop, zoom: props.zoom }), _jsxs("div", { className: styles.body, children: [_jsxs("div", { className: styles.upperBody, children: [_jsxs("div", { className: styles.bodyTitles, children: [_jsxs("h3", { className: styles.subtitle, children: [" ", props.subtitle, " "] }), _jsxs("h1", { className: styles.title, children: [" ", props.title, " "] })] }), _jsxs("div", { className: styles.contentContainer, children: [_jsx("div", { className: styles.contentText, children: _jsx(ReactMarkdown, { children: props.content }) }), _jsx(ContentImage, { selectedFile: props.selectedFile })] })] }), _jsx("div", { className: styles.footer, style: { all: 'initial' }, children: _jsx(Colophon, { language: props.language }) })] })] }));
};
export default Poster;
