import React, { useEffect, useState } from 'react';
import { PosterData } from '@/types/poster';
import styles from './ContentImage.module.css';

const ContentImage: React.FC<Pick<PosterData, 'selectedFile'>> = ({ selectedFile }) => {
  const [imageUrl, setImageUrl] = useState<string>('/placeholder_person.jpg');

  useEffect(() => {
    if (typeof selectedFile === 'string' && selectedFile.startsWith('data:image')) {
      setImageUrl(selectedFile);
    } else {
      setImageUrl('/placeholder_person.jpg');
    }
  }, [selectedFile]);

  return (
    <div className={styles.contentImage}>
      <img src={imageUrl} alt="CONTENT" />
    </div>
  );
};

export default ContentImage;
