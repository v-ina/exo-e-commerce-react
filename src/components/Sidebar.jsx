import './Sidebar.scss'
import { Link } from 'react-router-dom'

function Sidebar ({currentPage , text}){
    return(
        <>
            <div className='sidebar'>   
                {currentPage =="HomePage" && (
                    <ul>
                        <li>
                            <Link to='/'>ACCUEIL</Link>
                        </li>
                        <li>
                            <Link to='/product'>NOS PRODUITS</Link>
                        </li>
                    </ul>
                )}
                {currentPage =="ProductPage" && 
                    <p>vous consulez la liste des produits</p>}
                {currentPage =="productDetailPage" &&
                    <p>{`vous consultez le produit ${text}`}</p>}
            </div>
        </>
    )
}

export default Sidebar