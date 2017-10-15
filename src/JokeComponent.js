import React, {Component} from 'react';
import jokes from './jokesStore';

export default class JokeComponent extends Component {
    render() {
        return (
            <div>
            <p>{jokes.getRandomJoke()}</p>
            </div>
        );
    }
}