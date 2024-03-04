import { createBrowserRouter } from "react-router-dom";
import Home from "./Screen/Home";
import About from "./Screen/About";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  },
]);

export default router;