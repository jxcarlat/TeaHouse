import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import TeaInfo from './TeaInfoComponent';
import { TEAS } from '../shared/teas';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teas: TEAS,
      selectedTea: null
    };
  }

  onTeaSelect(teaId) {
    this.setState({selectedTea: teaId});
}

      render() {
        return (
        <div>
          <Navbar dark color="primary">
          <div className="container">
              <NavbarBrand href="/">TeaHouse</NavbarBrand>
          </div>
          </Navbar>
          <Directory teas={this.state.teas} onClick={teaId => this.onTeaSelect(teaId)}/>
          <TeaInfo tea={this.state.teas.filter(tea => tea.id === this.state.selectedTea)[0]} />
        </div>
    );
  };
}

export default Main;