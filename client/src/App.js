// import { BrowserRouter } from "react-router-dom";
// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes > 
        <Route path="/login" element={<Login/>} />
        <Route path="/create_account" element={<CreateAccount/>} />
        <Route path="/" element={ <LandingPage />} />
        <Route path="/contacts_page" element={<ContactsPage/>} />
        <Route path="/companies_page" element={<CompaniesPage/>} />
        <Route path="/deals_page" element={<DealsPage/>} />

        {/* <Route path="/contacts_card/:id" element={<ContactsPage/>} /> */}
        {/* <Route path="/companies_page" element={<CompaniesPage/>} />
        <Route path="/deals_page" element={<DealsPage/>} /> */}


        <Route path="*" element={<ErrorPage />} />
        
      </Routes > 
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
