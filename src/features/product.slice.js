import {createSlice} from '@reduxjs/toolkit'
import { outProducts } from '../data/Products'
import { showCategory} from '../data/category'



const initialState = {

  products: outProducts,
  categories: showCategory,
  treandingProduct:[],
  dealsOfDay:[]

};

const productSlice =createSlice({
    name:"products",
    initialState,
    reducers:{
      treandingProducts:(state)=>{
        const filterProduct=state.products.filter((pro)=>pro.trendingProduct)
        state.treandingProduct=filterProduct
      
      },
      dealOfDayProducts:(state)=>{
        const filterProduct=state.products.filter((pro)=>pro.dealsOfDay)
            state.dealsOfDay = filterProduct;
      
      },
    }
})
export const product = state => state.productSlice;
export const {treandingProducts, dealOfDayProducts} = productSlice.actions;
export default productSlice.reducer