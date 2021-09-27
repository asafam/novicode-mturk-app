import React from 'react';

export default class Utterance extends React.Component {
    constructor(props) {
        super(props);
        const { utterance, context, contexts } = props;
        this.state = {
            utterance,
            context: context || this.getRandomContext(contexts),
        };

        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
        this.handleSwitchContextClick = this.handleSwitchContextClick.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.utterance !== this.props.utterance) {
            const { utterance } = this.props;
            this.setState({ utterance });
        }
    }

    handleTextAreaChange(event) {
        const { utteranceLimit, disableTextOverflow, onUtteranceChange } = this.props;
        const { context } = this.state;
        const utterance = event.target.value;
        const newUtterance = !disableTextOverflow || utterance.length <= utteranceLimit ? utterance : (this.state.utterance || "");
        this.setState({ utterance: newUtterance });
        onUtteranceChange && onUtteranceChange(utterance, context);
    }

    handleSwitchContextClick() {
        const { contexts } = this.props;
        const context = this.getRandomContext(contexts);
        this.setState({ context });
    }

    getRandomContext(contexts) {
        const context = contexts[Math.floor(Math.random() * contexts.length)];
        const { onContextChange } = this.props;
        onContextChange && onContextChange(context);
        return context;
    }

    isUtteranceValid() {
        const { intents, words } = this.props;
        const { utterance } = this.state;
        const wordsIncluded = (words && words.length > 0 && words.filter(w => utterance.toLowerCase().indexOf(w.split('(')[0].trim().toLowerCase()) !== -1)) || [];

        if (!utterance || utterance.split(" ").length <= 2) {
            // the utterance is too short
            this.setState({ valid: false, errorMessage: <span>Please be more creative.</span> })
            return false;
        } else if (intents.some(intent => utterance.toLowerCase().indexOf(intent.toLowerCase()) >= 0)) {
            // any of the intents appears as is in the utterance
            this.setState({ valid: false, errorMessage: <span>Please write a valid request in plain English.</span> })
            return false;
        } else if (wordsIncluded.length === 0) {
            // none of the mandaroty words are included
            this.setState({ valid: false, errorMessage: <span>Please use at least 1 of the following word: <strong>{words.join(", ")}</strong>.</span> })
            return false;
        } else if ((utterance.indexOf("?") >= 0 && utterance.indexOf("?") < utterance.length * 0.5) || utterance.trim().split("?").filter(s => s.length > 0).length > 1) {
            // the utterance has been phrased as multiple utterances
            this.setState({ valid: false, errorMessage: <span>Please try to phrase the utterance as a <strong>single</strong> request (and not in multiple phrases).</span> })
            return false;
        } else {
            this.setState({ valid: true });
            return true;
        }
    }

    handleClickNext(event) {
        event.preventDefault();

        if (this.isUtteranceValid()) {
            this.props.onClickNext();
        }
    }

    render() {
        const { utteranceLimit, minIntents, minConstraints, intents, constraintIntents, icons, constraintIcons, words, onClickBack, onClickHelp } = this.props;
        const { utterance, valid, errorMessage, context } = this.state;
        const description = "Write an utterance";

        return (
            <div className="utterance px-4 py-5 my-5">

                <div className="container">
                    <div className="row mb-3">
                        <div className="col">
                            <h5 className="text-center">Requirements</h5>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="bd-callout">
                                <p>
                                    <span className="">Write an utterance that uses {minIntents} or more of the following tasks your virtual assitance can do for you</span>
                                    <span className="text-muted"> (use as many as possible)</span>
                                    <span className="">:</span>
                                </p>
                                {intents.map((intent, i) => (
                                    <h5 key={i} className="intent" data-idx={i}>
                                        <span className={`intent-icon bi bi-${icons[i]}`} />
                                        <span>{intent}</span>
                                    </h5>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col">
                            <div className="bd-callout">
                                <p>
                                    <span className="">In your utterance, constraint the tasks you previously choosed (any or all) with {minConstraints} or more queries your virtual assitance can do for you</span>
                                    <span className="text-muted"> (use as many as possible)</span>
                                    <span className="">:</span>
                                </p>
                                {constraintIntents.map((intent, i) => (
                                    <h5 key={i} className="intent" data-idx={i}>
                                        <span className={`intent-icon bi bi-${constraintIcons[i]}`} />
                                        <span>{intent}</span>
                                    </h5>
                                ))}
                            </div>
                        </div>
                    </div>

                    {(words && words.length > 0) &&
                        <div className="row mb-3">
                            <div className="col">
                                <div className="bd-callout bd-callout-yellow2">
                                    <p>
                                        <span className="text-muted">Please use at least 1 of the following word{words.length > 1 ? "s" : ""} in your utterance:</span>
                                    </p>
                                    <div className="pl-1 pr-1">{words && words.map((word, i) =>
                                        (<span className="word" key={i}>{word}</span>)
                                    )}</div>
                                </div>
                            </div>
                        </div>
                    }

                    <div className="row mb-3">
                        <div className="col">
                            <div className="bd-callout context">
                                <p className="text-muted">To help your creativity, we suggest a context for your utterance (optional):</p>
                                <button className="btn btn-outline-default" onClick={this.handleSwitchContextClick}>Switch context</button>
                                <h5>{context}</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mt-4">
                    <div className="card-header text-center">
                        Write an utterance
                    </div>
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col">
                                <form className="g-3 needs-validation pt-4" onSubmit={this.handleSubmit} noValidate>
                                    <div className="has-validation mb-3">
                                        <label className="form-label" style={{ "display": "none" }}>{description}</label>
                                        <textarea className={`form-control ${(valid === true && "is-valid") || (valid === false && "is-invalid")}`}
                                            rows="5" value={utterance} type="text" id="utterance" aria-describedby="help"
                                            onChange={this.handleTextAreaChange} placeholder="Type your utterance here..." required>
                                        </textarea>
                                        <div className="p-1 m-1">
                                            <span className={(utterance || "").length >= utteranceLimit ? 'text-danger' : ''}>{(utterance || "").length}</span> / {utteranceLimit}
                                        </div>
                                        <div className="invalid-feedback">{errorMessage}</div>
                                        <div id="help" className="form-text text-muted">Don't forget to use <strong>the tasks, constraints, and mandatory words</strong> in your utterance</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >

                <div className="mt-4 d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4 gap-3" onClick={onClickBack}><i className="bi bi-chevron-left" /></button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4 gap-3" onClick={onClickHelp}><i className="bi bi-question-lg" /></button>
                    <button type="button" className="btn btn-primary btn-lg px-4" onClick={this.handleClickNext}><i className="bi bi-check-lg" /></button>
                </div>
            </div >
        );
    }
}