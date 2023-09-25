'use client'

import { useSelector, useDispatch } from "react-redux"
import estilos from "./carrito.module.css"
import { useMemo, useState } from "react"
import { devolver } from "@/store/miSlice"
import Image from "next/image"
import Link from "next/link"

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
        <div className={estilos.miCarrito}>
            <div className={estilos.barraTotal}>
                <b>Total:</b> {total.toFixed(2)}$<b> | Cantidad: </b>{carrito.length}
            </div>
            {carrito.length > 0
            ?
            (carrito.map((valor, indice) =>
                <div key = {indice}>
                    <img
                        onClick = {() => eliminar(valor.producto)}
                        src     = {valor.imagen}
                        alt     = {valor.title}
                        height  = "40"
                    /> 
                    - Costo : {valor.precio}
                
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