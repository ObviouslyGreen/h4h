import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import Button from './button';
import '../assets/css/app.css';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
    viewport: {
      latitude: 32.7157,
      longitude: -117.1611,
      zoom: 11,
      bearing: 0,
      pitch: 0,
      // width: 1280,
      // height: 720
    },
    settings: {
      dragPan: true,
      dragRotate: true,
      scrollZoom: true,
      touchZoomRotate: true,
      doubleClickZoom: true,
      trackResize: true,
      minZoom: 0,
      maxZoom: 20,
      minPitch: 0,
      maxPitch: 85
    },
    backgroundColor: 'green'
  }
  
  this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
  
}
  
  
  changeBackgroundColor(){
    this.setState({
      backgroundColor: 'blue',
    })
  }

  _onViewportChange = viewport => this.setState({viewport});

  render() {
    const {viewport, settings} = this.state;

    return (
      <div>
        <Button backgroundColor={this.state.backgroundColor} changeBackgroundColor={this.changeBackgroundColor} />
        Woah: {this.state.viewport.pitch}
      <ReactMapGL className="Map-container"
        {...viewport}
        {...settings}
        mapStyle='mapbox://styles/mapbox/light-v9'
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={this._onViewportChange}
      />
    </div>
    );
  }
}

export default Map
