'use client'
import Image from "next/image"
import estilos from "./ficha.module.css"

const cargador = ({src, width}) => {
    return `${src}?w=${width}`
}

const Imagen = ({valor}) => {
    return (
        <>
            <Image
                loader  = {cargador}
                width   = {150}
                height  = {150}
                src     = {valor.image}
                alt     = {valor.title}
            />
        </>
    )
}
export default Imagen