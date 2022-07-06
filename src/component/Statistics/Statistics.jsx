//import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, totalFeedback, positivPercentage }) => (
    <div>
        <h3>Statistics</h3>
        <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {totalFeedback}</li>
            <li>Positive feedback: {positivPercentage}%</li>
        </ul>
    </div>
);

// Statistics.propTypes = {
//     good: PropTypes.number,
//     neutral: PropTypes.number,
//     totalFeedback: PropTypes.number,
//     positivPercentage: PropTypes.number
// }