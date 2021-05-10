import React from 'react';
import Instructions from './Instructions'
import Form from './Form';
import Selections from './Selections';
import ThankYou from './ThankYou';

const STATUS = {
    init: 0,
    pendingSelection: 1,
    selectionSucceed: 2,
};

export default class Utterances extends React.Component {
    constructor(props) {
        super(props);

        const { intents } = props;
        const intentsSelections = intents.map(intent => ([0, 0]));
        this.state = {
            status: STATUS.init,
            intentsSelections,
            pendingIntentIndex: 0
        };

        this.handleSubmitUtterance = this.handleSubmitUtterance.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleMTurkSubmit = this.handleMTurkSubmit.bind(this);
    }

    getInstructions() {
        const { intents, icons } = this.props;
        const { status, pendingIntentIndex } = this.state;

        if (status === STATUS.init) {
            return [
                <p className="lead fs-5 d">Your administrative assistance is very smart. Write a request in plain English that will use the given tasks your assistance can do in the provided context.</p>,
                <p>Try to be as creative as you can, don't be overly formal, simply write in plain English what you would say if you were in the given situation. Click 'Help' to see few examples.</p>
            ];
        } else if (status === STATUS.pendingSelection) {
            return [
                <p className="lead fs-5 d">Highlight with your mouse the part in your request that references the following task:</p>,
                <h5 className="mt-3 mb-4"><span className={`bi bi-${icons[pendingIntentIndex]}`} style={{ "paddingRight": "15px" }} />{intents[pendingIntentIndex]}</h5>


            ];
        } else {
            return ['', '']
                ;
        }
    }

    handleMTurkSubmit() {
        const { utterance, intentsSelections } = this.state;

        const annotationsValue = intentsSelections.map(intentSelections => intentSelections.join(", ")).join(" | ");
        document.querySelector('crowd-form').onsubmit = () => {
            if (document.getElementById('utterance')) {
                document.getElementById('utterance').value = utterance;
                document.getElementById('annotations').value = annotationsValue;
            }
        };
        document.querySelector('crowd-form').submit();
        //         
        // if (document.querySelector('crowd-form')) {
        //     document.querySelector('crowd-form').onsubmit = () => {
        //         if (document.getElementById('utterance')) {
        //             document.getElementById('utterance').value = utterance;
        //             document.getElementById('annotations').value = intentsSelections.map(intentSelections => intentSelections.join(", ")).join(" | ");
        //         }
        //     };
        // }

        // if (document.getElementById('submit-button')) {
        //     document.getElementById('submit-button').onclick = function () {
        //         document.querySelector('crowd-form').submit();
        //     };
        // }
    }

    handleSubmitUtterance(utterance) {
        this.setState({ utterance, status: STATUS.pendingSelection })
    }

    handleBack() {
        const { intentsSelections, pendingIntentIndex } = this.state;

        let status = STATUS.pendingSelection;
        if (pendingIntentIndex === 0) {
            status = STATUS.init;
        } 

        this.setState({ status, pendingIntentIndex: Math.max(pendingIntentIndex - 1, 0), intentsSelections });
    }

    handleSelection(index, selectionStart, selectionEnd, Selectionsuccess) {
        let { intentsSelections, status } = this.state;
        intentsSelections[index] = [selectionStart, selectionEnd];

        // check if all intents have been verified
        const { intents } = this.props;
        const allIntentsVerified = intents.every((intent, i) => intentsSelections[i][0] >= 0 && intentsSelections[i][1] > intentsSelections[i][0]);
        if (Selectionsuccess && allIntentsVerified && index === (intents.length - 1)) {
            status = STATUS.selectionSucceed;
        }

        this.setState({ intentsSelections, status, pendingIntentIndex: Math.min(index + 1, intents.length) });
    }

    getProgress() {
        const { intents } = this.props;
        const { status, pendingIntentIndex } = this.state;
        switch (status) {
            case STATUS.init:
                return 0;
            case STATUS.pendingSelection:
                return 100 * ((1 + pendingIntentIndex) / (intents.length + 1));
            case STATUS.selectionSucceed:
                return 100;
            default:
                return 0;
        }
    }

    render() {
        const { context, intents, icons, word } = this.props;
        const { status, utterance, intentsSelections, pendingIntentIndex } = this.state;
        const [selectionStart, selectionEnd] = pendingIntentIndex >= 0 && pendingIntentIndex < intents.length ? intentsSelections[pendingIntentIndex] : [0, 0];
        const progress = this.getProgress();
        const instructions = this.getInstructions();

        return (
            <div className="utterances">
                <div className="container">
                    <div className="row align-items-center" style={{ "height": "550px" }}>
                        <div className="col">
                            <Instructions instructions={instructions} progress={progress} hideHeader={status === STATUS.selectionSucceed} hideHelp={status === STATUS.selectionSucceed} />
                        </div>
                        <div className="col">
                            {status === STATUS.init &&
                                <Form utterance={utterance} context={context} intents={intents} icons={icons} word={word} onSubmit={this.handleSubmitUtterance} />
                            }
                            {status === STATUS.pendingSelection &&
                                <Selections utterance={utterance} selectionStart={selectionStart} selectionEnd={selectionEnd} intents={intents} icons={icons} index={pendingIntentIndex} onSubmit={this.handleSelection} onBack={this.handleBack} />
                            }
                            {status === STATUS.selectionSucceed &&
                                <ThankYou onSubmit={this.handleMTurkSubmit} onBack={this.handleBack} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
