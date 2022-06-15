import React from 'react';

class Selections extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feedback: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClickBack = this.handleClickBack.bind(this);
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    }

    handleTextAreaChange(event) {
        const { onFeedbackChange } = this.props;
        const feedback = event.target.value;
        this.setState({ feedback });
        onFeedbackChange && onFeedbackChange(feedback);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { feedback } = this.state;
        this.props.onSubmit(feedback);
    }

    handleClickBack(event) {
        event.preventDefault();
        this.props.onClickBack();
    }

    render() {
        const { feedback } = this.state;

        return (
            <div className="thank-you">
                <div className="row">
                    <div className="col">
                        <h2 className="text-muted text-center mb-3">Thank You.</h2>
                    </div>
                </div>

                <div className="row mt-3 mb-3">
                    <div className="offset-md-3 col-md-6 col-sm">
                        <div className="card mt-4">
                            <div className="card-header">
                                <h4 className="text-center"><span className="intent-icon bi bi-megaphone" />Have any feedback?</h4>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <form className="g-3 needs-validation pt-1" onSubmit={this.handleSubmit} noValidate>
                                            <div className="has-validation">
                                                <textarea className="feedback-textarea form-control mb-3"
                                                    rows="3" value={feedback} type="text" id="feedback-text" aria-describedby="help"
                                                    onChange={this.handleTextAreaChange} placeholder="Enter your feedback here..." required>
                                                </textarea>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="mt-4 d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4 gap-3" onClick={this.handleClickBack}><i className="bi bi-chevron-left" /></button>
                            <button type="button" className="btn btn-primary btn-lg px-4" onClick={this.handleSubmit}>Finish</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Selections;