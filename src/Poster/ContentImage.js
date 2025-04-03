import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import styles from './ContentImage.module.css';
const ContentImage = ({ selectedFile }) => {
    const [imageUrl, setImageUrl] = useState('/placeholder_person.jpg');
    useEffect(() => {
        if (typeof selectedFile === 'string' && selectedFile.startsWith('data:image')) {
            setImageUrl(selectedFile);
        }
        else {
            setImageUrl('/placeholder_person.jpg');
        }
    }, [selectedFile]);
    return (_jsx("div", { className: styles.contentImage, children: _jsx("img", { src: imageUrl, alt: "CONTENT" }) }));
};
export default ContentImage;
