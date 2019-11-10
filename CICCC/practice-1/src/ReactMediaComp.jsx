import React from "react";
import Media from "react-media";

function ReactMediaComp() {
    return(
        <Media queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)"
        }}>
        {matches => (
        <>
            {matches.small && <p>I am small!</p>}
            {matches.medium && <p>I am medium!</p>}
            {matches.large && <p>I am large!</p>}
        </>
        )}
        </Media>
    );
}

export default ReactMediaComp;
