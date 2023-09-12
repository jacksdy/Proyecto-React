import Link from "next/link"

const page=()=> {
    return (
        <> 
        <h1>Página Principal</h1>
        <Link href="/categorias">   <button>Categorías</button></Link>
        <Link href="/productos">    <button>Productos</button></Link>
        </>
    )
}
export default page
