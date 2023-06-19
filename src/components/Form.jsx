import { Component } from 'react';
import styles from '../style.module.css';

class Form extends Component {
    state = {
        todo: '',
        todoList: [],
    };

    handleAddInputChange = (event) => {
        this.setState({
            todo: event.target.value,
        });
        console.log(this.state);
    };

    handleAddFormSubmit = (event) => {
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
            <div className={styles.todoForm}>
                <form onSubmit={this.handleAddFormSubmit}>
                    <input
                        type='text'
                        placeholder='Add Todo Item'
                        className={styles.todoInput}
                        value={this.state.todo}
                        onChange={this.handleAddInputChange}
                    />
                    <button type='submit' className={styles.addButton}>
                        Add
                    </button>
                </form>
                {/* <>
                    {this.state.todoList.map((item) => {
                        return <ListItem key={item} itemName={item}></ListItem>;
                    })}
                </> */}
            </div>
        );
    }
}

export default Form;
