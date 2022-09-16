import { useState, useEffect } from 'react'

const AddAssociatedDeals = () => {

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


    return (
        <div>
            <label>Deals:
                <select multiple>
                    {dealsArray.map((deal) => {
                        return <option value={deal.id}>{deal.product}</option>
                    })}
                </select>
            </label>
        </div>
    )
}




export default AddAssociatedDeals