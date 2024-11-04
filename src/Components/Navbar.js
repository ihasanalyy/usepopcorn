import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useContext } from 'react';
import {myContext} from '../App.js';


const Navbar = () => {
    const { setSearch , movies } = useContext(myContext); 
//    const openHandler = () =>{
//     console.log("clicked")
//    }
    
    return (

        <nav class="navbar w-100">
            <div class="container-fluid d-flex justify-content-between align-items-center customNavbar m-auto ">
                <a class="navbar text-decoration-none">🍿 USEPOPCORN</a>
                <form class="d-flex w-25 " role="search">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setSearch(e.target.value)} />
                </form>
                <div>{onclick=()=>console.log("clicked")} <DarkModeIcon /> </div> 
                <p className="text-center">Found {movies?.length > 0 ? movies.length : 0} Results</p>
            </div>
        </nav>
    )
};


export default Navbar

