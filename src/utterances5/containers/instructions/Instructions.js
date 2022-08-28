import React from 'react';
import Help from '../../components/help/Help';
import './Instructions.scss';


export default class Instructions extends React.Component {

    render() {
        const { onClickNext, onClickBack } = this.props;

        return (
            <div className="instructions">
                <div className="container">
                    <div className="row">
                        <Help />
                    </div>

                    <div className="row mb-3">
                        <div className="col">
                            <div className="actions bottom mt-4 mb-4 d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4 gap-3" onClick={onClickBack}><i className="bi bi-chevron-left" /></button>
                                <button type="button" className="btn btn-primary btn-lg px-4" onClick={onClickNext}><i className="bi bi-chevron-right" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}