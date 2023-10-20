import { FC } from "react"
import cn from 'classnames'
import styles from './Title.module.scss'

interface IProps {
   title: string
   underline?: boolean
}

export const Title: FC<IProps> = ({ title, underline }) => {
   return (
      <h1 className={cn(styles.title, {
         [styles.underline]: underline
      })}>
         {title}
      </h1>
   )
} 