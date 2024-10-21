import {RouterProvider} from "react-router-dom";
import router from "./routing/Routing.jsx";
import "./styles/App.scss"



function App() {


  return (
      <div className="App">

       <RouterProvider router={router}/>
      </div>
  )
}

export default App
