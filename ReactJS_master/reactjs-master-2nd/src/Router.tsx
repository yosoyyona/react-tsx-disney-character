import { createBrowserRouter } from "react-router-dom";
import Home from "./Screen/Home";
import About from "./Screen/About";
import Root from "./Root";
import NotFound from "./Screen/NotFound";
import ErrorComponenet from "./components/ErrorComponent";
import User from "./Screen/users/User";
import Followers from "./Screen/users/Followers";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponenet />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "users/:userId",
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Followers />
          }
        ]
      }
    ],
    errorElement: <NotFound />
  },
]);

export default router;