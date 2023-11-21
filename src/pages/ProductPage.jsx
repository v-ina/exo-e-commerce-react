import './ProductPage.scss'
import Header from '../components/Header'
import {Link} from 'react-router-dom'
import {sortedByPrice } from '../utils/utils'
import Sidebar from '../components/Sidebar'
import ProductCard from '../components/ProductCard'

function ProductPage(){

  return(
    <>
      <Header isLogoDisplayed={true} pageTitle={"on est a page de tout nos produit"}/>
      {/* a chaque page, quand j'apelle mon fonciont Header, je mes parametre comme je veux */}
      {/* ici, je veux afficher logo, donc true pour mon fonction qui s'appelle isLogoDisplayed, */}
      {/* et "on est a pagae de tout nos produit" pour le fonction pageTitle */}
      
      <Sidebar currentPage={"ProductPage"}/>
      <main className='products--main'>
        <h2>nos products</h2>
        <div className='products--main__flex'>
          {sortedByPrice.map(product=>{
            return <ProductCard productprops={product} />
          })}
          </div>
      </main>
    </>
  )
}

export default ProductPage