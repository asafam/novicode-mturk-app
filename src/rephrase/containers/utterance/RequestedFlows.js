import React from 'react';

const RequestedFlows = ({ flows, onFlowClick }) => {
    return (
        <div className="row flows">
            <p>
                Your Complex command should express at least one of the
                following (click for help):
            </p>
            <div>
                {flows.map((flow, i) => (
                    <span
                        className="flow"
                        key={i}
                        data-id={flow}
                        onClick={onFlowClick}
                    >
                        {flow}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default RequestedFlows;
