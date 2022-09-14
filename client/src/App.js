// import { render } from "react-dom";
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';


import CompaniesPage from './Components/CompaniesPage';
import CompanyCard from './Components/CompanyCard';
import ContactsPage from './Components/Contact/ContactsPage';

import LandingPage from './Components/LandingPage';
import DealsPage from './Components/DealsPage';
import Footer from './Components/Footer';
import ContactCard from './Components/Contact/ContactCard';
import AddNewContact from './Components/Contact/AddNewContact';
import EditContact from './Components/Contact/EditContact';



import './App.css';
import './Styles/Footer.css';
// import './Styles/Header.css';
import './Styles/PageStyle.css';
import NavBar from './Components/NavBar';
import PipelinePage from './Components/PipelinePage'

function App() {



  return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes > 
            <Route path="/" element={ <LandingPage />} />
            <Route path="/contacts_page" element={<ContactsPage />} />
            <Route path='/contact_profile/:id' element={<ContactCard />}/>
            <Route path="/companies_page" element={<CompaniesPage />} />
            <Route path="/companies/:id" element={<CompanyCard />}/>
            <Route path='/new_contact' element={<AddNewContact />} />
            <Route path='/edit_contact' element={<EditContact />} />
            <Route path="/deals_page" element={<DealsPage />} />
            <Route path='/pipeline_page' element={<PipelinePage />}/>
          </Routes > 
        </BrowserRouter>
        <Footer />
      </div>

  );
}



export default App;
