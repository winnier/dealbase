import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

const NavBar = () => {
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
            </ul>
        </div>
    )
}

export default NavBar
