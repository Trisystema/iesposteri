"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ContentImage_module_css_1 = require("./ContentImage.module.css");
var ContentImage = function (_a) {
    var selectedFile = _a.selectedFile;
    var _b = (0, react_1.useState)('/placeholder_person.jpg'), imageUrl = _b[0], setImageUrl = _b[1];
    (0, react_1.useEffect)(function () {
        if (typeof selectedFile === 'string' && selectedFile.startsWith('data:image')) {
            setImageUrl(selectedFile);
        }
        else {
            setImageUrl('/placeholder_person.jpg');
        }
    }, [selectedFile]);
    return (<div className={ContentImage_module_css_1.default.contentImage}>
      <img src={imageUrl} alt="CONTENT"/>
    </div>);
};
exports.default = ContentImage;
