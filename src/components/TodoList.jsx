import Todo from './Todo';

const TodoList = ({ todoList, setTodoList }) => {
    return (
        <div>
            {todoList.map((item) => {
                return (
                    <Todo
                        key={item.id}
                        item={item}
                        todoList={todoList}
                        setTodoList={setTodoList}
                    ></Todo>
                );
            })}
        </div>
    );
};

export default TodoList;
