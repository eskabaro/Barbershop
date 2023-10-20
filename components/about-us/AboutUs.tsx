import { AboutUsType } from "@/app/[lang]/Home"
import { Title } from "@/ui/title"
import Image from "next/image"
import { FC } from "react"
import styles from './AboutUs.module.scss'

interface IProps {
   section_1: AboutUsType
}

export const AboutUs: FC<IProps> = ({ section_1 }) => {
   return (
      <section className={styles.wrapper} >
         <div className={styles.wrapper__image_block}>
            <Image src={'/images/about-us.jpg'} width={390} height={488} alt="About Us" priority />
         </div>
         <div className={styles.wrapper__description}>
            <Title title={section_1.title} underline/>
            <p>{section_1.description}</p>
         </div>
      </section>
   )
}