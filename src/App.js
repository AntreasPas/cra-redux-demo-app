import React from 'react';
import { connect } from 'react-redux';
import { getGradsFromApi } from './grads';

class App extends React.Component {
  componentDidMount() {
    const { getGrads } = this.props;
    getGrads();
  }

  render() {
    const { grads, isLoading } = this.props;
    const gradsList = grads.map((grad) => <li key={grad.id}>{grad.name}</li>);
    return (
      <div>
        <h1>SL February Grads:</h1>
        {isLoading ? <p>Loading...</p> : <ul>{gradsList}</ul>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  grads: state.grads.data,
  isLoading: state.grads.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  getGrads: () => getGradsFromApi(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
