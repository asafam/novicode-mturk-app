const UtteranceInput = ({
    utterance,
    valid,
    utteranceLimit,
    errorMessage,
    onInputChange,
    onInputSubmit
}) => {
    return (
        <div className="row utterance-input">
            <div className="container">
                <div className="card mt-4">
                    <div className="card-header">
                        <h3 className="text-center">
                            <span className="intent-icon bi bi-keyboard" />
                            Write here
                        </h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <form
                                    className="g-3 needs-validation pt-1"
                                    onSubmit={onInputSubmit}
                                    noValidate
                                >
                                    <div className="has-validation">
                                        <label
                                            className="form-label"
                                            style={{
                                                display: 'none'
                                            }}
                                        >
                                            Write a complex command
                                        </label>
                                        <textarea
                                            className={`input-textarea utterance-text form-control mb-3 ${
                                                (valid === true &&
                                                    'is-valid') ||
                                                (valid === false &&
                                                    'is-invalid')
                                            }`}
                                            rows="5"
                                            value={utterance}
                                            type="text"
                                            id="utterance"
                                            aria-describedby="help"
                                            onChange={onInputChange}
                                            placeholder="Type your complex command here..."
                                            required
                                        ></textarea>
                                        <div className="p-1 m-1">
                                            <span
                                                className={
                                                    (utterance || '').length >
                                                    utteranceLimit
                                                        ? 'text-danger'
                                                        : ''
                                                }
                                            >
                                                {(utterance || '').length}
                                            </span>{' '}
                                            / {utteranceLimit}
                                        </div>
                                        <div className="invalid-feedback">
                                            {errorMessage}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="note">
                        Please make sure the Complex command you write flows
                        naturally and that the different parts are relevant to
                        one another.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UtteranceInput;
