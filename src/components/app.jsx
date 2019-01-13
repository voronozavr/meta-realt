import React, { PureComponent } from 'react';

import AdsList from '../containers/adsList';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <AdsList />
      </div>
    );
  }
}

export default App;
