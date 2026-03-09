import { useRouter } from "next/router";
import styles from "./detail.module.css";

const TampilanDetailProduk = () => {
    const {query} = useRouter();
    
    return (
        <div className={styles.container}>
            <div className={styles.detail}>
                <h1 className="text-3xl font-bold">Halaman Detail Produk</h1>
                <div className={styles.productInfo}>
                    <p>ID Produk: <strong>{query.id}</strong></p>
                    <p>Informasi detail produk akan ditampilkan di sini</p>
                </div>
            </div>
        </div>
    )
}

export default TampilanDetailProduk;
