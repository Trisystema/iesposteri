"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var qrcode_react_1 = require("qrcode.react");
var lucide_react_1 = require("lucide-react");
var ZoomDetails_module_css_1 = require("./ZoomDetails.module.css");
var ZoomDetails = function (_a) {
    var theme = _a.theme, zlink = _a.zlink;
    var colorScheme = theme === 'dark'
        ? { bgColor: '#0b0b2b', fgColor: 'white' }
        : { bgColor: 'white', fgColor: '#0b0b2b' };
    return ((0, jsx_runtime_1.jsxs)("div", { className: ZoomDetails_module_css_1.default.zoomDetails, children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Presentation, {}), (0, jsx_runtime_1.jsx)(qrcode_react_1.QRCodeSVG, { id: "qr-code", value: zlink || 'null', size: 128, bgColor: colorScheme.bgColor, fgColor: colorScheme.fgColor, includeMargin: false, imageSettings: {
                    src: '/logo_ies_light.png', // ✅ use relative path that works in production
                    height: 24,
                    width: 24,
                    excavate: true
                } })] }));
};
exports.default = ZoomDetails;
