import React, { PureComponent } from 'react';
import AdsList from '../containers/adsList';
import Filter from '../containers/filter';
import Pagination from '../containers/pagination';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Filter />
        <Pagination />
        <AdsList />
      </div>
    );
  }
}

export default App;
