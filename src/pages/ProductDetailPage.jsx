import './ProductDetailPage.scss'
import Header from '../components/Header'
import {useParams} from 'react-router-dom'

function ProductDetailPage(){

  const products = [
    {
      id: 1,
      title: "micro-onde",
      publicationDate: "2021-09-01",
      price: 100,
      description: "chauffe les aliments",
      category: "electromenager",
    },
    {
      id: 2,
      title: "four",
      publicationDate: "2021-10-01",
      price: 150,
      description: "chauffe les aliments",
      category: "electromenager",
    },
    {
      id: 3,
      title: "lave-linge",
      publicationDate: "2021-11-01",
      price: 400,
      description: "lave les linges",
      category: "electromenager",
    },
    {
      id: 4,
      title: "lave-vaisselle",
      publicationDate: "2021-08-01",
      price: 200,
      description: "lave les vaisselles",
      category: "electromenager",
    },
    {
      id: 5,
      title: "aspirateur",
      publicationDate: "2022-02-01",
      price: 720,
      description: "aspire les poussières",
      category: "electromenager",
    },
    {
      id: 6,
      title: "cuisinière",
      publicationDate: "2022-12-01",
      price: 350,
      description: "cuit les aliments",
      category: "electromenager",
    },
    {
      id: 7,
      title: "réfrigérateur",
      publicationDate: "2022-03-01",
      price: 600,
      description: "refroidit les aliments",
      category: "electromenager",
    },
    {
      id: 8,
      title: "congélateur",
      publicationDate: "2022-04-01",
      price: 450,
      description: "congèle les aliments",
      category: "electromenager",
    },
    {
      id: 9,
      title: "télévision",
      publicationDate: "2022-10-10",
      price: 700,
      description: "affiche des images",
      category: "electromenager",
    },
    {
      id: 10,
      title: "ordinateur",
      publicationDate: "2022-06-01",
      price: 1000,
      description: "affiche des images",
    },
  ];

  const {productId} = useParams()
  const productDetail = products.find(product=>{
    return product.id == productId
  })

  return(
    <>
      <Header />
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