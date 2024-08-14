import {Link} from "react-router-dom"
import "./Home.css";
import Logo from "./Logo.png";
import Rectangle from "./Rectangle.png"
import Crle from "./crle.png"

function Home() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__app">
                    <div className="footer__logo">
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <div className="footer__list">
                        <ul>
                            <li>
                                <Link to="/">HOME</Link>
                            </li>
                            <li>
                                <Link to="/aboutus">ABOUT US</Link>
                            </li>
                            <li>
                                <Link to="/createplan">Create your plan</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <img className="small__img" src={Crle} alt="rasm"/>
                <div className="footer__hero">
                    <div className="footer__hero__text">
                        <h2>Good coffee
                            is made simply.</h2>
                        <p>Start your mornings with the world’s best coffees. Try our expertly
                            curated artisan coffees from our best roasters delivered directly to your door, at your
                            schedule.</p>
                        <button>Create your plan</button>
                    </div>
                    <div className="footer__hero__img">
                        <img className='big__img' src={Rectangle} alt="rasm"/>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Home;
