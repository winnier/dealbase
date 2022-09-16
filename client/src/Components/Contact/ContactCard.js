import { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom"; // this lets you destructure the id out of the parameters. 
import EditContact from "./EditContact";
// import ContactCardStyle from './ContactCardStyle.css'
import WebFont from 'webfontloader';
import PersonIcon from '@mui/icons-material/Person';
import RenderDeals from './RenderDeals'
import AddAssociatedDeals from './AddAssociatedDeals'
import styles from '../../Styles/ContactCard.css'


const ContactCard = () => {
    let {id} = useParams(); 
    const [contact, setContact] = useState({})
    const [isEditClicked, setIsEditClicked] = useState(false)
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState("")

    let owner = {id: 3, name: "Will", email: "will@dealbase.com", username: "Will", password: "mypassword" }

    const fetchContact = async () => {
        const response = await fetch(`http://localhost:3000/contacts/${id}`)
        const contactObj = await response.json()
        // console.log('contactObj',contactObj)
        setContact(contactObj)
        let reverseOrderNotes = contactObj.contact_notes.reverse()
        setNotes(reverseOrderNotes)
      }

    useEffect(() => {
        fetchContact()
    }, [])

    const handleEditClick = () => {
        setIsEditClicked(!isEditClicked)
    }

    const handleContactDeleteClick = () => {
        fetch(`http://localhost:3000/contacts/${id}`, {
            method: "DELETE",
        })
        .then(alert('contact has been deleted'))
        backToContacts()

    }
    const handleAddNote = async (e) => {
        e.preventDefault();
        let req = await fetch(`http://localhost:3000/contact_notes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: newNote,
                contact_id: contact.id,
                owner_id: owner.id
            })
        })
        fetchContact()
        setNewNote("")
    }


/////////////////////////////////////////////////////////////////-------------------////////////////////////////////////
    let [dealState, setDealState] = useState(false)
    let dealSwitch = () => {
        setDealState(!dealState)
        fetchContactDeals()
    }

    let [contactDealsArray, setContactDealsArray] = useState([])

    const fetchContactDeals = async () => {
        const req = await fetch(`http://localhost:3000/contact_to/${id}/deals`)
        const res = await req.json()
        console.log(res)
        setContactDealsArray(res)
    }

    useEffect(() => {
        fetchContactDeals()
    }, [])

    let c = 0

    let navigate = useNavigate()


    const backToContacts = () => {
        navigate('/contacts_page')
    }

    let [associateDeals, setAssociateDeals] = useState(false)

    let flipDealSwitch = () => {
        setAssociateDeals(!associateDeals)
    }

/////////////////////////////////////////////////////////////////-------------------////////////////////////////////////



    console.log('notes', notes)
    console.log('notes.reverse()', notes.reverse())
    console.log('typeof(notes)', typeof(notes))



    return (
        
        <div className='contact-card'>
                <div className="main">
                <button className="button" onClick={handleContactDeleteClick}>Delete Contact</button>
                <button className="button" onClick={handleEditClick}>Edit Contact</button>
                {/* <NavLink className='editContact' to="/edit_contact"><button>Edit Contact</button></NavLink> */}
                {/* <NavLink className='editContact' to="/edit_contact" state={{ from: "ContactCard"}}><button>Edit Contact</button></NavLink> */}

                <div className="row">
                    <div className="left col-md-4 mt-1">
                        <div className="card text-center sidebar">
                            <div className="card-body">
                                {/* <img src="imageplaceholder.jpg" alt="profile image" class="profile__image"></img> */}
                                <div className="card-text">
                                    <div className="card-text-head">
                                        <h3 className="card-data">{contact.name}</h3>
                                        <h4 className="card-data">{contact.email}</h4>
                                    </div>
                                    <hr></hr>
                                    <div className="card-text-body">
                                        <h4 className='card-data'>Email: {contact.email}/</h4>
                                        <h4 className="card-data">Phone: {contact.phone_number}</h4>
                                        <h4 className="card-data">Address: {contact.address}</h4>
                                        <h4 className="card-data">Linkedin: {contact.linkedin_url}</h4>
                                        <h4 className="card-data">Company: {contact.company_name}</h4>
                                        <h4 className="card-data">Owner: {contact.owner_name}</h4>
                                        <h4 className="card-data">Deals</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right col-md-8 mt-1">
                        <div className="card mb-3 content">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <ul className='notes'>
                                        <h4 className='notesheader'>All Notes</h4>
                                            <li>
                                                <form className='form' >
                                                    <textarea className='newNoteInput' value={newNote} onChange={(e) => setNewNote(e.target.value)}/>
                                                    <button className="button" onClick={handleAddNote}>Add Note</button>
                                                </form>
                                            </li>
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

            {isEditClicked ? <EditContact id={id} fetchContact={fetchContact} /> : null}

            <button onClick={() => dealSwitch()}>View Associated Deals</button>
            {dealState ? contactDealsArray.map((deal) => { return <RenderDeals key={c++} name={deal.name} product={deal.product} value={deal.value} stage={deal.stage} status={deal.status} company_name={deal.company_name} owner_name={deal.owner_name} /> }) : null}

            <button onClick={() => flipDealSwitch()}>Add Associated Deals</button>
            {associateDeals ? <AddAssociatedDeals id={id} contactID={contact.id} /> : null}

            <button onClick={() => backToContacts()}>{'Back to Contacts'}</button>
        </div>
    
    )
}

export default ContactCard; 