import { Link, BrowserRouter } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

import React from 'react';

function Footer() {
    return (
        <BrowserRouter>
            <footer className="footer bg-dark text-white">
                <div className="footer-bottom bg-secondary text-center py-2">
                    <p>&copy; 2023 EchoPulse</p>
                </div>
            </footer>
        </BrowserRouter>
    );
}

export default Footer;
