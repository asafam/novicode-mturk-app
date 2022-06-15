import React from 'react';
import Paraphrase from './Paraphrase';
import ThankYou from './ThankYou';
import './App.scss';


const STEPS = {
    paraphrase: 'paraphrase',
    thankYou: 'thankYou'
};

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            step: STEPS.paraphrase
        };

        this.handleFeedbackChange = this.handleFeedbackChange.bind(this);
        this.handleParaphrase = this.handleParaphrase.bind(this);
        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickBack = this.handleClickBack.bind(this);
    }

    handleClickNext() {
        const { step } = this.state;

        if (step === STEPS.paraphrase) {
            this.setState({ step: STEPS.thankYou });
        } else if (step === STEPS.thankYou) {
            this.submitToMTurk();
        }
    }

    handleClickBack() {
        const { step } = this.state;

        if (step === STEPS.thankYou) {
            this.setState({ step: STEPS.paraphrase });
        }
    }

    handleParaphrase(newText) {
        this.setState({
            newUtterance: newText,
        });
    }

    handleFeedbackChange(feedback) {
        this.setState({ feedback });
    }

    submitToMTurk() {
        const { id, utterance } = this.props;
        const { newUtterance, feedback } = this.state;
        const workerResponses = [{
            id,
            utterance,
            newUtterance,
        }];

        document.querySelector('crowd-form').onsubmit = () => {
            if (document.getElementById('worker-responses')) {
                document.getElementById('worker-responses').value = JSON.stringify(workerResponses);
                document.getElementById('worker-feedback').value = feedback;
            }
        };
        document.querySelector('crowd-form').submit();
    }

    getDisplayedScreen() {
        const { utterance, blacklist, maxLength, minLength } = this.props;
        const { step } = this.state;

        if (step === STEPS.paraphrase) {
            return (
                <Paraphrase text={utterance} blacklist={blacklist} maxLength={maxLength} minLength={minLength} onParaphrase={this.handleParaphrase} onSubmit={this.handleClickNext} />
            );
        } else if (step === STEPS.thankYou) {
            return (
                <ThankYou onFeedbackChange={this.handleFeedbackChange}
                    onSubmit={this.handleClickNext} onClickBack={this.handleClickBack} />
            );
        }
    }

    render() {
        const displayedScreen = this.getDisplayedScreen();
        return (
            <div className="app">
                <div className="container">
                    <main>
                        {displayedScreen}
                    </main>
                </div>
            </div>
        );
    }
}