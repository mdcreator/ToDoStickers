import TodoItem from '../TodoItem';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  todoList: {
    color: 'whitesmoke',
    marginBottom: '50px',
  },
});

const TodosList = ({ todos, onDelete, onToggle }) => {
  const classes = useStyles();
  return (
    <div className={classes.todoList}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodosList;
