import { Component } from 'react'
/* eslint-disable */
export default class Counter extends Component {
  componentDidUpdate(prevprops, prevState) {
    if (prevprops.number !== this.props.number) {
      console.log(prevprops.number);
      console.log("component updated");
    }
  }
  
  render() {
    return (
      <div>
        <p>Count: {this.props.number}</p>
      </div>
    )
  }
}
