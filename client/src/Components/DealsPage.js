import DealCard from "./DealCard"
import {useEffect, useState} from 'react'


const DealsPage = ({deals, setDeals}) => {
    
    const [changed, setChanged] = useState(false)


    const fetchDeals = async () => {
        const response = await fetch(`http://localhost:3000/deals`)
        // const allDeals = await response.json()
        setDeals(await response.json())
    }

    useEffect(() => {
        fetchDeals()
    },[changed])
    

    const handleDealClick = ( ) => {
        
        <DealCard setDeals={setDeals} setChanged={setChanged}/>
    }

    return (
        <div>
            
        </div>
    )

}

export default DealsPage;