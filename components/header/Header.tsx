import { FC } from "react"

import Image from "next/image"
import Link from "next/link"
import styles from './Header.module.scss'

import { Drawer } from "../drawer"
import { Links } from "@/ui/header-links"
import { Aboutas } from "@/ui/header-aboutas"

interface IProps {
   content: {
      lcation: string
      time_work: string
      links: string[]
   }
}

export const Header: FC<IProps> = ({ content }) => {
   return (
      <header className={styles.header}>
         <div className={styles.header__info}>
            <Aboutas time_work={content.time_work} lcation={content.lcation} />
         </div>

         <Link href={'/'} className={styles.header__logo}>
            <Image src={'/logo.jpg'} width={100} height={100} alt="Logo" priority />
            <p>Black Jack</p>
         </Link>

         <Drawer content={content} />
         <div className={styles.header__links}>
            <Links links={content.links} />
         </div>
      </header>
   )
}