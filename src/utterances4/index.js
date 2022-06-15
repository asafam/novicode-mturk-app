import App from './App';
import './App.css';


const getData = (attribute, id = 'root') => {
  const value = document.getElementById(id).getAttribute(attribute);
  return value && !value.startsWith("${") ? value : null;
};

const id = getData('data-id');
const maxUtterances = getData('data-max-utterances') ? parseInt(getData('data-max-utterances')) : 1;
const context = getData('data-context');
const contexts = getData('data-contexts') ? getData('data-contexts').split("|").map(context => context.trim()) : [];
const intentNames = getData('data-intents') ? getData('data-intents').split("|").filter(x => x && x.length > 0).map(intent => intent.trim()) : [];
const intentIcons = getData('data-intent-icons') ? getData('data-intent-icons').split("|").filter(x => x && x.length > 0).map(icon => icon.trim()) : [];
const minIntents = getData('data-min-intents') && parseInt(getData('data-min-intents'));
const constraintNames = getData('data-constraints') ? getData('data-constraints').split("|").filter(x => x && x.length > 0).map(intent => intent.trim()) : [];
const constraintIcons = getData('data-constraint-icons') ? getData('data-constraint-icons').split("|").filter(x => x && x.length > 0).map(icon => icon.trim()) : [];
const minConstraints = getData('data-min-constraints') && parseInt(getData('data-min-constraints'));
const conjunctionWords = getData('data-conjunction-words') ? getData('data-conjunction-words').split("|").map(word => ({ display: word.trim().split(":")[0], verification: word.trim().split(":")[1].split(",") })) : [];
const minConjunctionWords = getData('min-conjunction-words') && parseInt(getData('min-conjunction-words'));
const quantifiers = getData('data-quantifiers') ? getData('data-quantifiers').split("|").map(icon => icon.trim()) : [];
const maxLength = getData('data-max-length') && parseInt(getData('data-max-length'));
const maxLengthPerIntent = getData('data-max-length-per-intent') && parseInt(getData('data-max-length-per-intent'));
const intents = [
  { name: 'General knowledge', icon: 'google' }, { name: 'Weather', icon: 'cloud-sun' }, { name: 'Reminders', icon: 'bookmark' },
  { name: 'Calendar', icon: 'calendar-date' }, { name: 'Events & Tickets', icon: 'ticket-perforated' }, { name: 'Mail', icon: 'envelope' },
  { name: 'Messages', icon: 'chat' }, { name: 'Map & Navigation', icon: 'truck' }, { name: 'Shopping', icon: 'cart' },
  { name: 'Music & Podcasts', icon: 'music-note-beamed' }, { name: 'Smart Home', icon: 'house' }, { name: 'Health & Nutrition', icon: 'heart-pulse' }
];
const constraints = [];
const linkWordIdx = null;
const quantifierIdx = null;

const Root = () => {
  return (
    <div className="utterances">
      <App id={id} context={context} contexts={contexts} maxUtterances={maxUtterances}
        intents={intents} minIntents={minIntents} constraints={constraints} minConstraints={minConstraints}
        conjunctionWords={conjunctionWords} minConjunctionWords={minConjunctionWords} linkWordIdx={linkWordIdx}
        quantifiers={quantifiers} quantifierIdx={quantifierIdx}
        maxLength={maxLength} maxLengthPerIntent={maxLengthPerIntent} />
    </div>
  );
}

export default Root;
