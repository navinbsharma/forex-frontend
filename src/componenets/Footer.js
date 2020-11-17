import { FaFacebookF, FaWhatsappSquare } from "react-icons/fa";
import { AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
    return (<div>
        <footer className="footer" id="footer">
        <FaFacebookF/><AiFillInstagram/><AiOutlineWhatsApp/>
        <br/>
        ©  {new Date().getFullYear()} 
        <br/>
        Forex Aggregator
        </footer>
    </div>)
}

export default Footer;