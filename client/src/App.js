// import { BrowserRouter } from "react-router-dom";
// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import {useEffect, useState} from 'react'
import Contacts from './Contacts';

function App() {

  const [contacts, setContacts] = useState([])
  const url = 'http://localhost/3000'


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

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header/> */}
         <Routes > 
          {/* <Route path="/login" element={<Login/>} /> */}
          {/* <Route path="/create_account" element={<CreateAccount/>} /> */}
          {/* <Route path="/" element={ <LandingPage />} /> */}
          <Route path="/contacts_page" element={<Contacts contacts={contacts} />} />
          {/* <Route path="/companies_page" element={<CompaniesPage/>} /> */}
          {/* <Route path="/deals_page" element={<DealsPage/>} /> */}

          {/* <Route path="/contacts_card/:id" element={<ContactsPage/>} /> */}
          {/* <Route path="/companies_page" element={<CompaniesPage/>} />
          <Route path="/deals_page" element={<DealsPage/>} /> */}


          {/* <Route path="*" element={<ErrorPage />} /> */}

        </Routes > 
      {/* <Footer/> */}
    </BrowserRouter>

    </div>
  );
}

export default App;
