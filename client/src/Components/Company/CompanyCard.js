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
            <button onClick={handleCompanyDeleteClick}>Delete Company</button>

            <button onClick={() => backToCompanies()}>{'Back to Companies'}</button>

            <button onClick={() => editClick()}>Edit Company</button>
            {editState ? <EditCompany fetchCompany={fetchCompany} id={id} /> : null}


            <button onClick={() => dealSwitch()}>View Associated Deals</button>

            {dealShow ? companyDealsArray.map((company) => { return <RenderCompanyDeals key={c++} name={company.name} product={company.product} value={company.value} stage={company.stage} active={company.active} status={company.status} owner={company.owner} /> }) : null}

            <button onClick={() => contactSwitch()}>View Associated Contacts</button>
            {contactShow ? companyContactsArray.map((contact) => { return <RenderCompanyContacts key={c++} name={contact.name} email={contact.email} phone_number={contact.phone_number} address={contact.address} linkedin={contact.linkedin_url} owner={contact.owner} /> }) : null}


        </div>
    )
 }
 
 export default CompanyCard;