import React from 'react';


export default class Instructions extends React.Component {

    render() {
        const { onClickBack, onClickNext } = this.props;

        return (
            <div className="selections help">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="instruction">
                                <h3>Highlight the task</h3>
                                <p className="instruction body">You are requested to highlight using your mouse the part in your
                                    sentence that corresponds with the displayed task. It is likely that you've change the wording or
                                    details of the original task - choose the rewritten task in your sentence that stems from that task.</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="vertical-center-container">
                                <div className="vertical-center">
                                    <ol className="intents">
                                        <li className="intent text-red">Will it snow today</li>
                                        <li className="intent text-blue">Set a daily reminder at 6am to exercise</li>
                                        <li className="intent text-green">cancel my alarm</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-6">
                            <div className="help-instructions">
                                <h5>House rules:</h5>
                                <ul>
                                    <li>Selections are not allowed to overlap one another (don't worry we will show you your previous selections)</li>
                                    <li>If you need to adjust your current selection then just try it again</li>
                                    <li>Don't inclulde conjunction words or panctuation marks in your selection</li>
                                    <li>That's the final step, so shout out to you for completing the task</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="vertical-center-container">
                                <div className="vertical-center">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="text-center"><span className="intent-icon bi bi-mouse2" /></h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="intent-textarea">
                                                        If <span className="highlight text-red">it snows today<span className="index">(1)</span></span> then <span className="highlight text-green">cancel my alarm<span className="index">(3)</span></span>, otherwise
                                                        <span className="highlight text-blue">set a daily reminder at 6am to exercise<span className="index">(2)</span></span>.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {onClickBack && onClickNext &&
                        <div className="row mb-3">
                            <div className="col">
                                <div className="mt-4 d-grid gap-2 d-sm-flex justify-content-sm-center">
                                    <button type="button" className="btn btn-outline-secondary btn-lg px-4 gap-3" onClick={onClickBack}><i className="bi bi-chevron-left" /></button>
                                    <button type="button" className="btn btn-primary btn-lg px-4" onClick={onClickNext}><i className="bi bi-check-lg" /></button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}