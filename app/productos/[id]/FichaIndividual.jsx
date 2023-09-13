'use client'

import Imagen from "@/app/componentes/Imagen"
import { comprar } from "@/store/miSlice"
import Link from "next/link"
import { useDispatch } from "react-redux"

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
    <div>
    <div><h2>{datos.title}</h2></div>
      <div>
          <Imagen valor={datos}/>
      </div>
      <div>
        <div><h3>{datos.price}$</h3></div>
        <div>{datos.description}</div>
        <div>{datos.category}</div>
        <div>Rating: {datos.rating.rate} | Count: ({datos.rating.count})</div>
      </div>
      <div>
          <button 
            onClick = { () => adquirir (datos)} > 
              Comprar 
          </button>
          <Link href="/productos"><button>Volver</button></Link>
      </div> 
    </div>
    </>
  )
}

export default FichaIndividual