import Link from "next/link"
import { useRouter } from "next/router";

const halamanLogin = () => {
    const {push} = useRouter();
    const handlerLogin = () => {
        push("/product");           
    }
     return (
         <div>
            <h1>Halaman Login</h1>
            {/* <button onClick={()=>push("/product")}>Login</button> */}
            <button onClick={()=>handlerLogin()}>Login</button>
            <Link href="/auth/register">Ke Halaman Register</Link>
        </div>
     )
}

export default halamanLogin;