import React from 'react';
import '../styles/index.css';
import '../styles/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div id="landing">
            <div className="stars"></div>
            <div className="cover"></div> 
            <br></br>
            <h1 id="landing_title">Spacestagram 🌌</h1>

            <div className="col-md-8 mx-auto pb-3">
                <h4 id="desc">
                    Image-sharing from the frontier of space. 📷
                </h4>
                <button className="btn btn-outline-primary bton-large" id='liftoff_button' type="submit">
                    <Link to="/posts" style={{textDecoration: 'none'}}> Lift Off! 🚀 </Link>
                </button>    
            </div>
            <br></br>
            <h5 id="source_code">
                See my source code <a href="https://github.com/hydraxiler32/Spacestagram" style={{textDecoration: 'none'}}>here</a>.
            </h5>
        </div>
    );
}

export default Landing;