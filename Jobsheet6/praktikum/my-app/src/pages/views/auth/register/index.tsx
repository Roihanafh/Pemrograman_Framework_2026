import Link from "next/link"
import { useRouter } from "next/router";
import styles from "./register.module.css";

const TampilanRegister = () => {
    const {push} = useRouter();
    const handlerRegister = () => {
        push("/auth/login");           
    }
     return (
         <div className="flex flex-col items-center justify-center h-screen bg-blue-500">
            <div className="bg-white p-8 rounded-lg shadow-lg space-y-4">
                <h1 className="text-3xl font-bold text-blue-600 text-center">Halaman Register</h1>
                
                <button 
                    onClick={()=>handlerRegister()}
                    className="w-full bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
                >
                    Register
                </button>
                
                <div className="text-center border border-green-500 rounded-md p-3">
                    <p className="text-green-600 font-semibold">sudah punya akun?</p>
                </div>
                
                <Link href="/auth/login" className="block text-center text-blue-600 hover:underline">
                    Ke Halaman Login
                </Link>
            </div>
        </div>
     )
}

export default TampilanRegister;
