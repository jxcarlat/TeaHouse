import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';
import { TEAS } from './shared/teas';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teas: TEAS
    };
  }

      render(){
        return(
        <div className="App">
          <Navbar dark color="primary">
          <div className="container">
              <NavbarBrand href="/">TeaHouse</NavbarBrand>
          </div>
          </Navbar>
          <Directory teas={this.state.teas} />
        </div>
    );
  }
}

export default App;