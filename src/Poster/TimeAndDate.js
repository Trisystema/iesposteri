"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var lucide_react_1 = require("lucide-react");
var TimeAndDate_module_css_1 = require("./TimeAndDate.module.css");
var TimeAndDate = function (_a) {
    var datetime = _a.datetime, language = _a.language;
    var date = new Date(datetime || '1970-01-01');
    var getLocale = function (language) { return language === "srb" ? "sr-RS" : "en-US"; };
    var t_options = {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'CET',
        timeZoneName: 'short'
    };
    var d_weekday = {
        weekday: 'long'
    };
    var d_options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: TimeAndDate_module_css_1.default.timeAndDate, children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(lucide_react_1.Calendar, {}) }), (0, jsx_runtime_1.jsx)("li", { children: date.toLocaleDateString(getLocale(language), d_weekday).toUpperCase() }), (0, jsx_runtime_1.jsx)("li", { children: date.toLocaleDateString(getLocale(language), d_options) }), (0, jsx_runtime_1.jsx)("li", { children: date.toLocaleTimeString(getLocale(language), t_options) })] }) }));
};
exports.default = TimeAndDate;
