"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lucide_react_1 = require("lucide-react");
var Location_module_css_1 = require("./Location.module.css");
var Location = function (_a) {
    var location = _a.location;
    var lines = location.split('\n').filter(function (line) { return line.trim() !== ''; });
    return (<div className={Location_module_css_1.default.location}>
      <ul>
        <li><lucide_react_1.MapPin /></li>
        {lines.map(function (line, idx) { return (<li key={idx}>{line}</li>); })}
      </ul>
    </div>);
};
exports.default = Location;
