import React from 'react'; // build react components
import ReactDOM from 'react-dom'; // place components in contents of DOM
import App from './App'; // The one we create
import SearchSection from './search/SearchSection';

ReactDOM.render( // Render component
  <SearchSection/>,
  document.getElementById('root')
);
