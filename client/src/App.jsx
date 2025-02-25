import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import BuyCredit from "./pages/BuyCredit";
import Result from "./pages/Result";
import Error from "./pages/Error";
import Layout from "./components/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/buy", element: <BuyCredit /> },
        { path: "/result", element: <Result /> },
      ],
    },
  ]);

  return (
    <main className="min-h-screen bg-slate-50">
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
