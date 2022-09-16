import { useState, useEffect } from 'react'


const AddNewCompany = () => {

    let [ownersArray, setOwnersArray] = useState([])
    let [rand, setRand] = useState(0)

    let fetchOwners = async () => {
        let req = await fetch('http://localhost:3000/owners')
        let res = await req.json()
        setOwnersArray(res)
        console.log("owners: ", res)
    }
    useEffect(() => {
        fetchOwners()
        setRand(parseInt(Math.random() * 5) )
        console.log(rand)
    }, [])

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        let newName = e.target[0].value
        let newAddress = e.target[1].value
        let newCountry = e.target[2].value
        let newIndustry = e.target[3].value
        let newLinkedIn = e.target[4].value
        let newWebsite = e.target[5].value
        let ownerID = ownersArray[rand].id

        let req = await fetch(`http://localhost:3000/companies`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: newName,
                address: newAddress,
                country: newCountry,
                industry: newIndustry,
                linkedin_url: newLinkedIn,
                website: newWebsite,
                owner_id: ownerID
            })
        })
        let res = await req.json()
        console.log(res)
    }

    return (
        <div className='add-new-deal'>
            <h2>Add New Company</h2>
            <form onSubmit={handleContactSubmit}>
                <input type='text' name='name' placeholder='name' value={null} />
                <input type='text' name='address' placeholder='Address' value={null} />
                <input type='text' name='country' placeholder='Country' value={null} />
                <input type='text' name='Industry' placeholder='Industry' value={null} />
                <input type='text' name='linkedin' placeholder='LinkedIn' value={null} />
                <input type='text' name='website' placeholder='Website' value={null} />
               
                <button type='submit'>Add Company</button>
            </form>
        </div>
    )
}




export default AddNewCompany