import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      utterance: props.utterance
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ utterance: event.target.value });
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

  isUtteranceValid() {
    const { intents, word } = this.props;
    const { utterance } = this.state;

    if (!utterance || utterance.length === 0) {
      return false;
    } else if (utterance.split(" ").length <= 4) {
      this.setState({ errorMessage: <span>Please write a valid request that includes all the tasks.</span> })
      return false;
    } else if (intents.some(intent => utterance.toLowerCase().indexOf(intent.toLowerCase()) >= 0)) {
      this.setState({ errorMessage: <span>Please write a valid request in plain English.</span> })
      return false;
    } else if (word && word.length > 0 && utterance.toLowerCase().indexOf(` ${word.toLowerCase()}`) === -1) {
      this.setState({ errorMessage: <span>Please write a valid request that includes the mandatory word <strong>{word}</strong>.</span> })
      return false;
    } else {
      return true;
    }
  }

  render() {
    const { context, intents, icons , word} = this.props;
    const { utterance, valid, errorMessage } = this.state;
    const disabled = !(utterance && utterance.length > 0);

    return (
      <div className="form">
        <div className="container ml-auto mr-auto card border-warning bg-light rounded p-3" style={{ "marginTop": "50px", "marginBottom": "50px", "width": "100%", "borderColor": "#ffc107" }}>
          <div className="row mb-3">
            <div className="col">
              <div className="bd-callout bd-callout-yellow1">
                <p className="text-muted">Context:</p>
                <h4>{context}</h4>
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <div className="bd-callout bd-callout-yellow2">
                <p className="text-muted">Tasks your assistance can do for you:</p>
                {intents.map((intent, i) => (
                  <h4 key={i}><span className={`bi bi-${icons[i]}`} style={{ "paddingRight": "15px" }} />{intent}</h4>
                ))}
              </div>
            </div>
          </div>

          {word && word.length > 0 &&
            <div className="row mb-3">
              <div className="col">
                <div className="bd-callout bd-callout-yellow2">
                <h6>Please include the word <span className="pl-1 pr-1" style={{"fontSize": "2rem"}}>{word}</span> to conect the tasks in your request.</h6>
                </div>
              </div>
            </div>
          }
        </div>

        <div className="container">
          <h2>Submit your request</h2>

          <form className="g-3 needs-validation" onSubmit={this.handleSubmit} noValidate>
            <div className="has-validation mb-3">
              <label className="form-label">Write a request to your administrative assistance</label>
              <textarea className={`form-control ${(valid === true && "is-valid") || (valid === false && "is-invalid")}`}
                rows="5" value={utterance} type="text" id="utterance" aria-describedby="help"
                onChange={this.handleChange} placeholder="Type your request here..." required>
              </textarea>
              <div id="help" className="form-text text-muted">Remember to use <strong>all the tasks</strong> in your request</div>
              <div className="invalid-feedback">
                {errorMessage}
              </div>
            </div>
            <div className="btn-toolbar" role="toolbar">
              <div className="btn-group mr-2" role="group">
                <button type="submit" className="btn btn-primary" disabled={disabled}>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;