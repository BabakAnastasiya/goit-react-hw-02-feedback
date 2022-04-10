import React from "react";
import PropTypes from 'prop-types';
import  shortid from 'shortid';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {return (
    <div>
    {options.map(option =>
        <Button
            type='button'
            key={shortid.generate()}
            name = {option}
            onClick={onLeaveFeedback}>
            {option}
        </Button>
    )}
</div>)}

FeedbackOptions.propTypes = {options:PropTypes.array,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions
