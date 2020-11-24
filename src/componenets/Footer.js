import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
      <MDBFooter className="font-small pt-4 mt-4 footer  container-fluid">
        <MDBContainer fluid className="text-center text-md-left ">
          <MDBRow className = "row-footer">
            <MDBCol md="4">
            <h5 className="title">Quick Links</h5>
              <ul className = "list">
              <li className="list-unstyled">
                <a href="#!">About Us </a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Convert Cuurency</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Compare Providers</a>
              </li>
            </ul>
            </MDBCol>
            <MDBCol md="4">
            <h5 className="title">Know More About Our Developers</h5>
            <ul className = "list">
            <li className="list-unstyled">
              <a href="https://github.com/HimanshuBohra">Himanshu Bohra  </a>
            </li>
            <li className="list-unstyled">
              <a href="https://github.com/jayapunjabi">Jaya Punjabi</a>
            </li>
            <li className="list-unstyled">
              <a href="https://github.com/navinsharma137">Navin Sharma 
              </a>
            </li>
            <li className="list-unstyled">
              <a href="https://github.com/LordPeinSama">Steven Sequeira 
              </a>
            </li>
          </ul>
            </MDBCol>
            <MDBCol md="4">
            <h5 className="title social">Social</h5>
             
              <FaFacebookF className="icons "/>
           
              <AiFillInstagram className=" insta"/>
             
            
              <AiOutlineWhatsApp className="insta"/>
            
            </MDBCol>
          </MDBRow>
         
        </MDBContainer>
        
        <div className="row end">
        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
          <p> Compare side by side to make the right choice.Find a cheaper, faster way to send money abroad.</p>
          ©  {new Date().getFullYear()} 
           <br/>
                Forex Aggregator
        </div>
        </div>
      </MDBFooter>
    );
  }


export default Footer;