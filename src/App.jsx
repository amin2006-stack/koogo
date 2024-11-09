import {RouterProvider} from "react-router-dom";
import router from "./routing/Routing.jsx";
import "./styles/App.scss"
import HoverRating from "./Rating.jsx";
import CustomizedAccordions from "./Accordion.jsx";



function App() {


  return (
      <div className="App">
          <HoverRating/>
          <CustomizedAccordions/>
       <RouterProvider router={router}/>
      </div>
  )
}

export default App
