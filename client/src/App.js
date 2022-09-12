// import { render } from "react-dom";
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';


import CompaniesPage from './Components/CompaniesPage';
import ContactsPage from './Components/ContactsPage';

import LandingPage from './Components/LandingPage';
import DealsPage from './Components/DealsPage';
import Footer from './Components/Footer';
import ContactCard from './Components/ContactCard';
import Navbar from './Navbar'
import './Styles/Navbar.css'


function App() {

  return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes > 
            <Route path="/" element={ <LandingPage />} />
            <Route path="/contacts_page" element={<ContactsPage />} />
            <Route path='/contact_profile/:id' element={<ContactCard />}/>
            <Route path="/companies_page" element={<CompaniesPage />} />
            <Route path="/deals_page" element={<DealsPage />} />
          </Routes > 
        </BrowserRouter>
        <Footer />
      </div>

  );
}



export default App;
