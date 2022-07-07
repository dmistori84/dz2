import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onGoodFeedback, onNeutralFeedback, onBadFeedback }) => (
    <div>
        <button onClick={onGoodFeedback}>Good</button>
        <button onClick={onNeutralFeedback}>Neutral</button>
        <button onClick={onBadFeedback}>Bad</button>
    </div>
);

FeedbackOptions.propTypes = {
    onGoodFeedback: PropTypes.func,
    onNeutralFeedback: PropTypes.func,
    onBadFeedback: PropTypes.func
};