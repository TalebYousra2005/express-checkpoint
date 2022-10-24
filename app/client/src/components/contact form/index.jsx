import "./style.css"
export const ContactForm = () => {
  return (
    <>
    <h1>Contact us</h1>
    <div className="container">
      <div className="form-group">
        <label className="label">Email</label>
        <input className="input" placeholder="enter your email" />
      </div>
      <div className="form-group">
        <label className="label">Message</label>
        <textarea className="input" placeholder="write your message" />
      </div>
      <button className="btn">send</button>
    </div>
    </>
  );
};
