import Utterances from './utterances/Utterances'

const App = ({id, context, intents, icons, instructions, word}) => {
  return (
    <div className="App">
      <Utterances id={id} context={context} intents={intents} icons={icons} instructions={instructions} word={word} />
    </div>
  );
}

export default App;
