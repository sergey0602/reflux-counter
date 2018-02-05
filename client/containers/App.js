import React from 'react';
import Reflux from 'reflux';
import CounterStore from '../stores/counter.js';
import actions from '../actions';

class App extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = CounterStore;
  }

  increment() {
    actions.increment();
  }

  decrement() {
    actions.decrement();
  }

  render() {
    return (
      <div>
        <button type='button' onClick={this.increment.bind(this)}>Increment</button>
        <button type='button' onClick={this.decrement.bind(this)}>Decrement</button>
        <span>Result: {this.state.count}</span>
      </div>
    )
  }
}

export default App;
