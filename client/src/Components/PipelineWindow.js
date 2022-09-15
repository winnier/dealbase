import React from "react";
import Modal from "react-modal";

// Modal.setAppElement("#app");

const PipelineWindow = ({ show, onClose, item }) => {
    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={"modal"}
            overlayClassName={"overlay"}
        >
            <div className={"close-btn-ctn"}>
                <h1 style={{ flex: "1 90%" }}>{item.name}</h1>
                <button className="close-btn" onClick={onClose}>X</button>
            </div>
            <div>
                <h2>Description</h2>
                <p>{item.product}</p>
                <h2>Status</h2>
                <p> {`${item.stage}`}</p>
            </div>
        </Modal>
    );
};

export default PipelineWindow;