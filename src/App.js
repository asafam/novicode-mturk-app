import Main from './utterances4/App';
import './App.css';

const App = ({ id, maxUtterances, context, contexts, intents, minIntents, constraints, minConstraints, conjunctionWords, linkWordIdx, minConjunctionWords, quantifiers, quantifierIdx, maxLength, maxLengthPerIntent }) => {
  return (
    <div className="App">
      <Main id={id} context={context} contexts={contexts} maxUtterances={maxUtterances}
            intents={intents} minIntents={minIntents} constraints={constraints} minConstraints={minConstraints}
            conjunctionWords={conjunctionWords} minConjunctionWords={minConjunctionWords} linkWordIdx={linkWordIdx} 
            quantifiers={quantifiers} quantifierIdx={quantifierIdx}
            maxLength={maxLength} maxLengthPerIntent={maxLengthPerIntent} />
    </div>
  );
}

export default App;
