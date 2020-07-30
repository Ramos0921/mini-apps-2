import React from 'react';
import axios from 'axios';
import Search from './Search.jsx'
import Chart from './Chart.jsx'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      dates:[],
      values:[],
    }

    this.search = this.search.bind(this);
  }
  componentDidMount(){
    axios.get('http://localhost:3000/data')
      .then((data)=>{
        this.setState({
          dates:Object.keys(data.data),
          values:Object.values(data.data),
        })
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  search(dates){
    console.log(dates)
    axios.get(`http://localhost:3000/data/:${dates.startDate}&${dates.endDate}`)
    .then((data)=>{
      this.setState({
        dates:Object.keys(data.data),
        values:Object.values(data.data),
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  render(){
    if(this.state.dates.length===0){
      return(
        <div></div>
      )
    }else{
      return(
        <div>
          <div className="title">
            <h1>BITCOIN</h1>
          </div>
          <Search search={this.search}/>
          <Chart data={this.state}/>
          <p>Powered by CoinDesk</p>
        </div>
      )
    }
  }
}

export default App;