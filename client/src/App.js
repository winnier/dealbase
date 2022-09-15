// import { render } from "react-dom";
import {useState} from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';


import CompaniesPage from './Components/Company/CompaniesPage';
import CompanyCard from './Components/Company/CompanyCard';
import LandingPage from './Components/LandingPage';
import Footer from './Components/Footer';
import Login from './Components/Login'


import DealsPage from './Components/Deal/DealsPage';
import DealCard from './Components/Deal/DealCard'
import AddNewDeal from './Components/Deal/AddNewDeal'

import ContactsPage from './Components/Contact/ContactsPage';
import ContactCard from './Components/Contact/ContactCard';
import AddNewContact from './Components/Contact/AddNewContact';
import EditContact from './Components/Contact/EditContact';

// STYLESHEETS
import './App.css';
import './Styles/Footer.css';
import './Styles/LandingPage.css';
import './Styles/PageStyle.css';
import './Styles/Login.css';


// COMPONENTS
import NavBar from './Components/NavBar';
import PipelinePage from './Components/PipelinePage'



function App() {

  const [user, setUser] = useState({})
  const [toggleLogin, setToggleLogin] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
      <div>
        <DndProvider backend={HTML5Backend}>
          <BrowserRouter>
            <NavBar toggleLogin={toggleLogin} setToggleLogin={setToggleLogin} isLoggedIn={isLoggedIn} user={user} />
            { toggleLogin ? <Login setUser={setUser} setIsLoggedIn={setIsLoggedIn} /> : null}
            <Routes > 
              <Route path="/" element={ <LandingPage user={user}/>} />
              <Route path="/contacts_page" element={<ContactsPage />} />
              <Route path='/contact_profile/:id' element={<ContactCard />}/>
              <Route path='/deal_profile/:id' element={<DealCard />}/>
              <Route path="/companies_page" element={<CompaniesPage />} />
              <Route path="/companies/:id" element={<CompanyCard />}/>
              <Route path='/new_contact' element={<AddNewContact />} />
              <Route path='/edit_contact' element={<EditContact />} />
              <Route path="/deals_page" element={<DealsPage />} />
              <Route path="/pipeline_page" element={<PipelinePage />} />
              <Route path='new_deal' element={<AddNewDeal />} />
              <Route path='login' element={<Login setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>} />


            </Routes > 
          </BrowserRouter>
          <Footer />
        </DndProvider>
        <Footer />
      </div>

  );
}

export default App;
