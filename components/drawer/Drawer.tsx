'use client'

import { FC } from "react"
import { useTheme } from "next-themes";
import { useOutside } from "@/hooks/useOutside";

import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from './Drawer.module.scss'
import cn from 'classnames';

import { Aboutas } from "@/ui/header-aboutas";
import { Links } from "@/ui/header-links";

interface IProps {
   content: {
      lcation: string
      time_work: string
      links: string[]
   }
}

export const Drawer: FC<IProps> = ({ content }) => {
   const { theme } = useTheme()
   const { ref, isShow, setIsShow } = useOutside(false)

   return (
      <div ref={ref} className={styles.wr_drawer}>
         <IconButton
            aria-label="more"
            id="long-button"
            aria-haspopup="true"
            onClick={() => setIsShow(!isShow)}
         >
            <MoreVertIcon style={{ color: theme === 'dark' ? 'white' : 'black' }} />
         </IconButton>

         <div className={cn(styles.drawer, {
            [styles.active]: isShow,
         })}>
            <Aboutas lcation={content.lcation} time_work={content.time_work} />
            <Links links={content.links} />
         </div>
      </div>
   )
}