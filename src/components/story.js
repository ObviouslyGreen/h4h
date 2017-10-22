import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import '../assets/css/app.css'
import 'react-datepicker/dist/react-datepicker.css';


class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      gender: 'male',
      knowAssailant: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.id);
    let key = event.target.id;
    let value = event.target.value;
    let object = {};
    object[key] = value;
    console.log(key)
    this.setState(object);
    fetch('http://52.53.201.52:5000/api/newstory', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: object
    }).then((response)=>{
      console.log(response);
    })
  }


  handleSubmit(event) {
    alert('story was submitted:');

  }

  render() {
    const knownAssailant = this.state.knowAssailant;
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
          <label>
          On <DatePicker selected={this.state.startDate}/>, I experienced/witnessed an incident of 
          <select name="event_type" id="event_type" value={this.state.event_type} onChange={this.handleChange}>
                <option value="harrassment">harrassment</option>
                <option value="assault"> assault</option>
                <option value="sexual assault">sexual assault</option>
                <option value="workplace harassment">workplace harassment</option>
                <option value="micro-aggeression">micro-aggeression</option>
            </select>. The incident occurred at <input type="text" name="location" onChange={this.handleChange}/>, which is a 
          <select name="location_type" id="location_type" value={this.state.location_type} onChange={this.handleChange}>
              <option value="school/college">school/college</option>
              <option value="work">work</option>
              <option value="park">public park</option>
              <option value="social gathering">social gathering</option>
              <option value="home">home</option>
          </select>. 

          I believe it was driven by my gender and I identify as           
          <select name="gender" id="gender" value={this.state.gender} onChange={this.handleChange}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
              <option value="neither">neither</option>
          </select>. I 
          <select name="knowAssailant" id="knowAssailant" value={this.state.knowAssailant} onChange={this.handleChange}>
              <option value="true">know</option>
              <option value="false">do not know</option>
          </select> my assailant.
          I <b>{knownAssailant ? 'know' : 'do not know'}</b> logged in.
          I <select value={this.state.reported} onChange={this.handleChange}>
              <option value="true">have</option>
              <option value="false">have not</option>
          </select> report this to the authorities.  
              <input type="submit" value="Tell myasdfasd story" />
              </label>
          </form>
          <a>{this.state.gender}</a>
          <a>{this.state.event_type}</a>
          <a>{this.state.location_type}</a>
      </div>
    );
  }
}

export default Story
