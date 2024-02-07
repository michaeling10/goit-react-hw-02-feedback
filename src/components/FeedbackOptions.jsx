import './styles/FeedbackOptions.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={'buttonsList'}>
      {options.map(option => (
        <li key={option} className={'buttonListItem'}>
          <button onClick={() => onLeaveFeedback(option)}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
