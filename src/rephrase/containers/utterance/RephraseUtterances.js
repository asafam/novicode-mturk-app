import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const getInstruction = (mode, numOfRephrasedUtterances = 1) => {
    switch (mode) {
        case 'rewrite-complex-different-apps':
            return (
                <p>
                    {numOfRephrasedUtterances > 1 ? (
                        <span>
                            Select <span className="bold">any</span> of the
                            following <span>Complex commands</span>
                        </span>
                    ) : (
                        <span>
                            Use the following <span>Complex command</span>
                        </span>
                    )}{' '}
                    as a starting point to be rewriten as the new Complex
                    command:
                </p>
            );
        case 'rewrite-simple-complex':
            return (
                <p>
                    {numOfRephrasedUtterances > 1 ? (
                        <span>
                            Select <span className="bold">any</span> of the
                            following <span>Simple commands</span>
                        </span>
                    ) : (
                        <span>
                            Use the following <span>Simple command</span>
                        </span>
                    )}{' '}
                    as a starting point to create the Complex command:
                </p>
            );
        default:
            return (
                <p>
                    {numOfRephrasedUtterances > 1 ? (
                        <span>
                            Select
                            <span className="bold">any</span> of the following{' '}
                            commands
                        </span>
                    ) : (
                        <span>Use the following command</span>
                    )}{' '}
                    as a starting point to create the rephrased Complex command:
                </p>
            );
    }
};

const RephraseUtterances = ({ rephraseUtterances, mode }) => {
    const instruction = getInstruction(mode, rephraseUtterances.length);
    return (
        <div className="row base-utterances">
            <div>{instruction}</div>
            <div className="rephrase-utterances instruction-examples">
                <Carousel variant="dark">
                    {rephraseUtterances.map((u, i) => (
                        <Carousel.Item
                            className="instruction-example positive-example"
                            key={i}
                        >
                            <div className="vertical-center-container">
                                <div className="vertical-center">
                                    <div className="example-title utterance-text text-center">
                                        {u}
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default RephraseUtterances;
