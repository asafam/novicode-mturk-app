import React from 'react';

const ExcludedTerms = ({ excludedTerms }) => {
    return (
        <div className="row excluded-terms">
            <p>
                <b>Do not</b> use any of the following words and terms in your
                command:
            </p>
            <div>
                {excludedTerms.map((excludedTerm, i) => (
                    <span className="excluded-term utterance-text" key={i}>
                        {excludedTerm}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ExcludedTerms;
