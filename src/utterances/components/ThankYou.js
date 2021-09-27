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
            <div className="thank-you">
                <div className="container">
                    <h2 className="text-muted text-center mb-3">Thank You.</h2>
                    <div className="col-md-12 text-center" role="toolbar">
                        <div className="btn-group mr-2" role="group">
                            <button type="Back" className="btn btn-secondary" onClick={this.handleBack}><i className="bi bi-arrow-left pr-1" />Back</button>
                        </div>
                        <div className="btn-group mr-2" role="group">
                            <button type="Submit" className="btn btn-primary pl-4 pr-4" onClick={this.handleSubmit}>Done</button>
                        </div>
                    </div>

                </div>
            </div >
        );
    }
}

export default Selections;