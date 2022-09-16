import { useState, useEffect } from 'react'

const EditCompany = ({ id, fetchCompany }) => {

    const updateName = async (e) => {
        e.preventDefault()
        let newName = e.target[0].value
        let req = await fetch(`http://localhost:3000/companies/${id}`, {
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
        fetchCompany()
    }

    const updateAddress = async (e) => {
        e.preventDefault()
        let newAddress = e.target[0].value
        let req = await fetch(`http://localhost:3000/companies/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                address: newAddress
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        fetchCompany()
    }

    const updateIndustry = async (e) => {
        e.preventDefault()
        let newIndustry = e.target[0].value
        let req = await fetch(`http://localhost:3000/companies/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                industry: newIndustry
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        fetchCompany()
    }

    const updateLinkedIn = async (e) => {
        e.preventDefault()
        let newLinkedIn = e.target[0].value
        let req = await fetch(`http://localhost:3000/companies/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                linkedin_url: newLinkedIn
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        fetchCompany()
    }

    const updateWebsite = async (e) => {
        e.preventDefault()
        let newWebsite = e.target[0].value
        let req = await fetch(`http://localhost:3000/companies/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                website: newWebsite
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        fetchCompany()
    }

    return (

        

        <div>
            <form onSubmit={updateName}>
                <input type="text" placeholder="Update Name" />
                <input type="submit" value="Update Name" />
            </form>
            <form onSubmit={updateAddress}>
                <input type="text" placeholder="Update Address" />
                <input type="submit" value="Update Address" />
            </form>
            <form onSubmit={updateIndustry}>
                <input type="text" placeholder="Update Industry" />
                <input type="submit" value="Update Industry" />
            </form>
            <form onSubmit={updateLinkedIn}>
                <input type="text" placeholder="Update LinkedIn" />
                <input type="submit" value="Update LinkedIn" />
            </form>
            <form onSubmit={updateWebsite}>
                <input type="text" placeholder="Update Website" />
                <input type="submit" value="Update Website" />
            </form>
        </div>
        )

    
}



export default EditCompany