'use client'

import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'

export const RootProvider = ({
   children
}: {
   children: React.ReactNode
}) => {
   const [mounted, setMounted] = useState<boolean>(false)

   useEffect(() => {
      setMounted(true)
   }, [])

   if (!mounted) return null

   return (
      <ThemeProvider attribute='class'>{children}</ThemeProvider>
   )
}