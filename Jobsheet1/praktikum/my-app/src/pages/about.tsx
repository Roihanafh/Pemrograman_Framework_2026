import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/About.module.css'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Mohammad Roihan Al Fahmi Hidayatulloh</title>
        <meta name="description" content="Halaman profil mahasiswa" />
      </Head>

      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>Profil Mahasiswa</h1>

          {/* Section Foto */}
          <div className={styles.photoSection}>
            <div className={styles.photoContainer}> 
              <Image
                src="/photo_profile.png"
                alt="Foto Saya"
                width={200}
                height={200}
                className={styles.photo}
                priority
              />
            </div>
          </div>

          {/* Section Biodata */}
          <div className={styles.bioSection}>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <td className={styles.label}>Nama</td>
                  <td className={styles.value}>Mohammad Roihan Al Fahmi Hidayatulloh</td>
                </tr>
                <tr>
                  <td className={styles.label}>NIM</td>
                  <td className={styles.value}>2341720097</td>
                </tr>
                <tr>
                  <td className={styles.label}>Program Studi</td>
                  <td className={styles.value}>Teknik Informatika</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Link kembali ke halaman utama */}
          <div className={styles.linkContainer}>
            <Link href="/" className={styles.link}>
              ← Kembali ke Halaman Utama
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
