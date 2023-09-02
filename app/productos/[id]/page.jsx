const cargarDatos=(id)=>{
    return fetch(`https://fakestoreapi.com/products/${id}`, {cache:'no-store'})
    .then(response => response.json())
}

const page = async ({params})=> {
    const {id} = params
    const datos = await cargarDatos(id)
    return (
        <> 
        
        </>
    )
}
export default page  