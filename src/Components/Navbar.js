import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useContext, useState } from 'react';
import { myContext } from '../App.js';


const Navbar = () => {
    const { setSearch, movies, setThemeHandler, themeHandler } = useContext(myContext);
    const toggleTheme = () => {
        setThemeHandler(!themeHandler)
        console.log(themeHandler, "====>>>>")
    }


    return (

        <nav class="navbar w-100 ">
            <div class="container-fluid d-flex justify-content-between align-items-center customNavbar m-auto ">
                <a class="navbar text-decoration-none">🍿 USEPOPCORN</a>
                <form class="d-flex w-25 " role="search">
                    <input class="form-control" type="search" placeholder="Find your Fav Movies!" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
                </form>
                <div onClick={toggleTheme} className=''> <DarkModeIcon /> </div>
                <p className="text-center mb-0">Found {movies?.length > 0 ? movies.length : 0} Results</p>
            </div>
        </nav>
    )
};


export default Navbar



