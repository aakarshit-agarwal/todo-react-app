import styles from '../style.module.css';

const Todo = ({ item, todoList, setTodoList }) => {
    const doneButtonHandler = () => {
        setTodoList(todoList.filter((doneItem) => doneItem.id !== item.id));
    };

    return (
        <div>
            <div className={styles.todoItem}>
                <h3 className={styles.todoName}>{item.name}</h3>
                <button
                    className={styles.doneButton}
                    onClick={doneButtonHandler}
                >
                    Done
                </button>
            </div>
            <div></div>
        </div>
    );
};

export default Todo;
