import React from 'react';

export const VERIFICATION_STEPS = {
    intents: 1,
    contraints: 2
};

export default class Verification extends React.Component {
    constructor(props) {
        super(props);
        const { utterance, step, selectedIntents, selectedConstraints } = props;
        this.state = {
            utterance,
            selectedIntents: selectedIntents || [],
            selectedConstraints: selectedConstraints || [],
            step: step || (selectedIntents && selectedIntents.length > 0 && VERIFICATION_STEPS.contraints) || VERIFICATION_STEPS.intents
        };

        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickBack = this.handleClickBack.bind(this);
        this.handleDecrementCounter = this.handleDecrementCounter.bind(this);
        this.handleIncrementCounter = this.handleIncrementCounter.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.utterance !== this.props.utterance) {
            const { utterance } = this.props;
            this.setState({ utterance });
        }
    }

    handleDecrementCounter(event) {
        event.preventDefault();
        const { onSelectIntent, onSelectConstraint } = this.props;
        const { step, selectedIntents, selectedConstraints } = this.state;
        const index = parseInt(event.currentTarget.getAttribute('data-index'));
        if (step === VERIFICATION_STEPS.intents) {
            const indexToRemove = selectedIntents.indexOf(index);
            if (indexToRemove !== -1) {
                selectedIntents.splice(indexToRemove, 1);
                onSelectIntent(selectedIntents);
            }
        } else {
            const indexToRemove = selectedConstraints.indexOf(index);
            if (indexToRemove !== -1) {
                selectedConstraints.splice(indexToRemove, 1);
                onSelectConstraint(selectedConstraints);
            }
        }
    }

    handleIncrementCounter(event) {
        event.preventDefault();
        const { onSelectIntent, onSelectConstraint } = this.props;
        const { step, selectedIntents, selectedConstraints } = this.state;
        const index = parseInt(event.currentTarget.getAttribute('data-index'));
        if (step === VERIFICATION_STEPS.intents) {
            selectedIntents.push(index);
            onSelectIntent(selectedIntents);
        } else {
            selectedConstraints.push(index);
            onSelectConstraint(selectedConstraints);
        }
    }

    handleClickNext(event) {
        event.preventDefault();
        const { minIntents, minConstraints, onClickNext } = this.props;
        const { step } = this.state;
        const valid = this.isValid();
        if (valid && step === VERIFICATION_STEPS.intents) {
            this.setState({ step: VERIFICATION_STEPS.contraints, valid, errorMessage: null })
        } else if (valid) {
            onClickNext();
        } else {
            const errorMessage = step === VERIFICATION_STEPS.intents ?
                `You have to select at least ${minIntents} tasks. Click back if you need to update your utterance` :
                `You have to select at least ${minConstraints} constraints. Click back if you need to update your utterance`;
            this.setState({ valid, errorMessage });
        }
    }

    handleClickBack(event) {
        event.preventDefault();
        const { step } = this.state;
        if (step === VERIFICATION_STEPS.contraints) {
            this.setState({ step: VERIFICATION_STEPS.intents })
        } else {
            const { onClickBack } = this.props;
            onClickBack();
        }
    }

    isValid() {
        const { minIntents, minConstraints } = this.props;
        const { step, selectedIntents, selectedConstraints } = this.state;
        if (step === VERIFICATION_STEPS.intents && selectedIntents && selectedIntents.length >= minIntents) {
            return true;
        } else if (step === VERIFICATION_STEPS.contraints && selectedConstraints && selectedConstraints.length >= minConstraints) {
            return true;
        } else {
            return false;
        }
    }

    getInstruction() {
        const { minIntents, minConstraints } = this.props;
        const { step } = this.state;
        const text = (step === VERIFICATION_STEPS.intents) ?
            "Please select the virtual assitance's tasks you used in your utterance" :
            "Please select the virtual assitance's inquiries you used as constraints in your utterance";
        const minNum = (step === VERIFICATION_STEPS.intents) ? minIntents : minConstraints;
        const instruction = (
            <span>
                <span className="">{text}</span>
                <span className=""> (you had to use at least {minNum}, you were allowed to use the same one more than once)</span>
                <span className="">:</span>
            </span>
        );
        return instruction;
    }

    render() {
        const { intents, icons, constraintIntents, constraintIcons, onClickHelp } = this.props;
        const { utterance, errorMessage, selectedIntents, selectedConstraints, step } = this.state;
        const valid = this.isValid();
        const instruction = this.getInstruction();
        const items = step === VERIFICATION_STEPS.intents ? intents : constraintIntents;
        const intentsCounter = (new Array(intents.length)).fill(0).map((value, index) => selectedIntents.filter(idx => idx === index).length);
        const constraintsCounter = (new Array(constraintIntents.length)).fill(0).map((value, index) => selectedConstraints.filter(idx => idx === index).length);
        const itemsCounter = step === VERIFICATION_STEPS.intents ? intentsCounter : constraintsCounter;
        const itemIcons = step === VERIFICATION_STEPS.intents ? icons : constraintIcons;

        return (
            <div className="verification px-4 py-5 my-5">
                <div className="card mt-4">
                    <div className="card-header text-center">
                        {instruction}
                    </div>
                    <div className="card-body">
                        <div className="tasks-verification row mb-3">
                            <div className="col">
                                <div className="row mb-3">
                                    <div className="col">
                                        <div className="bd-callout">
                                            <div className="utterance text-center"><p>{utterance}</p></div>
                                            {items.map((item, i) => (
                                                <div className={`form-check pt-1 pb-1 mt-1 mb-1 intent selection ${(itemsCounter[i] > 0) ? "selected" : ""}`} key={i} data-index={i} >
                                                    <div className="counter-form">
                                                        <div className="input-group">
                                                            <span className="input-group-btn">
                                                                <button type="button" className="btn btn-outline-secondary btn-number" disabled={itemsCounter[i] === 0} data-type="minus" data-index={i}
                                                                    onClick={this.handleDecrementCounter}>
                                                                    <span className="bi bi-dash"></span>
                                                                </button>
                                                            </span>
                                                            <input type="text" name="quant[1]" className="form-control input-number" value={itemsCounter[i]} min="1" max="10" readOnly={true} />
                                                            <span className="input-group-btn">
                                                                <button type="button" className="btn btn-outline-secondary btn-number" data-type="plus" data-index={i}
                                                                    onClick={this.handleIncrementCounter}>
                                                                    <span className="bi bi-plus"></span>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="label form-check-label" htmlFor="flexCheckDefault">
                                                        <h5><span className={`intent-icon bi bi-${itemIcons[i]}`} />{item}</h5>
                                                    </div>
                                                </div>
                                            ))}
                                            {!valid && (
                                                <div className="error-messasge text-danger">{errorMessage}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

                <div className="mt-4 d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4 gap-3" onClick={this.handleClickBack}><i className="bi bi-chevron-left" /></button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4 gap-3" onClick={onClickHelp}><i className="bi bi-question-lg" /></button>
                    <button type="button" className="btn btn-primary btn-lg px-4" onClick={this.handleClickNext}><i className="bi bi-chevron-right" /></button>
                </div>
            </div >
        );
    }
}