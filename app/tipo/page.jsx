'use client'
import { useEffect, useState } from "react"
import { useSelector  } from "react-redux"
import estilos from "../productos/productos.module.css"
import Ficha from "../componentes/Ficha"

const page=()=> {
    const categoria = useSelector(state => state.misValores.categoria)
    const[contenido, setContenido] = useState("")
    useEffect(()=>{
// sourcery skip: avoid-function-declarations-in-blocks
        async function obtenerDatos(){
            const respuesta = await fetch(`https://fakestoreapi.com/products/category/${categoria}`)
            const datos = await respuesta.json()
            setContenido(()=>datos.map( valor=>
                <Ficha key={valor.id} valor={valor}/>))
        }
        obtenerDatos()
    },[categoria])
    return (
        <> 
            <div className={estilos.productos}>
                {contenido}
            </div>
        </>
    )
}
export default page