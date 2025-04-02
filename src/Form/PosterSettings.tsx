import React from 'react';
import { Label } from '@/components/ui/label';
import { PosterFormData } from '@/types/posterForm';
import { Switch } from '@/components/ui/switch'

const PosterSettings: React.FC<Pick<PosterFormData, 'theme' | 'language' | 'setTheme' | 'setLanguage'>> = ({ theme, setTheme, language, setLanguage }) => {
    return (
        <div className="form-settings space-y-4">
            <div>
                <Label>Тамна тема</Label>
                <Switch
                checked={theme==="dark"}
                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}>
                </Switch>
            </div>
            <div>
                <Label>Српски језик</Label>
                <Switch 
                checked={language==="srb"}
                onCheckedChange={(checked) => setLanguage(checked ? 'srb' : 'eng')}
                >
                </Switch>
            </div>

        </div>
    );
};

export default PosterSettings;