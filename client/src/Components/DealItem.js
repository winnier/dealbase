const DealItem = ({ name, product, value, stage }) => {


    return (
        <div>
            <tr>
                <td>{name}</td>
                <td>{product}</td>
                <td>{`$${value}`}</td>
                <td>{stage}</td>
            </tr>
        </div>
    )
}


export default DealItem