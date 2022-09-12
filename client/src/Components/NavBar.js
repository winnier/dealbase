import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className='nav'>
            <a>
                <div>DealBase</div>
            </a>
            <ul>
                <NavLink className='NavButton' to='/contacts_page'><button>Contacts</button></NavLink>
                <NavLink className='NavButton' to='/companies_page'><button>Companies</button></NavLink>
                <NavLink className='NavButton' to='/deals_page'><button>Deals</button></NavLink>
            </ul>

        </nav>
    )
}

export default NavBar