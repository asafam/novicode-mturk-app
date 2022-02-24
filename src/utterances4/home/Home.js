import React from 'react';
import Typical from 'react-typical';
import './Home.scss';


const Home = (props) => {
    const { onClickSkip } = props;
    return (
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="header text-center">
                            <h1>Virtual Assistant++</h1>
                            <h3><span className="bi bi-mic" /></h3>
                            <p>Your goal in this task is to write <span className="purple">Complex Instructions</span> to the perfect virtual assistant (better than 
                                Google assistant, Alexa or Siri)</p>
                        </div>
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
                                                            "Unless there is traffic on my route home, text Mom I'll be there in 10 minutes", 5000
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

                <div className="row mb-5">
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