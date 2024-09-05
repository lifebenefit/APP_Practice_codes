import React, { useState } from 'react';

import GoalList from './component/GoalList/GoalList';
import NewGoal from './component/NewGoal/NewGoal';
import './App.css'

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: 'cg1', text: 'Finish the Course' },
    { id: 'cg2', text: 'Learn all about the Course Main Topic' },
    { id: 'cg3', text: 'Help other students in the Course Q&A' },
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals)=>{
      return prevCourseGoals.concat(newGoal)
    })
    console.log(courseGoals);
  };

  return (
    <div className='course-goals'>
      <h2> Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );

};

export default App;
