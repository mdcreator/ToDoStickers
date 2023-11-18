import moment from 'moment';
import randomColor from 'randomcolor';
import Draggable from 'react-draggable';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  todoItem: {
    position: 'absolute',
    cursor: 'move',
    width: '215px',
    padding: '1em',
    borderRadius: '5px',
  },

  value: {
    wordWrap: 'breakWord',
    marginBottom: '4px',
    textTransform: 'uppercase',
    fontWeight: '600',
    color: 'black',
  },

  urgency: {
    wordWrap: 'breakWord',
    marginBottom: '2px',
    color: 'black',
    letterSpacing: '2px',
  },

  date: {
    marginBottom: '9px',
    color: 'black',
  },

  actions: {
    display: 'flex',
  },

  checkbox: {
    marginRight: '4px',
    width: '21px',
    height: '21px',
  },

  button: {
    border: 'none',
    width: '20px',
    height: '20px',
    borderRadius: '2px',
    backgroundColor: 'hotpink',
  },
});

const TodoItem = ({
  todo: { id, value, urgency, date, isDone },
  onToggle,
  onDelete,
}) => {
  const classes = useStyles();
  const color = randomColor({
    luminosity: 'light',
  });

  const formattedDate = moment(date).format('MMMM Do YYYY, h:mm:ss a');

  const handleDelete = () => onDelete(id);
  const handleToggle = () => onToggle(id);

  return (
    <Draggable
      key={id}
      //   defaultPosition={item.defaultPos}
      //   onStop={(e, data) => updatePos(data, index)}
    >
      <div className={classes.todoItem} style={{ backgroundColor: color }}>
        <p className={classes.value}>{value}</p>
        <p className={classes.urgency}>{urgency}</p>
        <p className={classes.date}>{formattedDate}</p>
        <div className={classes.actions}>
          <input
            type="checkbox"
            checked={isDone}
            onChange={handleToggle}
            className={classes.checkbox}
          />
          <button onClick={handleDelete} className={classes.button}>
            x
          </button>
        </div>
      </div>
    </Draggable>
  );
};
export default TodoItem;
