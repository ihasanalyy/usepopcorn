

import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useContext } from 'react';
import { myContext } from '../App.js';

const Navbar = () => {
    const { setSearch, movies, setThemeHandler, themeHandler } = useContext(myContext);

    const toggleTheme = () => {
        setThemeHandler(!themeHandler);
    };

    return (
        <nav className="navbar w-100">
            <div className="container-fluid d-flex justify-content-between align-items-center customNavbar">
                <a className="navbar-brand text-decoration-none">🍿 USEPOPCORN</a>
                <form className="search-form" role="search">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Find your Fav Movies!"
                        aria-label="Search"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
                <div onClick={toggleTheme} className="theme-toggle">
                    <DarkModeIcon />
                </div>
                <p className="results-count">Found {movies?.length || 0} Results</p>
            </div>
        </nav>
    );
};

export default Navbar;

