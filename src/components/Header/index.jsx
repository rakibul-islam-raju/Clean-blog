import React from 'react';
import Nav from './Nav';

function header({ bgImage, title, subTitle }) {
    return (
        <div>
            <Nav />

            <header className="masthead" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className="overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>{title}</h1>
                                <span className="subheading">{subTitle}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default header;
