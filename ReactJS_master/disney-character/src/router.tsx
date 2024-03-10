import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Screen/Home";
import Character from "./Screen/Character";
import NotFound from "./Screen/NotFound";

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
        path: "character/:id",
        element: <Character />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
