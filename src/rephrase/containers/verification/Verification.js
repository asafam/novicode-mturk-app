import React from 'react';
import './Verification.scss';

export default class Complex extends React.Component {
    constructor(props) {
        super(props);
        const { selectedFlows } = props;
        this.state = {
            flows: ['Sequence', 'Condition', 'Multiplicity'],
            selectedFlows: selectedFlows || []
        };

        this.handleClickFlow = this.handleClickFlow.bind(this);
        this.handleClickNext = this.handleClickNext.bind(this);
    }

    handleClickFlow(e) {
        e.preventDefault();
        const { index, onClickFlow } = this.props;
        const { selectedFlows } = this.state;
        const selectedFlow = e.target.value;
        if (selectedFlows.includes(selectedFlow)) {
            const index = selectedFlows.indexOf(selectedFlow);
            selectedFlows.splice(index, 1);
        } else {
            selectedFlows.push(selectedFlow);
        }
        this.setState({ selectedFlows });
        onClickFlow(index, selectedFlows);
    }

    handleClickNext(e) {
        e.preventDefault();
        const { selectedFlows } = this.state;
        if (selectedFlows.length === 0) {
            this.setState({
                errorMessage:
                    'If your command does not include any sequence, condition, or multiplicity statements, please go back and revise your command.'
            });
            return;
        } else {
            this.props.onClickNext();
        }
    }

    render() {
        const { utterance, onClickNext, onClickBack } = this.props;
        const { flows, selectedFlows } = this.state;

        return (
            <div className="verification page">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col">
                            <div className="header text-center">
                                <h1 className="text-center">
                                    Verify Complex Command
                                </h1>
                                <div>
                                    <p>
                                        A Complex command should express
                                        Sequence, Condition, or Multiplicity.
                                        Verify that the Complex command you
                                        wrote is indeed expressing one or more
                                        of these.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row body mb-3">
                        <div className="col">
                            <div className="utterance">
                                <div className="utterance-text text-center">
                                    {utterance}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <p>
                                Select any of the following that is expressed in
                                the Complex command you wrote:
                            </p>
                            <div className="flows row">
                                {flows.map((flow, i) => (
                                    <div
                                        className="col-md-4 col-sm flow-btn-container"
                                        key={i}
                                    >
                                        <button
                                            className={`flow-btn btn btn-link ${
                                                selectedFlows.indexOf(flow) >= 0
                                                    ? 'selected'
                                                    : ''
                                            }`}
                                            value={flow}
                                            onClick={this.handleClickFlow}
                                        >
                                            {flow}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="actions bottom mt-4 mb-4 d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary btn-lg px-4 gap-3"
                                    onClick={onClickBack}
                                >
                                    <i className="bi bi-chevron-left" />
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg px-4"
                                    onClick={onClickNext}
                                >
                                    <i className="bi bi-chevron-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
