import React from 'react';
import Help from './Help';

const Instructions = ({ instructions, progress, hideHelp, hideHeader }) => {
    return (
        <div className="instructions">
            <div className="container">

                <div className="mx-auto">
                    {!hideHeader &&
                        <h4>Instructions</h4>
                    }
                    <div>{instructions}</div>
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