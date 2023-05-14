import React, { Component } from "react";
import Counter from "./counter";
import 'bootstrap/dist/css/bootstrap.min.css';

class Counters extends Component {
  render() {
    const { counters, onReset, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-danger btn-sm m-2">
          Reset
        </button>

        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            //our counter object is carrying all the values so
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
