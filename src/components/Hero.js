import React from 'react';

import { Button } from './Button';
import './Hero.css';

function Hero() {
    return (
        <div className="hero">
            <video src="/video.mp4" autoPlay loop muted/>
            <h1>ADVENTURE BEGINS</h1>
            <p className="p">What are u waiting for?</p>
            <br/><br/>
            <div className="bt">
            <Button className="btns" Buttonstyle="btn--outline" Buttonsize="btn--large">GET STARTED</Button>
            <Button className="btns"  Buttonsize="btn--large">WATCH TRAILER <i className="fa fa-play-circle"></i></Button>
        </div></div>
    )
}

export default Hero
