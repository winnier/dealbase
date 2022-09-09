

const Header = ({ handleContactsClick, handleCompaniesClick, handleDealsClick}) => {



    onclick 
    return (
        <div>
            <img id="header-logo">*LOGO HERE*</img>
            {/* the navbar will conditionally render depending on if we are in the 
                Login/CreateAccount pages, I'll do this in css
             */}
            <div className="nav-bar">
                <h3 className="nav-item" onClick={(event)=>handleContactsClick(event, 'all')}>Contacts</h3>
                <h3 className="nav-item" onClick={(event)=>handleCompaniesClick(event, 'all')}>Companies</h3>
                <h3 className="nav-item" onClick={(event)=>handleDealsClick(event, 'all')} >Deals</h3>
            </div>
            
        </div>
    )


}

export default Header;