import './App.css';
import Home from './pages/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import Shop from './pages/shop';
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: 'ProductPage',
    element: <ProductPage />
  },
  {
    path: 'Shop',
    element: <Shop/>
  }
]);
function App() {
  return <RouterProvider router={Router}/>
}

export default App;
