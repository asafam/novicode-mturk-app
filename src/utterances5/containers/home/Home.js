import React from 'react';
import './Home.scss';


export default class Home extends React.Component {
    render() {
        const { onClickSkip } = this.props;

        return (
            <div className="home">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="header text-center">
                                <h1>Virtual Assistant++</h1>
                                <h3><span className="bi bi-robot" /></h3>
                                <p>Your goal in this task is to write Complex
                                    Instructions to the perfect virtual assistant
                                    (better than Google assistant, Alexa or Siri)</p>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col">
                            <div className="mt-4 mb-4 d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <button type="button" className="btn btn-primary btn-lg px-4" onClick={onClickSkip}>
                                    Start
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}