import { Route, Routes } from 'react-router-dom';
import Foods from './components/foods/foods';
import Order from './components/basket/order';

function App() {
  return (
    <div className="flex mt-4 ">
        <Routes>
            <Route path='/' element={<Foods/>}/>
            <Route path='/backet' element={<Order/>}/>
        </Routes>
    </div>
  );
}

export default App;
