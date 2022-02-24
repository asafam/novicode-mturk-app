import React from 'react';
import AppModal from '../Modal';
import Instructions from '../instructions/Instructions';
import './Utterance.scss';


export default class Utterance extends React.Component {
    constructor(props) {
        super(props);
        const { utterance, context, contexts, intents } = props;
        this.state = {
            utterance,
            context: context || this.getRandomContext(contexts),
            domains: intents
        };

        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickHelp = this.handleClickHelp.bind(this);
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
        this.handleSwitchContextClick = this.handleSwitchContextClick.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.utterance !== this.props.utterance) {
            let { utterance } = this.props;
            utterance = utterance || "";
            this.setState({ utterance });
        }
    }

    handleTextAreaChange(event) {
        const { index, utteranceLimit, disableTextOverflow, onUtteranceChange } = this.props;
        const { context } = this.state;
        const utterance = event.target.value;
        const newUtterance = !disableTextOverflow || utterance.length <= utteranceLimit ? utterance : (this.state.utterance || "");
        this.setState({ utterance: newUtterance });
        onUtteranceChange && onUtteranceChange(index, utterance, context);
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
        const { intents, conjunctionWords } = this.props;
        const { utterance } = this.state;
        const conjunctionWords2 = conjunctionWords.reduce((prevVal, w) => (prevVal.concat(w['verification'] || [w['display']])), [])
        const hasUtterance = Boolean(utterance && utterance.trim().length > 0)
        const hasConjunctionWords = Boolean(conjunctionWords2 && conjunctionWords2.length > 0)
        const conjunctionWordsIncluded = (hasUtterance && hasConjunctionWords && conjunctionWords2.filter(w => utterance.toLowerCase().indexOf(w.trim().toLowerCase()) !== -1).length > 0);

        if (!hasUtterance || utterance.split(" ").length <= 2) {
            // the utterance is too short
            this.setState({ valid: false, errorMessage: <span>Please be more creative.</span> })
            return false;
        } else if (hasConjunctionWords && !conjunctionWordsIncluded) {
            // none of the mandaroty conjunctionWords are included
            this.setState({ valid: false, errorMessage: <span>Please use at least 1 of the following word: <strong>{conjunctionWords.map(w => w['display']).join(", ")}</strong>.</span> })
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
        const { index, maxUtterances, utteranceLimit, onClickBack } = this.props;
        const { domains, utterance, valid, errorMessage, showHelp } = this.state;
        const titles = [
            "Write a complex utterance",
            "Write one more complex utterance",
            "Write another complex utterance",
            "Write one last complex utterance"
        ]
        const title = titles[Math.min(index, titles.length - 1)]

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
                            <h1 className="instruction-header">{title} <span className="text-purple">({index + 1} / {maxUtterances})</span></h1>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="bd-callout intents-container">
                                <p className="instruction-body">Imagine you have the following <span className="text-purple bold">apps</span> on your mobile device.</p>

                                <div className="domains">
                                    <div className="row">
                                        <div className="col">
                                            <table>
                                                <tbody>
                                                    {domains.slice(0, 6).map((domain, i) => (
                                                        <tr key={i} className="utterance-text" data-idx={i}>
                                                            <td>
                                                                <span className={`intent-icon bi bi-${domain['icon']}`} />
                                                                <span>{domain['name']}</span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="col">
                                            <table>
                                                <tbody>
                                                    {domains.slice(6).map((domain, i) => (
                                                        <tr key={i} className="utterance-text" data-idx={i}>
                                                            <td>
                                                                <span className={`intent-icon bi bi-${domain['icon']}`} />
                                                                <span>{domain['name']}</span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className="final-instructions">
                                    <p>Please write a <span className="text-purple bold">complex utterance</span> to the ideal virtual assistant,
                                        which uses queries and commands in the context of these apps.</p>
                                    <ol>
                                        <li>A complex utterance is likely to express queries and commands in <span className="text-purple">at least 2 of the apps</span> or in <span className="text-purple">the same app at least twice</span></li>
                                        <li>Please <span className="text-purple">avoid greeting and politeness</span> (For example, avoid saying <span className="utterance-text">Hello</span>).
                                            Just get straight to the point</li>
                                    </ol>
                                    <p className="comment">Click Help to see the intructions and examples</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3 mb-3">
                        <div className="col">
                            <div className="card mt-4">
                                <div className="card-header">
                                    <h3 className="text-center"><span className="intent-icon bi bi-keyboard" />Write here</h3>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <form className="g-3 needs-validation pt-1" onSubmit={this.handleSubmit} noValidate>
                                                <div className="has-validation">
                                                    <label className="form-label" style={{ "display": "none" }}>Write a complex utterance</label>
                                                    <textarea className={`intent-textarea utterance-text form-control mb-3 ${(valid === true && "is-valid") || (valid === false && "is-invalid")}`}
                                                        rows="5" value={utterance} type="text" id="utterance" aria-describedby="help"
                                                        onChange={this.handleTextAreaChange} placeholder="Type your complex utterance here..." required>
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