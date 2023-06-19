import { Component } from 'react';
import ListItem from './ListItem';

class ToDo extends Component {
    state = {
        todo: '',
        todoList: [],
    };

    handleAddTodoInputChange = (event) => {
        this.setState({
            todo: event.target.value,
        });
        console.log(this.state);
    };

    handleAddTodoFormSubmit = (event) => {
        event.preventDefault();
        let newTodoList = this.state.todoList;
        newTodoList.push(this.state.todo);

        this.setState({
            todo: '',
            todoList: newTodoList,
        });
        console.log(this.state);
    };

    render() {
        return (
            <>
                ToDo
                <form onSubmit={this.handleAddTodoFormSubmit}>
                    <input
                        type='text'
                        value={this.state.todo}
                        onChange={this.handleAddTodoInputChange}
                    />
                    <button type='submit'>Add</button>
                </form>
                <>
                    {this.state.todoList.map((item) => {
                        return <ListItem key={item} itemName={item}></ListItem>;
                    })}
                </>
            </>
        );
    }
}

export default ToDo;
