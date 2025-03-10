import { Link } from "react-router-dom"


export function Navbar(){
    return (
        <div className="home-page__nav-items">
            <Link to="/accessibility">
            <button className="home-page__nav_item">Accessibility</button>
            </Link>
            <Link to="/css">
            <button className="home-page__nav_item">CSS</button>
            </Link>
            <Link to="/html">
            <button className="home-page__nav_item">HTML</button>
            </Link>
            <Link to="/javascript">
            <button className="home-page__nav_item">JavaScript</button>
            </Link>
        </div>
            )
}
