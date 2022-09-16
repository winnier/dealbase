import {useEffect, useState} from 'react'

function EditContact({ contact, setContact, fetchContact, id }) {

    const updateName = async (e) => {
        e.preventDefault()
        let newName = e.target[0].value
        let req = await fetch(`http://localhost:3000/contacts/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                name: newName
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        // let res = await req.json()
        // console.log(res)
        fetchContact()
    }

    const updateEmail = async (e) => {
        e.preventDefault()
        let newEmail = e.target[0].value
        let req = await fetch(`http://localhost:3000/contacts/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                email: newEmail
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        fetchContact()
    }

    const updatePhoneNumber = async (e) => {
        e.preventDefault()
        let newPhoneNumber = e.target[0].value
        let req = await fetch(`http://localhost:3000/contacts/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                phone_number: newPhoneNumber
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        fetchContact()
    }

    const updateAddress = async (e) => {
        e.preventDefault()
        let newAddress = e.target[0].value
        let req = await fetch(`http://localhost:3000/contacts/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                address: newAddress
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        fetchContact()
    }

    const updateLinkedIn = async (e) => {
        e.preventDefault()
        let newLinkedIn = e.target[0].value
        let req = await fetch(`http://localhost:3000/contacts/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                linkedin_url: newLinkedIn
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        fetchContact()
    }


    let [companiesArray, setCompaniesArray] = useState([])

    let fetchCompanies = async () => {
        let req = await fetch('http://localhost:3000/companies')
        let res = await req.json()
        setCompaniesArray(res)
    }

    useEffect(() => {
        fetchCompanies()
    }, [])


    const updateCompany = async (e) => {
        e.preventDefault()
        let newCompany
        for (let i = 0; i < companiesArray.length; i++) {
            if (e.target[0].value == companiesArray[i].name) {
                newCompany = companiesArray[i]
            }
        }
        console.log(newCompany)
        let req = await fetch(`http://localhost:3000/contacts/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                company_id: newCompany.id
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        // let res = await req.json()
        // console.log(res)
        fetchContact()
    }

    let [ownersArray, setOwnersArray] = useState([])
    let fetchOwners = async () => {
        let req = await fetch('http://localhost:3000/owners')
        let res = await req.json()
        setOwnersArray(res)
    }

    useEffect(() => {
        fetchOwners()
    }, [])




    const updateOwner = async (e) => {
        e.preventDefault()
        let newOwner
        console.log(ownersArray)
        console.log(e.target[0].value)
        for (let i = 0; i < ownersArray.length; i++) {
            if (ownersArray[i].name == e.target[0].value) {
                newOwner = ownersArray[i]
            }
        }
        let req = await fetch(`http://localhost:3000/contacts/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                owner_id: newOwner.id
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
     
        fetchContact()
    }


    return (
        <div>
            <form onSubmit={updateName}>
                <input type="text" placeholder="Update Name" />
                <input type="submit" value="Update Name" />
            </form>
            <form onSubmit={updateEmail}>
                <input type="text" placeholder="Update Email" />
                <input type="submit" value="Update Email" />
            </form>
            <form onSubmit={updatePhoneNumber}>
                <input type="text" placeholder="Update Phone Number" />
                <input type="submit" value="Update Phone Number" />
            </form>
            <form onSubmit={updateAddress}>
                <input type="text" placeholder="Update Address" />
                <input type="submit" value="Update Address" />
            </form>
            <form onSubmit={updateLinkedIn}>
                <input type="text" placeholder="Update LinkedIn" />
                <input type="submit" value="Update LinkedIn" />
            </form>
            <form onSubmit={updateCompany}>
                <select>
                    {companiesArray.map((company) => {
                        return <option value={company.name}>{company.name}</option>
                    })}
                </select>
                <input type="submit" value="Update Company" />
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