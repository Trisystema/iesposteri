"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var TimeAndDate_1 = require("./TimeAndDate");
var IESLogo_1 = require("./IESLogo");
var ZoomDetails_1 = require("./ZoomDetails");
var Location_1 = require("./Location");
var Sidebar_module_css_1 = require("./Sidebar.module.css");
var Sidebar = function (_a) {
    var coop = _a.coop, theme = _a.theme, datetime = _a.datetime, language = _a.language, location = _a.location, zlink = _a.zlink, zoom = _a.zoom;
    return ((0, jsx_runtime_1.jsxs)("div", { className: Sidebar_module_css_1.default.sidebar, children: [(0, jsx_runtime_1.jsx)(IESLogo_1.default, { coop: coop, theme: theme }), (0, jsx_runtime_1.jsx)(TimeAndDate_1.default, { datetime: datetime, language: language }), (0, jsx_runtime_1.jsx)(Location_1.default, { location: location }), zoom ? (0, jsx_runtime_1.jsx)(ZoomDetails_1.default, { theme: theme, zlink: zlink }) : (0, jsx_runtime_1.jsx)("div", { style: { width: 128, height: 128 } })] }));
};
exports.default = Sidebar;
