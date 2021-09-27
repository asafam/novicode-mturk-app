import React from 'react';

class Selections extends React.Component {
    constructor(props) {
        super(props);

        const { index, selectionStart, selectionEnd } = props;
        this.state = {
            index,
            selectionStart,
            selectionEnd,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        const { index, selectionStart, selectionEnd } = props;
        return {
            index,
            selectionStart: index === state.index ? state.selectionStart : selectionStart,
            selectionEnd: index === state.index ? state.selectionEnd : selectionEnd
        };
    }

    getSelection() {
        const textarea = document.getElementById("utterance-selection");
        const selectionStart = textarea && textarea.selectionStart;
        const selectionEnd = textarea && textarea.selectionEnd;
        return { selectionStart, selectionEnd };
    }

    setSelectedText(selectionStart, selectionEnd) {
        const textarea = document.getElementById("utterance-selection");
        if (textarea) {
            // textarea.selectionStart = selectionStart;
            // textarea.selectionEnd = selectionEnd;
            textarea.setSelectionRange(selectionStart, selectionEnd);
        }
    }

    handleMouseUp(event) {
        // event.preventDefault();
        const { selectionStart, selectionEnd } = this.getSelection();
        this.setState({ selectionStart, selectionEnd, errorMessage: null });
    }

    handleChange(event) {
        event.preventDefault();
    }

    handleSubmit(event) {
        event.preventDefault();

        const { selectionStart, selectionEnd } = this.state;

        if (selectionStart >= 0 && selectionEnd > selectionStart) {
            const { index } = this.props;
            this.props.onSubmit(index, selectionStart, selectionEnd, true);
        } else {
            this.setState({ selected: true, errorMessage: "Please select the part in your utterance that fits the task." })
        }

    }

    handleBack(event) {
        event.preventDefault();

        this.props.onBack();
    }

    render() {
        const { utterance, intents, index } = this.props;
        const intent = intents[index];
        const { selectionStart, selectionEnd } = this.state;
        // const valid = selected && selectionStart >= 0 && selectionEnd > selectionStart && !errorMessage;
        const disabled = !(selectionStart >= 0 && selectionEnd > selectionStart);
        const selection = utterance.substring(selectionStart, selectionEnd);

        // this.setSelectedText(selectionStart, selectionEnd);

        return (
            <div className="Selections">
                <div className="container">
                    <div className="card text-dark border-primary mb-3">
                        <div className="card-header text-white bg-primary">Select the text that references <strong>"{intent}"</strong>:</div>
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
                            <p className="card-text">{selection}</p>
                        </div>
                    </div>
                    <div className="btn-toolbar" role="toolbar">
                        <div className="btn-group mr-2" role="group">
                            <button type="Back" className="btn btn-secondary" onClick={this.handleBack}><i className="bi bi-arrow-left pr-1" />Back</button>
                        </div>
                        <div className="btn-group mr-2" role="group">
                            <button type="submit" className="btn btn-primary pl-4 pr-4" onClick={this.handleSubmit} disabled={disabled}>Next</button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Selections;