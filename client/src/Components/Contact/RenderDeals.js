


const RenderDeals = ({ name, product, value, stage, active, status, company_name, owner_name }) => {


    return (
        <div>
            <p>{name}</p>
            <p>{product}</p>
            <p>{value}</p>
            <p>{stage}</p>
            <p>{active}</p>
            <p>{status}</p>
            <p>{company_name}</p>
            <p>{owner_name}</p>
            <hr></hr>
        </div>

    )
}

export default RenderDeals