import React from 'react';
import CreateCalculator from './components/Calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="App">
        <CreateCalculator />
      </div>
    );
  }
}

export default App;
