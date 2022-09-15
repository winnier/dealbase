import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import CompanyCard from './Company/CompanyCard'


const LandingPage = (user) => {


    const [deals, setDeals] = useState([])
    const [companies, setCompanies] = useState([])
    const [contacts, setContacts] = useState([])

    const [yourDeals, setYourDeals] = useState([])
    const [yourCompanies, setYourCompanies] = useState([])
    const [yourContacts, setYourContacts] = useState([])


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
        setYourDeals(()=> yourData(deals, user))
        setYourCompanies(companies, user)
        setYourContacts(contacts, user)
    }, [])
    

    const yourData = (table, user) => {
        let yourArr = []
        table.forEach((element) => {
            if (!element.owner_name == user.name){
                yourArr.push(element)
                console.log(element)
            }
        });
         return yourArr
    }


console.log()
    const overallSum = (table, columnName) => {
        let sum = 0
        table.forEach((element) => {
            if ((element.stage) == 5) {
                sum += element[columnName]
            }
        })
        return sum
    }


    const sumValue = (table, columnName) =>{
        let arr = []
        let sum = 0
        table.forEach((element) => {     
            sum += element[columnName]
        }
        );   
        return sum
    }


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
                <Link to="/contacts_page" id="company-contacts" className='landing-card'>
                    <h1>Contacts</h1>
                    <p>Number of contacts: {yourContacts.length}</p>
                </Link>

                <Link to="/deals_page" id="deals-page" className='landing-card'>
                    <h1>Deals</h1>
                    <p>Number of deals: {deals.length}</p>
                    <p>Total overall earnings: {overallSum(yourDeals, 'value')}</p>
                    <p>Total potential earnings: {sumValue(yourDeals, 'value')}</p>
                </Link>

                <Link to="/companies_page" id="company-deals" className='landing-card'>
                    <h1>Companies</h1>
                    {/* we can rename these things */}
                    <p>{yourCompanies.length} companies across {countUnique(yourCompanies, "country")} countries.</p>
                    <p>Spanning {countUnique(yourCompanies, "industry")} industries.</p>
                </Link>
            </div>

            <h2>CompanyName's Dashboard</h2>
            <div className="summary" id="company-summary">
                <Link to="/contacts_page" id="company-contacts" className='landing-card'>
                    <h1>Contacts</h1>
                    <p>Number of contacts: {contacts.length}</p>
                </Link>

                <Link to="/deals_page" id="deals-page" className='landing-card'>
                    <h1>Deals</h1>
                    <p>Number of deals: {deals.length}</p>
                    <p>Total overall earnings: {overallSum(deals, 'value')}</p>
                    <p>Total potential earnings: {sumValue(deals, 'value')}</p>
                </Link>

                <Link to="/companies_page" id="company-deals" className='landing-card'>
                    <h1>Companies</h1>
                    {/* we can rename these things */}
                    <p>{companies.length} companies across {countUnique(companies, "country")} countries.</p>
                    <p>Spanning {countUnique(companies, "industry")} industries.</p>
                </Link>

            </div>  
            
        </div>
    )
}

export default LandingPage;


