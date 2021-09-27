import Main from './utterances2/App';
import './App.css';

const App = ({ id, context, contexts, intents, icons, minIntents, constraintIntents, constraintIcons, minConstraints, linkWords, linkWordIdx, quantifiers, quantifierIdx, maxLength, maxLengthPerIntent }) => {
  return (
    <div className="App">
      <Main id={id} context={context} contexts={contexts} 
            intents={intents} icons={icons} minIntents={minIntents}
            constraintIntents={constraintIntents} constraintIcons={constraintIcons} minConstraints={minConstraints}
            linkWords={linkWords} linkWordIdx={linkWordIdx} 
            quantifiers={quantifiers} quantifierIdx={quantifierIdx}
            maxLength={maxLength} maxLengthPerIntent={maxLengthPerIntent} />
    </div>
  );
}

export default App;
