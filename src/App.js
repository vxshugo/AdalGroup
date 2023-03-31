import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home/Home";
import RiverPark from "./pages/RiverPark/RiverPark";




const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/river-park",
    element:<RiverPark/>
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
