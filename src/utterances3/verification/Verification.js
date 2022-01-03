import React from 'react';
import AppModal from '../Modal';
import Instructions from './Help';
import './Verification.scss';

export const VERIFICATION_STEPS = {
    intents: 1,
    contraints: 2
};

export default class Verification extends React.Component {
    constructor(props) {
        super(props);
        const { utterance, step, constraintIntents, selectedIntents, selectedConstraints } = props;
        this.state = {
            utterance,
            selectedIntents: selectedIntents || [],
            selectedConstraints: selectedConstraints || [],
            step: step || (constraintIntents.length > 0 && selectedIntents && selectedIntents.length > 0 && VERIFICATION_STEPS.contraints) || VERIFICATION_STEPS.intents
        };

        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickBack = this.handleClickBack.bind(this);
        this.handleClickHelp = this.handleClickHelp.bind(this);
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
        const { constraintIntents, minIntents, minConstraints, onClickNext } = this.props;
        const { step } = this.state;
        const valid = this.isValid();
        if (valid && step === VERIFICATION_STEPS.intents && constraintIntents.length > 0) {
            this.setState({ step: VERIFICATION_STEPS.contraints, valid, errorMessage: null })
        } else if (valid) {
            onClickNext();
        } else {
            const errorMessage = step === VERIFICATION_STEPS.intents ?
                `You have to select every tasks at least once. Click back if you need to update your utterance` :
                `You have to select at least ${minConstraints} constraints. Click back if you need to update your utterance`;
            this.setState({ valid, errorMessage });
        }
    }

    handleClickBack(event) {
        event.preventDefault();
        const { constraintIntents } = this.props;
        const { step } = this.state;
        if (step === VERIFICATION_STEPS.contraints || constraintIntents.length > 0) {
            this.setState({ step: VERIFICATION_STEPS.intents })
        } else {
            const { onClickBack } = this.props;
            onClickBack();
        }
    }

    handleClickHelp(event) {
        event.preventDefault();
        this.setState({ showHelp: true });
    }

    isValid() {
        const { intents, minIntents, minConstraints } = this.props;
        const { step, selectedIntents, selectedConstraints } = this.state;
        if (step === VERIFICATION_STEPS.intents) {
            let valid = selectedIntents && selectedIntents.length >= minIntents;
            valid = valid && intents.every((intent, i) => selectedIntents.indexOf(i) >= 0);
            return valid;
        } else if (step === VERIFICATION_STEPS.contraints) {
            let valid = selectedConstraints && selectedConstraints.length >= minConstraints;
            return valid
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
                <span className=""> (You had to use every task. In addition, you are also allowed to use the same one more than once)</span>
                <span className="">:</span>
            </span>
        );
        return instruction;
    }

    render() {
        const { intents, icons, constraintIntents, constraintIcons, onClickHelp } = this.props;
        const { utterance, errorMessage, selectedIntents, selectedConstraints, step, showHelp } = this.state;
        const valid = this.isValid();
        const instruction = this.getInstruction();
        const items = step === VERIFICATION_STEPS.intents ? intents : constraintIntents;
        const intentsCounter = (new Array(intents.length)).fill(0).map((value, index) => selectedIntents.filter(idx => idx === index).length);
        const constraintsCounter = (new Array(constraintIntents.length)).fill(0).map((value, index) => selectedConstraints.filter(idx => idx === index).length);
        const itemsCounter = step === VERIFICATION_STEPS.intents ? intentsCounter : constraintsCounter;
        const itemIcons = step === VERIFICATION_STEPS.intents ? icons : constraintIcons;

        if (showHelp) {
            return (
                <AppModal show={showHelp} onHide={() => this.setState({ showHelp: false })}>
                    <Instructions />
                </AppModal>
            );
        }

        return (
            <div className="verification">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="instructions-text">
                                <h1>Please indicate how many times you used each virtual assitance task in your new sentence</h1>
                                <p>Reminder: In your rewritten sentence you can use some of the tasks multiple times.</p>
                            </div>
                            <div className="user-utterance intent text-center"><p>"{utterance}"</p></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card mt-4">
                                <div className="card-header">
                                    <h3 className="text-center"><span className="intent-icon bi bi-toggles" /></h3>
                                </div>
                                <div className="card-body">
                                    <div className="tasks-verification row mb-3">
                                        <div className="col">
                                            <div className="row mb-3">
                                                <div className="col">
                                                    <div className="bd-callout">
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
                                                                    <div className="intent"><span className={`intent-icon bi bi-${itemIcons[i]}`} />{item}</div>
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
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="mt-4 d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4 gap-3" onClick={this.handleClickBack}><i className="bi bi-chevron-left" /></button>
                                <button type="button" className="btn btn-primary btn-lg px-4" onClick={this.handleClickNext}><i className="bi bi-chevron-right" /></button>
                            </div>
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