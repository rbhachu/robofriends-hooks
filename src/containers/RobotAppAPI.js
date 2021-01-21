import React, { Component } from 'react';
import '../css/RobotApp.css';
import CardsList from '../components/CardsList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'; 
import ErrorBoundary from '../components/ErrorBoundary'; // error checker
//import { robots } from '../components/robots'; //using api instead


class App extends Component {

    constructor() {
        super() // have to state super before this.x
        this.state = {
            robots: [], // start with empty array 
            searchfield: '' //input box
        }
    }

    componentDidMount() {
       fetch('https://jsonplaceholder.typicode.com/users') // get api list
       .then(response=> response.json()) // convert list into useable formart aka json
       //.then(users => {}); // emulate empty or long time loading list
       .then(users => {this.setState({ robots: users })}); // get users from api list/show users on search change
    }
 
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        }
 
    
    render() {
        const {robots, searchfield } = this.state; // decstructuring (removes repeating this.state)

        const filteredRobots = robots.filter(robot => { // filter robots state
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ? // check if list is talking time to load, display message 'loading'
        <h1>Loading...</h1> :
         (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardsList robots={filteredRobots} /> 
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
    
}

export default App;