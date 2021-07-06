import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
  // Para pegarmos a id do produto individual, usamos o Params que é do próprio react-router, se lembra que o link individual dos produtos leva o id deles? Pois bem, agora usando o params re-pegamos esse id que vamos usar para chamar a api
  const {id} = useParams()
  const history = useHistory()
  const {
    single_product_loading:loading, 
    single_product_error:error, 
    single_product:product, 
    fetchSingleProduct} = useProductsContext()

  useEffect(()=>{
    fetchSingleProduct(`${url}${id}`)
  },[])

  useEffect(()=>{
    console.log(error)
    if(error){
      // aqui vamos deixar programado para caso de erro na chamada do singlebook, depois de 3 segundo irá retornar para a home
      setTimeout(()=>{
        history.push('/')
      },3000)
    }
    // precisamos colocar para o useEffect mudar com o false pq se lembra, ao chamar a api colocamos para deixar o false sempre falso, e só depois ele vai para true em caso de erro. 
  },[false])

  if(loading){
    return <Loading />
  }
  if(error){
    return <Error />
  }
  return <h4>single product page</h4>
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
