import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
//import RobotApp from './containers/RobotApp'; //Original Method / Dynamic method 2
import RobotApp from './containers/RobotAppAPI'; //Original Method / API Method
//import CardsList from './components/CardsList'; //Dynamic method 1
//import { robots } from './robots'; //Dynamic method 1
//import Hello from './Hello';
//import Cards from './components/Cards';
import * as serviceWorker from './serviceWorker';
import 'tachyons'; // imports tachyons module


/*
//Original Method
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// page output
ReactDOM.render(
  <React.StrictMode>
    <Hello blahblah={'Hi React Ninjas3'}/>
  </React.StrictMode>,
  document.getElementById('root')
);

//non dynamic method
ReactDOM.render(
  <React.StrictMode>
    <div>
      <Cards id={robots[0].id} name={robots.[0].name} email={robots[0].email} />
      <Cards id={robots[1].id} name={robots.[1].name} email={robots[1].email} />
      <Cards id={robots[2].id} name={robots.[2].name} email={robots[2].email} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)

//Dynamic method 1
ReactDOM.render(
  <React.StrictMode>
    <CardsList robots={robots} />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

//Dynamic method 2
ReactDOM.render(<RobotApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
