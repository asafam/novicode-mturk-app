import React from 'react';
import Typical from 'react-typical';
import './Home.scss';


const Home = (props) => {
    const { onClickExample, onClickSkip } = props;
    return (
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="vertical-center-container">
                            <div className="vertical-center jumbotron">
                                <h1>Rewrite to a single sentence</h1>
                                <p>Your goal in this task is to rewrite a series of distinct virtual assistance tasks in a single sentence</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col">
                            <div className="text-center example-text"><i className="bi bi-robot"></i>Virtual assistance tasks</div>
                                <div className="intents">
                                    <li className="intent">
                                        <span className="intent-icon bi bi-bookmark" />
                                        <span>Create a reminder to bring a hat</span>
                                    </li>
                                    <li className="intent">
                                        <span className="intent-icon bi bi-cloud-sun" />
                                        <span>Will it rain tomorrow</span>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="text-center example-text">rewritten in a single sentence</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="text-center"><span className="intent-icon bi bi-stars" /></h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <div className="example vertical-center-container">
                                                    <div className="vertical-center">
                                                        <div className="intent-textarea text-center">
                                                            <Typical
                                                                steps={[
                                                                    'If it rains tomorrow then remind me to bring a coat', 5000
                                                                ]}
                                                                loop={Infinity}
                                                                wrapper="p"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <div className="mt-4 d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-primary btn-lg px-4" onClick={onClickSkip}>
                                Start
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;