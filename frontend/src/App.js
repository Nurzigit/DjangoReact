import './App.css';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import FaceBook from './components/Auth/FaceBook';
import Google from './components/Auth/Google';
import ResetPassword from './components/Auth/ResetPassword';
import ResetPasswordConfirm from './components/Auth/ResetPasswordConfirm';
import Activate from './components/Auth/Activate';

import { Provider } from 'react-redux';
import store from './store';

import Layout from './components/Layout';


function App() {
  // const { items: products } = useLocalHook();
  return (
    <div className="App">
      <Provider store={store}>
      
      <Router>
      <Layout>
          <Routes>
            {/* <Route path="/Products" element={<ProductList />} />
            <Route path="/Add" element={<ProductForm />} />
            <Route path="/detail/:id" element={<ProductDetail />} /> */}
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/facebook' element={<FaceBook />} />
            <Route exact path='/google' element={<Google />} />
            <Route exact path='/reset-password' element={<ResetPassword />} />
            <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm />} />
            <Route exact path='/activate/:uid/:token' element={<Activate />} />
            
          </Routes>
        </Layout>
      </Router>
      </Provider>
      <Footer/>
    </div>  
  );
}


export default App;
