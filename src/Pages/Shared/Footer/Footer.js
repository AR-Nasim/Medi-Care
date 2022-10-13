import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <h5>Contact Us</h5>
                <div>
                    <a target="_blank" href="www.facebook.com"><i className="fab fa-facebook"></i></a>
                    <a target="_blank" href="www.twitter.com"><i className="fab fa-twitter"></i></a>
                    <a target="_blank" href="www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                    <a target="_blank" href="www.instagram.com"><i className="fab fa-instagram"></i></a>
                </div>
                <small><i className="far fa-copyright"></i> Medi-Care 2021. All rights reserved.</small>
            </div>
        </div>
    );
};

export default Footer;