import React from 'react';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function About() {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <Stagger in>
                        <Fade in>
                            <h3>A Place To Unwind</h3>
                            <p>Do you seek a place to unwind and relax? A place where you can listen to chill music, look at beautiful scenery, all while drinking from a selection of gourmet teas? Well look no further, at Lofi Chai we service all of those needs and provide a little something extra for fans of the increasingly popular genre of music. We gladly represent ourselves as a venue for artists and host events in order to promote everything Lofi, we don’t care if it goes mainstream though, we prefer to stay underground. If you're a niche kind of customer then we’re your niche kind of place, come and check us out sometime and take a load off.</p>
                        </Fade>
                    </Stagger>
                </div>
                <div className="col-sm-6">
                    <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'translateY(5%)'
                    }}>
                        <img src="/assets/images/lofi.jpg" className="img-fluid" alt="Lofi Logo" />
                    </FadeTransform>
                </div>
            </div>
        </div>
    );
}

export default About;