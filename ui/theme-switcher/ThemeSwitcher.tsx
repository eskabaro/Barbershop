'use client'

import { FC, useEffect, useState } from "react"

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import Switch from '@mui/material/Switch'

import { useTheme } from "next-themes"

export const ThemeSwitcher: FC = () => {
   const [mounted, setMounted] = useState<boolean>(false)
   const { theme, setTheme } = useTheme()

   useEffect(() => {
      setMounted(true)
   }, [])

   if (!mounted) return null

   return (
      <Switch
         size='medium'
         checked={theme === 'dark'}
         onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
         checkedIcon={<DarkModeIcon fontSize='small' style={{ backgroundColor: 'white', borderRadius: 50, padding: 2, color: 'black' }} />}
         icon={<LightModeIcon fontSize='small' style={{ backgroundColor: 'black', borderRadius: 50, padding: 2 }} />}
      />
   )
}