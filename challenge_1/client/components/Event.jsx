import React from 'react';
import EventItem from "./EventItem.jsx"

const Event = function(props){
  console.log(props.event)
  if(props.event[0]==="...loading"){
    return(
      <div>
        <h2>Please Enter a searchable Keyword</h2>
      </div>
    )
  }else{
    console.log(props.event)
    return(
      <div>
      {
        props.event.map((item,key)=>
          <EventItem event={item} key={key}/>
        )
      }
      </div>
    )


  }
}

export default Event