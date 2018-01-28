import React from 'react';
import {render} from 'react-dom';
import LikeCounter from './components/likeCounter.jsx';

class App extends React.Component {
    render () {
        return (
            <LikeCounter/>
        )
    }
}

render(<App/>, document.getElementById("app"));
