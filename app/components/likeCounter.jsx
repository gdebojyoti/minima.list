import React from 'react';

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
            <div>
                <button onClick={ this.onLike }>Like</button>
                <div>Likes: { this.state.likesCount }</div>
            </div>
        )
    }

    onLike () {
        this.setState({
            likesCount: this.state.likesCount + 1
        });
    }
}

export default LikeCounter;
