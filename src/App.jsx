import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./components/layout/Applayout";
import { ErrorPage } from "./components/pages/Errorpage";
import { Home } from "./components/pages/Home";
import { Offers } from "./components/pages/Offers";
import { Cart } from "./components/pages/Cart";
import { Login } from "./components/pages/Login";
import { Provider } from "react-redux";
import { Signup } from "./components/pages/Signup";
import store from "./store/store";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
