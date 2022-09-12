import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // this lets you destructure the id out of the parameters. 
const ContactCard = () => {
    let {id} = useParams();
    const [contact, setContact] = useState({})

    const fetchContact = async () => {
        const response = await fetch(`http://localhost:3000/contacts/${id}`)
        const contactObj = await response.json()
        console.log(contactObj)
        setContact(contactObj)
      }

    useEffect(() => {
        fetchContact()
    }, [])

    console.log('contact',contact)
    return (
        <div>
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