import React from 'react';


class Form extends React.Component {
  constructor(props) {
    super(props);

    const { utterance } = props;
    const [words, wordsIndex] = this.getWords(props);
    this.state = {
      utterance,
      words,
      wordsIndex
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.utterance !== this.props.utterance) {
      const { utterance } = this.props;
      this.setState({ utterance });
    }

    if (this.props.strategy !== 'batch' && prevProps.index !== this.props.index) {
      const [words, wordsIndex] = this.getWords(this.props);
      this.setState({ words, wordsIndex });
    }
  }

  getWords(props) {
    const { strategy, index, conjunctionWords, linkWordIdx, quantifiers, quantifierIdx } = props;
    let words = (strategy === 'batch' || index >= linkWordIdx) ? conjunctionWords : [];
    words = words.concat((strategy === 'batch' || index >= quantifierIdx) ? quantifiers : []);
    words = words.filter(w => w && w.length > 0);
    const wordsIndex = [(strategy === 'batch' || index >= linkWordIdx) && linkWordIdx, (strategy === 'batch' || index >= quantifierIdx) && quantifierIdx].filter(n => n !== false);
    return [words, wordsIndex];
  }

  handleChange(event) {
    const { utteranceLimit } = this.props;
    const utterance = event.target.value;
    const newUtterance = utterance.length <= utteranceLimit ? utterance : (this.state.utterance || "");
    this.setState({ utterance: newUtterance });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { utterance } = this.state;
    const valid = this.isUtteranceValid();
    if (valid) {
      this.props.onSubmit(utterance);
    } else {
      this.setState({ valid });
    }
  }

  handleBack(event) {
    event.preventDefault();
    this.setState({ errorMessage: null });
    this.props.onBack();
  }

  isUtteranceValid() {
    const { intents, strategy } = this.props;
    const { utterance, words } = this.state;
    const mandatoryWordsMissing = (strategy !== 'batch')
      ? (words && words.length > 0 && words.filter(w => utterance.toLowerCase().indexOf(`${w.toLowerCase()}`) === -1)) || []
      : words.filter(w => utterance.toLowerCase().indexOf(`${w.toLowerCase()}`) !== -1).length < 1 ? words : [];

    if (!utterance || utterance.length === 0) {
      return false;
    } else if (utterance.split(" ").length <= 2) {
      this.setState({ errorMessage: <span>Please be more creative.</span> })
      return false;
    } else if (intents.some(intent => utterance.toLowerCase().indexOf(intent.toLowerCase()) >= 0)) {
      this.setState({ errorMessage: <span>Please write a valid request in plain English.</span> })
      return false;
    } else if (mandatoryWordsMissing.length > 0) {
      this.setState({ errorMessage: <span>Please write a valid request that includes any of the words: <strong>{mandatoryWordsMissing.join(", ")}</strong>.</span> })
      return false;
    } else if ((utterance.indexOf("?") >= 0 && utterance.indexOf("?") < utterance.length * 0.5) || utterance.trim().split("?").filter(s => s.length > 0).length > 1) {
      this.setState({ errorMessage: <span>Please phrase the utterance as a <strong>single</strong> request (and not in multiple phrases).</span> })
      return false;
    } else {
      return true;
    }
  }

  render() {
    const { context, intents, icons, minIntents, index, utteranceLimit, strategy } = this.props;
    const { words, wordsIndex, utterance, valid, errorMessage } = this.state;
    const disabled = !(utterance && utterance.length > 0);
    const instruction = strategy === 'batch' || index === 0 ? "Write your request" : "Edit your request";
    const description = strategy === 'batch' || index === 0 ? "Write a request to your virtual assistance" : "Edit your request to your virtual assistance";

    return (
      <div className="form">
        <div className="container ml-auto mr-auto card border-warning bg-light rounded p-3" style={{ "marginTop": "50px", "marginBottom": "50px", "width": "100%", "borderColor": "#ffc107" }}>

          <div className="row mb-3">
            <div className="col">
              <div className="bd-callout bd-callout-yellow1">
                <p className="text-muted">Context:</p>
                <h5>{context}</h5>
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <div className="bd-callout bd-callout-yellow2">
                <p>
                  <span className="text-muted">Tasks your virtual assistance can do for you</span>
                  {strategy === 'batch' &&
                    <span className="text-danger"> (pick as many as possible and <u style={{ "fontSize": "1.2rem" }}>at least {minIntents}</u>)</span>
                  }
                  <span className="text-muted">:</span>
                </p>
                {intents.map((intent, i) => (
                  <h5 className={strategy === 'batch' || i === index ? "text-in" : (i < index ? "text-out" : "text-light-grey")} key={i}><span className={`bi bi-${icons[i]}`} style={{ "paddingRight": "15px" }} />{intent}</h5>
                ))}
              </div>
            </div>
          </div>

          {(words && words.length > 0) &&
            <div className="row mb-3">
              <div className="col">
                <div className="bd-callout bd-callout-yellow2">
                  <h6 className="text-muted">Please use as many of the following word{words.length > 1 ? "s" : ""} in your request.</h6>
                  <div className="pl-1 pr-1">{words && words.map((word, i) =>
                    (<span key={i} style={{ "fontSize": (strategy !== 'batch' && wordsIndex[i] === index) ? "2rem" : "1.3rem" }}>{word + (i < words.length - 1 ? ", " : "")}</span>)
                  )}</div>
                </div>
              </div>
            </div>
          }
        </div>

        <div className="container">
          <h2>{instruction}</h2>

          <form className="g-3 needs-validation" onSubmit={this.handleSubmit} noValidate>
            <div className="has-validation mb-3">
              <label className="form-label" style={{ "display": "none" }}>{description}</label>
              <textarea className={`form-control ${(valid === true && "is-valid") || (valid === false && "is-invalid")}`}
                rows="5" value={utterance} type="text" id="utterance" aria-describedby="help"
                onChange={this.handleChange} placeholder="Type your request here..." required>
              </textarea>
              <div className={`p-1 m-1 ${(utterance || "").length >= utteranceLimit ? 'text-red' : ''}`}>
                {(utterance || "").length} / {utteranceLimit}
              </div>
              <div className="invalid-feedback">{errorMessage}</div>
              <div id="help" className="form-text text-muted">Don't forget to use <strong>all tasks</strong> in your request</div>
            </div>
            <div className="btn-toolbar mb-3" role="toolbar">
              {strategy !== 'batch' && index > 0 &&
                <div className="btn-group pl-2 pr-2" role="group">
                  <button type="Back" className="btn btn-secondary" onClick={this.handleBack}><i className="bi bi-arrow-left pr-1" />Back</button>
                </div>
              }
              <div className={`btn-group  ${strategy !== 'batch' && index !== 0 ? "mr-2" : ""}`} role="group">
                <button type="Submit" className="btn btn-primary pl-4 pr-4" disabled={disabled}>{strategy === 'batch' || index === intents.length - 1 ? "Verify" : "Next: Update request with another task"}</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default Form;