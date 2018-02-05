import Reflux from 'reflux';
import actions from '../actions';
import { changeValue, initialValue } from '../Api';

class Counter extends Reflux.Store {
  constructor() {
		super();
		this.listenToMany(actions);
    this.getStartValue();
	}

  getStartValue() {
    initialValue().then(data => this.setState({count: data.count}));
  }

	increment() {
    changeValue('increment').then(data => this.setState({count: data.count}));
	}

	decrement() {
    changeValue('decrement').then(data => this.setState({count: data.count}));
	}
}

export default Counter;
