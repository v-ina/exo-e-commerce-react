import './HomePage.scss'
import Header from '../components/Header'
import {Link} from 'react-router-dom'
import { products, sortedByPrice } from '../utils/utils'

function HomePage(){

  const sortedByDate = products.sort((producta,productb)=>{
    return new Date(producta.publicationDate) - new Date(productb.publicationDate);
  })
  const theNewestProducts = sortedByDate.slice(-3)
  
  const theCheapestProducts = sortedByPrice.slice(0,3)




 
  return(
    <>
      <Header isLogoDisplayed={true} pageTitle={"on est a l'accueil"}/>

      <main className='home--main'>
        <h2>Les plus recents! - cuisine</h2>
        <div className='home--main__flex'>
          {theNewestProducts.map(product=>{
            return(
              <div className='product__box'>
                <h4>{product.title}</h4>
                <p>date : {product.publicationDate}</p>
                <p>€ {product.price}</p>
                <Link to={`/product/${product.id}/details`}>voir le detail</Link>
              </div>
            )
          })}
        </div>
          
        <h2>Les moins chers!</h2>
        <div className='home--main__flex'>
          {theCheapestProducts.map(product =>{
            return(
              <div className='product__box'>
                <h4>{product.title}</h4>
                <p>€ {product.price}</p>
                <Link to={`/product/${product.id}/details`}>voir le detail</Link>
              </div>
            )
          })}   
        </div>
      </main>
    </>       
  )
}

export default HomePage