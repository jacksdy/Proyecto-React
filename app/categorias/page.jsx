import BotonVer from "./BotonVer"
import estilos from "./categorias.module.css"

const page= async() => {
    const categorias = await fetch(`https://fakestoreapi.com/products/categories`)
    .then (response => response.json())

    const productos = await Promise.all(
        categorias.map(async categoria => {
            const producto = await fetch(`https://fakestoreapi.com/products/category/${categoria}?limit=1`)
            .then(response => response.json())
            return {
                image: producto[0].image,
                categoria
            }
        })
    )  
    return (
        <> 
        <h1>Categorías</h1>
        <div className={estilos.columnas}>
            {categorias.map((valor, indice) =>
            <div className={`${estilos.columna} ${estilos.categoria}`} key = {indice}>
                {valor}
            </div>
            )}
        </div>
        <div className={estilos.columnas}>
            {productos.map( (valor, indice) =>
            <div className = {estilos.columna} key = {indice}>
               <BotonVer valor={valor} />
            </div>
            ) }
        </div>
        </>
    )
}
export default page