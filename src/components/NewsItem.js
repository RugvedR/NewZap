import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl} = this.props;

    return (
      <div className='my-3' >
        <div className="card">
            <img src={imageUrl?imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9RQMryiKDBx0OzKU_BtiQWcAg_B368BBJg&usqp=CAU"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"> {(title.length<40)? title:(title+"...")}</h5>
                <p className="card-text"> {(description.length<80)? description:(description+"...")}</p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
