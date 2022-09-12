import DealItem from './DealItem'
import DealCard from './DealCard'

import { useEffect, useState } from 'react'
const DealsPage = () => {

    let c = 0
    const [deals, setDeals] = useState([])

    const [showDeals, setShowDeals] = useState([])

    const getDeals = async () => {
        let req = await fetch('http://localhost:3000/deals')
        let res = await req.json()
        // console.log("Response Data: ", res)
        setDeals(res)
    }

    useEffect(() => {
        getDeals()
    }, [])

    useEffect(() => {
        setShowDeals([...deals])
    }, [deals])

    const handleSort = (value) => {
        console.log(value)
        if (value) {
            let arr = [...showDeals].sort((a, b) => {
                return (a[value] < b[value] ? -1 : 1)
            })
            setShowDeals(arr)
        }
    }

    return (
        <div>
            {/* <div>
                <select onChange={handleSelect}>
                    <option>{'Select One'}</option>
                    <option value='Alphabetically'>{'Alphabetically'}</option>
                    <option value='By Stage'>{'By Stage'}</option>
                    <option value='By ID'>{'By ID'}</option>
                </select>
            </div> */}

            <div>
                <table className="page-holder">
                    <thead>
                        <tr>
                            <th onClick={() => handleSort('name')}>Deal Name</th>
                            <th onClick={() => handleSort('product')}>Product</th>
                            <th onClick={() => handleSort('value')}>Value</th>
                            <th onClick={() => handleSort('stage')}>Stage</th>
                            <th onClick={() => handleSort('company_id')}>Company Name</th>
                            <th onClick={() => handleSort('stage')}>Stage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showDeals.map((deal) => {
                            return (
                                <DealItem
                                    key={c++}
                                    name={deal.name}
                                    product={deal.product}
                                    value={deal.value}
                                    stage={deal.stage}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )   
}

export default DealsPage