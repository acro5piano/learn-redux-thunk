import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  count: state,
});

const mapDispatchToProps = {
  increment: () => ({
    type: 'INCREMENT'
  })
};

const App = ({ count, increment }) => (
  <div>
    <h1>
      hello world
    </h1>
    <div>
      count is: {count}
    </div>
    <button onClick={increment}>
      increment
    </button>
  </div>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
