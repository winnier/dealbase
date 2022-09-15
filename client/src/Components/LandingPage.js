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


    console.log(user)
    return (
        <div className="landing-page">
            <h1>{user.name}'s Dashboard</h1>
            <div className="summary" id="your-summary">
                <Link to="/contacts_page" id="company-contacts" className='landing-card'>
                    <h2>Contacts</h2>
                    <p>Number of contacts: <b>{yourContacts.length}</b></p>
                </Link>

                <Link to="/deals_page" id="deals-page" className='landing-card'>
                    <h2>Deals</h2>
                    <p>Number of deals: <b>{yourDeals.length}</b></p>
                    <p>Total overall earnings: <b>{overallSum(yourDeals, 'value')}</b></p>
                    <p>Total potential earnings: <b>{sumValue(yourDeals, 'value')}</b></p>
                </Link>

                <Link to="/companies_page" id="company-deals" className='landing-card'>
                    <h2>Companies</h2>
                    {/* we can rename these things */}
                    <p><b>{yourCompanies.length}</b> companies across <b>{countUnique(yourCompanies, "country")}</b> countries.</p>
                    <p>Spanning <b>{countUnique(yourCompanies, "industry")}</b> industries.</p>
                </Link>
            </div>

            <h1>CompanyName's Dashboard</h1>
            <div className="summary" id="company-summary">
                <Link to="/contacts_page" id="company-contacts" className='landing-card'>
                    <h2>Contacts</h2>
                    <p>Number of contacts: <b>{contacts.length}</b></p>
                </Link>

                <Link to="/deals_page" id="deals-page" className='landing-card'>
                    <h2>Deals</h2>
                    <p>Number of deals: <b>{deals.length}</b></p>
                    <p>Total overall earnings: <b>{overallSum(deals, 'value')}</b></p>
                    <p>Total potential earnings: <b>{sumValue(deals, 'value')}</b></p>
                </Link>

                <Link to="/companies_page" id="company-deals" className='landing-card'>
                    <h2>Companies</h2>
                    {/* we can rename these things */}
                    <p><b>{companies.length}</b> companies across <b>{countUnique(companies, "country")} </b>countries.</p>
                    <p>Spanning <b>{countUnique(companies, "industry")}</b> industries.</p>
                </Link>

            </div>  
            
        </div>
    )
}

export default LandingPage;


