import {Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './Details';
import Display from './Display';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
    <h1>Kumar Raja</h1>
        <Routes>
          <Route path='/' element={<Display/>}></Route>
          <Route path='/details' element={<Details/>}></Route>
        </Routes>
    </div>
    </Provider>

  );
}

export default App;
