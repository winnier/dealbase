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
    
    let sortedContacts = [...contacts]

    


      const handleClick = (e) => {
        console.log('typeof(e.target)', typeof(e.target.value))
        console.log('e.target',e.target)
        console.log('contacts for sorting', contacts.sort())

        sortedContacts.sort((a,b) => {
            let namea = a.name.toLowerCase(),
                nameb = b.name.toLowerCase();
            if (namea < nameb) {
                return -1;
            }
            if (namea > nameb) {
                return 1;
            }
            return 0
        })
        setContacts(sortedContacts)
        console.log('sortedContacts',sortedContacts)
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

            <h1>CONTACTS PAGE</h1>

            <table>
                
                <tr>
                    {keyArray.map(e=>{
                        return(
                            <th onClick={handleClick}>{e}</th>
                        )
                    })}
                </tr>
                {
                contacts.map(contact=>{
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