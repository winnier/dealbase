import {useState, useEffect} from 'react';
import CompanyCard from './CompanyCard';
import { useNavigate } from 'react-router-dom'

const CompaniesPage = ({}) => {
    const [companies, setCompanies] = useState([])
    const [tableHeaders, setTableHeaders] = useState([])
    const [keyArray, setKeyArray]= useState([])
    const [sortField, setSortField] = useState('')
    const [order, setOrder] = useState('asc')

    // console.log('keyArray',keyArray)
    let navigate = useNavigate()

    const fetchCompanies = async () => {
        const response = await fetch(`http://localhost:3000/companies`)
        const companiesArray = await response.json()
        setCompanies(companiesArray)
        getKeys(companiesArray[0])
        // console.log(companiesArray)
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
        // console.log('accessor', accessor)
        // console.log('sortField', sortField)
        const sortOrder =
        accessor === sortField && order === 'asc' ? 'desc' : 'asc'
        // console.log('sortOrder',sortOrder)
        setSortField(accessor)
        setOrder(sortOrder)
        handleSorting(accessor, sortOrder)
    }

      useEffect(() => {
        fetchCompanies()
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


    const handleCompanyClick = (id) => {
        navigate(`/company_profile/${id}`)
    }

    console.log('companies', companies)
    return(
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
                companies.map(company=>{
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
    )
}

export default CompaniesPage;