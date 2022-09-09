// import { BrowserRouter } from "react-router-dom";
// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

import './App.css';
import {useEffect, useState} from 'react'
import Contacts from './Contacts';

function App() {

  const [contacts, setContacts] = useState([])
<<<<<<< HEAD
  const [companies, setCompanies] = useState([])
  const [deals, setDeals] = useState([])
=======
  const url = 'http://localhost/3000'
>>>>>>> 0249788 (cors resolved in gem & application.rb files)

  // this state beind used for what we render, depending on what link is clicked
  const [renderedContacts, setRenderedContacts] = useState([])
  const [renderedCompanies, setRenderedCompanies] = useState([])
  const [renderedDeals, setRenderedDeals] = useState([])

  
  //fetching complete datasets 
  // I'm using this faker gem in meantime until we get data from backend
  const fetchContacts = async () => {
    const response = await fetch(`http://localhost:3000/contacts`)
    const contactsArray = await response.json()
    setContacts(contactsArray)
    console.log(contacts)
  }

  useEffect(() => {
    fetchContacts()
  },[])

  // still using faker gem
  const fetchCompanies = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const contactsArray = await response.json()
    setCompanies(contactsArray)
    console.log(contacts)
  }

  useEffect(() => {
    fetchCompanies()
  }, )

    // still using faker gem
    const fetchDeals = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
      const contactsArray = await response.json()
      setDeals(contactsArray)
      console.log(contacts)
    }
  
    useEffect(() => {
      fetchDeals()
    }, )


  //done fetching complete datasets 





  //handle click events
  const handleContactsClick =(event, param)=>{
    param === 'yours' ? setRenderedContacts(/*filteredOnlyYours*/) : setRenderedContacts(contacts)
    navigate ('./Components/contacts_page')
  }   

  const handleCompaniesClick =(event, param)=>{
    param === 'yours' ? setRenderedCompanies(/*filteredOnlyYours*/) : setRenderedCompanies(companies)
    navigate ('./Components/companies_page')
  } 

  const handleDealsClick =(event, param)=>{
    param === 'yours' ? setRenderedDeals(/*filteredOnlyYours*/) : setRenderedDeals(deals)
    navigate ('./Components/deals_page')
  } 
  //done with handle click events


  return (
    <div className="App">
      <BrowserRouter>
<<<<<<< HEAD
      <Header 
        handleContactsClick={handleContactsClick} 
        handleCompaniesClick={handleCompaniesClick} 
        handleDealsClick={handleDealsClick}
      />
      <Routes > 
        <Route path="/login" element={<Login/>} />
        <Route path="/create_account" element={<CreateAccount/>} />
        <Route path="/" element={ <LandingPage 
                                      handleContactsClick={handleContactsClick} 
                                      handleCompaniesClick={handleCompaniesClick} 
                                      handleDealsClick={handleDealsClick}
                                      contacts ={contacts}
                                      companies ={companies}
                                      deals = {deals}
                                  />} 
        />
=======
        {/* <Header/> */}
         <Routes > 
          {/* <Route path="/login" element={<Login/>} /> */}
          {/* <Route path="/create_account" element={<CreateAccount/>} /> */}
          {/* <Route path="/" element={ <LandingPage />} /> */}
          <Route path="/contacts_page" element={<Contacts contacts={contacts} />} />
          {/* <Route path="/companies_page" element={<CompaniesPage/>} /> */}
          {/* <Route path="/deals_page" element={<DealsPage/>} /> */}
>>>>>>> 0249788 (cors resolved in gem & application.rb files)

        <Route path="/contacts_page" element={<ContactsPage 
                                                  contacts ={contacts} 
                                                  renderedContacts={renderedContacts} 
                                                  setRenderedContacts = {setRenderedContacts}
                                              />}   
        />

<<<<<<< HEAD
        <Route path="/companies_page" element={<CompaniesPage 
                                                  companies ={companies}   
                                                  renderedCompanies ={renderedCompanies} 
                                                  setRenderedCompanies = {setRenderedCompanies}
                                              />} 
        />
        <Route path="/deals_page" element={<DealsPage 
                                              deals = {deals}   
                                              renderedDeals={renderedDeals} 
                                              setRenderedDeals = {setRenderedDeals}
                                            />} 
        />
        
        <Route path="*" element={<ErrorPage />} />
        
      </Routes > 
      <Footer/>
=======

          {/* <Route path="*" element={<ErrorPage />} /> */}

        </Routes > 
      {/* <Footer/> */}
>>>>>>> 0249788 (cors resolved in gem & application.rb files)
    </BrowserRouter>
    </div>
  );
}



export default App;
