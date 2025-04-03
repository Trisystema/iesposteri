"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var label_1 = require("@/components/ui/label");
var card_1 = require("@/components/ui/card");
var switch_1 = require("@/components/ui/switch");
var PosterSettings = function (_a) {
    var theme = _a.theme, setTheme = _a.setTheme, language = _a.language, setLanguage = _a.setLanguage, zoom = _a.zoom, setZoom = _a.setZoom;
    return (<div className="form-settings space-y-4">
            <label_1.Label className="text-lg font-semibold">Брза подешавања</label_1.Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <card_1.Card className="p-4 transition-all hover:shadow-md">
                    <div className="flex flex-col items-center gap-3 h-full">
                        <label_1.Label className="text-sm font-medium mb-2">Теме</label_1.Label>
                        <switch_1.Switch checked={theme === "dark"} onCheckedChange={function (checked) { return setTheme(checked ? 'dark' : 'light'); }} className="scale-110"/>
                        <span className="text-sm text-muted-foreground">
                            {theme === 'dark' ? 'Тамна' : 'Светла'}
                        </span>
                    </div>
                </card_1.Card>

                <card_1.Card className="p-4 transition-all hover:shadow-md">
                    <div className="flex flex-col items-center gap-3 h-full">
                        <label_1.Label className="text-sm font-medium mb-2">Језик</label_1.Label>
                        <switch_1.Switch checked={language === "srb"} onCheckedChange={function (checked) { return setLanguage(checked ? 'srb' : 'eng'); }} className="scale-110"/>
                        <span className="text-sm text-muted-foreground">
                            {language === 'srb' ? 'Српски' : 'Енглески'}
                        </span>
                    </div>
                </card_1.Card>

                <card_1.Card className="p-4 transition-all hover:shadow-md">
                    <div className="flex flex-col items-center gap-3 h-full">
                        <label_1.Label className="text-sm font-medium mb-2">Зум</label_1.Label>
                        <switch_1.Switch checked={zoom} onCheckedChange={setZoom} className="scale-110"/>
                        <span className="text-sm text-muted-foreground">
                            {zoom ? 'Укључен' : 'Искључен'}
                        </span>
                    </div>
                </card_1.Card>
            </div>
        </div>);
};
exports.default = PosterSettings;
