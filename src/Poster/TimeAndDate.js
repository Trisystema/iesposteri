"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lucide_react_1 = require("lucide-react");
var TimeAndDate_module_css_1 = require("./TimeAndDate.module.css");
var TimeAndDate = function (_a) {
    var datetime = _a.datetime, language = _a.language;
    var date = new Date(datetime || '1970-01-01');
    var getLocale = function (language) { return language === "srb" ? "sr-RS" : "en-US"; };
    var t_options = {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'CET',
        timeZoneName: 'short'
    };
    var d_weekday = {
        weekday: 'long'
    };
    var d_options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return (<div className={TimeAndDate_module_css_1.default.timeAndDate}>
      <ul>
        <li>
          <lucide_react_1.Calendar />
        </li>
        <li>{date.toLocaleDateString(getLocale(language), d_weekday).toUpperCase()}</li>
        <li>{date.toLocaleDateString(getLocale(language), d_options)}</li>
        <li>{date.toLocaleTimeString(getLocale(language), t_options)}</li>
      </ul>
    </div>);
};
exports.default = TimeAndDate;
