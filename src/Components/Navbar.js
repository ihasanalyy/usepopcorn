const Navbar = () => {
    return (

        <nav class="navbar ">
            <div class="container-fluid">
                <a class="navbar-brand">USEPOPCORN</a>
                <form class="d-flex gap-5 m-auto" role="search">
                    <input class="form-control m-auto" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
};


export default Navbar