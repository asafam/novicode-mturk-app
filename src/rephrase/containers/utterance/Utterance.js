import React from 'react';
import AppModal from '../Modal';
import Device from '../../components/device/Device';
import Help from '../../components/help/Help';
import HelpFlows from '../../components/help/HelpFlows';
import { getApps } from '../../data/apps.js';
import { getTaskTitle, getTaskDescription } from '../../data/tasks';
import RephraseUtterances from './RephraseUtterances';
import RequestedFlows from './RequestedFlows';
import ExcludedApps from './ExcludedApps';
import ExcludedTerms from './ExcludedTerms';
import UtteranceInput from './UtteranceInput';
import './Utterance.scss';

export default class Utterance extends React.Component {
    constructor(props) {
        super(props);
        const { utterance, context, excludedApps } = props;
        this.state = {
            utterance,
            context: context,
            apps: getApps(true, excludedApps)
        };

        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickHelp = this.handleClickHelp.bind(this);
        this.handleClickHelpFlows = this.handleClickHelpFlows.bind(this);
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.utterance !== this.props.utterance) {
            let { utterance } = this.props;
            utterance = utterance || '';
            this.setState({ utterance });
        }
    }

    handleTextAreaChange(event) {
        const {
            index,
            utteranceLimit,
            disableTextOverflow,
            onUtteranceChange
        } = this.props;
        const { context } = this.state;
        const utterance = event.target.value;
        const newUtterance =
            !disableTextOverflow || utterance.length <= utteranceLimit
                ? utterance
                : this.state.utterance || '';
        this.setState({ utterance: newUtterance });
        onUtteranceChange && onUtteranceChange(index, utterance, context);
    }

    isUtteranceValid() {
        const {
            conjunctionWords,
            utteranceLimit,
            excludedTerms,
            rephraseUtterances
        } = this.props;
        const { utterance } = this.state;
        const illegalTerms = ['Simple:', 'Complex:'];
        const conjunctionWords2 = conjunctionWords.reduce(
            (prevVal, w) => prevVal.concat(w['verification'] || [w['display']]),
            []
        );
        const hasUtterance = Boolean(utterance && utterance.trim().length > 0);
        const usedExamples = Boolean(
            rephraseUtterances &&
                rephraseUtterances.filter(
                    (u) => u.toLowerCase() === utterance.trim().toLowerCase()
                ).length > 0
        );
        const hasConjunctionWords = Boolean(
            conjunctionWords2 && conjunctionWords2.length > 0
        );
        const conjunctionWordsIncluded =
            hasUtterance &&
            hasConjunctionWords &&
            conjunctionWords2.filter((word) =>
                new RegExp('\\b' + word + '\\b', 'i').test(utterance)
            ).length > 0;
        const excludedTermsFound =
            excludedTerms &&
            excludedTerms.length > 0 &&
            excludedTerms.filter((term) =>
                new RegExp('\\b' + term + '\\b', 'i').test(utterance)
            );
        const illegalTermsFound =
            illegalTerms &&
            illegalTerms.length > 0 &&
            illegalTerms.filter((term) =>
                new RegExp('\\b' + term + '\\b', 'i').test(utterance)
            );

        if (!hasUtterance || utterance.split(' ').length <= 2) {
            // the utterance is too short
            this.setState({
                valid: false,
                errorMessage: <span>Please be more creative.</span>
            });
            return false;
        } else if (usedExamples) {
            // the utterance was copied from the examples
            this.setState({
                valid: false,
                errorMessage: (
                    <span>
                        Please read the instructions again. You just copied one
                        of the examples.
                    </span>
                )
            });
            return false;
        } else if (hasConjunctionWords && !conjunctionWordsIncluded) {
            // none of the mandaroty conjunctionWords are included
            this.setState({
                valid: false,
                errorMessage: (
                    <span>
                        Please use at least 1 of the following word:{' '}
                        <strong>
                            {conjunctionWords
                                .map((w) => w['display'])
                                .join(', ')}
                        </strong>
                        .
                    </span>
                )
            });
            return false;
        } else if (
            (utterance.indexOf('?') >= 0 &&
                utterance.indexOf('?') < utterance.length * 0.5) ||
            utterance
                .trim()
                .split('?')
                .filter((s) => s.length > 0).length > 1
        ) {
            // the utterance has been phrased as multiple utterances
            this.setState({
                valid: false,
                errorMessage: (
                    <span>
                        Please try to phrase the text as a{' '}
                        <strong>single</strong> request (and not in multiple
                        phrases).
                    </span>
                )
            });
            return false;
        } else if (utterance.length > utteranceLimit) {
            // the utterance is too long
            this.setState({
                valid: false,
                errorMessage: <span>Your text is too long!</span>
            });
            return false;
        } else if (
            excludedTerms &&
            excludedTerms.length > 0 &&
            excludedTermsFound &&
            excludedTermsFound.length > 0
        ) {
            // the utternace include excluded terms
            this.setState({
                valid: false,
                errorMessage: (
                    <span>
                        Your text contains a term that should not be used:{' '}
                        {excludedTermsFound.join(', ')}
                    </span>
                )
            });
        } else if (
            illegalTerms &&
            illegalTerms.length > 0 &&
            illegalTermsFound &&
            illegalTermsFound.length > 0
        ) {
            // the utternace include illegal terms (like part of a condition or an example)
            this.setState({
                valid: false,
                errorMessage: (
                    <span>
                        You don't need to include the following term in your
                        text: {illegalTerms.join(', ')}
                    </span>
                )
            });
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
        this.setState({ showHelp: true });
    }

    handleClickHelpFlows(event) {
        event.preventDefault();
        const selectedFlow = event.target.getAttribute('data-id');
        this.setState({ showHelpFlows: true, selectedFlow });
    }

    render() {
        const {
            rephraseUtterances,
            utteranceLimit,
            excludedTerms,
            excludedApps,
            flows,
            showAppHelp,
            mode,
            onClickBack
        } = this.props;
        const {
            utterance,
            valid,
            errorMessage,
            showHelp,
            showHelpFlows,
            selectedFlow,
            apps
        } = this.state;
        const taskTitle = getTaskTitle(mode);
        const taskDescription = getTaskDescription(mode);

        if (showHelp) {
            return (
                <AppModal
                    show={showHelp}
                    onHide={() => this.setState({ showHelp: false })}
                >
                    <Help mode={mode} />
                </AppModal>
            );
        }

        if (showHelpFlows) {
            return (
                <AppModal
                    show={showHelpFlows}
                    onHide={() => this.setState({ showHelpFlows: false })}
                >
                    <HelpFlows flow={selectedFlow} />
                </AppModal>
            );
        }

        return (
            <div className="utterance page px-4 py-5 my-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="header text-center">
                                <h1 className="text-center">
                                    <span className="title-small">
                                        Your task:
                                    </span>
                                    {taskTitle}
                                </h1>
                                <div>{taskDescription}</div>
                            </div>
                        </div>
                    </div>

                    <div className="row body mt-3 mb-3">
                        <div className="col">
                            <Device showAppHelp={showAppHelp} apps={apps} />
                        </div>
                        <div className="col align-self-center">
                            {rephraseUtterances &&
                                rephraseUtterances.length > 0 && (
                                    <RephraseUtterances
                                        rephraseUtterances={rephraseUtterances}
                                        mode={mode}
                                    />
                                )}
                            {flows && flows.length > 0 && (
                                <RequestedFlows
                                    flows={flows}
                                    onFlowClick={this.handleClickHelpFlows}
                                />
                            )}

                            {excludedTerms && excludedTerms.length > 0 && (
                                <ExcludedTerms excludedTerms={excludedTerms} />
                            )}

                            {excludedApps && excludedApps.length > 0 && (
                                <ExcludedApps
                                    apps={getApps().filter(
                                        (app) =>
                                            excludedApps.indexOf(app['id']) !==
                                            -1
                                    )}
                                />
                            )}

                            <UtteranceInput
                                utterance={utterance}
                                valid={valid}
                                errorMessage={errorMessage}
                                utteranceLimit={utteranceLimit}
                                onInputChange={this.handleTextAreaChange}
                                onInputSubmit={this.handleSubmit}
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col">
                            <div className="actions bottom mt-4 d-grid gap-2 d-sm-flex justify-content-sm-center">
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
                                    onClick={this.handleClickNext}
                                >
                                    <i className="bi bi-chevron-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="actions float">
                    <button
                        type="button"
                        className="btn btn-outline-secondary btn-lg px-4 gap-3"
                        onClick={this.handleClickHelp}
                    >
                        <i className="bi bi-life-preserver" />
                        Help
                    </button>
                </div>
            </div>
        );
    }
}
