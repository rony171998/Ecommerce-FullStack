import React from "react";
import { useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/slices/category.slice";
import SearchBar from "./SearchBar";

const NavBar = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    let categories = useSelector((state) => state.category);
        
    return (
        <Navbar bg="primary" expand="lg">
            <Container>
                <Navbar.Brand href="/"> Smart-Mart </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="navbarColor02">
                    <Nav className="me-auto">
                        <Nav.Link href="/" >Home</Nav.Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            {
                                categories.length !== 0  &&
                                categories.categories.map((category) => (
                                    <NavDropdown.Item key={category.id} href={`#/category/${category.id}`}>{category.name}</NavDropdown.Item>
                                ))

                            }
                            
                        </NavDropdown>

                        
                    </Nav>
                    <Nav>
                       <SearchBar /> 
                    </Nav>
                    
                    <Nav>
                        <Nav.Link
                            
                            href="#/User"
                        ></Nav.Link>

                        <NavDropdown title="User" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#/User">
                                Profile
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#/login">
                                Login
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/signup">
                                Sign Up
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/addProduct">
                                Add Product
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/addCategory">
                                Add Category
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#/cart">
                            <Card.Img
                                style={{ width: "25px" }}
                                src="https://cdn-icons-png.flaticon.com/512/6948/6948348.png"
                            ></Card.Img>Cart
                        </Nav.Link>
                        <Nav.Link href="#/purchases">My Purcheses</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
