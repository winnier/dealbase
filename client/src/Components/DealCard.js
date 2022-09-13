import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom"; // this lets you destructure the id out of the parameters. 
import DealsPage from "./DealsPage";

const DealCard = ({ onDelete }) => {
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
            .catch(alert('This contact is long gone by now...'))
    }

   
    return (

        <div>
            <button onClick={handleDealDeleteClick}>Delete Deal</button>
            {/* <button onClick={handleEditClick}>Edit Contact</button> */}
            <NavLink className='editContact' to='/edit_deal'><button>Edit Deal</button></NavLink>
            <h4>Name: {deal.Name}</h4>
            <h4>Name: {deal.product}</h4>
            <h4>Email: {deal.value}</h4>
            <h4>Phone: {deal.stage}</h4>
            <h4>Adress: {deal.active}</h4>
            <h4>Linkedin: {deal.status}</h4>
            <h4>Company: {deal.company_name}</h4>
            <h4>Owner: {deal.owner_name}</h4>
        </div>

    )
}

export default DealCard;