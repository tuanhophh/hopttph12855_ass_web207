import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { signin } from "../../api/authAPI";
import { isAuthenticated, authenticate } from "../../auth";
import "../../pages/website/css/user.css";
import {Link} from "react-router-dom";

const ContactClient = () => {
    console.log(isAuthenticated())
  //   const { id } = isAuthenticated();
  //   const { register, handleSubmit } = useForm();
  //   const [error, setError] = useState("");
  //   const [success, setSuccess] = useState(false);
  //   const onSubmit = async (user) => {
  //     try {
  //       const { data } = await signin(user);
  //       authenticate(data.user);
  //       setSuccess(true);
  //       // e.target.reset();
  //     } catch (error) {
  //       setError(error.response.data);
  //     }
  //   };
  //   const redirectUser = () => {
  //     if (success) {
  //       if (id == 1) {
  //         return <Redirect to="/admin" />;
  //       } else {
  //         return <Redirect to="/" />;
  //       }
  //     }
  //   };
  return (
    <div>
  {/* Start Content Page */}
  <div className="container-fluid bg-light py-5">
    <div className="col-md-6 m-auto text-center">
      <h1 className="h1">Contact Us</h1>
      {/* <p>
        Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet.
      </p> */}
    </div>
  </div>
  {/* Start Map */}
  {/* <div id="mapid" style={{width: '100%', height: 300}} /> */}
  {/* Ena Map */}
  {/* Start Contact */}
  <div className="container pb-5">
    <div className="row py-5">
      <form className="col-md-9 m-auto" method="post" role="form">
        <div className="row">
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="inputname">Name</label>
            <input type="text" className="form-control mt-1" id="name" name="name" placeholder="Name" />
          </div>
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="inputemail">Email</label>
            <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Email" />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputsubject">Address</label>
          <input type="text" className="form-control mt-1" id="Address" name="Address" placeholder="Address" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputmessage">Message</label>
          <textarea className="form-control mt-1" id="message" name="message" placeholder="Message" rows={8} defaultValue={""} />
        </div>
        <div className="row">
          <div className="col text-end mt-2">
            <button type="submit" className="btn btn-success btn-lg px-3">Let’s Talk</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  {/* End Contact */}
</div>

  );
};

export default ContactClient;
