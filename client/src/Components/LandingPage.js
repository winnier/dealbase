import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import CompanyCard from './Company/CompanyCard'
import { BsFillFilePersonFill, BsFillFolderFill} from 'react-icons/bs';
import { FaMoneyBillAlt } from 'react-icons/fa';




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


    const moneyDisplayer = (number) => {
        if (Math.floor(number) != number) {
            let x = number.toString()
            let numArr = x.split('')
            let len = numArr.length
            let a = numArr.indexOf('.')
            for (let pos = a - 1; pos > 0; pos--) {
                if ((a - pos) % 3 == 0 && len - pos != 0) {
                    numArr.splice(pos, 0, ',')
                }
            }
            let numWithCommas = ""
            for (let i = 0; i < numArr.length; i++) {
                numWithCommas += numArr[i]
            }
            return numWithCommas
        } else if (Math.floor(number) == number) {
            let x = number.toString()
            // console.log(x)
            let numArr = x.split('')
            let len = numArr.length
            for (let pos = numArr.length; pos > 0; pos--) {
                if ((len - pos) % 3 == 0 && len - pos != 0) {
                    numArr.splice(pos, 0, ',')
                }
            }
            numArr.unshift("$")
            // console.log(numArr)
            let numWithCommas = ""
            for (let i = 0; i < numArr.length; i++) {
                numWithCommas += numArr[i]
            }
            numWithCommas = numWithCommas + '.00'
            return numWithCommas
        }
    }
    

    return (
        <div className="landing-page">
              {/* <h1>CompanyName's Dashboard</h1> */}
              
              <div className="summary" id="company-summary">
                
                <div id="company-first-div">
                    <Link to="/contacts_page" id="company-contacts" className='landing-card'>
                        <div>
                            <p><b>{contacts.length}</b></p>
                            <BsFillFilePersonFill className='landing-icon'/>
                        </div>
                        
                        <p>Total Contacts</p>
                    </Link>
                    <Link to="/deals_page" id="ttl-deals" className='landing-card'>
                        <div>
                            <p><b>{deals.length}</b></p>
                            <BsFillFolderFill className='landing-icon'/>
                        </div>
                        <p>Total Deals</p>
                    </Link>
                </div>

                <div id="company-second-div">
                   
                    <Link to="/deals_page" id="total-earnings" className='landing-card'>
                        <div>
                            <p><b>{moneyDisplayer(overallSum(deals, 'value'))}</b></p>
                            <FaMoneyBillAlt className='landing-icon'/>
                        </div>
                        <p>Total Overall Earnings</p>
                    </Link>
                    
                    <Link to="/deals_page" id="total-potential-earnings" className='landing-card'>
                        <div>
                            <p><b>{moneyDisplayer(sumValue(deals, 'value'))}</b></p>
                            <FaMoneyBillAlt className='landing-icon'/>
                        </div>
                        <p>Total Potential Earnings</p>
                    </Link>
                </div>
                
                <div id="company-third-div">
                    <Link to="/companies_page" id="company-deals" className='landing-card'>
                        <p>Our company has <b>{companies.length}</b> companies across <b>{countUnique(companies, "country")} </b>countries. Spanning <b>{countUnique(companies, "industry")}</b> industries.</p>
                    </Link>
                </div>
               
            </div>  


            {/* <h1>{user.name}'s Dashboard</h1> */}
            {/* <div className="summary" id="your-summary">
                <Link to="/contacts_page" id="comp-contacts" className='landing-card'>
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
                    <p>You have clients in <b>{yourCompanies.length}</b> companies across <b>{countUnique(yourCompanies, "country")}</b> countries.</p>
                    <p>Spanning <b>{countUnique(yourCompanies, "industry")}</b> industries.</p>
                </Link>
            </div> */}
            
        </div>
    )
}

export default LandingPage;


