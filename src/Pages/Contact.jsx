import React from "react";
import "../Pages/Home.css";

function Contact() {
  return (
    <div>
      <div class="container">
        <div class="row py-3 ">
          <div class="contact-form ">
            <div class="col-lg-12 py-3 text-center ">
              <h2 className="py-3 eicon">Contact Us</h2>
              <p className="py-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
                inventore similique, dolorem debitis ipsum fugit. Totam dicta
                cum voluptates sit.Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Vel inventore similique, dolorem debitis ipsum
                fugit. Totam dicta cum voluptates sit.
              </p>
            </div>
            <form class="py-0 justify-content-center align-items-center mb-5">
              <div class="form-group pb-2 pt-0">
                <input
                  type="text"
                  class="w-100 p-2 "
                  placeholder="Enter Your Name Here"
                />
              </div>
              <div class="form-group py-2">
                <input
                  type="email"
                  class=" w-100 p-2 "
                  placeholder="Enter Your Email Here"
                />
              </div>
              <div class="form-group py-2">
                <textarea
                  class=" p-2 w-100"
                  cols="30"
                  rows="10"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button type="submit" class="btn btn-danger  mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
