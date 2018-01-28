import React from 'react';
import './likeCounter.scss';

class LikeCounter extends React.Component {
    constructor () {
        super();
        this.state = {
            likesCount: 0
        };
        this.onLike = this.onLike.bind(this);
    }

    render () {
        return (
            <button onClick={ this.onLike }>Likes: { this.state.likesCount }</button>
        )
    }

    onLike () {
        this.setState({
            likesCount: this.state.likesCount + 1
        });
    }
}

export default LikeCounter;
