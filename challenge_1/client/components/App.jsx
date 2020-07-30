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
      offset:0,
      pageCount:0,
    }
    this.handlePageClick=this.handlePageClick.bind(this)
    this.handleSearch= this.handleSearch.bind(this);
    this.loadEvent=this.loadEvent.bind(this)
  }

  loadEvent(){
    // $.ajax({
    //   url:'http://localhost:3000/events',
    //   data:{limit:10, page: this.state.offset},
    //   dataType:'json',
    //   type:'GET',
    //   success:data=>{
    //       console.log(data.meta)
    //       this.setState({
    //         event:data,
    //         pageCount: Math.ceil(data.length /10),
    //       });

    //   },
    //   error:(xhr,status,err)=>{
    //     console.error(status,err.toString());
    //   },
    // })
     //'http://localhost:3000/events?date=-300'
     axios.get('http://localhost:3000/events?_page=10&_limit=20')
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
    console.log(search.keyWord);
  }
  handlePageClick(data){
    console.log(data)
    var selected = data.selected;
    var offset = Math.cel(selected*10)
    this.setState({offset:offset},()=>{
      this.loadEvent();
    })
  }

  render(){
    return(
      <div>
          <Search handleSearch={this.handleSearch}/>
          <Event event={this.state.event}/>
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
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