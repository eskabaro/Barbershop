'use client'

import { FC } from 'react'
import { FirstScreen } from '@/components/first-screen'

interface IProps {
   first_screen: {
      header: {
         lcation: string,
         time_work: string,
         links: string[]
      }
      content: {
         title: string,
         btn_title: string
      }
   }
}

export const Home: FC<IProps> = ({ first_screen }) => {
   return (
      <>
         <FirstScreen
            header={first_screen.header}
            content={first_screen.content}
         />
      </>
   )
}