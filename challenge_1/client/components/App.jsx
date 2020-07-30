import React from 'react';
import axios from 'axios';
import Event from './Event.jsx'
import Search from './Search.jsx'
import ReactPaginate from 'react-paginate';
import $ from 'jquery'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      event:['...loading'],
      page:1,
      pageCount:10,
      searchTerm:'',
    }
    this.handlePageClick=this.handlePageClick.bind(this)
    this.handleSearch= this.handleSearch.bind(this);
    this.loadEvent=this.loadEvent.bind(this)
  }

  loadEvent(searchTerm){
    if(searchTerm){
      axios.get(`http://localhost:3000/events?q=${searchTerm}&_page=1&_limit=10&_sort=date`)
      .then((data)=>{
        this.setState({
          event:data.data,
       })
      })
      .catch((e)=>{
        console.log(e)
      })
    }
    axios.get('http://localhost:3000/events?q=date&_page=1&_limit=10&_sort=date')
    .then((data)=>{
      this.setState({
        event:data.data,
    })
    })
    .catch((e)=>{
      console.log(e)
    })
  }
  componentDidMount(){
    this.loadEvent();
  }
  handleSearch(search){
    this.loadEvent(search.keyWord)
    this.setState({
      searchTerm:search.keyWord,
    })
  }
  handlePageClick(data){
    var page = data.selected+1;
    axios.get(`http://localhost:3000/events?q=${this.state.searchTerm}&_page=${page}&_limit=10&_sort=date`)
      .then((data)=>{
        this.setState({
          event:data.data,
       })
      })
      .catch((e)=>{
        console.log(e)
      })
  }

  render(){
    return(
      <div>
          <Search handleSearch={this.handleSearch}/>
          <Event event={this.state.event}/>
          <ReactPaginate
            previousLabel={'previous'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            nextLabel={'next'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={10}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
      </div>
    )
  }
}
export default App;