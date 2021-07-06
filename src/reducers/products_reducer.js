import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
  if(action.type === SIDEBAR_OPEN){
    return {...state, isSidebarOpen:true}
  }
  if(action.type === SIDEBAR_CLOSE){
    return {...state, isSidebarOpen:false}
  }
  if(action.type === GET_PRODUCTS_BEGIN){
    return {...state, products_loading:true}
  }
  if(action.type === GET_PRODUCTS_SUCCESS){
    const featured_products = action.payload.filter(
      (product)=>product.featured === true)
    
    return {
      ...state, 
      products_loading:false, 
      products:action.payload,
      // featured_products tem o mesmo nome, nao precisa fazer :featu.... 
      featured_products}
  }
  if(action.type === GET_SINGLE_PRODUCT_ERROR){
    return {...state, products_loading:false, products_error:true}
  }

  // single product:
  if(action.type === GET_SINGLE_PRODUCT_BEGIN){
    return {
      ...state, 
      single_product_loading:true,
      // aqui precisamos colocar um erro false para cada produto individualmente, pq diferente do featuredproducts, onde chamava tudo de uma mesma api, aqui poderemos ter o caso de um produto falhar e o outro não, por isso precisamos toda busca setar o erro como falso 
      single_product_error:false}
  }
  if(action.type === GET_SINGLE_PRODUCT_SUCCESS){
    return {
      ...state, 
      single_product_loading:false, 
      single_product: action.payload}
  }
  if(action.type === GET_SINGLE_PRODUCT_ERROR){
    return {
      ...state, 
      single_product_loading:false,
      single_product_error:true}
  }

  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
