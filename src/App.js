import Utterances from './utterances/Utterances';
import './App.css';

const App = ({ id, context, intents, icons, linkWord, linkWordIdx, quantifier, quantifierIdx, maxLength, maxLengthPerIntent }) => {
  return (
    <div className="App">
      <Utterances id={id} context={context} intents={intents} icons={icons} 
                  linkWord={linkWord} linkWordIdx={linkWordIdx} 
                  quantifier={quantifier} quantifierIdx={quantifierIdx}
                  maxLength={maxLength} maxLengthPerIntent={maxLengthPerIntent} />
    </div>
  );
}

export default App;
