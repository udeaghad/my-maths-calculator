import React from 'react';
import CreateCalculator from './components/Calculator';

class App extends React.Component {
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
