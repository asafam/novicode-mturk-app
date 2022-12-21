import React from "react";
import AppModal from "../Modal";
import Command from "../../components/command/Command";
import HelpFlows from "../../components/help/HelpFlows";
import "./Complex.scss";

export default class Complex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showHelpFlows: false,
        };

        this.handleClickHelpFlows = this.handleClickHelpFlows.bind(this);
    }

    getTitle() {
        return "Complex commands";
    }

    getDescription(minimalDescription = false) {
        return (
            <p>
                A <span className="bold">Complex command</span> allows you to
                request multiple simple commands in a <u>single</u> command from
                your virtual assistant.{" "}
                {!minimalDescription && (
                    <span>
                        Commands can be expressed in{" "}
                        <span
                            className="flow"
                            onClick={this.handleClickHelpFlows}
                            data-id="multiplicity"
                        >
                            multiplicity
                        </span>
                        ,{" "}
                        <span
                            className="flow"
                            onClick={this.handleClickHelpFlows}
                            data-id="sequence"
                        >
                            sequence
                        </span>{" "}
                        and
                        <span
                            className="flow"
                            onClick={this.handleClickHelpFlows}
                            data-id="condition"
                        >
                            conditions
                        </span>
                        .
                    </span>
                )}
            </p>
        );
    }

    getExamples() {
        return [
            {
                title: "Text coach Nick that I will be late and ask Lauren if I left my keys in her car",
                caption: "Sequence",
            },
            {
                title: "Is there a Coldplay concert in the park in July, August or September?",
                caption: "Multiplicity",
            },
            {
                title: "In case it will be hot tomorrow morning, text my sister that I will need to use my car at that time",
                caption: "Condition",
            },
            {
                title: "As I leave now to Shakespeare in the Park let everyone on my friends list know if I will be late and block my calendar at that time",
                caption: "Condition, Multiplicity & Sequence",
            },
        ];
    }

    handleClickHelpFlows(event) {
        event.preventDefault();
        const selectedFlow = event.target.getAttribute("data-id");
        this.setState({ showHelpFlows: true, selectedFlow });
    }

    render() {
        const {
            minimalDescription,
            showExamples,
            showAppHelp,
            excludedApps,
            onClickNext,
            onClickBack,
        } = this.props;
        const { showHelpFlows, selectedFlow } = this.state;
        const title = this.getTitle();
        const description = this.getDescription(minimalDescription);
        const examples = showExamples ? this.getExamples() : [];

        if (showHelpFlows) {
            return (
                <AppModal
                    show={showHelpFlows}
                    onHide={() => this.setState({ showHelpFlows: false })}
                >
                    <HelpFlows flow={selectedFlow} />
                </AppModal>
            );
        }

        return (
            <div className="complex">
                <div className="container">
                    <Command
                        title={title}
                        description={description}
                        examples={examples}
                        excludedApps={excludedApps}
                        showAppHelp={showAppHelp}
                        onClickNext={onClickNext}
                        onClickBack={onClickBack}
                    />

                    <div className="row mb-3">
                        <div className="col">
                            <div className="actions bottom mt-4 mb-4 d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary btn-lg px-4 gap-3"
                                    onClick={onClickBack}
                                >
                                    <i className="bi bi-chevron-left" />
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg px-4"
                                    onClick={onClickNext}
                                >
                                    <i className="bi bi-chevron-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
