import App from "./App";
import "./App.scss";

const getData = (attribute, defaultValue = null, id = "root") => {
    const value = document.getElementById(id).getAttribute(attribute);
    return value && !value.startsWith("${") ? value : defaultValue;
};

const id = getData("data-id");
const maxUtterances = getData("data-max-utterances")
    ? parseInt(getData("data-max-utterances"))
    : 1;
const minIntents =
    getData("data-min-intents") && parseInt(getData("data-min-intents"));
const conjunctionWords = getData("data-conjunction-words")
    ? getData("data-conjunction-words")
          .split("|")
          .map((word) => ({
              display: word.trim().split(":")[0],
              verification: word.trim().split(":")[1].split(","),
          }))
    : [];
const minConjunctionWords =
    getData("min-conjunction-words") &&
    parseInt(getData("min-conjunction-words"));
const quantifiers = getData("data-quantifiers")
    ? getData("data-quantifiers")
          .split("|")
          .map((icon) => icon.trim())
    : [];
const excludedTerms = getData("data-excluded-terms", "").split("|");
const flows = getData("data-flows", "").split("|");
const excludedApps = getData("data-excluded-apps", "").split("|");
const maxLength =
    getData("data-max-length") && parseInt(getData("data-max-length"));
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
