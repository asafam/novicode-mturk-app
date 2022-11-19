import React from 'react';
import Example from '../../components/example/Example';
import './Simple.scss';


export default class Simple extends React.Component {

    getTitle() {
        return "Simple commands";
    }

    getDescription() {
        return (
            <p>You are given a mobile device with the following apps. You can
                ask your virtual assistant to perform <span className="bold">Simple
                    commands</span> using these apps.</p> 
        );
    }

    getExamples() {
        return [
            { title: "Remind me at 2 pm to call dad", caption: "Reminders" },
            { title: "Send a message to Louise and ask if I left my wallet in her car.", caption: "Messages" },
            { title: "If I leave Shakespeare in the Park at 6 pm, when will I get home?", caption: "Map & Navigation" },
            { title: "Is it going to snow through the spring in upstate new york?", caption: "Weather" },
        ]
    }

    render() {
        const { showExamples, showAppHelp, onClickNext, onClickBack } = this.props;
        const title = this.getTitle();
        const description = this.getDescription();
        const examples = showExamples ? this.getExamples() : null;

        return (
            <div className="simple">
                <div className="container">
                    <Example title={title} description={description} examples={examples} showAppHelp={showAppHelp} onClickNext={onClickNext} onClickBack={onClickBack} />

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