import React from "react"
import "./header.css"
const Head = () => {

  return (
    <>
      <section className='head'>
        <div className='container flexSB' id="thisnavbar">
          <div className='logo'>
          <img src='./images/blog/Transparent Logo.png' alt='' className="vskalogo" />
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <a href="https://www.instagram.com/theayushbharadwaja/" ><i className='fab fa-instagram icon'></i></a>
            <i className='fab fa-twitter icon'></i>
            <a href="https://www.instagram.com/theayushbharadwaja/" ><i className='fab fa-youtube icon'></i></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
