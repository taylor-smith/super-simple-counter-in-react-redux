import React, { PropTypes, Component } from 'react':

class Counter extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { count, decrementCounter, incrementCounter } = this.props;
    return (
      <div>
        <h1 className="counter">{count}></h1>
        <button className="decrementCounter" onClick={decrementCounter}>-</button>
        <button className="incrementCounter" onClick={incrementCounter}>+</button>
      </div>
    )
  }
}

Counter.PropTypes = {
  count: PropTypes.number.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  incrementCounter: PropTypes.func.isRequired
}