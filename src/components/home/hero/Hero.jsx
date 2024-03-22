import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>

      <section className='hero'>
        <div className='container'>
          <Heading title='WE-Loan ' subtitle='A KudumbaSree Loan Initiative' />

          <form className='flex'>
            <div className='box'>
              <span>District</span>
              <input type='text' placeholder='Enter Location' />
            </div>
            <div className='box'>
              <span>KudumbaSree Unit No</span>
              <input type='text' placeholder='Enter valid no' />
            </div>
            <div className='box'>
              <span>KudumbaSree Unit Name</span>
              <input type='text' placeholder='Enter valid name' />

            </div>
            <br></br>
            <button className='btn5' id="bu">
              Submit
            </button>
            {/* <div className='box'>
              <h4>Advance Filter</h4>
            </div> */}
  
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
