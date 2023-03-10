import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.buttonBlock}>
    {options.map((state, index) => (
      <button
        key={index}
        className={css.buttonOptions}
        type="button"
        onClick={onLeaveFeedback}
      >
        {state}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
