import React, { useState } from "react";
import PipelineItem from "./PipelineItem";
import PipelineDropWrapper from "./PipelineDropWrapper";
import PipelineColumn from "./PipelineColumn";
import { statuses } from "../data";
import '../Styles/Pipeline.css';
import { useEffect } from "react";

const PipelinePage = () => {
    const [items, setItems] = useState([])

    const fetchDeals = async () => {
        const response = await fetch(`http://localhost:3000/deals`)
        const dealsArray = await response.json()
        setItems(dealsArray)
    }
   
    useEffect(()=> {
        fetchDeals()
    }, [])

    const onDrop = (item, monitor, status) => {
        item.stage = status;
        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item });
            return [ ...newItems ];
        });

        let req = fetch(`http://localhost:3000/deals/${item.id}`, {
            method: "PATCH",
            body: JSON.stringify({
                stage: status
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
    };

    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return  [ ...newItems ];
        });
    };

    return (
        <div className={"row"}>
            {statuses.map(s => {
                return (
                    <div key={s.status} className={"col-wrapper"}>
                        <h2 className={"col-header"}>{s.status}</h2>
                        <PipelineDropWrapper onDrop={onDrop} status={s.status}>
                            <PipelineColumn>
                                {items
                                    .filter(i => i.stage === s.status)
                                    .map((i, idx) => <PipelineItem key={i.id} item={i} index={idx} moveItem={moveItem} status={s} />)
                                }
                            </PipelineColumn>
                        </PipelineDropWrapper>
                    </div>
                );
            })}
        </div>
    );
};

export default PipelinePage;