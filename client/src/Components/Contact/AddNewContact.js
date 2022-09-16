import { useState, useEffect } from 'react'


const AddNewContact = () => {



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

    let [dealsArray, setDealsArray] = useState([])
    let fetchDeals = async () => {
        let req = await fetch('http://localhost:3000/deals')
        let res = await req.json()
        res = res.sort((a, b) => {
            return (a.name < b.name ? -1 : 1)
        })
        setDealsArray(res)
        // console.log("Contacts: ", res)
    }
    useEffect(() => {
        fetchDeals()
    }, [])

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        let newName = e.target[0].value
        let newEmail = e.target[1].value
        let newPhoneNumber = e.target[2].value
        let newAddress = e.target[3].value
        let newLinkedIn = e.target[4].value
        let newCompany = e.target[5].value
        let newOwner = e.target[6].value


        // console.log(e.target[6].options[0].selected)
        // console.log(e.target[6].options[0].value)
        // console.log(e.target[6].options[0].id)
        // console.log(e.target[6].options[0])

        let dealsIDArray = []
        for (let i = 0; i < dealsArray.length; i++) {
            if (e.target[7].options[i].selected == true) {
                dealsIDArray.push(e.target[7].options[i].value)
            }
        }
        console.log(dealsIDArray)

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

        let req = await fetch(`http://localhost:3000/contacts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: newName,
                email: newEmail,
                phone_number: newPhoneNumber,
                address: newAddress,
                linkedin_url: newLinkedIn,
                //
                owner_id: newOwner,
                company_id: newCompany
            })
        })
        let res = await req.json()
        console.log(res)

        let req2 = await fetch(`http://localhost:3000/contact_profile/${res.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                deal_id_array: dealsIDArray,
                contact_id: res.id,
                company_id: newCompany
            })
        })
        // let res2 = await req2.json()
        // console.log(res2)
    }

    return (
        <div className='add-new-deal'>
            <h2>New Contact</h2>
            <form onSubmit={handleContactSubmit}>
                <input type='text' name='name' placeholder='name' value={null} />
                <input type='text' name='email' placeholder='Email' value={null} />
                <input type='text' name='Phone' placeholder='Phone Number' value={null} />
                <input type='text' name='Address' placeholder='Address' value={null} />
                <input type='text' name='linkedin' placeholder='LinkedIn' value={null} />
                <label>Company:
                    <select>
                        {companiesArray.map((company) => {
                            return <option value={company.id}>{company.name}</option>
                        })}
                    </select>
                </label>
                <label>Owner:
                    <select>
                        {ownersArray.map((owner) => {
                            return <option value={owner.id}>{owner.name}</option>
                        })}
                    </select>
                </label>
                <label>Associated Deals:
                    <select multiple>
                        {dealsArray.map((deal) => {
                            return <option value={deal.id}>{deal.product}</option>
                        })}
                    </select>
                </label>
                {/* <input type='text' name='company_name' placeholder='Associated Company' value={null} /> */}
                {/* <input type='text' name='owner_name' placeholder='Associated Owner' value={null} /> */}

                <button type='submit'>Add Contact</button>
            </form>
        </div>
    )
}




export default AddNewContact