import React from 'react';


export default class Instructions extends React.Component {

    render() {
        const { onClickBack, onClickNext } = this.props;

        return (
            <div className="verification help">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="instruction">
                                <h3>Highlight the task</h3>
                                <p className="instruction body">You were instructed to use each task at least once but also given the freedome to use
                                every task more than once. Please help us know exactly how many times you used each task in your new sentence.
                                We present a counter next to each task - use it to indicate the number of times each task was used.</p>
                                <p>In this example, we use the virtual assistance task for <span className="text-red">querying the weather</span> twice, and every other task is used once.</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="vertical-center-container">
                                <div className="vertical-center">
                                    <div className="intents">
                                        <div className="intent"><span className="text-red"><span className="intent-icon bi bi-cloud-sun"/>Will it snow today</span><span className="counter bi bi-x">2</span></div>
                                        <div className="intent"><span className="text-blue"><span className="intent-icon bi bi-bookmark"/>Set a daily reminder at 6am to exercise</span><span className="counter bi bi-x">1</span></div>
                                        <div className="intent"><span className="text-green"><span className="intent-icon bi bi-alarm"/>cancel my alarm</span><span className="counter bi bi-x">1</span></div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="text-center"><span className="intent-icon bi bi-toggles" /></h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="intent-textarea">
                                                        If <span className="highlight text-red">it snows today</span> then <span className="highlight text-green">cancel my alarm</span>, otherwise
                                                        if <span className="highlight text-red">it is sunny</span> <span className="highlight text-blue">set a daily reminder at 6am to exercise<span className="index">(2)</span></span>.
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