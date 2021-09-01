import { useState } from 'react';
import { createUseStyles } from 'react-jss';
// import { v4 } from 'uuid';

import { randomColor } from 'randomcolor';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const useStyles = createUseStyles({
  todosInputForm: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
  },

  input: {
    height: '30px',
    // width: '250px',
    marginBottom: '20px',
    border: 'none',
    borderBottom: '1px solid whitesmoke',
    background: 'none',
    color: 'white',
    padding: '0 10px',
    outline: 'none',
  },

  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  enter: {
    width: '100px',
    height: '30px',
    fontSize: '12px',
    background: 'none',
    border: '1px solid whitesmoke',
    color: 'whitesmoke',
    marginLeft: '10px',
    alignItems: 'center',
    justifyContent: 'center',

    '&.hover': {
      background: 'whitesmoke',
      color: '#222222',
      cursor: 'pointer',
    },
  },

  checkbox: {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'whitesmoke',
    marginBottom: '50px',
  },

  label: {
    display: 'flex',
    alignItems: 'baseline',
  },
  radio: {
    marginRight: '10px',
  },

  todoList: {
    color: 'whitesmoke',
    marginBottom: '50px',
  },
});

const TodosInputForm = ({ onSubmit }) => {
  const classes = useStyles();
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState('');
  const [urgency, setUrgency] = useState('low');

  const toggleForm = () => setShowForm(prevValue => !prevValue);
  const handleInputChange = e => setValue(e.target.value);
  //   const handleKeyPress = e => keyPress(e);
  const handleUrgencyChange = e => setUrgency(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();

    if (!value.trim()) return;

    const newTodo = {
      id: Date.now(),
      date: Date.now(),
      value,
      urgency,
      isDone: false,

      color: randomColor({
        luminosity: 'light',
      }),
    };
    onSubmit(newTodo);
    setValue('');
    setUrgency('low');
    setShowForm(false);
  };

  //   const keyPress = e => {
  //     const code = e.keyCode || e.which;
  //     if (code === 13) {
  //       newTodo();
  //     }
  //   };

  return (
    <div className={classes.todosInputForm}>
      {showForm ? (
        <form className={classes.form} onSubmit={handleSubmit}>
          <input
            className={classes.input}
            type="text"
            value={value}
            placeholder="Enter something..."
            onChange={handleInputChange}
            // onKeyPress={handleKeyPress}
          />
          <div className={classes.checkbox}>
            <span>urgency:</span>
            <label className={classes.label}>
              <input
                className={classes.radio}
                type="radio"
                value="low"
                checked={urgency === 'low'}
                onChange={handleUrgencyChange}
              />
              <span>low</span>
            </label>

            <label className={classes.label}>
              <input
                className={classes.radio}
                type="radio"
                value="medium"
                checked={urgency === 'medium'}
                onChange={handleUrgencyChange}
              />
              <span>medium</span>
            </label>

            <label className={classes.label}>
              <input
                className={classes.radio}
                type="radio"
                value="high"
                checked={urgency === 'high'}
                onChange={handleUrgencyChange}
              />
              <span>high</span>
            </label>
          </div>

          <div className={classes.buttons}>
            <button className={classes.enter} onClick={toggleForm}>
              Cancel
            </button>
            <button className={classes.enter} type="submit">
              Add todo
            </button>
          </div>
        </form>
      ) : (
        <button className={classes.enter} onClick={toggleForm}>
          +Add todo
        </button>
      )}
    </div>
  );
};

export default TodosInputForm;
