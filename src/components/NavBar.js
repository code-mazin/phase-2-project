import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#5a3e2b",
    textDecoration: "none",
    color: "green",
};

function NavBar() {
    return (
            <div>
                <NavLink
                to="/"
                // set exact so it knows to only set activeStyle when route is deeply equal to link
                exact
                // add styliing to Navlink
                style={linkStyles}
                // add prop for activeStyles
                activeStyle={{
                    background: "#f4a226",
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                exact
                style={linkStyles}
                activeStyle={{
                    background: '#f4a226',
                }}
            >
                About
            </NavLink>
            </div>
             
        
            
    );
}

export default NavBar