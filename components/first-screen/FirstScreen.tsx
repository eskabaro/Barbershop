import { FC } from "react"
import { Video } from "@/ui/video"
import styles from './FirstScreen.module.scss'
import { Container } from "../container"
import { Header } from "../header"
import { Button } from "@mui/material"
import { motion } from "framer-motion"
import { ScrollDown } from "@/ui/scroll-down"

export interface IPropsFirstScreen {
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

export const FirstScreen: FC<IPropsFirstScreen> = ({ header, content }) => {
   return (
      <div className={styles.wr_screen}>
         <Video />
         <Container>
            <Header header={header} />
            <div className='flex flex-col justify-center items-center p-8 h-1/2'>
               <motion.div
                  className='text-center'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
               >
                  <h1 className='text-3xl font-bold z-50 md:text-4xl'>{content.title}</h1>
                  <Button variant="outlined" sx={{
                     color: 'white',
                     marginTop: '50px',
                     width: 'fit-content',
                     borderColor: 'white',
                     ":hover": {
                        borderColor: 'white',
                     }
                  }}>
                     {content.btn_title}
                  </Button>
               </motion.div>
            </div>
            <ScrollDown />
         </Container>
      </div >
   )
}