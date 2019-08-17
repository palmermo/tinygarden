import React from 'react'
// import article2 from '/Users/matthewpalmer/Desktop/C34_matthew_raphael_tim/app/assets/images/article2.png'
// import article3 from '/Users/matthewpalmer/Desktop/C34_matthew_raphael_tim/app/assets/images/article3.png'



const Articles = () => {
  return (
    <>
      <article className="article">
        <div className="plant-pic">
          <img src="http://tinygarden-bucket.herokuapp.com/images/article2.png" alt='article'/>
        </div>
      <div className="care-tips">
        <header className="title">
          <p>Repot your plants like a pro</p>
        </header>
        <div className="care-tips" >
          <p>Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.
          Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s,
          when an unknown printer took a galley of
          type and scrambled it to make a type
          specimen book.
          </p>
        </div>
        <div className="read-more">
          <a href="https://www.instagram.com/p/B0uBnJYlztk/"><p>Read more</p></a>
        </div>
        </div>
      </article>
      <article className="article">
        <div className="plant-pic">
          <img src="http://tinygarden-bucket.herokuapp.com/images/article3.png" alt='article'/>
        </div>
        <div className="care-tips">
          <div className="title">
            <p>Repot your plants like a pro</p>
        </div>
        <div className="care-tips">
            <p>Lorem Ipsum is simply dummy text of
            the printing and typesetting industry.
            Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s,
            when an unknown printer took a galley of
            type and scrambled it to make a type
            specimen book.
            </p>
          </div>
          <div className="read-more">
          <a href="https://www.instagram.com/p/B0uBwRNlaB5/"><p>Read more</p></a>
          </div>
        </div>
      </article>
      <article className="article">
        <div className="plant-pic">
        <img src='http://tinygarden-bucket.herokuapp.com/images/article2.png' alt='article 3'/>
        </div>
      <div className="care-tips">
        <div className="title">
          <p>Repot your plants like a pro</p>
        </div>
          <div className="care-tips">
            <p>Lorem Ipsum is simply dummy text of
              the printing and typesetting industry.
              Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s,
              when an unknown printer took a galley of
              type and scrambled it to make a type
              specimen book.
          </p>
          </div>
        <div className="read-more">
        <a href="https://www.instagram.com/p/B0uB2GslGPA/"><p>Read more</p></a>
        </div>
      </div>
    </article>
      <section className="section">
        <p id="load-more">Load more</p>
      </section>
    </>
  )
}

export default Articles;
