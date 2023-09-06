import Link from "next/link"

const page=()=> {
    return (
        <> 
        Página Principal
        <Link href="/categorias">   <button>Categorías</button></Link>
        <Link href="/productos">    <button>Productos</button></Link>
        </>
    )
}
export default page
