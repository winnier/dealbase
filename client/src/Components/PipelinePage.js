import React, { useState } from "react";
import PipelineItem from "./PipelineItem";
import PipelineDropWrapper from "./PipelineDropWrapper";
import PipelineColumn from "./PipelineColumn";
import { data, statuses } from "../data";
import '../Styles/Pipeline.css';

const PipelinePage = () => {
    const [items, setItems] = useState(data);

    const onDrop = (item, monitor, status) => {
        const mapping = statuses.find(si => si.status === status);

        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, status, icon: mapping.icon });
            return [ ...newItems ];
        });
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
                        <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
                        <PipelineDropWrapper onDrop={onDrop} status={s.status}>
                            <PipelineColumn>
                                {items
                                    .filter(i => i.status === s.status)
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