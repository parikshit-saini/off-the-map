
export default function Header() {
    const logo = "/logo.svg";
    return (

        <header>
            <div className="topbar">
                <div className="container">
                    <div className="details">
                        <a href="mailto:travel@offthemap.co.in">travel@offthemap.co.in</a>
                        <a href="tel:++91 7328808726">+91 7328808726</a>
                    </div>

                </div>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="/"><img src={logo} alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#packages">Packages</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}