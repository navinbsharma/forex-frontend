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
                    {/* <Nav classnameName="ml-auto">
                        <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 300 }} overlay={renderTooltip}>
                            <Nav.Link href="#link"><span classnameName="nav-item-color">Near By Agent</span></Nav.Link>
                        </OverlayTrigger>
                        <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 300 }} overlay={renderTooltip}>
                            <Nav.Link href="#link"><span classnameName="nav-item-color">Near By Bank</span></Nav.Link>
                        </OverlayTrigger>
                    </Nav> */}
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
};

export default NavBar;

