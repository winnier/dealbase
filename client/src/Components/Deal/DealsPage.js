import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from "react-router-dom"
import PipelinePage from '../PipelinePage'
import AddAssociatedContacts from './AddAssociatedContacts'

function DealsPage() {

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

    // const numDisplayer = (number) => {
    //     if (Math.floor(number) != number) {
    //         let x = number.toString()
    //         let numArr = x.split('')
    //         console.log(numArr)
    //         let len = numArr.length
    //         let a = numArr.indexOf('.')
    //         for (let pos = a - 1; pos > 0; pos--) {
    //             if ((a - pos) % 3 == 0 && len - pos != 0) {
    //                 numArr.splice(pos, 0, ',')
    //             }
    //         }
    //         let numWithCommas = ""
    //         for (let i = 0; i < numArr.length; i++) {
    //             numWithCommas += numArr[i]
    //         }
    //         return numWithCommas
    //     } else if (Math.floor(number) == number) {
    //         let x = number.toString()
    //         let numArr = x.split('')
    //         let len = numArr.length
    //         for (let pos = numArr.length; pos > 0; pos--) {
    //             if ((len - pos) % 3 == 0 && len - pos != 0) {
    //                 numArr.splice(pos, 0, ',')
    //             }
    //         }
    //         let numWithCommas = ""
    //         for (let i = 0; i < numArr.length; i++) {
    //             numWithCommas += numArr[i]
    //         }
    //         numWithCommas = numWithCommas + '.00'
    //         return numWithCommas
    //     }
    // }


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
    const [showTable, setShowTable] = useState(true)




    // console.log('keyArray',keyArray)
    const fetchDeals = async () => {
        const response = await fetch(`http://localhost:3000/deals`)
        const dealsArray = await response.json()
        
        // company == "All" ? 
        if (company == "All" && owner == "All") {
            setDeals(dealsArray)
        } else if (company !== "All" && owner == "All") {
            setDeals(dealsArray.filter(deal => deal.company_name == company))
        } else if (company == "All" && owner !== "All") {
            setDeals(dealsArray.filter(deal => deal.owner_name == owner))
        } else if (company !== "All" && owner !== "All") {
            setDeals(dealsArray.filter(deal => deal.owner_name == owner && deal.company_name == company))
        }
        // setDeals(dealsArray)
        
        // setDeals(dealsArray.filter(comp => comp.company_name == company))
        console.log(dealsArray)
        console.log("dealsArray[0]: ", dealsArray[0])
        getKeys(dealsArray[0])
    }

    const fetchCompaniesNames = async () => {
        const response = await fetch(`http://localhost:3000/deals/companies`)
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
            const sorted = [...deals].sort((a, b) => {
                return (
                    a[sortField]?.toString().localeCompare(b[sortField].toString(), 'en', {
                        numeric: true,
                    }) * (sortOrder === 'asc' ? 1 : -1)
                )
            })
            setDeals(sorted)
        }
    }

    const handleSortingChange = (accessor) => {
        // console.log('accessor', accessor)
        // console.log('sortField', sortField)
        const sortOrder =
            accessor === sortField && order === 'asc' ? 'desc' : 'asc'

        setSortField(accessor)
        setOrder(sortOrder)
        handleSorting(accessor, sortOrder)
    }

    useEffect(() => {
        fetchDeals()
        fetchCompaniesNames()
        fetchOwnersNames()
    }, [company, owner])

    const getKeys = (obj) => {
        let temp = []
        for (const key in obj) {
            if (key == 'nvm') {

            } else {
                temp.push(key)
            }
        }
        setKeyArray(temp)
        console.log("Keys Array: ", keyArray)
    }


    const handleDealClick = (id) => {
        navigate(`/deal_profile/${id}`)
    }

    const updateCompany = (e) => {
        setCompany(e.target.value)
    }

    const updateOwner = (e) => {
        setOwner(e.target.value)
    }

    const clickToggle = ()=> {
        console.log("I'm clicked")
        setShowTable(!showTable)
    }

    return (
        <div>
            <label className="switch" onChange={clickToggle}>
                <input type="checkbox"/>
                <span className="slider"></span>
            </label>

            {showTable ? 
                <main>
                    <NavLink className='AddNewContact' to='/new_deal'><button>Create a New Deal</button></NavLink>
                    <div className='filter'>
                        <label htmlFor='companiesNames'>Choose Company:</label>
                        <select className='chooseBox' name='companiesNames' id='companiesNames' onChange={updateCompany} value={company}>Choose Company
                            <option value="All">All</option>
                            {companiesNames.map((companyName) => {
                                return <option value={companyName}>{companyName}</option>
                            })}
                        </select>

                    </div>
                    <div className='filter'>
                        <label htmlFor='owners'>Choose Owner:</label>
                        <select className='chooseBox' name='ownersNames' id='ownersNames' onChange={updateOwner} value={owner}>Choose Owner
                            <option value="All">All</option>
                            {ownersNames.map((ownersName) => {
                                return <option value={ownersName}>{ownersName}</option>
                            })}
                        </select>

                    </div>
                    <table className="page-holder">
                        <caption>DEALS PAGE</caption>
                        <thead>
                            <tr>
                                {keyArray.map((accessor) => {
                                    return (
                                        // onClick = {() => handleSortingChange(accessor)} this goes in the line below
                                        <th onClick={() => handleSortingChange(accessor)}>{formatter(accessor)}</th>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                deals.map(deal => {
                                    return (
                                        <tr>
                                            <td>{deal.id}</td>
                                            {/* <td onClick={() => handleContactClick(contact.id)}>{contact.name}</td> */}
                                            <td onClick={() => handleDealClick(deal.id)}>{deal.name}</td>
                                            <td>{deal.product}</td>
                                            <td>{`$${(deal.value)}`}</td>
                                            <td>{deal.stage}</td>
                                            <td>{deal.active.toString()}</td>
                                            <td>{deal.status.toString()}</td>
                                            <td>{deal.company_name}</td>
                                            <td>{deal.owner_name}</td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </main>

        :

        <PipelinePage/>

        }
    </div>
    )
}
export default DealsPage