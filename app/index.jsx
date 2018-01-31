import React from 'react';
import {render} from 'react-dom';
import TodoApp from './components/TodoApp';

class App extends React.Component {
    render () {
        return (
            <TodoApp/>
        )
    }
}

render(<App/>, document.getElementById("app"));
