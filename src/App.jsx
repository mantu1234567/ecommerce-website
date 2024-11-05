
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import Header from './layouts/Header'
import Product from './components/Product';
import BagItems from './components/BagItems';
import "./App.css";
function App() {
  
  return (
    <>
   <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/men" element={<Product />} />
        <Route path='/bagItem' element={<BagItems/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
