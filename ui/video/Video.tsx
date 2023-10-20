import { FC } from "react";
import styles from './Video.module.scss'

export const Video: FC = () => {
   return (
      <div className={styles.wr_video}>
         <video
            loop
            muted
            autoPlay
            preload='auto'
            src="/videos/video.webm"
            controls={false}
         />
      </div>
   )
}