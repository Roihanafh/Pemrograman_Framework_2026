
import styles from "../../styles/about.module.scss";

export default function About() {
  return (
    <main className={styles.aboutPage}>
      <section className={styles.aboutCard}>
        <div className={styles.aboutInner}>
          <header className={styles.aboutHeader}>
            <div className={styles.avatar}>
              <span>MR</span>
            </div>
            <div className={styles.headerText}>
              <p className={styles.badge}>About Me</p>
              <h1 className={styles.title}>
                Mohammad Roihan Al Fahmi Hidayatullah
              </h1>
              <p className={styles.subtitle}>
                <strong>Mahasiswa D4 Teknik Informatika</strong> &mdash; NIM
                2341720097
              </p>
            </div>
          </header>

          <section className={styles.contentSection}>
            <h2 className={styles.sectionTitle}>Singkat tentang saya</h2>
            <p className={styles.text}>
              Saya adalah mahasiswa D4 Teknik Informatika yang tertarik pada
              pengembangan aplikasi web, pemrograman, dan dunia teknologi
              secara umum. Saya senang belajar hal baru, mengerjakan proyek
              praktikum, dan terus mengasah kemampuan problem solving baik
              secara individu maupun dalam tim.
            </p>
          </section>

          <section className={styles.contentSection}>
            <h2 className={styles.sectionTitle}>Quotes favorit</h2>
            <ul className={styles.quotesList}>
              <li className={styles.quoteItem}>
                "Belajar bukan tentang seberapa cepat kita mengerti, tapi
                seberapa konsisten kita melangkah."
              </li>
              <li className={styles.quoteItem}>
                "Setiap error adalah petunjuk agar kita menjadi programmer
                yang lebih baik."
              </li>
              <li className={styles.quoteItem}>
                "Teknologi akan terus berkembang, tugas kita adalah terus
                belajar dan beradaptasi."
              </li>
            </ul>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Hal lain tentang saya</h2>
            <p className={styles.footerText}>
              Di luar dunia perkuliahan, saya menyukai aktivitas yang
              menyeimbangkan antara belajar dan istirahat, seperti
              mendengarkan musik, membaca, atau berdiskusi dengan teman
              tentang ide proyek baru. Bagi saya, koding bukan hanya tugas,
              tetapi juga cara untuk menuangkan kreativitas dan memberikan
              solusi nyata.
            </p>
            <p className={styles.footerText}>
              Ke depan, saya berharap dapat berkontribusi dalam pengembangan
              aplikasi yang bermanfaat bagi banyak orang, sekaligus terus
              meningkatkan kemampuan teknis dan soft skill sebagai seorang
              profesional di bidang Teknologi Informasi.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
