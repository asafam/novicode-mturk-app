import React from 'react';
import Instructions from './Instructions'
import Form from './Form';
import PhraseVerification from './PhraseVerification';
import Selections from './Selections';
import ThankYou from './ThankYou';

const STATUS = {
    utterancePhrasing: 0,
    utteranceVerification: 1,
    intentsSelection: 2,
    end: 3
};

export default class Utterances extends React.Component {
    constructor(props) {
        super(props);

        const { intents } = props;
        const intentsSelections = intents.map(intent => ([0, 0]));
        this.state = {
            status: STATUS.utterancePhrasing,
            utterances: new Array(intents.length),
            intentsSelections,
            intentIndex: 0,
            intentSelectionIndex: 0
        };

        this.handleSubmitUtterance = this.handleSubmitUtterance.bind(this);
        this.handleUtteranceVerification = this.handleUtteranceVerification.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleMTurkSubmit = this.handleMTurkSubmit.bind(this);
    }

    getInstructions() {
        const { intents, icons } = this.props;
        const { status, intentIndex, intentSelectionIndex } = this.state;

        if (status === STATUS.utterancePhrasing && intentIndex === 0) {
            return (
                <div>
                    <p className="lead fs-5 d">Write a request to your virtual assistance in plain English that will use the given tasks your assistance can do in the provided context.</p>
                    <p>Try to be as creative as you can, don't be overly formal, simply write in plain English what you would say if you were in the given situation. Click 'Help' to see few examples.</p>
                    <p className="bg-warning text-dark text-center p-2 mb-4"><em>The best utterances phrase the tasks in relation to one-another in a <u>single</u> request.</em></p>
                </div>
            );
        } else if (status === STATUS.utterancePhrasing && intentIndex > 0) {
            return (
                <div>
                    <p className="lead fs-5 d">Rephrase your previous request with another task in a single sentence.</p>
                    <p>Again, try to be as creative as you can, don't be overly formal. Click 'Help' to see few examples.</p>
                    <p className="bg-warning text-dark text-center p-2 mb-4"><em>The best utterances phrase the tasks in relation to one-another in a <u>single</u> request.</em></p>
                </div>
            );
        } else if (status === STATUS.utteranceVerification) {
            return (
                <div>
                    <p className="lead fs-5 d">Review your request and verify it was written correctly. </p>
                </div>
            );
        } else if (status === STATUS.intentsSelection) {
            return (
                <div>
                    <p className="lead fs-5 d">Highlight with your mouse the part in your request that references the following task:</p>
                    <h5 className="mt-3 mb-4"><span className={`bi bi-${icons[intentSelectionIndex]}`} style={{ "paddingRight": "15px" }} />{intents[intentSelectionIndex]}</h5>
                </div>
            );
        } else {
            return ['', '']
                ;
        }
    }

    getHeader() {
        const { status } = this.state;
        if (status === STATUS.utteranceVerification) {
            return "Review your request";
        } else {
            return null;
        }
    }

    handleMTurkSubmit() {
        const { utterance, utterances, intentsSelections } = this.state;

        const annotationsValue = intentsSelections.map(intentsSelections => intentsSelections.join(", ")).join(" | ");
        const utterancesValue = utterances.join(" | ");
        document.querySelector('crowd-form').onsubmit = () => {
            if (document.getElementById('utterance')) {
                document.getElementById('utterance').value = utterance;
                document.getElementById('annotations').value = annotationsValue;
                document.getElementById('utterances').value = utterancesValue;
            }
        };
        document.querySelector('crowd-form').submit();
    }

    handleUtteranceVerification() {
        const status = STATUS.intentsSelection;
        this.setState({ status });
    }

    handleSubmitUtterance(utterance) {
        const { intents } = this.props;
        let { intentIndex, status, utterances } = this.state;

        intentIndex = Math.min(intentIndex + 1, intents.length);
        if (status === STATUS.utterancePhrasing && intentIndex === intents.length) {
            status = STATUS.utteranceVerification;
            utterances[intentIndex] = utterance;
        }
        this.setState({ utterance, utterances, status, intentIndex })
    }

