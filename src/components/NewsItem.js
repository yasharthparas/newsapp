import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div  style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
              
            }}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={!imageUrl? "https://images.hindustantimes.com/img/2022/12/17/1600x900/_0151ec10-b12c-11ea-87e9-7390d9ea5414_1671284579587_1671284579587.jpg": imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">  By {!author ? "Unknown" : author} on{" "}  {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl}  target="_blank"  className="btn btn-primary btn-sm"  rel="noreferrer">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
