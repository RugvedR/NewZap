import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import './News.css';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

import InfiniteScroll from "react-infinite-scroll-component";



const News = (props)=> {
  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);


    // e1653ca971fc4304a17cd692bf3efd76

    const updateNews = async ()=>{
      props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    
      setLoading(true)
      
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(70);

      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);

    }

    useEffect(()=>{
      updateNews();
    },[])
    
    // const handlePrevClick = async ()=>{
    //   console.log("previous clicked");
    //   setPage(page - 1);
    //   updateNews();

    // }

    // const handleNextClick = async ()=>{
    //   window.scrollTo(0,0);
    //   setPage(page+1);
    //   updateNews();

    // }

    const fetchMoreData = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page+1);
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
      console.log(parsedData);   
      
    };

    return (
      <>
        <h1 className='text newsHeader ' > <strong>NewZap </strong> - {(props.category)[0].toUpperCase()+(props.category).substring(1)}</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

          
        <div className="row">
            {articles.map((element)=>{
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

News.defaultProps = {
  country: 'in',
  pageSize: 9,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News
