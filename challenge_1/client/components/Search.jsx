import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props)
    this.state={
      keyWord:'',
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({
      [event.target.id]:event.target.value,
    })
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(this.state);
    this.props.handleSearch(this.state)
    this.setState({
      keyWord:'',
    })
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            Keyword:{' '}
            <input type="text" id="keyWord" onChange={this.handleChange} value={this.state.keyWord}/>
          </p>
          <p>
            <button type="submit">Search</button>
          </p>
        </form>
      </div>
    )
  }

}


export default Search