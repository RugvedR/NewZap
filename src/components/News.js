import React, { Component } from 'react'
import NewsItem from './NewsItem'
import './News.css';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }

    async updateNews(){
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e1653ca971fc4304a17cd692bf3efd76&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false});
    }

    async componentDidMount(){
      this.updateNews();
    }
    
    handlePrevClick = async ()=>{
      console.log("previous clicked");

      await this.setState({page: this.state.page-1});
      this.updateNews();

    }

    handleNextClick = async ()=>{
      window.scrollTo(0,0);
      console.log("next clicked");
      await this.setState({page: this.state.page+1});
      this.updateNews();


    }

    fetchMoreData = async () => {

      this.setState({page: this.state.page +1})
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e1653ca971fc4304a17cd692bf3efd76&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults});
    
      
    };

  render() {
    return (
      <>
        <h1 className='text' style={{marginTop: '90px', marginBottom:'20px', marginLeft:'80px'}} > <strong>NewZap</strong> - {(this.props.category)[0].toUpperCase()+(this.props.category).substring(1)}</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

          
        <div className="row">
            {this.state.articles.map((element)=>{
                return (<div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>)
            })}
        </div>
        </div>
        </InfiniteScroll>
        
      </>
    )
  }
}

export default News
