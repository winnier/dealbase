import {useState, useEffect} from 'react'
import ContactCard from './ContactCard'
import {useNavigate} from 'react-router-dom'

function ContactsPage(){


    let navigate = useNavigate()
    const [contacts, setContacts] = useState([])
    const [tableHeaders, setTableHeaders] = useState([])
    const [keyArray, setKeyArray]= useState([])

    const [sortField, setSortField] = useState('')
    const [order, setOrder] = useState('asc')

    const [companiesNames, setCompaniesNames] = useState([])
    const [company, setCompany] = useState("All")



    // console.log('keyArray',keyArray)
    const fetchContacts = async () => {
        const response = await fetch(`http://localhost:3000/contacts`)
        const contactsArray = await response.json()
        company == "All" ? 
        setContacts(contactsArray)
        :
        setContacts(contactsArray.filter(comp => comp.company_name == company))

        getKeys(contactsArray[0])
      }

      console.log('contacts', contacts)

    const fetchCompaniesNames = async () => {
        const response = await fetch(`http://localhost:3000/contacts/companies`)
        const companiesNamesArray = await response.json()
        setCompaniesNames(companiesNamesArray)

    }
    


      const handleSorting = (sortField, sortOrder) => {
        // console.log('sortField, sortOrder', sortField, sortOrder)
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
        // console.log('accessor', accessor)
        // console.log('sortField', sortField)
        const sortOrder = 
        accessor === sortField && order === 'asc' ? 'desc' : 'asc'
        console.log('sortOrder',sortOrder)
        setSortField(accessor)
        setOrder(sortOrder)
        handleSorting(accessor, sortOrder)
      }

      useEffect(() => {
        fetchContacts()
        fetchCompaniesNames()
      },[company])

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


    const handleContactClick = (id) => {

        navigate(`/contact_profile/${id}`)
        
    }

    const updateCompany = (e) => {

        setCompany(e.target.value)

    }

    console.log('companies', companiesNames)
    console.log('company', company)

    // console.log('contacts', contacts)
    return(
        <main>
            <div className='filter'>
                <label htmlFor='companies'>Choose Company:</label>
                <select className='chooseBox' name='companiesNames' id='companiesNames' onChange={updateCompany} value={company}>Choose Company
                    <option value="All">All</option>
                    {companiesNames.map((companyName) => {
                        return <option value={companyName}>{companyName}</option>
                    })}
                </select>

            </div>
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
                            <td onClick={() => handleContactClick(contact.id)}>{contact.name}</td>
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
            </main>

    )
}
export default ContactsPage