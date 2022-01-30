import React from 'react';
import config from '../../config';
const mailto = "MAILTO:" + config.email;

export default function Subscribe() {
  return (
    <section id="signup" className="signup-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
            <h2 className="text-white mb-5">Contact us</h2>

            <form className="form-inline d-flex" action={mailto}>
              <input
                type="email"
                className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                id="inputEmail"
                placeholder="Enter email address..."
              />
              <button type="submit" className="btn btn-primary mx-auto">
                Contact
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
