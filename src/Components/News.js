import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types"

export default class News extends Component {
 
static defaultProps={
country:'in',
category:'sports'
}

static propTypes={
country:PropTypes.string,
category:PropTypes.string
}

constructor()
{
  super();
  console.log('hey they  are ccalling you useless');
  this.state={
  articles: [],
  loading:false,
  page:1
}
}

async componentDidMount()
{
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cecbc869f0c145c0a74ab682074be099
&pageSize=9&page=${this.props.page}`;

 let data=await fetch(url)
 let parsedData = await data.json();
 
  this.setState({
    articles: parsedData.articles
  });
  
}
handleclicPrev= async()=>
{
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cecbc869f0c145c0a74ab682074be099
&pageSize=9&page=${this.state.page-1}`;

  let data=await fetch(url)
  let parsedData = await data.json();
  
   this.setState({
     articles: parsedData.articles,
     page : this.state.page+1
   });
 
}

handleclickNext = async()=>
{

  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cecbc869f0c145c0a74ab682074be099
&pageSize=9&page=${this.state.page+1}`;

 let data=await fetch(url)
 let parsedData = await data.json();
 
  this.setState({
    articles: parsedData.articles,
    page : this.state.page+1
  });


  

}




    
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin:"2rem"} }>News - Top Headlines</h1>
      
       
        <div className="row">
        {this.state.articles.map((element) => {
          return <div className="col-md-4"  key={element.url}>
            <NewsItem title={element.title} description={element.description} imageURL={element.urlToImage} url={element.url}/>
          </div>
        })}
        </div>

        <div className="container d-flex justify-content-center">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handleclicPrev}>Previous</button>
<button type="button" className="btn btn-dark" onClick={this.handleclickNext}>Next</button>
        </div>
      </div>
      
    );
  }
}
