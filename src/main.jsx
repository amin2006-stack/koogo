<<<<<<< HEAD
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
=======
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
import {Provider} from "react-redux";
import store from "./store/store.js";

createRoot(document.getElementById('root')).render(
    <Provider store={store} >
        <App />
    </Provider>

)
>>>>>>> 7ba5d557bd08b0272c8e2b69e73eb43bb653e68e
