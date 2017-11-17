import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import AddGreeter from './AddGreeter';

import './HelloWorldList.css';

class HelloWorldList extends Component {
  constructor(props) {
    super(props);
    this.state = { greetings: ["Jim", "Sally", "Bender"] };
    this.addGreeting = this.addGreeting.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }
  addGreeting(newName) {
    this.setState({ greetings: [...this.state.greetings, newName] });
  }
  removeGreeting(removeName) {
    const filteredGreetings = this.state.greetings.filter(name => {
      return name !== removeName;
    });
    this.setState({ greetings: filteredGreetings });
  }
  renderGreetings() {
    return this.state.greetings.map(name => (
      <HelloWorld key={name} name={name} removeGreeting={this.removeGreeting} />
    ));
  }
  render() {
    return (
      <div className="HelloWorldList">
        <AddGreeter addGreeting={this.addGreeting} />
        {this.renderGreetings()}
      </div>
    );
  }
}
export default HelloWorldList;
