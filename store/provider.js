'use client'
import { createContext, useState } from "react"
import { Provider } from "react-redux"
import store from "./store"

const AppContext = createContext({
    isOpen: false,
    items: [],
    openCart: () => {},
    handleCloseCart: () => {},
    addItemToCart: () => {},
    getNumberOfItems: () => {},
})

const Providers = ({children}) =>{
    const[isOpen, setIsOpen] = useState(false)
    const[items, setItems] = useState([])

    function handleOpenCart() {
        setIsOpen(true)
    }
    function handleCloseCart() {
        setIsOpen(false)
    }
    function handleAddItemToCart(item){
        const temp = [...items]
        const found = temp.find(product => product.id === item.id)
        if (found){
            found.qty++
        }else{
            item.qty = 1
            temp.push(item)
        }
        setItems([...temp])
    }
    return <Provider store = {store}>
        {children}
    </Provider>
}
export default Providers