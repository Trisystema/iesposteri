import * as React from 'react';
import lightLogo from '/logo_ies_light.png';
import darkLogo from '/logo_ies_dark.png';
import { PosterData } from '@/types/poster';
import styles from './IESLogo.module.css';

const isValidImageSrc = (src: string): boolean => {
  return src.startsWith('data:image') || src.startsWith('http') || src.startsWith('/');
};

const IESLogo: React.FC<Pick<PosterData, 'theme' | 'coop'>> = ({ theme, coop }) => {
  const logoImage = theme === 'dark' ? darkLogo : lightLogo;

  const showCoop = typeof coop === 'string' && isValidImageSrc(coop);

  return (
    <div className={showCoop ? styles.dualLogo : styles.singleLogo}>
      <div className={styles.dualImageContainer}>
        <img src={logoImage} alt="IES Logo" />
      </div>
      {showCoop && (
        <div className={styles.dualImageContainer}>
          <img src={coop!} alt="Partnerski Logo" />
        </div>
      )}
    </div>
  );
};

export default IESLogo;