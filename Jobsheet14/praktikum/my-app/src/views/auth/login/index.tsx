import Link from "next/link"
import { useRouter } from "next/router";
import styles from "./login.module.css";
// import styles from "./login.module.scss";

const TampilanLogin = () => {
    const {push} = useRouter();
    const handlerLogin = () => {
        push("/produk");           
    }
     return (
         <main className={styles.authPage}>
            <section className={styles.authCard}>
                <h1 className={styles.title}>Halaman Login</h1>
                <p className={styles.subtitle}>
                    Masuk untuk melanjutkan ke halaman produk.
                </p>
                <button
                    onClick={handlerLogin}
                    className={styles.primaryButton}
                >
                    Login
                </button>
                <div className={styles.secondaryBox}>
                    <p className={styles.secondaryText}>Belum punya akun?</p>
                </div>
                <Link href="/auth/register" className={styles.link}>
                    Ke Halaman Register
                </Link>
            </section>
        </main>
     )
}

export default TampilanLogin;