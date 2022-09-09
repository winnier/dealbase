import {useState, useEffect} from 'react'

function Contacts(){

    const [contacts, setContacts] = useState([])
    const [tableHeaders, setTableHeaders] = useState([])


    const fetchContacts = async () => {
        const response = await fetch(`http://localhost:3000/contacts`)
        const contactsArray = await response.json()
        setContacts(contactsArray)

      }
    
    
      useEffect(() => {
        fetchContacts()
      },[])


    console.log('contacts', contacts)
    return(
        <main>

            <table>
                <tr>
                    <th>Name</th>
                    <th>Company</th>
                    <th>Email</th>
                    <th>Linkedin</th>
                    <th>Phone Number</th>
                </tr>
                <tr>
                    <td>James Bond</td>
                    <td>UK MI6</td>
                    <td>james.bond@mi6.uk</td>
                    <td>linkedin.com/jbond</td>
                    <td>+44 987 987 988</td>
                </tr>
            </table>
        </main>
    )
}
export default Contacts