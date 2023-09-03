import Link from "next/link"
import Imagen from "./Imagen"
import estilos from "./ficha.module.css"

function Ficha({valor}) {
  return (
    <>
        <div className={estilos.productos} >
            <div className="nombre">{valor.title}</div>
            <div className="precio">{valor.price}</div>
            <div className="imagen"><Imagen valor={valor}></Imagen></div>
            <div className="ver"><Link href={`/productos/${valor.id}`} ><button>Ver</button></Link></div>
        </div>
    </>
  )
}

export default Ficha