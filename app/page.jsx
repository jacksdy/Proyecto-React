import Image from 'next/image'
import logo from '@/public/images/jackwebLogo.png'
import estilos from "./page.module.css"


const page=()=> {
    return (
        <> 
        <h1>Página principal</h1>        
        <Image className={estilos.logo}
        src={logo}
        alt="imagen Logo JackWebDesing"
        width={80}
        height={80}
        />
        <div className={estilos.banner}>
            <div className={estilos.bannerBackground}>
                <div className={estilos.bannerInfo}>
                    <h2>Colección 2023 de JackwebDesing</h2>
                    <p>Este año ha sido de gran producción para nuestra marca, logrando cifras
                        bastante aceptables por lo que lanzamos una nueva colección a fin de 
                        impulsar...
                    </p>
                </div>
            </div>
        </div>

        </>
    )
}
export default page
