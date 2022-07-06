import React from 'react';
import CreateCalculator from './components/Calculator';

class App extends React.PureComponent {
  render() {
    return (

      <div className="App">
        <CreateCalculator />
      </div>
    );
  }
}

export default App;
