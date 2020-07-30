import React from 'react';
import EventItem from "./EventItem.jsx"

const Event = function(props){
  if(props.event[0]==="...loading"){
    return(
      <div>
        <h2>Please Enter a searchable Keyword</h2>
      </div>
    )
  }else{
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