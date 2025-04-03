"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
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
    return (<div className={showCoop ? IESLogo_module_css_1.default.dualLogo : IESLogo_module_css_1.default.singleLogo}>
      <div className={IESLogo_module_css_1.default.dualImageContainer}>
        <img src={logoImage} alt="IES Logo"/>
      </div>
      {showCoop && (<div className={IESLogo_module_css_1.default.dualImageContainer}>
          <img src={coop} alt="Partnerski Logo"/>
        </div>)}
    </div>);
};
exports.default = IESLogo;
