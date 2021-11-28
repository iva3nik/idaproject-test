import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import {defaultCard} from '../../utils/constants';

function App() {

  const cardsList = defaultCard;

  return (
    <div className="page">
      <div className="app">
        <Header />
        <Main cards={cardsList}/>
      </div>
    </div>
  );
}

export default App;
