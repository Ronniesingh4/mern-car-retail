import { Analytics } from "../components/Analytics";
import React from 'react'

const Home = () => {
  return (
    <>
    <main>
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
          <p>We are the World Best carDeal Company</p>
            <h1>Welcome to carDeal company</h1>
            <p>
              Are you ready to take your business to the next level with
              cutting-edge carDeal solutions? Look no further! At company,
              we specialize in providing innovative car services and solutions
              tailored to meet your unique needs.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>

          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/car5.png"
              alt="car together"
              width="400"
              height="500"
            />
          </div>
        </div>
      </section>
    </main>

    {/* 2nd section  */}
    <Analytics />

    {/* 3rd section  */}
    <section className="section-hero">
      <div className="container grid grid-two-cols">
        {/* hero images  */}
        <div className="hero-image">
          <img
            src="/images/car1.png"
            alt="car together"
            width="400"
            height="500"
          />
        </div>

        <div className="hero-content">
          <p>We are here to help you</p>
          <h1>Get Started Today</h1>
          <p>
            Ready to take the first step towards a more efficient and secure
            car infrastructure? Contact us today for a free consultation and
            lets discuss how  can help your business thrive in
            the digital age.
          </p>
          <div className="btn btn-group">
            <a href="/contact">
              <button className="btn">connect now</button>
            </a>
            <a href="/services">
              <button className="btn secondary-btn">learn more</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Home
