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
        setContactsArray(res)
        // console.log("Contacts: ", res)
    }
    useEffect(() => {
        fetchContacts()
    }, [])

    const handleDealSubmit = (e) => {
        e.preventDefault();
        let name = e.target[0].value
        let product = e.target[1].value
        let value = e.target[2].value
        let stage = e.target[3].value
        let active = e.target[4].value
        let stat = e.target[5].value
        let selectedContacts = e.target[6].value
        // let company = e.target[6].value
        // let owner = e.target[7].value

        console.log(e.target[6])
        console.log(e.target[6].options)
        console.log(e.target[6].value)

        stage = parseInt(stage)
        value = parseInt(value)
        if (active == 'Yes') {
            active = true
        } else if (active == 'No') {
            active = false
        }

        // fetch(`http://localhost:3000/deals`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         name: name,
        //         product: product,
        //         value: value,
        //         stage: stage,
        //         active: active,
        //         status: stat,
        //         company_id: 486,
        //         owner_id: 71
        //         // company_name: company,
        //         // owner_name: owner,
        //         // company_id: 800,
        //         // owner_id: 20
        //         // company_name: company,
        //         // owner_name: owner
        //     })
        // })
        // .then((res) => res.json())
        // .then((data) => console.log(data))

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
                    </select>s
                </label>
                <select multiple>
                    {contactsArray.map((contact) => {
                        return <option value={contact.name}>{contact.name}</option>
                    })}
                </select>
                {/* <input type='text' name='company_name' placeholder='Associated Company' value={null} /> */}
                {/* <input type='text' name='owner_name' placeholder='Associated Owner' value={null} /> */}
               
                <button type='submit'>Add Deal</button>
            </form>
        </div>
    )
}




export default AddNewDeal