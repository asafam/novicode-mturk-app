import React from 'react';

class PhraseVerification extends React.Component {
    constructor(props) {
        super(props);

        this.handleYes = this.handleYes.bind(this);
        this.handleNo = this.handleNo.bind(this);
    }

    handleYes(event) {
        event.preventDefault();
        this.props.onSubmit();
    }

    handleNo(event) {
        event.preventDefault();
        this.props.onBack();
    }

    render() {
        const { utterance, linkWord } = this.props;
        return (
            <div className="phrase-verification">
                <div className="container">
                    <p className="text-center text-muted rounded border p-3 mb-3">{utterance}</p>
                    <h5 className="pr-3 pl-3 mb-3">Did you link the tasks in your request using the word <span className="pl-1 pr-1" style={{"fontSize": "2.2rem"}}>{linkWord}</span>?</h5>
                    <div className="col-md-12 text-center" role="toolbar">
                        <div className="btn-group mr-2" role="group">
                            <button type="Submit" className="btn btn-success" onClick={this.handleYes}>Yes</button>
                        </div>
                        <div className="btn-group mr-2" role="group">
                            <button type="Back" className="btn btn-danger" onClick={this.handleNo}>No</button>
                        </div>
                    </div>

                </div>
            </div >
        );
    }
}

export default PhraseVerification;