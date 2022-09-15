import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom"; // this lets you destructure the id out of the parameters. 
import EditContact from "./EditContact";

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
        console.log('contactObj',contactObj)
        setContact(contactObj)
        setNotes(contactObj.contact_notes)
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
        .catch(alert('this contact is long gone by now...'))

    }
    const handleAddNote = (e) => {
        e.preventDefault();

        console.log('content', `${newNote}`)
        console.log('contact.id', contact.id)
        console.log('owner.id', owner.id)
        console.log('contact_note: ', `content: ${newNote}, contact_id: ${contact.id}, owner_id: ${owner.id}`)

        fetch(`http://localhost:3000/contact_notes`, {
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
        console.log(`you clicked the add note button for ${contact.name}`)
    }

    console.log('isEditClicked', isEditClicked)

    console.log('notes', notes)
    console.log('typeof(notes)', typeof(notes))
    console.log('newNote', newNote)

    return (
        
        <div>
            <button onClick={handleContactDeleteClick}>Delete Contact</button>
            <button onClick={handleEditClick}>Edit Contact</button>
            {/* <NavLink className='editContact' to="/edit_contact"><button>Edit Contact</button></NavLink> */}
            {/* <NavLink className='editContact' to="/edit_contact" state={{ from: "ContactCard"}}><button>Edit Contact</button></NavLink> */}
            <h4>Name: {contact.name}</h4>
            <h4>Email: {contact.email}</h4>
            <h4>Phone: {contact.phone_number}</h4>
            <h4>Adress: {contact.address}</h4>
            <h4>Linkedin: {contact.linkedin_url}</h4>
            <h4>Company: {contact.company_name}</h4>
            <h4>Owner: {contact.owner_name}</h4>
            <form className='form' onClick={handleAddNote}>
            <textarea className='newNoteInput' value={newNote} onChange={(e) => setNewNote(e.target.value)}/>
            <button className="button">Add Note</button>
            </form>
            <h4 className='notesheader'>All Notes</h4>
            <ul className='notes'>
                {notes.map((note) => {
                    return <li className='note' key={note.id}>{`note created: ${note.created_at.substring(0, 10)} note by: ${note.owner_name} note content: ${note.content}`}</li>
                })}
            </ul>
            {isEditClicked?
            <EditContact fetchContact={fetchContact} contact={contact} setContact={setContact}/> : null}
        </div>
    
    )
}

export default ContactCard;