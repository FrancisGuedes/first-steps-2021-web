import './navbar.scss';
import logo from './../../assets/images/logo-navbar.png'
import { useState } from 'react';

const Navbar = () => {

    const [navConfig, setNavConfig] = useState({
        openMenu: false
    });
    // NAVBAR MOBILE
    const openNavMenu = () => {
        console.log("onclick");
        setNavConfig({ openMenu: !navConfig.openMenu });
    }

    // let closeNavMenu = document.querySelector(".times-menu-close") as HTMLLIElement;
    // let menuOverlay = document.querySelector(".menu-overlay") as HTMLDivElement;
    // let mediaSize = 770;


    // function collapseSubMenu() {
    //     navMenu.querySelector('.menu-item-has-children.active .navbar-dropdown')?.removeAttribute('style');
    //     navMenu.querySelector('.menu-item-has-children.active')?.classList.remove('active');
    // }

    // function resizeFix() {
    //     // If menu is open, closes
    //     if (navMenu.classList.contains('active')) {
    //         toggleNav();
    //     }
    //     // If menuItemHasChildren is expanded, collapses
    //     if (navMenu.querySelector('.menu-item-has-children.active')) {
    //         collapseSubMenu();
    //     };
    // }

    // closeNavMenu.addEventListener("click", toggleNav);
    // menuOverlay.addEventListener("click", toggleNav);

    // navMenu.addEventListener("click", (e: any) => {
    //     if (e.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize) {
    //         // prevent default anchor click behavior
    //         e.preventDefault();
    //         const menuItemHasChildren = e.target.parentElement;
    //         if (menuItemHasChildren.classList.contains('active')) {
    //             collapseSubMenu();
    //         }
    //         else {
    //             // collapse existing expanded menuItemHasChildren
    //             if (navMenu.querySelector('.menu-item-has-children.active')) {
    //                 collapseSubMenu();
    //             }
    //             // expand new menuItemHasChildren
    //             menuItemHasChildren.classList.add('active');
    //             const subMenu = menuItemHasChildren.querySelector('.navbar-dropdown');
    //             subMenu.style.macHeight = subMenu.scrollHeight + "px";
    //         }
    //     }
    // });

    return (
        <nav className="navbar-wrapper">
            <div className="logo">
                <img src={logo} alt="logo" className="navbar-logo" />
            </div>

            <div className="menu-toggle" onClick={openNavMenu}>
                <span className="fa-bars" ></span>
            </div>
            <div className={`navbar-container ${navConfig.openMenu ? 'navbar-container-open' : ''}`} id="nav-overlay">
                <ul id='navbar-content'>
                    <li className="nav-item" >
                        <a className="nav-link" href="intro.html">Início</a>
                    </li>
                    <li className="nav-item" >
                        <a className="nav-link section-evento" href="#main-event-section">Evento</a>
                    </li>
                    <li className="nav-item menu-item-has-children" >
                        <a className="nav-link section-competicao" data-toggle='navbar-dropdown' id='dropdownbtn' href="#main-competicao-section">
                            Competição
                            <i className="fa fa-chevron-down arrow-dropmenu" aria-hidden="true"></i>
                        </a>

                        <ul className="navbar-dropdown">
                            <li className="nav-item">
                                <a className="nav-link" href="breaking.html">Breaking</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="topstyles.html">Top Styles</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="mcing.html">Mcing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="beatbox.html">Beatbox</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="graffiti.html">Graffiti</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="producao.html">Produção</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item" >
                        <a className="nav-link section-programa" href="#main-programa-section">Programa</a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}


export default Navbar;