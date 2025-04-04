import { QRCodeSVG } from 'qrcode.react'
import { Presentation } from 'lucide-react'
import { PosterData } from '@/types/poster'
import styles from "./ZoomDetails.module.css"

const ZoomDetails: React.FC<Pick<PosterData, "zlink" | "theme">> = ({ theme, zlink }) => {
  const colorScheme =
    theme === 'dark'
      ? { bgColor: '#0b0b2b', fgColor: 'white' }
      : { bgColor: 'white', fgColor: '#0b0b2b' }

  return (
    <div className={styles.zoomDetails}>
      <Presentation />
      <QRCodeSVG
        id="qr-code"
        value={zlink || 'null'}
        size={128}
        bgColor={colorScheme.bgColor}
        fgColor={colorScheme.fgColor}
        includeMargin={false}
        imageSettings={{
          src: '/logo_ies_light.png', // ✅ use relative path that works in production
          height: 24,
          width: 24,
          excavate: true
        }}
      />
    </div>
  )
}

export default ZoomDetails
