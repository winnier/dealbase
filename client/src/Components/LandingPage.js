import {useState, useEffect} from 'react'
import CompanyCard from './CompanyCard'


const LandingPage = (user) => {

    const [deals, setDeals] = useState([])
    const [companies, setCompanies] = useState([])
    const [contacts, setContacts] = useState([])


    // fetch deals
    const getDeals = async () => {
        let req = await fetch('http://localhost:3000/deals')
        let res = await req.json()
        setDeals(res)
    }

    // fetch companies
    const getCompanies = async () => {
        let req = await fetch('http://localhost:3000/companies')
        let res = await req.json()
        setCompanies(res)
    }



    // fetch contacts
    const getContacts = async () => {
        let req = await fetch('http://localhost:3000/contacts')
        let res = await req.json()
        setContacts(res)
    }

    useEffect(() => {
        getContacts()
        getDeals()
        getCompanies()
    }, [])



    const sumValue = (table, columnName) =>{
        let arr = []
        table.forEach((element) => {
            if (!arr.includes(element[columnName])){
                arr.push(element[columnName])
            }
    });    }


    const countUnique = (table, columnName) =>{
        let arr = []
        table.forEach((element) => {
            if (!arr.includes(element[columnName])){
                arr.push(element[columnName])
            }
        });

        return arr.length
    }


    return (
        <div className="landing-page">
            <h2>{user.name}'s Dashboard</h2>
            <div className="summary" id="your-summary">
                <div id="your-contacts" className='landing-card'>
                    <h1>Contacts</h1>

                </div>

                <div id="your-companies" className='landing-card'>
                    <h1>Deals</h1>
                   
                </div>

                <div id="your-deals" className='landing-card'>
                    <h1>Companies</h1>
                      
                        
                </div>
            </div>

            <h2>CompanyName's Dashboard</h2>
            <div className="summary" id="company-summary">
                <div id="company-contacts" className='landing-card'>
                    <h1>Contacts</h1>
                    <p>Number of contacts: {contacts.length}</p>
                </div>

                <div id="company-companies" className='landing-card'>
                    <h1>Deals</h1>
                    <p>Number of deals: {deals.length}</p>
                    <p>Total overall earnings: {sumValue()}</p>
                    <p>Total potential earnings: </p>
                </div>

                <div id="company-deals" className='landing-card'>
                    <h1>Companies</h1>
                    {/* we can rename these things */}
                    <p>{companies.length} companies across {countUnique(companies, "country")} countries.</p>
                    <p>Spanning {countUnique(companies, "industry")} industries.</p>
                </div>

            </div>  
            
        </div>
    )


}

export default LandingPage;