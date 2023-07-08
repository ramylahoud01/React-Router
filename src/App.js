import './App.css';
import Counter from "./components/Counter"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './components/Home';
import CartPage from './components/pages/CartPage';
import { loader as loaderCart } from './components/pages/CartPage';
import Cartid from './components/Cartid';
import ExpenseFormPage, { action } from './components/pages/ExpenseFormPage';
function App() {
  const router = createBrowserRouter([
    {path:"/",element:<Home />,children:[
      {path:"/form",element:<ExpenseFormPage />,action:action},
      {path:"counter/:id",element:<Counter />},
      {path:"cart",element:<CartPage />,loader:loaderCart,id:"cartid",children:[
        {path:"content",element:<Cartid />}
      ]}
    ]}
  ])
  return (
   <RouterProvider router={router} />
  );
}

export default App;
