import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ProductForm } from './components/ProductForm';
import { ProductList } from './components/ProductList';


function App() {
  return (
    <div className="App">
      <Header/>
      <ProductList />
      <ProductForm />
      <Footer/>
    </div>
  );
}


export default App;
