import {useState, useEffect} from 'react';
import CompanyCard from './CompanyCard';
import { useNavigate } from 'react-router-dom'

const CompaniesPage = ({}) => {
    const [companies, setCompanies] = useState([])
    const [tableHeaders, setTableHeaders] = useState([])
    const [keyArray, setKeyArray]= useState([])
    const [sortField, setSortField] = useState('')
    const [order, setOrder] = useState('asc')
    // TO ADD CONTACTS
    // const [contactsNames, setContactsNames] = useState([])
    // const [contact, setContact] = useState("All")

    const [companiesNames, setCompaniesNames] = useState([])
    const [company, setCompany] = useState("All")

    const [ownersNames, setOwnersNames] = useState([])
    const [owner, setOwner] = useState("All")

    // console.log('keyArray',keyArray)
    let navigate = useNavigate()

    const fetchCompanies = async () => {
        const response = await fetch(`http://localhost:3000/companies`)
        const companiesArray = await response.json()
        if (company == "All" && owner == "All") {
            setCompanies(companiesArray)
        } else if (company !== "All" && owner == "All") {
            setCompanies(companiesArray.filter(contact => contact.company_name == company))
        } else if (company == "All" && owner !== "All") {
            setCompanies(companiesArray.filter(contact => contact.owner_name == owner))
        } else if (company !== "All" && owner !== "All") {
            setCompanies(companiesArray.filter(contact => contact.owner_name == owner && contact.company_name == company))
        }
        // TO ADD CONTACTS
        // if (contact == "All" && owner == "All") {
        //     setCompanies(companiesArray)
        // } else if (contact !== "All" && owner == "All") {
        //     setCompanies(companiesArray.filter(company => company.contact_name == contact))
        // } else if (contact == "All" && owner !== "All") {
        //     setCompanies(companiesArray.filter(company => company.owner_name == owner))
        // } else if (contact !== "All" && owner !== "All") {
        //     setCompanies(companiesArray.filter(company => company.owner_name == owner && company.contact_name == contact))
        // }

        getKeys(companiesArray[0])

    }
    // TO ADD CONTACTS
    // const fetchContactsNames = async () => {
    //     const response = await fetch(`http://localhost:3000//companies_names`)
    //     const contactsNamesArray = await response.json()
    //     setContactsNames(contactsNamesArray)
    // }

    const fetchCompaniesNames = async () => {
        const response = await fetch(`http://localhost:3000/companies_names`)
        const companiesNamesArray = await response.json()
        setCompaniesNames(companiesNamesArray)
    }

    const fetchOwnersNames = async () => {
        const response = await fetch(`http://localhost:3000/ownersnames/`)
        const ownersNamesArray = await response.json()
        setOwnersNames(ownersNamesArray)
    }





    const handleSorting = (sortField, sortOrder) => {
        // console.log('sortField, sortOrder', sortField, sortOrder)
        if (sortField) {
            const sorted = [...companies].sort((a,b) => {
                return (
                    a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
                        numeric: true,
                    }) * (sortOrder === 'asc' ? 1: -1)
                )
            })
            setCompanies(sorted)
        }
    }
    const handleSortingChange = (accessor) => {
        const sortOrder =
        accessor === sortField && order === 'asc' ? 'desc' : 'asc'
        setSortField(accessor)
        setOrder(sortOrder)
        handleSorting(accessor, sortOrder)
    }

      useEffect(() => {
        fetchCompanies()
        // TO ADD CONTACTS
        // fetchContactsNames()
        fetchCompaniesNames()
        fetchOwnersNames()
    },[company, owner])

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

    const handleCompanyClick = (id) => {
        navigate(`/companies/${id}`)
    }

    // TO ADD CONTACTS
    // const updateContact = (e) => {
    //     setContact(e.target.value)
    // }

    const updateCompany = (e) => {
        setCompany(e.target.value)
    }

    const updateOwner = (e) => {
        setOwner(e.target.value)
    }

    return(
        <main>
            {/* <div className='filter'>
                <label htmlFor='contacts'>Choose Company:</label>
                <select className='chooseBox' name='contactsNames' id='contactsNames' onChange={updateContact} value={contact}>Choose Contact
                    <option value="All">All</option>
                    {contactsNames.map((contactName) => {
                        return <option value={contactName}>{contactName}</option>
                    })}
                </select>
            </div> */}
            <div className='filter'>
                <label htmlFor='companies'>Choose Company:</label>
                <select className='chooseBox' name='companiesNames' id='companiesNames' onChange={updateCompany} value={company}>Choose Company
                    <option value="All">All</option>
                    {companiesNames.map((companyName) => {
                        return <option value={companyName}>{companyName}</option>
                    })}
                </select>
                &nbsp;	&nbsp;	&nbsp;
                <label htmlFor='owners'>Choose Owner:</label>
                <select className='chooseBox' name='ownersNames' id='ownersNames' onChange={updateOwner} value={owner}>Choose Owner
                    <option value="All">All</option>
                    {ownersNames.map((ownersName) => {
                        return <option value={ownersName}>{ownersName}</option>
                    })}
                </select>
            </div>
            <table className="page-holder">
                <caption>COMPANY PAGE</caption>
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
                    companies.map(company =>{
                        return(
                            <tr>
                                <td>{company.id}</td>
                                <td onClick={() => handleCompanyClick(company.id)}>{company.name}</td>
                                <td>{company.address}</td>
                                <td>{company.country}</td>
                                <td>{company.industry}</td>
                                <td>{company.linkedin_url}</td>
                                <td>{company.website}</td> 
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </main>
    )
}

export default CompaniesPage;
