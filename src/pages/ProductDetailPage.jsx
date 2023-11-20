import './ProductDetailPage.scss'
import Header from '../components/Header'
import {useParams} from 'react-router-dom'
import { products } from '../utils/utils'

function ProductDetailPage(){

  // en utilisant parametre(:), on va connecter avec id de chaque produit.
  // dans le tableau products, il va chercher un id qui concerne de parametre d'url.
  // et j'ai cree des elements html

  const {productId} = useParams()
  const productDetail = products.find(product=>{
    return product.id == productId
  })

  return(
    <>
      <Header isLogoDisplayed={false} pageTitle={"on est a page detail de produit"} />
      <main className='productDetail--main'>
        <div className='productDetail--box'>
          <h2>{productDetail.title}</h2>
          <p>{productDetail.description}</p>
          <p>€ {productDetail.price}</p>
          <p>{productDetail.publicationDate}</p>
        </div>
      </main>
    </>
  )
}

export default ProductDetailPage