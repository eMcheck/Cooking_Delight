import { BrowserRouter as NavLink } from "react-router-dom";
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg'
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={`${process.env.PUBLIC_URL}/assets/icons/logo.svg`} alt="Logo" className="header__logo-image" />
            </div>
            <nav className="header__nav">
                <ul className="header__menu">
                    <li className="header__menu-item">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="header__menu-item">
                        <NavLink to="/recipes">Recipes</NavLink>
                    </li>
                    <li className="header__menu-item">
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li className="header__menu-item">
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="header__social">
                <ul className="header__social-list">
                    <li className="header__social-item">
                        <Facebook className="header__social-item header__social-item--facebook" />
                    </li>
                    <li className="header__social-item">
                        <Twitter className="header__social-item header__social-item--twitter" />
                    </li>
                    <li className="header__social-item">
                        <Instagram className="header__social-item header__social-item--instagram" />
                    </li>
                </ul>
            </div>
        </header>

    );
}