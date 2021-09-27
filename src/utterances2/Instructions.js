import React from 'react';

const Instructions = (props) => {
    const { onClickExample, onClickSkip } = props;
    return (
        <div className="instructions">
            <div className="card px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">Instructions</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                        Yoar goal is to write an utterance to your smart virtual assistance. <br />
                        It should be written in plain English. Try to be as specific as possible, original, and creative. Think about real-life scenarios where you could use this
                        virtual assistance in your favor. <br />
                        Please avoid greetings, politeness or any chat openers - you're instructing a virtual assistance so just get to the point.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={onClickExample}>See example</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={onClickSkip}>Skip</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructions;