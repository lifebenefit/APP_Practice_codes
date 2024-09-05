import React from "react";

import './GoalList.css'

const GoalList = (props = null) => {
    // console.log(props.goals)
    return (
        <ul className='goal-list' >
            {
                props.goals.map((goal) => {
                    // return <li>{goal.text}</li>;  
                    return <li key={goal.id}>{goal.text}</li>;
                })
            }
        </ul >
    );
};

export default GoalList;