import {useState, useEffect} from 'react'

function ContactsPage(){

    const [contacts, setContacts] = useState([])
    const [tableHeaders, setTableHeaders] = useState([])
    const [keyArray, setKeyArray]= useState([])
    console.log(keyArray)
    const fetchContacts = async () => {
        const response = await fetch(`http://localhost:3000/contacts`)
        const contactsArray = await response.json()
        setContacts(contactsArray)
        getKeys(contactsArray[0])
      }
    
    
      useEffect(() => {
        fetchContacts()
      },[])

    const getKeys = (obj)=> {
        let temp = []
         for(const key in obj){
            if(key == 'id'){
                
            }else{
                temp.push(key)
            }
        }
        setKeyArray(temp)
    }
    console.log('contacts', contacts)
    return(
        <main>

            <table>
                
                <tr>
                    {keyArray.map(e=>{
                        return(
                            <th>{e}</th>
                        )
                    })}
                </tr>
                {contacts.map(contact=>{
                    return(
                        <tr>
                            <td>{contact.name}</td>
                            <td>UK MI6</td>
                            <td>james.bond@mi6.uk</td>
                            <td>linkedin.com/jbond</td>
                            <td>+44 987 987 988</td>
                            <td>Address</td>
                            <td>COMPANY</td>
                            <td>OWNER</td>
                        </tr>
                    )
                })}
                
            </table>
        </main>
    )
}
export default ContactsPage