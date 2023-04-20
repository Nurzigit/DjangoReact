import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ProductForm } from './components/ProductForm';
import { ProductList } from './components/ProductList';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>  
        <Routes>
          <Route path="/Products" element={<ProductList />} />
          <Route path="/Add" element={<ProductForm />} />
        </Routes>
      <Footer/>
    </div>
  );
}


export default App;
