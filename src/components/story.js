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
      knowAssailant: 'false'
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
      body: JSON.stringify({
        experience_type: this.state.event_type,
        })
    }).then((response)=>{
      console.log(response);
    })
  }


  handleSubmit(event) {
    alert('story was submitted:');

  }

  render() {
    const knownAssailant = this.state.knowAssailant;
    const selectStyle = {
      border: 0,
      outline: 0,
    };
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
          <label>
          On <DatePicker name="event_date" selected={this.state.startDate}/>, I experienced/witnessed an incident of 
          <select name="experience_type" id="experience_type"  style={selectStyle}  value={this.state.experience_type} onChange={this.handleChange}>
                <option selected disabled hidden value=''></option>
                <option value="harrassment">harrassment</option>
                <option value="assault"> assault</option>
                <option value="sexual assault">sexual assault</option>
                <option value="workplace harassment">workplace harassment</option>
                <option value="micro-aggeression">micro-aggeression</option>
                <option value="discriminatory pay">discriminatory pay</option>
                <option value="domestic violence">domestic violence</option>
                <option value="dating violence">dating violence</option>
                <option value="emotional abuse">emotional abuse</option>
                <option value="human trafficking">human trafficking</option>
                <option value="stalking">stalking</option>
            </select>. The incident occurred at 
            <select name="location_type" id="location_type" style={selectStyle} value={this.state.location_type} onChange={this.handleChange}>
              <option selected disabled hidden value=''></option>
              <option value="school/college">school/college</option>
              <option value="work">work</option>
              <option value="park">a public park</option>
              <option value="social gathering">a social gathering</option>
              <option value="home">home</option>
          </select> in zip code <input type="text" name="zip" onChange={this.handleChange}/>, specifically at <input type="text" name="location" onChange={this.handleChange}/>. I believe it was driven by my gender 
          and I identify as           
          <select name="gender" id="gender" style={selectStyle} value={this.state.gender} onChange={this.handleChange}>
              <option selected disabled hidden value=''></option>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
              <option value="neither">neither</option>
          </select>. I 
          <select name="knowAssailant" id="knowAssailant" style={selectStyle} value={this.state.knowAssailant} onChange={this.handleChange}>
              <option selected disabled hidden value=''></option>
              <option value="false">do not know</option>
              <option value="true">know</option>
          </select> my assailant. { (knownAssailant === 'true') ? 
            <span><label>Their name is </label> <input type="text" name="assailant_name" onChange={this.handleChange}/></span> : <span/>}. 


          I <select name="hasBeenReported" style={selectStyle} value={this.state.hasBeenReported} onChange={this.handleChange}>
              <option selected disabled hidden value=''></option>
              <option value="true">have</option>
              <option value="false">have not</option>
          </select> reported this to the authorities.  

        My story.. <textarea id = "story" rows = "3" cols = "80" onChange={this.handleChange}></textarea>

              <div><input type="submit" value="Tell My Story" /></div>
              </label>
          </form>
      </div>
    );
  }
}

export default Story
