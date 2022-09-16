import { useState, useEffect } from 'react'

const AddAssociatedContacts = ({ id }) => {

    // id = deal id
    let [contactsArray, setContactsArray] = useState([])

    let [dealsArray, setDealsArray] = useState([])

    let fetchContacts = async () => {
        let req = await fetch('http://localhost:3000/contacts')
        let res = await req.json()
        res = res.sort((a, b) => {
            return (a.name < b.name ? -1 : 1)
        })
        setContactsArray(res)
        // console.log("Contacts: ", res)
    }
    useEffect(() => {
        fetchContacts()
    }, [])

    let [companyID, setCompanyID] = useState(0)

    let fetchCompany = async () => {
        let req = await fetch(`http://localhost:3000/deal/${id}/company`)
        let res = await req.json()
        console.log(res)
        console.log(res.id)
        setCompanyID(res.id)
    }

    useEffect(() => {
        console.log(id)
        fetchCompany()
    }, [])

    // let fetchContacts = async () => {
    //     let req = await fetch('http://localhost:3000/contacts')
    //     let res = await req.json()
    //     res = res.sort((a, b) => {
    //         return (a.name < b.name ? -1 : 1)
    //     })
    //     setContactsArray(res)
    //     // console.log("Contacts: ", res)
    // }
    // useEffect(() => {
    //     fetchContacts()
    // }, [])


    const handleContactSubmit = async (e) => {
        e.preventDefault();

        let contactsIDArray = []
        for (let i = 0; i < contactsArray.length; i++) {
            if (e.target[0].options[i].selected == true) {
                contactsIDArray.push(e.target[0].options[i].value)
            }
        }
        console.log(contactsIDArray)

        id = parseInt(id)

        let req2 = await fetch('http://localhost:3000/contact_deals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                deal_id: id,
                contact_id_array: contactsIDArray,
                company_id: companyID
            })
        })
        let res2 = await req2.json()
        console.log(res2)

    }

    return (
        <div>
            <form onSubmit={handleContactSubmit}>
                <label>Contacts:
                    <select multiple>
                        {contactsArray.map((contact) => {
                            return <option value={contact.id}>{contact.name}</option>
                        })}
                    </select>
                </label>
                <input type="submit" value="Add Associations"></input>
            </form>
        </div>
    )
}




export default AddAssociatedContacts