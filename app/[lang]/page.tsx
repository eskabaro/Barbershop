import { Locale } from '@/i18n.config'
import { Home } from './Home'

export default async function HomePage({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  return <Home />
}
