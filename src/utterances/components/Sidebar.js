import React from 'react';
import Help from './Help';



// const getHeader = () => {
    // const { status } = this.state;
    // if (status === STATUS.utteranceVerification) {
    //     return "Review your request";
    // } else {
    //     return null;
    // }
// };

const Instructions = ({ header, instructions, utterance, progress, hideHelp, hideHeader, hideUtterance }) => {
    return (
        <div className="instructions">
            <div className="container">

                <div className="mx-auto">
                    {!hideHeader &&
                        <h4>{header || "Instructions"}</h4>
                    }
                    <div>{instructions}</div>
                    {!hideUtterance && 
                        <p className="text-center text-muted rounded border-primary p-3 mb-5">{utterance}</p>
                    }
                    {!hideHelp &&
                        <Help />
                    }
                </div>
                <div className="progress mt-5 mb-5 ml-auto mr-auto" style={{ "width": "90%" }}>
                    <div className="progress-bar" role="progressbar" style={{ "width": `${progress}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">{parseInt(progress)}%</div>
                </div>

            </div>
        </div>
    );
};

export default Instructions;           