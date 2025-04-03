import { jsx as _jsx } from "react/jsx-runtime";
import Poster from '@/Poster/Poster';
const ExportPoster = ({ width = 1600, height = 900, ...posterProps }) => {
    return (_jsx("div", { id: "export-poster", className: `
        fixed top-[-9999px] left-[-9999px] 
        bg-white overflow-hidden z-[9999] isolate
        [&_*]:border-none [&_*]:outline-none [&_*]:shadow-none
      `, style: {
            width: `${width}px`,
            height: `${height}px`,
        }, children: _jsx(Poster, { ...posterProps, width: width, height: height }) }));
};
export default ExportPoster;
