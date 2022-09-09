// import { BrowserRouter } from "react-router-dom";
// import { render } from "react-dom";
import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [contacts, setContacts] = useState([])


  // I'm using this faker gem in meantime until we get data from backend

  const fetchContacts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const contactsArray = await response.json()
    setContacts(contactsArray)
    console.log(contacts)
  }


  useEffect(() => {
    fetchContacts()
  }, )

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
