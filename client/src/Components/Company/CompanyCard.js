import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RenderCompanyDeals from './RenderCompanyDeals'
import RenderCompanyContacts from './RenderCompanyContacts'
import EditCompany from './EditCompany'

const CompanyCard = () => {

    let {id} = useParams();
    const [company, setCompany] = useState({})
    let navigate = useNavigate()


    const backToCompanies = () => {
        navigate('/companies_page')
    }

    const fetchCompany = async () => {
        const response = await fetch(`http://localhost:3000/companies/${id}`)
        const companyObject = await response.json()
        console.log(companyObject)
        setCompany(companyObject)
    }

    useEffect(() => {
        fetchCompany()
    }, [])

    const handleCompanyDeleteClick = () => {
        fetch(`http://localhost:3000/companies/${id}`, {
            method: "DELETE",
        })
            .then(alert('Company has been deleted'))
        backToCompanies()
    }

    let [companyDealsArray, setCompanyDealsArray] = useState([])

    const fetchCompanyDeals = async () => {
        const req = await fetch(`http://localhost:3000/company/${id}/deals`)
        const res = await req.json()
        console.log(res)
        setCompanyDealsArray(res)
    }

    useEffect(() => {
        fetchCompanyDeals()
    },[])

    let c = 0

    let [companyContactsArray, setCompanyContactsArray] = useState([])

    const fetchCompanyContacts = async () => {
        const req = await fetch(`http://localhost:3000/company/${id}/contacts`)
        const res = await req.json()
        console.log(res)
        setCompanyContactsArray(res)
    }

    useEffect(() => {
        fetchCompanyContacts()
    },[])












    let [dealShow, setDealShow] = useState(false)

    let dealSwitch = () => {
        setDealShow(!dealShow)
        console.log(dealShow)
    }

    let [contactShow, setContactShow] = useState(false)

    let contactSwitch = () => {
        setContactShow(!contactShow)
    }


    let [editState, setEditState] = useState(false)
    let editClick = () => {
        setEditState(!editState)
        console.log(editState)
    }



    return(
        <div className="details-card">
            <h2>{company.name}</h2>
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