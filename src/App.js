import React from 'react';
import './App.css';

//  importing manual components
import ProductListComponent from './components/productsList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ProductListComponent />
       </div>
    );
  }
}

export default App;
