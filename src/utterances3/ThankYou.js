import React from 'react';

class Selections extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClickBack = this.handleClickBack.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit();
    }

    handleClickBack(event) {
        event.preventDefault();
        this.props.onClickBack();
    }

    render() {
        return (
            <div className="thank-you">
                <div className="container">
                    <h2 className="text-muted text-center mb-3">Thank You.</h2>
                    <div className="mt-4 d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4 gap-3" onClick={this.handleClickBack}><i className="bi bi-chevron-left" /></button>
                        <button type="button" className="btn btn-primary btn-lg px-4" onClick={this.handleSubmit}>Finish</button>
                    </div>

                </div>
            </div >
        );
    }
}

export default Selections;