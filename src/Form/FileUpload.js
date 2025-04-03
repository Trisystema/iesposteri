import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
const FileUpload = ({ selectedFile, setSelectedFile, coop, setCoop }) => {
    const toBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
    const handleFileChange = async (e, setImage) => {
        const file = e.target.files?.[0];
        if (file) {
            const base64 = await toBase64(file);
            setImage(base64);
        }
        else {
            setImage(null);
        }
    };
    const renderPreview = (src) => {
        if (src) {
            return _jsx("img", { src: src, alt: "preview", className: "rounded border max-w-xs mt-2" });
        }
        return null;
    };
    return (_jsxs("div", { className: "file-upload space-y-4", children: [_jsxs("div", { children: [_jsx(Label, { htmlFor: "content-image", children: "\u0421\u043B\u0438\u043A\u0430" }), _jsx(Input, { id: "content-image", type: "file", accept: "image/*", onChange: (e) => handleFileChange(e, setSelectedFile) }), renderPreview(selectedFile)] }), _jsxs("div", { children: [_jsx(Label, { htmlFor: "coop-image", children: "\u041A\u043E\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0442\u043E\u0440" }), _jsx(Input, { id: "coop-image", type: "file", accept: "image/*", onChange: (e) => handleFileChange(e, setCoop) }), renderPreview(coop)] })] }));
};
export default FileUpload;
