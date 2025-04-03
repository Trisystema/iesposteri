"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var input_1 = require("@/components/ui/input");
var textarea_1 = require("@/components/ui/textarea");
var label_1 = require("@/components/ui/label");
var PosterFormInputs = function (_a) {
    var title = _a.title, setTitle = _a.setTitle, subtitle = _a.subtitle, setSubtitle = _a.setSubtitle, datetime = _a.datetime, setDatetime = _a.setDatetime, zlink = _a.zlink, setZlink = _a.setZlink, location = _a.location, setLocation = _a.setLocation, content = _a.content, setContent = _a.setContent;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "poster-form-inputs space-y-4", children: [(0, jsx_runtime_1.jsx)(label_1.Label, { children: "\u041D\u0430\u0441\u043B\u043E\u0432" }), (0, jsx_runtime_1.jsx)(input_1.Input, { type: "text", value: title, onChange: function (e) { return setTitle(e.target.value); } }), (0, jsx_runtime_1.jsx)(label_1.Label, { children: "\u041F\u043E\u0434\u043D\u0430\u0441\u043B\u043E\u0432" }), (0, jsx_runtime_1.jsx)(input_1.Input, { type: "text", value: subtitle, onChange: function (e) { return setSubtitle(e.target.value); } }), (0, jsx_runtime_1.jsx)(label_1.Label, { children: "\u0412\u0440\u0435\u043C\u0435" }), (0, jsx_runtime_1.jsx)(input_1.Input, { type: "datetime-local", value: datetime, onChange: function (e) { return setDatetime(e.target.value); } }), (0, jsx_runtime_1.jsx)(label_1.Label, { children: "Zoom \u043B\u0438\u043D\u043A" }), (0, jsx_runtime_1.jsx)(input_1.Input, { type: "text", value: zlink, onChange: function (e) { return setZlink(e.target.value); } }), (0, jsx_runtime_1.jsx)(label_1.Label, { children: "\u041B\u043E\u043A\u0430\u0446\u0438\u0458\u0430" }), (0, jsx_runtime_1.jsx)(textarea_1.Textarea, { value: location, onChange: function (e) { return setLocation(e.target.value); } }), (0, jsx_runtime_1.jsx)(label_1.Label, { children: "\u0421\u0430\u0434\u0440\u0436\u0430\u0458" }), (0, jsx_runtime_1.jsx)(textarea_1.Textarea, { value: content, onChange: function (e) { return setContent(e.target.value); } })] }));
};
exports.default = PosterFormInputs;
