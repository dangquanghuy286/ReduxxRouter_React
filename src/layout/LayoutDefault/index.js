import { NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss";

function LayoutDefault() {
    return (
        <div className="layout-default">
            <header className="layout-default__header">
                <div className="layout-default__logo">Logo</div>
                <nav className="layout-default__menu">
                    <ul>
                        <li>
                            <NavLink to="/" aria-label="Home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" aria-label="About">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" aria-label="Contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" aria-label="Blog">Blog</NavLink>
                            <ul className="layout-default__menu__submenu">
                                <li>
                                    <NavLink to="/blog/news" aria-label="Blog News">BlogNews</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blog/related" aria-label="Blog Related">BlogRelated</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/info-user" aria-label="InfoUser">InfoUser</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="layout-default__main"><Outlet /></main>
            <footer className="layout-default__footer">Copy right @ 2025</footer>
        </div>
    );
}

export default LayoutDefault;
