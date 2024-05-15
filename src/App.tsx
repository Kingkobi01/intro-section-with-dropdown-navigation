import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./components";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
      },
    ],
    { basename: "/intro-section-with-dropdown-navigation/" }
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
