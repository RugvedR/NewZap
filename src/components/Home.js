import React from 'react'
import './Home.css'


export default function Home() {
  return (
    <>
      <div >
        <div className="home">
            <h1>Good Morning</h1>
        </div>
        <div className="topStories">
            <h1>Read top stories from</h1>
                <div class="row row-cols-1 row-cols-md-4 g-5">
                <div class="col">
                    <div class="card">
                    <img src="https://static.toiimg.com/photo/47529300.cms" class="card-img" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Times Of India</h5>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src="https://www.pngitem.com/pimgs/m/218-2186575_thehindu-logo-logo-of-the-hindu-newspaper-hd.png" class="card-img" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">The Hindu</h5>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src="https://www.medianews4u.com/wp-content/uploads/2020/08/HT-Media-Group-refreshes-its-flagship-brand-and-launches-the-all-new-Hindustan-Times.jpg" class="card-img" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Hindustan Times</h5>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <img src="https://cdn.ndtv.com/common/images/ogndtv.png" class="card-img" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">NDTV News</h5>
                    </div>
                    </div>
                </div>
                </div>
        </div>
      </div>
    </>
  )
}
