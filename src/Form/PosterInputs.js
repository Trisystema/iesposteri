"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var input_1 = require("@/components/ui/input");
var textarea_1 = require("@/components/ui/textarea");
var label_1 = require("@/components/ui/label");
var PosterFormInputs = function (_a) {
    var title = _a.title, setTitle = _a.setTitle, subtitle = _a.subtitle, setSubtitle = _a.setSubtitle, datetime = _a.datetime, setDatetime = _a.setDatetime, zlink = _a.zlink, setZlink = _a.setZlink, location = _a.location, setLocation = _a.setLocation, content = _a.content, setContent = _a.setContent;
    return (<div className="poster-form-inputs space-y-4">
            <label_1.Label>Наслов</label_1.Label>
            <input_1.Input type="text" value={title} onChange={function (e) { return setTitle(e.target.value); }}/>
            <label_1.Label>Поднаслов</label_1.Label>
            <input_1.Input type="text" value={subtitle} onChange={function (e) { return setSubtitle(e.target.value); }}/>
            <label_1.Label>Време</label_1.Label>
            <input_1.Input type="datetime-local" value={datetime} onChange={function (e) { return setDatetime(e.target.value); }}/>
            <label_1.Label>Zoom линк</label_1.Label>
            <input_1.Input type="text" value={zlink} onChange={function (e) { return setZlink(e.target.value); }}/>
            <label_1.Label>Локација</label_1.Label>
            <textarea_1.Textarea value={location} onChange={function (e) { return setLocation(e.target.value); }}/>
            <label_1.Label>Садржај</label_1.Label>
            <textarea_1.Textarea value={content} onChange={function (e) { return setContent(e.target.value); }}/>
        </div>);
};
exports.default = PosterFormInputs;
