import { useState, useEffect } from 'react'

const AddAssociatedDeals = ( {id, contactID} ) => {

    let [contactsArray, setContactsArray] = useState([])

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

    let [companyID, setCompanyID] = useState(0)

    let fetchCompany = async () => {
        let req = await fetch(`http://localhost:3000/contact/${contactID}/company`)
        let res = await req.json()
        console.log(res)
        console.log(res.id)
        setCompanyID(res.id)
    }

    useEffect(() => {
        fetchCompany()
    }, [])

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

        let dealsIDArray = []
        for (let i = 0; i < contactsArray.length; i++) {
            if (e.target[0].options[i].selected == true) {
                dealsIDArray.push(e.target[0].options[i].value)
            }
        }
        console.log(dealsIDArray)

        id = parseInt(id)

        let req2 = await fetch(`http://localhost:3000/contact_profile/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                deal_id_array: dealsIDArray,
                contact_id: id,
                company_id: companyID
            })
        })
        let res2 = await req2.json()
        console.log(res2)

    }

    return (
        <div>
            <form onSubmit={handleDealSubmit}>
                <label>Deals:
                    <select multiple>
                        {dealsArray.map((deal) => {
                            return <option className="deal-options" value={deal.id}>{deal.product}</option>
                        })}
                    </select>
                </label>
                <input className="add-associations" type="submit" value="Add Associations"></input>
            </form>
        </div>
    )
}




export default AddAssociatedDeals