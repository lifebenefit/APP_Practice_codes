/**/
import React from 'react';
class App extends React.Component {
  render() {
    return <h1 title="This works!">Hi, <span>this</span> is ReactJS</h1>
  }
}

export default App;

// /* "A React App!" 이라는 문구만 표시 */
// import React from 'react';

const App = () => {
  return <h1 title="This works!">Hi, <span>this</span> is ReactJS!</h1>;  // => 복잡 스러워 짐
};


// export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
