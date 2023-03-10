import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div className={css.statBlock}>
    {total > 0 && <span>Good: {good}</span>}
    {total > 0 && <span>Neutral: {neutral}</span>}
    {total > 0 && <span>Bad: {bad}</span>}
    {total > 0 && <span>Total: {total}</span>}
    {total > 0 && <span>Positive feedback: {positivePercentage} %</span>}
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
