import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = ({ emailSent, setEmailSent }) => {
  const form = useRef();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_3bujoye", "template_446f5ee", form.current, "ji5HWdi1xmOX7Y4p_").then(
      (result) => {
        setEmailSent(true);
        console.log("🚀 ~ file: emailForm.js ~ line 12 ~ sendEmail ~ result", result);
        // show the user a success message
      },
      (error) => {
        console.log("🚀 ~ file: emailForm.js ~ line 16 ~ sendEmail ~ error", error);
        // show the user an error
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      {/* <form> */}
      <div className="form-control mb-6">
        {/* <label className="label">
          <span className="label-text">Your Name</span>
        </label> */}
        <label className="input-group">
          <span>Name</span>
          <input type="text" name="user_name" placeholder="John Smith" className="input input-bordered" />
        </label>
      </div>
      <div className="form-control mb-6">
        {/* <label className="label">
          <span className="label-text">Your Email</span>
        </label> */}
        <label className="input-group">
          <span>Email</span>
          <input type="text" name="user_email" placeholder="JohnSmith@gmail.com" className="input input-bordered" />
        </label>
      </div>
      <div className="form-control mb-6">
        {/* <label className="label">
          <span className="label-text">Your Message</span>
        </label> */}
        <label className="input-group">
          <span>Message</span>
          <textarea className="textarea input input-bordered" name="message" type="text" placeholder="Message"></textarea>
        </label>
      </div>
      <button className="btn" type="submit">
        Send me an email
      </button>
    </form>
  );
};

export default EmailForm;
