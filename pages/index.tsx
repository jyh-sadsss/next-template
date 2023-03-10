import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>小江的模板</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        一个正经的nextjs模板（小江只是先执行了create-next-app，再修改了下index.tsx文件）
      </main>

      <footer className={styles.footer}>
       我是真的真的很不错
      </footer>
    </div>
  )
}
