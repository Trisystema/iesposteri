import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  MapPin,
  LocateIcon,
  Mail,
  Newspaper
} from 'lucide-react'

import { PosterData } from '@/types/poster'
import styles from './Colophon.module.css'

const Colophon: React.FC<Pick<PosterData, 'language'>> = ({ language }) => {
  const info = {
    address: {
      srb: 'Трг Николе Пашића 11, 11000 Београд',
      eng: '11 Trg Nikole Pašića, 11000 Belgrade'
    },
    location: {
      srb: 'III спрат, кабинети 105, 109-115',
      eng: 'Floor III, Rooms 105, 109-115'
    }
  }

  return (
    <div className={styles.colophon}>
      <div className={styles.colophonRow}>
        <div className={styles.colophonLeft}>
          <Facebook size={32} /> @iesbeograd
        </div>
        <div className={styles.colophonRight}>
          {info.address[language]} <MapPin size={32} />
        </div>
      </div>
      <div className={styles.colophonRow}>
        <div className={styles.colophonLeft}>
          <Instagram size={32} /> @iesbeograd
        </div>
        <div className={styles.colophonRight}>
          {info.location[language]} <LocateIcon size={32} />
        </div>
      </div>
      <div className={styles.colophonRow}>
        <div className={styles.colophonLeft}>
          <Twitter size={32} /> @iesbeograd
        </div>
        <div className={styles.colophonRight}>
          https://ies.rs <Newspaper size={32} />
        </div>
      </div>
      <div className={styles.colophonRow}>
        <div className={styles.colophonLeft}>
          <Youtube size={32} /> @iesbeograd
        </div>
        <div className={styles.colophonRight}>
          tribina@ies.rs <Mail size={32} />
        </div>
      </div>
    </div>
  )
}

export default Colophon
