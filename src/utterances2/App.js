import React from 'react';
import Instructions from './Instructions';
import Utterance from './Utterance';
import Verification, { VERIFICATION_STEPS } from './Verification';
import Selections, { SELECTIONS_STEPS } from './Selections';
import ThankYou from './ThankYou';
import Help from './Help';
import './App.css';

const SCREENS = {
    instructions: 1,
    example: 2,
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
            currentScreen: SCREENS.instructions,
            intentsSelections: intents && new Array(intents.length),
            constraintsSelections: constraintIntents && new Array(constraintIntents.length), 
        };

        this.handleClickBack = this.handleClickBack.bind(this);
        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickHelp = this.handleClickHelp.bind(this);
        this.handleUtteranceChange = this.handleUtteranceChange.bind(this);
        this.handleSelectIntent = this.handleSelectIntent.bind(this);
        this.handleSelectConstraint = this.handleSelectConstraint.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
    }

    submitToMTurk() {
        const { intents, constraintIntents } = this.props;
        const { utterance, context, selectedIntents, selectedConstraints, intentsSelections, constraintsSelections } = this.state;
        const contextValue = context;
        const intentsValue = selectedIntents.map(index => intents[index]).join(" | ");
        const constraintsValue = selectedConstraints.map(index => constraintIntents[index]).join(" | ");
        const intentsAnnotationsValue = selectedIntents.map((index, i) => utterance.substring(intentsSelections[i][0], intentsSelections[i][1])).join(" | ");
        const constraintsAnnotationsValue = selectedConstraints.map((index, i) => utterance.substring(constraintsSelections[i][0], constraintsSelections[i][1])).join(" | ");
        document.querySelector('crowd-form').onsubmit = () => {
            if (document.getElementById('utterance')) {
                document.getElementById('context').value = contextValue;
                document.getElementById('utterance').value = utterance;
                document.getElementById('intents').value = intentsValue;
                document.getElementById('constraints').value = constraintsValue;
                document.getElementById('intents-annotations').value = intentsAnnotationsValue;
                document.getElementById('constraints-annotations').value = constraintsAnnotationsValue;
            }
        };
        document.querySelector('crowd-form').submit();
    }

    handleClickNext() {
        const { currentScreen } = this.state;
        if (currentScreen === SCREENS.instructions) {
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
    }

    handleClickBack() {
        const { currentScreen } = this.state;
        if (currentScreen === SCREENS.utterance) {
            this.setState({ currentScreen: SCREENS.instructions });
        } else if (currentScreen === SCREENS.verification) {
            this.setState({ currentScreen: SCREENS.utterance });
        } else if (currentScreen === SCREENS.selections) {
            this.setState({ currentScreen: SCREENS.verification, verificationStep: 2 });
        } else if (currentScreen === SCREENS.end) {
            this.setState({ currentScreen: SCREENS.selections, selectionsStep: SELECTIONS_STEPS.constraints, currentSelectionIndex: -1 });
        }
    }

    handleClickHelp() {
        this.setState({ showHelp: true, });
    }

    handleUtteranceChange(utterance, context) {
        this.setState({ utterance, context });
    }

    handleSelectIntent(itemsCounter) {
        const { intentsSelections } = this.state;
        this.setState({ selectedIntents: itemsCounter, intentsSelections: intentsSelections.map((selection, i) => (itemsCounter[i] > 0 ? selection : null)) });
    }

    handleSelectConstraint(itemsCounter) {
        const { constraintsSelections } = this.state;
        this.setState({ selectedConstraints: itemsCounter, constraintsSelections: constraintsSelections.map((selection, i) => (itemsCounter[i] > 0 ? selection : null)) });
    }

    handleSelection(intentsSelections, constraintsSelections, currentSelectionIndex) {
        this.setState({ intentsSelections, constraintsSelections, currentSelectionIndex });
    }

    getDisplayedScreen() {
        const { contexts, maxLength, maxLengthPerIntent, minIntents, minConstraints, intents, constraintIntents, icons, constraintIcons, linkWords } = this.props;
        const { currentScreen, utterance, context, selectedIntents, selectedConstraints, intentsSelections, constraintsSelections, selectionsStep, currentSelectionIndex, verificationStep } = this.state;
        const words = linkWords;
        const utteranceLimit = maxLength || maxLengthPerIntent * intents.length || 250;

        if (currentScreen === SCREENS.instructions) {
            return (
                <Instructions onClickExample={this.handleClickHelp} onClickSkip={this.handleClickNext} />
            );
        } else if (currentScreen === SCREENS.utterance) {
            return (
                <Utterance utterance={utterance}
                    utteranceLimit={utteranceLimit} minIntents={minIntents} minConstraints={minConstraints}
                    intents={intents} constraintIcons={constraintIcons}
                    constraintIntents={constraintIntents} icons={icons}
                    words={words} contexts={contexts} context={context}
                    onUtteranceChange={this.handleUtteranceChange}
                    onClickNext={this.handleClickNext} onClickBack={this.handleClickBack} onClickHelp={this.handleClickHelp} />
            );
        } else if (currentScreen === SCREENS.verification) {
            return (
                <Verification utterance={utterance} step={verificationStep}
                    minIntents={minIntents} minConstraints={minConstraints}
                    intents={intents} constraintIntents={constraintIntents}
                    icons={icons} constraintIcons={constraintIcons}
                    selectedIntents={selectedIntents} selectedConstraints={selectedConstraints}
                    onSelectIntent={this.handleSelectIntent} onSelectConstraint={this.handleSelectConstraint}
                    onClickNext={this.handleClickNext} onClickBack={this.handleClickBack} onClickHelp={this.handleClickHelp} />
            );
        } else if (currentScreen === SCREENS.selections) {
            return (
                <Selections utterance={utterance}
                    intents={intents} constraintIntents={constraintIntents}
                    icons={icons} constraintIcons={constraintIcons}
                    selectedIntents={selectedIntents} selectedConstraints={selectedConstraints}
                    intentsSelections={intentsSelections} constraintsSelections={constraintsSelections}
                    step={selectionsStep} index={currentSelectionIndex}
                    onSelection={this.handleSelection}
                    onClickNext={this.handleClickNext} onClickBack={this.handleClickBack} onClickHelp={this.handleClickHelp} />
            );
        } else if (currentScreen === SCREENS.end) {
            return (
                <ThankYou onSubmit={this.handleClickNext} onClickBack={this.handleClickBack} />
            );
        }
    }

    render() {
        const { showHelp } = this.state;
        const displayedScreen = this.getDisplayedScreen();
        return (
            <div className="utterances">
                <div className="container">
                    <main>
                        {displayedScreen}
                        {showHelp &&
                            <Help show={showHelp} onHide={() => this.setState({ showHelp: false })} />
                        }
                    </main>
                </div>
            </div>
        );
    }
}