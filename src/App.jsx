import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Loading from "./components/Loading";
import Search from "./pages/Search";
import ErrorElement from "./pages/ErrorElement";
import MainLayout from "./pages/MainLayout";
import { apiHomePage } from "./utils/Api";
import { Suspense } from "react";
import SearchLayout from "./pages/SearchLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
        loader: apiHomePage,
        index: true,
      },
    ],
  },
  {
    path: "/search",
    element: <SearchLayout />,
    children: [
      {
        element: <Search />,
        index: true,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
