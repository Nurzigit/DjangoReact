import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ProductForm } from './components/ProductForm';
import { ProductList } from './components/ProductList';
import { Routes, Route } from 'react-router-dom';
import { ProductDetail } from './components/ProductDetail/index';
import { useLocalHook } from './hooks/useLocalHook';


function App() {
  const { items: products } = useLocalHook();
  return (
    <div className="App">
      <Header/>  
        <Routes>
          <Route path="/Products" element={<ProductList />} />
          <Route path="/Add" element={<ProductForm />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
        </Routes>
      <Footer/>
    </div>  
  );
}


export default App;
