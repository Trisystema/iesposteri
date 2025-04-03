import * as React from 'react';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { PosterFormData } from '@/types/posterForm';
import { Switch } from '@/components/ui/switch'

const PosterSettings: React.FC<Pick<PosterFormData, 'theme' | 'language' | 'setTheme' | 'setLanguage' | 'zoom' | 'setZoom'>> = ({ theme, setTheme, language, setLanguage, zoom, setZoom }) => {
    return (
        <div className="form-settings space-y-4">
            <Label className="text-lg font-semibold">Брза подешавања</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4 transition-all hover:shadow-md">
                    <div className="flex flex-col items-center gap-3 h-full">
                        <Label className="text-sm font-medium mb-2">Теме</Label>
                        <Switch
                            checked={theme === "dark"}
                            onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                            className="scale-110"
                        />
                        <span className="text-sm text-muted-foreground">
                            {theme === 'dark' ? 'Тамна' : 'Светла'}
                        </span>
                    </div>
                </Card>

                <Card className="p-4 transition-all hover:shadow-md">
                    <div className="flex flex-col items-center gap-3 h-full">
                        <Label className="text-sm font-medium mb-2">Језик</Label>
                        <Switch
                            checked={language === "srb"}
                            onCheckedChange={(checked) => setLanguage(checked ? 'srb' : 'eng')}
                            className="scale-110"
                        />
                        <span className="text-sm text-muted-foreground">
                            {language === 'srb' ? 'Српски' : 'Енглески'}
                        </span>
                    </div>
                </Card>

                <Card className="p-4 transition-all hover:shadow-md">
                    <div className="flex flex-col items-center gap-3 h-full">
                        <Label className="text-sm font-medium mb-2">Зум</Label>
                        <Switch
                            checked={zoom}
                            onCheckedChange={setZoom}
                            className="scale-110"
                        />
                        <span className="text-sm text-muted-foreground">
                            {zoom ? 'Укључен' : 'Искључен'}
                        </span>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default PosterSettings;