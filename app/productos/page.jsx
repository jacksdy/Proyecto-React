import Ficha from "../componentes/Ficha"
import estilos from "./productos.module.css"

const cargarDatos = () =>{
    return fetch(`https://fakestoreapi.com/products`, {cache:'no-store'})
    .then(response => response.json())
}

export default async function page () {
    const datos = await cargarDatos()
    return (
        <> 
        <div className={estilos.productos}>
            {datos.map((valor, indice) =>
                <Ficha valor={valor} key={indice}/>
            )}
        </div>
        </>
    )
}
