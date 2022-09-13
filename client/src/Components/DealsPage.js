import { useState, useEffect } from 'react'
import ContactCard from './ContactCard'
import { useNavigate } from 'react-router-dom'
import { NavLink } from "react-router-dom"

function ContactsPage() {

    let formatter = (str) => {
        let arr = str.split('')
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == '_') {
                arr[i] = " "
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (i == 0 || arr[i - 1] == " ") {
                arr[i] = arr[i].toUpperCase()
            }
        }
        let result = ""
        for (let i = 0; i < arr.length; i++) {
            result = result + arr[i]
        }
        return result
    }

    const numDisplayer = (number) => {
        if (Math.floor(number) != number) {
            let x = number.toString()
            let numArr = x.split('')
            console.log(numArr)
            let len = numArr.length
            let a = numArr.indexOf('.')
            for (let pos = a - 1; pos > 0; pos--) {
                if ((a - pos) % 3 == 0 && len - pos != 0) {
                    numArr.splice(pos, 0, ',')
                }
            }
            let numWithCommas = ""
            for (let i = 0; i < numArr.length; i++) {
                numWithCommas += numArr[i]
            }
            return numWithCommas
        } else if (Math.floor(number) == number) {
            let x = number.toString()
            console.log(x)
            let numArr = x.split('')
            console.log(numArr)
            let len = numArr.length
            for (let pos = numArr.length; pos > 0; pos--) {
                if ((len - pos) % 3 == 0 && len - pos != 0) {
                    numArr.splice(pos, 0, ',')
                }
            }
            let numWithCommas = ""
            for (let i = 0; i < numArr.length; i++) {
                numWithCommas += numArr[i]
            }
            numWithCommas = numWithCommas + '.00'
            return numWithCommas
        }
    }


    let navigate = useNavigate()
    const [deals, setDeals] = useState([])
    const [tableHeaders, setTableHeaders] = useState([])
    const [keyArray, setKeyArray] = useState([])

    const [sortField, setSortField] = useState('')
    const [order, setOrder] = useState('asc')

    const [companiesNames, setCompaniesNames] = useState([])
    const [company, setCompany] = useState("All")

    const [ownersNames, setOwnersNames] = useState([])
    const [owner, setOwner] = useState("All")



    console.log('keyArray',keyArray)
    const fetchContacts = async () => {
        const response = await fetch(`http://localhost:3000/deals`)
        const dealsArray = await response.json()

        // if (company == "All" && owner == "All") {
        //     setContacts(contactsArray)
        // } else if (company !== "All" && owner == "All") {
        //     setContacts(contactsArray.filter(contact => contact.company_name == company))
        // } else if (company == "All" && owner !== "All") {
        //     setContacts(contactsArray.filter(contact => contact.owner_name == owner))
        // } else if (company !== "All" && owner !== "All") {
        //     setContacts(contactsArray.filter(contact => contact.owner_name == owner && contact.company_name == company))
        // }
        
        // company == "All" ? 
        setDeals(dealsArray)
        
        // setContacts(contactsArray.filter(comp => comp.company_name == company))



        // getKeys(contactsArray[0])
    }



    const fetchCompaniesNames = async () => {
        const response = await fetch(`http://localhost:3000/contacts/companies`)
        const companiesNamesArray = await response.json()
        setCompaniesNames(companiesNamesArray)
    }

    const fetchOwnersNames = async () => {
        const response = await fetch(`http://localhost:3000/ownersnames/`)
        const ownersNamesArray = await response.json()
        setOwnersNames(ownersNamesArray)
    }



    // const handleSorting = (sortField, sortOrder) => {
    //     // console.log('sortField, sortOrder', sortField, sortOrder)
    //     if (sortField) {
    //         const sorted = [...contacts].sort((a, b) => {
    //             return (
    //                 a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
    //                     numeric: true,
    //                 }) * (sortOrder === 'asc' ? 1 : -1)
    //             )
    //         })
    //         setContacts(sorted)
    //     }
    // }

    // const handleSortingChange = (accessor) => {
    //     // console.log('accessor', accessor)
    //     // console.log('sortField', sortField)
    //     const sortOrder =
    //         accessor === sortField && order === 'asc' ? 'desc' : 'asc'

    //     setSortField(accessor)
    //     setOrder(sortOrder)
    //     handleSorting(accessor, sortOrder)
    // }

    useEffect(() => {
        fetchContacts()
        fetchCompaniesNames()
        fetchOwnersNames()
    }, [company, owner])

    // const getKeys = (obj) => {
    //     let temp = []
    //     for (const key in obj) {
    //         if (key == 'nvm') {

    //         } else {
    //             temp.push(key)
    //         }
    //     }
    //     setKeyArray(temp)
    // }


    // const handleContactClick = (id) => {

    //     navigate(`/contact_profile/${id}`)

    // }

    // const updateCompany = (e) => {
    //     setCompany(e.target.value)
    // }

    // const updateOwner = (e) => {
    //     setOwner(e.target.value)
    // }

    // console.log('companiesNames', companiesNames)
    // console.log('company', company)
    // console.log('ownersNames', ownersNames)
    // console.log('owner', owner)

    // console.log('contacts', contacts)
    return (
        <main>
            <NavLink className='AddNewContact' to='/new_contact'><button>Create a New Deal</button></NavLink>
            <div className='filter'>
                <label htmlFor='companiesNames'>Choose Company:</label>
                {/* <select className='chooseBox' name='companiesNames' id='companiesNames' onChange={updateCompany} value={company}>Choose Company
                    <option value="All">All</option>
                    {companiesNames.map((companyName) => {
                        return <option value={companyName}>{companyName}</option>
                    })}
                </select> */}

            </div>
            <div className='filter'>
                <label htmlFor='owners'>Choose Owner:</label>
                {/* <select className='chooseBox' name='ownersNames' id='ownersNames' onChange={updateOwner} value={owner}>Choose Owner
                    <option value="All">All</option>
                    {ownersNames.map((ownersName) => {
                        return <option value={ownersName}>{ownersName}</option>
                    })}
                </select> */}

            </div>
            <table>
                <caption>DEALS PAGE</caption>
                {/* <thead>
                    <tr>
                        {keyArray.map((accessor) => {
                            return (
                                <th onClick={() => handleSortingChange(accessor)}>{formatter(accessor)}</th>
                            )
                        })}
                    </tr>
                </thead> */}
                <tbody>
                    {
                        deals.map(deal => {
                            return (
                                <tr>
                                    <td>{deal.id}</td>
                                    {/* <td onClick={() => handleContactClick(contact.id)}>{contact.name}</td> */}
                                    <td>{deal.name}</td>
                                    <td>{deal.product}</td>
                                    <td>{deal.value}</td>
                                    <td>{deal.stage}</td>
                                    <td>{deal.status}</td>
                                    <td>{deal.active}</td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </main>

    )
}
export default ContactsPage