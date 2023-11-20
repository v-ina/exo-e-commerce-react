import './Header.scss'
import {Link} from 'react-router-dom'

function Header({isLogoDisplayed, pageTitle}){
    // a fonction qui creer un composant Header, j'ai cree des parametres. 
    // premiere paramettre, c'est pour afficher le logo, 
    // deuxieme paramettre est pour change le titre de chaque page.

    return(
        <>
            <nav className='Header--nav'>
                <ul>
                    <li>
                        {isLogoDisplayed && (
                        <Link to='/'><img src="https://logopond.com/logos/5f7f8ccf2b7a7189bbaf491e18f5fe34.png" alt="market logo" /></Link>
                    )}
                    </li>
                    <li>
                        {pageTitle ==="on est a l'accueil" ? <Link to='/'><strong>ACCUEIL</strong></Link> : <Link to='/'>ACCUEIL</Link>}
                    </li>
                    <li>
                        {pageTitle ==="on est a page de tout nos produit" ? <Link to='/product'><strong>NOS PRODUITS</strong></Link> : <Link to='/product'>NOS PRODUITS</Link>}
                    </li>
                </ul>
            </nav>   
            <h1>{pageTitle}</h1> 
        </>   
    )
}

export default Header