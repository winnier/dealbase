// import { render } from "react-dom";
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';
import CompaniesPage from './Components/CompaniesPage';
import CompanyCard from './Components/CompanyCard';
import ContactsPage from './Components/Contact/ContactsPage';

import LandingPage from './Components/LandingPage';
import DealsPage from './Components/DealsPage';
import Footer from './Components/Footer';
import ContactCard from './Components/ContactCard';
import AddNewContact from './Components/AddNewContact';
import EditContact from './Components/EditContact';
import DealCard from './Components/DealCard'



import './App.css';
import './Styles/Footer.css';
// import './Styles/Header.css';
import './Styles/PageStyle.css';
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
      </div>

  );
}



export default App;
