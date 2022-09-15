import {useEffect, useState} from 'react'

function EditContact ({contact, setContact, fetchContact}) {
    
    console.log('contact', contact)
    
    const {name, email, phone_number, address, linkedin_url, company_name, owner_name} = contact

    const [owners, setOwners] = useState([])
    const [updatedName, setUpdatedName] = useState(name)
    const [updatedEmail, setUpdatedEmail] = useState(email)
    const [updatedPhone, setUpdatedPhone] = useState(phone_number)
    const [updatedAddress, setUpdatedAddress] = useState(address)
    const [updatedLinkedin, setUpdatedLinkedin] = useState(linkedin_url)
    const [updatedCompany, setUpdatedCompany] = useState(company_name)
    const [updatedOwner, setUpdatedOwner] = useState(owner_name)

    const fetchOwners = async () => {
        const response = await fetch(`http://localhost:3000/owners`)
        const ownersArray = await response.json()
        setOwners(ownersArray)
    }

    useEffect(() => {
        fetchOwners()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('owners', owners)
        let newOwnerArray = []
        let filteredOwnerArray = owners.filter((owner) => owner.name == updatedOwner);
        newOwnerArray = [...filteredOwnerArray]
        console.log('newOwnerArray[0]', newOwnerArray[0])
        let newOwnerObject = newOwnerArray[0]
        console.log('newOwnerObject', newOwnerObject)
        let newOwnerId = newOwnerObject.id
        console.log('newOwnerId', newOwnerId)


        
        fetch(`http://localhost:3000/contacts/${contact.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: updatedName, email: updatedEmail, phone_number: updatedPhone, address: updatedAddress, linkedin_url: updatedLinkedin, owner_id: newOwnerId})
        })
        .then((r) => r.json())        
        fetchContact()
    }

    const updateOwner = (e) => {
        e.preventDefault()
        // console.log('e.target[0].value',e.target[0].value)
        let new_owner
        for (let i = 0; i < owners.length; i++) {
            if (owners[i].name == e.target[0].value) {
                new_owner = owners[i]
            }
        }
        fetch(`http://localhost:3000/contacts/${contact.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                owner_id: new_owner.id
            })
        })
        .then((r) => r.json())
        fetchContact()
    }

    return (
        <div className='edit-contact'>
            <h2>Edit Contact</h2>
            <form onSubmit={handleSubmit}>
            <button type='submit'>Save Changes</button>
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
                </form>
                <form onSubmit={updateOwner}>
                <label>
                    <select>
                        <option value='Aaron'>{'Aaron'}</option>
                        <option value='Antonio'>{'Antonio'}</option>
                        <option value='Haala'>{'Haala'}</option>
                        <option value='Will'>{'Will'}</option>
                        <option value='Winnie'>{'Winnie'}</option>
                    </select>
                    <input type="submit" value="Update Owner" />
                </label>
                </form>
                

        </div>
    )
}

export default EditContact