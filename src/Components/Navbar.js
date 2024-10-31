
const Navbar = ({setSearch, movies}) => {
   
    
    return (

        <nav class="navbar w-100">
            <div class="container d-flex justify-content-between align-items-center customNavbar">
                <a class="navbar text-decoration-none">🍿 USEPOPCORN</a>
                <form class="d-flex gap-5 m-auto w-50" role="search">
                    <input class="form-control m-auto" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setSearch(e.target.value)} />
                    {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                </form>
                <p className="text-center m-auto">Found {movies?.length > 0 ? movies.length : 0} Results</p>
            </div>
        </nav>
    )
};


export default Navbar

