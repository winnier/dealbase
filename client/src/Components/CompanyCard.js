import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CompanyCard = () => {

    let {id} = useParams();
    const [company, setCompany] = useState({})

    const fetchCompany = async () => {
        const response = await fetch(`http://localhost:3000/companies/${id}`)
        const companyObject = await response.json()
        console.log(companyObject)
        setCompany(companyObject)
    }

    useEffect(() => {
        fetchCompany()
    }, [])

    return(
        <div className="details-card">
            <h5>{company.name}</h5>
            <p>Company Id: {company.id}</p>
            <p>Company Address: {company.address}</p>
            <p>Country: {company.country}</p>
            <p>Industry: {company.industry}</p>
            <p>LinkedIn: {company.linkedin_url}</p>
            <p>Website: {company.website}</p>
        </div>
    )
 }
 
 export default CompanyCard;