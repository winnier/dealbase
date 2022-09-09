const LandingPage = ({handleContactsClick, handleCompaniesClick, handleDealsClick}) => {

    return (
        <div>
            
            <div className="landing-summary-div" id="your-summary">

                <div className="contacts-summary-div" onClick={(event)=>handleContactsClick(event, 'yours')}>
                </div>

                <div className="companies-summary-div" onClick={(event)=>handleCompaniesClick(event, 'yours')}>
                </div>

                <div className="deals-summary-div" onClick={(event)=>handleDealsClick(event, 'yours')}>
                </div>

            </div>

            <div className="landing-summary-div" id="company-summary">
           
                <div className="contacts-summary-div" onClick={(event)=>handleContactsClick(event, 'all')}>
                </div>

                <div className="companies-summary-div" onClick={(event)=>handleCompaniesClick(event, 'all')}>
                </div>

                <div className="deals-summary-div" onClick={(event)=>handleDealsClick(event, 'all')}>
                </div>


            </div>
            
        </div>
    )




    <h3 className="nav-item" >Contacts</h3>
    <h3 className="nav-item" >Companies</h3>
    <h3 className="nav-item"  >Deals</h3>
}

export default LandingPage;