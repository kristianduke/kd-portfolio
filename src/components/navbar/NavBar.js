import React  from 'react';
import { NavLink } from "react-router-dom";
import {motion} from "framer-motion";

import './NavBar.css';

export const NavElement = (props) => {
    return (
        <motion.li whileHover={{borderColor:"var(--foreground-colour)"}} transition={{duration: 0}}>
            <NavLink
                to={props.link} end
                className={"nav-link"}
                style={({isActive}) => ({
                    color: isActive ? "var(--foreground-colour)" : "var(--text-colour)",
                    fontWeight: isActive ? "bold" : undefined
                })}
            >
                {props.title}
            </NavLink>
        </motion.li>
    )
}

const NavBar = ({children}) => {
    return(
        <nav className={"nav-bar"}>
            <div className="nav-content">
                <ul className="nav-elements">
                        {children}
                </ul>
                <div className="icon-container">
                    <div>
                        <a href="https://github.com/kristianduke" target={"_blank"} rel={"noreferrer"}>
                            <i className="fa-brands fa-github fa-2xl"></i>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/kristian-duke/" target={"_blank"} rel={"noreferrer"}>
                            <i className="fa-brands fa-linkedin fa-2xl"></i>
                        </a>
                    </div>
                    <div>
                        <a href="mailto: contact@kristianduke.me">
                            <i className="fa-solid fa-envelope fa-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;