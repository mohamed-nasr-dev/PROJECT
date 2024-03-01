import { Container } from 'react-bootstrap'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            {localStorage.getItem("userToken") && (
                <footer className={`${styles.siteFooter}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <h6>About Me</h6>
                                <p className="text-justify">
                                    Hello! My Name Is MOH NASR I'm  a junior front-end developer who recently
                                    graduated from Route Academy
                                </p>
                            </div>
                            
                            <div className="col-sm-6 col-md-3">
                                <h6>Quick Links</h6>
                                <ul className={`${styles.footerLinks}`}>
                                    <li>
                                        <Link to="/brands">Brands</Link>
                                    </li>
                                    <li>
                                        <Link to="/categories">Categories</Link>
                                    </li>
                                    <li>
                                        <Link to="/products">Products</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="container">
                        <div className="row">
                           
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <ul className={`${styles.socialIcons}`}>
                                    <li>
                                        <a className="facebook" href="#">
                                            <i className="fa-brands fa-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="#">
                                            <i className="fa-brands fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dribbble" href="#">
                                            <i className="fa-brands fa-dribbble" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            )}
        </>
    );
}
