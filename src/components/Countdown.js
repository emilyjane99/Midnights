import { useState, useRef, useEffect } from 'react'
import React from 'react';

export default class Countdown extends React.Component {

    time = [];

    constructor(props){
        super(props);
        this.state = {days: 0, hours: 0, min: 0, sec: 0}
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.setCountdown(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    setCountdown(){
      console.log("sea snails");
      //dates
      var today = new Date();
      var release = new Date("10/21/2022");
      //total this.time in ms
      var timeDifference = release.getTime() - today.getTime();
      //days
      var days = Math.trunc(timeDifference / (1000 * 3600  * 24));
      var timeAfterDays = timeDifference - (days * 1000 * 3600 * 24);
      //hours
      var hours = Math.trunc(timeAfterDays / (1000 * 3600));
      var timeAfterHours = timeAfterDays - (hours * 1000 * 3600);
      //minutes
      var min = Math.trunc(timeAfterHours / (1000 * 60));
      var timeAfterMin = timeAfterHours - (min * 1000 * 60);
      //seconds
      var sec = Math.trunc(timeAfterMin / 1000);

      this.setState({days: days, hours: hours, min: min, sec: sec});
    }


  render (){
    //var time = this.calculate();
    var days = this.state.days;
    var hours = this.state.hours;
    var min = this.state.min;
    var sec = this.state.sec;

    return(
      <div className='countdown'>
      <div className="days">
        <h1 className='number'>{days}</h1>
        <h5 className='text'>days</h5>
      </div>
      <div className="hours">
        <h1 className='number'>{hours}</h1>
        <h5 className='text'>hours</h5>
      </div>
      <div className="minutes">
        <h1 className='number'>{min}</h1>
        <h5 className='text'>min</h5>
      </div>
      <div className="seconds">
        <h1 className='number'>{sec}</h1>
        <h5 className='text'>sec</h5>
      </div>
      </div>
    );
  }
}

