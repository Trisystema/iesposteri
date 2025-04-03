"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Poster_1 = require("@/Poster/Poster");
var ExportPoster = function (_a) {
    var _b = _a.width, width = _b === void 0 ? 1600 : _b, _c = _a.height, height = _c === void 0 ? 900 : _c, posterProps = __rest(_a, ["width", "height"]);
    return (<div id="export-poster" className={"\n        fixed top-[-9999px] left-[-9999px] \n        bg-white overflow-hidden z-[9999] isolate\n        [&_*]:border-none [&_*]:outline-none [&_*]:shadow-none\n      "} style={{
            width: "".concat(width, "px"),
            height: "".concat(height, "px"),
        }}>
      <Poster_1.default {...posterProps} width={width} height={height}/>
    </div>);
};
exports.default = ExportPoster;
