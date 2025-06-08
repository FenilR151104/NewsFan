import React, { useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  

  const capitalizerFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // this function is used to capitalize the first letter of the string and return the string with first letter capitalized for example if the string is "general" then it will return "General" and this is used to set the title of the page dynamically based on the category passed from the parent component

  const updateNews = async () =>{
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
  
  useEffect(() => {
    document.title = `${capitalizerFirstLetter(props.category)} - NewsFan`;
    updateNews();
    // eslint -disable-next-line
  }, [])

  

  const handlePreviousClick = async ()=> {
    console.log("Previous");
    setPage(page-1)    
    updateNews();
  } 

  const handleNextClick = async ()=> {
    console.log("Next");
    setPage(page+1)
    updateNews();
  } 

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

    return (
      <>
      {/* <div className="container my-3"> */}
        <h2 className="text-center" style={{margin: '35px 0px', marginTop: '90px'}}>NewsFan - Top  {capitalizerFirstLetter(props.category)} Headlines</h2>
        {loading && <Spinner/>}
        {/* this is used to show spinner when new category is selected and shows that news are loading */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        

      {/*for infinite scroll*/}
        <div className="container">
        <div className="row">
          {articles.map((element) => {
          return <div className="col-md-3" key={element.url}><NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
        
      </>
    )
  
}

export default News
