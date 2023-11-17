import './Header.scss'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <nav className='Header--nav'>
            <ul>
                <li><Link to='/'><img src="https://logopond.com/logos/5f7f8ccf2b7a7189bbaf491e18f5fe34.png" alt="market logo" /></Link></li>
                <li><Link to='/'>ACCUEIL</Link></li>
                <li><Link to='/product'>NOS PRODUITS</Link></li>
            </ul>
        </nav>       
    )
}

export default Header