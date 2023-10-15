'use client'

import { useTheme } from "next-themes"
import { FC, useEffect, useState } from "react"

export const ThemeSwitcher: FC = () => {
   const [mounted, setMounted] = useState<boolean>(false)
   const { setTheme } = useTheme()

   useEffect(() => {
      setMounted(true)
   }, [])

   if (!mounted) return null

   return (
      <div>
         <button onClick={() => setTheme('light')}>light</button><br />
         <button onClick={() => setTheme('dark')}>dark</button>
      </div>
   )
}