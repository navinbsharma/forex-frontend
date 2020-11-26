import { Navbar, Nav } from 'react-bootstrap'
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
                <Navbar.Brand className="title nav-item-color" href="#home">FOREX AGGREGATOR</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link><span className="nav-item-color">Login/Sign Up</span></Nav.Link>

                        {/* <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 300 }} overlay={renderTooltip}>
                            <Nav.Link href="#link"><span className="nav-item-color">Near By Agent</span></Nav.Link>
                        </OverlayTrigger>
                        <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 300 }} overlay={renderTooltip}>
                            <Nav.Link href="#link"><span className="nav-item-color">Near By Bank</span></Nav.Link>
                        </OverlayTrigger> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
};



export default NavBar;

