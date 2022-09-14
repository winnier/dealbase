import { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom"; // useParams lets you destructure the id out of the parameters. 

const DealCard = () => {
    let { id } = useParams();
    const [deal, setDeal] = useState({})
    // const [isEditClicked, setIsEditClicked] = useState(false)

    const fetchDeal = async () => {
        const response = await fetch(`http://localhost:3000/deals/${id}`)
        const dealObj = await response.json()
        console.log(dealObj)
        setDeal(dealObj)
    }

    useEffect(() => {
        fetchDeal()
    }, [])

    // const handleEditClick = () => {
    //     setIsEditClicked(!isEditClicked)
    // }

    const handleDealDeleteClick = () => {
        fetch(`http://localhost:3000/deals/${id}`, {
            method: "DELETE",
        })
            .then(alert('Deal has been deleted'))
        deleteNav()
    }

    let navigate = useNavigate()
    const deleteNav = () => {
        navigate(`/deals_page`)
    }

   
    return (

        <div>
            <button onClick={handleDealDeleteClick}>Delete Deal</button>
            {/* <button onClick={handleEditClick}>Edit Contact</button> */}
            <NavLink className='editContact' to='/edit_deal'><button>Edit Deal</button></NavLink>
            <h4>Name: {deal.name}</h4>
            <h4>Product: {deal.product}</h4>
            <h4>Company: {deal.company_name}</h4>
            <h4>Stage: {deal.stage}</h4>
            <h4>Status: {deal.status}</h4>
            <h4>Owner: {deal.owner_name}</h4>
        </div>

    )
}

export default DealCard;