import { Container, Nav, Navbar } from "react-bootstrap";

function Menu() {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Nav className="me-auto">
                        <Navbar.Brand href="#home">React 18</Navbar.Brand>
                        <Nav.Link href={"/use-id"}>UseId</Nav.Link>
                        <Nav.Link href={"/use-sync-external-store"}>UseSyncExternalStore</Nav.Link>
                        <Nav.Link href={"/use-insertion-effect"}>UseInsertionEffect</Nav.Link>
                        <Nav.Link href={"/use-transition"}>UseTransition</Nav.Link>
                        <Nav.Link href={"/use-deferred-value"}>UseDeferredValue</Nav.Link>
                    </Nav>
                </Container >
            </Navbar>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href={"/profiler"}>Profiler</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>


    );
}
export default Menu;
