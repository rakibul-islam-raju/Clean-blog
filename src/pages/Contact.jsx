import React from 'react';
import ContactBG from '../assets/img/contact-bg.jpg';
import Footer from '../components/footer';
import Header from '../components/Header';

function Contact() {
    return (
        <div>
            <Header
                bgImage={ContactBG}
                title="Contact Me"
                subTitle="Have questions? I have answers."
            />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <p>
                            Want to get in touch? Fill out the form below to send me a message and I
                            will get back to you as soon as possible!
                        </p>
                        <form name="" id="">
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label htmlFor="name">
                                        Name
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Name"
                                            id="name"
                                            required
                                            data-validation-required-message="Please enter your name."
                                        />
                                    </label>
                                    <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label htmlFor="email">
                                        Email Address
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email Address"
                                            id="email"
                                            required
                                            data-validation-required-message="Please enter your email address."
                                        />
                                    </label>
                                    <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group col-xs-12 floating-label-form-group controls">
                                    <label htmlFor="phone">
                                        Phone Number
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="Phone Number"
                                            id="phone"
                                            required
                                            data-validation-required-message="Please enter your phone number."
                                        />
                                    </label>
                                    <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                    <label htmlFor="message">
                                        Message
                                        <textarea
                                            rows="5"
                                            className="form-control"
                                            placeholder="Message"
                                            id="message"
                                            required
                                            data-validation-required-message="Please enter a message."
                                        />
                                    </label>
                                    <p className="help-block text-danger" />
                                </div>
                            </div>
                            <br />
                            <div id="success" />
                            <button
                                type="submit"
                                className="btn btn-primary"
                                id="sendMessageButton"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <hr />
            <Footer />
        </div>
    );
}

export default Contact;
