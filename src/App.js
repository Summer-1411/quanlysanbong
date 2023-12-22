
import {Routes, Route, Link} from 'react-router-dom'
import './Grid.css'
import './App.css';
import Container from './Component/Container';
import Order from './Component/Order/Order';
function App() {
  return (

    
    <div className="App">
      <Routes>
        <Route path='/' element = {<Container />} >
          <Route path='order' element = {<Order />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
