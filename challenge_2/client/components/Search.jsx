import React from 'react';

class Search extends React.Component{

  constructor(props){
    super(props)
    this.state={
      startDate:'',
      endDate:'',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event){
    this.setState({
      [event.target.id]:event.target.value,
    })

  }
  handleClick(event){
    event.preventDefault();
    this.props.search(this.state);
    this.setState({
      startDate:'',
      endDate:'',
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleClick}>
          <p>
            Start Date
            <input type='date' id="startDate" onChange={this.handleChange} value={this.state.startDate}/>
          </p>
          <p>
            End Date
            <input type='date' id="endDate" onChange={this.handleChange} value={this.state.endDate}/>
          </p>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}



export default Search;