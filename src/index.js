/* eslint-disable no-console */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';

class App extends Component {
      render () {
         return (
           <div>
              <SearchBar/>
           </div>
         );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
