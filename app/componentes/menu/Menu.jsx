import Link from "next/link"
import estilos from "./menu.module.css"
const Menu=()=> {
    return (
        <>
        <nav className={estilos.menu}>
            <div>
                <Link href = {`/`} className={estilos.link}>Inicio</Link>
                <Link href="/categorias" className={estilos.link}>Categorías</Link>
                <Link href="/productos" className={estilos.link}>Productos</Link>
            </div>
            <div>
                <Link className={estilos.link} href = {`/`} >
                    Carrito
                </Link>
            </div>
        </nav> 
        </>
    )
}
export default Menu