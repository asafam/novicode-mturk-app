import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Device from "../device/Device";
import { getApps } from "../../data/data.js";
import "./Example.scss";

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            apps: getApps(true, props.excludedApps),
        };
    }

    getIcon(caption) {
        const { apps } = this.state;
        const app = apps.find((a) => a["name"] === caption);
        const icon = app && app["icon"];
        return icon;
    }

    render() {
        const { title, description, examples, showAppHelp } = this.props;
        const { apps } = this.state;
        const hasExamples = Boolean(examples) && examples.length > 0;

        return (
            <div className="example">
                <div className="row">
                    <div className="col">
                        <div className="header text-center">
                            <h1>{title}</h1>
                            <div>{description}</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Device showAppHelp={showAppHelp} apps={apps} />
                    </div>
                    {hasExamples && (
                        <div className="col align-self-center">
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
                                                            {this.getIcon(
                                                                example[
                                                                    "caption"
                                                                ]
                                                            ) && (
                                                                <span
                                                                    className={`bi bi-${this.getIcon(
                                                                        example[
                                                                            "caption"
                                                                        ]
                                                                    )}`}
                                                                />
                                                            )}
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
                    )}
                </div>
            </div>
        );
    }
}
