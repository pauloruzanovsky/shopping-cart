import React from "react";

export default function About() {
    return(
        <div className="wrapper">
            <div className='about'>
                <h1>About page</h1>
                <div>
                    This website was created as part of the The Odin Project's <b>Shopping Cart</b> project,
                    in which we had to create a simple shopping app with a item list and shopping cart functionality,
                    while implementing at least two Route components.

                    <p>It was built with Javascript, HTML and CSS.</p>
                    <p>React was utilized as front-end framework.</p>
                    <p>Jest was utilized as testing framework.</p>
                    <p>The food recipes and pictures were taken from Eating Well website.</p>
                </div>
            </div>
        </div>
    )
}