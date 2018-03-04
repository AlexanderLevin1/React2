import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import axios from 'axios';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';


export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      selectedAlbum: {}
    };
    this.selectAlbum = this.selectAlbum.bind(this);
    // this.deselectAlbum = this.deselectAlbum.bind(this);
  }

  componentDidMount() {
    axios.get('/api/albums/')
      .then(res => res.data)
      .then(albums => {
        this.setState({ albums })
      });
  }

  selectAlbum(albumId) {
    axios.get(`/api/albums/${albumId}`)
      .then(res => res.data)
      .then(album => this.setState({
        selectedAlbum: album
      }));
  }

  // deselectAlbum() {
  //   this.setState({ selectedAlbum: {} });
  // }

  render() {
    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar deselectAlbum={this.deselectAlbum} />
        </div>
        <div className="col-xs-10">
          {
            this.props.children ?
              React.cloneElement(this.props.children, {

                // Album (singular) component's props
                album: this.state.selectedAlbum,
                currentSong: this.state.currentSong,
                isPlaying: this.state.isPlaying,
                toggle: this.toggleOne,

                // Albums (plural) component's props
                albums: this.state.albums,
                selectAlbum: this.selectAlbum // note that this.selectAlbum is a method, and this.state.selectedAlbum is the chosen album
              })
              : null
          }
          
        </div>
        <Player />
      </div>
    );
  }
}



