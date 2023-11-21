import './HomePage.scss'
import Header from '../components/Header'
import {Link} from 'react-router-dom'
import { products, sortedByPrice } from '../utils/utils'
import Sidebar from '../components/Sidebar'
import ProductCard from '../components/ProductCard'

function HomePage(){

  const sortedByDate = products.sort((producta,productb)=>{
    return new Date(producta.publicationDate) - new Date(productb.publicationDate);
  })
  const theNewestProducts = sortedByDate.slice(-3)
  
  const theCheapestProducts = sortedByPrice.slice(0,3)
 
  return(
    <>
      <Header isLogoDisplayed={true} pageTitle={"on est a l'accueil"}/>
      <Sidebar currentPage={"HomePage"}/>
      <main className='home--main'>
        <h2>Les plus recents! - cuisine</h2>
        <div className='home--main__flex'>
          {theNewestProducts.map(product=>{
            return <ProductCard productprops={product}/>
          })}
        </div>
          
{/* ici, dans les boucles 3 produits plus recents et moins chers, chaque element de boucle
va etre recupere à composant ProductCard et remplir ce composant */}


        <h2>Les moins chers!</h2>
        <div className='home--main__flex'>
          {theCheapestProducts.map(product =>{
            return <ProductCard productprops={product} />
          })}   
        </div>
      </main>
    </>       
  )
}

export default HomePage