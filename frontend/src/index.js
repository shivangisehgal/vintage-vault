// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Page1 from "./components/SliderPages/Page1";
// import Page2 from "./components/SliderPages/Page2";
// import Page3 from "./components/SliderPages/Page3";
// import Page4 from "./components/SliderPages/Page4";
// import Page5 from "./components/SliderPages/Page5";
// import "./global.css";
// import Contact from "./components/Contact";
// import Login from "./components/Login";
// import GetMessages from "./components/GetMessages";
// import Register from "./components/Register";
// import { Toaster } from "react-hot-toast";
// import { createContext } from "react";
// import Page6 from "./components/SliderPages/Page6";
// import PaymentSuccess from "./components/PaymentSuccess1";

// export const server = "http://localhost:4000/api/v2";

// export const Context = createContext({ isAuthenticated: false });

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "getmessages",
//         element: <GetMessages />,
//       },
//       {
//         path: "register",
//         element: <Register />,
//       },
//       {
//         path: "page1",
//         element: <Page1 />,
//       },
//       {
//         path: "page2",
//         element: <Page2 />,
//       },
//       {
//         path: "page3",
//         element: <Page3 />,
//       },
//       {
//         path: "page4",
//         element: <Page4 />,
//       },
//       {
//         path: "page5",
//         element: <Page5 />,
//       },
//       {
//         path: "page6",
//         element: <Page6 />
//       },
//       {
//         path: "paymentsuccess",
//         element: <PaymentSuccess />
//       }
//     ],
//   },
// ]);

// const AppWrapper = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <Context.Provider
//       value={{
//         isAuthenticated,
//         setIsAuthenticated,
//       }}
//     >
//       <RouterProvider router={router} />
//       <Toaster />
//     </Context.Provider>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <AppWrapper />
//   </React.StrictMode>
// );

// reportWebVitals();

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Page1 from "./components/SliderPages/Page1";
import Page2 from "./components/SliderPages/Page2";
import Page3 from "./components/SliderPages/Page3";
import Page4 from "./components/SliderPages/Page4";
import Page5 from "./components/SliderPages/Page5";
import "./global.css";
import Contact from "./components/Contact";
import Login from "./components/Login";
import GetMessages from "./components/GetMessages";
import Register from "./components/Register";
import { Toaster } from "react-hot-toast";
import { createContext } from "react";
import Page6 from "./components/SliderPages/Page6";
import PaymentSuccess from "./components/PaymentSuccess1";

export const server = "http://localhost:4000/api/v2";

export const Context = createContext({ isAuthenticated: false });

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "getmessages",
        element: <GetMessages />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "page1",
        element: <Page1 />,
      },
      {
        path: "page2",
        element: <Page2 />,
      },
      {
        path: "page3",
        element: <Page3 />,
      },
      {
        path: "page4",
        element: <Page4 />,
      },
      {
        path: "page5",
        element: <Page5 />,
      },
      {
        path: "page6",
        element: <Page6 />,
      },
      {
        path: "paymentsuccess",
        element: <PaymentSuccess />,
      },
    ],
  },
]);

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true" || false
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <RouterProvider router={router} />
      <Toaster />
    </Context.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

reportWebVitals();
