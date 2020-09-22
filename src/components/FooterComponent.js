import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-6 col-sm-3">
                        <h5 id="header">Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/tea'>Teas</Link></li>
                            <li><Link to='/aboutus'>About</Link></li>
                            <li><Link to='/room'>Rooms</Link></li>
                            <li><Link to='/event'>Events</Link></li>
                        </ul><br /><br /><br /><br />
                    </div>
                    <div className="col-6 col-sm-3 text-center offset-sm-6">
                        <h5 id="header">Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;