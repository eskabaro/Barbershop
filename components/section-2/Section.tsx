import { FC } from "react"
import styles from './Section.module.scss'
import LiquorIcon from '@mui/icons-material/Liquor';
import CoffeeIcon from '@mui/icons-material/Coffee';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';

const icons = [<LiquorIcon />, <CoffeeIcon />, <VideogameAssetOutlinedIcon />];

interface IProps {
   titles: string[]
}

export const Section: FC<IProps> = ({ titles }) => {
   const content = titles.map((title, index) => ({
      image: icons[index],
      title: title,
   }))

   return (
      <section className={styles.wrapper}>
         {content.map(e => (
            <div key={e.title} className={styles.wrapper__block}>
               {e.image}
               <span>{e.title}</span>
            </div>
         ))}
      </section>
   )
}