import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    //state helps us know how the page will react with different cases
    this.state = {
      monsters: [], //empty array for my data
      searchfield: "", //empty string for searching my monsters array
    };
  }

  componentDidMount() {
    //fetch is getting the GET request for API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(
        (Response) => Response.json() //turns my body of data into json
      )
      //sets my dummy array with this new array called users from API
      .then((users) => this.setState({ monsters: users }));
  }

  //if we do not use an arroaw function
  //** we need to set the this keyword in class App like: this.handleChange = this.handleChange.bind(this); //lets the handleChnage function know this is now used to refrence this function and not state */
  //arrow functions automatically do this for us !
  //*  A good rule of thumb is this:
  //****Use arrow functions on any class methods you define and aren't part of React (i.e. render(), componentDidMount()).*/

  handleChange = (e) => {
    this.setState({ searchfield: e.target.value }); //automatically binds it (lexical scoping)
  };

  render() {
    //setting new variables equivalent to states in app
    const { monsters, searchfield } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchfield.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1> Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        {/* Cardlist component used to pass monsters array as props */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
