import React from 'react';
import ScoreBoard from './ScoreBoard.jsx';

class ScoreCard extends React.Component{
  constructor(props){
    super(props)
    this.state={
      userName:'',
      one:0,
      oneone:0,
      two:0,
      twotwo:0,
      three:0,
      threethree:0,
      four:0,
      fourfour:0,
      five:0,
      fivefive:0,
      six:0,
      sixsix:0,
      seven:0,
      sevenseven:0,
      eight:0,
      eighteight:0,
      nine:0,
      ninenine:0,
      ten:0,
      tenten:0,
      ten3:0,
      roundScore1:0,
      roundScore2:0,
      roundScore3:0,
      roundScore4:0,
      roundScore5:0,
      roundScore6:0,
      roundScore7:0,
      roundScore8:0,
      roundScore9:0,
      roundScore10:0,
      score:'',
      roundScore:0,
      bowl:'first',
      turnNumber:1,
      overallScore:0,
      gameComplete:false,
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleEnter= this.handleEnter.bind(this);
  }
  componentDidMount(){
    var playerName = this.props.data.userName
    this.setState({
      userName:playerName,
    })
  }
  handleChange(event){
    this.setState({
      [event.target.id]:Number(event.target.value),
    })

  }
  handleEnter(event){
    event.preventDefault();

    if(this.state.turnNumber<10){
      if(this.state.bowl==='first'){
        var roundScore = this.state.score
        this.setState({
          score:'',
          roundScore:roundScore,
          bowl:'second',
        })
      }else{
        var roundScore = this.state.score+this.state.roundScore;
        var overallScore= this.state.overallScore+roundScore;

        if(this.state.turnNumber===1){
          var nextRound= this.state.turnNumber+1;
          this.setState({
            one:roundScore-this.state.score,
            oneone:this.state.score,
            roundScore1:roundScore,
            turnNumber:nextRound,
          })
        }
        if(this.state.turnNumber===2){
          var nextRound= this.state.turnNumber+1;
          this.setState({
            two:roundScore-this.state.score,
            twotwo:this.state.score,
            roundScore2:roundScore,
            turnNumber:nextRound,
          })
        }
        if(this.state.turnNumber===3){
          var nextRound= this.state.turnNumber+1;
          this.setState({
            three:roundScore-this.state.score,
            threethree:this.state.score,
            roundScore3:roundScore,
            turnNumber:nextRound,
          })
        }
        if(this.state.turnNumber===4){
          var nextRound= this.state.turnNumber+1;
          this.setState({
            four:roundScore-this.state.score,
            fourfour:this.state.score,
            roundScore4:roundScore,
            turnNumber:nextRound,
          })
        }
        if(this.state.turnNumber===5){
          var nextRound= this.state.turnNumber+1;
          this.setState({
            five:roundScore-this.state.score,
            fivefive:this.state.score,
            roundScore5:roundScore,
            turnNumber:nextRound,
          })
        }
        if(this.state.turnNumber===6){
          var nextRound= this.state.turnNumber+1;
          this.setState({
            six:roundScore-this.state.score,
            sixsix:this.state.score,
            roundScore6:roundScore,
            turnNumber:nextRound,
          })
        }
        if(this.state.turnNumber===7){
          var nextRound= this.state.turnNumber+1;
          this.setState({
            seven:roundScore-this.state.score,
            sevenseven:this.state.score,
            roundScore7:roundScore,
            turnNumber:nextRound,
          })
        }
        if(this.state.turnNumber===8){
          var nextRound= this.state.turnNumber+1;
          this.setState({
            eigth:roundScore-this.state.score,
            eighteight:this.state.score,
            roundScore8:roundScore,
            turnNumber:nextRound,
          })
        }
        if(this.state.turnNumber===9){
          var nextRound= this.state.turnNumber+1;
          this.setState({
            nine:roundScore-this.state.score,
            ninenine:this.state.score,
            roundScore9:roundScore,
            turnNumber:nextRound,
          })
        }
        this.setState({
          score:'',
          bowl:'first',
          overallScore:overallScore,
        })
      }
    }else{
      if(this.state.bowl==='first'){
        var roundScore = this.state.score
        this.setState({
          score:'',
          roundScore:roundScore,
          bowl:'second',
        })
      }
     if(this.state.bowl==='second'){
        var roundScore = this.state.score+this.state.roundScore;
        this.setState({
          ten:roundScore-this.state.score,
          tenten:this.state.score,
          score:'',
          roundScore:roundScore,
          bowl:'third',
        })
      }
      if(this.state.bowl==='third'){
         var roundScore = this.state.score+this.state.roundScore;
         var overallScore= this.state.overallScore+roundScore;
         this.setState({
           ten3:this.state.score,
           roundScore10:roundScore,
           overallScore:overallScore,
           gameComplete:true,
         })
      }

    }
  }

  render(){
    if(this.state.gameComplete===false){
      return(
        <div>
          <div>
            <form onSubmit={this.handleEnter}>
              <p>
                {this.state.userName} enter the score for your {this.state.bowl} bowl of round {this.state.turnNumber}:{' '}
                <input type='number' id='score' min='0' max='10'onChange={this.handleChange} value={this.state.score}/>
              </p>
              <button type="submit">Enter</button>
            </form>
            <div className="playerName">
              <p>Player Username:</p>
              <p>{this.state.userName}</p>
            </div>
            <ScoreBoard data={this.state}/>
            <div className="scoreboard">
              <p>OVERALL SCORE:</p>
              <p>{this.state.overallScore}</p>
            </div>
          </div>
        </div>
      )
    }else{
      if(confirm(`${this.state.userName} your game is complete your final score is ${this.state.overallScore}. Press okay to save your score and restart.`)){
        var saveObj={
          userName:this.state.userName,
          score:this.state.overallScore,
        }
        this.props.final(saveObj)
        this.setState({
          roundScore1:0,
            roundScore2:0,
            roundScore3:0,
            roundScore4:0,
            roundScore5:0,
            roundScore6:0,
            roundScore7:0,
            roundScore8:0,
            roundScore9:0,
            roundScore10:0,
            score:'',
            roundScore:0,
            bowl:'first',
            turnNumber:1,
            overallScore:0,
            gameComplete:false,
        })
        return(
          <div></div>
        )
      }else{
        alert(`${this.state.userName} your score was not saved.`);
        this.setState({
          one:0,
          oneone:0,
          two:0,
          twotwo:0,
          three:0,
          threethree:0,
          four:0,
          fourfour:0,
          five:0,
          fivefive:0,
          six:0,
          sixsix:0,
          seven:0,
          sevenseven:0,
          eight:0,
          eighteight:0,
          nine:0,
          ninenine:0,
          ten:0,
          tenten:0,
          ten3:0,
          roundScore1:0,
          roundScore2:0,
          roundScore3:0,
          roundScore4:0,
          roundScore5:0,
          roundScore6:0,
          roundScore7:0,
          roundScore8:0,
          roundScore9:0,
          roundScore10:0,
          score:'',
          roundScore:0,
          bowl:'first',
          turnNumber:1,
          overallScore:0,
          gameComplete:false,
        })
        return(
          <div></div>
        )
      }
    }
  }
}


export default ScoreCard;

