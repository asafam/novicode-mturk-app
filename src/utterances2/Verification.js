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

        this.handleIntentClick = this.handleIntentClick.bind(this);
        this.handleConstrainClick = this.handleConstrainClick.bind(this);
        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickBack = this.handleClickBack.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.utterance !== this.props.utterance) {
            const { utterance } = this.props;
            this.setState({ utterance });
        }
    }

    handleIntentClick(event) {
        const { onSelectIntent } = this.props;
        const { selectedIntents } = this.state;
        this.toggleIntent(event, selectedIntents);
        this.setState({ selectedIntents, errorMessage: null });
        onSelectIntent && onSelectIntent(selectedIntents);
    }

    handleConstrainClick(event) {
        const { onSelectConstraint } = this.props;
        const { selectedConstraints } = this.state;
        this.toggleIntent(event, selectedConstraints);
        this.setState({ selectedConstraints, errorMessage: null });
        onSelectConstraint && onSelectConstraint(selectedConstraints);
    }

    toggleIntent(event, array) {
        const idx = parseInt(event.currentTarget.getAttribute('data-index'));
        if (array.indexOf(idx) >= 0) {
            array.splice(array.indexOf(idx), 1)
        } else if (!isNaN(idx)) {
            array.push(idx);
        }
    }

    handleClickNext(event) {
        event.preventDefault();
        const { minIntents, minConstraints, onClickNext } =this.props; 
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
        const { minIntents, minConstraints } =this.props;
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
            "Please select the virtual assitance's inquiries you used in as constraints your utterance";
        const minNum = (step === VERIFICATION_STEPS.intents) ? minIntents : minConstraints;
        const instruction = (
            <span>
                <span className="">{text}</span>
                <span className=""> (you had to use at least {minNum})</span>
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
        const selectedItems = step === VERIFICATION_STEPS.intents ? selectedIntents : selectedConstraints;
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
                                                <div key={i}>
                                                    <div className={`form-check pt-1 pb-1 mt-1 mb-1 intent selection ${(selectedItems.indexOf(i) >= 0) ? "selected" : ""}`}
                                                        data-index={i}
                                                        onClick={step === VERIFICATION_STEPS.intents ? this.handleIntentClick : this.handleConstrainClick}>
                                                        <input className="form-check-input" type="checkbox" checked={selectedItems.indexOf(i) >= 0} id={`intent${i}`} data-index={i} onChange={e => {}} />
                                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                                            <h5><span className={`intent-icon bi bi-${itemIcons[i]}`} />{item}</h5>
                                                        </label>
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