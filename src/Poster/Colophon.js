"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var lucide_react_1 = require("lucide-react");
var Colophon_module_css_1 = require("./Colophon.module.css");
var Colophon = function (_a) {
    var language = _a.language;
    var info = {
        address: {
            srb: 'Трг Николе Пашића 11, 11000 Београд',
            eng: '11 Trg Nikole Pašića, 11000 Belgrade'
        },
        location: {
            srb: 'III спрат, кабинети 105, 109-115',
            eng: 'Floor III, Rooms 105, 109-115'
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: Colophon_module_css_1.default.colophon, children: [(0, jsx_runtime_1.jsxs)("div", { className: Colophon_module_css_1.default.colophonRow, children: [(0, jsx_runtime_1.jsxs)("div", { className: Colophon_module_css_1.default.colophonLeft, children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Facebook, { size: 32 }), " @iesbeograd"] }), (0, jsx_runtime_1.jsxs)("div", { className: Colophon_module_css_1.default.colophonRight, children: [info.address[language], " ", (0, jsx_runtime_1.jsx)(lucide_react_1.MapPin, { size: 32 })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: Colophon_module_css_1.default.colophonRow, children: [(0, jsx_runtime_1.jsxs)("div", { className: Colophon_module_css_1.default.colophonLeft, children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Instagram, { size: 32 }), " @iesbeograd"] }), (0, jsx_runtime_1.jsxs)("div", { className: Colophon_module_css_1.default.colophonRight, children: [info.location[language], " ", (0, jsx_runtime_1.jsx)(lucide_react_1.LocateIcon, { size: 32 })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: Colophon_module_css_1.default.colophonRow, children: [(0, jsx_runtime_1.jsxs)("div", { className: Colophon_module_css_1.default.colophonLeft, children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Twitter, { size: 32 }), " @iesbeograd"] }), (0, jsx_runtime_1.jsxs)("div", { className: Colophon_module_css_1.default.colophonRight, children: ["https://ies.rs ", (0, jsx_runtime_1.jsx)(lucide_react_1.Newspaper, { size: 32 })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: Colophon_module_css_1.default.colophonRow, children: [(0, jsx_runtime_1.jsxs)("div", { className: Colophon_module_css_1.default.colophonLeft, children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Youtube, { size: 32 }), " @iesbeograd"] }), (0, jsx_runtime_1.jsxs)("div", { className: Colophon_module_css_1.default.colophonRight, children: ["tribina@ies.rs ", (0, jsx_runtime_1.jsx)(lucide_react_1.Mail, { size: 32 })] })] })] }));
};
exports.default = Colophon;
