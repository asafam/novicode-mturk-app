import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const RephraseUtterances = ({ rephraseUtterances, mode }) => {
    return (
        <div className="row base-utterances">
            <p>
                Use <span className="bold">any</span> of the following{' '}
                {mode === 'rewrite-simple-complex' && (
                    <span>Simple commands</span>
                )}{' '}
                as a starting point to create the Complex command:
            </p>
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
