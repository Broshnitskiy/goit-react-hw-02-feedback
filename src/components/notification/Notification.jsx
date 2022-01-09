import PropTypes from "prop-types";
export const Notification = ({ message }) => <p>{message}</p>;

Notification.prototypes = {
  message: PropTypes.string.isRequired,
};
