import { Tabbar } from '@/components/common'
import styles from './page.module.css'
import '../styles/reset.css'
import '../styles/common.scss'

export default function Home() {
  return (
    <main className={styles.main}>
     <Tabbar />
    </main>
  )
}
