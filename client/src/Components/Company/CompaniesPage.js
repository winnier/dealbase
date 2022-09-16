import {useState, useEffect} from 'react';
import CompanyCard from './CompanyCard';
import { useNavigate } from 'react-router-dom'

const CompaniesPage = ({}) => {




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

    const [companies, setCompanies] = useState([])
    const [keyArray, setKeyArray]= useState([])
    const [sortField, setSortField] = useState('')
    const [order, setOrder] = useState('asc')

    const [companiesNames, setCompaniesNames] = useState([])
    const [company, setCompany] = useState("All")
    const [country, setCountry] = useState("All")
    const [industry, setIndustry] = useState("All")

    const [ownersNames, setOwnersNames] = useState([])
    const [owner, setOwner] = useState("All")

    // console.log('keyArray',keyArray)
    let navigate = useNavigate()

    const fetchCompanies = async () => {
        const response = await fetch(`http://localhost:3000/companies`)
        const companiesArray = await response.json()
        console.log("Companies Array: ",companiesArray)
        if (country == "All" && industry == "All") {
            setCompanies(companiesArray)
        } else if (country !== "All" && industry == "All") {
            setCompanies(companiesArray.filter(contact => contact.country == country))
        } else if (country == "All" && industry !== "All") {
            setCompanies(companiesArray.filter(contact => contact.industry == industry))
        } else if (country !== "All" && industry !== "All") {
            setCompanies(companiesArray.filter(contact => contact.industry == industry && contact.country == country))
        }
     

        getKeys(companiesArray[0])

    }
   

    let [countryArray, setCountryArray] = useState([])

    let getCountries = async () => {
        let arr = []
        let req = await fetch('http://localhost:3000/companies')
        let res = await req.json()
        console.log(res)
        for (let i = 0; i < res.length; i++){
            arr.push(res[i].country)
        }
        console.log(arr)
        setCountryArray(arr)
    }

    let [industryArray, setIndustryArray] = useState([])
    let getIndustries = async () => {
        let arr = []
        let req = await fetch('http://localhost:3000/companies')
        let res = await req.json()
        for (let i = 0; i < res.length; i++) {
            arr.push(res[i].industry)
        }
        setIndustryArray(arr)
    }

    const fetchCompaniesNames = async () => {
        const response = await fetch(`http://localhost:3000/companies_names`)
        const companiesNamesArray = await response.json()
        setCompaniesNames(companiesNamesArray)
        console.log(companiesNamesArray)
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
        fetchCompaniesNames()
        fetchOwnersNames()
        getCountries()
        getIndustries()
    },[company, owner, country, industry])

    const getKeys = (obj)=> {
        let temp = []
         for(const key in obj){
            if(key == 'nvm'){
            }else{
                temp.push(formatter(key))
            }
        }
        setKeyArray(temp)
    }

    const handleCompanyClick = (id) => {
        navigate(`/companies/${id}`)
    }

    const updateCountry = (e) => {
        setCountry(e.target.value)
        console.log("Country: ", e.target.value)
        fetchCompanies()
    }

    const updateIndustry = (e) => {
        setIndustry(e.target.value)
    }

    return(
        <main>
            <div className='filter'>
                <label htmlFor='companies'>Filter By Country:</label>
                <select className='chooseBox' name='countriesArray' id='countryNames' onChange={updateCountry} value={country}>
                    <option value="All">All</option>
                    {countryArray.map((country) => {
                        return <option value={country}>{country}</option>
                    })}
                </select>
                &nbsp;	&nbsp;	&nbsp;




                <label htmlFor='owners'>Filter By Industry:</label>
                <select className='chooseBox' name='ownersNames' id='ownersNames' onChange={updateIndustry} value={industry}>
                    <option value="All">All</option>
                    {industryArray.map((industry) => {
                        return <option value={industry}>{industry}</option>
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
