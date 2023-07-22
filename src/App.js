import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className='App'>
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/cart' Component={Cart}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
