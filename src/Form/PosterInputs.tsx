import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { PosterFormData } from '@/types/posterForm';

const PosterFormInputs: React.FC<Pick<PosterFormData, "title" | "setTitle" | "subtitle" | "setSubtitle" | "datetime" | "setDatetime" | "zlink" | "setZlink" | "location" | "setLocation" | "content" | "setContent">> = ({
    title, setTitle, subtitle, setSubtitle, datetime, setDatetime, zlink, setZlink, location, setLocation, content, setContent }) => {
    return (
        <div className="poster-form-inputs space-y-4">
            <Label>Наслов</Label>
            <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Label>Поднаслов</Label>
            <Input type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
            <Label>Време</Label>
            <Input type="datetime-local" value={datetime} onChange={(e) => setDatetime(e.target.value)} />
            <Label>Zoom линк</Label>
            <Input type="text" value={zlink} onChange={(e) => setZlink(e.target.value)} />
            <Label>Локација</Label>
            <Textarea value={location} onChange={(e) => setLocation(e.target.value)} />
            <Label>Садржај</Label>
            <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
    );
};

export default PosterFormInputs;
