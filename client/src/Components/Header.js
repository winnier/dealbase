

const Header = ({ handleContactsClick, handleCompaniesClick, handleDealsClick}) => {


    return (
        <div>
            <div id="header-container">
            <img id="header-logo" alt="Company logo" src="https://i.pinimg.com/564x/e4/91/58/e4915811c8ad5a1a9f52d92774536cbc.jpg"/>

            {/* the navbar will conditionally render depending on if we are in the 
                Login/CreateAccount pages, I'll do this in css
            */}
            <div className="nav-bar">
                <h3 className="nav-item" onClick={(event)=>handleContactsClick(event, 'all')}>Contacts</h3>
                <h3 className="nav-item" onClick={(event)=>handleCompaniesClick(event, 'all')}>Companies</h3>
                <h3 className="nav-item" onClick={(event)=>handleDealsClick(event, 'all')} >Deals</h3>
            </div>
            </div>
            
            
        </div>
    )


}

export default Header;