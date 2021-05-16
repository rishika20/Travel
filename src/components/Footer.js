import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className="foot-cont">
        <section className="foot-cont1">
          <p className="foot-head">
              Join the Adventure newsletter to receive our best vacation deals
          </p>
          <p className="foot-text">
              You can unsubcribe at any time
          </p>
          <div className="foot-form">
              <form>
                  <input type="email" name="email" placeholder="  Your email" className="e"/>
              </form>
          </div>
          <Button Buttonstyle="btn-outline" >Subscribe</Button>
        </section>
        

        <div className="foot-link">
           
                <div className="foot-item">
                    <h2>About Us</h2>
                    <Link to="/signup">How it works</Link>
                    <Link to="/">Testimonial</Link>
                    
                    <Link to="/">Investors</Link>
                    <Link to="/">Terms of Services</Link>
                </div>
                <div className="foot-item">
                    <h2>Video</h2>
                   
                    <Link to="/">Submit Video</Link>
                    <Link to="/">Ambassadors</Link>
                    <Link to="/">Agency</Link>
                    <Link to="/">Influencer</Link>
                </div>
                <div className="foot-item">
                    <h2>Social Media</h2>
                   
                    <Link to="/">Instagram</Link>
                    <Link to="/">Facebook</Link>
                    <Link to="/">Youtube</Link>
                    <Link to="/">Twitter</Link>
                </div>
           
        </div>
        <section className="m">
            <div className="social">
                <div className="slog">
                    <Link to="/" className="log">
                Travel  <i className='fas fa-spa'></i></Link>
                </div>
                <small className="ri">Travel © 2020</small>
                <div className="ico">
                    <Link to="/" className="icoo" target="_blank" aria-label="facebook">
                    <i class="fab fa-facebook-f"/>
                    </Link>
                    <Link to="/" className="icoo" target="_blank" aria-label="instagram">
                    <i class="fab fa-instagram"/>
                    </Link>
                    <Link to="/" className="icoo" target="_blank" aria-label="linkedin">
                    <i class="fab fa-linkedin"/>
                    </Link>
                    <Link to="/" className="icoo" target="_blank" aria-label="twitter">
                    <i class="fab fa-twitter"/>
                    </Link>
                    <Link to="/" className="icoo" target="_blank" aria-label="youtube">
                    <i class="fab fa-youtube"/>
                    </Link>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Footer
