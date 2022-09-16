import { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom"; // useParams lets you destructure the id out of the parameters. 
import RenderContacts from './RenderContacts'
import EditDeal from './EditDeal'

const DealCard = ({ existingDeal }) => {
    let [dealContacts, setDealContacts] = useState([])
    // const [isEditClicked, setIsEditClicked] = useState(false)
    let { id } = useParams()
    const [deal, setDeal] = useState(existingDeal || {})

    const fetchDeal = async (id) => {
        const response = await fetch(`http://localhost:3000/deals/${id}`)
        const dealObj = await response.json()
        setDeal(dealObj)
    }

    const fetchDealContacts = async () => {
        const req = await fetch(`http://localhost:3000/contact/${deal.id}/deals`)
        const res = await req.json()
        console.log(res)
        setDealContacts(res)
    }

    useEffect(() => {
        if (!existingDeal) {
            fetchDeal(id) 
        }
        fetchDealContacts()
    }, [])

    // const handleEditClick = () => {
    //     setIsEditClicked(!isEditClicked)
    // }

    const handleDealDeleteClick = () => {
        fetch(`http://localhost:3000/deals/${deal.id}`, {
            method: "DELETE",
        })
            .then(alert('Deal has been deleted'))
        backToDeals()
    }

    let navigate = useNavigate()

    let [contactState, setContactState] = useState(false)
    let contactSwitch = () => {
        setContactState(!contactState)
    }
    
    let c = 0

    const backToDeals = () => {
        navigate('/deals_page')
    }

    let [editState, setEditState] = useState(false)

    let editClick = () => {
        setEditState(!editState)
        console.log(editState)
    }

    return (

        <div>
            {/* <button onClick={handleEditClick}>Edit Contact</button> */}
            {/* <NavLink className='editContact' to='/edit_deal'><button>Edit Deal</button></NavLink> */}
            <div>
            <h4>Name: {deal.name}</h4>
            <h4>Product: {deal.product}</h4>
            <h4>Company: {deal.company_name}</h4>
            <h4>Stage: {deal.stage}</h4>
            <h4>Status: {deal.status}</h4>
            <h4>Owner: {deal.owner_name}</h4>
            <button onClick={() => editClick()}>Edit Deal</button>
            <button onClick={handleDealDeleteClick}>Delete Deal</button>
            <button onClick={() => contactSwitch()}>View Associated Contacts</button>
            {contactState ? dealContacts.map((deal) =>  { return <RenderContacts key={c++} name={deal.name} email={deal.email} phone_number={deal.phone_number} address={deal.address} linkedin={deal.linkedin_url} company_name={deal.company_name} owner_name={deal.owner_name}/>}) : null }
            {/* {editState ? <EditDeal fetchDeal={() => { fetchDeal(deal.id) }} id={deal.id}/> : null} */}
            {editState ? <EditDeal stage={deal.stage} fetchDeal={fetchDeal} id={id}/> : null}
            <button onClick={() => backToDeals()}>{'Back to Deals'}</button>
        </div>
        </div>
    )
}

export default DealCard;