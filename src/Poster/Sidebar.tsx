import TimeAndDate from './TimeAndDate'
import IESLogo from './IESLogo'
import ZoomDetails from './ZoomDetails'
import Location from './Location'
import { PosterData } from '@/types/poster'
import styles from './Sidebar.module.css'

const Sidebar: React.FC<Pick<PosterData, "coop" | "theme" | "datetime" | "language" | "location" | "zlink">> = ({
  coop,
  theme,
  datetime,
  language,
  location,
  zlink
}) => {
  return (
    <div className={styles.sidebar}>
      <IESLogo coop={coop} theme={theme} />
      <TimeAndDate
        datetime={datetime}
        language={language}
      />
      <Location location={location} />
      <ZoomDetails theme={theme} zlink={zlink} />
    </div>
  )
}

export default Sidebar
