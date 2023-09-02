'use client'
import Imagen from "@/app/componentes/Imagen"

const FichaIndividual = ({datos}) => {
  return (
    <>
        <div>{datos.title}</div>
        <div>{datos.price}$</div>
        <div>{datos.description}</div>
        <div>{datos.category}</div>
        <div>{datos.rating.rate} ({datos.rating.count})</div>
        <div><Imagen valor={datos}/></div>
        
        <div>
            <button>Comprar</button>
        </div>  
    </>
  )
}

export default FichaIndividual