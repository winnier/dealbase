



const DealItem = ({ name, product, value, stage }) => {


    return (
        <div>
            {/* <h2>{'Hello Again'}</h2>
            <h4>{name}</h4>
            <p>{product}</p> */}
            <tr>
                <td>{name}</td>
                <td>{product}</td>
                <td>{`$${value}`}</td>
                <td>{stage}</td>
                {/* <td>{deal.company.name}</td>
                <td>{deal.owner.name}</td> */}
            </tr>
        </div>
    )
}


export default DealItem