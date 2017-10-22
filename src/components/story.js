import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import '../assets/css/app.css'
import 'react-datepicker/dist/react-datepicker.css';


class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state = {
      startDate: moment()
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('story was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
          Hello, story.
          <form onSubmit={this.handleSubmit}>
          <label>
          I have experienced
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="harrassment">sexual harrassment</option>
                <option value="assault">sexual assault</option>
                <option value="violence">sexual violence</option>
            </select>
            .  It occured
          <select value={this.state.value} onChange={this.handleChange}>
              <option value="school">at school</option>
              <option value="work">at work</option>
              <option value="home">at home</option>
              <option value="public">in public</option>
              <option value="private">in private</option>
          </select>
          .  It happened
          <input type="text" name="location" />
          .  It happend on
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            />
        </label>
              <input type="submit" value="Tell my story" />
          </form>
      </div>
    );
  }
}

export default Story
