import React from 'react';
import Example from '../../components/example/Example';
import './Complex.scss';


export default class Complex extends React.Component {

    getTitle() {
        return "Complex instructions";
    }

    getDescription(minimalDescription=false) {
        return (
            <p>A <span className="bold">Complex Instruction</span> allows you
                to request multiple simple instructions in a <u>single</u> command from
                your virtual assistant. {!minimalDescription && <span>Instructions can be expressed in repetition,
                sequence and conditions.</span>}</p>
        );
    }

    getExamples() {
        return [
            { title: "Text coach Nick that I will be late and ask Lauren if I left my keys in her car", caption: "Sequence" },
            { title: "Is there a Coldplay concert in the park in July, August or September?", caption: "Repitition" },
            { title: "In case it will be hot tomorrow morning, text my sister that I will need to use my car at that time", caption: "Condition" },
            { title: "As I leave now to Shakespeare in the Park let everyone on my invite if I will be late and block my calendar at that time", caption: "Condition, Repitition & Sequence" },
        ]
    }

    render() {
        const { minimalDescription, showExamples, onClickNext, onClickBack } = this.props;
        const title = this.getTitle();
        const description = this.getDescription(minimalDescription);
        const examples = showExamples ? this.getExamples() : [];

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