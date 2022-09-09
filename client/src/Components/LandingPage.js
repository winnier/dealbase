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


}

export default LandingPage;