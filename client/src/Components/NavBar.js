import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

const NavBar = ({toggleLogin, setToggleLogin, isLoggedIn, user}) => {
    
    const handleLoginClick = () => {
        setToggleLogin(!toggleLogin)
    }


    return (
        <div className="navbar">
            <ul className='nav-links'>
                <li className='hover'>
                    <Link to="/">Home</Link>
                </li>
                <li className='hover'>
                    <Link to="/contacts_page">Contacts</Link>
                </li>
                <li className='hover'>
                    <Link to='/deals_page'>Deals</Link>
                </li>
                <li className='hover'>
                    <Link to='/companies_page'>Companies</Link>
                </li>
                { isLoggedIn ?  <li className='hover' >{user.name}</li> :
                <li className='hover' onClick={handleLoginClick}>
                    Login
                </li>
                }   
            </ul>
        </div>
    )
}

export default NavBar
