"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lucide_react_1 = require("lucide-react");
var Colophon_module_css_1 = require("./Colophon.module.css");
var Colophon = function (_a) {
    var language = _a.language;
    var info = {
        address: {
            srb: 'Трг Николе Пашића 11, 11000 Београд',
            eng: '11 Trg Nikole Pašića, 11000 Belgrade'
        },
        location: {
            srb: 'III спрат, кабинети 105, 109-115',
            eng: 'Floor III, Rooms 105, 109-115'
        }
    };
    return (<div className={Colophon_module_css_1.default.colophon}>
      <div className={Colophon_module_css_1.default.colophonRow}>
        <div className={Colophon_module_css_1.default.colophonLeft}>
          <lucide_react_1.Facebook size={32}/> @iesbeograd
        </div>
        <div className={Colophon_module_css_1.default.colophonRight}>
          {info.address[language]} <lucide_react_1.MapPin size={32}/>
        </div>
      </div>
      <div className={Colophon_module_css_1.default.colophonRow}>
        <div className={Colophon_module_css_1.default.colophonLeft}>
          <lucide_react_1.Instagram size={32}/> @iesbeograd
        </div>
        <div className={Colophon_module_css_1.default.colophonRight}>
          {info.location[language]} <lucide_react_1.LocateIcon size={32}/>
        </div>
      </div>
      <div className={Colophon_module_css_1.default.colophonRow}>
        <div className={Colophon_module_css_1.default.colophonLeft}>
          <lucide_react_1.Twitter size={32}/> @iesbeograd
        </div>
        <div className={Colophon_module_css_1.default.colophonRight}>
          https://ies.rs <lucide_react_1.Newspaper size={32}/>
        </div>
      </div>
      <div className={Colophon_module_css_1.default.colophonRow}>
        <div className={Colophon_module_css_1.default.colophonLeft}>
          <lucide_react_1.Youtube size={32}/> @iesbeograd
        </div>
        <div className={Colophon_module_css_1.default.colophonRight}>
          tribina@ies.rs <lucide_react_1.Mail size={32}/>
        </div>
      </div>
    </div>);
};
exports.default = Colophon;
