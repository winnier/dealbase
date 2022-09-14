import React from "react";

const PipelineColumn = ({ isOver, children }) => {
    const className = isOver ? "highlight-region" : ""

    return (
        <div className={`cold${className}`}>
            {children}
        </div>
    )
}

export default PipelineColumn;