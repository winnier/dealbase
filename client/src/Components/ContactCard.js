import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom"; // this lets you destructure the id out of the parameters. 
import ContactsPage from "./ContactsPage";

const ContactCard = ({onDelete}) => {
    let {id} = useParams();
    const [contact, setContact] = useState({})
    // const [isEditClicked, setIsEditClicked] = useState(false)

    const fetchContact = async () => {
        const response = await fetch(`http://localhost:3000/contacts/${id}`)
        const contactObj = await response.json()
        console.log(contactObj)
        setContact(contactObj)
      }

    useEffect(() => {
        fetchContact()
    }, [])

    // const handleEditClick = () => {
    //     setIsEditClicked(!isEditClicked)
    // }

    const handleContactDeleteClick = () => {
        fetch(`http://localhost:3000/contacts/${id}`, {
            method: "DELETE",
        })
        .then(alert('contact has been deleted'))
        .catch(alert('this contact is long gone by now...'))
    }

    // console.log('isEditClicked', isEditClicked)

    // if (isEditClicked == true) {
    //     console.log('wwttff')
    // }
    return (
        
        <div>
            <button onClick={handleContactDeleteClick}>Delete Contact</button>
            {/* <button onClick={handleEditClick}>Edit Contact</button> */}
            <NavLink className='editContact' to='/edit_contact'><button>Edit Contact</button></NavLink>
            <h4>Name: {contact.name}</h4>
            <h4>Email: {contact.email}</h4>
            <h4>Phone: {contact.phone_number}</h4>
            <h4>Adress: {contact.address}</h4>
            <h4>Linkedin: {contact.linkedin_url}</h4>
            <h4>Company: {contact.company_name}</h4>
            <h4>Owner: {contact.owner_name}</h4>
        </div>
    
    )
}

export default ContactCard;