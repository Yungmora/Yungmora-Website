const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>Let's make great music together</p>

      <div className="contact-info">
        <h2>Direct Contact</h2>
        <p><strong>Location:</strong> Lagos, Nigeria (Ikorodu)</p>
        <p><strong>Email:</strong> yungmoramuzik@gmail.com</p>
        <p><strong>Phone:</strong> +234 905 229 7452</p>
      </div>

      <div className="socials" style={{marginTop: '30px'}}>
        <a href="https://www.youtube.com/@yungmora_420" target="_blank">YouTube</a> | 
        <a href="https://x.com/morazbeatz" target="_blank">Twitter</a> | 
        <a href="https://www.facebook.com/moraondbeat" target="_blank">Facebook</a>
      </div>
    </div>
  );
};

export default Contact;