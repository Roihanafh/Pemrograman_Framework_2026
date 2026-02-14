import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Index.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Praktikum Next.js</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Praktikum Next.js Pages Router</h1>
        <p className={styles.subtitle}>Mahasiswa D4 Pengembangan Web</p>
        
        {/* Navigasi ke halaman About */}
        <nav className={styles.nav}>
          <Link href="/about" className={styles.link}>
            Lihat Profil Mahasiswa →
          </Link>
        </nav>
      </main>
    </div>
  )
}
