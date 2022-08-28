import React from 'react';
import Example from '../../components/example/Example';
import './Complex.scss';


export default class Complex extends React.Component {

    getTitle() {
        return "Complex instructions";
    }

    getDescription() {
        return (
            <p>A <span className="bold">Complex Instruction</span> allows you
                to request multiple simple instructions in a single command from
                your virtual assistant. Instructions can be expressed in repetition,
                sequence and conditions.</p>
        );
    }

    getExamples() {
        return [
            { title: "Text coach Nick that I will be late and ask Lauren if I left my keys in her car" },
            { title: "Is there a Coldplay concert in the park in July, August or September?" },
            { title: "Check my mail and my messages for any unread message from Dad from today" },
            { title: "Show me directions to the nearest pharmacy that is open now" },
        ]
    }

    render() {
        const { onClickNext, onClickBack } = this.props;
        const title = this.getTitle();
        const description = this.getDescription();
        const examples = this.getExamples();

        return (
            <div className="simple">
                <div className="container">
                    <Example title={title} description={description} examples={examples} onClickNext={onClickNext} onClickBack={onClickBack} />

                    <div className="row mb-3">
                        <div className="col">
                            <div className="actions bottom mt-4 mb-4 d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4 gap-3" onClick={onClickBack}><i className="bi bi-chevron-left" /></button>
                                <button type="button" className="btn btn-primary btn-lg px-4" onClick={onClickNext}><i className="bi bi-chevron-right" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}