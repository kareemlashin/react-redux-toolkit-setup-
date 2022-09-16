import { Provider } from 'react-redux';
import './App.css';
import Base from './components/Base/Base';
import Secound from './components/Secound/Secound';
// import store from './state/store';

function App() {
  return (

    <div className="App">
      <header className="App-header">
      <Base />
      <Secound />
      </header>
    </div>
  );
}

export default App;
// 