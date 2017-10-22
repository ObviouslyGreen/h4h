import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import '../assets/css/app.css';
import 'leaflet/dist/leaflet.css';

class JMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        center: [32.7157, -117.1611],
        zoom: 13
      },
      heatmap: {
        points: [[32.7157, -117.1611, '5']]
      }
    }
  }

  componentDidMount() {
    fetch('http://52.53.201.52:8000/api', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response)=>{
      return response.json();
    }).then((data) => {
      let points = [];
      for (let i = 0; i < data.length; i++) {
        let lat = parseFloat(data[i].latitude);
        let long = parseFloat(data[i].longitude);
        let severity = parseFloat(data[i].severity);
        if (!isNaN(lat) && !isNaN(long)) {
          points.push([lat, long, severity]);
        }
      }
      console.log(points);
      if (points.length > 0) {
        this.setState({
          heatmap: {
            points: points
          }
        });
      }
    });
  }

  render() {
    const {viewport, heatmap} = this.state;

    return (
      <div className="Map-container">
        <Map {...viewport} >
        <TileLayer
          url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>' />
        <HeatmapLayer
         fitBoundsOnChange
          points={heatmap.points}
          longitudeExtractor={m => m[1]}
          latitudeExtractor={m => m[0]}
          intensityExtractor={m => m[2]} />
        </Map>
      </div>
      );
    }
}

export default JMap
