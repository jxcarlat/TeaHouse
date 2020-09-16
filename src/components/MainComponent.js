import React, { Component } from 'react';
import TeaInfo from './TeaInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TEAS } from '../shared/teas';
//import { COMMENTS } from '../shared/comments';
//import { PARTNERS } from '../shared/partners';
//import { PROMOTIONS } from '../shared/promotions';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teas: TEAS//,
      //comments: COMMENTS,
      //partners: PARTNERS,
      //promotions: PROMOTIONS
    };
  }

  render() {

    const HomePage = () => {
      return (
        <Home 
            tea={this.state.teas.filter(tea => tea.featured)[0]}
            //promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
            //partner={this.state.partners.filter(partner => partner.featured)[0]}
        />
      );
    }

    const TeaWithId = ({match}) => {
      return (
          <TeaInfo 
              tea={this.state.teas.filter(tea => tea.id === +match.params.teaId)[0]}
              //comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
          />
      );
    }

    return (
      <div>
          <Header />
          <Switch>
              <Route path='/home' component={HomePage} />
         {/*  <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
              <Route path='/directory/:campsiteId' component={CampsiteWithId} />  */}
              <Redirect to='/home' />
          </Switch>
          <Footer />
      </div>
    );
  };
}

export default Main;
