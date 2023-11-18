import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import Container from './components/Container';
import TodosInputForm from './components/TodosInputForm';
import TodosList from './components/TodosList';

const useStyles = createUseStyles({
  todosTitle: {
    color: 'whitesmoke',
  },
});

const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('items')) || [],
  );
  const classes = useStyles();

  const handleSubmit = todo => {
    if (todos.find(({ value }) => value === todo.value)) return;

    setTodos(prevState => [todo, ...prevState]);
  };

  const handleDeleteTodo = id =>
    setTodos(prevState => prevState.filter(todo => todo.id !== id));

  const handleToggleTodo = id => {
    setTodos(prevState =>
      prevState.map(todo =>
        todo.id === id
          ? {
              ...todo,
              isDone: !todo.isDone,
            }
          : todo,
      ),
    );
  };

  return (
    <div className="todos">
      <Container>
        <h1 className={classes.todosTitle}>Todos</h1>
        <TodosInputForm onSubmit={handleSubmit} />
        <TodosList
          todos={todos}
          onDelete={handleDeleteTodo}
          onToggle={handleToggleTodo}
        />
      </Container>
    </div>
  );
};

export default App;
