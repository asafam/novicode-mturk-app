import React from 'react';


export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goodUtterance1: "If it will rain tomorrow then remind me tonight to bring an umbrella and text John to bring an umbrella",
            badUtterance1: "If it will rain tomorrow then remind me tonight to bring an umbrella",
            badUtterance2: "Remind me tonight to bring an umbrella. Text John I will meet him at the bar",
            badUtterance3: "Hello, how are you? Remind me to bring an umbrella",
            badUtterance4: "It will rain tomorrow and John want to go to the rally, text him the time to be there",
            badUtterance5: "If it will rain send a message",
            intents: ["Delete something on your calendar", "Send a text message to anyone on your contact list", "Create a reminder"],
            selectedIntents: [1, 2],
            minIntents: 1,
            icons: ["calendar", "chat", "bell"],
            constraintIntents: ["Inquire on the duration of driving to somewhere", "Check weather conditions", "Check your text messages"],
            selectedConstraints: [1],
            minConstraints: 1,
            constraintIcons: ["map", "sun", "chat"],
            words: ["if", "provided that", "because"],
            selectedWords: [0],
            context: "office"
        };
    }

    render() {
        const { goodUtterance1, badUtterance1, badUtterance2, badUtterance3, badUtterance4, badUtterance5, intents, minIntents, icons, constraintIntents,
            minConstraints, constraintIcons, words, context, selectedConstraints, selectedIntents, selectedWords } = this.state;

        return (
            <div className="example utterance">
                <div className="container">

                    <div className="row mb-5">
                        <div className="col">
                            <div className="bd-callout">
                                <p>
                                    <span className="">Write an utterance that uses {minIntents} or more of the following tasks your virtual assitance can do for you</span>
                                    <span className="text-muted"> (use as many as possible)</span>
                                    <span className="">:</span>
                                </p>
                                {intents.map((intent, i) => (
                                    <h5 key={i} className={`intent selection ${selectedIntents.indexOf(i) !== -1 ? "selected" : ""}`} data-idx={i}>
                                        <span className={`intent-icon bi bi-${icons[i]}`} />
                                        <span>{intent}</span>
                                    </h5>
                                ))}
                            </div>
                        </div>
                        <div className="col help">
                            <div>
                                <p>1. We will present a group of tasks for you to choose from. In your utterance, these will be the tasks you will order your virtual assistance to do for you</p>
                                <p className="hint text-muted">We selected two for the example</p>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col">
                            <div className="bd-callout">
                                <p>
                                    <span className="">In your utterance, constraint the tasks you previously choosed (any or all) with {minConstraints} or more queries your virtual assitance can do for you</span>
                                    <span className="text-muted"> (use as many as possible)</span>
                                    <span className="">:</span>
                                </p>
                                {constraintIntents.map((intent, i) => (
                                    <h5 key={i} className={`intent selection ${selectedConstraints.indexOf(i) !== -1 ? "selected" : ""}`} data-idx={i}>
                                        <span className={`intent-icon bi bi-${constraintIcons[i]}`} />
                                        <span>{intent}</span>
                                    </h5>
                                ))}
                            </div>
                        </div>
                        <div className="col help">
                            <div>
                                <p>2. We will sometimes ask you to constraint the execution of the tasks (all or part) you selected. Choose the queries that will help you virtual assistance to decide whether to excute the tasks or not.</p>
                                <p className="hint text-muted">We selected one for the example</p>
                            </div>
                        </div>
                    </div>

                    {(words && words.length > 0) &&
                        <div className="row mb-5">
                            <div className="col">
                                <div className="bd-callout bd-callout-yellow2">
                                    <p>
                                        <span className="text-muted">Please use at least 1 of the following word{words.length > 1 ? "s" : ""} in your utterance:</span>
                                    </p>
                                    <div className="pl-1 pr-1">{words && words.map((word, i) =>
                                        (<span className={`word selection ${selectedWords.indexOf(i) !== -1 ? "selected" : ""}`} key={i}>{word}</span>)
                                    )}</div>
                                </div>
                            </div>
                            <div className="col help">
                                <div>
                                    <p>3. To help you write rich utterances we ask you to use any of the given words</p>
                                    <p className="hint text-muted">We selected one for the example</p>
                                </div>
                            </div>
                        </div>
                    }

                    <div className="row mb-5">
                        <div className="col">
                            <div className="bd-callout context">
                                <p className="text-muted">To help your creativity, we suggest a context for your utterance (optional):</p>
                                <h5>{context}</h5>
                            </div>
                        </div>
                        <div className="col help"><p>4. In your utternace, you can use the suggested context or ignore it if you think of a better one</p></div>
                    </div>

                    <div className="row mb-5">
                        <div className="col">
                            <h4 className="text-center">Writing the utterance</h4>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col">
                            <textarea className="form-control is-valid"
                                rows="5" value={goodUtterance1} type="text" id="utterance" aria-describedby="help">
                            </textarea>
                        </div>
                        <div className="col help"><p>Good example: this utterance uses 1 constraint to condition the exection of 2 of the selected tasks, while including mandatory word.</p></div>
                    </div>

                    <div className="row mb-5">
                        <div className="col">
                            <textarea className="form-control is-invalid"
                                rows="5" value={badUtterance1} type="text" id="utterance" aria-describedby="help">
                            </textarea>
                        </div>
                        <div className="col help"><p>Bad example: This example just uses a single task (a minimum of 2 is required).</p></div>
                    </div>

                    <div className="row mb-5">
                        <div className="col">
                            <textarea className="form-control is-invalid"
                                rows="5" value={badUtterance2} type="text" id="utterance" aria-describedby="help">
                            </textarea>
                        </div>
                        <div className="col help"><p>Bad example: Does not use any of the constraints, and does not use any of the mandatory words (minimum of 1 is required).</p></div>
                    </div>

                    <div className="row mb-5">
                        <div className="col">
                            <textarea className="form-control is-invalid"
                                rows="5" value={badUtterance3} type="text" id="utterance" aria-describedby="help">
                            </textarea>
                        </div>
                        <div className="col help"><p>Bad example: Avoid greetings and politeness.</p></div>
                    </div>

                    <div className="row mb-5">
                        <div className="col">
                            <textarea className="form-control is-invalid"
                                rows="5" value={badUtterance4} type="text" id="utterance" aria-describedby="help">
                            </textarea>
                        </div>
                        <div className="col help"><p>Bad example: Avoid irrelevant information - updating the virtual assistance on the weather and your friend's intensions (going to the rally) is irrelevant. Be specific and straight to the point! </p></div>
                    </div>

                    <div className="row mb-5">
                        <div className="col">
                            <textarea className="form-control is-invalid"
                                rows="5" value={badUtterance5} type="text" id="utterance" aria-describedby="help">
                            </textarea>
                        </div>
                        <div className="col help"><p>Bad example: Missing required information. Don't expect your virtual assistance to guess. When will it rain? Who should it send a message and what message? </p></div>
                    </div>
                </div>

            </div>
        );
    }
}