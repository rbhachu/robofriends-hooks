import React from 'react';
import '../css/Hello.css';
//import 'tachyons'; // imports tachyons module

/*
// Class version - old method
class Hello extends React.Component {
  render () {
      return (
        <div className="f1 tc">
          <h1>Hello World!</h1>
          <p>{this.props.greeting}</p>
        </div>
        );
    }
}
*/

// Function version - new method
const Hello = (passblah) => {
  return (
    <div className="f1 tc">
      <h1>Hello World!</h1>
      <p>{passblah.blahblah}</p>
    </div>
  )
}

export default Hello;
