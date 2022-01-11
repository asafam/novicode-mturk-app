import React from 'react';
import './Instructions.scss';


export default class Instructions extends React.Component {

    render() {
        const { onClickBack, onClickNext } = this.props;

        return (
            <div className="instructions help">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col">
                            <h1>Instructions</h1>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-6">
                            <div className="instruction">
                                <h3>Virtual assistance tasks</h3>
                                <p className="instruction body">We will present you with a series of virtual assistance tasks.
                                    You will be asked to rewrite these tasks to a single sentence.</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="vertical-center-container">
                                <div className="vertical-center">
                                    <ol className="intents">
                                        <li className="intent">Will it snow today</li>
                                        <li className="intent">Set a daily reminder at 6am to exercise</li>
                                        <li className="intent">cancel my alarm</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-6">
                            <div className="instruction">
                                <h3>Use conjunction words</h3>
                                <p className="instruction body">To connect the tasks together, it is required to use at least 1 of the following conjunction words.
                                    In addition, you may use the same word multiple times, or synonym and antonym words.</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="vertical-center-container">
                                <div className="vertical-center">
                                    <div className="words">
                                        <span className="word">if</span>, 
                                        <span className="word">unless</span>, 
                                        <span className="word">in the event</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-6">
                            <div className="instruction">
                                <h3>Rewrite the tasks to a single coherent sentence</h3>
                                <p>Please use <span className="purple">every listed task at least once</span>.</p>
                                <p>It will likely require you to <span className="purple">change the wording or even some details</span> (e.g., 
                                    location, time, names, etc) in the original tasks such that the newly rewritten tasks 
                                    will have <span className="purple">a shared theme</span>.</p>
                                <p>The new sentence is also required to be <span className="purple">punctuated</span> and <span className="purple">
                                    grammatically correct</span> (even if the original tasks showed poor grammar).</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="vertical-center-container">
                                <div className="vertical-center">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="text-center"><span className="intent-icon bi bi-keyboard" /></h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="intent-textarea">
                                                        If <span className="highlight">it snows today</span> then <span className="highlight">cancel my alarm</span>, or else
                                                        <span className="highlight">set a daily reminder at 6am to exercise</span>.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-6">
                            <div className="instruction">
                                <h3>A better example</h3>
                                <p className="instruction body">Not only this example uses all the tasks. Some tasks are used more than once and the details
                                    of the extra task were changed such that the newly rewritten sentence makes more sense (exercising if it is sunny).
                                </p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="vertical-center-container">
                                <div className="vertical-center">
                                    <div className="card good-example">
                                        <div className="card-header">
                                            <h3 className="text-center"><span className="intent-icon bi bi-emoji-sunglasses" /></h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="intent-textarea">
                                                        If <span className="highlight">it snows today</span> then <span className="highlight">cancel my alarm</span>,
                                                        and if <span className="highlight">it is sunny tomorrow</span>, <span className="highlight">set a daily reminder at 6 am to exercise</span>.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-6">
                            <div className="instruction">
                                <h3>A bad example</h3>
                                <p>This example demonstrates what can go wrong:</p>
                                <ul>
                                    <li>It does not use all of the above tasks</li>
                                    <li>None of the conjunction words are included</li>
                                    <li>Avoid greetings and politeness</li>
                                    <li>The newly rewritten sentence is not coherent, doesn't use panctuations, and just doesn't sound right.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="vertical-center-container">
                                <div className="vertical-center">
                                    <div className="card bad-example">
                                        <div className="card-header">
                                            <h3 className="text-center"><span className="intent-icon bi bi-emoji-frown" /></h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="intent-textarea">
                                                        Hello, How are you? <span className="highlight">When does the rally start?</span><span className="highlight">set a daily reminder at 6am to exercise</span>
                                                        Thank you.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-6">
                            <div className="instruction">
                                <h3>Adapt details if needed</h3>
                                <p className="instruction body">In some cases the given virtual assistance tasks will not make sense
                                    to be conjoint together. In these cases we encourage you to change the details of one or more of the tasks such that
                                    the new sentence will look and sound right. Do this while preserving the general notion of the original task
                                    (e.g., send a message).
                                </p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="vertical-center-container">
                                <div className="example">
                                    <ol className="intents">
                                        <li className="intent">Tell me how long until I get to Tennessee</li>
                                        <li className="intent">text austin no</li>
                                    </ol>
                                    <div className="card neutral-example">
                                        <div className="card-header">
                                            <h3 className="text-center"><span className="intent-icon bi bi-emoji-wink" /></h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <p className="intent-textarea">
                                                        If <span className="highlight">it will take more than an hour until I get to Tennessee</span> then <span className="highlight">text Austin that I will be late</span>.
                                                    </p>
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
                                    <button type="button" className="btn btn-primary btn-lg px-4" onClick={onClickNext}><i className="bi bi-chevron-right" /></button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}