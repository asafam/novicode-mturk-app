import Utterances from './utterances/Utterances';
import './App.css';

const App = ({ id, context, intents, icons, minIntents, strategy, linkWords, linkWordIdx, quantifiers, quantifierIdx, maxLength, maxLengthPerIntent }) => {
  return (
    <div className="App">
      <Utterances id={id} context={context} intents={intents} icons={icons} 
                  minIntents={minIntents} strategy={strategy}
                  linkWords={linkWords} linkWordIdx={linkWordIdx} 
                  quantifiers={quantifiers} quantifierIdx={quantifierIdx}
                  maxLength={maxLength} maxLengthPerIntent={maxLengthPerIntent} />
    </div>
  );
}

export default App;
