'use client'

import Imagen from "@/app/componentes/Imagen"
import { comprar } from "@/store/miSlice"
import Link from "next/link"
import { useDispatch } from "react-redux"
import estilos from "./FichaIndividual.module.css"

const FichaIndividual = ({datos}) => {
  const dispatch = useDispatch()
  const adquirir = (datos) =>{
    dispatch( comprar(
      {
        producto:datos.id,
        precio:datos.price,
        imagen:datos.image
      }
    ))
  }
  return (
    <>
    <div className={estilos.cajita}>
      <div>
          <Imagen valor={datos}/>
      </div>
      <div><h2>{datos.title}</h2></div>
      <div>
        <div><h3>{datos.price}$</h3></div>
        <div>{datos.description}</div>
        <div>{datos.category}</div>
        <div>Rating: {datos.rating.rate} | Count: ({datos.rating.count})</div>
      </div>
      <div className={estilos.buttons}>
          <button className={estilos.btn}
            onClick = { () => adquirir (datos)} > 
              Comprar 
          </button>
       
          <Link href="/productos"><button className={estilos.btn}>Volver</button></Link>
      </div>  
    </div>
    </>
  )
}

export default FichaIndividual