import { RouterProvider } from "react-router-dom";
import router from "./routing/Routing.jsx";
import "./styles/App.scss";
import HoverRating from "./Rating.jsx";
import CustomizedAccordions from "./Accordion.jsx";

import { Provider } from "react-redux";
import store from "./store/store"


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HoverRating />
        <CustomizedAccordions />
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}
<<<<<<< HEAD

export default App;
=======
export default App
>>>>>>> 7ba5d557bd08b0272c8e2b69e73eb43bb653e68e
