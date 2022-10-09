import logo from './logo.svg';
import './App.css';
import { HomePage } from './containers/HomePage';
/*import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';*/
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Create } from './containers/CreateChallenge';
import { Detail } from './containers/DetailPage';
import { Edit } from './components/EditPage';
import {Test} from '../src/test/index';
import {Route2} from '../src/test/index'
function App() {
  return (
    
   

      <div className='App'>
      <Routes>
      <Route exact path="/" element={<HomePage />}/>
          <Route  path="/#/create"  element={<Create />}/>
          <Route  path="/details" element={<Detail />}/>
          <Route  path="/edit"  element={<Edit />}/>
      
      </Routes>
      </div>
     
      
     
  );
}

export default App;
