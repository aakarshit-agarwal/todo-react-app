import styles from '../style.module.css';
import TodoList from './TodoList';
import shortid from 'shortid';

const Form = ({ todo, setTodo, todoList, setTodoList }) => {
    const handleAddInputChange = (event) => {
        setTodo(event.target.value);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        setTodoList([...todoList, { id: shortid.generate(), name: todo }]);
        setTodo('');
    };

    return (
        <div>
            <div className={styles.todoForm}>
                <form onSubmit={handleAddFormSubmit}>
                    <input
                        type='text'
                        placeholder='Add Todo Item'
                        className={styles.todoInput}
                        value={todo}
                        onChange={handleAddInputChange}
                    />
                    <button type='submit' className={styles.addButton}>
                        Add
                    </button>
                </form>
            </div>
            <TodoList todoList={todoList} setTodoList={setTodoList}></TodoList>
        </div>
    );
};

export default Form;
