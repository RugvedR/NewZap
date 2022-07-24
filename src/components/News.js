import React, { Component } from 'react'
import NewsItem from './NewsItem'
import '../News.css';

export class News extends Component {

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        console.log('component did mount method')
        let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=e1653ca971fc4304a17cd692bf3efd76&page=1&pageSize=20';
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});
    }
    
    handlePrevClick = async ()=>{
      console.log("previous clicked");
      
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e1653ca971fc4304a17cd692bf3efd76&page=${this.state.page-1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
      });

    }

    handleNextClick = async ()=>{
      console.log("next clicked");

      if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

      }
      else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e1653ca971fc4304a17cd692bf3efd76&page=${this.state.page+1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
  
        this.setState({
          page: this.state.page + 1,
          articles: parsedData.articles
        });

      }

    }

  render() {
    return (
      <div className='container my-3' >
        <h1 className='text-center' >Newsapp - Top Headlines</h1>
        <div className="row">
            {this.state.articles.map((element)=>{
                return (<div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                </div>)
            })}
            {/* <div className="col-md-4">
                    <NewsItem title='hello' description='{element.description?element.description.slice(0,80):""}' imageUrl='{element.urlToImage}' newsUrl='{element.url}' />
                </div> */}
             
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} >&larr; Previous</button>
          <div className="page-indicator">Page {this.state.page}</div>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
