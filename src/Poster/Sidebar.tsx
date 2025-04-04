import TimeAndDate from './TimeAndDate'
import IESLogo from './IESLogo'
import ZoomDetails from './ZoomDetails'
import Location from './Location'
import { PosterData } from '@/types/poster'
import styles from './Sidebar.module.css'

const Sidebar: React.FC<Pick<PosterData, "coop" | "theme" | "datetime" | "language" | "location" | "zlink" | "zoom">> = ({
  coop,
  theme,
  datetime,
  language,
  location,
  zlink,
  zoom
}) => {
  return (
    <div className={styles.sidebar}>
      <IESLogo coop={coop} theme={theme} />
      <TimeAndDate
        datetime={datetime}
        language={language}
      />
      <Location location={location} />
      {zoom ? <ZoomDetails theme={theme} zlink={zlink} /> : <div style={{width: 128, height: 128}}></div>}
    </div>
  )
}

export default Sidebar
