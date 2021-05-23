import Utterances from './utterances/Utterances'

const App = ({ id, context, intents, icons, linkWord, maxLength, maxLengthPerIntent }) => {
  return (
    <div className="App">
      <Utterances id={id} context={context} intents={intents} icons={icons} linkWord={linkWord} 
                  maxLength={maxLength} maxLengthPerIntent={maxLengthPerIntent} />
    </div>
  );
}

export default App;
