function EditContact ({contact}) {

    console.log({contact})

    const {name, email, phone_number, address, linkedin_url, company_name, owner_name} = contact
    console.log('name', name)
    console.log('email', name)
    console.log('phone_number', name)
    return (
        <div className='edit-contact'>
            <h2>Edit Contact</h2>
            <button>Submit Changes</button>
            <form>
                <input
                type='text'
                name='name'
                placeholder='placeholder'></input>
            </form>
        </div>
    )
}

export default EditContact