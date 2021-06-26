import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-info">
                                <h3>Blog</h3>
                                <hr />

                            </div>
                            <div className="col-lg-2 col-md-6 footer-link">
                                <h4>Useful links</h4>
                                <ul>
                                    <li><a href="contact.php">Contact Us</a></li>
                                    <li><a href="about.php">About</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h4>Contact Us</h4>
                                <p>
                                    Contact Info
                                </p>

                            </div>
                            <div className="col-lg-3 col-md-6 footer-newsletter">
                                <h4>Our Newsletter</h4>
                                <h6>We will let you know new contest and blogs. Subscribe now!</h6>
                                <hr />
                                <form action="" method="post">
                                    <input type="email" name="news-email" id="" placeholder="E-Mail" />
                                    <input type="submit" name="newssubmit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong>SojebSoft</strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Maintain by <a href="http://sojebsoft.ml">SojebSoft</a>
                    </div>
                </div>
            </footer>

        </>
    )
}
