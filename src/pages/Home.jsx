import { Link } from '@reach/router';
import React from 'react';
import HomeBG from '../assets/img/home-bg.jpg';
import Footer from '../components/footer';
import Header from '../components/Header';

function Home() {
    return (
        <div>
            <Header
                bgImage={HomeBG}
                title="Clean Blog"
                subTitle="A Blog Theme by Start Bootstrap."
            />

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="post-preview">
                            <Link to="/post">
                                <h2 className="post-title">
                                    Man must explore, and this is exploration at its greatest
                                </h2>
                                <h3 className="post-subtitle">
                                    Problems look mighty small from 150 miles up
                                </h3>
                            </Link>
                            <p className="post-meta">
                                Posted by
                                <a href="/#">Start Bootstrap</a>
                                on September 24, 2019
                            </p>
                        </div>
                        <hr />
                        <div className="clearfix">
                            <Link className="btn btn-primary float-right" to="/#">
                                Older Posts &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <Footer />
        </div>
    );
}

export default Home;
