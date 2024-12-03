import { RouterProvider } from "react-router-dom";
import router from "./routing/Routing.jsx";
import {Provider} from "react-redux";
import store from "./store/store.js";
import "./styles/App.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );

}

export default App;
