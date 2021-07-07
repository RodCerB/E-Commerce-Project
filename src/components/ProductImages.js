import React, { useState } from 'react'
import styled from 'styled-components'

// No lugar de simplesmente puxarmos {images}, nós vamos colocar ela inicialmente como  um array vazio.(images=[]). Isso pq quando chamamos a api inicialmente o images vai vir como undefined, assim não teremos nenhum erro
// Veja que não basta colocar como array vazio, pois no Wrapper chamamos o src com main.url, com o array vazio não existe esse .url, dessa formas precisamos pre-setar isso no vazio.
const ProductImages = ({images = [{url:''}]}) => {
  const [main, setMain] = useState(images[0])

  return <Wrapper>
    <img src={main.url} alt="main image" className='main'/>
    <div className='gallery'>
      {images.map((image, index)=>{
        return <img src={image.url} alt={image.filename} key={index} onClick={()=> setMain(images[index])} className={`${image.url === main.url ? 'active' : null}`}/>
      })}
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages
