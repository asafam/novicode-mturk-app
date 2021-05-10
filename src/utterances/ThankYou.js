import React from 'react';

class Selections extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.onSubmit();
    }

    handleBack(event) {
        event.preventDefault();
        this.props.onBack();
    }

    render() {
        return (
            <div className="thank-yop">
                <div className="container">
                    <h2 className="text-muted text-center mb-3">Thank You.</h2>
                    <div className="col-md-12 text-center" role="toolbar">
                        <div className="btn-group mr-2" role="group">
                            <button type="Submit" className="btn btn-primary" onClick={this.handleSubmit}>Done</button>
                        </div>
                        <div className="btn-group mr-2" role="group">
                            <button type="Back" className="btn btn-secondary" onClick={this.handleBack}>Back</button>
                        </div>
                    </div>

                </div>
            </div >
        );
    }
}

export default Selections;