import React from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-pagename">
       <p><a href="/">Home</a> | <span> <a href="/contact">Contact us</a></span> </p> 
      </div>

      <div className="contact-title">
        <h1>Put Life Into Your Ideas With Us</h1>
        <p>Let’s discuss your project and find out what we can do to provide value.</p>
      </div>
      <div className="contact-forms">
        <form className="form project-form">
          <div className="form-row">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone number" />
          </div>
          <input type="email" placeholder="Email I’d" />
          <textarea placeholder="Project Brief..."></textarea>
        </form>

        <div className="job-application">
          <h3>Job Application</h3>
          <p>Tell us more about you so we can get back to you with more info.</p>
          <form className="form-job-form">
            <div className="job-left">
             <div className="form-row">
                <input type="text" placeholder="Full name" />
                <input type="text" placeholder="Phone number" />
             </div>
                <input type="email" placeholder="Email I’d" />
            </div>
            <div className="job-right">
                <input type="text" placeholder="Current CTC" />
                <input type="text" placeholder="Expected CTC" />
                <input type="file" placeholder="Upload your resume" />
                <input type="url" placeholder="Submit your portfolio link" />
                <button type="submit" className="contact-form-btn">Apply now</button>
            </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
