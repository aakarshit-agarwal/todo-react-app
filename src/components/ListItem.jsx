import { Component } from 'react';

class ListItem extends Component {
    render() {
        return (
            <>
                <h3>{this.props.itemName}</h3>
            </>
        );
    }
}

export default ListItem;
