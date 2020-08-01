import React from 'react';
import axios from 'axios';
import Scorecard from './ScoreCard.jsx';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      userName:'',
      finalScore:0,
    }
    this.handleFinal= this.handleFinal.bind(this);
  }
  componentDidMount(){
    var name = prompt('Thank you for using The Bowling Scorecard App to get started Please enter your name or press okay to continue as default: ')
    if(name){
      this.setState({
        userName:name,
      });
    }
    else{
      this.setState({
        userName:"Bob"
      })
    }
  }

  handleFinal(playerInfo){
    console.log(playerInfo);
  }

  render(){
    if(!this.state.userName){
      return(<div></div>)
    }else{
      return(
        <div>
          <div className='title'>
            <h1>THE BOWLING SCORECARD APP</h1>
          </div>
          <Scorecard data={this.state} final={this.handleFinal}/>
        </div>
      )
    }
  }
}

export default App;