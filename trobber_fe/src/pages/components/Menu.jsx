const { useState } = React
//const { Offcanvas } = bootstrap

const MyOffcanvas = () => {
    
    return (
        <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5>Offcanvas right</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">...</div>
        </div>
    )
}

const Navbar = () => {

    // const [token, setToken] = useState(localStorage.getItem('token'));
    // const history = useHistory();
    
    const logout = () => {
        localStorage.removeItem('token');
        setToken(localStorage.getItem('token'));
        history.push('/');
    }
    
    return (
        <nav className="navbar bg-lightdark">
            <div className="container-xl">
                 <button 
                    className="btn btn-primary" 
                    type="button" 
                    data-bs-toggle="offcanvas" 
                    data-bs-target="#offcanvasRight" 
                    aria-controls="offcanvasRight">Toggle right offcanvas</button>
            </div>
        </nav>
    );
}

