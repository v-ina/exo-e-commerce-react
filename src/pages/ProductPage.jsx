import './ProductPage.scss'
import Header from '../components/Header'
import {Link} from 'react-router-dom'
import {sortedByPrice } from '../utils/utils'

function ProductPage(){
    
  return(
    <>
      <Header />
      <main className='products--main'>
        <h2>nos products</h2>
        <div className='products--main__flex'>
          {sortedByPrice.map(product=>{
            return(
              <article className='products__article'>
                <h4>{product.title}</h4>
                <p>€ {product.price}</p>
                <p>category : {product.category? product.category : `none`}</p>
                <Link to={`/product/${product.id}/details`}>voir le plus</Link>
              </article>
            )
          })}
          </div>
      </main>
    </>
  )
}

export default ProductPage