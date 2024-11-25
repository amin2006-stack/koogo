import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
    'get/getAllProducts',
    async (arg, {rejectedWithValue}) =>{
        try {
            console.log(arg)

            let api = arg === 'default' ? 'http://localhost:5000/products' :
                `http://localhost:5000/products?_sort=price&_order=${arg}`

            const res = await axios(api)
            if (res.status !== 200) {
                throw new Error ('Ошибка при получение продуктов')
            }
            return res.data
        } catch (err) {
            return rejectedWithValue(err.message)
        }
    }
)

const products = createSlice({
    name:'products',
    initialState:{
        data:[],
        status:'idle',
        error: null,
        filter: {
            page: 2,
            filterPrice: 'default'
        }
    },
    reducers:{
        changeOrder: (state)=>{
            state.filter.order = !state.filter.order
        },
        changePage : (state, action) =>{
            state.filter.page = action.payload
        },
        changeFilterPrice : (state, action) => {
            state.filter.filterPrice = action.payload
        }

    },
    extraReducers:(builder) => {
        builder
            .addCase(getAllProducts.pending, (state, action)=>{
                state.status = 'loading'
                state.error = 'null'
            })
            .addCase(getAllProducts.rejected, (state, action) =>{
                state.status = 'error'
                state.error = action.payload
            })
            .addCase(getAllProducts.fulfilled, (state, action) =>{
                state.status = 'success'
                state.data = action.payload
            })
    }
})

export const {changeOrder, changePage, changeFilterPrice} = products.actions
export default products.reducer