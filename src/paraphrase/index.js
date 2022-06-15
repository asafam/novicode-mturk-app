import App from './App';
import './App.scss';


const getData = (attribute, id = 'root') => {
  const value = document.getElementById(id).getAttribute(attribute);
  return value && !value.startsWith("${") ? value : null;
};

const id = getData('data-id');
const utterance = getData('data-utterance') && getData('data-utterance').replace('__COMMA__', ',');
const blacklist = getData('data-blacklist') ? getData('data-blacklist').split(':').map(word => word.trim()) : ["<any word is valid>"]
const maxLength = (getData('data-max-length') && parseInt(getData('data-max-length'))) || 180;
const minLength = (getData('data-min-length') && parseInt(getData('data-max-length'))) || 10;

const Root = () => {
  return (
    <div className="utterances">
      <App id={id} utterance={utterance} blacklist={blacklist} maxLength={maxLength} minLength={minLength} />
    </div>
  );
}

export default Root;
