import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RenderCompanyDeals from './RenderCompanyDeals'
import RenderCompanyContacts from './RenderCompanyContacts'
import EditCompany from './EditCompany'

const CompanyCard = () => {

    let {id} = useParams();
    const [company, setCompany] = useState({})
    let navigate = useNavigate()
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState("")

    let owner = {id: 15, name: "Winnie", email: "winnie@dealbase.com", username: "winnie", password: "winnie" }

    const backToCompanies = () => {
        navigate('/companies_page')
    }

    const fetchCompany = async () => {
        const response = await fetch(`http://localhost:3000/companies/${id}`)
        const companyObject = await response.json()
        setCompany(companyObject)
        let reverseOrderNotes = companyObject.company_notes.reverse()
        setNotes(reverseOrderNotes)
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


    const handleAddNote = async (e) => {
        e.preventDefault();
        let req = await fetch(`http://localhost:3000/company_notes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: newNote,
                company_id: company.id,
                owner_id: owner.id
            })
        })
        fetchCompany()
        setNewNote("")
    }



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

        <div className='contact-card'>
            <div className="main">
                <button onClick={handleCompanyDeleteClick}>Delete Company</button>
                <button onClick={() => editClick()}>Edit Company</button>
                {/* <NavLink className='editContact' to="/edit_contact"><button>Edit Contact</button></NavLink> */}
                {/* <NavLink className='editContact' to="/edit_contact" state={{ from: "ContactCard"}}><button>Edit Contact</button></NavLink> */}
                <div className="row">
                    <div className="left">
                        <div className="card sidebar">
                            <div className="card-body">
                                {/* <img src="imageplaceholder.jpg" alt="profile image" class="profile__image"></img> */}
                                <div className="card-text">
                                    <div className="card-text-head">
                                        <h3 className="card-data">{company.name}</h3>
                                        <h4 className="card-data">{company.industry}</h4>
                                    </div>
                                    <hr></hr>
                                    <div className="card-text-body">
                                        <h4 className="card-data">Address: {company.address}</h4>
                                        <h4 className="card-data">Country: {company.country}</h4>
                                        <h4 className="card-data">Industry: {company.industry}</h4>
                                        <h4 className="card-data">LinkedIn: {company.linkedin_url}</h4>
                                        <h4 className="card-data">Website: {company.website}</h4>
                                        <h4 className="card-data">Owner: {company.owner_name}</h4>
                                    </div>
                                    <hr></hr>
                                    {editState ? <EditCompany fetchCompany={fetchCompany} id={id} /> : null}

                                    <button onClick={() => dealSwitch()}>View Associated Deals</button>
                                    <div className="deals-container">
                                    {dealShow ? companyDealsArray.map((company) => { return <RenderCompanyDeals key={c++} name={company.name} product={company.product} value={company.value} stage={company.stage} active={company.active} status={company.status} owner={company.owner} /> }) : null}
                                    </div>
                                    <button onClick={() => contactSwitch()}>View Associated Contacts</button>
                                    {contactShow ? companyContactsArray.map((contact) => { return <RenderCompanyContacts key={c++} name={contact.name} email={contact.email} phone_number={contact.phone_number} address={contact.address} linkedin={contact.linkedin_url} owner={contact.owner} /> }) : null}
                                    <button onClick={() => backToCompanies()}>{'Back to Companies'}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right col-md-8 mt-1">
                        <div className="card mb-3 content">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <form className='note-form' >
                                            <button className="note-button" onClick={handleAddNote}>Add Note</button>
                                            <textarea placeholder="insert text here" className='newNoteInput' value={newNote} onChange={(e) => setNewNote(e.target.value)}/>
                                        </form>
                                            <h4 className='notesheader'>All Notes</h4>
                                            <hr></hr>
                                        <ul className='notes'>
                                            {notes.map((note) => {
                                                return <li className='note' key={note.id}>{`note created: ${note.created_at.substring(0, 10)} note by: ${note.owner_name} ${note.content}`}</li>
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
 }
 
 export default CompanyCard;