import { RouterProvider } from "react-router-dom";
import router from "./routing/Routing.jsx";
import "./styles/App.scss";
import HoverRating from "./Rating.jsx";
import CustomizedAccordions from "./Accordion.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";

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

export default App;
