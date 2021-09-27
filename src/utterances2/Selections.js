import React from 'react';

export const SELECTIONS_STEPS = {
    intents: 'intents',
    constraints: 'constraints'
};

export default class Selections extends React.Component {
    constructor(props) {
        super(props);
        const { index, step, intentsSelections, constraintsSelections, intents, constraintIntents, selectedIntents, selectedConstraints } = props;
        this.state = {
            index: isNaN(index) ?
                0 :
                (index !== -1 ?
                    index :
                    (step === SELECTIONS_STEPS.constraints ? selectedConstraints.length - 1 : selectedIntents.length - 1)
                ),
            step,
            intentsSelections: intentsSelections && intentsSelections.length === intents.length ? intentsSelections : new Array(intents.length),
            constraintsSelections: constraintsSelections && constraintsSelections.length === constraintIntents.length ? constraintsSelections : new Array(constraintIntents.length),
        };

        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickBack = this.handleClickBack.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    // componentDidUpdate(prevProps, prevState) {
    //     const { index } = this.props;
    //     if (index !== prevState.index) {
    //         this.setState({ index: index });
    //     }
    // }

    handleChange(event) {
        event.preventDefault();
    }

    handleMouseUp() {
        const { selectedIntents, selectedConstraints } = this.props;
        const { index, step, intentsSelections, constraintsSelections } = this.state;
        const { selectionStart, selectionEnd } = this.getSelection();
        if (selectionStart >= 0 && selectionEnd > selectionStart) {
            if (step === SELECTIONS_STEPS.intents) {
                intentsSelections[selectedIntents[index]] = [selectionStart, selectionEnd];
            } else {
                constraintsSelections[selectedConstraints[index]] = [selectionStart, selectionEnd];
            }

            this.setState({ intentsSelections, constraintsSelections, errorMessage: null });
            this.props.onSelection(intentsSelections, constraintsSelections, index);
        } else {
            this.setState({ errorMessage: `Please select the part in your utterance that corresponds with the ${step === SELECTIONS_STEPS.intents ? "task" : "query"}.` })
        }
    }

    handleClickNext(event) {
        event.preventDefault();
        const { selectedIntents, selectedConstraints } = this.props;
        const { index, step, intentsSelections, constraintsSelections } = this.state;

        if ((step === SELECTIONS_STEPS.intents && !intentsSelections[selectedIntents[index]]) ||
            (step === SELECTIONS_STEPS.constraints && !constraintsSelections[selectedConstraints[index]])) {
            this.setState({ errorMessage: `Did you forget to select the part in your utterance that corresponds with the ${step === SELECTIONS_STEPS.intents ? "task" : "query"}?` });
            return;
        }

        const nextIndex = index + 1;
        if ((step === SELECTIONS_STEPS.intents && nextIndex < selectedIntents.length) || (step === SELECTIONS_STEPS.constraints && nextIndex < selectedConstraints.length)) {
            this.setState({ index: nextIndex });
        } else if (step === SELECTIONS_STEPS.intents) {
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

    getSelection() {
        const textarea = document.getElementById("utterance-selection");
        const selectionStart = textarea && textarea.selectionStart;
        const selectionEnd = textarea && textarea.selectionEnd;
        return { selectionStart, selectionEnd };
    }

    render() {
        const { utterance, intents, constraintIntents, selectedIntents, selectedConstraints, icons, constraintIcons, onClickHelp } = this.props;
        const { index, step, intentsSelections, constraintsSelections, errorMessage } = this.state;
        const intent = step === SELECTIONS_STEPS.intents ? intents[selectedIntents[index]] : constraintIntents[selectedConstraints[index]];
        const icon = index < icons.length ? icons[selectedIntents[index]] : constraintIcons[selectedConstraints[index]];
        const [selectionStart, selectionEnd] = step === SELECTIONS_STEPS.intents ?
            (intentsSelections[selectedIntents[index]] ? intentsSelections[selectedIntents[index]] : [null, null]) :
            (constraintsSelections[selectedConstraints[index]] ? constraintsSelections[selectedConstraints[index]] : [null, null]);
        const valid = (selectionStart >= 0 && selectionEnd <= utterance.length && selectionEnd > selectionStart);
        const selectedText = valid ? utterance.substring(selectionStart, selectionEnd) : "";

        return (
            <div className="selections">
                <div className="card mt-4">
                    <div className="card-header text-center">
                        <h5>Highlight, with your mouse, the part of text in your utterance that references:</h5>
                        <h5 className="intent">
                            <span className={`intent-icon bi bi-${icon}`} />
                            <span>{intent}</span>
                        </h5>
                    </div>
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col">
                                <form className="g-3 needs-validation pt-4" onSubmit={this.handleSubmit} noValidate>
                                    <textarea className="form-control p-3 utterance" rows="5"
                                        value={utterance} type="text" id="utterance-selection" aria-describedby="help"
                                        style={{ "cursor": "text", "border": "none" }}
                                        onChange={this.handleChange} onMouseUp={this.handleMouseUp} />
                                </form>
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

                <div className="mt-4 d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4 gap-3" onClick={this.handleClickBack}><i className="bi bi-chevron-left" /></button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4 gap-3" onClick={onClickHelp}><i className="bi bi-question-lg" /></button>
                    <button type="button" className="btn btn-primary btn-lg px-4" onClick={this.handleClickNext}><i className="bi bi-chevron-right" /></button>
                </div>


                {/* <div className="container">
                    <div className="card text-dark border-primary mb-3">
                        <div className="card-header text-white bg-primary">Select, with your mouse, the part in the text in your utterance that references <strong>"{intent}"</strong>:</div>
                        <div className="card-body p-0">
                            <p className="card-text">
                                <textarea className="form-control p-3" rows="5"
                                    value={utterance} type="text" id="utterance-selection" aria-describedby="help"
                                    style={{ "cursor": "text", "border": "none" }}
                                    onChange={this.handleChange} onMouseUp={this.handleMouseUp} />
                            </p>
                        </div>
                    </div>
                    <div className="card text-dark bg-light mb-3">
                        <div className="card-header">You selected:</div>
                        <div className="card-body">
                            <p className="card-text">{selectedText}</p>
                        </div>
                    </div>
                    <div className="mt-4 d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4 gap-3" onClick={this.handleClickBack}><i className="bi bi-chveron-left" /></button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4 gap-3" onClick={onClickHelp}><i className="bi bi-question-lg" /></button>
                        <button type="button" className="btn btn-green btn-lg px-4" onClick={this.handleClickNext} disabled={disabled}><i className="bi bi-chveron-right" /></button>
                    </div>
                </div> */}

            </div >
        );
    }
}