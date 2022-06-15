import React from 'react';
import Home from './home/Home';
import Instructions from './instructions/Instructions';
import Utterance from './utterance/Utterance';
import Verification, { VERIFICATION_STEPS } from './verification/Verification';
import Selections, { SELECTIONS_STEPS } from './selections/Selections';
import ThankYou from './ThankYou';
import './App.scss';

const SCREENS = {
    home: 1,
    instructions: 2,
    utterance: 3,
    selections: 4,
    verification: 5,
    end: 6
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        const { intents, constraints } = props;
        this.state = {
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
        const { maxUtterances } = this.props;
        const { index, currentScreen } = this.state;
        if (currentScreen === SCREENS.home) {
            this.setState({ currentScreen: SCREENS.instructions });
        } else if (currentScreen === SCREENS.instructions) {
            this.setState({ currentScreen: SCREENS.utterance, index: 0 });
        } else if (currentScreen === SCREENS.utterance) {
            this.setState({ currentScreen: (index + 1) === maxUtterances ? SCREENS.end : SCREENS.utterance, index: (index + 1) });
            // } else if (currentScreen === SCREENS.verification) {
            //     this.setState({ currentScreen: SCREENS.selections, selectionsStep: SELECTIONS_STEPS.intents, currentSelectionIndex: 0 });
            // } else if (currentScreen === SCREENS.selections) {
            //     this.setState({ currentScreen: SCREENS.end });
        } else if (currentScreen === SCREENS.end) {
            this.submitToMTurk(this.state);
        }
        window.scrollTo(0, 0);
    }

    handleClickBack() {
        const { maxUtterances } = this.props;
        const { currentScreen, index } = this.state;
        if (currentScreen === SCREENS.instructions) {
            this.setState({ currentScreen: SCREENS.home });
        } else if (currentScreen === SCREENS.utterance) {
            this.setState({ index: Math.max(index - 1, 0), currentScreen: index === 0 ? SCREENS.instructions : SCREENS.utterance });
        // } else if (currentScreen === SCREENS.verification) {
        //     this.setState({ index: Math.max(index, 0), currentScreen: index === 0 ? : SCREENS.utterance });
        // } else if (currentScreen === SCREENS.selections) {
        //     this.setState({ index: Math.max(index, 0), currentScreen: index === 0 ? : SCREENS.verification, verificationStep: 1 });
        } else if (currentScreen === SCREENS.end) {
            this.setState({ currentScreen: SCREENS.utterance, index: (maxUtterances - 1) });
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
        const { utterance, context, selectedIntents, selectedConstraints, intentsSelections, constraintsSelections, selectionsStep, currentSelectionIndex, verificationStep } = workerResponses.length > index ? workerResponses[index] : {};
        const utteranceLimit = maxLength || maxLengthPerIntent * intents.length || 250;

        if (currentScreen === SCREENS.home) {
            return (
                <Home onClickExample={this.handleClickHelp} onClickSkip={this.handleClickNext} />
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
        } else if (currentScreen === SCREENS.verification) {
            return (
                <Verification index={index} utterance={utterance} step={verificationStep}
                    minIntents={minIntents} minConstraints={minConstraints}
                    intents={intents} constraints={constraints}
                    selectedIntents={selectedIntents} selectedConstraints={selectedConstraints}
                    onSelectIntent={this.handleSelectIntent} onSelectConstraint={this.handleSelectConstraint}
                    onClickNext={this.handleClickNext} onClickBack={this.handleClickBack} onClickHelp={this.handleClickHelp} />
            );
        } else if (currentScreen === SCREENS.selections) {
            return (
                <Selections index={index} utterance={utterance}
                    intents={intents} constraints={constraints}
                    selectedIntents={selectedIntents} selectedConstraints={selectedConstraints}
                    intentsSelections={intentsSelections} constraintsSelections={constraintsSelections}
                    step={selectionsStep} selectionIndex={currentSelectionIndex}
                    onSelection={this.handleSelection} onClickNext={this.handleClickNext}
                    onClickBack={this.handleClickBack} onClickHelp={this.handleClickHelp} />
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