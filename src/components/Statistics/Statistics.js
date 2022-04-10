import React from "react"
import PropTypes from 'prop-types'
import {List} from './Statistics.styled'

const Statistics = ({good,neutral,bad,total,positivePrecentage}) => {return (
    <ul>
        <List>Good: {good}</List>
        <List>Neutral: {neutral}</List>
        <List>Bad: {bad}</List>
        <List>Total: {total}</List>
        <List>Positive feedback: {positivePrecentage}%</List>
    </ul>
)}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePrecentage: PropTypes.number,
}

export default Statistics