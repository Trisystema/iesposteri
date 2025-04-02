import { MapPin } from 'lucide-react'
import styles from './Location.module.css'
import { PosterData } from '@/types/poster'

const Location: React.FC<Pick<PosterData, "location">> = ({ location }) => {
  const lines = location.split('\n').filter(line => line.trim() !== '')

  return (
    <div className={styles.location}>
      <ul>
        <li><MapPin/></li>
        {lines.map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ul>
    </div>
  )
}

export default Location
