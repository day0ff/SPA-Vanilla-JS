let Navbar = {
    render: async () => {
        let view = `
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <a class="navbar-item" href="/#/home">
                    Home
                </a>            
                <a class="navbar-item" href="/#/error">
                    Error
                </a>         
            </nav>
        `;
        return view
    }
};

export default Navbar;