import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./product.module.css";

// Hero Section Component
const HeroSection = () => {
    return (
        <div className={styles.hero}>
            <h1 className="text-3xl font-bold text-white">Selamat Datang di Halaman Produk</h1>
            <p>Temukan berbagai produk menarik di sini</p>
        </div>
    );
}

// Main Section Component
const MainSection = () => {
    return (
        <div className={styles.main}>
            <h2 className="text-2xl font-bold">Daftar Produk</h2>
            <div className={styles.productList}>
                <div className={styles.productItem}>Produk 1</div>
                <div className={styles.productItem}>Produk 2</div>
                <div className={styles.productItem}>Produk 3</div>
            </div>
        </div>
    );
}

// Main View Component
const TampilanProduk = () => {
    const [isLogin, setIsLogin] = useState(true); // ubah jadi true untuk sementara
    const {push} = useRouter();
    
    useEffect(() => {
        if(!isLogin){
            push("/auth/login");
        }
    },[isLogin, push])

    return (
        <div className={styles.container}>
            <HeroSection />
            <MainSection />
        </div>
    );
}

export default TampilanProduk;
