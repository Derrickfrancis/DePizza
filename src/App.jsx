import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import Menu from './features/menu/Menu';
import { loader as menuLoader } from './features/menu/menuLoader';
import Cart from './features/cart/Cart';
import Order from './features/order/Order';
import CreateOrder from './features/order/CreateOrder';
import { action as updateOrderAction } from './features/order/UpdateOrderAction.js';
import { action as createOrderAction } from './features/order/createOrderAction.js';
import CreateUser from './features/user/CreateUser';
import { orderLoader } from './features/order/orderLoader';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },

      {
        path: '/user',
        element: <CreateUser />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
