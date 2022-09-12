const DealsPage = ({}) => {
    const [deals, setDeals] = useState([])


    const fetchDeals = async () => {
        const response = await fetch(`http://localhost:3000/deals`)
        // const allDeals = await response.json()
        setDeals(await response.json())
    }
    

    const handleDealClick = ( ) => {

    }

    return (
        <div>
            
        </div>
    )

}

export default DealsPage;