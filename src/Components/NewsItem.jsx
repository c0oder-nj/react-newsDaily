import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
    let { title, content, description, imgUrl, newsUrl} = this.props;
    return (
        <div className="card" style={{width: "18rem"}}>
        <img src={imgUrl} style={{height: '30vh'}} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}..</h5>
          <p className='card-text'>{description}</p>
          <p className="card-text">{content}...</p>
          <a target='_blank' rel="noreferrer" href={newsUrl} className="btn btn-primary">Go to News</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
