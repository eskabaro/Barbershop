import { FC } from "react"
import styles from './Links.module.scss'

interface IProps {
   links: string[]
}

export const Links: FC<IProps> = ({ links }) => {
   return (
      <nav className={styles.links}>
         <ul>{links.map(e => <li key={e}>{e}</li>)}</ul>
      </nav>
   )
}