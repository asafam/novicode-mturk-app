import React from 'react';

class PhraseVerification extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handleChangeValue(event) {
        const { name, id } = event.target;
        const value = id.endsWith("pos");
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit();
    }

    handleBack(event) {
        event.preventDefault();
        this.props.onBack();
    }

    render() {
        const { intents, icons, linkWord } = this.props;
        const { tasksVerification, linkWordVerification } = this.state;
        const disabled = !tasksVerification || !linkWordVerification;

        return (
            <div className="phrase-verification">
                <div className="container">
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
                    {linkWord && linkWord.length > 0 &&
                        <div className="mt-5">
                            <h5 className="mb-3">Did you link the tasks in your request using the word <span className="pl-1 pr-1" style={{ "fontSize": "2.2rem" }}>{linkWord}</span>?</h5>
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