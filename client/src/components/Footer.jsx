import "./Footer.css";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-logo">
              <span className="logo-mark">EI</span>Excellence International
            </div>
            <p className="foot-about">
              A daycare-to-Class-8 school on Ramghat Road, Aligarh, built around
              close attention at every stage of a child's growth.
            </p>
            <div className="foot-social">
              <a href="https://www.facebook.com/share/1GvbBbZqN5/" aria-label="Facebook">
                f
              </a>
              <a href="https://www.instagram.com/excellence_school_aligarh" aria-label="Instagram">
                ◎
              </a>
              <a href="https://youtube.com/@excellenceschoolinternational" aria-label="YouTube">
                ▶
              </a>
            </div>
          </div>

          <div className="foot-col">
            <h5>Explore</h5>
            <a href="#about">About Us</a>
            <a href="#path">Academics</a>
            <a href="#why">Why Us</a>
            <a href="#life">School Life</a>
            <a href="#faq">FAQs</a>
          </div>

          <div className="foot-col">
            <h5>Admissions</h5>
            <a href="#admissions">Enquiry Form</a>
            <a href="#admissions">Book a Visit</a>
            <a href="#path">Growth Path</a>
          </div>

          <div className="foot-col">
            <h5>Contact</h5>
            <p>Ramghat Road, Aligarh 202001, UP</p>
            <a href="tel:+917055582117">+91 70555 82117</a>
            <a href="mailto:info@excellenceinternationalschool.com">
              info@excellenceinternationalschool.com
            </a>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 Excellence International School. All rights reserved.</span>
          <span>Redesign concept — original content, purpose &amp; structure preserved.</span>
        </div>
      </div>
    </footer>
  );
}
