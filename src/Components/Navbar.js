
const Navbar = ({setSearch, movies}) => {
   
    
    return (

        <nav class="navbar w-100">
            <div class="container-fluid d-flex justify-content-between align-items-center customNavbar m-auto ">
                <a class="navbar text-decoration-none">🍿 USEPOPCORN</a>
                <form class="d-flex w-25 " role="search">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setSearch(e.target.value)} />
                </form>
                <p className="text-center">Found {movies?.length > 0 ? movies.length : 0} Results</p>
            </div>
        </nav>
    )
};


export default Navbar

