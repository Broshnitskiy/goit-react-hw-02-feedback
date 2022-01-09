import { capitalizeFirstLetter } from "../../helpers/capitalizeFirstLetter";
import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option) => (
    <button type="button" key={option} onClick={() => onLeaveFeedback(option)}>
      {capitalizeFirstLetter(option)}
    </button>
  ));
};

FeedbackOptions.prototypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
