import { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom"; // useParams lets you destructure the id out of the parameters. 
import RenderContacts from './RenderContacts'
import EditDeal from './EditDeal'
import AddAssociatedContacts from "./AddAssociatedContacts";
import styles from '../../Styles/DealCard.css'

const DealCard = ({ existingDeal }) => {
    let [dealContacts, setDealContacts] = useState([])
    // const [isEditClicked, setIsEditClicked] = useState(false)
    let { id } = useParams()
    const [deal, setDeal] = useState(existingDeal || {})

    const [isEditClicked, setIsEditClicked] = useState(false)
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState("")

    let owner = {id: 3, name: "Will", email: "will@dealbase.com", username: "Will", password: "mypassword"}

    console.log('id', id)
    const fetchDeal = async () => {
        const response = await fetch(`http://localhost:3000/deals/${id}`)
        const dealObj = await response.json()
        console.log('dealObj', dealObj)
        setDeal(dealObj)
        let reverseOrderNotes = dealObj.deal_notes.reverse()
        setNotes(reverseOrderNotes)
    }

    useEffect(() => {
        fetchDeal()
    }, [])

    let handleEditClick = () => {
        setIsEditClicked(!isEditClicked)
    }

    const handleDealDeleteClick = () => {
        fetch(`http://localhost:3000/deals/${deal.id}`, {
            method: "DELETE",
        })
            .then(alert('Deal has been deleted'))
        backToDeals()

    }
    const handleAddNote = async (e) => {
        e.preventDefault();
        let req = await fetch(`http://localhost:3000/deal_notes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON. stringify({
                content: newNote,
                deal_id: deal.id,
                owner_id: owner.id
            })
        })
        fetchDeal()
        setNewNote("")
    }



    let [contactState, setContactState] = useState(false)
    let contactSwitch = () => {
        setContactState(!contactState)
        fetchDealContacts()
    }

    const fetchDealContacts = async () => {
        const req = await fetch(`http://localhost:3000/contact_to/${id}/deals`)
        const res = await req.json()
        console.log('res', res)
        setDealContacts(res)
    }

    useEffect(() => {
        fetchDealContacts()
    }, [])

    let c = 0

    let navigate = useNavigate()


    const backToDeals = () => {
        navigate('/deals_page')
    }

    let [associateContacts, setAssociateContacts] = useState(false)

    let flipContactSwitch = () => {
        setAssociateContacts(!associateContacts)
    }

    return (

        <div className="deal-card">
            {/* <button onClick={handleEditClick}>Edit Contact</button> */}
            {/* <NavLink className='editContact' to='/edit_deal'><button>Edit Deal</button></NavLink> */}
            <div className="main">
                <button className="button" onClick={handleDealDeleteClick}>Delete Deal</button>
                <button className="button" onClick={() => handleEditClick()}>Edit Deal</button>
                <div className="row">
                    <div className="left">
                        <div className="card sidebar">
                            <div className="card-body">
                                <div className="card-text">
                                    <div className="card-text-head"></div>
                                        <h3 className="card-data">{deal.name}</h3>
                                        <hr></hr>
                                        <div className="card-text-body">
                                            <h4 className="card-data">Product: {deal.product}</h4>
                                            <h4 className="card-data">Company: {deal.company_name}</h4>
                                            <h4 className="card-data">Stage: {deal.stage}</h4>
                                            <h4 className="card-data">Status: {deal.status}</h4>
                                            <h4 className="card-data">Owner: {deal.owner_name}</h4>
                                        </div>
                                        <hr></hr>
                                        {isEditClicked ? <EditDeal key={id} fetchDeal={fetchDeal} id={id}/> : null}

                                        <button onClick={() => contactSwitch()}>View Associated Contacts</button>
                                        <div className="contacts-container">
                                        {contactState ? dealContacts.map((deal) =>  { return <RenderContacts key={c++} name={deal.name} email={deal.email} phone_number={deal.phone_number} address={deal.address} linkedin={deal.linkedin_url} company_name={deal.company_name} owner_name={deal.owner_name}/>}) : null }
                                        </div>

                                        <button onClick={() => flipContactSwitch()}>Add Associated Contacts</button>
                                        {AddAssociatedContacts ? <AddAssociatedContacts id={id} dealID={deal.id} /> : null}
                                        <button onClick={() => backToDeals()}>{'Back to Deals'}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div>
                            <div className="card-body">
                                <div>
                                    <div className="col-md-3">
                                        <form className="note-form">
                                            <button className="note-button" onClick={handleAddNote}>Add Note</button>
                                            <textarea placeholder="insert text here" className="newNoteInput" value={newNote} onChange={(e) => setNewNote(e.target.value)} />
                                        </form>
                                        <h4 className='notesheader'>All Notes for this Deal</h4>
                                        <hr></hr>
                                        <ul className='notes'>
                                            {console.log('notes',notes)}
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

export default DealCard;