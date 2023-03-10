import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message, total }) => (
  <div>{!total && <span className={css.notifi}>{message}</span>}</div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
