import React from 'react';
import { Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className="my-3 mt-5 pt-5">
            <h1>Contact <span>Us</span></h1>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-7 mt-3">
                    <form action="">
                        <div className="form-floating mb-3 shadow-sm">
                            <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com"/>
                            <label for="floatingEmail">Name</label>
                        </div>
                        <div className="form-floating mb-3 shadow-sm">
                            <input type="text" className="form-control" id="floatingName" placeholder="Name"/>
                            <label for="floatingName">Email Address</label>
                        </div>
                        <div className="form-floating mb-3 shadow-sm">
                            <input type="text" className="form-control" id="floatingName" placeholder="Name"/>
                            <label for="floatingName">Phone No.</label>
                        </div>
                        <div className="form-floating mb-3 shadow-sm">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                style={{height: "100px"}}></textarea>
                            <label for="floatingTextarea2">Comments</label>
                        </div>
                        <button className="btn-custom">Submit</button>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default Contact;