import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./HelpFlows.scss";

export default class HelpFlows extends React.Component {
    getExamples(flow) {
        if (flow.toLowerCase() === "multiplicity") {
            return [
                {
                    title: "Wake me up every 30 minutes between 1 and 2 am",
                    caption: "Multiplicity",
                },
                {
                    title: "Is there a Coldplay concert in the park in July, August or September?",
                    caption: "Multiplicity",
                },
                {
                    title: "Which drugstores that is open right now will I arrive at in 15 minutes if I leave now?",
                    caption: "Multiplicity",
                },
            ];
        } else if (flow.toLowerCase() === "condition") {
            return [
                {
                    title: "In case it will be hot tomorrow morning, text my sister that I will need to use my car at that time",
                    caption: "Condition",
                },
            ];
        } else if (flow.toLowerCase() === "sequence") {
            return [
                {
                    title: "Text coach Nick that I will be late and ask Lauren if I left my keys in her car",
                    caption: "Sequence",
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
                            {flow.toLowerCase() === "multiplicity" && (
                                <div>
                                    <p>
                                        Complex commands with with multiplicity
                                        express an efficient way to repeat a
                                        simple command multiple times, possibly
                                        with slight changes. Without that, one
                                        should had requested the simple command
                                        multiple times.
                                    </p>
                                </div>
                            )}
                            {flow.toLowerCase() === "condition" && (
                                <div>
                                    <p>
                                        Complex commands with condition allows
                                        one to condition the excution of a
                                        simple or complex command in the
                                        validity of another simple or complex
                                        command.
                                    </p>
                                </div>
                            )}
                            {flow.toLowerCase() === "sequence" && (
                                <div>
                                    <p>
                                        Complex commands with sequences allows
                                        one to request multiple commands in an
                                        order.
                                    </p>
                                </div>
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
