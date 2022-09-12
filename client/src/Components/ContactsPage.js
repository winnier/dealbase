import {useState, useEffect} from 'react'

function ContactsPage(){

    const [contacts, setContacts] = useState([])
    const [tableHeaders, setTableHeaders] = useState([])
    const [keyArray, setKeyArray]= useState([])

    const [sortField, setSortField] = useState('')
    const [order, setOrder] = useState('asc')

    const columns = [
        {label: "id", accessor: "id"},
        {label: "Name", accessor: "name"},
        {label: "Email", accessor: "email"},
        {label: "Phone", accessor: "phone_number"},
        {label: "Address", accessor: "address"},
        {label: "Linkedin", accessor: "linkedin_url"},
        {label: "Company", accessor: "company_name"},
        {label: "Owned By", accessor: "owner_name"}
    ]


    console.log('keyArray',keyArray)
    const fetchContacts = async () => {
        const response = await fetch(`http://localhost:3000/contacts`)
        const contactsArray = await response.json()
        setContacts(contactsArray)
        getKeys(contactsArray[0])
      }
    
    let sortedContacts = [...contacts]

      const handleSorting = (sortField, sortOrder) => {
        console.log('sortField, sortOrder', sortField, sortOrder)
        if (sortField) {
            const sorted = [...contacts].sort((a,b) => {
                return (
                    a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
                        numeric: true,
                    }) * (sortOrder === 'asc' ? 1: -1)
                )
            })
            setContacts(sorted)
        }
      }

      const handleSortingChange = (accessor) => {
        console.log('accessor', accessor)
        console.log('sortField', sortField)
        const sortOrder = 
        accessor === sortField && order === 'asc' ? 'desc' : 'asc'
        console.log('sortOrder',sortOrder)
        setSortField(accessor)
        setOrder(sortOrder)
        handleSorting(accessor, sortOrder)

        // using toLowerCase()

        // sortedContacts.sort((a,b) => {
        //     let namea = a.name.toLowerCase(),
        //         nameb = b.name.toLowerCase();
        //     if (namea < nameb) {
        //         return -1;
        //     }
        //     if (namea > nameb) {
        //         return 1;
        //     }
        //     return 0
        // })

        // using localeCompare

        // sortedContacts.sort((a,b) => a.email.toString().localeCompare(b.email.toString(), 'en', {
        //     numeric: true
        // }))
        // setContacts(sortedContacts)
        // console.log('sortedContacts',sortedContacts)
      }

      useEffect(() => {
        fetchContacts()
      },[])

    const getKeys = (obj)=> {
        let temp = []
         for(const key in obj){
            if(key == 'nvm'){
                
            }else{
                temp.push(key)
            }
        }
        setKeyArray(temp)
    }
    console.log('contacts', contacts)
    return(
            <table>
            <caption>CONTACTS PAGE</caption>
            <thead>
                <tr>
                    {keyArray.map((accessor)=>{
                        return(
                            <th onClick={() => handleSortingChange(accessor)}>{accessor}</th>
                        )
                    })}
                </tr>
                </thead>
                <tbody>
                {
                contacts.map(contact=>{
                    return(
                        <tr>
                            <td>{contact.id}</td>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone_number}</td>
                            <td>{contact.address}</td>
                            <td>{contact.linkedin_url}</td>
                            <td>{contact.company_name}</td>
                            <td>{contact.owner_name}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>

    )
}
export default ContactsPage