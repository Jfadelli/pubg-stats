import '.././App.css';
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="nav-wrapper">
            <div className="navbar">
                <Link className="nav-link" to="/home">Home</Link>
                <Link className="nav-link" to="/stats">Stats</Link>
                <Link className="nav-link" to='warm-up'>Warm Up</Link>
                <Link className="nav-link" to='test'>Test</Link>
                
            </div>
        </div>
    );
}

export default Navbar;