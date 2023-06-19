import { Component } from 'react';

class Header extends Component {
    headerStyle = {
        color: 'blue',
        fontSize: '40px',
    };

    render() {
        return (
            <>
                <h1 style={this.headerStyle}>ToDo React App</h1>
            </>
        );
    }
}

export default Header;
