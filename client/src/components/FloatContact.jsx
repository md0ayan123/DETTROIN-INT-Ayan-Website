import "./FloatContact.css";

export default function FloatContact() {
  return (
    <div className="float-contact">
      <a
        href="https://api.whatsapp.com/send?phone=917055582117"
        className="float-btn whatsapp"
        aria-label="WhatsApp us"
      >
        💬
      </a>
      <a href="tel:+917055582117" className="float-btn call" aria-label="Call the school">
        📞
      </a>
    </div>
  );
}
