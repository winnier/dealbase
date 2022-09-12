import { useState } from "react"

const DealCard = (/* this should be passed from the DealsPage but for now, I'll grab it in a fetch {deal, currentDeal}*/) => {

    const [deals, setDeals] = useState([])
    const [changed, setChanged] = useState(false)
    const [contactsList, setContactsList] = useState([])

    const fetchDeals = async () => {
        const response = await fetch(`http://localhost:3000/deals`)
        // const allDeals = await response.json()
        setDeals(await response.json())
    }
    

    useEffect(() => {
        fetchDeals()
    },[changed])

    const editDeals = async (id) => {
        const response = await fetch(`http://localhost:3000/deals/:` +id)
        setDeals(await response.json())   
    }

    const handleCommentSubmit =(event) =>{
        event.preventDefault()
        editDeals(currentDeal.id)
    }



    return (
        <div className = "deal_card_container">
            <div>
                <h3>Deal Name:</h3>
                <p>{currentDeal.name}</p>
            </div>

            product
            {currentDeal.product}
            

            value
            {currentDeal.product}

            company
            {currentDeal.company.name}


            <div className="comments_on_card">
                <div id="deals_comment_paragraph">
                    <h3>Comments:</h3>
                    <p>{currentDeal.comments}</p>
                </div>
                
                <form className="comments_on_card_form" onClick={handleCommentSubmit} >
                    <label>
                        Add or update comments on this deal:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
            
        </div>
    )

}

export default DealCard;