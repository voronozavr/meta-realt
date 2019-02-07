import React, { PureComponent } from 'react';
import AdsList from '../containers/adsList';
import Filter from '../containers/filter';
import Pagination from '../containers/pagination';
import Header from './header';
import '../css/app.css';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Filter />
        <Pagination />
        <AdsList />
        <Pagination />
      </div>
    );
  }
}

export default App;
