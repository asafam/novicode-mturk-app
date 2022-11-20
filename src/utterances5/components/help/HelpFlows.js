import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./HelpFlows.scss";

export default class HelpFlows extends React.Component {
    getExamples(flow) {
        if (flow.toLowerCase() === "repetition") {
            return [
                {
                    title: "Wake me up every 30 minutes between 1 and 2 am",
                    caption: "Repetition",
                },
                {
                    title: "Is there a Coldplay concert in the park in July, August or September?",
                    caption: "Repetition",
                },
                {
                    title: "Which drugstores that is open right now will I arrive at in 15 minutes if I leave now?",
                    caption: "Repetition",
                },
            ];
        } else if (flow.toLowerCase() === "condition") {
            return [
                {
                    title: "In case it will be hot tomorrow morning, text my sister that I will need to use my car at that time",
                    caption: "Condition",
                },
            ];
        }
    }

    render() {
        const { flow } = this.props;
        const examples = this.getExamples(flow);

        return (
            <div className="instructions">
                <div className="row">
                    <div className="col">
                        <div className="header text-center">
                            <h1 className="text-center title">{flow}</h1>
                            {flow.toLowerCase() === "repetition" && (
                                <p>
                                    Complex commands with repetition express an
                                    efficient way to repeat a simple command
                                    multiple times, possibly with slight
                                    changes. Without the repetition, one should
                                    had requested the simple command multiple
                                    times.
                                </p>
                            )}
                            {flow.toLowerCase() === "condition" && (
                                <p>
                                    Complex commands with condition allows one
                                    to condition the excution of a simple or
                                    complex command in the validity of another
                                    simple or complex command.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="examples">
                        <h5 className="examples-header">Examples:</h5>
                        <div className="card card-block">
                            <Carousel variant="dark" interval="10000">
                                {examples.map((example, i) => (
                                    <Carousel.Item
                                        className="instruction-example positive-example"
                                        key={i}
                                    >
                                        <div className="vertical-center-container">
                                            <div className="vertical-center">
                                                <div className="example-title utterance-text text-center">
                                                    {example["title"]}
                                                </div>
                                                {example["caption"] && (
                                                    <div className="example-caption utterance-text text-center">
                                                        {example["caption"]}
                                                        <span />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
