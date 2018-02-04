import React from "react";
import {render} from "react-dom";
import { Provider } from "react-redux";

import TodoApp from "./components/TodoApp";
import store from "./store";

const App = () => (
    <TodoApp/>
);

render(<Provider store={store}><App/></Provider>, document.getElementById("app"));
