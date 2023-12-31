import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        {/* j'ai cree une page 'productDetailPage' pour les details de chaque produit. chaque page aura Parametre par id de tableau 'products'. */}
        <Route path='/product/:productId/details' element={<ProductDetailPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
