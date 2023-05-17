import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Loading from './Loading';
import PropTypes from 'prop-types';

export class News extends Component {

    static defaultProps = {
        country: "us",
        pageSize: 12,
        category: "general",
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

   constructor(){
    super();
    this.state={
        articles: [],
        page: 1
    }
   }

   async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a1529b0dd519425d8392280d212e8beb&page=${this.state.page}&pageSize=12`;
    const data = await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles,
      totalResults: parsedData.totalResults
  });
 } 

   async componentDidMount(){
    this.updateNews();
  };

   handlePrevClick = async () =>{
    this.setState({page: this.state.page - 1})
    this.updateNews();
   }

   handleNxtClick = async () =>{
    if (this.state.page +1 > Math.ceil(this.state.totalResults/12)) {
        
    } else {
        this.setState({page: this.state.page + 1})
        this.updateNews();
   }
}
  render() {
    return (
      <div>
        <div className='container my-3'>
            <h2>Headlines</h2>
            {this.state.loading && <Loading/>}
            <div className='row'>
                {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className='col-md-4' key={element.url}>

                    <Newsitems title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,50):""} imgUrl= {element.urlToImage} newsUrl={element.url}/>
                      </div>
                })}  
            </div>
            <div className="container d-flex justify-content-between">
            <button type="button" disabled = {this.state.page<=1}
            onClick={this.handlePrevClick} className="btn btn-dark">&larr;Previous</button>
            <button type="button" disabled={this.state.page +1 > Math.ceil(this.state.totalResults/12)} onClick={this.handleNxtClick} className="btn btn-dark">&rarr;Next</button>
            </div>
        </div>
      </div>
    )
  }
}

export default News;