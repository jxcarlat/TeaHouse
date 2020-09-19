import React, { Component } from 'react';
import Playlist from 'react-mp3-player';
import Directory from './DirectoryComponent';
import TeaInfo from './TeaInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TEAS } from '../shared/teas';
import { EVENTS } from '../shared/events';
import { ROOMS } from '../shared/rooms';
import { TRACKS } from '../shared/tracks';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teas: TEAS,
      events: EVENTS,
      rooms: ROOMS,
      tracks: TRACKS
    };
  }

      render() {
        
        const HomePage = () => {
            return (
                <Home 
                    tea={this.state.teas.filter(tea => tea.featured)[0]}
                    event={this.state.events.filter(event => event.featured)[0]}
                    room={this.state.rooms.filter(room => room.featured)[0]}
                />
            );
        }

        const TeaWithId = ({match}) => {
            return (
                <TeaInfo tea={this.state.teas.filter(tea => tea.id === +match.params.teaId)[0]} 
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory teas={this.state.teas} />} />
                    <Route path='/directory/:teaId' component={TeaWithId} />
                    <Redirect to='/home' />
                </Switch>
                <Playlist tracks={this.state.tracks} />
                <Footer />
            </div>
    );
  };
}

export default Main;