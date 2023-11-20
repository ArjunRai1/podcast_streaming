import { Link, BrowserRouter } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

import React from 'react';

function Footer() {
    return (
        <BrowserRouter>
            <footer className="footer bg-dark text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            {/* <h4>Navigation</h4>
                            <Link to="/user-login">Browse Podcasts</Link>
                            <li><a href="/contact">Contact Us</a></li>
                        </div>
                        <div className="col-md-8">
                            <div className="follow-us">
                                <h4>Follow Us</h4>
                                <div className="social-icons">
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="footer-bottom bg-secondary text-center py-2">
                    <p>&copy; 2023 EchoPulse</p>
                </div>
            </footer>
        </BrowserRouter>
    );
}

export default Footer;
