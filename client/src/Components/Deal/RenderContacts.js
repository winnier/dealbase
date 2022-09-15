


const RenderContacts = ( {name, email, phone_number, address, linkedin_url, company_name, owner_name} ) => {


    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone_number}</p>
            <p>{address}</p>
            <p>{linkedin_url}</p>
            <p>{company_name}</p>
            <p>{owner_name}</p>
            <hr></hr>
        </div>

    )
}

export default RenderContacts