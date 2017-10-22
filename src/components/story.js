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
    return (
      <div className="pageContainer">
        <div className="content">
          <div className="header">
            <button className="logoText">J. Doe</button>
            <button className="menuItems">tell my story</button>
            <button className="menuItems">explore map</button>
            <button className="menuItems">about</button>
            <button className="menuItems">community support</button>
          </div>
          <form onSubmit={this.handleSubmit}>
          <label>
            <div className="firstFormLine">
          <a>On</a> <div className="datepickerdiv"><DatePicker name="event_date" selected={this.state.startDate} className="chooseDate"/></div><a>, I experienced/witnessed an incident of</a> 
          <select name="experience_type" id="experience_type"
              className="formSelect"
               value={this.state.experience_type} onChange={this.handleChange}>
                <option selected disabled value='__________'></option>
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
            </select> <br /><br /><br /><br />
          </div>
              <a>The incident occurred at </a>
            <select name="location_type" id="location_type" value={this.state.location_type} onChange={this.handleChange}>
                <option selected disabled hidden value=''></option>
              <option value="school/college">school/college</option>
              <option value="work">work</option>
              <option value="park">a public park</option>
              <option value="social gathering">a social gathering</option>
              <option value="home">home</option>
          </select>
          <a>in zip code</a>
          <input type="text" name="zip" onChange={this.handleChange} placeholder="00000" className="zipInput"/>
          <a>, specifically at </a>
          <input type="text" name="location" onChange={this.handleChange} className="locationInput" placeholder="location name"/>
          <a>. I believe it was driven by my gender and I identify as </a>          
          <select name="gender" id="gender"  value={this.state.gender} onChange={this.handleChange}>
              <option selected disabled hidden value=''></option>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
              <option value="neither">neither</option>
          </select>
          <a>. I </a>
          <select name="knowAssailant" id="knowAssailant"  value={this.state.knowAssailant} onChange={this.handleChange}
            className="formSelect">
              <option selected disabled hidden value=''></option>
              <option value="false">do not know</option>
              <option value="true">know</option>
          </select>
          <a> my assailant.
          { (knownAssailant === 'true') ? 
            <span><label>Their name is </label> <input type="text" name="assailant_name" onChange={this.handleChange}/></span> : <span/>}
          . I</a>
          <select name="hasBeenReported"  value={this.state.hasBeenReported} onChange={this.handleChange}>
              <option selected disabled hidden value=''></option>
              <option value="true">have</option>
              <option value="false">have not</option>
          </select> reported this to the authorities.  

        My story.. <textarea id = "story" rows = "3" cols = "80" onChange={this.handleChange}></textarea>

              <div><input type="submit" value="Tell My Story" /></div>
              </label>
          </form>
        </div>

      </div>
    );
  }
}

export default Story
