import Utterances from './utterances/Utterances';
import './App.css';

const App = ({ id, context, intents, icons, linkWord, quantifier, maxLength, maxLengthPerIntent }) => {
  return (
    <div className="App">
      <Utterances id={id} context={context} intents={intents} icons={icons} linkWord={linkWord} quantifier={quantifier}
                  maxLength={maxLength} maxLengthPerIntent={maxLengthPerIntent} />
    </div>
  );
}

export default App;
