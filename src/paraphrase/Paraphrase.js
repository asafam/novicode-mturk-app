import React from 'react';
import './Paraphrase.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const { valid, errorMessage } = this.validate();
        if (!valid) {
            this.setState({ valid, errorMessage });
        } else {
            this.props.onSubmit();
        }
    }

    handleTextAreaChange(event) {
        const { maxLength, onParaphrase } = this.props;
        const { newText } = this.state;
        let value = event.target.value;
        value = value.length <= maxLength ? value : (newText || "");
        this.setState({ newText: value, errorMessage: null, valid: null });
        onParaphrase(value);
    }

    handleClear(event) {
        event.preventDefault();
        this.setState({ newText: "" });
    }

    validate() {
        const { text, blacklist, maxLength, minLength } = this.props;
        const { newText } = this.state;

        const equalValid = !!newText && text.toLowerCase().trim() !== newText.toLowerCase().trim();
        const maxLengthValid = !!newText && newText.length <= maxLength;
        const minLengthValid = !!newText && newText.length > minLength;
        const disallowedWords = !!newText && blacklist.filter(word => (newText.toLowerCase().includes(word.toLowerCase())));
        const disallowedWordValid = disallowedWords.length === 0;
        const valid = equalValid && maxLengthValid && minLengthValid && disallowedWordValid;
        let errorMessage = null;

        if (!minLengthValid) {
            errorMessage = `Please be more creative.`;
        } else if (!maxLengthValid) {
            errorMessage = `The new text exceeds the maximum allowed length of ${maxLength} characters.`;
        } else if (!equalValid) {
            errorMessage = `The new text should be different from the original sentence.`;
        } else if (!disallowedWordValid) {
            errorMessage = `The new text cannot include the words: ${disallowedWords.join(", ")}.`;
        }

        return { valid, errorMessage };
    }

    render() {
        const { text, blacklist, maxLength } = this.props;
        const { newText, valid, errorMessage } = this.state;

        return (
            <div className="paraphrase">
                <div className="row mt-3 mb-3">
                    <div className="col">
                        <h1 className="text-center">Rephrase a sentence</h1>
                    </div>
                </div>
                <div className="instructions row mb-3">
                    <div className="col-md-2 col-sm">
                        <h5>Your task</h5>
                    </div>
                    <div className="col-md-10 col-sm">
                        <p>You are asked to paraphrase the following original text <span className="bold">without</span> using the words: <span className="text text-red bold">{blacklist.join(", ")}</span>.
                            The new sentence should preserve the meanings of the original text.</p>
                    </div>
                </div>
                <div className="original-text row mb-3">
                    <div className="col-md-2 col-sm">
                        <h5>Original text</h5>
                    </div>
                    <div className="col-md-10 col-sm">
                        <div className="text">{text}</div>
                    </div>
                </div>
                <div className="paraphrase-text mb-3">
                    <div className="row">
                        <div className="col-md-2 col-sm">
                            <h5>Paraphrase here</h5>
                        </div>
                        <div className="col-sm col-md-8">
                            <div className="card mt-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <form className="g-3 needs-validation pt-1" onSubmit={this.handleSubmit} noValidate>
                                                <div className="has-validation">
                                                    <label className="form-label" style={{ "display": "none" }}>Rephrase the sentence</label>
                                                    <textarea className={`intent-textarea text form-control mb-3 ${(valid === true && "is-valid") || (valid === false && "is-invalid")}`}
                                                        rows="5" value={newText} type="text" id="text" aria-describedby="help"
                                                        onChange={this.handleTextAreaChange} placeholder="Type your new sentence here..." required>
                                                    </textarea>
                                                    <div className="p-1 m-1">
                                                        <span className={(newText || "").length >= maxLength ? 'text-danger' : ''}>{(newText || "").length}</span> / {maxLength}
                                                    </div>
                                                    <div className="invalid-feedback">{errorMessage}</div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <div className="actions bottom mt-4 d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4 gap-3" onClick={this.handleClear}><i className="bi bi-x-lg" />Clear</button>
                            <button type="button" className="btn btn-primary btn-lg px-4" onClick={this.handleSubmit}><i className="bi bi-check-lg" />Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}