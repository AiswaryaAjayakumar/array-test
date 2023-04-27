import './App.css';
import Products from './components/Products';
import AddProducts from './components/AddProducts';
import Heading from './components/Heading';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

  {/* <News/> */}
  {/* <Products/> */}
  
 
 <BrowserRouter>
<Heading/>
 <Routes>
<Route path='/' exact Component={Products}/>
<Route path='/add' exact Component={AddProducts}/>
</Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
