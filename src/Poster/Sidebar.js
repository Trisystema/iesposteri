"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimeAndDate_1 = require("./TimeAndDate");
var IESLogo_1 = require("./IESLogo");
var ZoomDetails_1 = require("./ZoomDetails");
var Location_1 = require("./Location");
var Sidebar_module_css_1 = require("./Sidebar.module.css");
var Sidebar = function (_a) {
    var coop = _a.coop, theme = _a.theme, datetime = _a.datetime, language = _a.language, location = _a.location, zlink = _a.zlink, zoom = _a.zoom;
    return (<div className={Sidebar_module_css_1.default.sidebar}>
      <IESLogo_1.default coop={coop} theme={theme}/>
      <TimeAndDate_1.default datetime={datetime} language={language}/>
      <Location_1.default location={location}/>
      {zoom ? <ZoomDetails_1.default theme={theme} zlink={zlink}/> : <div style={{ width: 128, height: 128 }}></div>}
    </div>);
};
exports.default = Sidebar;
