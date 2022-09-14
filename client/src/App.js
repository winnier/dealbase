// import { render } from "react-dom";
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';
=======
import { useState } from 'react';


>>>>>>> 27f83c5 (landing page changes, also added the toggle for the companies)
import CompaniesPage from './Components/CompaniesPage';
import CompanyCard from './Components/CompanyCard';
import LandingPage from './Components/LandingPage';
import DealsPage from './Components/DealsPage';
import Footer from './Components/Footer';
<<<<<<< HEAD
import DealCard from './Components/DealCard'


import ContactsPage from './Components/Contact/ContactsPage';
import ContactCard from './Components/Contact/ContactCard';
import AddNewContact from './Components/Contact/AddNewContact';
import EditContact from './Components/Contact/EditContact';
=======
import ContactCard from './Components/ContactCard';
import AddNewContact from './Components/AddNewContact';
import EditContact from './Components/EditContact';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
>>>>>>> 27f83c5 (landing page changes, also added the toggle for the companies)

import './App.css';
import './Styles/Footer.css';
// import './Styles/Header.css';
import './Styles/PageStyle.css';
<<<<<<< HEAD
import NavBar from './Components/NavBar';
import PipelinePage from './Components/PipelinePage';

function App() {
  return (
      <div>

        <DndProvider backend={HTML5Backend}>
          <BrowserRouter>
            <NavBar />
            <Routes > 
              <Route path="/" element={ <LandingPage />} />
              <Route path="/contacts_page" element={<ContactsPage />} />
              <Route path='/contact_profile/:id' element={<ContactCard />}/>
              <Route path='/deal_profile/:id' element={<DealCard />}/>
              <Route path="/companies_page" element={<CompaniesPage />} />
              <Route path="/companies/:id" element={<CompanyCard />}/>
              <Route path='/new_contact' element={<AddNewContact />} />
              <Route path='/edit_contact' element={<EditContact />} />
              <Route path="/deals_page" element={<DealsPage />} />
              <Route path="/pipeline_page" element={<PipelinePage />} />
            </Routes > 
          </BrowserRouter>
          <Footer />
        </DndProvider>

=======
import './Styles/LandingPage.css';



function App() {

  const [user, setUser] = useState({})
  const [toggleLogin, setToggleLogin] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  return (
      <div>
        <BrowserRouter>
          <NavBar toggleLogin={toggleLogin} setToggleLogin={setToggleLogin} isLoggedIn={isLoggedIn} user={user} />
          { toggleLogin ? <Login setUser={setUser} setIsLoggedIn={setIsLoggedIn} /> : null}
          <Routes > 
            <Route path="/" element={ <LandingPage user={user} />} />
            <Route path="/contacts_page" element={<ContactsPage />} />
            <Route path='/contact_profile/:id' element={<ContactCard />}/>
            <Route path="/companies_page" element={<CompaniesPage />} />
            <Route path="/companies/:id" element={<CompanyCard />}/>
            <Route path='/new_contact' element={<AddNewContact />} />
            <Route path='/edit_contact' element={<EditContact />} />
            <Route path="/deals_page" element={<DealsPage />} />
          </Routes > 
        </BrowserRouter>
        <Footer />
>>>>>>> 27f83c5 (landing page changes, also added the toggle for the companies)
      </div>

  );
}

export default App;
