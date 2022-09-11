import {useState, useEffect} from 'react'

function ContactsPage({contacts, setContacts} ){

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
                            <td>{contact.email}</td>
                            
                            <td>{contact.phone_number}</td>
                            <td>{contact.address}</td>
                            <td>{contact.linkedin_url}</td>
                            <td>{contact.company_info.name}</td>
                            <td>{contact.owner_info.name}</td>
                        </tr>
                    )
                })}
                
            </table>
        </main>
    )
}
export default ContactsPage