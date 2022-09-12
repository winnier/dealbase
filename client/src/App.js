// import { render } from "react-dom";
import { Routes, Route, useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react'

import CompaniesPage from './Components/CompaniesPage';
import ContactsPage from './Components/ContactsPage';
import Header from './Components/Header';
import Login from './Components/Login';
import CreateAccount from './Components/CreateAccount';
import LandingPage from './Components/LandingPage';
import DealsPage from './Components/DealsPage';
import ErrorPage from './Components/ErrorPage';
import Footer from './Components/Footer';
import ContactCard from './Components/ContactCard';


import './App.css';
import './Style/Footer.css';
import './Style/Header.css';
import './Style/PageStyle.css';


function App() {
  const navigate = useNavigate()
  const [contacts, setContacts] = useState([])
  const [companies, setCompanies] = useState([])
  const [deals, setDeals] = useState([])

  // const url = 'http://localhost/3000'

  // this state beind used for what we render, depending on what link is clicked
  // const [renderedContacts, setRenderedContacts] = useState([])
  // const [renderedCompanies, setRenderedCompanies] = useState([])
  // const [renderedDeals, setRenderedDeals] = useState([])

  // const [selectedContactID, setSelectedContactID] = useState(null)

  // const navigate = useNavigate()
  // const [contacts, setContacts] = useState([])
  // const [companies, setCompanies] = useState([])
  // const [deals, setDeals] = useState([])
  // const url = 'http://localhost/3000'

  // this state beind used for what we render, depending on what link is clicked
  // const [renderedContacts, setRenderedContacts] = useState([])
  // const [renderedCompanies, setRenderedCompanies] = useState([])
  // const [renderedDeals, setRenderedDeals] = useState([])

  

  const fetchContacts = async () => {
    const response = await fetch(`http://localhost:3000/contacts`)
    const contactsArray = await response.json()
    setContacts(contactsArray)
  }

  useEffect(() => {
    fetchContacts()
  },[])

  // still using faker gem
  const fetchCompanies = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const contactsArray = await response.json()
    setCompanies(contactsArray)
  }

  useEffect(() => {
    fetchCompanies()
  }, [])

    // still using faker gem
    const fetchDeals = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
      const contactsArray = await response.json()
      setDeals(contactsArray)
    }
  
    useEffect(() => {
      fetchDeals()
    }, [])



  //handle click events
  // const handleContactsClick =(event, param)=>{
  //   param === 'yours' ? setRenderedContacts(/*filteredOnlyYours*/) : setRenderedContacts(contacts)
  //   navigate ('./Components/contacts_page')
  // }   


  // const handleCompaniesClick =(event, param)=>{
  //   param === 'yours' ? setRenderedCompanies(/*filteredOnlyYours*/) : setRenderedCompanies(companies)
  //   navigate ('./Components/companies_page')
  // } 

  // const handleDealsClick =(event, param)=>{
  //   param === 'yours' ? setRenderedDeals(/*filteredOnlyYours*/) : setRenderedDeals(deals)
  //   navigate ('./Components/deals_page')
  // } 
  //done with handle click events




  //handle click events
  // const handleContactsClick =(event, param)=>{
  //   param === 'yours' ? setRenderedContacts(/*filteredOnlyYours*/) : setRenderedContacts(contacts)
  //   navigate ('./Components/contacts_page')
  // }   

  // const handleCompaniesClick =(event, param)=>{
  //   param === 'yours' ? setRenderedCompanies(/*filteredOnlyYours*/) : setRenderedCompanies(companies)
  //   navigate ('./Components/companies_page')
  // } 

  // const handleDealsClick =(event, param)=>{
  //   param === 'yours' ? setRenderedDeals(/*filteredOnlyYours*/) : setRenderedDeals(deals)
  //   navigate ('./Components/deals_page')
  // } 
  //done with handle click events


  return (
      <div>
        <Header
          // handleContactsClick={handleContactsClick} 
          // handleCompaniesClick={handleCompaniesClick} 
          // handleDealsClick={handleDealsClick}
        />
        <Routes > 
          {/* <Route path="/login" element={<Login/>} />
          <Route path="/create_account" element={<CreateAccount/>} />
          <Route path="/" element={ <LandingPage 
                                        handleContactsClick={handleContactsClick} 
                                        handleCompaniesClick={handleCompaniesClick} 
                                        handleDealsClick={handleDealsClick}
                                        contacts ={contacts}
                                        companies ={companies}
                                        deals = {deals}
                                    />} 
          /> */}

          <Route path="/contacts_page" element={<ContactsPage 
                                                    // contacts ={contacts} 
                                                    // setContacts= {setContacts}
                                                    // renderedContacts={renderedContacts} 
                                                    // setRenderedContacts = {setRenderedContacts}
                                                />}   
          />

          <Route path="/companies_page" element={<CompaniesPage 
                                                    // companies ={companies}   
                                                    // renderedCompanies ={renderedCompanies} 
                                                    // setRenderedCompanies = {setRenderedCompanies}
                                                />} 
          />
          <Route path="/deals_page" element={<DealsPage 
                                                // deals = {deals}   
                                                // setDeals = {setDeals}
                                              />} 
          />
          <Route path='/contact_profile/:id' element={<ContactCard/>}/>
          {/* <Route path="*" element={<ErrorPage />} /> */}
          
        </Routes > 
        <Footer/>
      </div>

  );
}



export default App;
