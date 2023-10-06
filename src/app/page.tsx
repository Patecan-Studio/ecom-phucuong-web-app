import { Tabbar } from '@/components/common'
import styles from './page.module.css'
import '../styles/common.scss'
import '../styles/colors.scss'
import '../styles/fonts.scss'
import '../styles/reset.css'

export default function Home() {
  return (
    <main className={styles.main}>
     <Tabbar />
     <div style={{height: '2000px', backgroundColor:'black', color: 'white'}}>
      <h1>Page</h1>
      <h1>Page</h1>
      <h1>Page</h1>
      <h1>Page</h1>
      <h1>Page</h1>
      <h1>Page</h1>
      <h1>Page</h1>
      <h1>Page</h1>
      <h1>Page</h1>
      <h1>Page</h1>
      <h1>Page</h1>
      <h1>Page</h1>
      <h1>Page</h1>
     </div>
    </main>
  )
}
