import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            {/* Top Navbar */}
            <header className="top-navbar">
                <div className="container">
                    <Link to="/">
                        <h1>Workout Planner</h1>
                    </Link>
                    
                </div>
            </header>

            {/* Bottom Navbar */}
            <footer className="bottom-navbar">
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Training</Link>
                            </li>
                            <li>
                                <Link to="/">Custom</Link>
                            </li>
                             <li>
                                <Link to="/">Excersize</Link>
                            </li>
                            <li>
                                <Link to="/">Account</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </>
    );
}

export default Navbar;
