import { Calendar } from 'lucide-react'
import { PosterData } from '@/types/poster'
import styles from './TimeAndDate.module.css'

const TimeAndDate: React.FC<Pick<PosterData, 'datetime'  | 'language' >> = ({ datetime, language }) => {
  
  const date = new Date(datetime || '1970-01-01')
  
  const getLocale = (language: Language): string => language === "srb" ? "sr-RS" : "en-US"

  const t_options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'CET',
    timeZoneName: 'short'
  }

  const d_weekday: Intl.DateTimeFormatOptions = {
    weekday: 'long'
  }

  const d_options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return (
    <div className={styles.timeAndDate}>
      <ul>
        <li>
          <Calendar />
        </li>
        <li>{date.toLocaleDateString(getLocale(language), d_weekday).toUpperCase()}</li>
        <li>{date.toLocaleDateString(getLocale(language), d_options)}</li>
        <li>{date.toLocaleTimeString(getLocale(language), t_options)}</li>
      </ul>
    </div>
  )
}

export default TimeAndDate
