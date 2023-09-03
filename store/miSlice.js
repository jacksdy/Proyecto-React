import { createSlice } from "@reduxjs/toolkit";

export const origenSlice = createSlice({
    name:'misValores',
    initialState:{
        categoria:'',
        miCarrito:[]
    },
    reducers:{
        guardarCategoria:(state, action)=>{

        },
        comprar:(state, action)=>{

        },
        devolver:(state, action)=>{

        }
    }
})

export const {guardarCategoria, comprar, devolver} = origenSlice.actions