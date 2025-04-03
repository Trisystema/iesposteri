"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var logo_ies_light_png_1 = require("/logo_ies_light.png");
var logo_ies_dark_png_1 = require("/logo_ies_dark.png");
var IESLogo_module_css_1 = require("./IESLogo.module.css");
var isValidImageSrc = function (src) {
    return src.startsWith('data:image') || src.startsWith('http') || src.startsWith('/');
};
var IESLogo = function (_a) {
    var theme = _a.theme, coop = _a.coop;
    var logoImage = theme === 'dark' ? logo_ies_dark_png_1.default : logo_ies_light_png_1.default;
    var showCoop = typeof coop === 'string' && isValidImageSrc(coop);
    return ((0, jsx_runtime_1.jsxs)("div", { className: showCoop ? IESLogo_module_css_1.default.dualLogo : IESLogo_module_css_1.default.singleLogo, children: [(0, jsx_runtime_1.jsx)("div", { className: IESLogo_module_css_1.default.dualImageContainer, children: (0, jsx_runtime_1.jsx)("img", { src: logoImage, alt: "IES Logo" }) }), showCoop && ((0, jsx_runtime_1.jsx)("div", { className: IESLogo_module_css_1.default.dualImageContainer, children: (0, jsx_runtime_1.jsx)("img", { src: coop, alt: "Partnerski Logo" }) }))] }));
};
exports.default = IESLogo;
