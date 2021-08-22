import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const items = Object.keys(options);

  return (
    <div className={s.buttonSection}>
      {items.map(item => (
        <button
          className={s.button}
          type="button"
          key={item}
          onClick={() => {
            onLeaveFeedback(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