    handleBack() {
        let { status, intentIndex, intentSelectionIndex } = this.state;

        let newStatus = status;
        if ((status === STATUS.end) ||
            (status === STATUS.intentsSelection && intentSelectionIndex > 0)) {
            newStatus = STATUS.intentsSelection
            intentSelectionIndex = Math.max(intentSelectionIndex - 1, 0);
        } else if (status === STATUS.intentsSelection) {
            newStatus = STATUS.utteranceVerification;
        } else if ((status === STATUS.utteranceVerification) ||
            (status === STATUS.utterancePhrasing)) {
            newStatus = STATUS.utterancePhrasing;
            intentIndex = Math.max(intentIndex - 1, 0);
        }

        this.setState({ status: newStatus, intentIndex, intentSelectionIndex });
    }

    handleSelection(index, selectionStart, selectionEnd, Selectionsuccess) {
        let { intentsSelections, status } = this.state;
        intentsSelections[index] = [selectionStart, selectionEnd];

        // check if all intents have been verified
        const { intents } = this.props;
        const allIntentsSelected = intents.every((intent, i) => intentsSelections[i][0] >= 0 && intentsSelections[i][1] > intentsSelections[i][0]);
        if (Selectionsuccess && allIntentsSelected && index === (intents.length - 1)) {
            status = STATUS.end;
        }

        this.setState({ intentsSelections, status, intentSelectionIndex: Math.min(index + 1, intents.length) });
    }

    getProgress() {
        const { intents, linkWord } = this.props;
        const { status, intentIndex, intentSelectionIndex } = this.state;
        const stepsCount = intents.length * 2 + (linkWord ? 1 : 0);

        switch (status) {
            case STATUS.utterancePhrasing:
                return 100 * (intentIndex / stepsCount);
            case STATUS.utteranceVerification:
                return 100 * (intents.length / stepsCount);
            case STATUS.intentsSelection:
                return 100 * ((intents.length + 1 + intentSelectionIndex) / stepsCount);
            case STATUS.end:
                return 100;
            default:
                return 0;
        }
    }

    render() {
        const { context, intents, icons, linkWord, maxLength, maxLengthPerIntent } = this.props;
        const { status, utterance, intentIndex, intentsSelections, intentSelectionIndex } = this.state;
        const [selectionStart, selectionEnd] = intentSelectionIndex >= 0 && intentSelectionIndex < intents.length ? intentsSelections[intentSelectionIndex] : [0, 0];
        const progress = this.getProgress();
        const instructions = this.getInstructions();
        const header = this.getHeader();
        const utteranceLimit = maxLength || maxLengthPerIntent * intents.length || 250;

        return (
            <div className="utterances">
                <div className="container">
                    <div className="row align-items-center" style={{ "height": "550px" }}>
                        <div className="col">
                            <Instructions header={header} instructions={instructions} utterance={utterance} progress={progress} hideHeader={status === STATUS.end} hideHelp={status === STATUS.end} hideUtterance={status === STATUS.utteranceVerificatio} />
                        </div>
                        <div className="col">
                            {status === STATUS.utterancePhrasing &&
                                <Form utterance={utterance} context={context} intents={intents} icons={icons} index={intentIndex} linkWord={intentIndex === 1 ? linkWord : null} utteranceLimit={utteranceLimit} onSubmit={this.handleSubmitUtterance} onBack={this.handleBack} />
                            }
                            {status === STATUS.utteranceVerification &&
                                <PhraseVerification linkWord={linkWord} intents={intents} icons={icons} onSubmit={this.handleUtteranceVerification} onBack={this.handleBack} />
                            }
                            {status === STATUS.intentsSelection &&
                                <Selections utterance={utterance} selectionStart={selectionStart} selectionEnd={selectionEnd} intents={intents} icons={icons} index={intentSelectionIndex} onSubmit={this.handleSelection} onBack={this.handleBack} />
                            }
                            {status === STATUS.end &&
                                <ThankYou onSubmit={this.handleMTurkSubmit} onBack={this.handleBack} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
