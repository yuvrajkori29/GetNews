import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {title,description,imageURL,url} =this.props;
    return (
      <div className="my-3">
        <div className="card" >
          <img src={imageURL}className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a rel="noreferrer" href={url} target={"_blank"} className="btn btn-dark ">
             Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
