import Utterances from './utterances/Utterances'

const App = ({ id, context, intents, icons, instructions, word, maxLength, maxLengthPerIntent }) => {
  return (
    <div className="App">
      <Utterances id={id} context={context} intents={intents}
        icons={icons} instructions={instructions} word={word}
        maxLength={maxLength} maxLengthPerIntent={maxLengthPerIntent} />
    </div>
  );
}

export default App;
