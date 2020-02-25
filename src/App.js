import React from 'react';
import { connect } from 'react-redux';
import { fetchGrads } from './api';
import { fetchGrads as createActionFetchGrads } from './grads';

class App extends React.Component {
  componentDidMount() {
    const { getGrads } = this.props;
    getGrads();
  }

  render() {
    const { grads } = this.props;
    const gradsList = grads.map((grad) => <li key={grad.id}>{grad.name}</li>);
    return (
      <div>
        <h1>SL February Grads:</h1>
        <ul>{gradsList}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  grads: state.grads
});

const mapDispatchToProps = (dispatch) => ({
  getGrads: () => dispatch(createActionFetchGrads(fetchGrads()))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
