function Contact() {
  return (
    <div className="container contact">
      <h2 className="main-title text-center">CONTACT</h2>
      {/* <div className="col-md-12">
        <div className="row">
          <div className="col-md-4 mb-1">
            <input name="name" placeholder="Name" className="contact-input" />
          </div>

          <div className="col-md-4 mb-1">
            <input name="email" placeholder="Email" className="contact-input" />
          </div>
          <div className="col-md-4 mb-1">
            <input
              name="subject"
              placeholder="Subject"
              className="contact-input"
            />
          </div>
        </div>
      </div> */}
      <div className="col-md-12">
        <p className="footer-title">Contact</p>
        <p className="contact-p">
          BinSys Brothers Inc.<br />
          3212 Spring Hill Road<br />
          Plano,Tx 75025, USA<br />
          Tel : 972-814-8249<br />
          Fax: 972-712-060<br />
          E-mail:  sales@binsystech.com
        </p>
      </div>
      {/* <br />
      <div className="col-md-12">
      <textarea
            name="message"
            placeholder="Message"
            className="contact-textarea"
          />
      </div>

      <br></br>
      <div className="row">
        <div className="col-md-12">
          <input className="form-btn" type="submit" value="Send Message" />
        </div>
      </div> */}
    </div>
  );
}
export default Contact;
