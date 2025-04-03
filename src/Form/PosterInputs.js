import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
const PosterFormInputs = ({ title, setTitle, subtitle, setSubtitle, datetime, setDatetime, zlink, setZlink, location, setLocation, content, setContent }) => {
    return (_jsxs("div", { className: "poster-form-inputs space-y-4", children: [_jsx(Label, { children: "\u041D\u0430\u0441\u043B\u043E\u0432" }), _jsx(Input, { type: "text", value: title, onChange: (e) => setTitle(e.target.value) }), _jsx(Label, { children: "\u041F\u043E\u0434\u043D\u0430\u0441\u043B\u043E\u0432" }), _jsx(Input, { type: "text", value: subtitle, onChange: (e) => setSubtitle(e.target.value) }), _jsx(Label, { children: "\u0412\u0440\u0435\u043C\u0435" }), _jsx(Input, { type: "datetime-local", value: datetime, onChange: (e) => setDatetime(e.target.value) }), _jsx(Label, { children: "Zoom \u043B\u0438\u043D\u043A" }), _jsx(Input, { type: "text", value: zlink, onChange: (e) => setZlink(e.target.value) }), _jsx(Label, { children: "\u041B\u043E\u043A\u0430\u0446\u0438\u0458\u0430" }), _jsx(Textarea, { value: location, onChange: (e) => setLocation(e.target.value) }), _jsx(Label, { children: "\u0421\u0430\u0434\u0440\u0436\u0430\u0458" }), _jsx(Textarea, { value: content, onChange: (e) => setContent(e.target.value) })] }));
};
export default PosterFormInputs;
