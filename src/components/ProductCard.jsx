import { Link } from "react-router-dom"

function ProductCard ({productprops}){
    return(
        <>
            <div className='product__box'>
                <h4>{productprops.title}</h4>
                <p>date : {productprops.publicationDate}</p>
                <p>€ {productprops.price}</p>
                <Link to={`/product/${productprops.id}/details`}>voir le detail</Link>
            </div>
        </>
    )
}

// j'ai cree un composant qui me permet de repeter a creer les balises HTML.
// dans cette page, je vais recevoir props et je vais creer les balises HTML.

export default ProductCard