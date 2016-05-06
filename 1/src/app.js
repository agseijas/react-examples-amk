import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Saludo from './components/saludo'

class HolaMundo extends Component {
    render(){
        return (
            <div>
                <h1>Hola <Saludo/></h1>
            </div>
        )
    }
}

export default HolaMundo;

window.onload = function(){
    ReactDOM.render(<HolaMundo />, document.getElementById('app'));
}