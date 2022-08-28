import React from 'react';
import Home from './containers/home/Home';
import Instructions from './containers/instructions/Instructions';
import Simple from './containers/simple/Simple';
import Complex from './containers/complex/Complex';
import Utterance from './containers/utterance/Utterance';
import ThankYou from './containers/ThankYou';
import './App.scss';

const SCREENS = {
    home: 1,
    simple: 2,
    complex: 3,
    instructions: 4,
    utterance: 5,
    end: 6
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        const { intents, constraints } = props;
        this.state = {
            index: 0,
            currentScreen: SCREENS.home,
            intentsSelections: intents && new Array(intents.length),
            constraintsSelections: constraints && new Array(constraints.length),
            workerResponses: []
        };

        this.handleClickBack = this.handleClickBack.bind(this);
        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickHelp = this.handleClickHelp.bind(this);
        this.handleFeedbackChange = this.handleFeedbackChange.bind(this);
        this.handleUtteranceChange = this.handleUtteranceChange.bind(this);
        this.handleSelectIntent = this.handleSelectIntent.bind(this);
        this.handleSelectConstraint = this.handleSelectConstraint.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
    }

    submitToMTurk() {
        const { intents, constraints } = this.props;
        const { workerResponses, feedback } = this.state;
        const workerResponsesValues = []
        for (const i in workerResponses) {
            const workerResponse = workerResponses[i]
            const { utterance, context, selectedIntents, selectedConstraints, intentsSelections, constraintsSelections } = workerResponse;
            const intentsValue = selectedIntents && selectedIntents.map(index => intents[index]).join(" | ");
            const constraintsValue = selectedConstraints && selectedConstraints.map(index => constraints[index]).join(" | ");
            const intentsAnnotationsValue = selectedIntents && selectedIntents.map((index, i) => utterance.substring(intentsSelections[i][0], intentsSelections[i][1])).join(" | ");
            const constraintsAnnotationsValue = selectedConstraints && selectedConstraints.map((index, i) => utterance.substring(constraintsSelections[i][0], constraintsSelections[i][1])).join(" | ");
            const workerResponseValue = {
                utterance,
                context,
                intents: intentsValue,
                constraints: constraintsValue,
                intentsAnnotations: intentsAnnotationsValue,
                constraintsAnnotations: constraintsAnnotationsValue
            };
            workerResponsesValues.push(workerResponseValue)
        }
        const feedbackValue = feedback;

        document.querySelector('crowd-form').onsubmit = () => {
            if (document.getElementById('worker-responses')) {
                document.getElementById('worker-responses').value = JSON.stringify(workerResponsesValues);
                document.getElementById('worker-feedback').value = feedbackValue;
            }
        };
        document.querySelector('crowd-form').submit();
    }

    handleClickNext() {
        const { currentScreen } = this.state;

        if (currentScreen === SCREENS.end) {
            this.submitToMTurk(this.state);
        } else {
            const nextScreen = (currentScreen + 1)
            this.setState({ currentScreen: nextScreen });
        }
        window.scrollTo(0, 0);
    }

    handleClickBack() {
        const { currentScreen } = this.state;

        if (currentScreen !== SCREENS.home) {
            const nextScreen = (currentScreen - 1)
            this.setState({ currentScreen: nextScreen });
        }
        window.scrollTo(0, 0);
    }

    handleClickHelp() {
        this.setState({ showHelp: true, });
    }

    handleFeedbackChange(feedback) {
        this.setState({ feedback });
    }

    handleUtteranceChange(index, utterance, context) {
        const { workerResponses } = this.state;
        workerResponses[index] = { ...workerResponses[index], ...{ utterance, context, intentsSelections: [], constraintsSelections: [] } };
        this.setState({ workerResponses });
    }

    handleSelectIntent(index, itemsCounter) {
        const { workerResponses } = this.state;
        workerResponses[index] = { ...workerResponses[index], ...{ selectedIntents: itemsCounter, intentsSelections: [] } };
        this.setState({ workerResponses });
    }

    handleSelectConstraint(index, itemsCounter) {
        const { workerResponses } = this.state;
        workerResponses[index] = { ...workerResponses[index], ...{ selectedConstraints: itemsCounter, constraintsSelections: [] } };
        this.setState({ workerResponses });
    }

    handleSelection(index, intentsSelections, constraintsSelections, currentSelectionIndex) {
        const { workerResponses } = this.state;
        workerResponses[index] = { ...workerResponses[index], ...{ intentsSelections, constraintsSelections, currentSelectionIndex } };
        this.setState({ workerResponses });
    }

    getDisplayedScreen() {
        const { maxUtterances, contexts, maxLength, maxLengthPerIntent, minIntents, minConstraints, intents, constraints, conjunctionWords, minConjunctionWords } = this.props;
        const { currentScreen, index, workerResponses } = this.state;
        const { utterance, context } = workerResponses.length > index ? workerResponses[index] : {};
        const utteranceLimit = maxLength || maxLengthPerIntent * intents.length || 250;

        if (currentScreen === SCREENS.home) {
            return (
                <Home onClickExample={this.handleClickHelp} onClickSkip={this.handleClickNext} />
            );
        } else if (currentScreen === SCREENS.simple) {
            return (
                <Simple onClickBack={this.handleClickBack} onClickNext={this.handleClickNext} />
            );
        } else if (currentScreen === SCREENS.complex) {
            return (
                <Complex onClickBack={this.handleClickBack} onClickNext={this.handleClickNext} />
            );
        } else if (currentScreen === SCREENS.instructions) {
            return (
                <Instructions onClickBack={this.handleClickBack} onClickNext={this.handleClickNext} />
            );
        } else if (currentScreen === SCREENS.utterance) {
            return (
                <Utterance index={index} maxUtterances={maxUtterances} utterance={utterance}
                    utteranceLimit={utteranceLimit} minIntents={minIntents} minConstraints={minConstraints}
                    intents={intents} constraints={constraints}
                    conjunctionWords={conjunctionWords} minConjunctionWords={minConjunctionWords} contexts={contexts} context={context}
                    onUtteranceChange={this.handleUtteranceChange} onClickBack={this.handleClickBack}
                    onClickHelp={this.handleClickHelp} onClickNext={this.handleClickNext} />
            );
        } else if (currentScreen === SCREENS.end) {
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