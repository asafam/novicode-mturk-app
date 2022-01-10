import React from 'react';
import AppModal from '../Modal';
import Instructions from '../instructions/Instructions';
import './Utterance.scss';


export default class Utterance extends React.Component {
    constructor(props) {
        super(props);
        const { utterance, context, contexts } = props;
        this.state = {
            utterance,
            context: context || this.getRandomContext(contexts),
        };

        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickHelp = this.handleClickHelp.bind(this);
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
        const words2 = words.reduce((prevVal, w) => (prevVal.concat(w['verification'] || [w['display']])), [])
        const wordsIncluded = (utterance && words2 && words2.length > 0 && words2.filter(w => utterance.toLowerCase().indexOf(w.trim().toLowerCase()) !== -1)) || [];

        if (!utterance || utterance.split(" ").length <= 2) {
            // the utterance is too short
            this.setState({ valid: false, errorMessage: <span>Please be more creative.</span> })
            return false;
        } else if (wordsIncluded.length === 0) {
            // none of the mandaroty words are included
            this.setState({ valid: false, errorMessage: <span>Please use at least 1 of the following word: <strong>{words.map(w => w['display']).join(", ")}</strong>.</span> })
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

    handleClickHelp(event) {
        this.setState({ showHelp: true, });
    }

    render() {
        const { utteranceLimit, minWords, minIntents, minConstraints, intents, constraintIntents, icons, constraintIcons, words, onClickBack, onClickHelp } = this.props;
        const { utterance, valid, errorMessage, showHelp } = this.state;
        const description = "Write an utterance";

        if (showHelp) {
            return (
                <AppModal show={showHelp} onHide={() => this.setState({ showHelp: false })}>
                    <Instructions />
                </AppModal>
            );
        }

        return (
            <div className="utterance px-4 py-5 my-5">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col">
                            <h1 className="instruction header">Rewrite tasks in a single sentence</h1>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="bd-callout intents-container">
                                <p>
                                    <span className="instruction body">Rewrite all the following tasks in a single sentence. You can change the original wording and details of the tasks
                                        to express a clear and coherent writing that makes sense.</span>
                                </p>
                                <ol className="intents">
                                    {intents.map((intent, i) => (
                                        <li key={i} className="intent" data-idx={i}>
                                            <span className={`intent-icon bi bi-${icons[i]}`} />
                                            <span>{intent}</span>
                                        </li>
                                    ))}
                                </ol>
                                <div className="info text-center">
                                    <div>You are required to use each of the tasks at least once in your rewritten sentence.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {(words && words.length > 0) &&
                        <div className="row mb-3">
                            <div className="col">
                                <div className="bd-callout bd-callout-yellow2">
                                    <p>
                                        <span className="instruction body">In your rewritten sentence, connect the above tasks
                                            using <span className="purple">{minWords || 1} or more</span> of the following conjunction
                                            words:</span>
                                    </p>
                                    <div className="words pl-1 pr-1">
                                        {words && words.map((word, i) =>
                                            (<span className="word" key={i}>{word['display']}</span>)
                                        )}
                                    </div>
                                    <div className="info text-center">
                                        <div>You may use the same word multiple times, or synonym and antonym words.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="row mt-3 mb-3">
                        <div className="col">
                            <div className="card mt-4">
                                <div className="card-header">
                                    <h3 className="text-center"><span className="intent-icon bi bi-keyboard" />Rewrite here</h3>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <form className="g-3 needs-validation pt-1" onSubmit={this.handleSubmit} noValidate>
                                                <div className="has-validation">
                                                    <label className="form-label" style={{ "display": "none" }}>{description}</label>
                                                    <textarea className={`intent-textarea form-control mb-3 ${(valid === true && "is-valid") || (valid === false && "is-invalid")}`}
                                                        rows="5" value={utterance} type="text" id="utterance" aria-describedby="help"
                                                        onChange={this.handleTextAreaChange} placeholder="Type your new sentence here..." required>
                                                    </textarea>
                                                    <div className="p-1 m-1">
                                                        <span className={(utterance || "").length >= utteranceLimit ? 'text-danger' : ''}>{(utterance || "").length}</span> / {utteranceLimit}
                                                    </div>
                                                    <div className="invalid-feedback">{errorMessage}</div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div >

                            <div className="info text-center">
                                <div>Remember: great sentences share some details between the rewritten tasks (e.g., time, place).</div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col">
                            <div className="actions bottom mt-4 d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4 gap-3" onClick={onClickBack}><i className="bi bi-chevron-left" /></button>
                                <button type="button" className="btn btn-primary btn-lg px-4" onClick={this.handleClickNext}><i className="bi bi-chevron-right" /></button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="actions float">
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4 gap-3" onClick={this.handleClickHelp}><i className="bi bi-life-preserver" />Help</button>
                </div>
            </div >
        );
    }
}