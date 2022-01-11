import Main from './utterances3/App';
import './App.css';

const App = ({ id, context, contexts, intents, intentIcons, minIntents, constraintIntents, constraintIcons, minConstraints, conjunctionWords, linkWordIdx, minConjunctionWords, quantifiers, quantifierIdx, maxLength, maxLengthPerIntent }) => {
  return (
    <div className="App">
      <Main id={id} context={context} contexts={contexts} 
            intents={intents} intentIcons={intentIcons} minIntents={minIntents}
            constraintIntents={constraintIntents} constraintIcons={constraintIcons} minConstraints={minConstraints}
            conjunctionWords={conjunctionWords} minConjunctionWords={minConjunctionWords} linkWordIdx={linkWordIdx} 
            quantifiers={quantifiers} quantifierIdx={quantifierIdx}
            maxLength={maxLength} maxLengthPerIntent={maxLengthPerIntent} />
    </div>
  );
}

export default App;
