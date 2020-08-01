import React from 'react';

const ScoreBoard = function(props){
  console.log(props.data)
  var roundOne='';


  return(
    <div className='grid'>
      <div className="grid-item">
        <div className='item-one'>
          <div className="top">
            <div className="num-container">
              <p>Round:1</p>
             </div>
          </div>
          <div className="bottom">
            <div className="score-1">{props.data.one}</div>
            <div className="score-2">{props.data.oneone}</div>
          </div>
        </div>
        <div className='item-two'>
          <p>{props.data.roundScore1}</p>
        </div>
      </div>
      <div className="grid-item">
        <div className='item-one'>
          <div className="top">
            <div className="num-container">
              <p>Round:2</p>
             </div>
          </div>
          <div className="bottom">
          <div className="score-1">{props.data.two}</div>
            <div className="score-2">{props.data.twotwo}</div>
          </div>
        </div>
        <div className='item-two'>
        <p>{props.data.roundScore2}</p>
        </div>
      </div>
      <div className="grid-item">
        <div className='item-one'>
          <div className="top">
            <div className="num-container">
              <p>Round:3</p>
             </div>
          </div>
          <div className="bottom">
          <div className="score-1">{props.data.three}</div>
            <div className="score-2">{props.data.threethree}</div>
          </div>
        </div>
        <div className='item-two'>
        <p>{props.data.roundScore3}</p>
        </div>
      </div>
      <div className="grid-item">
        <div className='item-one'>
          <div className="top">
            <div className="num-container">
              <p>Round:4</p>
             </div>
          </div>
          <div className="bottom">
          <div className="score-1">{props.data.four}</div>
            <div className="score-2">{props.data.fourfour}</div>
          </div>
        </div>
        <div className='item-two'>
        <p>{props.data.roundScore4}</p>
        </div>
      </div>
      <div className="grid-item">
        <div className='item-one'>
          <div className="top">
            <div className="num-container">
              <p>Round:5</p>
             </div>
          </div>
          <div className="bottom">
          <div className="score-1">{props.data.five}</div>
            <div className="score-2">{props.data.fivefive}</div>
          </div>
        </div>
        <div className='item-two'>
        <p>{props.data.roundScore5}</p>
        </div>
      </div>
      <div className="grid-item">
        <div className='item-one'>
          <div className="top">
            <div className="num-container">
              <p>Round:6</p>
             </div>
          </div>
          <div className="bottom">
          <div className="score-1">{props.data.six}</div>
            <div className="score-2">{props.data.sixsix}</div>
          </div>
        </div>
        <div className='item-two'>
        <p>{props.data.roundScore6}</p>
        </div>
      </div>
      <div className="grid-item">
        <div className='item-one'>
          <div className="top">
            <div className="num-container">
              <p>Round:7</p>
             </div>
          </div>
          <div className="bottom">
          <div className="score-1">{props.data.seven}</div>
            <div className="score-2">{props.data.sevenseven}</div>
          </div>
        </div>
        <div className='item-two'>
        <p>{props.data.roundScore7}</p>
        </div>
      </div>
      <div className="grid-item">
        <div className='item-one'>
          <div className="top">
            <div className="num-container">
              <p>Round:8</p>
             </div>
          </div>
          <div className="bottom">
          <div className="score-1">{props.data.eight}</div>
            <div className="score-2">{props.data.eighteight}</div>
          </div>
        </div>
        <div className='item-two'>
        <p>{props.data.roundScore8}</p>
        </div>
      </div>
      <div className="grid-item">
        <div className='item-one'>
          <div className="top">
            <div className="num-container">
              <p>Round:9</p>
             </div>
          </div>
          <div className="bottom">
          <div className="score-1">{props.data.nine}</div>
            <div className="score-2">{props.data.ninenine}</div>
          </div>
        </div>
        <div className='item-two'>
        <p>{props.data.roundScore9}</p>
        </div>
      </div>
      <div className="grid-item">
        <div className='item-one'>
          <div className="top">
            <div className="num-container">
              <p>Round:10</p>
             </div>
          </div>
          <div className="bottom">
          <div className="score-1">{props.data.ten}</div>
            <div className="score-2">{props.data.tenten}</div>
          </div>
        </div>
        <div className='item-two'>
        <p>{props.data.roundScore10}</p>
        </div>
      </div>
    </div>
  )

}

export default ScoreBoard;