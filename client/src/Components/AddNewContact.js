import {useState} from 'react'

function AddNewContact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [company, setCompany] = useState("")

    const onDelete = (id) => {
        console.log('delete this contact:', id)
    }

    const handleContactSubmit = (e) =>{
        e.preventDefault();
        console.log('name:', name, 'email:', email, 'phoneNumber:', phoneNumber, 'linkedin:', linkedin, 'company:', company)

        // fetch(`http://localhost:3000/contacts`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         name: name,
        //         email: email,
        //         phone_number: phoneNumber,
        //         address: address,
        //         linkedin_url: linkedin,
        //         company_name: company,
        //         owner_id: 3

        //     })
        // })

    }
    return(
        <div className='add-new-contact'>
            <h2>New Contact</h2>
            <form onSubmit={handleContactSubmit}>
                <input
                type='text'
                name='name'
                placeholder='name'
                value={name}
                onChange={(e => setName(e.target.value))}
                >
                </input>
                <input
                type='text'
                name='email'
                placeholder='email'
                value={email}
                onChange={(e => setEmail(e.target.value))}
                >
                </input>
                <input
                type='text'
                name='phone_number'
                placeholder='phone'
                value={phoneNumber}
                onChange={(e => setPhoneNumber(e.target.value))}
                >
                </input>
                <input
                type='text'
                name='linkedin_url'
                placeholder='Linkedin'
                value={linkedin}
                onChange={(e => setLinkedin(e.target.value))}
                >
                </input>
                <input
                type='text'
                name='company_name'
                placeholder='Company'
                value={company}
                onChange={(e => setCompany(e.target.value))}
                >
                </input>
                <button type='submit'>Add Contact</button>
            </form>
        </div>
    )
}

export default AddNewContact