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
        const { intents, constraintIntents } = props;
        this.state = {
            currentScreen: SCREENS.home,
            intentsSelections: intents && new Array(intents.length),
            constraintsSelections: constraintIntents && new Array(constraintIntents.length),
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
        const { intents, constraintIntents } = this.props;
        const { utterance, context, selectedIntents, selectedConstraints, intentsSelections, constraintsSelections, feedback } = this.state;
        const contextValue = context;
        const intentsValue = selectedIntents && selectedIntents.map(index => intents[index]).join(" | ");
        const constraintsValue = selectedConstraints && selectedConstraints.map(index => constraintIntents[index]).join(" | ");
        const intentsAnnotationsValue = selectedIntents && selectedIntents.map((index, i) => utterance.substring(intentsSelections[i][0], intentsSelections[i][1])).join(" | ");
        const constraintsAnnotationsValue = selectedConstraints && selectedConstraints.map((index, i) => utterance.substring(constraintsSelections[i][0], constraintsSelections[i][1])).join(" | ");
        const feedbackValue = feedback;

        document.querySelector('crowd-form').onsubmit = () => {
            if (document.getElementById('utterance')) {
                document.getElementById('context').value = contextValue;
                document.getElementById('utterance').value = utterance;
                document.getElementById('intents').value = intentsValue;
                document.getElementById('constraints').value = constraintsValue;
                document.getElementById('intents-annotations').value = intentsAnnotationsValue;
                document.getElementById('constraints-annotations').value = constraintsAnnotationsValue;
                document.getElementById('worker-feedback').value = feedbackValue;
            }
        };
        document.querySelector('crowd-form').submit();
    }

    handleClickNext() {
        const { currentScreen } = this.state;
        if (currentScreen === SCREENS.home) {
            this.setState({ currentScreen: SCREENS.instructions });
        } else if (currentScreen === SCREENS.instructions) {
            this.setState({ currentScreen: SCREENS.utterance });
        } else if (currentScreen === SCREENS.utterance) {
            this.setState({ currentScreen: SCREENS.verification, verificationStep: VERIFICATION_STEPS.intents });
        } else if (currentScreen === SCREENS.verification) {
            this.setState({ currentScreen: SCREENS.selections, selectionsStep: SELECTIONS_STEPS.intents, currentSelectionIndex: 0 });
        } else if (currentScreen === SCREENS.selections) {
            this.setState({ currentScreen: SCREENS.end });
        } else if (currentScreen === SCREENS.end) {
            this.submitToMTurk(this.state);
        }
        window.scrollTo(0, 0);
    }

    handleClickBack() {
        const { currentScreen } = this.state;
        if (currentScreen === SCREENS.instructions) {
            this.setState({ currentScreen: SCREENS.home });
        } else if (currentScreen === SCREENS.utterance) {
            this.setState({ currentScreen: SCREENS.instructions });
        } else if (currentScreen === SCREENS.verification) {
            this.setState({ currentScreen: SCREENS.utterance });
        } else if (currentScreen === SCREENS.selections) {
            this.setState({ currentScreen: SCREENS.verification, verificationStep: 1 });
        } else if (currentScreen === SCREENS.end) {
            this.setState({ currentScreen: SCREENS.selections, selectionsStep: SELECTIONS_STEPS.intents, currentSelectionIndex: -1 });
        }
        window.scrollTo(0, 0);
    }

    handleClickHelp() {
        this.setState({ showHelp: true, });
    }

    handleFeedbackChange(feedback) {
        this.setState({ feedback });
    }

    handleUtteranceChange(utterance, context) {
        this.setState({ utterance, context, intentsSelections: [], constraintsSelections: [] });
    }

    handleSelectIntent(itemsCounter) {
        this.setState({ selectedIntents: itemsCounter, intentsSelections: [] });
    }

    handleSelectConstraint(itemsCounter) {
        this.setState({ selectedConstraints: itemsCounter, constraintsSelections: [] });
    }

    handleSelection(intentsSelections, constraintsSelections, currentSelectionIndex) {
        this.setState({ intentsSelections, constraintsSelections, currentSelectionIndex });
    }

    getDisplayedScreen() {
        const { contexts, maxLength, maxLengthPerIntent, minIntents, minConstraints, intents, constraintIntents, intentIcons, constraintIcons, conjunctionWords, minConjunctionWords } = this.props;
        const { currentScreen, utterance, context, selectedIntents, selectedConstraints, intentsSelections, constraintsSelections, selectionsStep, currentSelectionIndex, verificationStep } = this.state;
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
                <Utterance utterance={utterance}
                    utteranceLimit={utteranceLimit} minIntents={minIntents} minConstraints={minConstraints}
                    intents={intents} constraintIcons={constraintIcons}
                    constraintIntents={constraintIntents} intentIcons={intentIcons}
                    conjunctionWords={conjunctionWords} minConjunctionWords={minConjunctionWords} contexts={contexts} context={context}
                    onUtteranceChange={this.handleUtteranceChange} onClickBack={this.handleClickBack} 
                    onClickHelp={this.handleClickHelp} onClickNext={this.handleClickNext}  />
            );
        } else if (currentScreen === SCREENS.verification) {
            return (
                <Verification utterance={utterance} step={verificationStep}
                    minIntents={minIntents} minConstraints={minConstraints}
                    intents={intents} constraintIntents={constraintIntents}
                    intentIcons={intentIcons} constraintIcons={constraintIcons}
                    selectedIntents={selectedIntents} selectedConstraints={selectedConstraints}
                    onSelectIntent={this.handleSelectIntent} onSelectConstraint={this.handleSelectConstraint}
                    onClickNext={this.handleClickNext} onClickBack={this.handleClickBack} onClickHelp={this.handleClickHelp} />
            );
        } else if (currentScreen === SCREENS.selections) {
            return (
                <Selections utterance={utterance}
                    intents={intents} constraintIntents={constraintIntents}
                    intentIcons={intentIcons} constraintIcons={constraintIcons}
                    selectedIntents={selectedIntents} selectedConstraints={selectedConstraints}
                    intentsSelections={intentsSelections} constraintsSelections={constraintsSelections}
                    step={selectionsStep} index={currentSelectionIndex}
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
            <div className="utterances">
                <div className="container">
                    <main>
                        {displayedScreen}
                    </main>
                </div>
            </div>
        );
    }
}