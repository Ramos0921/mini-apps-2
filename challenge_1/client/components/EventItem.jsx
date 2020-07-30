import React from 'react';

const EventItem = function(props){
  var date=props.event.date
  if(date[0]==='-'){
    var workDate = date.split('');
    workDate.shift();
    var displayDate = workDate.join('')+' BC'
  }

  if(date>=0){
    var displayDate = date+' AD'
  }
  if(date.length >8){
    var displayDate = date;
  }

  return(
    <div>
      <h3>Event</h3>
      <ul>
        <li> Date:{displayDate}</li>
        <li>Description: {props.event.description}</li>
        <li>Catergoy 1: {props.event.category1}</li>
        <li>Catergoy 2: {props.event.category2}</li>
        <li>Granularity: {props.event.granularity}</li>
        <li>Language: {props.event.lang}</li>
      </ul>
    </div>
  )
}

export default EventItem;