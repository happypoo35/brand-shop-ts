import { AiOutlineCheck } from "react-icons/ai";

const benefits = [
  "15% off welcome offer",
  "Free shipping, returns and exchanges on all orders",
  "$10 off a purchase on your birthday",
  "Early access to products",
  "Exclusive offers & rewards",
];

const RegistrationInfo = () => (
  <article className="registration-info" aria-label="benefits">
    <h3 className="info-title">LOYALTY HAS ITS PERKS</h3>
    <p className="info-text">
      Get in on the loyalty program where you can earn points and unlock serious
      perks. Starting with these as soon as you join:
    </p>
    <ul className="benefits">
      {benefits.map((el, id) => {
        return (
          <li key={id} className="benefit">
            <AiOutlineCheck />
            {el}
          </li>
        );
      })}
    </ul>
  </article>
);

export default RegistrationInfo;
