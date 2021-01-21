import React, { Component } from 'react';
import '../css/RobotApp.css';
import CardsList from '../components/CardsList';
import SearchBox from '../components/SearchBox';
import { robots } from '../components/robots';


class App extends Component {

    constructor() {
        super() // have to state super before this.x
        this.state = {
            robots: robots, 
            searchfield: '' //inpuit box
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        }
 
    render() {
        const {robots, searchfield } = this.state; // decstructuring (removes repeating this.state)

        const filteredRobots = robots.filter(robot => { // filter robots state
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })    
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardsList robots={filteredRobots} />  
            </div>
        );
    }
}

export default App;