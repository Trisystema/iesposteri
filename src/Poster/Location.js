"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var lucide_react_1 = require("lucide-react");
var Location_module_css_1 = require("./Location.module.css");
var Location = function (_a) {
    var location = _a.location;
    var lines = location.split('\n').filter(function (line) { return line.trim() !== ''; });
    return ((0, jsx_runtime_1.jsx)("div", { className: Location_module_css_1.default.location, children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(lucide_react_1.MapPin, {}) }), lines.map(function (line, idx) { return ((0, jsx_runtime_1.jsx)("li", { children: line }, idx)); })] }) }));
};
exports.default = Location;
