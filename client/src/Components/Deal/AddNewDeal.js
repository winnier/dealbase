import { useState, useEffect } from 'react'


const AddNewDeal = () => {



    let [ownersArray, setOwnersArray] = useState([])
    let fetchOwners = async () => {
        let req = await fetch('http://localhost:3000/owners')
        let res = await req.json()
        setOwnersArray(res)
    }
    useEffect(() => {
        fetchOwners()
    }, [])

    let [companiesArray, setCompaniesArray] = useState([])
    let fetchCompanies = async () => {
        let req = await fetch('http://localhost:3000/companies')
        let res = await req.json()
        setCompaniesArray(res)
        console.log("Companies: ", res)
    }
    useEffect(() => {
        fetchCompanies()
    }, [])

    let [contactsArray, setContactsArray] = useState([])
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

    const handleDealSubmit = async (e) => {
        e.preventDefault();
        let newName = e.target[0].value
        let newProduct = e.target[1].value
        let newValue = e.target[2].value
        let newStage = e.target[3].value
        let newActive = e.target[4].value
        let newStatus = e.target[5].value
        let newOwner = e.target[6].value
        let newCompany = e.target[7].value


        // console.log(e.target[6].options[0].selected)
        // console.log(e.target[6].options[0].value)
        // console.log(e.target[6].options[0].id)
        // console.log(e.target[6].options[0])

        let contactsIDArray = []
        for (let i = 0; i < contactsArray.length; i++) {
            if (e.target[8].options[i].selected == true) {
                contactsIDArray.push(e.target[8].options[i].value)
            }
        }
        console.log(contactsIDArray)

        // stage = parseInt(stage)
        // value = parseInt(value)
        // if (active == 'Yes') {
        //     active = true
        // } else if (active == 'No') {
        //     active = false
        // }

        //create the deal first, get the company id and the owner id, put those in
        //then capture the newly created id of the deal that was just made
        //then go to the deal-contact join table and create new rows in there, as many as there are associated contacts

        let req = await fetch(`http://localhost:3000/deals`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: newName,
                product: newProduct,
                value: newValue,
                stage: newStage,
                active: newActive,
                status: newStatus,
                owner_id: newOwner,
                company_id: newCompany
            })
        })
        let res = await req.json()
        console.log(res)

        let req2 = await fetch('http://localhost:3000/contact_deals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                deal_id: res.id,
                contact_id_array: contactsIDArray,
                company_id: newCompany
            })
        })
        let res2 = await req2.json()
        console.log(res2)
    }

    return (
        <div className='add-new-deal'>
            <h2>New Deal</h2>
            <form onSubmit={handleDealSubmit}>
                <input type='text' name='name' placeholder='name' value={null} />
                <input type='text' name='product' placeholder='product' value={null} />
                <input type='text' name='value' placeholder='value' value={null} />
                <label>Select a Stage:
                    <select>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </label>
                <label>Active?
                    <select>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </label>
                <label>Status:
                    <select>
                        <option value='Pending'>Pending</option>
                        <option value='Win'>Win</option>
                        <option value='Loss'>Loss</option>
                    </select>
                </label>
                <label>Owner:
                    <select>
                        {ownersArray.map((owner) => {
                            return <option value={owner.id}>{owner.name}</option>
                        })}
                    </select>
                </label>
                <label>Company:
                    <select>
                        {companiesArray.map((company) => {
                            return <option value={company.id}>{company.name}</option>
                        })}
                    </select>
                </label>
                <label>Associated Contacts:
                    <select multiple>
                        {contactsArray.map((contact) => {
                            return <option value={contact.id}>{contact.name}</option>
                        })}
                    </select>
                </label>
                {/* <input type='text' name='company_name' placeholder='Associated Company' value={null} /> */}
                {/* <input type='text' name='owner_name' placeholder='Associated Owner' value={null} /> */}

                <button type='submit'>Add Deal</button>
            </form>
        </div>
    )
}




export default AddNewDeal