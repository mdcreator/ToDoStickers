import moment from 'moment';
import randomColor from 'randomcolor';
import Draggable from 'react-draggable';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  todoItem: {
    position: 'absolute',
    cursor: 'move',
    width: '215px',
    // color: 'black',
    padding: '1em',
    borderRadius: '5px',
  },

  value: {
    wordWrap: 'breakWord',
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
    // hue: 'blue',
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
        <p>{urgency}</p>
        <p>{formattedDate}</p>
        <input type="checkbox" checked={isDone} onChange={handleToggle} />
        <button onClick={handleDelete}>x</button>
      </div>
    </Draggable>
  );
};
export default TodoItem;
