import React, { useState } from "react";

import './NewGoal.css';

const NewGoal = (props) => {
    // let enteredText = '';
    const [enteredText, setEnteredText] = useState("");
    const addGoalHandler = (event) => {
        event.preventDefault();
        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        };
        setEnteredText('');
        props.onAddGoal(newGoal);
    };

    const textChageHandler = event => {
        // enteredText = event.target.value
        setEnteredText(event.target.value)
    }

    return (
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input type="text" value={enteredText} onChange={textChageHandler} />
            <button type="submit">Add Goal</button>
        </form>
    );
};

export default NewGoal