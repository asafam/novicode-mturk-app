import React from 'react';

class PhraseVerification extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIntentIndexes: props.selectedIntentIndexes || []
        };

        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleToggleCheckbox = this.handleToggleCheckbox.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handleToggleCheckbox(event) {
        // event.preventDefault();

        const { selectedIntentIndexes } = this.state;
        let selectedIntentIndexesNew = selectedIntentIndexes.slice(); // copy array
        const toggledValueIndex = parseInt(event.currentTarget.getAttribute("data-index"));
        const valueIndex = selectedIntentIndexesNew.find(i => i === toggledValueIndex)
        if (isNaN(valueIndex)) {
            selectedIntentIndexesNew.push(toggledValueIndex);
        } else {
            selectedIntentIndexesNew = selectedIntentIndexesNew.filter(i => i !== valueIndex);
        }
        this.setState({ selectedIntentIndexes: selectedIntentIndexesNew });
    }

    handleChangeValue(event) {
        const { name, id } = event.target;
        const value = id.endsWith("pos");
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault();

        const { selectedIntentIndexes } = this.state;
        this.props.onSubmit(selectedIntentIndexes);
    }

    handleBack(event) {
        event.preventDefault();
        this.props.onBack();
    }

    isDisabled() {
        const { minIntents } = this.props;
        const { selectedIntentIndexes } = this.state;
        const disabled = selectedIntentIndexes.length < minIntents;
        return disabled;
    }

    render() {
        const { intents, icons, linkWords, strategy, minIntents } = this.props;
        const { selectedIntentIndexes, tasksVerification, linkWordVerification } = this.state;
        const disabled = this.isDisabled();

        return (
            <div className="phrase-verification">
                <div className="container">
                    {strategy !== 'batch' &&
                        <div>
                            <h5 className="mb-3">Did you use all the listed tasks in your request?</h5>
                            <div className="bd-callout bd-callout-yellow2">
                                {intents.map((intent, i) => (
                                    <p key={i}><span className={`bi bi-${icons[i]}`} style={{ "paddingRight": "15px" }} />{intent}</p>
                                ))}
                            </div>
                            <div className="text-center" onChange={this.handleChangeValue}>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="tasksVerification" id="tvpos" value={tasksVerification} />
                                    <label className="form-check-label">Yes</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="tasksVerification" id="tvneg" value={!tasksVerification} />
                                    <label className="form-check-label">No</label>
                                </div>
                            </div>
                        </div>
                    }
                    {strategy === 'batch' &&
                        <div>
                            <h5 className="mb-3">Which tasks did you use in your request (you were requested to pick at least {minIntents})?</h5>
                            <div className="bd-callout bd-callout-yellow2">
                                {intents.map((intent, i) => (
                                    <div key={i}>
                                        <div className={`form-check pt-1 pb-1 mt-1 mb-1 ${selectedIntentIndexes.indexOf(i) !== -1 ? "bg-light" : ""}`} style={{"paddingLeft": "2.0rem"}} data-index={i} onClick={this.handleToggleCheckbox}>
                                            <input className="form-check-input" type="checkbox" checked={selectedIntentIndexes.indexOf(i) !== -1} id={`intent${i}`} data-index={i} onChange={this.handleToggleCheckbox}/>
                                            <label className="form-check-label" htmlFor="flexCheckDefault"><h6><span className={`bi bi-${icons[i]}`} style={{ "paddingRight": "15px" }} />{intent}</h6></label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                    {false && linkWords && linkWords.length > 0 &&
                        <div className="mt-5">
                            <h5 className="mb-3">Did you link the tasks in your request using the word <span className="pl-1 pr-1" style={{ "fontSize": "2.2rem" }}>{linkWords.join(", ")}</span>?</h5>
                            <div className="text-center" onChange={this.handleChangeValue}>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="linkWordVerification" id="lwvpos" value={linkWordVerification} />
                                    <label className="form-check-label">Yes</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="linkWordVerification" id="lwvneg" value={!linkWordVerification} />
                                    <label className="form-check-label">No</label>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="btn-toolbar mt-5 mb-3" role="toolbar">
                        <div className="btn-group mr-2" role="group">
                            <button type="Back" className="btn btn-secondary" onClick={this.handleBack}><i className="bi bi-arrow-left pr-1" />Back</button>
                        </div>
                        <div className="btn-group mr-2" role="group">
                            <button type="submit" className="btn btn-primary pl-4 pr-4" onClick={this.handleSubmit} disabled={disabled}>Submit</button>
                        </div>
                    </div>

                </div>
            </div >
        );
    }
}

export default PhraseVerification;