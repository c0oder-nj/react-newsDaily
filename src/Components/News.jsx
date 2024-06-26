import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'

// My api key from news api is --> 305bbb5420ca4d7d9f49f419509b0ff3

export default class News extends Component {

  // here articles is the attribute of a class
  // like in cpp we have private public variables/ attributes or methods of a class
  articles = [];
  constructor(){
    // so we must call super() class in derived class constructor in react in order to use the derived class constructor
    super()
    // console.log("Hello from class newsitem constructor");
    this.state = {
        articles:[],
        loading:false,
        page: 1
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=305bbb5420ca4d7d9f49f419509b0ff3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.setState({loading:true});
    // with every promise function you use | you have to use await() keyword with the promise 
    // because it should wait untill the promise is not resolved
    let json_parsed_data = await data.json();
    // you always set value to a state via setState method
    this.setState({articles : json_parsed_data.articles, loading: false, page: 1,totalResults: json_parsed_data.totalResults, disableNext: false});

  }

  // write your functions here
  handlePrev = async ()=> {
        let next_url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=305bbb5420ca4d7d9f49f419509b0ff3&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let response = await fetch(next_url);
        this.setState({loading:true});
        let json_response = await response.json();
        this.setState({
            articles: json_response.articles,
            loading: false,
            page: this.state.page - 1,
            disableNext: false
        })
    }

    handleNext = async ()=> {
          let totalPages = Math.ceil(this.state.totalResults/this.props.pageSize);
          // console.log("I am on page ", this.state.page+1); // when I click on next so I would come on new page 
          let next_url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=305bbb5420ca4d7d9f49f419509b0ff3&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
          let response = await fetch(next_url);
          this.setState({loading:true})
          let json_response = await response.json();
          var flag = this.state.page+1>=totalPages;
          this.setState({
              articles: json_response.articles,
              loading: false,
              page: this.state.page + 1,
              disableNext: flag
          })     
    }

  render() {

    


    return (

      // loop through article array to show all the articles 
      <div className='container'>
        <h2 className='my-5'>News Daily - Your daily dose of NEWS</h2>
        <div className="row my-2">
        {/* if loading is ongoing then only shows the loader else not show */}
        {this.state.loading && <Loader/>} 
          {/* mapping through my state article for fetching each article from the api  */}
          {!this.state.loading && this.state.articles.map((ele)=>{
            return (
                <div className="col-md-4 my-2" key={ele.url}>
                  <NewsItem title={ele.title?ele.title.slice(0,69):"Null Title"} content={ele.content?ele.content.slice(0,250):<b>Null Content</b>} description={ele.description?ele.description.slice(0,118):<b>Null Description</b>} imgUrl={ele.urlToImage?ele.urlToImage:"https://c.ndtvimg.com/2024-04/ohim94lk_sydney-attack_625x300_14_April_24.jpeg?ver-20240316.08"} newsUrl={ele.url}/>
                  {/* so if here my component name would be in lowercase so react becomes confused and think it as an html element insted of  */}
                  {/* a component so the name of the componet should always be capitalized so that babel will understand easily that this is a component not any html element */}
                </div> 
            )
          })}
            
        </div>

        <div className="button my-3 d-flex justify-content-between">
            <button disabled={this.state.page <=1} className="btn btn-outline-primary m-2" onClick={this.handlePrev}>&larr;Previous</button>
            <button className="btn btn-outline-primary m-2" disabled={this.state.disableNext} onClick={this.handleNext}>Next&rarr;</button>                                                 
        </div>
      </div>
    )
  }
}
