import {useState, useEffect} from 'react'

function Contacts(url){

    const [contacts, setContacts] = useState([])


    // const fetchContacts = async () => {
    //     const response = await fetch(`${url}/contacts`)
    //     const contactsArray = await response.json()
    //     setContacts(contactsArray)
    //     console.log(contacts)
    //   }
    
    
    //   useEffect(() => {
    //     fetchContacts()
    //   }, )


    console.log(url)
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