import { Component } from 'react'
import Counter from './component/Counter';
import Memo from './component/Memo';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    console.log('Component Did Mount first time');
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  componentWillUnmount() {
    console.log("component will unmount Component remove");

  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Counter number={this.state.count} />
        <button onClick={this.increment.bind(this)}>Click Me</button>
        <hr/>
        <Memo />
      </div>
    )
  }
}

