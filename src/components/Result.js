import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>
        You Scored <strong>{props.quizResult}</strong>!
      </div>

      <button onClick = {props.loadinitialData}>Restart</button>
      <div>
      <table border="1">
      <thead>
            <tr>
               <td colSpan = "4">Score Dashboard</td>
            </tr>
            <tr>
    <td>Username</td><td>High Score</td><td>Attempts</td>
  </tr>
         </thead>
{props.statistics.map((e,i)=>{
  return <tbody key={i}>
  <tr>
    <td>{e.name}</td><td>{e.score}</td><td>{e.attempts}</td>
  </tr>
  </tbody>

})}
 </table>
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.number.isRequired
};

export default Result;
