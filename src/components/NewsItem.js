// import PropTypes from "prop-types";
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageUrl?"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/game-1926906_1280-647x363.png?zVAo2ue3dI0md_JJic5lzsx7eXK96Suv":imageUrl}/>
          <div className="card-body">
            <h5 className="card-title">{title}<h3><span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>{source}</span></h3></h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small class="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
