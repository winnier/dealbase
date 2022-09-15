import { useState, useEffect } from 'react'

const EditDeal = ( {id, fetchDeal} ) => {

    let [ownersArray, setOwnersArray] = useState([])
    let fetchOwners = async () => {
        let req = await fetch('http://localhost:3000/owners')
        let res = await req.json()
        setOwnersArray(res)
    }

    useEffect(() => {
        fetchOwners()
    },[])

    let [companiesArray, setCompaniesArray] = useState([])
    let fetchCompanies = async () => {
        let req = await fetch('http://localhost:3000/companies')
        let res = await req.json()
        setCompaniesArray(res)
        console.log("Companies: ", res)
    }

    useEffect(() => {
        fetchCompanies()
    },[])


    const updateName = async (e) => {
        e.preventDefault()
        let new_name = e.target[0].value
        let req = await fetch(`http://localhost:3000/deals/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                name: new_name
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        let res = await req.json()
        console.log(res)
        fetchDeal()
    }

    const updateProduct = async (e) => {
        e.preventDefault()
        let newProduct = e.target[0].value
        let req = await fetch(`http://localhost:3000/deals/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                product: newProduct
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        let res = await req.json()
        console.log(res)
        fetchDeal()
    }



    const updateCompany = async (e) => {
        e.preventDefault()
        console.log(e.target)
        console.log('Logging: ', e.target[0].value)
        let x = e.target[0].value
        console.log(typeof x)

        let newCompany
        for (let i = 0; i < companiesArray.length; i++) {
            if (e.target[0].value == companiesArray[i].name) {
                newCompany = companiesArray[i]
            }
        }
        let req = await fetch(`http://localhost:3000/deals/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                company_id: newCompany.id
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        let res = await req.json()
        console.log(res)
        fetchDeal()
    }

    const updateStage = async (e) => {
        e.preventDefault()
        let newStage = e.target[0].value
        let req = await fetch(`http://localhost:3000/deals/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                stage: newStage
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        let res = await req.json()
        console.log(res)
        fetchDeal()
    }

    const updateStatus = async (e) => {
        e.preventDefault()
        let newStatus = e.target[0].value
        let req = await fetch(`http://localhost:3000/deals/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                status: newStatus
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        let res = await req.json()
        console.log(res)
        fetchDeal()
    }

    const updateOwner = async (e) => {
        e.preventDefault()
        let new_owner
        for (let i = 0; i < ownersArray.length; i++) {
            if (ownersArray[i].name == e.target[0].value) {
                new_owner = ownersArray[i]
            }
        }
        let req = await fetch(`http://localhost:3000/deals/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                owner_id: new_owner.id
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        let res = await req.json()
        console.log(res)
        fetchDeal()
    }


    return (
        <div>
            <form onSubmit={updateName}>
                <input type="text" placeholder="Update Name" />
                <input type="submit" value="Update Name" />
            </form>
            <form onSubmit={updateProduct}>
                <input type="text" placeholder="Update Product" />
                <input type="submit" value="Update Product" />
            </form>
            <form onSubmit={updateCompany}>
                <select>
                    {companiesArray.map((company) => {
                        return <option value={company.name}>{company.name}</option>
                    })}
                </select>
                <input type="submit" value="Update Company" />
            </form>
            <form onSubmit={updateStage}>
                <label>
                    <select>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    <input type="submit" value="Update Stage" />
                </label>
            </form>
            <form onSubmit={updateStatus}>
                <label>
                    <select>
                        <option value='Pending'>{'Pending'}</option>
                        <option value='Win'>{'Win'}</option>
                        <option value='Loss'>{'Loss'}</option>
                    </select>
                    <input type="submit" value="Update Status" />
                </label>
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



export default EditDeal