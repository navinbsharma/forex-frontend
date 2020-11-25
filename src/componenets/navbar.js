import { Navbar } from 'react-bootstrap'
// import { Navbar, Form, Button, FormControl, Nav, NavDropdown, OverlayTrigger, Tooltip } from 'react-bootstrap'


function NavBar() {

    // const renderTooltip = (props) => (
    //     <Tooltip id="button-tooltip" {...props}>
    //         Feature Comming Soon !!!
    //     </Tooltip>
    // );

    return (
        <div>
            <Navbar bg="transparent" expand="lg">
                <Navbar.Brand classnameName="title nav-item-color" href="#home">FOREX AGGREGATOR</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <ul className="nav navbar-nav navbar-right">
                <li>
                    <button className="btn btn-primary-outline" id="signup" >SignUp</button>
                </li>
                <li>
                    <button className="btn btn-primary-outline" id="login" >Login</button>
                </li>
            </ul>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
};



export default NavBar;

