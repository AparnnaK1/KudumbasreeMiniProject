import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/abimg.jpg"

const Blog = () => {
  return (
    <>
      {/* <section className='blog-out mb'>
        <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
        <div className='container recent'>
          <RecentCard /> 
        </div>
      </section> */}
      <section className='contact mb'>
        <Back  title='Please Login And Get Our Help'name='Sign In' cover={img} />
        <div className='container'>
          <form className='shadow'>
          <h2><b></b></h2>
            <h4>Please enter your login and password</h4> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Password' />
            <p className="forgot"><b><u>Forgot Password</u></b></p>
            {/* <textarea cols='30' rows='10'></textarea> */}
            <button className="btn5">Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Blog
