import { Route, Routes } from 'react-router-dom';
import './App.css';
import Foods from './components/foods/foods';
import Order from './components/basket/order';

function App() {
  return (
    <div className="flex ">
        <Routes>
            <Route path='/' element={<Foods/>}/>
            <Route path='/backet' element={<Order/>}/>
        </Routes>
    </div>
  );
}

export default App;
