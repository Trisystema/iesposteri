"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_markdown_1 = require("react-markdown");
var Colophon_1 = require("./Colophon");
var ContentImage_1 = require("./ContentImage");
var Sidebar_1 = require("./Sidebar");
var Poster_module_css_1 = require("./Poster.module.css");
var Poster = function (props) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: Poster_module_css_1.default.poster, style: { width: props.width, height: props.height, maxWidth: "100%", maxHeight: "auto" }, children: [(0, jsx_runtime_1.jsx)(Sidebar_1.default, { language: props.language, theme: props.theme, zlink: props.zlink, location: props.location, datetime: props.datetime, coop: props.coop, zoom: props.zoom }), (0, jsx_runtime_1.jsxs)("div", { className: Poster_module_css_1.default.body, children: [(0, jsx_runtime_1.jsxs)("div", { className: Poster_module_css_1.default.upperBody, children: [(0, jsx_runtime_1.jsxs)("div", { className: Poster_module_css_1.default.bodyTitles, children: [(0, jsx_runtime_1.jsxs)("h3", { className: Poster_module_css_1.default.subtitle, children: [" ", props.subtitle, " "] }), (0, jsx_runtime_1.jsxs)("h1", { className: Poster_module_css_1.default.title, children: [" ", props.title, " "] })] }), (0, jsx_runtime_1.jsxs)("div", { className: Poster_module_css_1.default.contentContainer, children: [(0, jsx_runtime_1.jsx)("div", { className: Poster_module_css_1.default.contentText, children: (0, jsx_runtime_1.jsx)(react_markdown_1.default, { children: props.content }) }), (0, jsx_runtime_1.jsx)(ContentImage_1.default, { selectedFile: props.selectedFile })] })] }), (0, jsx_runtime_1.jsx)("div", { className: Poster_module_css_1.default.footer, style: { all: 'initial' }, children: (0, jsx_runtime_1.jsx)(Colophon_1.default, { language: props.language }) })] })] }));
};
exports.default = Poster;
