import App from "./App";
import "./App.scss";

const getData = (attribute, defaultValue = null, options = {}) => {
    const defaultOptions = {
        id: "root",
        trim: true,
        splitDelimiter: null,
        callbackFn: null,
    };
    options = { ...defaultOptions, ...options };

    const { id, delimiter, trim, callbackFn } = options;
    let value = document.getElementById(id).getAttribute(attribute);
    if (value && delimiter) {
        value = value
            .split(delimiter)
            .filter((v) => v.trim().length > 0)
            .map((v) => (trim ? v.trim() : v))
            .map((v) => (callbackFn ? callbackFn(v) : v));
        value = value.length > 0 ? value : null;
    } else if (value && callbackFn) {
        value = callbackFn(value);
    }
    return value || defaultValue;
};

const id = getData("data-id");
const maxUtterances = getData("data-max-utterances")
    ? parseInt(getData("data-max-utterances"))
    : 1;
const minIntents =
    getData("data-min-intents") && parseInt(getData("data-min-intents"));
const conjunctionWords = getData("data-conjunction-words", [], "|", (word) => ({
    display: word.trim().split(":")[0],
    verification: word.trim().split(":")[1].split(","),
}));
const minConjunctionWords =
    getData("min-conjunction-words") &&
    parseInt(getData("min-conjunction-words"));
const quantifiers = getData("data-quantifiers", [], { delimiter: "|" });
const excludedTerms = getData("data-excluded-terms", [], { delimiter: "|" });
const flows = getData("data-flows", [], { delimiter: "|" });
const excludedApps = getData("data-excluded-apps", [], { delimiter: "|" });
const maxLength = parseInt(getData("data-max-length"));
const quantifierIdx = null;
const showExamples = Boolean(getData("data-show-examples", true));
const showAppHelp = Boolean(getData("data-show-app-help", true));

const Root = () => {
    return (
        <div className="utterances">
            <App
                id={id}
                maxUtterances={maxUtterances}
                minIntents={minIntents}
                conjunctionWords={conjunctionWords}
                minConjunctionWords={minConjunctionWords}
                quantifiers={quantifiers}
                quantifierIdx={quantifierIdx}
                excludedApps={excludedApps}
                maxLength={maxLength}
                showExamples={showExamples}
                showAppHelp={showAppHelp}
                flows={flows}
                excludedTerms={excludedTerms}
            />
        </div>
    );
};

export default Root;
