import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./register.module.css";

const TampilanRegister = () => {
    const { push } = useRouter();
    const handlerRegister = () => {
        push("/auth/login");
    };
    return (
        <main className={styles.authPage}>
            <section className={styles.authCard}>
                <h1 className={styles.title}>Halaman Register</h1>
                <p className={styles.subtitle}>
                    Buat akun baru untuk mulai menggunakan aplikasi.
                </p>
                <button
                    onClick={handlerRegister}
                    className={styles.primaryButton}
                >
                    Register
                </button>
                <div className={styles.secondaryBox}>
                    <p className={styles.secondaryText}>Sudah punya akun?</p>
                </div>
                <Link href="/auth/login" className={styles.link}>
                    Ke Halaman Login
                </Link>
            </section>
        </main>
    );
};

export default TampilanRegister;
