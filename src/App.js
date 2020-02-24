import React from 'react';

function App(props) {
  const { grads } = props;
  const gradsList = grads.map((grad) => <li key={grad.id}>{grad.name}</li>);
  return (
    <div>
      <h1>SL February Grads:</h1>
      <ul>{gradsList}</ul>
    </div>
  );
}

export default App;
