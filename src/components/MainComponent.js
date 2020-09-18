import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import TeaInfo from './TeaInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
                <Header />
                <Directory teas={this.state.teas} onClick={teaId => this.onTeaSelect(teaId)}/>
                <TeaInfo tea={this.state.teas.filter(tea => tea.id === this.state.selectedTea)[0]} />
                <Footer />
            </div>
    );
  };
}

export default Main;