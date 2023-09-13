'use client'

import { useSelector, useDispatch } from "react-redux"
/* import Imapeque from "../componentes/Imapeque" */
import estilos from "./carrito.module.css"
import { useMemo, useState } from "react"
import { devolver } from "@/store/miSlice"

const Carrito = () => { 
    const [total, setTotal] = useState(0)
    const carrito = useSelector (state => state.misValores.miCarrito)
    const dispatch = useDispatch()
    
    const calculoTotal = useMemo ( () => setTotal(carrito.reduce((acumulador, valorActual) => 
        acumulador + valorActual.precio, 0)), [carrito])
        const eliminar = (producto) => {
            dispatch(devolver (producto))
        }
    return (
        <> 
        <div>{total}</div>
        <div className={estilos.miCarrito}>
            {carrito.length > 0
            ?
            (carrito.map((valor, indice) =>
                <div key = {indice}>
                 {/* <Imapeque valor = {valor}/> */}
                    <img
                        onClick = {() => eliminar(valor.producto)}
                        src     = {valor.imagen}
                        alt     = {valor.title}
                        height  = "50"
                    />
                </div>
            ))
            :
            ( <div>(No hay productos en el carrito)</div> )
            }
        </div>
        </>
    )
}
export default Carrito