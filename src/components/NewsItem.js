import React from 'react'

const NewsItem =(props)=>{

    let {title, description, imageUrl, newsUrl, author, date, source} = props;

    return (
      <div className='my-3' >
        <div className="card">
            <img src={imageUrl?imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9RQMryiKDBx0OzKU_BtiQWcAg_B368BBJg&usqp=CAU"} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5><span className=' badge' style={{backgroundColor: '#5ce511'}} > {source} </span></h5>

                <h5 className="card-title"> {(title.length<40)? title:(title+"...")}   </h5>
                <p className="card-text"> {(description.length<80)? description:(description+"...")}</p>
                <p className="card-text"> <small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toUTCString() } </small> </p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
            </div>
        </div>
      </div>
    )
  
}

export default NewsItem
