import {useState} from 'react'

function EditContact ({contact, setContact}) {
    
    console.log('contact', contact)
    
    const {name, email, phone_number, address, linkedin_url, company_name, owner_name} = contact
    const [updatedName, setUpdatedName] = useState(name)
    const [updatedEmail, setUpdatedEmail] = useState(email)
    const [updatedPhone, setUpdatedPhone] = useState(phone_number)
    const [updatedAddress, setUpdatedAddress] = useState(address)
    const [updatedLinkedin, setUpdatedLinkedin] = useState(linkedin_url)
    const [updatedCompany, setUpdatedCompany] = useState(company_name)
    const [updatedOwner, setUpdatedOwner] = useState(owner_name)

    

    // console.log('name', name)
    // console.log('email', email)
    // console.log('phone_number', phone_number)
    // console.log('adderss', address)
    // console.log('linkedin_url', linkedin_url)
    // console.log('company_name', company_name)
    // console.log('owner_name', owner_name)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/contacts/${contact.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: updatedName, email: updatedEmail, phone_number: updatedPhone, address: updatedAddress, linkedin_url: updatedLinkedin, owner_id: 3})
        })        
    }



    return (
        <div className='edit-contact'>
            <h2>Edit Contact</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input
                type='text'
                name='name'
                placeholder="Name"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
                >
                </input>
                <label htmlFor='email'>Email: </label>
                <input
                type='text'
                name='email'
                placeholder="email"
                value={updatedEmail}
                onChange={(e) => setUpdatedEmail(e.target.value)}
                >
                </input>
                <label htmlFor='phone'>Phone: </label>
                <input
                type='text'
                name='phone'
                placeholder="Phone"
                value={updatedPhone}
                onChange={(e) => setUpdatedPhone(e.target.value)}
                >
                </input>
                <label htmlFor={address}>Address: </label>
                <input
                type='text'
                name='address'
                placeholder="Address"
                value={updatedAddress}
                onChange={(e) => setUpdatedAddress(e.target.value)}
                >
                </input>
                <label htmlFor="linkedin">Linkedin: </label>
                <input
                type='text'
                name='linkedin'
                placeholder="Linkedin"
                value={updatedLinkedin}
                onChange={(e) => setUpdatedLinkedin(e.target.value)}
                >
                </input>
                <label htmlFor='company'>Company Name: </label>
                <input
                type='text'
                name='company'
                placeholder="Company"
                value={updatedCompany}
                onChange={(e) => setUpdatedCompany(e.target.value)}
                >
                </input>
                <label htmlFor='owner'>Owner: </label>
                <input
                type='text'
                name='owner'
                placeholder="Owner"
                value={updatedOwner}
                onChange={(e) => setUpdatedOwner(e.target.value)}
                >
                </input>
                <button type='submit'>Save Changes</button>
            </form>
        </div>
    )
}

export default EditContact