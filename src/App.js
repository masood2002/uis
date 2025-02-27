import './App.css';
import Home from './pages/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import Shop from './pages/shop';
import SignUp from './pages/Auth/SignUp';
import Login from './pages/Auth/Login';
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
  },
  {
    path:"Signup",
    element: <SignUp/>
  },
  {
    path:"Login",
    element: <Login/>
  },
]);
function App() {
  return <RouterProvider router={Router}/>
}

export default App;
