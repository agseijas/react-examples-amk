import React, { Component, PropTypes } from 'react';

const style = {
    color: 'blue',
    border: '1px solid #000'
}


class Saludo extends Component {
    constructor(props){
        super(props);
        this.state = { countClicks: 0};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        this.setState({countClicks: this.state.countClicks + 1});
    }
    render(){
        const { name } = this.props;
        return (
            <span onClick={ this.handleClick} style={ style }>
                { name } - { this.state.countClicks}
            </span>
        )
    }
}

Saludo.propTypes = {
    name: PropTypes.string.isRequired
}

Saludo.defaultProps = {
    name: 'Pepe'
}

export default Saludo;