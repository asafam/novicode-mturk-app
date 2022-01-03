import React from 'react';
import AppModal from '../Modal';
import Help from './Help';
import './Selections.scss';


export const SELECTIONS_STEPS = {
    intents: 'intents',
    constraints: 'constraints'
};

export default class Selections extends React.Component {
    constructor(props) {
        super(props);
        const { index, step, intentsSelections, constraintsSelections, selectedIntents, selectedConstraints } = props;
        this.state = {
            index: isNaN(index) ?
                0 :
                (index !== -1 ?
                    index :
                    (step === SELECTIONS_STEPS.constraints ? selectedConstraints.length - 1 : selectedIntents.length - 1)
                ),
            step,
            intentsSelections: intentsSelections || [],
            constraintsSelections: constraintsSelections || [],
        };

        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickBack = this.handleClickBack.bind(this);
        this.handleClickHelp = this.handleClickHelp.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    // componentDidUpdate(prevProps, prevState) {
    //     const { index } = this.props;
    //     if (index !== prevState.index) {
    //         this.setState({ index: index });
    //     }
    // }

    handleMouseUp(event) {
        const { index, step, intentsSelections, constraintsSelections } = this.state;
        const { selectionStart, selectionEnd } = this.getSelection();
        if (this.isSelectionValid({ selectionStart, selectionEnd })) {
            if (step === SELECTIONS_STEPS.intents) {
                intentsSelections[index] = [selectionStart, selectionEnd];
            } else {
                constraintsSelections[index] = [selectionStart, selectionEnd];
            }

            this.setState({ intentsSelections, constraintsSelections, errorMessage: null });
            this.props.onSelection(intentsSelections, constraintsSelections, index);
        } else {
            this.setState({ errorMessage: `Please select the part in your utterance that corresponds with the ${step === SELECTIONS_STEPS.intents ? "task" : "query"}. Your selections cannot overlap other selections` })
        }
    }

    handleClickNext(event) {
        event.preventDefault();
        const { selectedIntents, selectedConstraints } = this.props;
        const { index, step, intentsSelections, constraintsSelections } = this.state;

        if ((step === SELECTIONS_STEPS.intents && !intentsSelections[index]) ||
            (step === SELECTIONS_STEPS.constraints && !constraintsSelections[index])) {
            this.setState({ errorMessage: `Did you forget to select the part in your utterance that corresponds with the ${step === SELECTIONS_STEPS.intents ? "task" : "query"}?` });
            return;
        }

        const nextIndex = index + 1;
        if ((step === SELECTIONS_STEPS.intents && nextIndex < selectedIntents.length) || (step === SELECTIONS_STEPS.constraints && nextIndex < selectedConstraints.length)) {
            this.setState({ index: nextIndex });
        } else if (selectedConstraints && selectedConstraints.length > 0 && step === SELECTIONS_STEPS.intents) {
            this.setState({ step: SELECTIONS_STEPS.constraints, index: 0 });
        } else {
            this.props.onClickNext();
        }
    }

    handleClickBack(event) {
        event.preventDefault();
        const { selectedIntents } = this.props
        const { index, step } = this.state;
        const previousIndex = index - 1;
        if ((step === SELECTIONS_STEPS.intents && previousIndex >= 0) || (step === SELECTIONS_STEPS.constraints && previousIndex >= 0)) {
            this.setState({ index: previousIndex });
        } else if (step === SELECTIONS_STEPS.constraints) {
            this.setState({ step: SELECTIONS_STEPS.intents, index: selectedIntents.length - 1 });
        } else {
            this.props.onClickBack();
        }
    }

    handleClickHelp(event) {
        event.preventDefault();
        this.setState({ showHelp: true });
    }

    getSelection() {// If it rains remind me to bring a coat and an umbrella
        const { utterance } = this.props;
        const selection = window.getSelection();
        let selectionStart = selection.baseOffset;
        let selectionEnd = selection.extentOffset;

        if (selection.baseNode !== selection.extentNode) {
            selectionEnd += selection.baseNode.textContent.length;
        }

        let currentNode = selection.baseNode.parentNode;
        let parentNode = currentNode.innerHTML === utterance ? null : currentNode.parentNode;
        while (parentNode) {
            let previousSibling = parentNode.childNodes[parentNode.childNodes.length - 1]
            for (let i = 0; i < parentNode.childNodes.length; i++) {
                let childNode = parentNode.childNodes[i]
                if (childNode === currentNode) {
                    previousSibling = currentNode.previousSibling;
                }
            }

            while (previousSibling) {
                selectionStart += previousSibling.textContent.length;
                selectionEnd += previousSibling.textContent.length;
                previousSibling = previousSibling.previousSibling;
            }
            parentNode = parentNode.previousSibling;
        }

        return { selectionStart, selectionEnd };
    }

    isSelectionValid(selection) {
        let valid = false;
        const { selectedIntents, selectedConstraints } = this.props;
        const { index, step, intentsSelections, constraintsSelections } = this.state;
        const { selectionStart, selectionEnd } = selection;
        const valid1 = (selectionStart >= 0) && (selectionEnd > selectionStart) && ((selectionEnd - selectionStart) > 1);
        const valid2 = !selectedIntents || selectedIntents.length === 0 || intentsSelections.reduce((result, value, i) => result && (!value || (step === SELECTIONS_STEPS.intents && index === i) || selectionStart >= value[1] || selectionEnd <= value[0]), true);
        const valid3 = !selectedConstraints || selectedConstraints.length === 0 || constraintsSelections.reduce((result, value, i) => result && (!value || (step === SELECTIONS_STEPS.constraints && index === i) || selectionStart >= value[1] || selectionEnd <= value[0]), true);
        valid = valid || (valid1 && valid2 && valid3);
        return valid;
    }

    render() {
        let { utterance, intents, constraintIntents, selectedIntents, selectedConstraints, icons, constraintIcons, onClickHelp } = this.props;
        const { index, step, intentsSelections, constraintsSelections, errorMessage, showHelp } = this.state;
        selectedConstraints = selectedConstraints || [];
        const total = step === SELECTIONS_STEPS.intents ? selectedIntents.length : selectedConstraints.length;
        const intent = step === SELECTIONS_STEPS.intents ? intents[selectedIntents[index]] : constraintIntents[selectedConstraints[index]];
        const icon = index < icons.length ? icons[selectedIntents[index]] : constraintIcons[selectedConstraints[index]];
        const [selectionStart, selectionEnd] = step === SELECTIONS_STEPS.intents ?
            (intentsSelections[index] ? intentsSelections[index] : [null, null]) :
            (constraintsSelections[index] ? constraintsSelections[index] : [null, null]);
        const valid = (selectionStart >= 0 && selectionEnd <= utterance.length && selectionEnd > selectionStart);
        const selectedText = valid ? utterance.substring(selectionStart, selectionEnd) : "";
        const selections = intentsSelections.map((v, i) => [v, 'intent', i]).concat(constraintsSelections.map(v => [v, 'constraint']))
            .filter(s => !!s)
            .sort();

        if (showHelp) {
            return (
                <AppModal show={showHelp} onHide={() => this.setState({ showHelp: false })}>
                    <Help />
                </AppModal>
            );
        }

        return (
            <div className="selections">
                <div className="row">
                    <div className="col">
                        <div className="instructions-text">
                            <h1>Highligh text in your sentence</h1>
                            <p className>Highlight, with your mouse, the part of text in your sentence that references the following
                                task ({index + 1} / {total}):</p>
                            <div className="required-intent text-center"><span className={`intent-icon bi bi-${icon}`} />{intent}</div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="card mt-4">
                            <div className="card-header text-center">
                                <h3 className="text-center"><span className="intent-icon bi bi-mouse2" /></h3>
                            </div>
                            <div className="card-body">
                                <div className="row mb-3">
                                    <div className="col">
                                        <div className="selection-area">
                                            <div className="form-control p-3 user-utterance" id="utterance-selection" onMouseUp={this.handleMouseUp} >
                                                {selections.length > 0 ? selections.map(([selection, type, idx], i) => (
                                                    <span key={i}>
                                                        {(i === 0) &&
                                                            <span>{utterance.substring(0, selection[0])}</span>
                                                        }
                                                        <span className={`highlight ${type} ${index === idx && "current"}`}>{utterance.substring(selection[0], selection[1])}</span>
                                                        <span>{utterance.substring(selection[1], (i + 1) < selections.length ? selections[i + 1][0][0] : utterance.length)}</span>
                                                    </span>
                                                )) : utterance}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row selection mb-3">
                                    <div className="col">
                                        <span className="selection-head">You selected:</span>
                                        {selectedText &&
                                            <span className="selection-text">{selectedText}</span>
                                        }
                                    </div>
                                </div>

                                {errorMessage &&
                                    <div className="row selection mb-3">
                                        <div className="col">
                                            <div className="text-red">{errorMessage}</div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div >
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="actions mt-4 d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4 gap-3" onClick={this.handleClickBack}><i className="bi bi-chevron-left" /></button>
                            <button type="button" className="btn btn-primary btn-lg px-4" onClick={this.handleClickNext}><i className="bi bi-chevron-right" /></button>
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