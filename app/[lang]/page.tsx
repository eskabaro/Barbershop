import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Image from 'next/image'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { header } = await getDictionary(lang)

  return (
    <>
      <h1>{header}</h1>
      <Image src={'/logo.jpg'} width={100} height={100} alt='' priority />
    </>
  )
}
