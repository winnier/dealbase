import { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom"; // useParams lets you destructure the id out of the parameters. 
import RenderContacts from './RenderContacts'
import EditDeal from './EditDeal'

const DealCard = () => {
    let { id } = useParams();
    const [deal, setDeal] = useState({})
    // const [isEditClicked, setIsEditClicked] = useState(false)

    const fetchDeal = async () => {
        const response = await fetch(`http://localhost:3000/deals/${id}`)
        const dealObj = await response.json()
        setDeal(dealObj)
    }

    let [dealContacts, setDealContacts] = useState([])

    const fetchDealContacts = async () => {
        const req = await fetch(`http://localhost:3000/contact/${id}/deals`)
        const res = await req.json()
        console.log(res)
        setDealContacts(res)
    }

    useEffect(() => {
        fetchDealContacts()
    },[])

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

        <div className="deal-card">
            {/* <button onClick={handleEditClick}>Edit Contact</button> */}
            {/* <NavLink className='editContact' to='/edit_deal'><button>Edit Deal</button></NavLink> */}
            <div className="main">
                <button onClick={handleDealDeleteClick}>Delete Deal</button>
                <button onClick={() => editClick()}>Edit Deal</button>
                <div className="row">
                    <h4>Name: {deal.name}</h4>
                    <h4>Product: {deal.product}</h4>
                    <h4>Company: {deal.company_name}</h4>
                    <h4>Stage: {deal.stage}</h4>
                    <h4>Status: {deal.status}</h4>
                    <h4>Owner: {deal.owner_name}</h4>
                    <button onClick={() => contactSwitch()}>View Associated Contacts</button>
                    {contactState ? dealContacts.map((deal) =>  { return <RenderContacts key={c++} name={deal.name} email={deal.email} phone_number={deal.phone_number} address={deal.address} linkedin={deal.linkedin_url} company_name={deal.company_name} owner_name={deal.owner_name}/>}) : null }
                    {editState ? <EditDeal fetchDeal={fetchDeal} id={id}/> : null}
                    <button onClick={() => backToDeals()}>{'Back to Deals'}</button>
                </div>
            </div>
        </div>
    )
}

export default DealCard;