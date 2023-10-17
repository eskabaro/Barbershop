import { FC } from "react"

import { ThemeSwitcher } from "../theme-switcher"
import { LanguageSwitcher } from "../lang-switcher"

import styles from './Aboutas.module.scss'

interface IProps {
   lcation: string,
   time_work: string
}

export const Aboutas: FC<IProps> = ({ lcation, time_work }) => {
   return (
      <nav className={styles.aboutas}>
         <div>
            <LanguageSwitcher />
            <ThemeSwitcher />
         </div>
         <p>{lcation}</p>
         <p>{time_work}</p>
         <p>+38 050 606 29 00</p>
         <p>+38 093 594 96 19</p>
      </nav>
   )
}