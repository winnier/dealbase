const RenderCompanyDeals = ({ name, product, value, stage, active, status, owner }) => {


    return (
        <div>
            <p>{name}</p>
            <p>{product}</p>
            <p>{value}</p>
            <p>{stage}</p>
            <p>{active}</p>
            <p>{status}</p>
            <p>{owner}</p>
            <hr></hr>
        </div>

    )
}

export default RenderCompanyDeals