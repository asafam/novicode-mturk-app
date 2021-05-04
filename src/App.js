import Utterances from './utterances/Utterances'

const App = ({id, context, intents, icons, instructions}) => {
  return (
    <div className="App">
      <Utterances id={id} context={context} intents={intents} icons={icons} instructions={instructions} />
    </div>
  );
}

export default App;
