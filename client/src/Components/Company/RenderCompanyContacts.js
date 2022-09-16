const RenderCompanyContacts = ({ name, email, phone_number, address, linkedin, owner }) => {


    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone_number}</p>
            <p>{address}</p>
            <p>{linkedin}</p>
            <p>{owner}</p>
            <hr></hr>
        </div>

    )
}

export default RenderCompanyContacts