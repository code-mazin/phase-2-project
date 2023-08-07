import React from "react";
import Links from "./Links";

function About(props) {
    return (
        <div id="about">
            {props.bio && props.bio.length > 1 ? <p>{props.bio}</p> : null}
            <Links github={props.links.github} />
        </div>
    );
}

export default About;