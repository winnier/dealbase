import { useState } from 'react'


const AddNewDeal = () => {

    
    const handleDealSubmit = (e) => {
        e.preventDefault();
        let name = e.target[0].value
        let product = e.target[1].value
        let value = e.target[2].value
        let active = e.target[3].value
        let the_status = e.target[4].value

        // t.string "name"
        // t.string "product"
        // t.integer "value"
        // t.integer "stage"
        // t.boolean "active"
        // t.string "status"
        // t.datetime "created_at", null: 00521false
        // t.datetime "updated_at", null: false
        // t.integer "company_id"
        // t.integer "owner_id"
        // t.text "comments"

        fetch(`http://localhost:3000/deals`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                product: product,
                value: value,
                active: active,
                status: the_status
            })
        })

    }
    return (
        <div className='add-new-deal'>
            <h2>New Deal</h2>
            <form onSubmit={handleDealSubmit}>
                <input
                    type='text'
                    name='name'
                    placeholder='name'
                    value={null}
                />
                <input
                    type='text'
                    name='email'
                    placeholder='email'
                    value={null}
                />
                <input
                    type='text'
                    name='phone_number'
                    placeholder='phone'
                    value={null}
                />
                <input
                    type='text'
                    name='linkedin_url'
                    placeholder='Linkedin'
                    value={null}
                />
               
                <button type='submit'>Add Deal</button>
            </form>
        </div>
    )
}




export default AddNewDeal