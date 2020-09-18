import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import TeaInfo from './TeaInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TEAS } from '../shared/teas';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teas: TEAS
    };
  }

      render() {
        
        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory teas={this.state.teas} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
    );
  };
}

export default Main;